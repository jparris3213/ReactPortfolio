const { runHttpQuery } = require('apollo-server-core');
const jwt = require('jsonwebtoken');

const secrete = 'secretagentman';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || runHttpQuery.query.token || req.headers.authorizatoin;

        if (req.headers.authorizatoin) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        
        try {
            const {data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid Token');
        }

        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, {expiresIn: expiration});
    },
};