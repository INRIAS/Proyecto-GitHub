export function SearchCard(props) {
  let {
    avatar_url,
    html_url,
    name,
    location,
    email,
    public_repos,
    followers,
    created_at,
  } = props;

  let dataFormate = new Date(created_at).toLocaleString();

  let confiEmail = email ? email : "Sin Información";

  return `
 <section class="search-card">
    <div class="div1">
        <a href="${html_url}" target="_blank" rel="noopener noreferrer">
            <img src="${avatar_url}" alt="avatar">
        </a>
    </div>
    <div class="div2">
        <p><b>Usuario: </b>${name}</p>
        <p><b>Email: </b>${confiEmail}</p>
        <p><b>Origen: </b>${location}</p>
    </div>
    <div class="div3">
        <p><b>Repositorios: </b>${public_repos}</p>
        <p><b>Seguidores: </b>${followers}</p>
        <p><b>Fecha Creación: </b>${dataFormate}</p>
    </div>
 </section>
 `;
}
