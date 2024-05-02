const main_contents = document.getElementById("content").children;
for (var i = 0; i < main_contents.length; i++) {
  for (var j = 0; j < main_contents[i].childElementCount; j++) {
    main_contents[i].children[j].style.setProperty("--timing",`${j*0.2}s`);
  }
}