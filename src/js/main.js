// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var total = [];
var sum = 15;
var roster = [];

var button0 = document.querySelector('#btnpoint-guard0');
var button1 = document.querySelector('#btnpoint-guard1');
var button2 = document.querySelector('#btnpoint-guard2');    
var button3 = document.querySelector('#btnpoint-guard3'); 
var button4 = document.querySelector('#btnpoint-guard4');
var button5 = document.querySelector('#btnshooting-guard0');
var button6 = document.querySelector('#btnshooting-guard1');
var button7 = document.querySelector('#btnshooting-guard2');    
var button8 = document.querySelector('#btnshooting-guard3'); 
var button9 = document.querySelector('#btnshooting-guard4');
var button10 = document.querySelector('#btnsmall-forward0');
var button11 = document.querySelector('#btnsmall-forward1');
var button12 = document.querySelector('#btnsmall-forward2');    
var button13 = document.querySelector('#btnsmall-forward3'); 
var button14 = document.querySelector('#btnsmall-forward4');
var button15 = document.querySelector('#btnpower-forward0');
var button16 = document.querySelector('#btnpower-forward1');
var button17 = document.querySelector('#btnpower-forward2');    
var button18 = document.querySelector('#btnpower-forward3'); 
var button19 = document.querySelector('#btnpower-forward4');
var button20 = document.querySelector('#btncenter0');
var button21 = document.querySelector('#btncenter1');
var button22 = document.querySelector('#btncenter2');    
var button23 = document.querySelector('#btncenter3'); 
var button24 = document.querySelector('#btncenter4');
var buttonReset = document.querySelector('#btnreset');
var displayTotal = document.querySelector("#total-display");
var displayRoster = document.querySelector("#roster-display");
console.log(roster);

var onClick = function() {
    buttonReset.addEventListener("click", reset);
    function reset() {
        total.length = 0;
        sum = 15;
        roster.length = 0;
        displayRoster.innerHTML = roster;
        displayTotal.innerHTML = "$" + sum;
        var clicked = document.querySelectorAll(".selected");
        var i;
        for (i = 0; i < clicked.length; i++) {
        clicked[i].classList.remove("selected");
    }
    };

    button0.addEventListener("click", player0);
    function player0() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0  && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
        
    };
    button1.addEventListener("click", player1);
    function player1() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button2.addEventListener("click", player2);
    function player2() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button3.addEventListener("click", player3);
    function player3() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button4.addEventListener("click", player4);
    function player4() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button5.addEventListener("click", player5);
    function player5() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button6.addEventListener("click", player6);
    function player6() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button7.addEventListener("click", player7);
    function player7() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button8.addEventListener("click", player8);
    function player8() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button9.addEventListener("click", player9);
    function player9() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button10.addEventListener("click", player10);
    function player10() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button11.addEventListener("click", player11);
    function player11() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button12.addEventListener("click", player12);
    function player12() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button13.addEventListener("click", player13);
    function player13() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button14.addEventListener("click", player14);
    function player14() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button15.addEventListener("click", player15);
    function player15() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button16.addEventListener("click", player16);
    function player16() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button17.addEventListener("click", player17);
    function player17() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button18.addEventListener("click", player18);
    function player18() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button19.addEventListener("click", player19);
    function player19() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button20.addEventListener("click", player20);
    function player20() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button21.addEventListener("click", player21);
    function player21() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button22.addEventListener("click", player22);
    function player22() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button23.addEventListener("click", player23);
    function player23() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };
    button24.addEventListener("click", player24);
    function player24() {
        var el = this.querySelector(".label").innerHTML;
        var selection = this.querySelector(".candidate-info").innerHTML;
        var value = parseInt(el, 10);
        this.classList.toggle('selected');
        total.push(value); 
        sum = total.reduce((a,b) => a - b,15);
        if (sum >= 0 && roster.length <= 4) {
            displayTotal.innerHTML = "$" + sum;
            roster.push(selection);
        displayRoster.innerHTML = " " + roster + " ";
        } else {
            alert("Sorry, you're over your limit! Try again.");
            displayRoster.innerHTML = roster;
        }
    
    };

};

onClick();









