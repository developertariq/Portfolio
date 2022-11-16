const mobileMenu = document.getElementById("dropdown");

function openNav() {
  mobileMenu.style.display= 'block';
}

function closeNav() {
  mobileMenu.style.display= 'none';
}

let works = 
[
  {
    id: 'top-work',
    name: 'Multi Post Stories', 
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './images/Work1.png',
    technology: ['CSS','HTML','Bootstrap','Ruby'],
    live: 'https://developertariq.github.io/Portfolio/',
    source: 'https://github.com/developertariq/Portfolio'
  },
  {
    id: 'work2',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './images/featured.png',
    technology: ['CSS','HTML','Bootstrap','Ruby'],
    live: 'https://developertariq.github.io/Portfolio/',
    source: 'https://github.com/developertariq/Portfolio'
  },
  {
    id: 'work3',
    name: 'Data Dashboard Healthcare', 
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './images/Work3.png',
    technology: ['HTML','Bootstrap','Ruby'],
    live: 'https://developertariq.github.io/Portfolio/',
    source: 'https://github.com/developertariq/Portfolio'
  },
  {
    id: 'work4',
    name: 'Website Portfolio', 
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './images/Work4.png',
    technology: ['HTML','Bootstrap','Ruby'],
    live: 'https://developertariq.github.io/Portfolio/',
    source: 'https://github.com/developertariq/Portfolio'
  },
  {
    id: 'work5',
    name: 'Professional Art Printing Data More', 
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './images/Work5.png',
    technology: ['HTML','Bootstrap','Ruby'],
    live: 'https://developertariq.github.io/Portfolio/',
    source: 'https://github.com/developertariq/Portfolio'
  },
  {
    id: 'work6',
    name: 'Data Dashboard Healthcare', 
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './images/Work6.png',
    technology: ['HTML','Bootstrap','Ruby'],
    live: 'https://developertariq.github.io/Portfolio/',
    source: 'https://github.com/developertariq/Portfolio'
  },
  {
    id: 'work7',
    name: 'Website Portfolio', 
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './images/Work7.png',
    technology: ['HTML','Bootstrap','Ruby'],
    live: 'https://developertariq.github.io/Portfolio/',
    source: 'https://github.com/developertariq/Portfolio'
  }
]

function showDetails(container) {
  const popupWindow = document.getElementById("popup-Window");
  popupWindow.classList.add('show-details');
  popupWindow.classList.toggle('hide');
  fillWindow (popupWindow, container.id);
  popupWindow.style.display = 'flex-block';
  document.targetWindow.style.mixBlendMode = 'multiply';
} 

function closeDetails() {
  document.getElementById("popup-Window").classList.remove('show-details');
  document.getElementById("popup-Window").classList.toggle('hide');
  document.style.mixBlendMode = 'none';
}

function fillWindow (targetWindow, workId) {
  const work = works.find(a => a.id === workId);
  targetWindow.querySelector("h3").innerText = work.name;
  targetWindow.querySelector("p").innerText = work.description;
  targetWindow.querySelector("#see-live").href = work.live;
  targetWindow.querySelector("#see-source").href = work.source;
  targetWindow.querySelector("#popup-image").src = work.image;
  targetWindow.querySelector("#popup-image").alt = work.name;
  let list = targetWindow.querySelector("#popup-list");
  list.innerHTML = "";
  for (let i = 0; i < work.technology.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(work.technology[i]));
    item.classList.add("technology");
    list.appendChild(item);
  }
}