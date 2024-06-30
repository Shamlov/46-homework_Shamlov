let apiRecipe = undefined
const btnShowRandom = document.querySelector('#btnShowRandom')
btnShowRandom.addEventListener('click' , randomRequest )
let promRecipe
function randomRequest() {
    let num = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1 + 1) + Math.ceil(1)))
    console.log(num)
    apiRecipe = `https://jellybellywikiapi.onrender.com/api/Recipes/${num}`
    promRecipe = fetch(apiRecipe, {method: 'GET'})
    dataRequest()
}

function dataRequest() {
    promRecipe.then((status) => {
        if(status.ok) {
            alert('Запрос успешный')
        } else {
            alert('Ошибка запрса на сервер')
        }
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
    posts.append(div)
    console.log(directions.join(' '))
// решил не заморачиваться и использовал  innerHTML
    div.innerHTML = `        
    <p>краткое описание: ${description} </p>
    <img src="${img}" alt="">
    <p class="text">рецеп: ${directions.join('/n')}</p>
    `
}
