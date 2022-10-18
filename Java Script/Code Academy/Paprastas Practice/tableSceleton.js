// const tableSceleton = () => {
//   const newTable = () => {
//     const IDRow = document.createElement("th");
//     IDRow.textContent = "ID";

//     const imageRow = document.createElement("th");
//     imageRow.textContent = "Image";

//     const nameRow = document.createElement("th");
//     nameRow.textContent = "Name";

//     const cityRow = document.createElement("th");
//     cityRow.textContent = "City";

//     const favColorRow = document.createElement("th");
//     favColorRow.textContent = "fav-color";

//     const tr = document.createElement("tr");
//     tr.textContent = document.body.append(
//       IDRow,
//       imageRow,
//       nameRow,
//       cityRow,
//       favColorRow
//     );

//     const tHead = document.createElement("th");
//     tHead.append(tr);

//     const table = document.createElement("table");
//     table.append(tHead, document.createElement("tbody"));
//     document.body.append(table);
//   };
//   newTable();
// };
// tableSceleton();

// function populateTable(robots) {
//   const tBody = document.querySelector("tbody");
//   tBody.innerHTML = "";
// }

// populateTable();
// console.log(tBody);

// async function fetchData() {
//   try {
//     let response = await fetch("https://magnetic-melon-yam.glitch.me");
//     console.log(response);
//     if (response.ok) {
//       state.robots = await response.json();
//       populateTable(state.robots);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();
