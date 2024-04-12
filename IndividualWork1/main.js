const transactions = require('./transaction.json');
/**
 * Класс для управления транзакциями.
 */
class TransactionAnalyzer {

     /**
     * Конструктор класса TransactionManager.
     * 
     * @param {Array<Object>} transactions - Массив транзакций.
     */
    constructor(transactions) {
        this.transactions = transactions;
    }


    /**
    * Добавляет новую транзакцию в массив транзакций.
    * @param {Object} newTransaction - Новая транзакция для добавления.
    */
    addTransaction(newTransaction) {
        this.transactions.push(newTransaction);
    }

    /**
     * Получает все транзакции.
     * @returns {Array<Object>} Массив всех транзакций.
     */
    getAllTransactions() {
        return this.transactions;
    }
/**
 * 
 * Получает уникальные типы транзакций.
 * @returns {Array<string>} Массив уникальных типов транзакций.
 * @description Этот метод проходит по всем транзакциям и возвращает массив, содержащий уникальные типы транзакций. 
 * Если в массиве исходных данных есть несколько транзакций с одним и тем же типом, 
 * этот метод вернет только уникальные типы, исключая повторения, за счет испльзования Set
 */
    getUniqueTransactionType() {
        const uniqueTypes = new Set();
        this.transactions.forEach(
            transaction => {
                uniqueTypes.add(transaction.transaction_type);
            });

        return Array.from(uniqueTypes);
    }

/**
 * Вычисляет общую сумму всех транзакций.
 * @returns {number} Общая сумма всех транзакций.
 * @description Этот метод проходит по всем транзакциям и суммирует значения их сумм в общую сумму.
 */

    calculateTotalAmount() {
        let totalAmount = 0;
        this.transactions.forEach(
            transaction => {
                totalAmount += transaction.transaction_amount;
            });

        return totalAmount;
    }

 /**
 * Вычисляет общую сумму транзакций за указанную дату.
 * @param {Array<Object>} transactions - Массив транзакций.
 * @param {string|null} year - Год для фильтрации транзакций. Если null, фильтрация не применяется к году.
 * @param {string|null} month - Месяц для фильтрации транзакций. Если null, фильтрация не применяется к месяцу.
 * @param {string|null} day - День для фильтрации транзакций. Если null, фильтрация не применяется к дню.
 * @returns {number} Общая сумма транзакций за указанную дату.
 * @description Эта функция проходит по массиву транзакций и суммирует сумму всех транзакций, которые соответствуют указанным дате, месяцу и году (если они заданы).
 */   
    calculateTotalAmountByDate = (transactions, year, month, day) => { 
        let totalAmount = 0;

        transactions.forEach(transaction => {
            const transactionDate = transaction.transaction_date;
            const dateParts = transactionDate.split('-');

            let yearMatch = true;
            let monthMatch = true;
            let dayMatch = true;

            if (year !== null) {
                yearMatch = dateParts[0] === year;
            }

            if (month !== null) {
                monthMatch = month === null || dateParts[1] === month;
            }

            if (day !== null) {
                dayMatch = day === null || dateParts[2] === day;
            }

            if (yearMatch && monthMatch && dayMatch) {
                totalAmount += transaction.transaction_amount;
            }
        });

        return totalAmount;
    };

/**
 * Получает транзакции по указанному типу.
 * @param {string} type - Тип транзакции для поиска.
 * @returns {Array<Object>} Массив транзакций указанного типа.
 * @description Этот метод проходит по массиву транзакций и возвращает все транзакции, у которых тип совпадает с указанным типом.
 */
    getTransactionByType(type) {
        const transactionsOfType = [];

        this.transactions.forEach(transaction => {
            if (transaction.transaction_type == type) {
                transactionsOfType.push(transaction);
            }
        });

        return transactionsOfType;
    }

    /**
 * Получает транзакции, проведенные в указанном диапазоне дат.
 * @param {string} startDate - Начальная дата диапазона фильтрациии.
 * @param {string} endDate - Конечная дата диапазона фильтрации.
 * @returns {Array<Object>} Массив транзакций, проведенных в указанном диапазоне дат.
 * @description Этот метод проходит по массиву транзакций и возвращает транзакции, которые проведены в диапазоне между указанными датами (включительно)
 */

