const path = require('path');
const fs = require('fs');

let startUsage = process.cpuUsage()
console.log("START:", process.pid, process.argv, startUsage)

const filePath = path.join('/proc' , process.pid.toString(), 'stat');

readFile(filePath)

process.on('exit', () => {
  const endInfo = {pid: process.pid, argv: process.argv, cpu: process.cpuUsage()}

  const data = String(endInfo.cpu.user + endInfo.cpu.system)

  fs.writeFileSync(path.join(__dirname, "test-results" , endInfo.pid + '.pid.txt'), data, {encoding: "utf8"});

  console.log("END:", endInfo)
});

function readFile(filePath) {
  console.log("FilePath-PID:", filePath)

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
      console.log('received data: ' + data);
    } else {
      console.log(err);
    }
  });
}
