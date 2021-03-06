const Citas = require("../models/Citas");

module.exports.funcCitas = async (req,res) => {
    console.log("postcitas");
    const { fecha, horainicial, horafinal, disponible } = req.body;
    try{
        const citas = await Citas.create({fecha, horainicial, horafinal, disponible});
        res.status(200).json({id: citas._id, fecha, horainicial, horafinal});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

module.exports.eliminarCitas = async (req,res) => {
    console.log("eliminar citas");
    const _id = req.params.id;
    console.log(_id);   
    try{
        const citasactuales = await Citas.findByIdAndDelete({_id});
        if(!citasactuales){
            return res.status(400).json({
                mensaje: 'No se encontrĂ³ el id indicado',
                error
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un error",
            error
        });
    }
};
