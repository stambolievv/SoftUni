function extensibleObject() {
    return {
        extend: function (template) {
            const objProto = Object.getPrototypeOf(this);
            for (const [key, value] of Object.entries(template)) {
                if (typeof value == 'function') {
                    objProto[key] = value;
                } else {
                    this[key] = value;
                }
            }
        }
    };
}
const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
};
myObj.extend(template);