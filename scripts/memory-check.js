const { exec } = require("child_process");
console.log("Checking Node.js processes (memory usage)...\n");
if (process.platform === "win32") {
  exec('tasklist /FI "IMAGENAME eq node.exe"', (err, out) => {
    if (err) return console.error(err);
    console.log(out);
  });
} else {
  exec("ps -o pid,comm,rss -A | grep node", (err, out) => {
    if (err) return console.error(err);
    console.log(out);
  });
}
