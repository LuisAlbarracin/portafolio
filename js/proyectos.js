function llenarProyectos(projects){
    const proyectos = document.getElementById('proyectos');

    let proyectosHTML = ``; 
    let proyectosSize = projects.length

    for(let i = 0; i < proyectosSize; i++ ){
        proyectosHTML += `
            <div>
                <h3>${ projects[i].nombre}</h3>
                <p>${ projects[i].descripcion }</>
                <p>Lenguajes: ${projects[i].lenguajes} </p>
                <p>Estado del Proyecto: ${ projects[i].estado }</p>
                <p><a href="${ projects[i].repositorio }">Repositorio</a></p>
                <a href="${ projects[i].url }">Ver</a>
            </div>
        `
    }

    proyectos.innerHTML = proyectosHTML;

}


function cargarProyectos(){
    const url = "/data/proyectos.json";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
           llenarProyectos(data);
        })
        .catch((err) => console.log(err))
}

cargarProyectos();