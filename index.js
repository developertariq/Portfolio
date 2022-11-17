
const mobileMenu = document.getElementById("dropdown");

function openNav() {
  mobileMenu.style.display= 'block';
  mobileMenu.style.position = 'fixed';
  document.getElementsByTagName('body').style.overflow = 'hidden';
}

function closeNav() {
  mobileMenu.style.display= 'none';
}

function showDetails(container) {
  const popupWindow = document.querySelector("#popup-window");
  popupWindow.classList.add('show-details');

  popupWindow.innerHTML = "<div class='heading-close margin-10'>\
  <h3 id='show-details-name' class='work-name popup-name'></h3>\
  <span class='closebtn' onclick='closeDetails()'>&times;</span></div>\
  <ul id='popup-list' class='technologies'></ul>\
  <div class='popup-image-container'><img id='popup-image' src='' alt='' /></div>\
  <p class='pop-up-description'></p>\
  <div class='live-btn-container'>\
  <a id='see-live' href='#' target='_blank'>See Live <i class='fas fa-external-link-alt'></i></a>\
  <a id='see-source' href='#' target='_blank'>See Source <i class='fab fa-github'></i></a></div>";

  popupWindow.classList.toggle('hide');
  fillPopupWindow (popupWindow, container.id);
}

function closeDetails() {
  document.getElementById("popup-window").classList.remove('show-details');
  document.getElementById("popup-window").classList.toggle('hide');
}

function fillPopupWindow (targetWindow, workId) {
  const work = works.find(a => a.id === workId);
  targetWindow.querySelector("h3").innerText = work.name;
  targetWindow.querySelector("p").innerText = work.description;
  targetWindow.querySelector("#see-live").href = work.livelink;
  targetWindow.querySelector("#see-source").href = work.sourcelink;
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

function fillWindow (targetWindow) {
  const work = works.find(a => a.id === targetWindow.id);
  targetWindow.querySelector("h3").innerText = work.name;
  targetWindow.querySelector("p").innerText = work.description;
  let list = targetWindow.querySelector(".proj-lang");
  if  (list !== null) {
    list.innerHTML = "";
    for (let i = 0; i < work.technology.length; i++) {
      var item = document.createElement("li");
      item.appendChild(document.createTextNode(work.technology[i]));
      item.classList.add("technology");
      list.appendChild(item);
    }
  }
  targetWindow.style.background = "linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%), url(" + work.image+")";
}

function fillWindow2 (targetWindow) {
  const work = works.find(a => a.id === targetWindow.id);
  targetWindow.querySelector("h3").innerText = work.name;
  targetWindow.querySelector("p").innerText = work.description;
  targetWindow.querySelector("#img-animation").src = work.image;
  targetWindow.querySelector("#img-animation").alt = work.name;
  let list = targetWindow.querySelector("#top-proj-lang");
  if  (list !== null) {
    list.innerHTML = "";
  
    for (let i = 0; i < work.technology.length; i++) {
      var item = document.createElement("li");
      item.appendChild(document.createTextNode(work.technology[i]));
      item.classList.add("technology");
      list.appendChild(item);
    }
  }
}

function loadRecentWorks () {
  for(let i = 0; i < works.length; i++) {
    if (i === 0) {
      document.getElementById(works[i].id).addEventListener("load", fillWindow2(document.getElementById(works[i].id)));
    }
    else {
      document.getElementById(works[i].id).addEventListener("load", fillWindow(document.getElementById(works[i].id)));
    }
  }
}
  
