/**
 * custom http logger
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {function} next 
 */

const logger = ( req, res, next ) => {

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    console.log(`${ip}: ${req.method} ${req.originalUrl}`);
    
    console.log(`\nHeaders:`);
    printAllProps( req.headers );

    if ( Object.keys( req.params ).length > 0 ) {
        console.log(`\nParams:`);
        printAllProps( req.params );
    }

    console.log(`\n\n`);

    next();
}

// log all key => value pairs of an object tabbed one space in
const printAllProps = function( object ){
    Object.keys( object ).forEach( key => {
        console.log(`\t${key}: ${object[key]}`);
    });
}

module.exports = logger;