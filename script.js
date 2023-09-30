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


