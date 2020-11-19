function handleSubmit() {
  let para = document.getElementById("url");
  let name = document.getElementById("name");
  let year = document.getElementById("year");
  let text = ``;
  console.log(name.textContent);
  if (name.value !== "" && year.value !== "") {
    text = `?name=${name.value}&year=${year.value}`;
  } else if (name.value === "" && year.value !== "") {
    text = `?year=${year.value}`;
  } else if (name.value !== "" && year.value === "") {
    text = `?name=${name.value}`;
  } else {
    text = ``;
  }

  para.innerHTML = ` https://localhost:8080/` + text;
}
