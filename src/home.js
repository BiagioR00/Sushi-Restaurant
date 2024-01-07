function home() {

    const content = document.getElementById("content");
    content.textContent = ""; 

    const divContainer = document.createElement("div")
    divContainer.setAttribute("id", "homeContainer")
    const divHome = document.createElement("div");
    divHome.setAttribute("id", "divHome")
    const divImage = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Fresh Healthy Delicious Sushi";

    const p = document.createElement("p");
    p.textContent = `Embark on a culinary journey with SHINOBI Sushi, where every dish tells a story of Japanese artistry and flavor. 
                    Immerse yourself in the rich tapestry of Japanese culture through each exquisite bite.`;


    const orderButton = document.createElement("button");
    orderButton.textContent = "Order Now";

    const img = document.createElement("img");
    img.src = "../images/sushi.png";
    img.alt = "Sushi image"

    divHome.appendChild(h1);
    divHome.appendChild(p);
    divHome.appendChild(orderButton);

    divImage.appendChild(img);

    divContainer.appendChild(divHome);
    divContainer.appendChild(divImage)



    
    
    
    document.getElementById("content").appendChild(divContainer);
}

export {home}