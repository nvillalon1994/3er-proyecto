let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})
const contactForm = document.getElementById("contacto")
const errorDiv = document.getElementById("error")

contactForm.onsubmit = function(event){
    event.preventDefault()
    console.log(event)
    const nombre = event.target.nombre.value
    const email = event.target.email.value
    const asunto = event.target.asunto.value
    const mensaje = event.target.mensaje.value

    
    if(nombre!="" && email!="" && asunto!="" && mensaje!=""){
        console.log("Datos correctos!")
        event.target.submit()
        
    }else{
        errorDiv.innerHTML=""
        const p = document.createElement("p")
        p.innerText = "Datos incorrectos! Favor de verificar"
        errorDiv.appendChild(p)
    }

    // Regular expresions
}