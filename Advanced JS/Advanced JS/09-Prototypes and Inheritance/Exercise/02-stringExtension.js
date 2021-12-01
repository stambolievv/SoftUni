function stringExtension() {
    (function solve() {
        String.prototype.ensureStart = function (str) {
            if (!this.toString().startsWith(str)) {
                return str + this.toString();
            }
            return this.toString();
        };
        String.prototype.ensureEnd = function (str) {
            if (!this.toString().endsWith(str)) {
                return this.toString() + str;
            }
            return this.toString();
        };
        String.prototype.isEmpty = function () {
            return this.toString().length == 0;
        };
        String.prototype.truncate = function (n) {
            const toStr = this.toString();
            if (toStr.length <= n) { return toStr; }
            if (toStr.length < 4) {
                return toStr.substring(0, n) + '.'.repeat(n);
            } else {
                const splitted = toStr.split(' ');
                if (splitted.length == 1) {
                    return toStr.substring(0, n - 3) + '.'.repeat(3);
                } else {
                    let result = '';
                    for (const word of splitted) {
                        if (result.length + word.length <= n - 3) {
                            result += ' ' + word;
                        } else {
                            return result.trim() + '.'.repeat(3);
                        }
                    }
                    return result + '.'.repeat(3);;
                }
            }
        };
        String.format = function (str, ...replace) {
            replace.forEach(prop => str = str.replace(/\{\d\}/, prop));
            return str;
        };
    })();
}
stringExtension();

let str = 'quick brown fox jumps over the lazy dog';
console.log(str = str.ensureStart('the '));
console.log(str = str.ensureStart('the '));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}', 'dog'));