let status=true;
//Spinner part
const spContainer=document.getElementById("spinner");
spContainer.classList.add("hidden")
const spinner=(bool)=>{
  if(bool===true){
    spContainer.className="";
    spContainer.classList.add("hidden");
  }else{
    spContainer.className="";
    spContainer.classList.add("block");
  }
}

//First the left nav part
const loadLeftNav = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => {
        displayNavLeft(data.categories);
    })
};
//Previous Call's function
displayNavLeft = (categories) => {
    const containerNavLeft = document.getElementById('LeftNavContainer');
    categories.forEach(category => {
        const child = document.createElement("div");
        child.innerHTML = `<button onclick="displayHover(${category.id})" class="navClass" id="${category.id}">${category.category_name}</button>`;
        child.classList.add('left-nav', 'w-full', 'navClass');
        containerNavLeft.appendChild(child);
        child.classList.add("hover")
    })
};
//Load All data
const loadAllData=()=>{
spinner(false);
const url='https://openapi.programming-hero.com/api/plants';
fetch(url)
.then(res=>res.json())
.then(data=>{
    displayCards(data.plants);
    spinner(data.status);
})
};

const displayCards=(plants)=>{
    const container=document.getElementById("cardContainer");
    plants.forEach(plant=>{
    let child=document.createElement("div")
    child.innerHTML=`
    <div class="p-[12px] sm:p-[14px] lg:p-[16px] rounded-[8px] sm:rounded-[10px] bg-white">
      <div>
        <img src="${plant.image}" alt="${plant.name}" class="min-[2900px]:max-w-[710px] rounded-[8px] sm:rounded-[10px] max-h-[220px] max-w-[390px] md:max-w-[176.031px] md:max-h-[117.344px] lg:max-w-[366.328px] lg:max-h-[244.219px] w-full h-full object-cover">
      </div>
      <h1 onclick="my_modal_5.showModal();details('${plant.image}','${plant.name}','${plant.description}','${plant.category}','${plant.price}')" class="text-[14px] sm:text-[15px] lg:text-[16px] font-[600] leading-[18px] sm:leading-[19px] lg:leading-[20px] mt-[10px] sm:mt-[12px]">${plant.name}</h1>
      <p class="text-[11px] sm:text-[12px] font-[400] leading-[15px] sm:leading-[16px] line-clamp-2 inter mt-[6px] sm:mt-[8px]">${plant.description}</p>
      <div class="flex flex-row justify-between mt-[6px] sm:mt-[8px] items-center">
        <div class="geist px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-full font-[600] text-[12px] sm:text-[14px] lg:text-[15px] bg-[#DCFCE7] text-[#15803D]">${plant.category}</div>
        <div class="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] leading-[18px] sm:leading-[19px] lg:leading-[20px]"><i class="fa-solid fa-dollar-sign"></i>${plant.price}</div>
      </div>
      <div class="mt-[10px] sm:mt-[12px]">
      <button class="w-full flex justify-center items-center bg-[#15803d] text-white rounded-[9999px] py-[10px] sm:py-[12px] px-[16px] sm:px-[20px] text-[14px] sm:text-[15px] lg:text-[16px] font-[500] leading-none hover cart" id="cartbutton" onclick="cartadded('${plant.price}','${plant.name}')">Add to Cart</button>
      </div>
    </div>
    `
    
    container.append(child);
    })
};
const displayHover= (id) => {
    spinner(false);
    //Removal Part
    const removal = document.querySelectorAll(".navClass");
    removal.forEach(el => el.classList.remove("clickedNav"));
    //adding style to hovered part
    const hovered = document.getElementById(id);
    const parentofNav = hovered.parentNode;
    parentofNav.classList.add("clickedNav")
    //loading data part
    const container=document.getElementById("cardContainer");
    container.innerHTML=``;
    const url=`https://openapi.programming-hero.com/api/category/${id}`;
    const individual=()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{displayIndividual(data.plants);spinner(data.status)})
    }
    const displayIndividual=(data)=>{
        data.forEach(d=>{
            const child=document.createElement("div");
            child.innerHTML=`
                <div class="p-[12px] sm:p-[14px] lg:p-[16px] rounded-[8px] sm:rounded-[10px] bg-white">
      <div>
        <img src="${d.image}" alt="${d.name}" class="rounded-[8px] sm:rounded-[10px] max-h-[220px] max-w-[390px] md:max-w-[176.031px] md:max-h-[117.344px] lg:max-w-[366.328px] lg:max-h-[244.219px] min-[2900px]:min-w-[710px] w-full h-full object-cover">
      </div>
      <h1 onclick="my_modal_5.showModal();details('${d.image}','${d.name}','${d.description}','${d.category}','${d.price}')" class="text-[14px] sm:text-[15px] lg:text-[16px] font-[600] leading-[18px] sm:leading-[19px] lg:leading-[20px] mt-[10px] sm:mt-[12px]">${d.name}</h1>
      <p class="text-[11px] sm:text-[12px] font-[400] leading-[15px] sm:leading-[16px] line-clamp-2 inter mt-[6px] sm:mt-[8px]">${d.description}</p>
      <div class="flex flex-row justify-between mt-[6px] sm:mt-[8px] items-center">
        <div class="geist px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-full font-[600] text-[12px] sm:text-[14px] lg:text-[15px] bg-[#DCFCE7] text-[#15803D]">${d.category}</div>
        <div class="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] leading-[18px] sm:leading-[19px] lg:leading-[20px]"><i class="fa-solid fa-dollar-sign"></i>${d.price}</div>
      </div>
      <div class="mt-[10px] sm:mt-[12px]">
      <button class="w-full flex justify-center items-center bg-[#15803d] text-white rounded-[9999px] py-[10px] sm:py-[12px] px-[16px] sm:px-[20px] text-[14px] sm:text-[15px] lg:text-[16px] font-[500] leading-none hover cart" id="cartbutton" onclick="cartadded('${d.price}','${d.name}')">Add to Cart</button>
      </div>
    </div>
            `
            container.append(child)
        })

    }
    if(id==="special")loadAllData();
    individual();
};
loadLeftNav();
loadAllData();


