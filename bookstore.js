const book = {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    genre: 'Fantasy',
    price: '$300',
    displayInfo() {
        const info = `Названние: ${this.title}, Автор: ${this.author}, Жанр: ${this.genre}, Цена: ${this.price}`;
        console.log(info);
        return info;
    },
    displayBookInfo() {
        const bookTitleElement = document.getElementById('book-title');
        const bookAuthorElement = document.getElementById('book-author');
        const bookGenreElement = document.getElementById('book-genre');
        const bookPriceElement = document.getElementById('book-price');

        bookTitleElement.textContent = this.title;
        bookAuthorElement.textContent = this.author;
        bookGenreElement.textContent = this.genre;
        bookPriceElement.textContent = this.price;
    },

    showDisplayInfo() {
        const info = this.displayInfo();
        alert(info);
    },


    changeColor() {
        const bookPriceElement = document.getElementById('book-price');
        const avgPrice = 300;
    
        const price = parseFloat(this.price.slice(1));
    
        if (price > avgPrice) {
            bookPriceElement.style.color = 'green';
        } else {
            bookPriceElement.style.color = 'red';
        }
    },

    discountPrice(discount) {
        const currentPrice = parseInt(this.price.slice(1), 10);
        const discountedPrice = `$${currentPrice - discount}`;
        this.price = discountedPrice;
        this.displayBookInfo(); 
    },
    
    changeGenre(newGenre) {
        this.genre = newGenre;
        this.displayBookInfo();
    },

    resetBook() {
        this.title = 'Harry Potter',
        this.author = 'J. K. Rowling',
        this.genre = 'Fantasy',
        this.price = '$300',
        this.displayBookInfo();
    }
};


book.displayBookInfo();

book.changeColor();

book.discountPrice(200);

book.changeGenre('Adventure');

// book.resetBook();

book.displayBookInfo();

function addClass(elementClass, element) {
    element.classList.add(elementClass);
}