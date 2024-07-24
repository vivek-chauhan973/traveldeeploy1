// pages/api/upload.js
import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import nextConnect from "next-connect";

const writeFileAsync = promisify(fs.writeFile);

const handler = nextConnect();

handler.post((req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './public/uploads';
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).json({ error: 'Error parsing the files' });
    }

    try {
      
      const file = files.file;
      const data = fs.readFileSync(file.filepath);
      const filePath = path.join(form.uploadDir, file.originalFilename);
      await writeFileAsync(filePath, data);
      res.status(200).json({ message: 'File uploaded successfully', path: `/uploads/${file.originalFilename}` });
    } catch (uploadError) {
      console.error("File upload error:", uploadError);
      res.status(500).json({ error: 'Error saving the file' });
    }
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
