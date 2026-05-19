import multBy2 from "./multBy2";

function component(n : number) {
  const element = document.createElement("div");

  element.innerHTML = `Hello Daniel. ${n} multiplied by two is ${multBy2(n)}`;

  return element;
}

document.body.appendChild(component(3));