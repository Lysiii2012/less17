class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
 
    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Сума внесення депозиту повинна бути більше 0");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else if (amount <= 0) {
            console.log("Сума зняття повинна бути більше 0");
        } else if (amount > this.balance) {
            console.log("На рахунку недостатньо коштів");
        }
    }
}
    
const account1 = new BankAccount(1000);
console.log(account1.getBalance()); 

account1.deposit(500);
console.log(account1.getBalance());  

account1.withdraw(200);
console.log(account1.getBalance());  