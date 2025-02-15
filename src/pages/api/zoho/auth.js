import { getZohoTokens } from "@/utils/zohoAuth";
export default async function handler(req, res) {
    try {
        // Fetch Access & Refresh Tokens
        const authToken = process.env.ZOHO_AUTH_TOKEN; // Set in `.env.local`
        const tokens = await getZohoTokens(authToken);

        res.status(200).json({ message: "Authenticated with Zoho", tokens });
    } catch (error) {
        res.status(500).json({ message: "Zoho Authentication Failed",error });
    }
}
