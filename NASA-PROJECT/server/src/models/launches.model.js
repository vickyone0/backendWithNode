

const launchesDatabase = require('./launches.mongo');


let latestFlightNumber = 1;

const launch = {
    flightNumber: 1,
    mission:'',
    rocket:'',
    launchDate: new Date('march 13,2024'),
    target: 'Keplear-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

saveLaunch(launchesDatabase);


async function saveLaunch(launch) {
    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber,
    },launch,{
        upsert: true
    },);
    }

function addNewLaunch(launch) {
   
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch,{
            upcoming: true,
            success: true,
            customer: ['ZTM', 'NASA'],
            flightNumber: latestFlightNumber,
    }));
}

async function getAllLaunches(){
    return await launchesDatabase.find({}
        , {
            '-id': 0,'__v': 0
        });

}

function existsLaunchWithId(launchId){

    return launches.has(launchId);

}

function abortLaunchById(launchId){

    const aborted = launches.get(launchId);

    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}


module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}