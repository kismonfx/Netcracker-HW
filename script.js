let btn = document.getElementById("button");

btn.addEventListener("click", () => {
  let ol = document.getElementById("topWords");
  let text = document.getElementById("text").value;
  let topWords = getTopWords(text);
  ol.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    if (topWords[i]) {
      let li = document.createElement("li");
      li.innerHTML = topWords[i];
      ol.append(li);
    }
  }
});

function getTopWords(text) {
  let str = text.toLowerCase();
  str = str.replace(/[^a-zа-яё\s]/g, "");
  str = str.replace(/\s+/g, " ").trim();
  let arrWords = str.split(" ");
  let objWords = {};
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i] in objWords) {
      objWords[arrWords[i]] += 1;
    } else {
      objWords[arrWords[i]] = 1;
    }
  }
  let topWords = Object.keys(objWords).sort(function (a, b) {
    return objWords[b] - objWords[a];
  });
  return topWords;
}
