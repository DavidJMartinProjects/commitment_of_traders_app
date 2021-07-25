export const environment = {
  production: true,
  serverUrl: 'localhost:8080',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:81/auth/',
    // Realm
    realm: 'cot-realm',
    clientId: 'angular-frontend',
  },
};