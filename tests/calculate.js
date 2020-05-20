const glob = require("glob")
const fs = require("fs")
const fileArray = glob.sync("./test-results/*.pid.txt")

let sum = 0

fileArray.forEach(function (file, index) {
  const data = fs.readFileSync(file, "utf8");

  sum += parseInt(data)


  console.log({ result: parseInt(data) });
})
console.log("Total: ", sum)


