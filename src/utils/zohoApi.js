import { refreshZohoToken } from "./zohoAuth";


export async function fetchZohoData(accessToken, refreshToken) {
    let token = accessToken;

    const response = await fetch("https://www.zohoapis.in/crm/v2/Leads", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (response.status === 401) {
        // console.log("Access token expired, refreshing token...");
        token = await refreshZohoToken(refreshToken);

        // Retry the API call with the new access token
        return fetchZohoData(token, refreshToken);
    }

    return await response.json();
}
