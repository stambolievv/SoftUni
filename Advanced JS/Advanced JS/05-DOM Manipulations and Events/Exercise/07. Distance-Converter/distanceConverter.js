function attachEventsListeners() {
    const inputField = document.getElementById('inputDistance');
    const outputField = document.getElementById('outputDistance');
    const unitFrom = document.getElementById('inputUnits');
    const unitTo = document.getElementById('outputUnits');
    document.getElementById('convert').addEventListener('click', () => {
        const convertFrom = unitFrom.value;
        const convertTo = unitTo.value;
        const valueInMeters = inputField.value * dataAsMeters[convertFrom];
        const convertedValue = valueInMeters / dataAsMeters[convertTo];
        outputField.value = convertedValue;
    });
    const dataAsMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };
}