let apiRecipe = undefined
const btnShowRandom = document.querySelector('#btnShowRandom')
btnShowRandom.addEventListener('click' , randomRequest )
const btnShow = document.querySelector('#btnShow')
btnShow.addEventListener('click', userNumRequest)

let promRecipe
function randomRequest() {
    let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    console.log(num)
    apiRecipe = `https://jellybellywikiapi.onrender.com/api/Recipes/${num}`
    promRecipe = fetch(apiRecipe, {method: 'GET'})
    dataRequest()
}

function userNumRequest() {
    let number = +document.querySelector('#number').value
    apiRecipe = `https://jellybellywikiapi.onrender.com/api/Recipes/${number}`
    promRecipe = fetch(apiRecipe, {method: 'GET'})
    dataRequest()
}

function dataRequest() {
    promRecipe.then((status) => {
        // if(status.ok) {
        //     alert('Запрос успешный')
        // } else {
        //     alert('Ошибка запрса на сервер')
        // }
        return status.json() 
    }).then((data) => {
        showDataOnPage(data.description , data.imageUrl, data.directions)
        console.log(data)
    })
    
}

const posts = document.querySelector('#posts')
function showDataOnPage(description, img, directions) {
    const div = document.createElement('div')
    div.className = 'recipe-block' 
    posts.prepend(div)
    console.log(directions.join(' '))
// решил не заморачиваться и использовал  innerHTML
    div.innerHTML = `        
    <p>краткое описание: ${description} </p>
    <img src="${img}" alt="">
    <p class="text">рецеп: ${directions.join('/n')}</p>
    `
}
