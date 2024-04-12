## Отчет по первой индивидуальной работе

#### 1. Инструкция по запуску:
Для запуска проекта необходимо установить файл main.js и transaction.json. Также файлы должны находиться в одной директории.

#### 2. Описание индивидуальной работы:
Данная индивидуальная работа заключалась в создании консольного приложения для анализа транзакций. Основной целью данной работы являлось ознакомление студентов с основными функциями и с синтаксисом JavaScript. 
#### 3. Краткая документация к проекту:
Краткая документация, выполненная с учетом стандарта документации JSDoc, с описанием всех методов и особенностями их работы доступна в папке out.


#### 4. Примеры использования проекта с приложением скриншотов или фрагментов кода
Функционал каждого метода можно увидеть, разкомментировав console.log-и, составленные для каждого метода. Изначально они закомментированы чтобы избежать лишнего output'а в консоли. Вот несколько примеров:
```js
 console.log (analyzer.getTransactionsInRange("2019-01-01", "2019-01-09"));
```
Выведет все транзакции в этом диапазоне:
```js
[
  {
    transaction_id: '1',
    transaction_date: '2019-01-01',
    transaction_amount: 100,
    transaction_type: 'debit',
    transaction_description: 'Payment for groceries',
    merchant_name: 'SuperMart',
    card_type: 'Visa'
  },
  {
    transaction_id: '2',
    transaction_date: '2019-01-02',
    transaction_amount: 50,
    transaction_type: 'credit',
    transaction_description: 'Refund for returned item',
    merchant_name: 'OnlineShop',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '3',
    transaction_date: '2019-01-03',
    transaction_amount: 75,
    transaction_type: 'debit',
    transaction_description: 'Dinner with friends',
    merchant_name: 'RestaurantABC',
    card_type: 'Amex'
  },
  {
    transaction_id: '4',
    transaction_date: '2019-01-04',
    transaction_amount: 120,
    transaction_type: 'debit',
    transaction_description: 'Shopping at Mall',
    merchant_name: 'FashionStoreXYZ',
    card_type: 'Discover'
  },
  {
    transaction_id: '5',
    transaction_date: '2019-01-05',
    transaction_amount: 25,
    transaction_type: 'credit',
    transaction_description: 'Returned defective product',
    merchant_name: 'ElectronicsShop',
    card_type: 'Visa'
  },
  {
    transaction_id: '6',
    transaction_date: '2019-01-06',
    transaction_amount: 60,
    transaction_type: 'debit',
    transaction_description: 'Gasoline refill',
    merchant_name: 'GasStationXYZ',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '7',
    transaction_date: '2019-01-07',
    transaction_amount: 40,
    transaction_type: 'debit',
    transaction_description: 'Lunch with colleagues',
    merchant_name: 'Cafe123',
    card_type: 'Visa'
  },
  {
    transaction_id: '8',
    transaction_date: '2019-01-08',
    transaction_amount: 90,
    transaction_type: 'debit',
    transaction_description: 'Movie tickets',
    merchant_name: 'CinemaXYZ',
    card_type: 'Amex'
  },
  {
    transaction_id: '9',
    transaction_date: '2019-01-09',
    transaction_amount: 150,
    transaction_type: 'debit',
    transaction_description: 'Weekend getaway',
    merchant_name: 'ResortABC',
    card_type: 'Discover'
  }
]
```
или например:
```js
console.log(analyzer.findMostTransactionsMonth());
```
Выведет месяц с самым большим количеством транзакций:
```js
Январь
```
или:
```js
console.log(analyzer.mostTransactionTypes());
```

Выведет самый популярный тип транзакций:
```js
debit
```
и так далее.

#### 5. Ответы на контрольные вопросы
1. Примитивные типы данных в js:

number: числовое значение, например, 10 или 3.14.
string: строка символов, например, "Hello".
boolean: логическое значение true или false.
null: значение, представляющее отсутствие значения.
undefined: специальное значение, представляющее отсутствие значения или неопределенность.
symbol: уникальное и неизменяемое значение, используемое для создания уникальных идентификаторов.
2. Какие методы массивов вы использовали для обработки и анализа данных в вашем приложении, и как они помогли в выполнении задачи?:
В моем приложении я использовал следующие методы массивов:

Больше всего использовался forEach(): для выполнения действия для каждого элемента массива, а также
push(): для добавления нового элемента в конец массива.
map(): для преобразования каждого элемента массива в новое значение.
3. В чем состоит роль конструктора класса?:
Конструктор класса в JavaScript, как и в большинстве языков программирования, используется для создания новых объектов определенного типа. Он определяет и инициализирует свойства и методы объектов этого класса. Когда мы создаем новый экземпляр класса с помощью конструктора, мы создаем объект, который наследует свойства и методы этого класса.
4. Каким образом вы можете создать новый экземпляр класса в JavaScript?:
Для создания нового экземпляра класса в JavaScript используется ключевое слово new, за которым следует имя конструктора класса и аргументы, если они необходимы. Например:
```js
let myObject = new MyClass(argument1, argument2);
```
Где MyClass - это имя класса, а argument1, argument2 - аргументы, которые могут передаваться в конструктор класса при создании нового экземпляра.

#### 6. Список использованных источников:
Основными источниками информации о методах и особенностях JavaScript послужил сайт [w3schools.com](https://www.w3schools.com/) и курс JavaScript and TypeScript на платформе moodle. Информация о документации получена с сайта [jsdoc](https://jsdoc.app/).