export const auth0Config = {
    domain: 'dev-gh-da2ac.auth0.com',
    clientID: 'GmLLa7UAPGhpvjiaGWiOeUn3i6zLZOAb',
    // make sure this line is contains the port: 8080
    redirectUri: 'http://localhost:3000/callback',
    // we will use the api/v2/ to access the user information as payload
    audience: 'https://dev-gh-da2ac.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile'
  }