export function SearchForm() {
  const $searchForm = document.createElement("form"),
    $input = document.createElement("input");

  $searchForm.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Usuario";

  $searchForm.appendChild($input);

  if (location.hash.includes("#/")) {
    $input.value = localStorage.getItem("ghSearch");
  }

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!e.target.matches(".search-form")) return false;
    const query = (e.target.search && e.target.search.value) ? e.target.search.value.trim() : "";
    if (!query) {
        console.clear();
        location.hash = ``;
        return; // input vacío o sólo espacios: no hacer nada
    }
    
    console.clear();
    localStorage.setItem("ghSearch", query);
    location.hash = `/${query}`;
  });

  return $searchForm;
}
