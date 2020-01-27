'use strict'

function getDogImage() {
    fetch('http://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
        displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.')); 
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-img').replaceWith(  
        `<img src="${responsiveJson.message}" class="results-img">`
    )
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});
