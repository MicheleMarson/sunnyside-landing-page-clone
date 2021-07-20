const navbar = document.querySelector(".fa-bars")
const navmenu = document.querySelector(".main__nav")

navbar.addEventListener("click", () => {
  if(navmenu.classList.contains("active")){
    navmenu.classList.remove("active")
  }else{
    navmenu.classList.add("active")
  }
})

