if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const hardCodedToken = process.env.BEARER_TOKEN;

async function authMiddleWare(req, res, next) {
  try {
    const { authorization = '' } = req.headers;
    const [, token] = authorization.split(' '); //  ['bearer', 'token']
    if (token === hardCodedToken) return next();
    throw new Error('errorRRR');
  } catch (error) {
    return res.status(401).send({
      badToken: true,
    });
  }
}

module.exports = authMiddleWare;
