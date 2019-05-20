module.exports = function(net) {
  const os = require('os');
  const ifaces = os.networkInterfaces();
  let locatIp = '';
  if(!net){
    if(/^win/.test(os.platform())){
      net='本地连接'
    }else{
      net='eth0'
    }
  }
  if(ifaces[net]){
    for (let j = 0; j < ifaces[net].length; j++) {
      if (ifaces[net][j].family === 'IPv4') {
        locatIp = ifaces[net][j].address;
        break;
      }
    }
  }
  return locatIp;
}