function header() {
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.setAttribute('id', 'logo')
    logo.src = "../images/shinobi.svg"
    logo.alt = "Shinobi logo"

   

    const homeLink = document.createElement("button");
    homeLink.textContent = "Home";
    

    const aboutLink = document.createElement("button");
    aboutLink.textContent = "About";
   
    const menuLink = document.createElement("button");
    menuLink.textContent = "Menu";

    const contactLink = document.createElement("button");
    contactLink.textContent = "Contact";

    header.appendChild(logo);
    header.appendChild(homeLink);
    header.appendChild(aboutLink)
    header.appendChild(menuLink)
    header.appendChild(contactLink)
    document.getElementById("content").appendChild(header);

}

export { header };
