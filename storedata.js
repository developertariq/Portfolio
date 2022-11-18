
if(!localStorage.getItem('email')) {
  storeData();
} else {
  displayData();
}

function storeData() {
  localStorage.setItem('firstname', JSON.stringify(document.getElementById('firstname').value));
  localStorage.setItem('lastname', JSON.stringify(document.getElementById('lastname').value));
  localStorage.setItem('fullname', JSON.stringify(document.getElementById('name').value));
  localStorage.setItem('email', JSON.stringify(document.getElementById('email').value));
  localStorage.setItem('msg', JSON.stringify(document.getElementById('msg').value));
  
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
