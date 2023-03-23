import "./style.css";
import home from "./home/home.js";

const cont = document.querySelector("div#content");

const header = document.createElement("header");
cont.appendChild(header);

const titleDiv = document.createElement("div");
titleDiv.id = "title-container";
header.appendChild(titleDiv);

/*
const title = document.createElement("h1");
title.textContent = "Gusteau's";
title.id = "title";
titleDiv.appendChild(title);
*/

const tabDiv = document.createElement("div");
tabDiv.id = "tabs";
header.appendChild(tabDiv);

const tabs = document.createElement("ul");
tabDiv.appendChild(tabs);

const homeTab = document.createElement("li");
homeTab.textContent = "Home";
homeTab.addEventListener("click", () => console.log("Load HOME"));
homeTab.classList.add("tab-button");
tabs.appendChild(homeTab);

