
const planetModel = require('../../models/planets.model');
async function httpGetAllPlanets(req,res) {
    return res.json(await planetModel.getAllPlanets());
}


module.exports = {
    httpGetAllPlanets
}