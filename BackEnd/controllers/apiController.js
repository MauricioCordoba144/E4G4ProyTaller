module.exports.getTest = async (req,res) => {
    console.log("test");
    const {id} = res.locals.user;

    res.send("Texto de prueba recibido. Id usuario: " + id);
};