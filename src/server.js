const express = require('express');
const logger = require('./logger.js');
const port = process.env.PORT || 3000;

const app = new express();

app.use( logger );

app.listen( port, () => {
    console.log(`Sever listening on port ${port}.\nAccess at http://localhost:${port}`);
})

