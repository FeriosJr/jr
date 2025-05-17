fetch("Datos.Json")
.then(response => response.json())
.then(data => {alert(data.Edad); })