const { Router } = require('express');
const router = Router();
const { getEstablecimientos,
        getEstXRubro,
        postEstablecimiento,
        getEstablecimiento, 
        putEstablecimiento, 
        deleteEstablecimiento } = require('../controllers/establecimientos.controller');

router.route('/')
    .get(getEstablecimientos)
    .post(postEstablecimiento);

router.route('/:id')
    .get(getEstablecimiento)
    .put(putEstablecimiento)
    .delete(deleteEstablecimiento);

router.route('/filtrar/:id')
    .get(getEstXRubro);
module.exports = router;