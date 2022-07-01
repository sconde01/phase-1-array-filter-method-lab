const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    return drivers.filter(driverName => driverName === name || driverName === name.toLowerCase())
     
    
}

function fuzzyMatch(drivers, begOfName){
    return drivers.filter(driver1 => driver1.startsWith (begOfName));
}

function matchName(drivers, name){
    return drivers.filter(drivers => name === drivers.name)

}