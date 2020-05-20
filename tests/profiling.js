
let startUsage = process.cpuUsage()
console.log("START:", process.pid, process.argv, startUsage)


process.on('exit', () => {
  const endInfo = {pid: process.pid, argv: process.argv, cpu: process.cpuUsage()}
  const fs = require('fs');
  const path = require('path');

  const data = String(endInfo.cpu.user + endInfo.cpu.system)

  fs.writeFileSync(path.join(__dirname, "test-results" , endInfo.pid + '.pid.txt'), data, {encoding: "utf8"});

  console.log("END:", endInfo)
});
