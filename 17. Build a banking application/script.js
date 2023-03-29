let customer = {
    name: "Akash Singh",
    balance: 1000,

    deposit: function (amount) {
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
    },

    withdraw: function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance!");
        }
    }
};


customer.deposit(500);
customer.withdraw(200);