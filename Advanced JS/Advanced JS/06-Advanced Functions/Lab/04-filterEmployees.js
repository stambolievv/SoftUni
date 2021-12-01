function filterEmployees(input, criteria) {
    const arrWithObj = JSON.parse(input);
    const filtered = [];
    const [critKey, critVal] = criteria.split('-');
    for (const obj of arrWithObj) {
        if (criteria != 'all') {
            if (Object.entries(obj).some(([objKey, ObjVal]) => objKey == critKey && ObjVal == critVal)) {
                filtered.push(obj);
            }
        } else {
            filtered.push(obj);
        }
    }
    filtered.forEach((obj, i) => console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`));
}

filterEmployees(`
  [{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);