    getTransactionsInRange(startDate, endDate) {
        const transactionsInRange = [];

        this.transactions.forEach(transaction => {
            const transactionDate = transaction.transaction_date;
            const dateParts = transactionDate.split('-');

            const year = dateParts[0];
            const month = dateParts[1];
            const day = dateParts[2];

            let yearMatch = true;
            let monthMatch = true;
            let dayMatch = true;

            if (startDate) {
                const startParts = startDate.split('-');
                yearMatch = startParts[0] <= year;
                monthMatch = startParts[1] <= month;
                dayMatch = startParts[2] <= day;
            }

            if (endDate) {
                const endParts = endDate.split('-');
                yearMatch = endParts[0] >= year;
                monthMatch = endParts[1] >= month;
                dayMatch = endParts[2] >= day;
            }

            if (yearMatch && monthMatch && dayMatch) {
                transactionsInRange.push(transaction);
            }
        });

        return transactionsInRange;
    }

    /**
 * Получает транзакции, совершенные с указанным торговым местом или компанией.
 * @param {string} merchantName - Название торгового места или компании для поиска.
 * @returns {Array<Object>} Массив транзакций, совершенных с указанным торговым местом или компанией.
 * @description Этот метод проходит по массиву транзакций и возвращает транзакции, совершенные с указанным торговым местом или компанией, совпадающим с переданным именем.
 */
    getTransactionsByMerchant(merchantName) {
        const transactionsByMerchant = [];

        this.transactions.forEach(transaction => {
            if (transaction.merchant_name === merchantName) {
                transactionsByMerchant.push(transaction);
            }
        });

        return transactionsByMerchant;
    }


/**
 * Вычисляет среднее значение суммы транзакций.
 * @returns {number} Среднее значение суммы транзакций.
 * @description Этот метод вычисляет среднее значение суммы транзакций, делая это путем суммирования всех сумм транзакций и деления этой суммы на общее количество транзакций(элементов массива).
 */
calculateAverageTransactionAmount() {
        let totalAmount = 0;
        const numberOfTransactions = this.transactions.length;

        this.transactions.forEach(transaction => {
            totalAmount += transaction.transaction_amount;
        });

        return totalAmount / numberOfTransactions;
    }

/**
 * Получает транзакции с суммой в заданном диапазоне.
 * @param {number} minAmount - Минимальная сумма транзакции для поиска.
 * @param {number} maxAmount - Максимальная сумма транзакции для поиска.
 * @returns {Array<Object>} Массив транзакций с суммой в заданном диапазоне.
 * @description Этот метод проходит по массиву транзакций и возвращает транзакции, у которых сумма находится в заданном диапазоне (включительно).
 */
    getTransactionsByAmountRange(minAmount, maxAmount) {
        const transactionsInRange = [];

        this.transactions.forEach(transaction => {
            if (transaction.transaction_amount >= minAmount && transaction.transaction_amount <= maxAmount) {
                transactionsInRange.push(transaction);
            }
        });

        return transactionsInRange;
    }

    /**
 * Вычисляет общую сумму дебетовых транзакций.
 * @returns {number} Общая сумма дебетовых транзакций.
 * @description Этот метод проходит по массиву транзакций и суммирует сумму всех дебетовых транзакций.
 */
    calculateTotalDebitAmount() {
        let totalDebitAmount = 0;

        this.transactions.forEach(transaction => {
            if (transaction.transaction_type === "debit") {
                totalDebitAmount += transaction.transaction_amount;
            }
        });

        return totalDebitAmount;
    }

    /**
 * Находит месяц, в котором было наибольшее количество транзакций.
 * @returns {string} Название месяца с наибольшим количеством транзакций.
 * @description Этот метод проходит по массиву транзакций и определяет месяц с наибольшим количеством транзакций. Затем он конвертирует номер этого месяца в название.
 */

