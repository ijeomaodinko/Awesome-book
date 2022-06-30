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

  removeea(book) {
    this.booklist.pop(book);
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

function removeall(book) {
  const removea = document.querySelector(".container");
  removea.textContent = "";

  localStorage.setItem("data", JSON.stringify(collection.booklist));
}

// to create container to place added books and remove button
function createBookElement(bookname, bookauthor) {
  const container = document.createElement("div");
  container.className = "container";
  container.className = `container ${bookname}`;
  books.appendChild(container);

  // to create book title element
  const titledisplay = document.createElement("p");
  titledisplay.innerHTML = `"${bookname}" by ${bookauthor}`;
  container.appendChild(titledisplay);

  // to create remove button element
  const buttonremove = document.createElement("button");
  buttonremove.innerHTML = "Remove";
  buttonremove.className = "button";
  buttonremove.addEventListener("click", removeall);
  // buttonremove.classList = bookname;
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

// to display the current date on the website
const date = document.querySelector(".date");
const datedisplay = new Date();
date.innerHTML = datedisplay;

// to attach the class to a variable names that will help in diplaying of website
const list = document.querySelector(".list");
const addNew = document.querySelector(".addnew");
const contact = document.querySelector(".contact");

const sectionList = document.querySelector(".booklist");
const sectionForm = document.querySelector(".form");
const sectionContact = document.querySelector(".contact-information");

// to declare the functions that will used in displaying websites
function displaylist() {
  sectionList.classList.remove("hidden");
  sectionForm.classList.add("hidden");
  sectionContact.classList.add("hidden");
}

function displayaddnew() {
  sectionList.classList.add("hidden");
  sectionForm.classList.remove("hidden");
  sectionContact.classList.add("hidden");
}

function displaycontact() {
  sectionList.classList.add("hidden");
  sectionForm.classList.add("hidden");
  sectionContact.classList.remove("hidden");
}

// to display each of the websites
list.addEventListener("click", displaylist);
addNew.addEventListener("click", displayaddnew);
contact.addEventListener("click", displaycontact);