//Modal Part
const details=(image,name,des,cat,price)=>{
const container=document.getElementById("modal-container")
container.innerHTML="";
container.className=""
const child=document.createElement("div")
child.innerHTML=`
    <div class="p-[12px] sm:p-[14px] lg:p-[16px] rounded-[8px] sm:rounded-[10px] bg-white">
      <div>
        <img src="${image}" alt="${name}" class="rounded-[8px] sm:rounded-[10px] w-full h-full object-cover">
      </div>
      <h1 class="text-[20px] sm:text-[30px] lg:text-[35px] font-[800] leading-[25px] sm:leading-[30px] lg:leading-[40px] mt-[16px] sm:mt-[20px]">${name}</h1>
      <p class="text-[20px] sm:text-[25px] font-[400] leading-[25px] sm:leading-[30px] inter mt-[10px] sm:mt-[16px]">${des}</p>
      <div class="flex flex-col justify-between mt-[10px] sm:mt-[16px]">
        <div class="font-[700] text-[18px] sm:text-[20px] lg:text-[25px] text-[#15803D]">${cat}</div>
        <div class="text-[18px] sm:text-[20px] lg:text-[25px] font-[700] leading-[18px] sm:leading-[19px] lg:leading-[20px]">Price:<i class="fa-solid fa-dollar-sign"></i>${price}</div>
      </div>

    </div>
`
container.append(child)
};

const gallery=()=>{
  const f=()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res=>res.json())
    .then(data=>{displaygallery(data.plants)})
    const containerNew=document.getElementById('modal-container');
    containerNew.innerHTML="";
    containerNew.className="";
    containerNew.classList.add("co");
    const displaygallery=(plants)=>{
      plants.forEach(plant=>{
        const elNew=document.createElement("div");
        elNew.innerHTML=`<img src="${plant.image}" class="max-w-[210px] max-h-[117px] rounded-lg w-full h-full object-cover">`;
        containerNew.append(elNew);
      })
    };
  };
  f();
}


