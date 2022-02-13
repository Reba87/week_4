let contacto = [];

function captura() {
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let mnsj = document.getElementById("mnsj").value;
        
      
        let informacion = {
          nombre: name,
          phone: phone,
          email: email,
          mnsj: mnsj,
          
        };
        contacto.push(informacion);
      }

console.log(contacto);