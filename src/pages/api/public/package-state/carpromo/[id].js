import multer from 'multer';
import path from 'path';
import fs from 'fs';
import CarPackageState from '@/models/car-package/package/PackageState';

const uploadDirectory = path.join(process.cwd(), 'public/uploads');

// Ensure upload directory exists
const packageStateUploadDir = path.join(uploadDirectory, 'packagestateCarPromo');
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
                const packageState = await CarPackageState.findOne({ relatedId: id });
                if (!packageState) {
                    return res.status(404).json({ success: false, message: 'Package state not found' });
                }
                res.status(200).json({ success: true, data: packageState });
            } catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
            break;
        case "DELETE":
            try {
                const packageState = await CarPackageState.findOneAndDelete({_id: id });

                return res.status(204).json({message:"data deleted succcessfully"});
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
                    const { title, alt, faqData, editorContent,tableData,seoData,tableColumn ,selectType,selectedItem} = req.body;
                    const file = req.file;
                    //  console.log("req body 4554545545",req)
                    let updateData = {
                        title,
                        alt,
                        description: editorContent,
                        faq: JSON.parse(faqData).map(faq => ({ title: faq.title, information: faq.information })),
                        relatedTo: 'State',
                        tableData:JSON.parse(tableData),
                        seoField:JSON.parse(seoData),
                        tableColumn:JSON.parse(tableColumn),
                        relatedId: id,
                        selectType:selectType,
                        selectedItem:selectedItem,
                        image: file ? `/uploads/packagestateCarPromo/${file.filename}` : undefined,
                    };

                    if (!updateData.image) delete updateData.image;

                    let updatedPackageState = await CarPackageState.findOneAndUpdate(
                        { relatedId: id },
                        updateData,
                        { new: true, upsert: true }
                    );

                    if (file) {
                        const existingPackageState = await CarPackageState.findOne({ relatedId: id });
                        if (existingPackageState && existingPackageState.image) {
                            const filePath = path.join(uploadDirectory, path.basename(existingPackageState.image));
                            if (fs.existsSync(filePath)) {
                                fs.unlinkSync(filePath);
                            }
                        }
                    }

                    res.status(200).json({ success: true, data: updatedPackageState });
                } catch (error) {
                    // console.log("hi")
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
