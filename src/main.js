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

let itemsBusket = JSON.parse(localStorage.getItem("data")) || [];
/* generate cart container automaticlly */
let generateCart = () => {

    return cartItemsInfo.map((item) => {
        let { id, name, price, desc, image } = item;

        let getStroageData = itemsBusket.find((item) => item.id == id) || [];
        console.log(itemsBusket);
        console.log(getStroageData);
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
                        <div id="${id}" class="quantity">${getStroageData.count === undefined ? 0 : getStroageData.count}</div>
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

    let item = itemsBusket.find((element) => element.id === id);

    if (item === undefined) {
        itemsBusket.push({ id: id, count: 1 });
    } else {
        item.count += 1;
    }

    localStorage.setItem('data', JSON.stringify(itemsBusket));
    update(id);
}
let decrementAmount = (id) => {

    let item = itemsBusket.find((element) => element.id === id);

    if (item.count === 0) return;
    else {
        item.count -= 1;
    }

    localStorage.setItem('data', JSON.stringify(itemsBusket));
    update(id);
}
let update = (id) => {

    let selectedItem = itemsBusket.find((item) => item.id === id);
    console.log(selectedItem.id);
    document.getElementById(id).innerHTML = selectedItem.count;
    calcItems();
}

let calcItems = () => {
    let cartIcon = document.getElementById('cart-amount-id');
    let itemsNum = itemsBusket.map((item) => item.count).reduce((x, y) => x + y, 0);
    cartIcon.innerHTML = itemsNum;
}

calcItems();