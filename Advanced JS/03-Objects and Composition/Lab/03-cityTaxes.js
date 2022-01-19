function cityTaxes(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += Math.floor(this.population * this.taxRate); },
        applyGrowth(pct) { this.population += Math.floor(this.population * (pct / 100)); },
        applyRecession(pct) { this.treasury -= Math.ceil(this.treasury * (pct / 100)); }
    };
    return city;
}
cityTaxes('Tortuga', 7000, 15000);