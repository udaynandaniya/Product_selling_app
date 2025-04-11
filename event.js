for (let i = 1; i <= 100; i++) {
  let para = docment.createElement("p");
  para.textContent = "this is para" + i;
  document.body.appendChild(para);
}
