let title = "littl-bee.github.io";
let position = 0;
let pauseSpaces = "       "; // Adjust number of spaces for pause effect

function marqueeTitle() {
  let fullTitle = title + pauseSpaces + title;
  let display = fullTitle.substring(position, position + title.length);
  document.title = display;
  position = (position + 1) % (title.length + pauseSpaces.length);
}

setInterval(marqueeTitle, 200);
