// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}


// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromDollarToYen  = (Dollars) => {
    let euros = Dollars / oneEuroIs.USD;
    let yenes = euros *  oneEuroIs.JPY;
    return yenes;
}


const fromYenToPound  = (yen) => {
    // de yen to euro
    let euro = yen/156.5;
    
    //de euro a  pound
    let pound = euro * 0.87; 
 
    return pound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };