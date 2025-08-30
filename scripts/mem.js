/**
 * Prints current Node.js processes with PID and memory (RSS in MB).
 * Usage: npm run mem
 */
const psList = require('ps-list');

(async () => {
  const list = await psList();
  const nodes = list.filter(p => /node(\.exe)?$/i.test(p.name));
  if (!nodes.length) {
    console.log('No active Node processes.');
    return;
  }
  console.log('PID    MEM(MB)   CPU%   NAME           CMD');
  for (const p of nodes) {
    const mb = (p.memory / 1024 / 1024).toFixed(0).toString().padStart(6, ' ');
    const cpu = (p.cpu || 0).toFixed(1).toString().padStart(5, ' ');
    const pid = String(p.pid).padStart(6, ' ');
    const name = (p.name || '').padEnd(14, ' ').slice(0,14);
    const cmd = (p.cmd || '').slice(0,70);
    console.log(`${pid}  ${mb}   ${cpu}   ${name} ${cmd}`);
  }
})();
