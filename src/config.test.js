import { msalConfig, loginRequest } from './config';

describe('msalConfig', () => {
    test('should have auth configuration', () => {
        expect(msalConfig).toHaveProperty('auth');
        expect(msalConfig.auth).toHaveProperty('clientId');
        expect(msalConfig.auth).toHaveProperty('authority');
        expect(msalConfig.auth).toHaveProperty('redirectUri');
    });

    test('should have correct auth values', () => {
        expect(msalConfig.auth.clientId).toBe("#{azure.cliend-id}#");
        expect(msalConfig.auth.authority).toBe("https://login.microsoftonline.com/#{azure.tenant-id}#");
        expect(msalConfig.auth.redirectUri).toBe("#{azure.redirect-uri}#");
    });

    test('should have cache configuration', () => {
        expect(msalConfig).toHaveProperty('cache');
        expect(msalConfig.cache).toHaveProperty('cacheLocation');
        expect(msalConfig.cache).toHaveProperty('storeAuthStateInCookie');
    });

    test('should have correct cache values', () => {
        expect(msalConfig.cache.cacheLocation).toBe("localStorage");
        expect(msalConfig.cache.storeAuthStateInCookie).toBe(false);
    });
});

describe('loginRequest', () => {
    test('should have scopes configuration', () => {
        expect(loginRequest).toHaveProperty('scopes');
    });

    test('should have correct scopes values', () => {
        expect(loginRequest.scopes).toContain("User.Read");
    });
});