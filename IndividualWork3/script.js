/**
 * Массив, содержащий все транзакции.
 * @type {Array<Object>}
 */
let transactions = [];

/**
 * Счетчик ID для новых транзакций.
 * Используется для генерации уникальных ID.
 * @type {number}
 */
let transactionIdCounter = 1;

/**
 * Функция для добавления новой транзакции.
 * @param {void} Нет входных параметров.
 * @returns {void} Нет возвращаемых данных.
 */
function addTransaction() {
    let form = document.getElementById('transactionForm');
    let date = form.elements['date'].value;
    let category = form.elements['category'].value;
    let amount = parseFloat(form.elements['amount'].value);
    let description = form.elements['description'].value;

    let newTransaction = {
        id: transactionIdCounter,
        date: new Date(date),
        category: category,
        amount: amount,
        description: description
    };

    // Увеличиваем счетчик ID для следующей транзакции
    transactionIdCounter++;

    // Добавляем новую транзакцию в массив
    transactions.push(newTransaction);

    // Добавляем новую транзакцию в таблицу
    addTransactionToTable(newTransaction);

    // Пересчитываем общую сумму транзакций
    calculateTotal();

    // Очищаем форму после добавления транзакции
    form.reset();
}

/**
 * Функция для добавления строки с транзакцией в таблицу.
 * @param {Object} transaction Объект транзакции для добавления.
 * @returns {void} Нет возвращаемых данных.
 */
function addTransactionToTable(transaction) {
    let tableBody = document.getElementById('transactionsBody');

    let row = document.createElement('tr');
    let rowColor = transaction.amount >= 0 ? 'green' : 'red';
    let shortDescription = getShortDescription(transaction.description);

    row.innerHTML = `
        <td>${transaction.id}</td>
        <td>${transaction.date.toLocaleString()}</td>
        <td>${transaction.category}</td>
        <td>${shortDescription}</td>
        <td><button onclick="deleteTransaction(${transaction.id})">Удалить</button></td>
    `;

    row.style.backgroundColor = rowColor;

    // Добавляем обработчик события при клике на строку таблицы
    row.addEventListener('click', () => {
        showTransactionDetails(transaction);
    });

    // Добавляем строку в таблицу
    tableBody.appendChild(row);
}

/**
 * Функция для удаления транзакции по ID.
 * @param {number} transactionId ID транзакции для удаления.
 * @returns {void} Нет возвращаемых данных.
 */
function deleteTransaction(transactionId) {
    // Фильтруем массив транзакций, исключая транзакцию с заданным ID
    transactions = transactions.filter(transaction => transaction.id !== transactionId);

    // Перерисовываем таблицу после удаления транзакции
    renderTransactions();

    // Пересчитываем общую сумму транзакций
    calculateTotal();
}

/**
 * Функция для перерисовки таблицы транзакций.
 * @returns {void} Нет возвращаемых данных.
 */
function renderTransactions() {
    let tableBody = document.getElementById('transactionsBody');

    // Очищаем содержимое таблицы
    tableBody.innerHTML = '';

    // Добавляем каждую транзакцию из массива в таблицу
    transactions.forEach(transaction => {
        addTransactionToTable(transaction);
    });
}

/**
 * Функция для получения сокращенного описания транзакции.
 * Отображает первые 4 слова описания транзакции.
 * @param {string} description Описание транзакции.
 * @returns {string} Сокращенное описание транзакции.
 */
function getShortDescription(description) {
    return description.split(' ').slice(0, 4).join(' ');
}

/**
 * Функция для отображения подробного описания транзакции.
 * Отображает полную информацию о выбранной транзакции.
 * @param {Object} transaction Объект транзакции для отображения.
 * @returns {void} Нет возвращаемых данных.
 */
function showTransactionDetails(transaction) {
    let detailsDiv = document.getElementById('transactionDetails');

    // Формируем HTML с подробной информацией о транзакции
    let detailsHTML = `
        <h3>Подробная информация о транзакции</h3>
        <p><strong>ID:</strong> ${transaction.id}</p>
        <p><strong>Дата и Время:</strong> ${transaction.date.toLocaleString()}</p>
        <p><strong>Категория транзакции:</strong> ${transaction.category}</p>
        <p><strong>Сумма транзакции:</strong> ${transaction.amount}</p>
        <p><strong>Описание транзакции:</strong> ${transaction.description}</p>
    `;

    // Отображаем подробную информацию о транзакции в блоке
    detailsDiv.innerHTML = detailsHTML;
}

/**
 * Функция для расчета общей суммы всех транзакций.
 * @returns {void} Нет возвращаемых данных.
 */
function calculateTotal() {
    // Используем метод reduce для суммирования всех сумм транзакций
    let totalAmount = transactions.reduce((total, transaction) => {
        return total + transaction.amount;
    }, 0);

    // Отображаем общую сумму на странице
    let totalElement = document.getElementById('totalAmount');
    totalElement.textContent = `Общая сумма: ${totalAmount}`;
}

// Инициализация таблицы с начальными данными
renderTransactions();

// Вызываем функцию для расчета общей суммы транзакций
calculateTotal();
