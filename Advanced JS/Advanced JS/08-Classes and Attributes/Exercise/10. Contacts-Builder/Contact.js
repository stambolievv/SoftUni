class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(bool) {
        if (this.divTitle) {
            if (!bool) {
                this.divTitle.classList.remove('online');
            } else {
                this.divTitle.classList.add('online');
            }
        }
        this._online = bool;
    }

    render(id) {
        const article = document.createElement('article');

        this.divTitle = document.createElement('div');
        this.divTitle.classList.add('title');
        this.divTitle.innerHTML = `${this.firstName} ${this.lastName}`;
        const buttonTitle = document.createElement('button');
        buttonTitle.innerHTML = '&#8505;';
        this.divTitle.appendChild(buttonTitle);

        if (this._online) { this.divTitle.classList.add('online'); }

        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.style.display = 'none';
        divInfo.innerHTML = `<span>&phone; ${this.phone}</span>\n<span>&#9993; ${this.email}</span>`;
        buttonTitle.addEventListener('click', (e) => {
            divInfo.style.display = divInfo.style.display == 'none' ? 'block' : 'none';
        });

        article.appendChild(this.divTitle);
        article.appendChild(divInfo);

        document.getElementById(id).appendChild(article);
    }
}
let contacts = [
    new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
    new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
    new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com')
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
