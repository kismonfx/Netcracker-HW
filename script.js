let hiddenBlock = document.querySelector(".footer__info");
let btnSetting = document.querySelector(".footer__button");
let btnInfo = document.querySelector(".button_help");

btnSetting.addEventListener("click", showBlock);
function showBlock() {
  if (getComputedStyle(hiddenBlock).display == "none") {
    btnSetting.style.transform = "rotate(180deg)";
    hiddenBlock.style.display = "block";
  } else {
    btnSetting.style.transform = "rotate(0)";
    hiddenBlock.style.display = "none";
  }
}

btnInfo.addEventListener("click", showInfo);
function showInfo() {
  Swal.fire({
    title: "Information",
    text: "Sweet Alert",
    icon: "info",
  });
}
