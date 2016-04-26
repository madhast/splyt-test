(function () {
    console.log('Task #2');

    function numOrFunc(num, fn) {
        if (fn == null) { return num; }
        else { return fn(num); }
    }

    function zero (fn) {
        return numOrFunc(0, fn);
    }
    function one (fn) {
        return numOrFunc(1, fn);
    }
    function two (fn) {
        return numOrFunc(2, fn);
    }
    function three (fn) {
        return numOrFunc(3, fn);
    }
    function four (fn) {
        return numOrFunc(4, fn);
    }
    function five (fn) {
        return numOrFunc(5, fn);
    }
    function six (fn) {
        return numOrFunc(6, fn);
    }
    function seven (fn) {
        return numOrFunc(7, fn);
    }
    function eight (fn) {
        return numOrFunc(8, fn);
    }
    function nine (fn) {
        return numOrFunc(9, fn);
    }

    function times (second) {
        return function(first) { return first * second; };
    }
    function plus (second) {
        return function(first) { return first + second; };
    }
    function minus (second) {
        return function(first) { return first - second; };
    }
    function dividedBy (second) {
        return function(first) { return first / second; };
    }

    console.log(seven(times(five())));
    console.log(four(plus(nine())));
    console.log(eight(minus(three())));
    console.log(six(dividedBy(two())));

    console.log('\n\n');
})();
