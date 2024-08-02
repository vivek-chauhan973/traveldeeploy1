import multer from 'multer';
import path from 'path';
import fs from 'fs';
import CarPromo from '@/models/car-package/carpromo';

const uploadDirectory = 'public/uploads/cars/carpromo';

// Ensure upload directory exists
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const fileName = `${file.fieldname}-${Date.now()}${ext}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage });

export const config = {
    api: {
        bodyParser: false, // Disable default bodyParser to handle FormData
    },
};

const handler = async (req, res) => {
    const { method } = req;

    if (method === 'POST') {
        upload.single('file')(req, res, async (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            try {
                // File upload successful, you can handle further processing here
                const filePath = path.join(uploadDirectory, req.file.filename);
                const { stateId, faqData, editorContent } = req.body;

                // Ensure `faqData` is parsed correctly if it's a string
                const faq = JSON.parse(faqData);

                const data = {
                    stateId,
                    promoText: editorContent,
                    imagepath: filePath,
                    faq,
                };

                const postedData = await CarPromo.create(data);
                if (postedData) {
                    return res.status(201).json({ message: 'File uploaded successfully.', filePath });
                } else {
                    return res.status(500).json({ message: 'Something went wrong.' });
                }
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
