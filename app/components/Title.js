import API from "../helpers/conection_api.js";

export function Title() {
  const $ref = document.createElement("a");
  $ref.href = `${API.DOMAIN}`;
  $ref.target="_blank";
  $ref.rel="noopener noreferrer";
  $ref.innerHTML = `
    <img src="./app/assets/Octofox.svg" alt="Octofox" class="blink-shadow">
    `;

  return $ref;
}
