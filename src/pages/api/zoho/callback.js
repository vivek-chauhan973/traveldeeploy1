export default async function handler(req, res) {
    const { code } = req.query;
    
    if (!code) {
        return res.status(400).json({ error: "Authorization code missing" });
    }

    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/zoho/callback`;

    try {
        const tokenResponse = await fetch("https://accounts.zoho.com/oauth/v2/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                code: code
            })
        });

        const tokenData = await tokenResponse.json();
        
        if (tokenData.error) {
            return res.status(400).json({ error: tokenData.error });
        }

        return res.json(tokenData); // Contains access_token and refresh_token
    } catch (error) {
        return res.status(500).json({ error: "Failed to exchange code for token" });
    }
}
