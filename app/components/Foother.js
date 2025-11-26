export function Footer() {
    const $footer= document.createElement("footer"),
    $p = document.createElement("p");
    $p.classList.add("text-footer");
    $p.textContent="Git Hub ® Inri Alva 2026";
    $footer.appendChild($p);

    return $footer;
}