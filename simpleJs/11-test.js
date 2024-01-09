let anchor = document.querySelectorAll(".linking");
// console.log(anchor);

let links = Array.from(anchor, (a) => a.href);
console.log(links);
let safeLinks = links.filter((link) => link.includes("https"));
console.log(safeLinks);
