async function getGiphy(searchTerm) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);

    const maxCnt = response.data['data'].length; 
    const rndmNum = Math.floor(Math.random() * maxCnt);
    const createdImg = document.createElement('img');
    const imgDiv = document.getElementById('image-div');
    
    createdImg.setAttribute('src', "");
    createdImg.setAttribute('class', 'appendedImg');
    imgDiv.append(createdImg);
    createdImg.src = response.data['data'][rndmNum]['images']['original']['url'];
}

const input = document.getElementById('input')
const searchButton = document.getElementById('search-form');
searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    getGiphy(input.value);
    input.value = "";
} )
//todo figure out how to change that to submit instead of click 

const appendedImg = document.getElementsByClassName('appendedImg');
const deleteButton = document.getElementById('delete-form');
deleteButton.addEventListener("click", function(e) {
    e.preventDefault();
$('.appendedImg').remove();
} )