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
]

//------------------------------------------- other------
const validation = () => {
    let validation = true;
    let user = []
    while (validation){
        const documentUser = parseInt(prompt("Please enter your document "))
        const passwoordUser = prompt("Please enter your password ");

        userList.forEach(element => {
            if(element.document == documentUser && element.passwoord == passwoordUser){
                user = element;
                validation = false;
            }
        });
        if (validation == true){
            alert("The user data entered is incorrect");
        };
    };
    return user;
}

const moneyToDeposit = (availableMoney, user) =>{  //open admin  
    if (user.id == 1){
        alert("go deposit money");
        let sumTotal = 0; // money por cada denomination
        availableMoney.forEach(element => {
            element.quantity += parseInt(prompt(`Hi Admin, Please enter the quantity of money ${element.denomination} to deposit`));
//pago total  full payment
            const fullPayment = element.quantity * element.denomination;
            console.log( `The sum of money of ${element.denomination} is ${fullPayment}. And the quantity of Money ${element.quantity}`),
            sumTotal += fullPayment;
        });
        console.log(`the total sum of money in the cashier is ${sumTotal}`);
//end admin
        //conditional for client
    }else if (user.id == 2){ 
        let sumTotal = 0;
        availableMoney.forEach(element => {
            const fullPayment = element.quantity * element.denomination;
            sumTotal += fullPayment;
        });

        if(sumTotal == 0){
            console.log("cashier in maintenance, Come back soon");
        }else if(sumTotal != 0){
            alert("let's withdraw money");
            let amountToWithdraw = parseInt(prompt("Please enter the amount to withdraw "));
            alert(`You are about to withdraw ${amountToWithdraw}`);
            alert("Withdrawal in process, please wait");
            console.log('--------------------------------------');
            console.log(`giving out ${amountToWithdraw}`);
            // console.log(`Are you sure that the amount you wish to withdraw is? ${amountToWithdraw}`);
            if(amountToWithdraw <= sumTotal){
                //cantida a entregar  amountToDeliver
                let amountToDeliver = 0;
                availableMoney.forEach(element => {
                    const necessaryMoney = Math.floor(amountToWithdraw/element.denomination);
                    if (necessaryMoney < element.quantity) {
                        if (amountToWithdraw > element.denomination * necessaryMoney) {
                            amountToWithdraw -= element.denomination * necessaryMoney;
                            element.quantity -= necessaryMoney;
                            amountToDeliver += element.denomination = necessaryMoney;
                            console.log(`The amount to withdraw is ${necessaryMoney} of ${element.denomination}`);
                        }
                    }else if (necessaryMoney > element.quantity) {
                        if(amountToWithdraw > element.denomination * element.quantity){
                            console.log(`The amount to withdraw is ${element.quantity} of ${element.denomination}`);
                            amountToDeliver += element.denomination * element.quantity;
                            amountToWithdraw -= element.denomination * element.quantity;
                            element.quantity -= element.quantity;
                        }
                    }
                })
                console.log(`The amount than the cashier delivered is ${amountToDeliver} and wanting  delivery ${amountToWithdraw}`);

                let moneyAvailable = 0;
                availableMoney.forEach(element => {
                    const totalDenomination = element.quantity * element.denomination;
                    console.log(`The sum of Money ${element.denomination} remaining is ${totalDenomination} | remaining amount of Money ${element.quantity}`);
                    moneyAvailable += totalDenomination;
                });
            }else if (amountToWithdraw > sumTotal) {
                console.log("Sorry, but the amount entered is not valid");
            }
        }
    }

    const newUser = prompt("Do you want to enter a user again? | Y o N");
    return newUser
}

let newUser = "Y";
while (newUser == "Y"){
    const user = validation();
    newUser = moneyToDeposit(availableMoney, user)
}

