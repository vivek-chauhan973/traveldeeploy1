import multer from 'multer';
import path from 'path';
import fs from 'fs';
import PackageState from '@/models/package/PackageState';
const uploadDirectory = path.join(process.cwd(), 'public/uploads/packagestate/poster');
// const packageStateUploadDir = path.join(uploadDirectory, 'poster');
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
const posterHandler = async (req, res) => {
    const { method } = req;
    const { id } = req.query;
    switch (method) {
        case 'POST':
            upload.single('file')(req, res, async (err) => {
                if (err instanceof multer.MulterError) {
                    return res.status(500).json({ error: 'File upload failed' });
                } else if (err) {
                    return res.status(500).json({ error: err.message || 'File upload failed' });
                }
                try {
                    const { posterTitle, posterAlt} = req.body;
                    const file = req.file;
                    let updateData = {
                        posterTitle,
                        posterAlt,
                        relatedId: id,
                        posterPath: file ? `/uploads/packagestate/poster/${file.filename}` : undefined,
                    };
                    if (!updateData.posterPath) delete updateData.posterPath;
                    if (file) {
                        const existingPackageState = await PackageState.findOne({ relatedId: id });
                        if (existingPackageState && existingPackageState.posterPath) {
                            const filePath = path.join(uploadDirectory, path.basename(existingPackageState.posterPath));
                            // console.log("file path is there -----> ",existingPackageState)
                            //console.log("fs.existsSync(filePath)----> ",fs.existsSync(filePath))
                            //console.log("uploadDirectory:", uploadDirectory);
                            // console.log("Poster basename:", path.basename(existingPackageState.posterPath));
                            // console.log("Full file path:", filePath);
                            if (fs.existsSync(filePath)) {
                                fs.unlinkSync(filePath);
                            }
                        }
                    }
                    let updatedPackageState = await PackageState.findOneAndUpdate(
                        { relatedId: id },
                        updateData,
                        { new: true, upsert: true }
                    );

                   

                    return res.status(200).json({ success: true, data: updatedPackageState });
                } catch (error) {
                   return  res.status(400).json({ success: false, message: error.message });
                }
            });
            break;

        default:
           return  res.status(400).json({ success: false, message: 'Invalid request method' });
            break;
    }
};

export default posterHandler;
export const config = {
    api: {
        bodyParser: false,
    },
};
