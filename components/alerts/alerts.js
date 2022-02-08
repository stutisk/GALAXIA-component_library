const alertBox = document.querySelector(".alert-close");
const alertBtn = document.querySelector(".alert-close-btn");
const refreshBtn = document.querySelector(".refresh");
refreshBtn.style.display = "none"



alertBtn.addEventListener("click",()=>{
    alertBox.style.display = "none";
    refreshBtn.style.display = ""
})
refreshBtn.addEventListener("click",()=>{
  alertBox.style.display = "";
})