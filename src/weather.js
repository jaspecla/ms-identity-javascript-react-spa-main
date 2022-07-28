import { graphConfig, weatherConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */
export async function callWeatherApi(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(weatherConfig.weatherEndpoint, options)
    .then(response => response.json())
    .catch(error => console.log(error));
}
