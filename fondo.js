// Guardamos la estructura de los divs de la lava
const fondoHTML = `
    <div class="lava-container">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
    </div>
`;

// Los metemos al principio del body en cuanto cargue la página
document.body.insertAdjacentHTML('afterbegin', fondoHTML);