import multer from 'multer';
import path from 'path';
import fs from 'fs';
import PackageState from '@/models/package/PackageState';

const uploadDirectory = path.join(process.cwd(), 'public/uploads');

// Ensure upload directory exists
const packageStateUploadDir = path.join(uploadDirectory, 'packagestate');
if (!fs.existsSync(packageStateUploadDir)) {
    fs.mkdirSync(packageStateUploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, packageStateUploadDir);
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
    const { id } = req.query;

    switch (method) {
        case 'GET':
            try {
                const packageState = await PackageState.findOne({ relatedId: id });
                if (!packageState) {
                    return res.status(404).json({ success: false, message: 'Package state not found' });
                }
                res.status(200).json({ success: true, data: packageState });
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;

        case 'POST':
            upload.single('file')(req, res, async (err) => {
                if (err instanceof multer.MulterError) {
                    return res.status(500).json({ error: 'File upload failed' });
                } else if (err) {
                    return res.status(500).json({ error: err.message || 'File upload failed' });
                }

                try {
                    const { title, alt, faqData, editorContent } = req.body;
                    const file = req.file;

                    let updateData = {
                        title,
                        alt,
                        description: editorContent,
                        faq: JSON.parse(faqData).map(faq => ({ title: faq.title, information: faq.information })),
                        relatedTo: 'State',
                        relatedId: id,
                        image: file ? `/uploads/packagestate/${file.filename}` : undefined,
                    };

                    if (!updateData.image) delete updateData.image;

                    let updatedPackageState = await PackageState.findOneAndUpdate(
                        { relatedId: id },
                        updateData,
                        { new: true, upsert: true }
                    );

                    if (file) {
                        const existingPackageState = await PackageState.findOne({ relatedId: id });
                        if (existingPackageState && existingPackageState.image) {
                            const filePath = path.join(uploadDirectory, path.basename(existingPackageState.image));
                            if (fs.existsSync(filePath)) {
                                fs.unlinkSync(filePath);
                            }
                        }
                    }

                    res.status(200).json({ success: true, data: updatedPackageState });
                } catch (error) {
                    res.status(400).json({ success: false, message: error.message });
                }
            });
            break;

        default:
            res.status(400).json({ success: false, message: 'Invalid request method' });
            break;
    }
};

export default handler;
