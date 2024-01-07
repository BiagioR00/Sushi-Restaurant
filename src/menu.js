function menu() {
    const content = document.getElementById("content");
    content.textContent = "";

    const container = document.createElement("div");
    container.setAttribute("id", "imageContainer"); // Add an id to the container

    content.appendChild(container);

    createImages(container); // Call the function to create images inside the container
}

function createImages(container) {
    const imageUrls = [
        "../images/menu/carpaccio.jpg",
        "../images/menu/ebiNigiri.jpg",
        "../images/menu/hosomaki.jpg",
        "../images/menu/ravioliVerdure.jpg",
        "../images/menu/salmonNigiri.jpg",
        "../images/menu/sashimi.jpg",
        "../images/menu/temaki.jpg",
        "../images/menu/tunaNigiri.jpg",
        "../images/menu/zuppa.jpg",
    ];

    for (let i = 0; i < imageUrls.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrls[i];
        imgElement.alt = 'Image ' + (i + 1); // Set alt text as per your requirement
        container.appendChild(imgElement);
    }
}

export { menu };
