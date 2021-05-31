
const bid = [
    { bid1: '1' },
    { bid1: '2' },
    { bid1: '3' },
    { bid1: '4' },
    { bid1: '5' },
    { bid1: '6' }

]
const prr = [{ p: 10 },
{ p: 89 },
{ p: 89 }, { p: 89 }, { p: 89 }, { p: 89 },
]

const des = [

    { des1: 'product is fdfdfggg' },
    { des1: 'product is fdfdfggg' },
    { des1: 'product is fdfdfggg' },
    { des1: 'product is fdfdfggg' },
    { des1: 'product is fdfdfggg' },
    { des1: 'product is fdfdfggg' },
]

const items = [
 
    {
        name: 'creamy biscuit',
        price: '6.95 AED',
        measure: '30  pcs',
        img4: 'https://source.unsplash.com/1600x900/?biscuit'
    },
    {
        name: 'brown bread',
        price: '26.00 AED',
        measure: '40  pcs',
        img4: 'https://source.unsplash.com/1600x900/?bread'
    },
    {
        name: 'white choclate',
        price: '20.55 AED',
        measure: '10  pcs',
        img4: 'https://source.unsplash.com/1600x900/?choclate'
    },
    {
        name: 'black coffe',
        price: '62.00 AED',
        measure: '5  pcs',
        img4: 'https://source.unsplash.com/1600x900/?coffee'
    },
    {
        name: 'fresh apple',
        price: '62.00 AED',
        measure: '12  pcs',
        img4: 'https://source.unsplash.com/1600x900/?apple'
    },
 
    {
        name: 'green lemon',
        price: '44.95 AED',
        measure: '50  pcs',
        img4: 'https://source.unsplash.com/1600x900/?lemon'
    }
]
const mimg = [
    {
        img4: 'https://source.unsplash.com/1600x900/?biscuit'
    },
    {
        img4: 'https://source.unsplash.com/1600x900/?bread'
    },
    {
        img4: 'https://source.unsplash.com/1600x900/?choclate'
    },
    {
        img4: 'https://source.unsplash.com/1600x900/?coffee'
    },
    {
        img4: 'https://source.unsplash.com/1600x900/?apple'
    },
    {
        img4: 'https://source.unsplash.com/1600x900/?lemon'
    }
]



