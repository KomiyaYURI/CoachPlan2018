'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  const steps = Math.ceil(number / interval)
  const ret = [number];
  for (let step = 1; step <= steps; step++) {
    let n = number - interval * step;
    ret.push(parseFloat(n.toFixed(1)))
  }
  return ret
}

module.exports = spilt_to_zero;
