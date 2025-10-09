const url='https://openapi.programming-hero.com/api/categories'
const loadcatagories=() => {
    fetch(url).then(res=>res.json()).then(data=>console.log(data))
}
loadcatagories();