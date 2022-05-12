const menu = document.getElementById("menu-open")
const container = document.getElementById("menu-container")


function menuOpen(){
    menu.classList.toggle("open");
    container.classList.toggle("hidden")
    document.body.classList.toggle("no-scroll")

}
menu.addEventListener("click",menuOpen)

fetch('http://localhost:8080/api/users', {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bWl0c2F5aW4iLCJyb2xlcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl0sImlzcyI6Ii9hcGkvbG9naW4iLCJleHAiOjE2NDcwMDI0NzZ9.u-0_1nQfD7jb1iRxZZsfSTLP3uo0CzsertfEdQd93Jg`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
 
