function startPopup(popupID){
  const popup = document.getElementById(popupID)
  
  if (popup) {
    popup.classList.add("show");
  popup.addEventListener("click", (e) => {
    if(e.target.id == popupID || e.target.className == "fa fa-times" ) {
      popup.classList.remove("show")
    }
  });
  }

}

const button = document.querySelector(".form .btn-form");
button.addEventListener("click", () =>startPopup('popup'));
