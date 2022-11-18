if(!localStorage.getItem('email')) {
  storeData();
} else {
  displayData();
}

function storeData() {
  localStorage.setItem('firstname', document.getElementById('firstname').value);
  localStorage.setItem('lastname', document.getElementById('lastname').value);
  localStorage.setItem('fullname', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('msg', document.getElementById('msg').value);
  
  displayData();
}

function displayData() {
  document.getElementById('firstname').value = localStorage.getItem('firstname');
  document.getElementById('lastname').value = localStorage.getItem('lastname');
  document.getElementById('name').value = localStorage.getItem('fullname');
  document.getElementById('email').value = localStorage.getItem('email');
  document.getElementById('msg').value = localStorage.getItem('msg');
}

document.getElementById('email').addEventListener('change', () => { storeData(); });

document.getElementById('firstname').addEventListener('change', () => { storeData(); });

document.getElementById('lastname').addEventListener('change', () => { storeData(); });

document.getElementById('name').addEventListener('change', () => { storeData(); });

document.getElementById('msg').addEventListener('change', () => { storeData(); });
