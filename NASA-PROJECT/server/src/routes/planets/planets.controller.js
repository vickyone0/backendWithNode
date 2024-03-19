
const planetModel = require('../../models/planets.model');
function httpGetAllPlanets(req,res) {
    return res.json(planetModel.getAllPlanets());
}


module.exports = {
    httpGetAllPlanets
}