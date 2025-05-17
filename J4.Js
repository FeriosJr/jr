fetch("Datos.Json")
.then(response => response.json())
.then(data => {document.body.innerHTML+="<img src=data.images>" })
