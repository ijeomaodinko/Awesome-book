/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.booklist = [];
  }

  addBook(book) {
    this.booklist.push(book);
  }

  removeBook(booktitle) {
    this.booklist = this.booklist.filter((book) => book.title !== booktitle);
  }
}

const books = document.querySelector(".book-collection");
const addButton = document.querySelector(".add");
const inputtitle = document.querySelector(".input-title");
const inputauthor = document.querySelector(".input-author");
const collection = new BookCollection();

// to set collection to same if there is collection stored
if (localStorage.getItem("data") !== null) {
  collection.booklist = JSON.parse(localStorage.getItem("data"));
}

// to remove book from collection
function removeElement(event) {
  collection.removeBook(event.target.className);

  // to remove book from the collection
  const containertoremove = document.querySelector(
    `.${event.target.className}`
  );
  containertoremove.remove();

  // to store new collection in Local Storage
  localStorage.setItem("data", JSON.stringify(collection.booklist));
}

// to create container to place added books and remove button
function createBookElement(bookname, bookauthor) {
  const container = document.createElement("div");
  container.className = `container ${bookname}`;
  books.appendChild(container);

  // to create book title element
  const titledisplay = document.createElement("p");
  titledisplay.innerHTML = `"${bookname}" by ${bookauthor}`;
  container.appendChild(titledisplay);

  // to create remove button element
  const buttonremove = document.createElement("button");
  buttonremove.innerHTML = "Remove";
  buttonremove.classList = bookname;
  buttonremove.addEventListener("click", removeElement);
  container.appendChild(buttonremove);
}

function addtocollection() {
  const booktoadd = new Book(inputtitle.value, inputauthor.value);
  collection.addBook(booktoadd);

  createBookElement(booktoadd.title, booktoadd.author);

  // to reset form input values
  inputtitle.value = "";
  inputauthor.value = "";

  // to store new collection in Local Storage
  localStorage.setItem("data", JSON.stringify(collection.booklist));
}

function updatePage() {
  for (let i = 0; i < collection.booklist.length; i += 1) {
    createBookElement(
      collection.booklist[i].title,
      collection.booklist[i].author
    );
  }
}

addButton.addEventListener("click", addtocollection);
updatePage();

//to attach the class to a variable names that will help in diplaying of website
const list = document.querySelector(".list");
const addNew = document.querySelector(".addnew");
const contact = document.querySelector(".contact");

const list_Section = document.querySelector(".booklist");
const form_Section = document.querySelector(".form");
const contact_Section = document.querySelector(".contact-information");

//to declare the functions that will used in displaying websites
function displaylist() {
  list_Section.classList.remove("hidden");
  form_Section.classList.add("hidden");
  contact_Section.classList.add("hidden");
}

function displayaddnew() {
  list_Section.classList.add("hidden");
  form_Section.classList.remove("hidden");
  contact_Section.classList.add("hidden");
}

function displaycontact() {
  list_Section.classList.add("hidden");
  form_Section.classList.add("hidden");
  contact_Section.classList.remove("hidden");
}

//to display each of the websites
list.onclick = displaylist;
addNew.onclick = displayaddnew;
contact.onclick = displaycontact;

//to display the current date on the website
const date = document.querySelector(".date");
const datetodisplay = new Date();
date.innerHTML = datetodisplay;
