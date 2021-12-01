class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(arr) {
        for (const entry of arr) {
            const [productName, productQuantity, productTotalPrice] = entry.split(' ');
            if (Number(productTotalPrice) <= this.budgetMoney) {
                if (!this.stockProducts[productName]) { this.stockProducts[productName] = 0; }
                this.stockProducts[productName] += Number(productQuantity);
                this.budgetMoney -= Number(productTotalPrice);
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }
    addToMenu(meal, arrOfProducts, price) {
        if (this.menu.hasOwnProperty(meal)) { return `The ${meal} is already in the our menu, try something different.`; }
        this.menu[meal] = {
            products: {},
            price: Number(price)
        };
        arrOfProducts.forEach(entry => {
            const [name, quantity] = entry.split(' ');
            this.menu[meal].products[name] = Number(quantity);
        });
        const mealsCount = Object.keys(this.menu).length;
        if (mealsCount == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`;
        }
    }
    showTheMenu() {
        if (Object.keys(this.menu).length == 0) { return 'Our menu is not ready yet, please come later...'; }
        const result = [];
        for (const meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`);
        }
        return result.join('\n');

    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) { return `There is not ${meal} yet in our menu, do you want to order something else?`; }
        const neededProducts = {};
        for (const product in this.menu[meal].products) {
            if (!this.stockProducts.hasOwnProperty(product) ||
                this.stockProducts[product] < this.menu[meal].products[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                neededProducts[product] = this.menu[meal].products[product];
            }
        }
        for (const product in neededProducts) {
            this.stockProducts[product] -= neededProducts[product];
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log('------------------');
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log('------------------');
console.log(kitchen.showTheMenu());
console.log('------------------');
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
