const card=document.querySelector(".card-close");
const closeBtn=document.querySelector(".close-btn");
const refreshBtn = document.querySelector(".refresh");
refreshBtn.style.display = "none"
closeBtn.addEventListener("click",()=>{
    card.style.display = "none";
    refreshBtn.style.display = ""
  
  })
  refreshBtn.addEventListener("click",()=>{
   card.style.display = "";
  })
  