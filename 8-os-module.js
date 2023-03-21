const os = require ('os')

//info about the user 

const user = os.userInfo()
console.log(user);
//metod returns the system uptime in sec

console.log(`The system up time is ${os.uptime} secounds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);