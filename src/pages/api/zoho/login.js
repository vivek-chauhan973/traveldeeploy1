export default async function handler(req, res) {
    const clientId = process.env.ZOHO_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/zoho/callback`;
    const scope = "ZohoCRM.modules.ALL"; // Adjust scope as needed

    const authUrl = `https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&access_type=offline&prompt=consent`;

    return res.redirect(authUrl); // Redirect user to Zoho login
}
