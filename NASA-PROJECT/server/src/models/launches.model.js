

const launches = new Map();

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

launches.set(launch.flightNumber, launch);


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

function getAllLaunches(){
    return Array.from(launches.values());
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