'use strict';
/*var seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    AvgMultiblyArray: [],
    customorPerHourReturn: [],



    randomCustomorsPerHour: function (min, max) {
        for (var i = 0; i < 15; i++) {
            this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
        }
    },
    averageSalesPerHour: function () {
        for (var i = 0; i < this.customorPerHourReturn.length; i++) {
            this.AvgMultiblyArray[i] = Math.ceil(this.avg * this.customorPerHourReturn[i])
        }
    },

};
var heading =document.getElementById("maindiv");
var headElement = document.createElement("h1"); 
var headElementIndex=document.createTextNode('Seattle:');
headElement.appendChild(headElementIndex);
heading.appendChild(headElement);

seattle.randomCustomorsPerHour(seattle.min, seattle.max);
console.log(seattle.customorPerHourReturn);
seattle.averageSalesPerHour();
console.log(seattle.AvgMultiblyArray);
var j = 6;
var counter=0;
var counter2=1;
for (var i = 0; i < (seattle.AvgMultiblyArray.length - 1); i++) {
    timer = 'am';
    while (j>=13){var AtagIndix = document.createTextNode(counter2 + timer + ': ' + seattle.AvgMultiblyArray[i] + ' cookies');}
    if (j>= 12) { var timer = 'pm'; }
    var final = document.getElementById("maindiv");
    var newLi = document.createElement('li');
    var liIndex = document.createElement('a'); 
    var AtagIndix = document.createTextNode(j + timer + ': ' + seattle.AvgMultiblyArray[i] + ' cookies');
    liIndex.appendChild(AtagIndix);
    newLi.appendChild(liIndex);
    final.appendChild(newLi);
    j++;
     counter+=seattle.AvgMultiblyArray[i];
}
console.log(counter);
var total=document.getElementById("maindiv");
var totlLi= document.createElement('li');
var totlaLiIndex=document.createElement('a'); 
var totalLiAtag= document.createTextNode('Total: '+counter+' cookies');
totlaLiIndex.appendChild(totalLiAtag);
totlLi.appendChild(totlaLiIndex);
total.appendChild(totlLi);





var tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    AvgMultiblyArray: [],
    customorPerHourReturn: [],



    randomCustomorsPerHour: function (min, max) {
        for (var i = 0; i < 15; i++) {
            this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
        }
    },
    averageSalesPerHour: function () {
        for (var i = 0; i < this.customorPerHourReturn.length; i++) {
            this.AvgMultiblyArray[i] = Math.ceil(this.avg * this.customorPerHourReturn[i])
        }
    },

};
document.write("<hr>");
var heading =document.getElementById("maindiv");
var headElement = document.createElement("h1"); 
var headElementIndex=document.createTextNode('Tokyo:');
headElement.appendChild(headElementIndex);
heading.appendChild(headElement);


tokyo.randomCustomorsPerHour(tokyo.min, tokyo.max);
console.log(tokyo.customorPerHourReturn);
tokyo.averageSalesPerHour();
console.log(tokyo.AvgMultiblyArray);
var j = 6;
var counter=0;
for (var i = 0; i < (tokyo.AvgMultiblyArray.length - 1); i++) {
    timer = 'am';
    if (j>= 12) { var timer = 'pm'; }
    var final = document.getElementById("maindiv");
    var newLi = document.createElement('li');
    var liIndex = document.createElement('a'); 
    var AtagIndix = document.createTextNode(j + timer + ': ' + tokyo.AvgMultiblyArray[i] + ' cookies');
    liIndex.appendChild(AtagIndix);
    newLi.appendChild(liIndex);
    final.appendChild(newLi);
    j++;
     counter+=tokyo.AvgMultiblyArray[i];
}
console.log(counter);
var total=document.getElementById("maindiv");
var totlLi= document.createElement('li');
var totlaLiIndex=document.createElement('a'); 
var totalLiAtag= document.createTextNode('Total: '+counter+' cookies');
totlaLiIndex.appendChild(totalLiAtag);
totlLi.appendChild(totlaLiIndex);
total.appendChild(totlLi);



var dubai = {
    name: 'Dubai',
    min:11,
    max: 38,
    avg: 3.7,
    AvgMultiblyArray: [],
    customorPerHourReturn: [],



    randomCustomorsPerHour: function (min, max) {
        for (var i = 0; i < 15; i++) {
            this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
        }
    },
    averageSalesPerHour: function () {
        for (var i = 0; i < this.customorPerHourReturn.length; i++) {
            this.AvgMultiblyArray[i] = Math.ceil(this.avg * this.customorPerHourReturn[i])
        }
    },

};
document.write("<hr>");
var heading =document.getElementById("maindiv");
var headElement = document.createElement("h1"); 
var headElementIndex=document.createTextNode(' Dubai:');
headElement.appendChild(headElementIndex);
heading.appendChild(headElement);


dubai.randomCustomorsPerHour( dubai.min,  dubai.max);
console.log(dubai.customorPerHourReturn);
dubai.averageSalesPerHour();
console.log(dubai.AvgMultiblyArray);
var j = 6;
var counter=0;
for (var i = 0; i < (dubai.AvgMultiblyArray.length - 1); i++) {
    timer = 'am';
    if (j>= 12) { var timer = 'pm'; }
    var final = document.getElementById("maindiv");
    var newLi = document.createElement('li');
    var liIndex = document.createElement('a'); 
    var AtagIndix = document.createTextNode(j + timer + ': ' + dubai.AvgMultiblyArray[i] + ' cookies');
    liIndex.appendChild(AtagIndix);
    newLi.appendChild(liIndex);
    final.appendChild(newLi);
    j++;
     counter+=dubai.AvgMultiblyArray[i];
}
console.log(counter);
var total=document.getElementById("maindiv");
var totlLi= document.createElement('li');
var totlaLiIndex=document.createElement('a'); 
var totalLiAtag= document.createTextNode('Total: '+counter+' cookies');
totlaLiIndex.appendChild(totalLiAtag);
totlLi.appendChild(totlaLiIndex);
total.appendChild(totlLi);



var paris = {
    name: 'Paris',
    min:20,
    max: 38,
    avg: 2.3,
    AvgMultiblyArray: [],
    customorPerHourReturn: [],



    randomCustomorsPerHour: function (min, max) {
        for (var i = 0; i < 15; i++) {
            this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
        }
    },
    averageSalesPerHour: function () {
        for (var i = 0; i < this.customorPerHourReturn.length; i++) {
            this.AvgMultiblyArray[i] = Math.ceil(this.avg * this.customorPerHourReturn[i])
        }
    },

};
document.write("<hr>");
var heading =document.getElementById("maindiv");
var headElement = document.createElement("h1"); 
var headElementIndex=document.createTextNode(' Paris:');
headElement.appendChild(headElementIndex);
heading.appendChild(headElement);


paris.randomCustomorsPerHour( paris.min,  dubai.max);
console.log(paris.customorPerHourReturn);
paris.averageSalesPerHour();
console.log(paris.AvgMultiblyArray);
var j = 6;
var counter=0;
for (var i = 0; i < (paris.AvgMultiblyArray.length - 1); i++) {
    timer = 'am';
    if (j>= 12) { var timer = 'pm'; }
    var final = document.getElementById("maindiv");
    var newLi = document.createElement('li');
    var liIndex = document.createElement('a'); 
    var AtagIndix = document.createTextNode(j + timer + ': ' + paris.AvgMultiblyArray[i] + ' cookies');
    liIndex.appendChild(AtagIndix);
    newLi.appendChild(liIndex);
    final.appendChild(newLi);
    j++;
     counter+=paris.AvgMultiblyArray[i];
}
console.log(counter);
var total=document.getElementById("maindiv");
var totlLi= document.createElement('li');
var totlaLiIndex=document.createElement('a'); 
var totalLiAtag= document.createTextNode('Total: '+counter+' cookies');
totlaLiIndex.appendChild(totalLiAtag);
totlLi.appendChild(totlaLiIndex);
total.appendChild(totlLi);




var lima = {
    name: 'Lima',
    min:2,
    max: 16,
    avg: 4.6,
    AvgMultiblyArray: [],
    customorPerHourReturn: [],



    randomCustomorsPerHour: function (min, max) {
        for (var i = 0; i < 15; i++) {
            this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
        }
    },
    averageSalesPerHour: function () {
        for (var i = 0; i < this.customorPerHourReturn.length; i++) {
            this.AvgMultiblyArray[i] = Math.ceil(this.avg * this.customorPerHourReturn[i])
        }
    },

};
document.write("<hr>");
var heading =document.getElementById("maindiv");
var headElement = document.createElement("h1"); 
var headElementIndex=document.createTextNode(' Lima:');
headElement.appendChild(headElementIndex);
heading.appendChild(headElement);


lima.randomCustomorsPerHour( lima.min,  dubai.max);
console.log(lima.customorPerHourReturn);
lima.averageSalesPerHour();
console.log(lima.AvgMultiblyArray);
var j = 6;
var counter=0;
for (var i = 0; i < (lima.AvgMultiblyArray.length - 1); i++) {
    timer = 'am';
    if (j>= 12) { var timer = 'pm'; }
    var final = document.getElementById("maindiv");
    var newLi = document.createElement('li');
    var liIndex = document.createElement('a'); 
    var AtagIndix = document.createTextNode(j + timer + ': ' + lima.AvgMultiblyArray[i] + ' cookies');
    liIndex.appendChild(AtagIndix);
    newLi.appendChild(liIndex);
    final.appendChild(newLi);
    j++;
     counter+=lima.AvgMultiblyArray[i];
}
console.log(counter);
var total=document.getElementById("maindiv");
var totlLi= document.createElement('li');
var totlaLiIndex=document.createElement('a'); 
var totalLiAtag= document.createTextNode('Total: '+counter+' cookies');
totlaLiIndex.appendChild(totalLiAtag);
totlLi.appendChild(totlaLiIndex);
total.appendChild(totlLi);
*/


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
    for (var i = 0; i < 15; i++) {
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
console.log(seattle.AvgMultiblyArray);
tokyo.randomCustomer();
tokyo.averageSalesPerHour();
console.log(tokyo.AvgMultiblyArray);
dubai.randomCustomer();
dubai.averageSalesPerHour();
console.log(dubai.AvgMultiblyArray);
paris.randomCustomer();
paris.averageSalesPerHour();
console.log(paris.AvgMultiblyArray);
lima.randomCustomer();
lima.averageSalesPerHour();
console.log(lima.AvgMultiblyArray);


var div = document.getElementById('maindiv');
var mainTable = document.createElement('table');
div.appendChild(mainTable);
var rowOne = document.createElement('tr');
mainTable.appendChild(rowOne);
var rmptyCell = document.createElement('td');
rowOne.appendChild(rmptyCell);
for (var i = 0; i < openingHours.length; i++) {
    var firstRowColoumns = document.createElement('td');
    rowOne.appendChild(firstRowColoumns);
    var mainHead = document.createElement('th');
    firstRowColoumns.appendChild(mainHead);
    var openingHoure = document.createTextNode(openingHours[i])
    mainHead.appendChild(openingHoure);
}
var link = document.createElement(link);
link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '../CSS/stylesheet.css';
    link.media = 'all';
mainTable.appendChild(link);
var rowTwo = document.createElement('tr');
mainTable.appendChild(rowTwo);
var firstColoumn = document.createElement('td');
var coloumContent1 = document.createTextNode('Seattle');
rowTwo.appendChild(firstColoumn);
firstColoumn.appendChild(coloumContent1);
for (var i = 0; i < (seattle.AvgMultiblyArray.length - 1); i++) {
    var coloumns = document.createElement('td');
    var coloumnContents = document.createTextNode(seattle.AvgMultiblyArray[i]);
    rowTwo.appendChild(coloumns);
    coloumns.appendChild(coloumnContents);
}
var totalRowOne = document.createElement('td');
rowTwo.appendChild(totalRowOne);
var counterSeattle = document.createTextNode(seattle.counter);
totalRowOne.appendChild(counterSeattle);


var rowThree = document.createElement('tr');
mainTable.appendChild(rowThree);
var secondColoumn = document.createElement('td');
var coloumContent2 = document.createTextNode('Tokyo');
rowThree.appendChild(secondColoumn);
secondColoumn.appendChild(coloumContent2);
for (var i = 0; i < (tokyo.AvgMultiblyArray.length - 1); i++) {
    var coloumns = document.createElement('td');
    var coloumnContents = document.createTextNode(tokyo.AvgMultiblyArray[i]);
    rowThree.appendChild(coloumns);
    coloumns.appendChild(coloumnContents);
}
var totalRowTwo = document.createElement('td');
rowThree.appendChild(totalRowTwo);
var counterTokyo = document.createTextNode(tokyo.counter);
totalRowTwo.appendChild(counterTokyo);


var rowFour = document.createElement('tr');
mainTable.appendChild(rowFour);
var thirdColoumn = document.createElement('td');
var coloumContent3 = document.createTextNode('Dubai');
rowFour.appendChild(thirdColoumn);
thirdColoumn.appendChild(coloumContent3);
for (var i = 0; i < (dubai.AvgMultiblyArray.length - 1); i++) {
    var coloumns = document.createElement('td');
    var coloumnContents = document.createTextNode(dubai.AvgMultiblyArray[i]);
    rowFour.appendChild(coloumns);
    coloumns.appendChild(coloumnContents);
}
var totalRowThree = document.createElement('td');
rowFour.appendChild(totalRowThree);
var counterDubai = document.createTextNode(dubai.counter);
totalRowThree.appendChild(counterDubai);


var rowFive = document.createElement('tr');
mainTable.appendChild(rowFive);
var fourthColoumn = document.createElement('td');
var coloumContent4 = document.createTextNode('Paris');
rowFive.appendChild(fourthColoumn);
fourthColoumn.appendChild(coloumContent4);
for (var i = 0; i < (paris.AvgMultiblyArray.length - 1); i++) {
    var coloumns = document.createElement('td');
    var coloumnContents = document.createTextNode(paris.AvgMultiblyArray[i]);
    rowFive.appendChild(coloumns);
    coloumns.appendChild(coloumnContents);
}
var totalRowFour = document.createElement('td');
rowFive.appendChild(totalRowFour);
var counterParis = document.createTextNode(paris.counter);
totalRowFour.appendChild(counterParis);


var row6 = document.createElement('tr');
mainTable.appendChild(row6);
var sixthColoumn = document.createElement('td');
var coloumContent5 = document.createTextNode('Lima');
row6.appendChild(sixthColoumn);
sixthColoumn.appendChild(coloumContent5);
for (var i = 0; i < (lima.AvgMultiblyArray.length - 1); i++) {
    var coloumns = document.createElement('td');
    var coloumnContents = document.createTextNode(lima.AvgMultiblyArray[i]);
    row6.appendChild(coloumns);
    coloumns.appendChild(coloumnContents);
}
var totalRowFive = document.createElement('td');
row6.appendChild(totalRowFive);
var counterLima = document.createTextNode(lima.counter);
totalRowFive.appendChild(counterLima);

var totalOfTotal = document.createElement('tr');
var totalOfTotalCell1 = document.createElement('td');
mainTable.appendChild(totalOfTotal);
totalOfTotal.appendChild(totalOfTotalCell1);
var totalOfTotalValue = document.createTextNode('Totals');
totalOfTotalCell1.appendChild(totalOfTotalValue);
for (var i = 0; i <= 13; i++) {

    var coloumns = document.createElement('td');
    var coloumnContents = document.createTextNode(lima.AvgMultiblyArray[i] + dubai.AvgMultiblyArray[i] + tokyo.AvgMultiblyArray[i] + seattle.AvgMultiblyArray[i] + paris.AvgMultiblyArray[i]);
    totalOfTotal.appendChild(coloumns);
    coloumns.appendChild(coloumnContents);
}

var totalFinal = document.createElement('td');
totalOfTotal.appendChild(totalFinal);
var totalFinalIndex = document.createTextNode(seattle.counter + tokyo.counter + lima.counter + dubai.counter + paris.counter)
totalFinal.appendChild(totalFinalIndex);








/*var mainTable2 = document.createElement('table');
var rowTwo = document.createElement('tr');
    mainTable2.appendChild(rowTWO);
    for (var i = 0; i < openingHours.length; i++) {
        var mainHead2 = document.createElement('h3');
        rowTwo.appendChild(mainHead2);
        var seattle2 = document.createTextNode(openingHours[i])
        mainHead2.appendChild(seattle2);
*/






/*Location.prototype.randomCustomorsPerHour = function (min, max) {
    for (var i = 0; i < 14; i++) {
        this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
    }
};*/


/*Location.prototype.render = function () {

    var bodyDiv = document.getElementById('maindiv');
    var divSection = document.createElement("section");
    bodyDiv.appendChild(divSection);
    var locationInformationTable = document.createElement('table');
    divSection.appendChild(locationInformationTable);
    var rowOne = document.createElement('tr');
    locationInformationTable.appendChild(rowOne);
    var columnFirst = document.createElement('td');
    var cellFirst = document.createElement('th');
    var cellContentFirst = document.createTextNode('information' + ':');
    cellFirst.appendChild(cellContentFirst);
    columnFirst.appendChild(cellFirst);
    rowOne.appendChild(columnFirst);
    for (var i = 0; i < this.OpeningHours.length; i++) {
        var columns = document.createElement('td');
        var cell = document.createElement('th');
        var cellContent = document.createTextNode(this.OpeningHours[i]);
        cell.appendChild(cellContent);
        columns.appendChild(cell);
        rowOne.appendChild(columns);
    }}
    Location.prototype.firstColoumn = function () {
        for (var i = 0; i < this.namesRow.length; i++) {
            var bodyDiv = document.getElementById('maindiv');
            var divSection = document.createElement("section");
            bodyDiv.appendChild(divSection);
            var locationInformationTable = document.createElement('table');
            divSection.appendChild(locationInformationTable);
            var rowOne = document.createElement('tr');
            var cell = document.createElement('th');
            var cellContent = document.createTextNode(this.namesRow[i]);
            cell.appendChild(cellContent);
            rowOne.appendChild(cell);
            locationInformationTable.appendChild(rowOne);


        }
    }

    Location.prototype.secondColoumn = function () {
    for (var i = 0; i < 7; i++) {
        var bodyDiv = document.getElementById('maindiv');
        var divSection = document.createElement("section");
        bodyDiv.appendChild(divSection);
        var locationInformationTable = document.createElement('table');
        divSection.appendChild(locationInformationTable);
        var rowOne = document.createElement('tr');
        locationInformationTable.appendChild(rowOne);
            var columns = document.createElement('td');
            var cell = document.createElement('th');
            var cellContent = document.createTextNode(this.averageSalesPerHour[i]);
            cell.appendChild(cellContent);
            columns.appendChild(cell);
            rowOne.appendChild(columns);

    }}


    seattle.averageSalesPerHour();
    tokyo.averageSalesPerHour();
    dubai.averageSalesPerHour();
    paris.averageSalesPerHour();
    lima.averageSalesPerHour();
    dubai.render();
    dubai.firstColoumn();
    seattle.secondColoumn();*/