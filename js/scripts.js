{
    const calculateValute = (pln, currency) => {
        const usd = 4.32;
        const eur = 4.71;
        const gel = 1.64;

        switch (currency) {
            case "USD":
                return pln / usd;
            case "EUR":
                return pln / eur;
            case "GEL":
                return pln / gel;
        }

    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const plnElement = document.querySelector(".js-pln");
        const resultElement = document.querySelector(".js-result");
        const currencytElement = document.querySelector(".js-currency");
    
        const amount = plnElement.value;
        let currency = currencytElement.value;
    
        let result = calculateValute(amount, currency);
    
        resultElement.innerText =  `${result.toFixed(2)} ${currency}`;
    };

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
};

init();

}