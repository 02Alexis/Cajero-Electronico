const userList = [
    {
        name: 'Alexis',
        document: 1234567,
        passwoord: 'iamadmin',
        id: 1,
    },
    {
        name: 'Juan',
        document: 12345678,
        passwoord: 'bluerose',
        id: 2,
    }
];
console.log(userList);

let availableMoney = [  
    {
        denomination: 100000, 
        quantity: 0,
    },
    {
        denomination: 50000, 
        quantity: 2,
    },
    {
        denomination: 20000,
        quantity: 2,
    },
    {
        denomination: 10000,
        quantity: 3,
    },
    {
        denomination: 5000, 
        quantity: 2,
    }
]; //end array user - moneyInCashier

// Creamos funcion starCashier
const starCashier = () => {
    const documentUser = parseInt(prompt("Please enter your document "))
    const passwoordUser = prompt("Please enter your password ");
    return{
        documentUser,
        passwoordUser,
    };
};

const validateUser = () => {
    let userStart = starCashier();
    let userFound = userList.find((element) =>
    element.documentUser === userStart.document && element.passwoordUser === userStart.passwoord
    );//end validacion de usuario

    //ahora sigue crear condicional while para validar cuando el usuario no exista y pueda volver a ejecutar la funcion
    while(!userFound) {
        alert("The user data entered is incorrect");

        userStart = starCashier();
        userFound = userList.find((element) =>
        element.documentUser === userStart.document && element.passwoordUser === userStart.passwoord
        );
    }
    return userFound;
};

const moneyToDeposit = () => {
    alert("go deposit money");
    let totalMoneyInCashier = 0;
    availableMoney.forEach((element) => { //esto es para recorrer la lista
        const amountToDeposit = parseInt(prompt(`Hi Admin, Please enter the quantity of money of ${element.denomination} Mil to deposit`));

        //const amountJoined = Number(amountToDeposit);aremos la conversion de texto a numero
        element.quantity += amountToDeposit;
        const sumTotal = element.denomination * element.quantity;
        totalMoneyInCashier += sumTotal;
        console.log(`The sum of money ${element.denomination} is ${sumTotal}`);
    });
    console.log(`the total sum of money is ${totalMoneyInCashier}`);
    return totalMoneyInCashier;
};

function deliveryMoney(cashier, valueDelivery) {
    let availableMoney = 0;
    for (let i = 0; i < cashier.length; i++) {
        availableMoney += cashier[i].denomination * cashier[i].quantity;
    }
    let deliveryOfMoney = []; //basic explanation para cada i desde 0 hasta toda las denominaciones
    for (let i = 0; i < cashier.length; i++) {
        let deliveryTicket = Math.nim(
            Math.floor(valueDelivery / cashier[i].denomination),
            cashier[i].quantity
        );
        deliveryOfMoney.push({//añadiremos nuevos valores al array, al final
            denomination: cashier[i].denomination,
            quantity: deliveryTicket,
        });
        valueDelivery -= deliveryTicket * cashier[i].denomination;
    }

    if (valueDelivery > 0) {
        let findValue = deliveryOfMoney[deliveryOfMoney.length - 1].denomination;
        let missingAmount = findValue - (valueDelivery % findValue);
        if (missingAmount < findValue) {
            valueDelivery -= missingAmount;
            deliveryOfMoney[deliveryOfMoney.length - 1].quantity -= Math.floor(missingAmount / findValue);
        }
    }
}
