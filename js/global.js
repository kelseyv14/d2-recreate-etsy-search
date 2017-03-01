//Once you've created the layout, write JavaScript to make 12 search results appear. You'll write a single JavaScript function that takes a single object as its argument. Within that function, you'll use that object to dynamically build the HTML needed to produce one search result card. And once you build that, within the function you'll append it to your search results container.

createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: '1995 UNOPENED in plastic Hail...',
    seller: 'StutzyVintageGames', 
    price: '$23.70'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Vintage Inspector Gadget Board Game -', 
    seller: 'FunkyKoala', 
    price: '$19.99'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Domino farm, Domino Fernand...', 
    seller: 'RecreVintage', 
    price: '$13.08'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Clue board game. Vintage 1995...', 
    seller: 'BuyfromGroovy', 
     price: '$30.99'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Vintage Go Board Game From T...', 
    seller: 'TinkerbellVintage', 
    price: '$17.92'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Vintage and rare 1950\'s board g...', 
    seller: 'Littlepeoplerock' ,
    price: '$20.00'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: '1990\'s "The American Girls Gam..', 
    seller: 'TravelinTimeTreasure', 
    price: '$14.95'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Chess set, Vintage chess, Ches...', 
    seller: 'GiftShopUkraine', 
    price: '$65.00'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'GO Board Game -- Reiss Games', 
    seller: 'VintageByJessie', 
    price: '$12.00'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Vintage Backgammon Board Ga...', 
    seller: 'MEMsArtShop', 
    price: '$28.16'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Vintage Risk Board Game Cards...', 
    seller: 'KKMSvintage', 
    price:  '$2.00'
});
createResultCard({
    src: 'https://unsplash.it/200/300/?random',
    caption: 'Horse Race Game OOAK Racing..', 
    seller: 'hometowngeralstore',
    price: '$39.16'
});
function createResultCard(image) {
    var card = `<div class="row card" id="app">
                <div class= "col-sm-9">
                <img src="${image.src}" alt= "Image"/><br>
                ${image.caption}<br>
                ${image.seller} ${image.price}
                </div>
               </div>`;
    document.querySelector('#app').innerHTML += card;    
}



