let products = {
    data: [ 
    {
        productName:"Blue Jacket",
        category: "jacket",
        price:"30",
        image: "img/17.jpg",
    },
    {
        productName:"Brown Jacket",
        category: "jacket",
        price:"40",
        image: "img/18.jpg",
    },
    {
        productName:"Blue vintage Jacket",
        category: "jacket",
        price:"40",
        image: "img/19.jpg",
    },
    {
        productName:"orange winter jacket",
        category: "jacket",
        price:"30",
        image: "img/20.jpg",
    },
    {
        productName:"cream jacket",
        category: "jacket",
        price:"30",
        image: "img/21.jpg",
    },
    {
        productName:"light orange jacket",
        category: "jacket",
        price:"30",
        image: "img/22.jpg",
    },
    {
        productName:"blue denim jacket",
        category: "jacket",
        price:"30",
        image: "img/23.jpg",
    },
    {
        productName:"yellow sailor jacket",
        category: "jacket",
        price:"30",
        image: "img/24.jpg",
    },
    {
        productName:"black biker jacket",
        category: "jacket",
        price:"30",
        image: "img/25.jpg",
    },
    {
        productName:"brown vintage jacket",
        category: "jacket",
        price:"30",
        image: "img/26.jpg",
    },
    {
        productName:"black vintage jacket",
        category: "jacket",
        price:"30",
        image: "img/27.jpg",
    },
    
    
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