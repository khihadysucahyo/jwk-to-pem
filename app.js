require('dotenv').config()
const jwt = require('jsonwebtoken')
const token = process.env.TOKEN_EXAMPLE

// decode base64 to RSA string
const keycloakPem = Buffer.from(process.env.KEYCLOAK_PEM, 'base64').toString()
const jwtConfig = { algorithms: ['RS256'] } 

try {
    const decoded = jwt.verify(token, keycloakPem, jwtConfig)
    console.log(decoded)
} catch(err) {
    console.log(err)
}
