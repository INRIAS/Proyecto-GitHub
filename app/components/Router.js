import { ajax } from "../helpers/ajax.js";
import API from "../helpers/conection_api.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  const d = document,
    w = window;
  let $main = d.getElementById("main");
  let { hash } = w.location;

  console.log(hash);

  $main.innerHTML = "";

  if (hash.includes("#/")) {
    let query = localStorage.getItem("ghSearch");
    let html = "";
    await ajax({
      url: `${API.USER}/${query}`,
      cbSuccess: (search) => {
        console.log(search);
        $main.innerHTML = SearchCard(search);
      },

      cbError: (err) => {
        // console.log(err);
        $main.innerHTML = `<p class="error">
        No existen resultados de busqueda para el termino <mark>${query}</mark>
        </p>`;;
      },
    });
  }
}
