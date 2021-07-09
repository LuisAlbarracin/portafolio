function llenarCertificados(data){
    const certificados = document.getElementById('certificaciones');

    for(let i = 0; i < data.length; i++ ){
        certificados.innerHTML += `
            <div>
                <h3>${ data[i].nombre}</h3>
                <img src="${ data[i].ruta }" alt="${ data[i].descriptcion }" width="600px" height="400px" />
                <p>Empresa Certificadora: ${ data[i].empresa }</p>
                <a href="${ data[i].url }">Ver Online</a>
            </div>
        `
    }


}


function cargarCertificaciones(){
    const url = "/data/certificados.json";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
           llenarCertificados(data);
        })
        .catch((err) => console.log(err))
}

cargarCertificaciones();