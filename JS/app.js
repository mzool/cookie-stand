'use strict';

var Seattle = {
    min: 23,
    max: 65,
    avg: 6.3,

    randomCustomorsPerHour: function (min, max) {
        return Math.random() * (this.max - this.min) + this.min;


    },
    /*avgCookiePerHour: function (average) {
        return Math.random() * (this.avg) + this.avg;
    },*/
    array1: [],
};
//document.write(Seattle.randomCustomorsPerHour());



var j = 6;
var time = 'am';
var counter = 0;

for (var i = 0; i < 15; i++) {
    var averageSalesPerHour = Seattle.randomCustomorsPerHour() * Seattle.avg;
    var newLi = document.createElement('li');
    var liIndex = document.createElement('a');
    if (j === 12) { var time = 'pm'; }
    if (j === 20) { break; }
    var AtagIndix = document.createTextNode(j + '' + time + ' : ' + averageSalesPerHour);
    liIndex.appendChild(AtagIndix);
    newLi.appendChild(liIndex);
    var final = document.getElementById("maindiv");
    final.appendChild(newLi);
    j++;
    counter += averageSalesPerHour;
    Seattle.array1.push(averageSalesPerHour);
}
document.write('Total:  ' + counter);
console.log(Seattle.array1);



var Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    randomCustomorsPerHour: function (min, max) {
        return Math.random() * (this.max - this.min) + this.min;
    },
    array1: [],
};

for (var i = 0; i < 15; i++) {
    var averageSalesPerHour = Tokyo.randomCustomorsPerHour() * Tokyo.avg;
    var newLi = document.createElement('li');
    var liIndex = document.createElement('a');
    if (j === 12) { var time = 'pm'; }
    if (j === 20) { break; }
    var AtagIndix = document.createTextNode(j + '' + time + ' : ' + averageSalesPerHour);
    liIndex.appendChild(AtagIndix);
    newLi.appendChild(liIndex);
    var final = document.getElementById("second");
    final.appendChild(newLi);
    j++;
    counter += averageSalesPerHour;
    Seattle.array1.push(averageSalesPerHour);
}
document.write('Total:  ' + counter);
console.log(Tokyo.array1);







    var Dubai = {
        min: 11,
        max: 38,
        avg: 3.7,


    };
    var Paris = {
        min: 20,
        max: 38,
        avg: 2.3,


    };
    var Lima = {
        min: 2,
        max: 16,
        avg: 4.6,


    };