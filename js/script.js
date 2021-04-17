
const inicio = document.getElementById('inicio')
const proyectos = document.getElementById('proyectos')
const certificados = document.getElementById('certificados')
const contacto = document.getElementById('contacto')

function ajax(url){

    const http = new XMLHttpRequest()

    http.onreadystatechange = function(){

        if(this.readyState == 4 && this.status==200){
            document.getElementById('contenido').innerHTML = this.responseText
        }

    }

    http.open('GET', url)
    http.send()

}

inicio.addEventListener("click", function(){
   ajax('presentacion.html')
})

proyectos.addEventListener("click", function(){
    ajax('proyectos.html')
})

certificados.addEventListener("click", function(){
    ajax('certificados.html')
})

contacto.addEventListener("click", function(){
    ajax('contacto.html')
})


ajax('presentacion.html')