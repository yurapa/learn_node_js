var os = require('os');

// The OS module provides information about the computer's operating system.

console.log("Platform: " + os.platform());
console.log("Name of the operating system: " + os.type());
console.log("Operating system CPU architecture: " + os.arch());
console.log("OS Version:", os.version());

console.log("Total memory / Free memory : " + os.totalmem() + " / " + os.freemem());

console.log("Hostname of the operating system: " + os.hostname());
console.log("Returns an array containing the load averages, (1, 5, and 15 minutes): " + os.loadavg());
console.log("Returns information about the operating system's release: " + os.release());
console.log("Returns the operating system's default directory for temporary files: " + os.tmpdir());

console.log("Uptime of the operating system, in seconds: " + os.uptime());

console.log("Network interfaces that has a network address: ", os.networkInterfaces());
console.log("Computer's CPUs: ", os.cpus());
console.log("Current user: ", os.userInfo());
