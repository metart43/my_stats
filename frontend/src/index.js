document.addEventListener('DOMContentLoaded',() =>{
  fetchUserInfo()
})

function fetchUserInfo() {
fetch(`http://localhost:3000/users/1`)
.then(resp => resp.json())
.then(userData => fetchUser(userData))
}

function fetchUser(user) {
  console.log(user);
}
