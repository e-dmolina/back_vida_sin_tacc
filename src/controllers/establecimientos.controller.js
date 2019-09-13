const establecimientosCtrl = {};

const Establecimiento = require('../models/Establecimiento');

establecimientosCtrl.getEstablecimientos = async (req, res) => { 
    
        const lstEstablecimientos = await Establecimiento.find();
        res.json(lstEstablecimientos);     
}

establecimientosCtrl.postEstablecimiento = async (req, res) => {
    const { nombre, direccion, lat, lng, descripcion, rubro} = req.body;
    const newEstablecimiento = new Establecimiento({
        nombre,
        direccion,
        lat,
        lng,
        descripcion,
        rubro
    });
    await newEstablecimiento.save();
    res.json('establecimiento creado');
}

establecimientosCtrl.getEstablecimiento = async (req, res) => {
    const id = req.params.id;
    const estabXId = await Establecimiento.findById(id);
    res.json(estabXId);
}

establecimientosCtrl.getEstXRubro = async (req, res) => {
    const Rubro = req.params.id;
    const estXrubro = await Establecimiento.find({rubro: Rubro});
    res.json(estXrubro);
}

establecimientosCtrl.putEstablecimiento = async (req, res) => {
    const {
        nombre,
        direccion,
        lat,
        lng,
        descripcion,
        rubro
    } = req.body;
    await Establecimiento.findByIdAndUpdate(req.params.id, {
        nombre,
        direccion,
        lat,
        lng,
        descripcion,
        rubro
    });
    res.json({message:'PUT - updated Establesimiento'});
}

establecimientosCtrl.deleteEstablecimiento = async (req, res) => {
    const id = req.params.id;
    await Establecimiento.findOneAndDelete(id);
    res.send('establecimiento eliminado');
}

module.exports = establecimientosCtrl;