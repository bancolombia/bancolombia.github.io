import { PublicClientApplication } from '@azure/msal-browser';
import { msalInstance } from './msalconfig';
import { msalConfig } from './config';

jest.mock('@azure/msal-browser', () => {
    return {
        PublicClientApplication: jest.fn()
    };
});

describe('msalInstance', () => {
    test('should be an instance of PublicClientApplication', () => {
        expect(PublicClientApplication).toHaveBeenCalledWith(msalConfig);
        expect(msalInstance).toBeInstanceOf(PublicClientApplication);
    });

    test('should be called with correct config', () => {
        expect(PublicClientApplication).toHaveBeenCalledWith(msalConfig);
    });
});