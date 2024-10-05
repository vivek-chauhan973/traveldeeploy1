import multer from 'multer';
import path from 'path';
import fs from 'fs';
import PackageState from '@/models/package/PackageState';

const uploadDirectory = path.join(process.cwd(), 'public/uploads/packagestate');

// Ensure upload directory exists
const packageStateUploadDir = path.join(uploadDirectory, 'poster');
if (!fs.existsSync(packageStateUploadDir)) {
    fs.mkdirSync(packageStateUploadDir, { recursive: true });
}
//  console.log("packageStateUploadDi",packageStateUploadDir);
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



const posterHandler = async (req, res) => {
    const { method } = req;
    const { id } = req.query;
console.log("id ------------>  ",id)
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
                // console.log("req body 4554545545",req)
                try {
                    const { posterTitle, psterAlt} = req.body;
                    const file = req.file;
                     console.log("req body 4554545545",file)
                    let updateData = {
                        posterTitle,
                        psterAlt,
                        relatedId: id,
                        posterPath: file ? `/uploads/packagestate/poster/${file.filename}` : undefined,
                    };

                    if (!updateData.posterPath) delete updateData.posterPath;

                    let updatedPackageState = await PackageState.findOneAndUpdate(
                        { relatedId: id },
                        updateData,
                        { new: true, upsert: true }
                    );

                    if (file) {
                        const existingPackageState = await PackageState.findOne({ relatedId: id });
                        if (existingPackageState && existingPackageState.posterPath) {
                            const filePath = path.join(uploadDirectory, path.basename(existingPackageState.posterPath));
                            if (fs.existsSync(filePath)) {
                                fs.unlinkSync(filePath);
                            }
                        }
                    }

                    return res.status(200).json({ success: true, data: updatedPackageState });
                } catch (error) {
                    // console.log("hi")
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
        bodyParser: false, // Disable default bodyParser to handle FormData
    },
};
