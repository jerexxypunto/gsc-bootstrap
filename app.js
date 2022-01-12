const menuContainer = document.querySelector("#list_menu");
const secciones = [...document.querySelectorAll('section')];


const crearElemento = (tag,className,contenido)=>{
    const elemento =  document.createElement(tag);
    if (className) {
        elemento.classList.add(className);
    }
    if (contenido) {
        elemento.textContent = contenido;
    }
    return elemento;
}

const divPadre = crearElemento('DIV' ,'list-style-none');
const ul = crearElemento('UL','','');
let li = [];
secciones.forEach((element)=>{
    const h3 = element.children[0].textContent;
    const id = element.getAttribute('id');
    const res = crearElemento('li','','');
    const link = crearElemento('A','',h3);
    link.setAttribute('href',`#${id}`);
    res.appendChild(link);
    li.push(res);
});

ul.append(...li);
divPadre.appendChild(ul);

menuContainer.appendChild(divPadre);
