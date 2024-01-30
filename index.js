// Internal helper functions
function feetToMeters(feet) {
    return feet * 0.3048;
  }
  
  function metersToFeet(meters) {
    return meters * 3.28084;
  }
  
  function milesToKm(miles) {
    return miles * 1.60934;
  }
  
  function kmToMiles(km) {
    return km * 0.621371;
  }
  
  // Main calculate function
  function calculate(unit, value) {
    switch (unit) {
      case 'feet':
        return feetToMeters(value);
      case 'meters':
        return metersToFeet(value);
      case 'miles':
        return milesToKm(value);
      case 'kilometers':
        return kmToMiles(value);
    }
  }
  
exports.calculateR = (req, res) => {
  let unit = req.query.unit;
  let value = req.query.value;
  res.status(200).send(`${calculate(unit, value)}`)
};