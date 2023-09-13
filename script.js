// this is for the carousel 

const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');
let currentSlide = 0;

// Create navigation dots
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
        goToSlide(i);
    });
}

// Set the first dot as active
dotsContainer.children[currentSlide].classList.add('active');

function goToSlide(index) {
    slides[currentSlide].style.display = 'none';
    dotsContainer.children[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].style.display = 'block';
    dotsContainer.children[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Change slide every 5 seconds (adjust the interval as needed)
const interval = setInterval(nextSlide, 5000);

//this is for the api code 

/**const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

function getMealList() {
    for(let i=0; i < 3; i++){
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
            let html = " ";
            if(data.meals){
                data.meals.forEach(meal => {
                    html += `
                        <div class = "meal-item" data-id = "${meal.idMeal}">
                            <div class = "meal-img">
                                <img src = "${meal.strMealThumb}" alt = "food">
                            </div>
                            <div class = "meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href = "#" class = "recipe-btn">Get Recipe</a>
                            </div>
                        </div>
                    `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }    
            mealList.innerHTML = html;
        });
    }

}
function getMealRecipe(){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
    
}
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
**/

// script.js


const mealContainer = document.getElementById('meal-card');

// Function to fetch a random meal
async function fetchRandomMeal() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();

        if (data && data.meals) {
            const meal = data.meals[0];


            const mealCard = document.createElement('div');
            mealCard.classList.add('meal-item');
            
            mealCard.innerHTML += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <button class="meal-btn"> Click me </button>
                        </div>
                    </div>
            `;


            mealContainer.appendChild(mealCard);
        } else {
            console.error('No meals found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to periodically fetch a random meal and create a card
function fetchFiveRandomMeals() {
    mealContainer.innerHTML = " ";
    for(let i = 0 ; i < 4; i++){
        fetchRandomMeal();
    } 
}

fetchFiveRandomMeals();


