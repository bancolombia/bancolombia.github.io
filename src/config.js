 export const msalConfig = {
    auth: {
        clientId: "#{azure.cliend-id}#",
        authority: "https://login.microsoftonline.com/#{azure.tenant-id}#",
        redirectUri: "#{azure.redirect-uri}#", 
    },
    cache: {
        cacheLocation: "localStorage", 
        storeAuthStateInCookie: false, 
    }
};

export const loginRequest = {
    scopes: ["User.Read"], 
};