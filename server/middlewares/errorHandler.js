//error handler here


function errorHandler(err, req, res, next){

    let errors = []
    let statusCode = 500

    console.log(err)

    switch(err.name){
        case 'SequelizeUniqueConstraintError':
            statusCode = 400
            errors.push(err.errors[0].message)
            break
        case 'SequelizeValidationError':
            statusCode = 400
            errors.push(err.errors[0].message)
            break
        case 'AUTHENTICATION_FAILED':
            statusCode = 401
            errors.push("FAILED TO AUTHENTICATE")
            break
        case 'JsonWebTokenError':
            statusCode = 401
            errors.push("FAILED TO AUTHENTICATE")
            break
        case 'FORBIDDEN':
            statusCode = 403
            errors.push("FAILED TO AUTHORIZE")
            break
        case 'DATA_NOT_FOUND':
            statusCode = 404
            errors.push("DATA NOT FOUND")
            break
        default:
            errors.push(err.msg)
    }

    res.status(statusCode).json({ errors })

}

module.exports = errorHandler