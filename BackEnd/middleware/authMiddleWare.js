const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (error, tokenDecodificado) => {
                if(error){
                    res.status(400).send("Acesso denegado");
                } else {
                    console.log(tokenDecodificado);
                    res.locals.user = tokenDecodificado;
                    next();
                }
            })
        } else {
            res.status(400).send("Acesso denegado");
        }

    next();
};

module.exports = {requireAuth}