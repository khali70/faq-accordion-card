const articls = document.querySelectorAll(".question");
const Active = "active";
articls.forEach((articl) => {
  const title = articl.querySelector(".Q");
  title.addEventListener("click", (e) => {
    if (articl.classList.contains(Active)) {
      articl.classList.remove(Active);
    } else {
      articls.forEach((ele) => ele.classList.remove(Active));
      articl.classList.add(Active);
    }
  });
});
