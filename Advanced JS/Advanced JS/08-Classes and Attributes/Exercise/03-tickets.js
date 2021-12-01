function tickets(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketsObj = [];
    tickets.forEach(entry => {
        const [dest, price, status] = entry.split('|');
        ticketsObj.push(new Ticket(dest, Number(price), status));
    });

    if (criteria == 'destination') {
        return ticketsObj.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria == 'price') {
        return ticketsObj.sort((a, b) => a.price - b.price);

    } else if (criteria == 'status') {
        return ticketsObj.sort((a, b) => a.status.localeCompare(b.status));
    }
}
console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));