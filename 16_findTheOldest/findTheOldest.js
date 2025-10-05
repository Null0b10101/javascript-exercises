const findTheOldest = function(peeps) {

    const oldest_srtd = peeps.map(
        (currentvalue) => 
            {
                let n = currentvalue.name;
                let birth = currentvalue.yearOfBirth;
                let death = currentvalue.yearOfDeath;
                
                if(death === undefined){
                    return 2025 - birth;
                } else {
                    return death - birth;
                }
            }
    )

    let value = null;
    let idx = 0;
    
    for(nr in oldest_srtd) {
        if(oldest_srtd[nr] > value) {
            idx = nr;
            value = oldest_srtd[nr];
        }
    }
    
    return peeps[idx];
};

    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

// Do not edit below this line
module.exports = findTheOldest;

