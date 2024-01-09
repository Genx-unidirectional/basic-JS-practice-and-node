let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  for (let i = 0; i < 2; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(`The row ${i} has ${j} cell`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  table.setAttribute("border", "2");
  document.querySelector(".test").appendChild(table);
});
