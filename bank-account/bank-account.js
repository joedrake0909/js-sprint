class InsufficientFundsError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientFundsError";
    }
}

class BankAccount {
    #balance;
    history = [];

    constructor(owner, balance = 0) {
        this.owner = owner;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    recordTransaction(type, amount) {
        this.history.push({
            type: type,
            amount: amount,
            date: new Date()
        })
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }

        this.#balance += amount;
        this.recordTransaction("deposit", amount);
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }

        if (amount > this.#balance) {
            throw new InsufficientFundsError("Insufficient funds");

        }

        this.#balance -= amount;
        this.recordTransaction("withdrawal", amount);
        return this.#balance;
    }

    printStatement() {
        console.log(`\nStatement for ${this.owner}`);
        console.log("------------------------");

        for (const transaction of this.history) {
            console.log(
                `${transaction.type} | Amount: ${transaction.amount} | Date: ${transaction.date.toLocaleString()}`
            );
        }

        console.log("------------------------");
        console.log(`Current balance: ${this.getBalance()}`);

    }

    transfer(amount, recipient) {
        if (!(recipient instanceof BankAccount)) {
            throw new Error("Recipient must be a bank account.");
        }
        
        if (recipient === this) {
            throw new Error("Cannot transfer to the same account.");
        }

        if (amount <= 0) {
            throw new Error("Transfer amount must be positive.");
        }

        if (amount > this.#balance) {
            throw new InsufficientFundsError("Insufficient funds for transfer.");
        }

        this.#balance -= amount;
        recipient.#balance += amount;

        this.recordTransaction("transfer-out", amount);
        recipient.recordTransaction("transfer-in", amount);

        return true;
    }
}


const account = new BankAccount("Joseph", 100);
const amaAccount = new BankAccount("Ama", 50);

console.log("\n--- Transfer Test ---");
console.log("Joseph before:", account.getBalance());
console.log("Ama before:", amaAccount.getBalance());

account.transfer(40, amaAccount);

console.log("Joseph after:", account.getBalance());
console.log("Ama after:", amaAccount.getBalance());


console.log("\n--- Failed Transfer Test ---");

console.log("Joseph before:", account.getBalance());
console.log("Ama before:", amaAccount.getBalance());

try {
    account.transfer(500, amaAccount);
} catch (error) {
    console.log("Error type:", error.name);
    console.log("Error message:", error.message);
}

console.log("Joseph after:", account.getBalance());
console.log("Ama after:", amaAccount.getBalance());


console.log("\n--- Transfer History Test ---");

console.log("Joseph history:");
console.log(account.history);

console.log("Ama history:");
console.log(amaAccount.history);