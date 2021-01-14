'use strict';
var locationInserted;
var locationsTable = document.getElementById('form');
locationsTable.addEventListener('submit', newLocation);
function newLocation(event) {
    event.preventDefault();
    locationInserted = event.target.location.value;
    console.log(locationInserted);
    var getTable2 = document.getElementById('td2');
    var rowInserted = document.createElement('tr');
    getTable2.appendChild(rowInserted);
    rowInserted.textContent =  locationInserted + '...';
    console.log(rowInserted);
}
newLocation();
