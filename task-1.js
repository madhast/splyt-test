(function () {
    console.log('Task #1');

    function calculate () {
        var twoBitNumbers = [],
            decimalNumbers = [];

        for (var i = 0; i < arguments.length; i++) {
            twoBitNumbers.push(arguments[i]);
        }

        decimalNumbers = twoBitNumbers.map(function (item) {
            return item.split('').reverse().reduce(function(state, current, index) {
                return (current === '1') ? state + Math.pow(2, index) : state;
            }, 0);
        });

        return decimalNumbers.reduce(function (state, current) {
            return state += current;
        });
    }

    console.log(calculate('10', '10'));
    console.log(calculate('10', '0'));
    console.log(calculate('101', '10'));
    console.log('\n\n');
})();
