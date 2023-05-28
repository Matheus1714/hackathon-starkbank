function getJsonData() {
  let xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", "data/dados.json", true);
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    // Process the data from the JSON file
    console.log(data);
  }};
  xhr.send();
}
