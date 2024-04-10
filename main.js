const transactions = require('./transaction.json');

class TransactionAnalyzer {
    constructor(transactions) {
        this.transactions = transactions;
    }

    addTransaction(newTransaction) {
        this.transactions.push(newTransaction);
    }

    getAllTransactions() {
        return this.transactions;
    }

    getUniqueTransactionType() {
        const uniqueTypes = new Set();

        this.transactions.forEach(
            transaction => {
                uniqueTypes.add(transaction.transaction_type);
            });

        return Array.from(uniqueTypes);
    }

    calculateTotalAmount() {
        let totalAmount = 0;
        this.transactions.forEach(
            transaction => {
            totalAmount += transaction.transaction_amount;
        });

        return totalAmount;
    }
    calculateTotalAmountByDate(year, month, day){ // todo

        
    }
    getTransactionByType(type) { // todo
        
    }
}



const analyzer = new TransactionAnalyzer(transactions);
// console.log(analyzer.getAllTransactions());
console.log (analyzer.calculateTotalAmount());