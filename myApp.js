console.log("Let's get this party started!");

async function getGiphy(searchTerm) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);

    console.log(response.data);
    const img = document.getElementById('giphy');
    const maxCnt = response.data['data'].length; 
    const rndmNum = Math.floor(Math.random * maxCnt)
    img.src = response.data['data'][40]['images']['original']['url'];
        //nothing outside of 50 works for cat 
    // const img = response.data.images.url
    // for(let url of images)
    // const newLi = document.createElement('li'); 
    // newLI.innerText = // put the url here 
    // ul.append(newLI); //note you need a ul in your html page 322 in notes 
//  console.log(response.data['data'][0]['images']['original']['url']);
//  console.log(response.data['data'][rndmNum]['images']['original']['url']);
// console.log(response.data['pagination']['total_count'])
console.log(Math.floor(Math.random() * (maxCnt)))
console.log(response.data['data'].length)
console.log(response.data['data'][rndmNum]['images']['original']['url'])
}

const input = document.getElementById('input')
const searchButton = document.getElementById('search-form');
searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    getGiphy(input.value);
    input.value = "";
} )
//todo figure out how to change that to submit instead of click 

const img = getElementById('giphy')
const deleteButton = document.getElementById('delete-form');
deleteButton.addEventListener("click", function(e) {
    e.preventDefault();
img.src = "";
//this button still doesnt work
} )