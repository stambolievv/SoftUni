function previousDay(year, month, day) {
    const dateString = `${year}-${month}-${day}`;
    const inputDate = new Date(dateString);
    inputDate.setDate(day - 1);
    console.log(`${inputDate.getFullYear()}-${inputDate.getMonth() + 1}-${inputDate.getDate()}`);
}
previousDay(2016, 10, 1);