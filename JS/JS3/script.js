const svg = document.getElementById("drawingArea");
let drawing = false;
let currentPath = null;

// Start drawing
svg.addEventListener("mousedown", (e) => {
  drawing = true;
  const startX = e.offsetX;
  const startY = e.offsetY;

  // Create a new path
  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("d", M ${startX} ${startY});
  currentPath.setAttribute("fill", "none");
  currentPath.setAttribute("stroke", "blue");
  currentPath.setAttribute("stroke-width", 2);
  currentPath.setAttribute("stroke-linecap", "round");
  currentPath.setAttribute("stroke-linejoin", "round");

  svg.appendChild(currentPath);
});

// Draw while moving
svg.addEventListener("mousemove", (e) => {
  if (!drawing || !currentPath) return;

  const currX = e.offsetX;
  const currY = e.offsetY;

  let d = currentPath.getAttribute("d");
  d += ` L ${currX} ${currY}`;
  currentPath.setAttribute("d", d);
});

// Stop drawing
svg.addEventListener("mouseup", () => {
  drawing = false;
  currentPath = null;
});

// In case user leaves canvas while holding mouse
svg.addEventListener("mouseleave", () => {
  drawing = false;
  currentPath = null;
});
