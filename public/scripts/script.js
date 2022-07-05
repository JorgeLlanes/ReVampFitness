

const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5db302a968mshd1d7ebe463e3510p1870b1jsn84af2f7dca61',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

get_meal_btn.addEventListener('click', () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=breakfast&number=1', options)
	.then(response => response.json())
    .then(res => {
    createMeal(res.recipes[0]);
  });
});

const createMeal = (meal) => {
  const newInnerHTML = `
    <div class="rows">
      <div class="columns five">
        <img src="${meal.image}" class="food" alt="Meal Image">
        <h4>${meal.title}</h4>
        ${meal.healthScore ? `<p><strong>Health Score:</strong> ${meal.healthScore}</p>` : ''}
        ${meal.summary ? `<p><strong>Why this meal?:</strong> ${meal.summary}</p>` : ''}
        <h5>Instructions:</h5>
        <ul>
          ${meal.instructions}
        </ul>
         ${meal.sourceUrl ? `<p> want more information? <a href='${meal.sourceUrl}'>click here</a></p>` : ''}
      </div>
      <div class="columns seven">
        <h5>${meal.title}</h5>
      </div>
    </div>
  `;
  
  meal_container.innerHTML = newInnerHTML;
}




const get_meal_btnn = document.getElementById('get_lunch');
const meal_containerr = document.getElementById('lunch');

get_meal_btnn.addEventListener('click', () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=reallyhealthy%2Cdinner&number=1', options)
	.then(response => response.json())
    .then(res => {
    createLunch(res.recipes[0]);
  });
});

const createLunch = (meal) => {
  const newInnerHTML = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.image}" class="food" alt="Meal Image">
        <h4>${meal.title}</h4>
        ${meal.healthScore ? `<p><strong>Health Score:</strong> ${meal.healthScore}</p>` : ''}
        ${meal.summary ? `<p><strong>Why this meal?:</strong> ${meal.summary}</p>` : ''}
        <h5>Instructions:</h5>
        <ul>
          ${meal.instructions}
        </ul>
        ${meal.sourceUrl ? `<p> want more information? <a href='${meal.sourceUrl}'>click here</a></p>` : ''}
      </div>
      <div class="columns seven">
        <h5>${meal.title}</h5>
      </div>
    </div>
  `;
  
  meal_containerr.innerHTML = newInnerHTML;
}





const get_meal_btnnn = document.getElementById('get_dinner');
const meal_containerrr = document.getElementById('dinner');

get_meal_btnnn.addEventListener('click', () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=reallyhealthy%2Cdinner&number=1', options)
	.then(response => response.json())
    .then(res => {
    createDinner(res.recipes[0]);
  });
});

const createDinner = (meal) => {
  const newInnerHTML = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.image}" class="food" alt="Meal Image">
        <h4>${meal.title}</h4>
        ${meal.healthScore ? `<p><strong>Health Score:</strong> ${meal.healthScore}</p>` : ''}
        ${meal.summary ? `<p><strong>Why this meal?:</strong> ${meal.summary}</p>` : ''}
        <h5>Instructions:</h5>
        <ul>
          ${meal.instructions}
        </ul>
        ${meal.sourceUrl ? `<p> want more information? <a href='${meal.sourceUrl}'>click here</a></p>` : ''}
      </div>
      <div class="columns seven">
        <h5>${meal.title}</h5>
      </div>
    </div>
  `;
  
  meal_containerrr.innerHTML = newInnerHTML;
}



const get_meal_btnnnn = document.getElementById('get_snack');
const meal_containerrrr = document.getElementById('snack');

get_meal_btnnnn.addEventListener('click', () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=reallyhealthy%2Csnack&number=1', options)
	.then(response => response.json())
    .then(res => {
    createSnack(res.recipes[0]);
  });
});

const createSnack = (meal) => {
  const newInnerHTML = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.image}" class="food" alt="Meal Image">
        <h4>${meal.title}</h4>
        ${meal.healthScore ? `<p><strong>Health Score:</strong> ${meal.healthScore}</p>` : ''}
        ${meal.summary ? `<p><strong>Why this meal?:</strong> ${meal.summary}</p>` : ''}
        <h5>Instructions:</h5>
        <ul>
          ${meal.instructions}
        </ul>
        ${meal.sourceUrl ? `<p> want more information? <a href='${meal.sourceUrl}'>click here</a></p>` : ''}
      </div>
      <div class="columns seven">
        <h5>${meal.title}</h5>
      </div>
    </div>
  `;
  
  meal_containerrrr.innerHTML = newInnerHTML;
}



const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    meal_container.innerHTML = null
})

const reset1 = document.getElementById('reset1');

reset1.addEventListener('click', () => {
    meal_containerr.innerHTML = null
})

const reset2 = document.getElementById('reset2');

reset2.addEventListener('click', () => {
    meal_containerrr.innerHTML = null
})

const reset3 = document.getElementById('reset3');

reset3.addEventListener('click', () => {
    meal_containerrrr.innerHTML = null
})
