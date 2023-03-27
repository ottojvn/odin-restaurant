import "./style.css";
import home from "./home/home.js";

const cont = document.querySelector("div#content");

const header = document.createElement("header");
cont.appendChild(header);

const titleDiv = document.createElement("nav");
titleDiv.id = "title-container";
header.appendChild(titleDiv);

const nav = document.createElement("nav");
nav.id = "tabs";
header.appendChild(nav);

const tabs = document.createElement("ul");
nav.appendChild(tabs);

const homeTab = document.createElement("li");
homeTab.textContent = "Home";
homeTab.addEventListener("click", () => console.log("Load HOME"));
homeTab.classList.add("tab-button");
tabs.appendChild(homeTab);

window.addEventListener("load", () => home());
