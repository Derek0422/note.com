var notescontainer=document.querySelector(".notes-container");
var btn=document.querySelector(".btn");
var note=document.querySelectorAll(".input-box");

btn.addEventListener("click",function () {
    let inputbox=document.createElement("p");
    // let icon=this.document.createElement("ion-icon");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    // icon.src="<ion-icon></ion-icon>";
    notescontainer.appendChild(inputbox).appendChild(icon);
})