'use strict';

(function(){
    
    function Cal(cont, result) {
        this.input = document.querySelectorAll('.' + cont + ' input[type=\'button\']');
        this.resultDisplay = document.querySelector('#' + result);
        this.assign();
    }
    
    Cal.prototype.assign = function() {
        for (let i in this.input) {
            this.input[i].addEventListener('click', this.calculate.bind(this));
        }
    }
    
    Cal.prototype.show1 = function() {
        var res1 = eval(this.resultDisplay.value);
            arr = [res1];
            this.resultDisplay.value = arr[0];
    }
    
    var arr = [];
    Cal.prototype.calculate = function(e) {
        
        if (e.target.value == "=") {
            this.show1();
            return;
        }
        
        if (e.target.value == "C") {
            this.resultDisplay.value = "";
            arr = [];
            return;
        }
        
        arr.push(e.target.value);
        if(arr[arr.length-1] == "." && arr[arr.length-2] == ".") {
            arr.pop();
        }

        console.log(arr);
        this.resultDisplay.value = "";
        for (let j in arr) {
            this.resultDisplay.value += arr[j];
        }
    }
    
    new Cal('calc', 'res');
})()


