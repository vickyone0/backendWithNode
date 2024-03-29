const launchModel = require('../../models/launches.model')


async function httpGetAllLaunches(req,res) {
    return res.status(200).json(await launchModel.getAllLaunches());
}

function httpAddNewLaunch(req,res) {
    
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target ){
        return res.status(400).json(
            {
                error: 'Missing required fields'
            }
        )
    }

    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json(
            {
                error: 'Invalid date'
            }
        )

    }

    launchModel.addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req,res) {

    const launchId = Number(req.params.id); 

    if(!launchModel.existsLaunchWithId(launchId)){
    return res.status(404).json({
        error: 'Launch not found'
    });
}
    const aborted = launchModel.abortLaunchById(launchId);
    return res.status(200).json(aborted);


}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}