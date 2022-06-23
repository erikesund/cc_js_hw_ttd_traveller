const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let startLocations = [];
  this.journeys.map(journey => {
    startLocations.push(journey.startLocation);
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = [];
  this.journeys.map(journey => {
    endLocations.push(journey.endLocation);
  });
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > 1000)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) =>{
    return totalDistance + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.transport.filter(journey => journey.transport)
};


module.exports = Traveller;
