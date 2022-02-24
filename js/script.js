
const btn = document.querySelector('.btn');
const moreText = document.querySelector('.more-text');

btn.addEventListener('click', btnClick);

function btnClick() {
   console.log(moreText.classList);

   if (moreText.classList.contains('hidden')) {
      btn.textContent = "Скрыть";
   } else {
      btn.textContent = "Читать далее";
   }

   moreText.classList.toggle("hidden");
}