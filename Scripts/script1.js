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
        containerNavLeft.appendChild(child)
    })
};
//Load All data
const loadAllData=()=>{
const url='https://openapi.programming-hero.com/api/plants';
fetch(url)
.then(res=>res.json())
.then(data=>{
    displayCards(data.plants);
})
};

// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
const displayCards=(plants)=>{
    const container=document.getElementById("cardContainer");
    // container.innerHTML=``;
    plants.forEach(plant=>{
        // console.log(plant);
    let child=document.createElement("div")
    child.innerHTML=`
    <div class="p-[12px] sm:p-[14px] lg:p-[16px] rounded-[8px] sm:rounded-[10px] bg-white">
      <div>
        <img src="${plant.image}" alt="${plant.name}" class="rounded-[8px] sm:rounded-[10px] max-h-[220px] max-w-[390px] md:max-w-[176.031px] md:max-h-[117.344px] lg:max-w-[366.328px] lg:max-h-[244.219px] w-full h-full object-cover">
      </div>
      <h1 class="text-[14px] sm:text-[15px] lg:text-[16px] font-[600] leading-[18px] sm:leading-[19px] lg:leading-[20px] mt-[10px] sm:mt-[12px]">${plant.name}</h1>
      <p class="text-[11px] sm:text-[12px] font-[400] leading-[15px] sm:leading-[16px] line-clamp-2 inter mt-[6px] sm:mt-[8px]">${plant.description}</p>
      <div class="flex flex-row justify-between mt-[6px] sm:mt-[8px] items-center">
        <div class="px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-full font-[600] text-[12px] sm:text-[14px] lg:text-[15px] bg-[#DCFCE7] text-[#15803D]">${plant.category}</div>
        <div class="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] leading-[18px] sm:leading-[19px] lg:leading-[20px]"><i class="fa-solid fa-dollar-sign"></i>${plant.price}</div>
      </div>
      <div class="mt-[10px] sm:mt-[12px]">
      <button class="w-full flex justify-center items-center bg-[#15803d] text-white rounded-[9999px] py-[10px] sm:py-[12px] px-[16px] sm:px-[20px] text-[14px] sm:text-[15px] lg:text-[16px] font-[500] leading-none hover cart">Add to Cart</button>
      </div>
    </div>
    `
    container.append(child);
    })
};
const displayHover= (id) => {
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
    .then(data=>displayIndividual(data.plants))
    }
    const displayIndividual=(data)=>{
        data.forEach(d=>{
            const child=document.createElement("div");
            child.innerHTML=`
                <div class="p-[12px] sm:p-[14px] lg:p-[16px] rounded-[8px] sm:rounded-[10px] bg-white">
      <div>
        <img src="${d.image}" alt="${d.name}" class="rounded-[8px] sm:rounded-[10px] max-h-[220px] max-w-[390px] md:max-w-[176.031px] md:max-h-[117.344px] lg:max-w-[366.328px] lg:max-h-[244.219px] w-full h-full object-cover">
      </div>
      <h1 class="text-[14px] sm:text-[15px] lg:text-[16px] font-[600] leading-[18px] sm:leading-[19px] lg:leading-[20px] mt-[10px] sm:mt-[12px]">${d.name}</h1>
      <p class="text-[11px] sm:text-[12px] font-[400] leading-[15px] sm:leading-[16px] line-clamp-2 inter mt-[6px] sm:mt-[8px]">${d.description}</p>
      <div class="flex flex-row justify-between mt-[6px] sm:mt-[8px] items-center">
        <div class="px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-full font-[600] text-[12px] sm:text-[14px] lg:text-[15px] bg-[#DCFCE7] text-[#15803D]">${d.category}</div>
        <div class="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] leading-[18px] sm:leading-[19px] lg:leading-[20px]"><i class="fa-solid fa-dollar-sign"></i>${d.price}</div>
      </div>
      <div class="mt-[10px] sm:mt-[12px]">
      <button class="w-full flex justify-center items-center bg-[#15803d] text-white rounded-[9999px] py-[10px] sm:py-[12px] px-[16px] sm:px-[20px] text-[14px] sm:text-[15px] lg:text-[16px] font-[500] leading-none hover cart">Add to Cart</button>
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


//Add to cart
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.cart');
  // handle add-to-cart logic here
  const totalContainer=document.getElementById("cartContainer");
  const child=document.createElement("div");
    child.innerHTML=`
        <div class="flex justify-between py-[6px] sm:py-[8px] px-[10px] sm:px-[12px] bg-[#f0fdf4] rounded-[6px] sm:rounded-[8px]">
        <div>
        <h1 class="text-[14px] sm:text-[15px] font-[600] leading-[18px] sm:leading-[20px]">Mango Tree</h1>
        <p class="text-[14px] sm:text-[16px] font-[700] text-[#808080]"><i class="fa-solid fa-dollar-sign"></i>500&times;1</p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-xmark text-red-600"></i>
        </div>
        </div>
    `
  console.log(child)
  totalContainer.append(child);
});