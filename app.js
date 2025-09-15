async function getMyStuffFromOverThere() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}

getMyStuffFromOverThere();
