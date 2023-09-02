const baseER = document.querySelector('#country-from');
const changeER = document.querySelector('#country-to');
const balance = document.querySelector('#amount');
const display = document.querySelector('#display_message');
const calculateAmt = document.querySelector('#solve');

function display_amount(amt) {
    display.innerHTML = `The Conversion is ${amt}`;
}

function convert() {
    const options = {
        method: 'GET',
        url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
        params: {
            from: baseER.value,     // Use the selected option value
            to: changeER.value,     // Use the selected option value
            amount: parseFloat(balance.value)  // Parse the balance input as a number
        },
        headers: {
            'X-RapidAPI-Key': '10888ff408mshdfb9a905a473f6bp1e8541jsnc87d96c1c27d',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
    };

    axios.request(options)
        .then(function(response) {
            console.log(response.data);
            display_amount(response.data.result);
        })
        .catch(function(error) {
            console.error(error);
        });
}

calculateAmt.addEventListener('click', convert);
