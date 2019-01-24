/**
 * custom http logger
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {function} next 
 */

const logger = ( req, res, next ) => {
    
    console.log(`${req.method} ${req.originalUrl}`);

    next();
}

module.exports = logger;