localStorage.setItem("prr", JSON.stringify(prr));
localStorage.setItem("items", JSON.stringify(items));
localStorage.setItem("mimg", JSON.stringify(mimg));
var pint = JSON.parse(localStorage.getItem("prr")); 
console.log(pint);
var storedItems = JSON.parse(localStorage.getItem("items")); 
console.log(storedItems);
var myit = JSON.parse(localStorage.getItem("mimg")); 
console.log(myit);
doShowAll();
function doShowAll() {
    var container = document.getElementById("itemList");
    for (let i = 0; i < items.length; i++) {
        var tag = document.createElement("div");
        tag.className = 'bg-warning';
        tag.classList.add("mx-5")
        tag.innerHTML = "Special Offer";
        tag.setAttribute("style", "width: 100px;text-align:center; color: white;");
        var likeImage = document.createElement("img");
        likeImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
        likeImage.src = 'hr.png';
        var addImage = document.createElement("img");
        addImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
        addImage.src = 'pls.png';
        var minusImage = document.createElement("img");
        minusImage.setAttribute("style", "text-align:center; width: 15px; height: 5px; margin-left: -6px; margin-top: -15px")
        minusImage.src = 'red.png';
        var like = document.createElement("button");
        like.className = 'btn';
        like.classList.add('btn-warning');
        like.classList.add('btn-sm');
        like.setAttribute("style", "text-align:center; width: 20px; height: 20px; float: left");
        like.appendChild(likeImage);
        var add = document.createElement("button");
        add.className = 'btn';
        add.id = "add_" + i;
        add.onclick = function () { addItems(i) };
        add.classList.add('btn-success');
        add.classList.add('btn-sm');
        add.setAttribute("style", "text-align:center; width: 20px; height: 20px; float: right");
        add.appendChild(addImage);
        var minus = document.createElement("button");
        minus.className = 'btn';
        minus.classList.add('btn-danger');
        minus.classList.add('btn-sm');
        minus.setAttribute("style", "text-align:center;color:orange;  width: 20px; height: 20px; margin-left: 120px; float: left");
        minus.appendChild(minusImage);
        minus.onclick = function () { click1(i) };
        var form = document.createElement("div");
        form.className = 'mx-3';
        form.classList = 'my-2';
        form.appendChild(like);
        form.appendChild(add);
        form.appendChild(minus);
        var image = document.createElement("img");
        image.id = "id_" + i;
        image.className = "card-img-top";
        image.src = myit[i].img4;   
        var cardTag = document.createElement("div"); 
        cardTag.className = 'card';
        cardTag.appendChild(tag);
        cardTag.appendChild(form);
        cardTag.appendChild(image);
        var cardName = document.createElement("p");
        cardName.className = "card-text";
        var cardmeas = document.createElement("p");
        cardmeas.className = "card-text";
        var cardPrice = document.createElement("p");
        cardPrice.className = "card-text";
        var prodName = document.createTextNode(storedItems[i].name);
        var prodm = document.createTextNode(storedItems[i].measure);
        var parentTag = document.createElement("div");
        parentTag.className = 'col-md-2'
        parentTag.classList.add("mx-3")
        parentTag.appendChild(cardTag);
        var cardBody = document.createElement("div");
        cardBody.className = 'card-body'
        cardBody.appendChild(cardName);
        cardName.innerHTML = prodName.nodeValue;
        cardTag.appendChild(cardBody);
        var prodPrice = document.createTextNode(storedItems[i].price);
        cardBody.appendChild(cardPrice);
        cardPrice.innerHTML = prodPrice.nodeValue;

        cardBody.appendChild(cardmeas);
        cardmeas.innerHTML = prodm.nodeValue;
        container.appendChild(parentTag); 
    }
}
var h = 0;
var names = '';
var names2 = [];
var vak3 = '';
var count = 0;
function myFunction(i) {

    //     var c;
    //     c[m]=vak3;
    //     m=m+1;

    //localStorage.setItem("c", JSON.stringify(c)); //store colors
    // var pinta = JSON.parse(localStorage.getItem("c")); //get them back
    // console.log(pinta);

    names2.push(myit[i].img4);

    localStorage.setItem("names2", JSON.stringify(names2));
    var pinta = JSON.parse(localStorage.getItem("names2"));
    alert(pinta)
    var container = document.getElementById("tb");
    if (container) {
        container.innerHTML = "";
    }
    for (let j = 0; j < names2.length; j++) {
        var likeImage = document.createElement("img");
        likeImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
        likeImage.src = 'hr.png';
        var addImage = document.createElement("img");
        addImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
        addImage.src = 'pls.png';
        var minusImage = document.createElement("img");
        minusImage.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
        minusImage.src = 'red.png';
        var like = document.createElement("button");
        like.className = 'btn';
        like.classList.add('btn-warning');
        like.classList.add('btn-sm');
        like.setAttribute("style", "text-align:center; width: 20px; height: 20px; float: left");
        like.appendChild(likeImage);
        var add = document.createElement("button");
        add.className = 'btn';
        add.id = i;
        add.onclick = addItems(i);
        add.classList.add('btn-success');
        add.classList.add('btn-sm');
        add.setAttribute("style", "text-align:center; width: 20px; height: 20px; float: right");
        add.appendChild(addImage);
        var minus = document.createElement("button");
        minus.className = 'btn';
        minus.classList.add('btn-success');
        minus.classList.add('btn-sm');
        minus.setAttribute("style", "text-align:center;color:orange;  width: 30px; height: 30px; margin-left: 5px; float: right");
        minus.innerText = 'class="bi bi-heart"';
        minus.appendChild(minusImage);
        minus.onclick = click1(i);
        minus.style.display = 'none';
        var form = document.createElement("td");
        form.className = 'mx-2';
        form.appendChild(like);
        form.appendChild(add);
        form.appendChild(minus);
        var image = document.createElement("img");
        image.id = "id_" + j;
        image.setAttribute("style", "text-align:center; width: 15px; height: 15px; margin-left: -6px; margin-top: -15px")
        image.src = pinta[j];  
        var cardTag = document.createElement("tr"); 
        cardTag.appendChild(form);
        cardTag.appendChild(image);
        container.appendChild(cardTag); 
    }
}

