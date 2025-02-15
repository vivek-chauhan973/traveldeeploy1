export async function getZohoTokens(authToken) {
    const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: process.env.ZOHO_CLIENT_ID,
            client_secret: process.env.ZOHO_CLIENT_SECRET,
            code: authToken, // One-time Auth Token from Zoho API Console
            redirect_uri: process.env.ZOHO_REDIRECT_URI,
            grant_type: "authorization_code",
        }),
    });

    const data = await response.json();
    // console.log("zoho auth data is as -----> ",data)
    if (data.access_token) {
        console.log("Zoho Access Token:", data.access_token);
        console.log("Zoho Refresh Token:", data.refresh_token);
        return data;
    } else {
        console.error("Error fetching Zoho Tokens:", data);
        throw new Error("Failed to retrieve access token");
    }
}
export async function refreshZohoToken(refreshToken) {
    const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: process.env.ZOHO_CLIENT_ID,
            client_secret: process.env.ZOHO_CLIENT_SECRET,
            refresh_token: refreshToken,
            grant_type: "refresh_token",
        }),
    });

    const data = await response.json();
    // console.log("zoho auth data is as -----> ",data)
    if (data.access_token) {
        // console.log("New Zoho Access Token:", data.access_token);
        return data.access_token;
    } else {
        // console.error("Error refreshing token:", data);
        throw new Error("Failed to refresh access token");
    }
}
