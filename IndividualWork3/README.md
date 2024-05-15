## Отчет по третьей индивидуальной работе

#### Не успеваю нормально оформить readme, поэтому пока только ответы на контрольные вопросы:

1. Каким образом можно получить доступ к элементу на веб-странице с помощью JavaScript?

Чтобы получить доступ к элементу на веб-странице с помощью JavaScript, вы можете использовать различные методы, включая:

getElementById:
```js
let element = document.getElementById("myElementId");
```
и также querySelector:
```js
let element = document.querySelector(".myClass");
```
2. Что такое делегирование событий и как оно используется для эффективного управления событиями на элементах DOM?

Делегирование событий - это техника, при которой обработчик событий добавляется к родительскому элементу, который затем отслеживает события, происходящие во вложенных элементах. Это может быть эффективным способом управления событиями для множества элементов.

3. Как можно изменить содержимое элемента DOM с помощью JavaScript после его выборки?

Для изменения содержимого элемента DOM с помощью JavaScript можно использовать свойства и методы элементов, например:
```js
let element = document.getElementById("myElement");
element.textContent = "Новый текст";

``` 
или:
```js
let element = document.getElementById("myElement");
element.innerHTML = "Новый HTML контент";
```

4. Как можно добавить новый элемент в DOM дерево с помощью JavaScript?

Для создания нового элемента в DOM используется метод document.createElement(tagName), где tagName это тип создаваемого элемента (например, "div", "p", "span", и т.д.). Затем содержимое устанавливается с помощью textContent или innerHTML, получается родительский элемент и затем элемент уже можно добавить в DOM.
Вот простой пример:
```js
let container = document.getElementById("container");
let newDiv = document.createElement("div");
newDiv.textContent = "test";
container.appendChild(newDiv);
```
