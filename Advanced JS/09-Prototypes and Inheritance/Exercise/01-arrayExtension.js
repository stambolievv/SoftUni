function arrayExtension() {
    (function solve() {
        Array.prototype.last = function () {
            return this[this.length - 1];
        };
        Array.prototype.skip = function (n) {
            let result = [];
            for (var i = n; i < this.length; i++) {
                result.push(this[i]);
            }
            return result;
        };
        Array.prototype.take = function (n) {
            let result = [];
            for (var i = 0; i < n; i++) {
                result.push(this[i]);
            }
            return result;
        };
        Array.prototype.sum = function () {
            let result = 0;
            for (var i = 0; i < this.length; i++) {
                result += this[i];
            }
            return result;
        };
        Array.prototype.average = function () {
            let sum = this.sum();
            return sum / this.length;
        };
    })();
}
arrayExtension();