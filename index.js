function $(prop){
  return document.querySelector(prop);
}
function getJSON(url, func){
  fetch(url)
    .then(response => response.json())
    .then(func);
}
