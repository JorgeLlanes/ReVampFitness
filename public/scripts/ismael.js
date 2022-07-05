const get_chest = document.getElementById('get_chest');
const chest = document.getElementById('chest');
const get_back = document.getElementById('get_back');
const back = document.getElementById('back');
const get_legs = document.getElementById('get_legs');
const legs = document.getElementById('legs');
const get_arms = document.getElementById('get_arms');
const arms = document.getElementById('arms');
const get_cardio = document.getElementById('get_cardio');
const cardio = document.getElementById('cardio');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5db302a968mshd1d7ebe463e3510p1870b1jsn84af2f7dca61',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
get_chest.addEventListener('click', () => {
fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest', options)
	.then(response => response.json())
	.then(response => {
    let run1 = Math.floor(Math.random() * 100)
    let run2 = Math.floor(Math.random() * 100)
    let run3 = Math.floor(Math.random() * 100)
    const newInnerHTML = 
    `
        <div class="liftingRows">
          <div class="columnsfive">
          <img src="${response[run1].gifUrl}" class="workout" alt="workout">
            <h4>Workout: ${response[run1].name}</h4>
            <h4>Equipment: ${response[run1].equipment}</h4>
          </div>
          
          <div class="columnsfive">
          <img src="${response[run2].gifUrl}" class="workout" alt="workout">
            <h4>Workout: ${response[run2].name}</h4>
            <h4>Equipment: ${response[run2].equipment}</h4>
          </div>
        
          <div class="columnsfive">
          <img src="${response[run3].gifUrl}" class="workout" alt="workout">
            <h4>Workout: ${response[run3].name}</h4>
            <h4>Equipment: ${response[run3].equipment}</h4>
          </div>
        </div>
      `;
          chest.innerHTML = newInnerHTML          
})
	.catch(err => console.error(err))})

  get_back.addEventListener('click', () => {
    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back', options)
      .then(response => response.json())
      .then(response => {
        let run1 = Math.floor(Math.random() * 200)
        let run2 = Math.floor(Math.random() * 200)
        let run3 = Math.floor(Math.random() * 200)
        const newInnerHTML = 
        `
            <div class="liftingRows">
              <div class="columnsfive">
              <img src="${response[run1].gifUrl}" class="workout" alt="workout">
                <h4>Workout: ${response[run1].name}</h4>
                <h4>Equipment: ${response[run1].equipment}</h4>
              </div>
              
              <div class="columnsfive">
              <img src="${response[run2].gifUrl}" class="workout" alt="workout">
                <h4>Workout: ${response[run2].name}</h4>
                <h4>Equipment: ${response[run2].equipment}</h4>
              </div>
            
              <div class="columnsfive">
              <img src="${response[run3].gifUrl}" class="workout" alt="workout">
                <h4>Workout: ${response[run3].name}</h4>
                <h4>Equipment: ${response[run3].equipment}</h4>
              </div>
            </div>
          `;
              back.innerHTML = newInnerHTML          
    })
      .catch(err => console.error(err))})

      get_legs.addEventListener('click', () => {
        fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs', options)
          .then(response => response.json())
          .then(response => {
            let run1 = Math.floor(Math.random() * 227)
            let run2 = Math.floor(Math.random() * 180)
            let run3 = Math.floor(Math.random() * 130)
            const newInnerHTML = 
            `
                <div class="liftingRows">
                  <div class="columnsfive">
                  <img src="${response[run1].gifUrl}" class="workout" alt="workout">
                    <h4>Workout: ${response[run1].name}</h4>
                    <h4>Equipment: ${response[run1].equipment}</h4>
                  </div>
                  
                  <div class="columnsfive">
                  <img src="${response[run2].gifUrl}" class="workout" alt="workout">
                    <h4>Workout: ${response[run2].name}</h4>
                    <h4>Equipment: ${response[run2].equipment}</h4>
                  </div>
                
                  <div class="columnsfive">
                  <img src="${response[run3].gifUrl}" class="workout" alt="workout">
                    <h4>Workout: ${response[run3].name}</h4>
                    <h4>Equipment: ${response[run3].equipment}</h4>
                  </div> 
                </div>
              `;
                  legs.innerHTML = newInnerHTML          
        })
          .catch(err => console.error(err))})

          get_arms.addEventListener('click', () => {
            fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms', options)
              .then(response => response.json())
              .then(response => {
                let run1 = Math.floor(Math.random() * 292)
                let run2 = Math.floor(Math.random() * 220)
                let run3 = Math.floor(Math.random() * 150)
                const newInnerHTML = 
                `
                    <div class="liftingRows">
                      <div class="columnsfive">
                      <img src="${response[run1].gifUrl}" class="workout" alt="workout">
                        <h4>Workout: ${response[run1].name}</h4>
                        <h4>Equipment: ${response[run1].equipment}</h4>
                      </div>
                      
                      <div class="columnsfive">
                      <img src="${response[run2].gifUrl}" class="workout" alt="workout">
                        <h4>Workout: ${response[run2].name}</h4>
                        <h4>Equipment: ${response[run2].equipment}</h4>
                      </div>
                    
                      <div class="columnsfive">
                      <img src="${response[run3].gifUrl}" class="workout" alt="workout">
                        <h4>Workout: ${response[run3].name}</h4>
                        <h4>Equipment: ${response[run3].equipment}</h4>
                      </div>
                    </div>
                  `;
                      arms.innerHTML = newInnerHTML          
            })
              .catch(err => console.error(err))})

              get_cardio.addEventListener('click', () => {
                fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio', options)
                  .then(response => response.json())
                  .then(response => {
                    let run1 = Math.floor(Math.random() * 29)
                    let run2 = Math.floor(Math.random() * 29)
                    let run3 = Math.floor(Math.random() * 29)
                    const newInnerHTML = 
                    `
                        <div class="liftingRows">
                          <div class="columnsfive">
                          <img src="${response[run1].gifUrl}" class="workout" alt="workout">
                            <h4>Workout: ${response[run1].name}</h4>
                            <h4>Equipment: ${response[run1].equipment}</h4>
                          </div>
                          
                          <div class="columnsfive">
                          <img src="${response[run2].gifUrl}" class="workout" alt="workout">
                            <h4>Workout: ${response[run2].name}</h4>
                            <h4>Equipment: ${response[run2].equipment}</h4>
                          </div>
                        
                          <div class="columnsfive">
                          <img src="${response[run3].gifUrl}" class="workout" alt="workout">
                            <h4>Workout: ${response[run3].name}</h4>
                            <h4>Equipment: ${response[run3].equipment}</h4>
                          </div>
                        </div>
                      `;
                          cardio.innerHTML = newInnerHTML          
                })
                  .catch(err => console.error(err))})


  const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    chest.innerHTML = null
})

const reset1 = document.getElementById('reset1');

reset1.addEventListener('click', () => {
  back.innerHTML = null
})

const reset2 = document.getElementById('reset2');

reset2.addEventListener('click', () => {
  legs.innerHTML = null
})

const reset3 = document.getElementById('reset3');

reset3.addEventListener('click', () => {
  arms.innerHTML = null
})

const reset4 = document.getElementById('reset4');

reset4.addEventListener('click', () => {
  cardio.innerHTML = null
})





