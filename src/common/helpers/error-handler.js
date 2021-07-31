const fs = require('fs');
const path = require('path');



function responde(isError , isErrorLogged , data = null, errorCode = null , errorDetails = null , optionalMessage = null , client = null , location = null){
    if(isError && !isErrorLogged){
        logError(isError , isErrorLogged , errorCode , errorDetails , optionalMessage , client , location);
        return {
            error: isError, 
            code: errorCode,
            message: optionalMessage,
            details: errorDetails,
            data: data,
            _l: true
        }
    }
    else 
        return {
            error: isError, 
            code: errorCode,
            message: optionalMessage,
            details: errorDetails,
            data: data,
            _l: isErrorLogged // Defines id the error has been already logged to the server.
        }
};


function logError(isError , isErrorLogged , errorCode , errorDetails , optionalMessage , client , location){
    const errorMessage = `
        =============== ERROR STARTED AT ${new Date().toLocaleDateString() } =======================
        Error with code : ${errorCode} has been occured at the ${location}.
        Error details (Programming exception) as following ==> ${errorDetails}.
        Additional Message from App server as following ==> ${optionalMessage}.
        Client throwing it is ==> ${client}.
        =================================== ERROR ENDS ============================================= 
    `;


    fs.appendFile(path.join('src/logs/error.txt'), errorMessage , function (err, data) {
        if(err)
            console.log("Error has been occured while trying to log! Suah a shame! 🖐");
        else 
            console.log("Error has been logged!");
    });
};


const actions = {
    responde,
    logError
};

export default actions;