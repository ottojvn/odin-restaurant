import "./style.css";
import home from "./home/home.js";
import menu from "./menu/menu.js";
import contact from "./contact/contact.js";

const cont = document.querySelector("div#content");

const header = document.createElement("header");
cont.appendChild(header);

const titleDiv = document.createElement("div");
titleDiv.id = "title-container";
header.appendChild(titleDiv);

const nav = document.createElement("nav");
nav.id = "tabs";
header.appendChild(nav);

let pages = [
  {
    name: "Home",
    id: "home",
    load: home,
  },
  {
    name: "Cardapio",
    id: "menu",
    load: menu,
  },
  {
    name: "Contato",
    id: "contact",
    load: contact,
  },
];

const tabs = document.createElement("ul");
nav.appendChild(tabs);

pages.forEach((page) => {
  const pageTab = document.createElement("li");
  pageTab.id = page.id;
  pageTab.textContent = page.name;
  pageTab.addEventListener("click", () => {
    page.load();
  });
  pageTab.classList.add("tab-button");
  tabs.appendChild(pageTab);
});

window.addEventListener("load", () => {
  home();
});
