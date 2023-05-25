
const $picto_random = () => {
  const $logos = new Array('wordpress','php','webpack','react','android','bitbucket','bootstrap','css','drupal','git','gitlab','html5','javascript','nodejs','php','react','sass','symfony');
  const $randomNomber = Math.floor(Math.random() * $logos.length);

  let element = document.createElement('span');
  element.classList.add('picto_element');

  let imgElement= document.createElement('img');
  imgElement.src = `img/logo/${$logos[$randomNomber]}.png`;

  const $imgSize = Math.floor(Math.random() * 40);

  imgElement.style.width = $imgSize;
  imgElement.style.height = $imgSize;

  element.appendChild(imgElement);

  let body = document.querySelector('body');
  body.appendChild(element);

  element.style.setProperty('--left', Math.random() * 100 + "%");

  setTimeout(() => {
    element.remove();
  }, 3500);
  
};

/**
 * Projets
 */




(function(){
  setInterval($picto_random,800);
  //SkillsPictureMe();
 // SkillsFigure();

 window.addEventListener("scroll", () => {
  if (window.scrollY > 145) {
    document.querySelector(".table-header").classList.add("active");
  } else {
    document.querySelector(".table-header").classList.remove("active");
  }
});
}());
