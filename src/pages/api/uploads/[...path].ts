import { join } from 'path';
import { statSync, createReadStream } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { path = [] } = req.query;

    const filePath = join(process.cwd(), 'uploads', ...(Array.isArray(path) ? path : [path]));

    try {
        const stat = statSync(filePath);
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Content-Length', stat.size);
        const fileStream = createReadStream(filePath);
        fileStream.pipe(res);
    } catch (err) {
        res.status(404).json({ error: 'File not found' });
    }
}
