var ftoc = function(temperature) {
  temperature = (temperature - 32) * (5/9);
  temperature = Math.round(temperature * 10)/10;
  return temperature;
}

var ctof = function(temperature) {
  temperature = temperature * (9/5) + 32;
  temperature = Math.round(temperature * 10)/10;
  return temperature;
}

module.exports = {
  ftoc,
  ctof
}
