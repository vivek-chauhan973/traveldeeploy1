export default async function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        return res.status(400).json({ error: "Missing authorization code" });
    }
console.log("code is here -----> ",code)
    try {
        const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                client_id: process.env.ZOHO_CLIENT_ID,
                client_secret: process.env.ZOHO_CLIENT_SECRET,
                code,
                redirect_uri: process.env.ZOHO_REDIRECT_URI,
                grant_type: "authorization_code",
            }),
        });

        const data = await response.json();

        if (data.access_token) {
            console.log("✅ Zoho Access Token:", data.access_token);
            console.log("🔄 Zoho Refresh Token:", data.refresh_token);
            res.status(200).json({ message: "Zoho Authentication Successful", tokens: data });
        } else {
            console.error("❌ Error fetching Zoho Tokens:", data);
            res.status(400).json({ error: "Failed to retrieve access token", details: data });
        }
    } catch (error) {
        console.error("❌ Server Error:", error);
        res.status(500).json({ error: "Zoho Authentication Failed" });
    }
}
