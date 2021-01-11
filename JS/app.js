'use strict';
var seattle = {
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
var headElement = document.createElement("h1"); //document.write("<br>");
var headElementIndex=document.createTextNode('Seattle:');
headElement.appendChild(headElementIndex);
heading.appendChild(headElement);

seattle.randomCustomorsPerHour(seattle.min, seattle.max);
console.log(seattle.customorPerHourReturn);
seattle.averageSalesPerHour();
console.log(seattle.AvgMultiblyArray);
var j = 6;
var counter=0;
for (var i = 0; i < (seattle.AvgMultiblyArray.length - 1); i++) {
    timer = 'am';
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



/*function Location(minimum, maximum, average) {
    this.min = minimum;
    this.max = maximum;
    this.avg = average;
    this.AvgMultiblyArray= [];
    this.customorPerHourReturn= [];

    this.randomCustomorsPerHour= function () {
        for (var i = 0; i < 15; i++) {
            this.customorPerHourReturn[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
            return;
        }


};
};


 var tokyo = new Location(10,20,11);

console.log(Location.customorPerHourReturn);*/
