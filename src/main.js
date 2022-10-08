const cartContainer = document.getElementById('crat-container');
let cartItemsInfo = [{
    id: '1',
    name: "Superhero-1",
    price: 45,
    desc: "Excepteur esse cillum ut nulla commodo Lorem nulla est ullamco ut consequat in Laborum exercitation voluptate non ad ut et.",
    image: 'images/superhero_1.png'
}, {
    id: '2',
    name: "Superhero-2",
    price: 55,
    desc: "Excepteur esse cillum ut nulla commodo Lorem nulla est ullamco ut consequat in Laborum exercitation voluptate non ad ut et.",
    image: 'images/superhero_2.png'
}, {
    id: '3',
    name: "Superhero-3",
    price: 35,
    desc: "Excepteur esse cillum ut nulla commodo Lorem nulla est ullamco ut consequat in Laborum exercitation voluptate non ad ut et.",
    image: 'images/superhero_7.png'
}, {
    id: '4',
    name: "Superhero-4",
    price: 45,
    desc: "Excepteur esse cillum ut nulla commodo Lorem nulla est ullamco ut consequat in Laborum exercitation voluptate non ad ut et.",
    image: 'images/superhero_0.png'
}];
/* generate cart container automaticlly */
let generateCart = () => {

    return cartItemsInfo.map((item) => {
        let { id, name, price, desc, image } = item
        return `
    <div id="product-id-${id}" class="cart-item">
            <img width="200" src="${image}" alt="" />
            <div class="cart-details">
                <h4>${name}</h4>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="buttons">
                        <i onclick="decrementAmount(${id})" class="fa-solid fa-minus"></i>
                        <div id="${id}" class="quantity">0</div>
                        <i onclick="incrementAmount(${id})" class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    }).join("");

}

cartContainer.innerHTML = generateCart();

let incrementAmount = (id) => {
    let selectedItem = id;
    console.log(id);
}
let decrementAmount = (id) => {

    console.log(id);
}
let update = () => {

}