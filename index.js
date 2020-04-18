
var menuButton = document.querySelectorAll('.menu button');
var submenu = document.querySelector('.dropdown');

menuButton.forEach(function(element) {
  element.addEventListener('click', function(){
    var dropdown = element.parentElement.children[1].children[0];
    console.log(element.parentElement.children[1].children[0]);

    dropdown.classList.toggle('hidden');
  });
});
