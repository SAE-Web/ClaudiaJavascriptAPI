const getDataSearch = async ()=>{
    let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    return data
}
/*https://www.themealdb.com/api/json/v1/1/search.php?s=&fbclid=IwAR1JTyaIkwftyzqnzm-GNkgH6hayha55dL4hKNpPUMjKJAJyNacR5MjXkP8*/
//GET  DATA Search meal by name//


//ParseData
document.addEventListener('DOMContentLoaded',async ()=>{
    const search = await getDataSearch()
 console.log(search)
//SelectAttribute
const area = search.strArea

const category = search.meals[0].strCategory


const dishName = search.meals[0].strMeal

const image = search.meals[0].strMealThumb


const instructions = search.meals[0].strInstructions


const ingredient = search.meals[0].strIngredient1

const measure = search.meals[0].strMeasure1


const ingredient2 = search.meals[0].strIngredient2

const measure2 = search.meals[0].strMeasure2


const ingredient3 = search.meals[0].strIngredient3

const measure3 = search.meals[0].strMeasure3


const ingredient4 = search.meals[0].strIngredient4

const measure4 = search.meals[0].strMeasure4


const ingredient5 = search.meals[0].strIngredient5

const measure5 = search.meals[0].strMeasure5


const ingredient6 = search.meals[0].strIngredient6

const measure6 = search.meals[0].strMeasure6


const ingredient7 = search.meals[0].strIngredient7

const measure7 = search.meals[0].strMeasure7


const ingredient8 = search.meals[0].strIngredient8

const measure8 = search.meals[0].strMeasure8


const ingredient9 = search.meals[0].strIngredient9

const measure9 = search.meals[0].strMeasure9


const ingredient10 = search.meals[0].strIngredient10

const measure10 = search.meals[0].strMeasure10

for (let value of search.meals) {
    let get
};

for (let value of search.meals) {
    const card = document.querySelector('#searchmealbyname'); 
    
    card.innerHTML += 
     `<ul>
     <h4>${value.strArea}</h4>
     <h5>${value.strCategory}</h5> 
     <p>${value.strMeal}</p>
     <img src="${value.strMealThumb}">
    <h2> <h6> ${value.strIngredient1} : ${value.strMeasure1}</h6>
     <h6> ${value.strIngredient2} : ${value.strMeasure2}</h6>
     <h6> ${value.strIngredient3} : ${value.strMeasure3}</h6>
     <h6> ${value.strIngredient4} : ${value.strMeasure4}</h6>
     <h6> ${value.strIngredient5} : ${value.strMeasure5}</h6>
     <h6> ${value.strIngredient6} : ${value.strMeasure6}</h6>
     <h6> ${value.strIngredient7} : ${value.strMeasure7}</h6>
     <h6> ${value.strIngredient8} : ${value.strMeasure8}</h6>
     <h6> ${value.strIngredient9} : ${value.strMeasure9}</h6>
     <h6> ${value.strIngredient10} : ${value.strMeasure10}</h6>
     <h6> ${value.strIngredient11} : ${value.strMeasure10}</h6></h2>
     <p>${value.strInstructions}</p>
    </ul>` 
    
     };
    });