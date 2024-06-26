## Отчет по второй индивидуальной работе
### 1. Инструкция по запуску:
Для запуска проекта необходимо установить папку src и index.html, затем запустить index.html (желательно используя Live Server). Также файлы должны находиться в одной директории.

### 2. Описание индивидуальной работы:
Основной целью данной работы было ознакомиться с продвинутыми функциями JavaScript, включая асинхронный JavaScript, модули и обработку ошибок.
### 3. Краткая документация к проекту:
Краткая документация, выполненная с учетом стандарта документации JSDoc, с описанием всех методов и особенностями их работы доступна в папке out.
### 4. Примеры использования проекта с приложением скриншотов или фрагментов кода:
Данное мини приложение генерирует случайное занятие используя Bored API. Занятие автоматически меняется каждую минуту(контроллируется файлом index.js):
```js
async function updateData() {
    const activity = await getRandomActivity();
    updateActivity(activity);

    setTimeout(updateData, 60000);
}
```
Веб-страница выглядит следующим образом:

![Пример](https://github.com/zzzzzzqwe/JavaScript-TypeScript/blob/deb6f8fad1bb08672772461fcf889b1cb91794ac/IndividualWork2/screenshots/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA1.png)

Основной функционал мини-приложения достигается благодаря файлу activity.js. В нем используется ассинхронная функция, которая отправляет запрос на сервер API и получает ответ в формате JSON. Она извлекает данные из ответа и вовзращает текст активности:

```js
function updateActivity(activity) {
    const activityElement = document.getElementById('activity');
    if (activity !== null) {
        activityElement.textContent = activity;
    } else {
        activityElement.textContent = "К сожалению, произошла ошибка";
    }
}
```

### 5. Ответы на контрольные вопросы:
### Какое значение возвращает функция fetch?
Функция fetch возвращает объект Promise, который представляет собой асинхронную операцию получения ресурса с удаленного сервера. При использовании fetch, запрос отправляется на сервер, и когда сервер отвечает, fetch возвращает этот ответ в виде Promise.

### Что представляет собой Promise?
Промис (Promise) в JavaScript - это специальный объект, представляющий результат асинхронной операции, которая может быть в процессе выполнения или уже завершена (успешно или с ошибкой). Промис может находиться в одном из трех состояний:

Pending: Исходное состояние, когда промис еще не завершен и результат неизвестен.

Fulfilled: Состояние, когда асинхронная операция завершилась успешно, и результат доступен.

Rejected: Состояние, когда асинхронная операция завершилась с ошибкой.

Промисы обеспечивают удобный и гибкий способ управления асинхронными операциями и их результатами в JavaScript. Они используются для работы с асинхронным кодом, таким как загрузка данных из сети, чтение файлов, выполнение запросов к серверу и другие операции, которые могут занимать время.

### Какие методы доступны у объекта Promise?
У объекта Promise в JavaScript доступны следующие основные методы:

Promise.then(onFulfilled, onRejected):

Метод который использовался в работае, используется для добавления обработчиков Fulfilled и Rejected состояний промиса. Он принимает две функции обратного вызова: первая вызывается, когда промис переходит в состояние Fulfilled, а вторая вызывается, когда промис переходит в состояние Rejected.

Promise.catch(onRejected):

Метод catch() используется для добавления обработчика отклоненного (Rejected) состояния промиса. Он принимает функцию обратного вызова, которая будет вызвана в случае отклонения промиса.

Promise.reject(reason): 

Метод reject() возвращает промис, который отклоняется с указанной причиной. Этот метод полезен для создания промисов, которые должны быть отклонены сразу.

### Каковы основные различия между использованием async / await и Promise?
Основные различия между использованием async/await и промисов:

#### Синтаксис:

Промисы: 

Использование промисов требует цепочки методов .then() и .catch() для обработки результатов и ошибок. Это может привести к сложной читаемости и  [callback hell](http://callbackhell.com/).

Async/await:

Асинхронные функции с пометкой async позволяют писать асинхронный код так, как будто это синхронный код. Оператор await используется для приостановки выполнения асинхронной функции до тех пор, пока промис не разрешится или не отклонится.

#### Читаемость кода:

Промисы: 

Цепочка методов .then() может быть трудночитаемой, особенно при выполнении нескольких асинхронных операций.

Async/await:

Асинхронный код с пометкой async и использованием оператора await обеспечивает более линейный и понятный поток управления, что облегчает чтение и понимание кода.

#### Обработка ошибок:

Промисы:

Ошибки обрабатываются с помощью метода .catch(), который добавляется в конец цепочки методов .then(). Это может привести к созданию дополнительного кода для обработки ошибок.

Async/await:

Ошибки могут быть обработаны с помощью блока try...catch, что делает код более читаемым и удобным для отладки.

#### Удобство:

Промисы:

Промисы полезны, когда нужно выполнить несколько асинхронных операций одна за другой или параллельно

Async/await:

Async/await предоставляет удобный способ написания асинхронного кода, который выглядит и работает подобно синхронному коду.

### 6. Список использованных источников:

Основными источниками информации послужили лабораторные/курсы/презентации/гитхаб курса. Также использовался [w3schools.com](https://www.w3schools.com/).