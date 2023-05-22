
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
 * SKILLS
 */

const SkillsPictureMe = () => {
  const $me = document.querySelector('.--me-skills img');
  const $originUrl = 'file:///C:/Users/Cr%C3%A9a/Documents/_PROJET/portfolio/_projetGit/portfolio/img/me-thumbs.png';
  const $gifUrl = 'file:///C:/Users/Cr%C3%A9a/Documents/_PROJET/portfolio/_projetGit/portfolio/img/me-thumbs.gif';

  setTimeout(() => {
    $me.src = $originUrl;
  }, 3500);
}




(function(){
  setInterval($picto_random,800);
  //SkillsPictureMe();
 // SkillsFigure();
}());
