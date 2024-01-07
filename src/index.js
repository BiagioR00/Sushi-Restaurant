/*import {header} from './header';*/
import { home } from './home';
import { menu } from './menu';
import './css/style.css';

const header = document.createElement("header");
const logo = document.createElement("img");
logo.setAttribute('id', 'logo')
logo.src = "../images/shinobi.svg"
logo.alt = "Shinobi logo"



const homeLink = document.createElement("button");
homeLink.textContent = "Home";
homeLink.addEventListener("click", home)


const aboutLink = document.createElement("button");
aboutLink.textContent = "About";

const menuLink = document.createElement("button");
menuLink.textContent = "Menu";
menuLink.addEventListener("click", menu)

const contactLink = document.createElement("button");
contactLink.textContent = "Contact";

header.appendChild(logo);
header.appendChild(homeLink);
header.appendChild(aboutLink)
header.appendChild(menuLink)
header.appendChild(contactLink)
document.getElementById("header").appendChild(header);

home();