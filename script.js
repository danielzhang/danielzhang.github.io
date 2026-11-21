const printButton = document.getElementById('print');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

const openedForPrint = new Set();
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('.project details:not([open])').forEach((project) => {
    openedForPrint.add(project);
    project.open = true;
  });
});
window.addEventListener('afterprint', () => {
  openedForPrint.forEach((project) => { project.open = false; });
  openedForPrint.clear();
});
