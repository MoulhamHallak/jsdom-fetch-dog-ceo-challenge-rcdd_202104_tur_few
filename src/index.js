console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
function fetchPhotos() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderPhotos(json));
}
console.log(json)
});

function dogImages(dogs){
    dogs.forEach (dog => {
      const dogsContainer = document.querySelector('#dog-image-container')
      const dogs = document.createElement('img')
      dogs.src = dog
      dogsContainer.appendChild(dogs)
    });
  }