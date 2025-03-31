// Import the function sum from the app.js file
const { sum } = require('./app.js');

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("fromEuroToDollar", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs.USD;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})




//fromDollarToYen
test("fromDollarToYen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(3.5);

    // 3.5 Dollars
    const euros = 3.5 / oneEuroIs.USD;
    const expectYenes = euros *  oneEuroIs.JPY;

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(expectYenes); // 1 dolar son 156.5 yen, entonces 3.5 euros deberían ser = (3.5 * 156.5)

})


test("fromYenToPound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const resultado = (3.5 / 156.5) *  0.87;


    expect(fromYenToPound(3.5)).toBe(resultado); 
})