var quan=[];
var x
function addItems(i) {
    if(!quan.includes(i)){
    var tbBody = document.getElementById("tb");
    var inLocal = JSON.parse(localStorage.getItem("inLocal")) || []
    var newLocal = {
        id: i,
        name: storedItems[i].name,
        imgg: storedItems[i].img4,
        price: storedItems[i].price,
        quantity: 1,
        measure:storedItems[i].measure
    }
    inLocal.push(newLocal);
    localStorage.setItem("inLocal", JSON.stringify(inLocal));
    var localCart = JSON.parse(localStorage.getItem("inLocal"));
    console.log(localCart);
    var num =1;
    var str = "";
    quan.push(i);
}
var fin=0;
    for (let j = 0; j < localCart.length; j++) {
        count++;
        str += "<tr id='" + localCart[j].id+ "'><td><img src='" +
         localCart[j].imgg + "' width='50px' height='50px'></td><td>" + localCart[j].name + "</td><td>" + localCart[j].measure+ 
         "</td><td><div class='d-felx content-align-left'><button class='btn btn-sm btn-danger sub' onclick='subchk("+localCart[j].id+")'><img src='red.png' width='15px' height='5px'></button><span class='qnty p-3'>" + localCart[j].quantity + "</span><button  class='btn btn-sm btn-success add' onclick='checkItem("+localCart[j].id+")'><img src='pls.png' width='15px' height='15px'></button><button class='btn btn-sm  sub' onclick='emp("+localCart[j].id+")'><img src='dustbin.png' width='35 px' height='35px'></button></div></td><td class='unit'>" + localCart[j].price + "</td><td class='total'>" + parseFloat(localCart[j].price) * parseInt(localCart[j].quantity) + "</td></tr>";
        tbBody.innerHTML = str;
        fin=fin+ ( parseFloat(localCart[j].price) * parseInt(localCart[j].quantity));

    }
    var d=document.getElementById("demo");
    d.innerHTML=fin;

}
function checkItem(iD) {
    var el = document.getElementById(iD);
    tot=el.querySelector('.total');
    un=el.querySelector('.unit');
    qnt = el.querySelector('.qnty');
    let num = parseInt(qnt.innerHTML);
    qnt.innerHTML = num + 1;
    var b=document.getElementById("demo");
    b.innerHTML=parseFloat(b.innerHTML)+parseFloat(un.innerHTML);
    tot.innerHTML=parseFloat(un.innerHTML)*parseInt(qnt.innerHTML);
    var localCart = JSON.parse(localStorage.getItem("inLocal"));
    for (let l = 0; l < localCart.length; l++) {
        if (iD === localCart[l].id) {
            localCart[l].quantity = qnt.innerHTML;
            
            break;
        }
    }
    localStorage.setItem("inLocal", JSON.stringify(localCart))
}

function subchk(iD) {
    var el = document.getElementById(iD);


    tot=el.querySelector('.total');
    un=el.querySelector('.unit');
    qnt = el.querySelector('.qnty');
    let num = parseInt(qnt.innerHTML);
    
    qnt = el.querySelector('.qnty');
   
    qnt.innerHTML = num - 1;
    tot.innerHTML=parseFloat(tot.innerHTML)-parseFloat(un.innerHTML);
    var b=document.getElementById("demo");
b.innerHTML=parseFloat(b.innerHTML)-parseFloat(un.innerHTML);

    if(qnt.innerHTML==0){
        var stored = JSON.parse(localStorage.getItem("inLocal"));
        stored.splice(iD, 1);
        localStorage.setItem("inLocal", JSON.stringify(stored));
        var inCart = JSON.parse(localStorage.getItem("inLocal"));
        console.log(inCart);
        document.getElementById(iD).remove();

        var b=document.getElementById("demo");
        b.innerHTML=parseFloat( b.innerHTML)-parseFloat( tot.innerHTML);
    }
    var localCart = JSON.parse(localStorage.getItem("inLocal"));
    for (let l = 0; l < localCart.length; l++) {
        if (iD === localCart[l].id) {
            localCart[l].quantity = qnt.innerHTML;
            break;
        }
    }
    localStorage.setItem("inLocal", JSON.stringify(localCart))
}




function emp(iD) {
    var el = document.getElementById(iD);


    tot=el.querySelector('.total');
    un=el.querySelector('.unit');
    qnt = el.querySelector('.qnty');
    let num = parseInt(qnt.innerHTML);
    
    qnt = el.querySelector('.qnty');
   


        var stored = JSON.parse(localStorage.getItem("inLocal"));
        stored.splice(iD, 1);
        localStorage.setItem("inLocal", JSON.stringify(stored));
        var inCart = JSON.parse(localStorage.getItem("inLocal"));
        console.log(inCart);
        document.getElementById(iD).remove();

        var b=document.getElementById("demo");
        
        b.innerHTML=parseFloat( b.innerHTML)-parseFloat( tot.innerHTML);
    
    var localCart = JSON.parse(localStorage.getItem("inLocal"));
    for (let l = 0; l < localCart.length; l++) {
        if (iD === localCart[l].id) {
            localCart[l].quantity = qnt.innerHTML;
            break;
        }
    }
    localStorage.setItem("inLocal", JSON.stringify(localCart))
}




localStorage.clear();
function click1(i) {
    count--;
    var stored = JSON.parse(localStorage.getItem("inLocal"));
    stored.splice(i, 1);
    localStorage.setItem("inLocal", JSON.stringify(stored));
    var inCart = JSON.parse(localStorage.getItem("inLocal"));
    console.log(inCart);
    document.getElementById(i).remove();
}
function rcart() {
    var cont = document.getElementById("itemList");
    var val = document.getElementById('tb');
    count = 0;
    console.log(storedItems);
    val.innerHTML = "";
    cont.innerHTML = "";
    localStorage.clear();
    
    var b=document.getElementById("demo");
    b.innerHTML=0;
    doShowAll();
quan=[];
}