    findMostTransactionsMonth() {
        const transactionsByMonth = {}; // Создаем объект для подсчета количества транзакций в каждом месяце

        // Пройдемся по всем транзакциям и подсчитаем количество транзакций в каждом месяце
        this.transactions.forEach(transaction => {
            const transactionDate = transaction.transaction_date;
            const month = parseInt(transactionDate.split('-')[1]); // Получаем номер месяца

            if (!transactionsByMonth[month]) {
                transactionsByMonth[month] = 0; // Инициализируем счетчик для месяца, если он еще не был инициализирован
            }

            transactionsByMonth[month]++; // Увеличиваем счетчик для текущего месяца
        });

        // Находим месяц с наибольшим количеством транзакций
        let mostTransactionsMonth = 1; // По умолчанию считаем, что наибольшее количество транзакций было в январе
        let maxTransactions = 0;

        for (let month in transactionsByMonth) {
            if (transactionsByMonth[month] > maxTransactions) {
                maxTransactions = transactionsByMonth[month];
                mostTransactionsMonth = parseInt(month);
            }
        }

        let monthName;
        if (mostTransactionsMonth === 1) {
            monthName = "Январь";
        } else if (mostTransactionsMonth === 2) {
            monthName = "Февраль";
        } else if (mostTransactionsMonth === 3) {
            monthName = "Март";
        } else if (mostTransactionsMonth === 4) {
            monthName = "Апрель";
        } else if (mostTransactionsMonth === 5) {
            monthName = "Май";
        } else if (mostTransactionsMonth === 6) {
            monthName = "Июнь";
        } else if (mostTransactionsMonth === 7) {
            monthName = "Июль";
        } else if (mostTransactionsMonth === 8) {
            monthName = "Август";
        } else if (mostTransactionsMonth === 9) {
            monthName = "Сентябрь";
        } else if (mostTransactionsMonth === 10) {
            monthName = "Октябрь";
        } else if (mostTransactionsMonth === 11) {
            monthName = "Ноябрь";
        } else if (mostTransactionsMonth === 12) {
            monthName = "Декабрь";
        }

        return monthName;
    }

    /**
 * Находит месяц, в котором было наибольшее количество дебетовых транзакций.
 * @returns {string} Название месяца с наибольшим количеством дебетовых транзакций.
 * @description Этот метод проходит по массиву транзакций и определяет месяц с наибольшим количеством дебетовых транзакций. Затем он возвращает название этого месяца.
 */

    findMostDebitTransactionMonth() {
        const transactionsByMonth = {};


        this.transactions.forEach(transaction => {
            const transactionDate = transaction.transaction_date;
            const month = parseInt(transactionDate.split('-')[1]);

            if (transaction.transaction_type === 'debit') {
                if (!transactionsByMonth[month]) {
                    transactionsByMonth[month] = 0;
                }

                transactionsByMonth[month]++;
            }
        });


        let mostDebitTransactionMonth = 1;
        let maxDebitTransactions = 0;

        for (const month in transactionsByMonth) {
            if (transactionsByMonth[month] > maxDebitTransactions) {
                maxDebitTransactions = transactionsByMonth[month];
                mostDebitTransactionMonth = parseInt(month);
            }
        }

        let monthName;
        if (mostDebitTransactionMonth === 1) {
            monthName = "Январь";
        } else if (mostDebitTransactionMonth === 2) {
            monthName = "Февраль";
        } else if (mostDebitTransactionMonth === 3) {
            monthName = "Март";
        } else if (mostDebitTransactionMonth === 4) {
            monthName = "Апрель";
        } else if (mostDebitTransactionMonth === 5) {
            monthName = "Май";
        } else if (mostDebitTransactionMonth === 6) {
            monthName = "Июнь";
        } else if (mostDebitTransactionMonth === 7) {
            monthName = "Июль";
        } else if (mostDebitTransactionMonth === 8) {
            monthName = "Август";
        } else if (mostDebitTransactionMonth === 9) {
            monthName = "Сентябрь";
        } else if (mostDebitTransactionMonth === 10) {
            monthName = "Октябрь";
        } else if (mostDebitTransactionMonth === 11) {
            monthName = "Ноябрь";
        } else if (mostDebitTransactionMonth === 12) {
            monthName = "Декабрь";
        }

        return monthName;
    }



/**
 * Определяет, каких транзакций больше: дебетовых или кредитовых.
 * @returns {string} Тип транзакций, которых больше: debit\credit\equal(равное количество).
 * @description Этот метод проходит по массиву транзакций и определяет, каких транзакций больше: дебетовых или кредитовых.
 */
    mostTransactionTypes() {
        let debitCount = 0;
        let creditCount = 0;

        this.transactions.forEach(transaction => {
            if (transaction.transaction_type === 'debit') {
                debitCount++;
            } else if (transaction.transaction_type === 'credit') {
                creditCount++;
            }
        });

        if (debitCount > creditCount) {
            return 'debit';
        } else if (debitCount < creditCount) {
            return 'credit';
        } else {
            return 'equal';
        }
    }

