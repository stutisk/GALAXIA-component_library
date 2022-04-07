const modalBtn = document.querySelector(".modal-btn");

const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal-dialog-demo ");
modal.style.display = "none";

const showModal=(e)=>{
    modal.style.display = "";
}
const hideModal=(e)=>{
    modal.style.display = "none";
}

modalBtn.addEventListener("click",showModal);
modalClose.addEventListener("click",hideModal);
