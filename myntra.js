let bagItems;
onload();

function onload(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr?JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displaybagicon();
}

function addtobag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displaybagicon();
}

function displaybagicon(){  
    let bagItemCountElement=document.querySelector('.bagItemCount');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility='hidden';
    }
}

function displayItemsOnHomePage(){
let itemsContainerElement= document.querySelector('.items-container');
let innerHTML='';
if(!itemsContainerElement){return;}
items.forEach(item=>{
    innerHTML+=`<div class="item-container">
                <img class="item-image" src="${item.image}" alt="no pic">
                <div class="rating">${item.rating.stars}⭐| ${item.rating.count} </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs.${item.current_price}</span>
                    <span class="original-price">Rs.${item.original_price}</span>
                    <span class="discount">${item.discount_percentage}</span>
                </div>
                <button class="btn-add-bag" onclick="addtobag(${item.id})">Add to bag</button>
            </div>`
});
itemsContainerElement.innerHTML=innerHTML;
}