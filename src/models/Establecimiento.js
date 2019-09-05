const { Schema, model } = require('mongoose');

const establecimientoSchema = new Schema({
    nombre: {
        type: String,
        required: true},
    direccion: {
        type: String,
        required: true},
    lat: {
        type: Number,
        required: true},
    lng: {
        type: Number,
        required: true},
    descripcion: {
        type: String,
        required: true},
    rubro: {
        type: String,
        required: true}
}, {
    timestamps: true
});

module.exports = model('Establecimiento', establecimientoSchema);