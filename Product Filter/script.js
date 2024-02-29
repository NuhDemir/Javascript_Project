let products = {
    data: [ 
    {
        productName:"Regular White T-shirt",
        category: "TopWear",
        price:"30",
        image: "White-Tshirt.jpg"
    },
    {
        productName:"Beige White T-shirt",
        category: "BottomWear",
        price:"32",
        image: "beige-Tshirt.jpg"
    },
    {
        productName:"Regular Black T-shirt",
        category: "TopWear",
        price:"30",
        image: "Black-Tshirt.jpg"
    },
    {
        productName:"Smart Watch",
        category: "Watch",
        price:"99",
        image: "Smart-Watch.jpg"
    },
    {
        productName:"Basic-Knife",
        category: "shoes",
        price:"122",
        image: "Basic-Knife.jpg"
    }
],
};

for(let i of products.data){
    //Create Card
    let card = document.createElement("div");
    //card should have category and should stay hidden init
    card.classList.add("card","i.category",hide);
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //image tag
    let image = document.createElement("img");
    img.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div"); 
    container.classList.add("container");
    //product name
    let name = document.createElement("h4");
    name.classList.add("product,name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);




    card.appendChild(container);

    document.getElementById("products").appendChild()

}