    /**
 * Получает транзакции, совершенные до указанной даты.
 * @param {string} date - Дата в формате "гггг-мм-дд", до которой необходимо получить транзакции.
 * @returns {Array<Object>} Массив транзакций, совершенных до указанной даты.
 * @description Этот метод проходит по массиву транзакций и возвращает транзакции, совершенные до указанной даты.
 * Для этого он сравнивает дату каждой транзакции с переданной датой и добавляет транзакцию в результирующий массив, если ее дата предшествует переданной.
 */
 getTransactionsBeforeDate(date) {
        const dateParts = date.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const day = parseInt(dateParts[2]);

        const transactionsBeforeDate = [];

        this.transactions.forEach(transaction => {
            const transactionDateParts = transaction.transaction_date.split('-');
            const transactionYear = parseInt(transactionDateParts[0]);
            const transactionMonth = parseInt(transactionDateParts[1]);
            const transactionDay = parseInt(transactionDateParts[2]);

            if (transactionYear < year ||
                (transactionYear === year && transactionMonth < month) ||
                (transactionYear === year && transactionMonth === month && transactionDay < day)) {
                transactionsBeforeDate.push(transaction);
            }
        });

        return transactionsBeforeDate;
    }


    /**
 * Находит транзакцию по ее уникальному идентификатору.
 * @param {string} id - Уникальный идентификатор транзакции.
 * @returns {Object} Найденная транзакция.
 * @description Этот метод проходит по массиву транзакций и находит транзакцию с указанным уникальным идентификатором.
 * Если транзакция найдена, она возвращается, иначе возвращается undefined.
 */
    findTransactionById(id) {
        let foundTransaction = undefined;

        this.transactions.forEach(transaction => {
            if (transaction.transaction_id === id) {
                foundTransaction = transaction;
            }
        });

        return foundTransaction;
    }


/**
 * Создает новый массив, содержащий только описания транзакций.
 * @returns {Array<string>} Массив объектов (транзакций).
 * @description Этот метод использует метод map для создания нового массива, содержащего только описания транзакций из исходного массива транзакций.
 */

    mapTransactionDescriptions() {
        return this.transactions.map(transaction => transaction.transaction_description);
    }


}



let analyzer = new TransactionAnalyzer(transactions);
// console.log(analyzer.getAllTransactions());
// console.log (analyzer.calculateTotalAmount());
// console.log (analyzer.calculateTotalAmountByDate(transactions, null, '01', '01'));
// console.log (analyzer.getTransactionByType("debit"));
// console.log (analyzer.getTransactionsInRange("2019-01-01", "2019-01-09"));
// console.log(analyzer.getTransactionsByMerchant("OnlineShop"));
// console.log(analyzer.calculateAverageTransactionAmount());
// console.log(analyzer.getTransactionsByAmountRange("10", "50"));
// console.log(analyzer.calculateTotalDebitAmount());
// console.log(analyzer.findMostTransactionsMonth());
// console.log(analyzer.findMostDebitTransactionMonth());
// console.log(analyzer.mostTransactionTypes());
// console.log(analyzer.getTransactionsBeforeDate("2019-01-09"));
// console.log(analyzer.findTransactionById("8"));
// console.log(analyzer.mapTransactionDescriptions());