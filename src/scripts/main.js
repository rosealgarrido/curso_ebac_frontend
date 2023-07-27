document.addEventListener('DOMContentLoaded', function() {
    const somar = require('./sum');
    function somar(a, b) {
        return a + b;
    }

console.log('Somar: ', somar(10, 20))
})
