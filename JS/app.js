'use strict';
function Location(minimum, maximum, average) {
    this.minPerCust = minimum;
    this.maxPerCust = maximum;
    this.avgCust = average;
    this.AvgMultiblyArray = [];
    this.customorPerHourReturn = [];
    this.counter = 0;
}
var openingHours = [6 + 'am', 7 + 'am', 8 + 'am', 9 + 'am', 10 + 'am', 11 + 'am', 12 + 'pm', 1 + 'pm', 2 + 'pm', 3 + 'pm', 4 + 'pm', 5 + 'pm', 6 + 'pm', 7 + 'pm', 'Total']

var namesRow = ['Seattle', 'Tokyo', 'Dubai', 'paris', 'Lima', 'Total'];

Location.prototype.randomCustomer = function () {
    for (var i = 0; i < 14; i++) {
        this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.maxPerCust - this.minPerCust) + this.minPerCust);
    }
}
Location.prototype.averageSalesPerHour = function () {
    var counter = 0;
    for (var i = 0; i < this.customorPerHourReturn.length; i++) {
        this.AvgMultiblyArray[i] = Math.ceil(this.avgCust * this.customorPerHourReturn[i])
        this.counter += this.AvgMultiblyArray[i];
    }
};
var seattle = new Location(23, 65, 6.3);
var tokyo = new Location(3, 24, 1.2);
var dubai = new Location(11, 38, 3.7);
var paris = new Location(20, 38, 2.3);
var lima = new Location(2, 16, 4.6);
seattle.randomCustomer();
seattle.averageSalesPerHour();
// console.log(seattle.AvgMultiblyArray);
// console.log(seattle.customorPerHourReturn);
tokyo.randomCustomer();
tokyo.averageSalesPerHour();
// console.log(tokyo.AvgMultiblyArray);
dubai.randomCustomer();
dubai.averageSalesPerHour();
// console.log(dubai.AvgMultiblyArray);
paris.randomCustomer();
paris.averageSalesPerHour();
// console.log(paris.AvgMultiblyArray);
lima.randomCustomer();
lima.averageSalesPerHour();
// console.log(lima.AvgMultiblyArray);
///// creating table///////
var tableParent = document.getElementById('maindiv');
var table = document.createElement('table');
tableParent.appendChild(table);
firstRow();
function firstRow() {/// creating empty cell////
    var row = document.createElement('tr');
    table.appendChild(row);
    row.id='rowempty';
    var emptyCell = document.createElement('td');
    emptyCell.id='null';
    var embty = document.createTextNode('  ');
    row.appendChild(emptyCell);
    emptyCell.appendChild(embty);
    ////creating header////
    for (var i = 0; i < openingHours.length; i++) {
        var tableHeader = document.createElement('th');
        row.appendChild(tableHeader);
        tableHeader.textContent = openingHours[i];
    }
}
/////// creating rows /////
var row1;
var counterTotal = 0;
var numberOfRows = 0;
var totalOfTotal = Array(14).fill(0);
var counterOfAllRow = 0;
creatingRows(1, 'Seattle');
rowsMaker(seattle);
function creatingRows(numberOfRows, headerName) {
    row1 = document.createElement('tr');
    table.appendChild(row1);
    var header = document.createElement('th');
    header.textContent = headerName;
    row1.appendChild(header);
}
function rowsMaker(input) {
    for (var i = 0; i < input.AvgMultiblyArray.length; i++) {
        var cell = document.createElement('td');
        row1.appendChild(cell);
        var cellIndex = document.createTextNode(input.AvgMultiblyArray[i]);
        cell.appendChild(cellIndex);
        counterTotal += input.AvgMultiblyArray[i];
        totalOfTotal[i] += input.AvgMultiblyArray[i];
    }
    var cell = document.createElement('td');
    row1.appendChild(cell);
    var cellIndex = document.createTextNode(counterTotal);
    cell.appendChild(cellIndex);
    numberOfRows++;
    counterOfAllRow += counterTotal;
}
/////// //////////
creatingRows(1, 'Tokyo');
rowsMaker(tokyo);
creatingRows(1, 'Dubai');
rowsMaker(dubai);
creatingRows(1, 'Paris');
rowsMaker(paris);
creatingRows(1, 'Lima');
rowsMaker(lima);
console.log(counterOfAllRow);
///////// total of total///////
var Total = 0;
var row2 = document.createElement('tr');
table.appendChild(row2);
var totalCell = document.createElement('th');
var totalCellIndex = document.createTextNode('Total');
row2.appendChild(totalCellIndex);
for (var i = 0; i < seattle.AvgMultiblyArray.length; i++) {
    var cell = document.createElement('td');
    row2.appendChild(cell);
    var cellIndex = document.createTextNode(totalOfTotal[i]);
    cell.appendChild(cellIndex);
    Total += totalOfTotal[i];
}
var lastCell = document.createElement('td');
row2.appendChild(lastCell);
var lastIndex = document.createTextNode(counterOfAllRow);
lastCell.appendChild(lastIndex);

var place;
var newLocation = document.getElementById('form2');
newLocation.addEventListener('submit', newOne)
function newOne (event){
    event. preventDefault() ;
   place= event.target.location.value;
   alert(place);
}