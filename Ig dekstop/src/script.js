const input = document.querySelector(".input-ig");
const Btn = document.querySelector(".btn");

Btn.addEventListener("click", () => {
  if (input.value == "anjai") {
    console.log("udah di tekan,cepat sana pulang");
  } else {
    console.log("harus di isi 'anjai' ");
  }
  input.value = ""
});
