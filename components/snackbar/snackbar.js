const snackbarContainer = document.querySelector(".snackbar-containerlive");
const SnackBtn = document.querySelector(".snacbar-btn");
snackbarContainer.style.display = "none"
SnackBtn.addEventListener("click",()=>{
    console.log("sk");
    snackbarContainer.style.display = "";
 
});
snackbarContainer.addEventListener("click",()=>{
    snackbarContainer.style.display = "none"; 
});
