async function getData() {
  const response = await fetch("file.csv");
  const data = await response.text();

  console.log(data);

  const rows = data.split("\n").slice(1);
  rows.forEach((elt) => {
    const row = elt.split(",");
  });
}
getData();