const thanks=()=>{
  // console.log("hello")
  const personContainer=document.getElementById("name");
  const person=personContainer.value;
  const NContainer=document.getElementById("no");
  const no=NContainer.value;
  if(!person||!no){
  const Mcontainer=document.getElementById("modal-container");
  Mcontainer.innerHTML="";
  const elC=document.createElement("div")
  elC.innerHTML=`
 <h1 class="text-[40px] font-[900] text-red-500">Enter Your Name and no.of Trees</h1>
  `
  Mcontainer.append(elC);

    return;
  }
  const Mcontainer=document.getElementById("modal-container");
  Mcontainer.innerHTML="";
  Mcontainer.parentNode.classList.add("last")
  const elC=document.createElement("div")
  elC.innerHTML=`
<h1 class="text-[60px] font-[900] bg-gradient-to-r from-red-500 via-orange-300 to-yellow-500 bg-clip-text text-transparent">${person}</h1><!--New Learning-->
<p class="text-[30px] font-[900] bg-gradient-to-r from-black via-red-600 to-gray-400 bg-clip-text text-transparent text-center">Planted</p>
<p class="text-[50px] font-[900] bg-gradient-to-l from-green-900  via-yellow-200 to-green-950 bg-clip-text text-transparent text-right">${no} Trees</p>
  `
  Mcontainer.append(elC);
}

//Add to cart
// const CONTAINER=document.getElementById("cartbutton");
// console.log(CONTAINER)


// ATTENTION BELOW------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let totalMoney=document.getElementById("total_Money").innerText;
//Why this is not valid???
//As no one is the container now...............totaLMoney is just innerText now





let totalMoney=document.getElementById("total_Money");
let total=parseInt(totalMoney.innerText);
const cartadded=(price,name)=>{
    alert(`Added ${name} to Cart\nPrice is ${price}`)
    const totalContainer=document.getElementById("cartContainer");
    const child=document.createElement("div");
    child.innerHTML=`
        <div class="flex justify-between py-[6px] sm:py-[8px] px-[10px] sm:px-[12px] bg-[#f0fdf4] rounded-[6px] sm:rounded-[8px]">
        <div>
        <h1 class="text-[14px] sm:text-[15px] font-[600] leading-[18px] sm:leading-[20px]">${name}</h1>
        <p class="text-[14px] sm:text-[16px] font-[700] text-[#808080]"><i class="fa-solid fa-dollar-sign"></i>${price}&times;1</p>
        </div>
        <div class="flex items-center">
        <button onclick="deleted(this,${price})">
          <i class="fa-solid fa-xmark text-red-600"></i>
        </button>
        </div>
        </div>
    `;
  const E_Price=parseInt(price);
  total=total+E_Price;
  totalMoney.innerText=total.toString();
  totalContainer.append(child);
};

const deleted=(button,price)=>{
  const parent=button.parentNode.parentNode.parentNode;
  parent.classList.add("none");
  total-=price;
  totalMoney.innerText=total.toString();
}




//FAILED ATTEMPT









// document.getElementById("cartbutton").addEventListener('click', (e) => {
//   const totalContainer=document.getElementById("cartContainer");
//   const btn = e.target.closest('.cart');
//   // handle add-to-cart logic here
//   const child=document.createElement("div");
//     child.innerHTML=`
//         <div class="flex justify-between py-[6px] sm:py-[8px] px-[10px] sm:px-[12px] bg-[#f0fdf4] rounded-[6px] sm:rounded-[8px]">
//         <div>
//         <h1 class="text-[14px] sm:text-[15px] font-[600] leading-[18px] sm:leading-[20px]">Mango Tree</h1>
//         <p class="text-[14px] sm:text-[16px] font-[700] text-[#808080]"><i class="fa-solid fa-dollar-sign"></i>500&times;1</p>
//         </div>
//         <div class="flex items-center">
//           <i class="fa-solid fa-xmark text-red-600"></i>
//         </div>
//         </div>
//     `
//   console.log(child)
//   totalContainer.append(child);
// });