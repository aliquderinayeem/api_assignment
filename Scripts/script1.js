//First the left nav part
const loadLeftNav = () =>{fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => {
        displayNavLeft(data.categories);
    })
};
displayNavLeft=(categories)=>{
    console.log(categories);
    const containerNavLeft=document.getElementById('LeftNavContainer');
    categories.forEach(category=>{
        const child=document.createElement("div");
        child.innerHTML=`${category.category_name}`
        child.classList.add('left-nav','w-full');
        containerNavLeft.appendChild(child)
    })
}

loadLeftNav();