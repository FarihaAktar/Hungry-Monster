const inputTag = document.getElementById("input-tag");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener('click', () => {
    const inputValue = inputTag.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => searchMeal(data))

})

const searchMeal = foods => {
    const foodCategory = foods.meals;
    const gridDiv = document.getElementById("grid-layer");
    const errorDiv = document.getElementById('error-massage');
    const p = document.createElement('p');
    if(foodCategory == null){
        p.innerText = "No Meals Found. Try Again.";
        console.log(p);
        errorDiv.appendChild(p);
        console.log(errorDiv);
        document.getElementById("search-meal").style.display = 'none';

    }
    else{
        foodCategory.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal-div';
            const mealName = `
            <img class="img" src="${meal.strMealThumb}">
            <h3 class="meal-name">${meal.strMeal}</h3>
            `
            mealDiv.innerHTML = mealName;
            gridDiv.appendChild(mealDiv);
    
        });
        const foodDiv = document.querySelectorAll('.meal-div');
        mealInfo(foodDiv)
    }
}

const mealInfo = allDiv => {
    allDiv.forEach(mealDiv => {
        mealDiv.addEventListener('click', function () {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealDiv.innerText}`)
                .then(res => res.json())
                .then(data => mealIngredients(data))
        })
    })

}

const mealIngredients = ingredient => {
    console.log(ingredient.meals[0])
    const ingredientDiv = document.getElementById("meal-ingredients-div");
    const ingredients = [
        ingredient.meals[0].strMeasure1 + ' ' + ingredient.meals[0].strIngredient1,
        ingredient.meals[0].strMeasure2 + ' ' + ingredient.meals[0].strIngredient2,
        ingredient.meals[0].strMeasure3 + ' ' + ingredient.meals[0].strIngredient3,
        ingredient.meals[0].strMeasure4 + ' ' + ingredient.meals[0].strIngredient4,
        ingredient.meals[0].strMeasure5 + ' ' + ingredient.meals[0].strIngredient5,
        ingredient.meals[0].strMeasure6 + ' ' + ingredient.meals[0].strIngredient6,
        ingredient.meals[0].strMeasure7 + ' ' + ingredient.meals[0].strIngredient7,
        ingredient.meals[0].strMeasure8 + ' ' + ingredient.meals[0].strIngredient8,
        ingredient.meals[0].strMeasure9 + ' ' + ingredient.meals[0].strIngredient9,
        ingredient.meals[0].strMeasure10 + ' ' + ingredient.meals[0].strIngredient10,
        ingredient.meals[0].strMeasure11 + ' ' + ingredient.meals[0].strIngredient11,
        ingredient.meals[0].strMeasure12 + ' ' + ingredient.meals[0].strIngredient12,
        ingredient.meals[0].strMeasure13 + ' ' + ingredient.meals[0].strIngredient13,
        ingredient.meals[0].strMeasure14 + ' ' + ingredient.meals[0].strIngredient14,
        ingredient.meals[0].strMeasure15 + ' ' + ingredient.meals[0].strIngredient15,
        ingredient.meals[0].strMeasure16 + ' ' + ingredient.meals[0].strIngredient16,
        ingredient.meals[0].strMeasure17 + ' ' + ingredient.meals[0].strIngredient17,
        ingredient.meals[0].strMeasure18 + ' ' + ingredient.meals[0].strIngredient18,
        ingredient.meals[0].strMeasure19 + ' ' + ingredient.meals[0].strIngredient19,
        ingredient.meals[0].strMeasure20 + ' ' + ingredient.meals[0].strIngredient20,
    ]
    console.log(ingredients)

    const singleMeal = `
    <img class="single-img" src="${ingredient.meals[0].strMealThumb}">
    <h1>${ingredient.meals[0].strMeal}</h1>
    <h3>Ingredients</h3>
    `
    ingredientDiv.innerHTML = singleMeal;
    const ul = document.createElement('ul');
    ul.className = 'ingredients-list'
    ingredients.forEach(list =>{
        console.log(list)
        if(list == " " || list.length < 6){
            return;
        }
        else{
            const newList = document.createElement('li');
            newList.innerText = list;
            ul.appendChild(newList);
        }
    })
    ingredientDiv.appendChild(ul);
    document.getElementById("search-meal").style.display = 'none';
    document.getElementById('grid-layer').style.display = 'none';
}












