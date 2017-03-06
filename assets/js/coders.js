var datoslab = [ { Nombre : "Meche", apellido : "Zubieta", Promoción : "1era. promoción", Estado : "Trabajando" },
{ Nombre : "Arabela", apellido : "Rojas", Promoción : "2da. promoción", Estado : "Trabajando" },
 { Nombre : "María", apellido : "Rosan", Promoción : "2da. promoción", Estado : "Trabajando" },
 { Nombre : "Guadalupe", apellido : "Racio", Promoción : "3era. promoción", Estado : "Trabajando" },
 { Nombre : "Meche", apellido : "Zubieta", Promoción : "1era. promoción", Estado : "Trabajando" },
 {Nombre : "Sara", apellido : "Casa", Promoción : "3era. promoción", Estado : "Trabajando" },
{Nombre : "Daniela", apellido : "Duran", Promoción : "4ta. promoción", Estado : "Trabajando" },
{Nombre : "Michelle", apellido : "Seguil", Promoción : "5ta. promoción", Estado : "Trabajando" },
{Nombre : "Dana", apellido : "Navarro", Promoción : "5ta. promoción", Estado : "Trabajando" },];

var imprime = document.getElementsByClassName('datos');
var vacia = "";
	for (var i in datoslab) {
		var x = "<div><ul><li> Nombre : " + datoslab[i].nombre + "</li>" +
		"<li>Apellido : "+ datoslab[i].apellido + "</li>"
		+ "<li>Promoción : " + datoslab[i].promocion + "</li>" +
		 "<li>Estado : " + datoslab[i].estado + "</li></ul></div>";


		vacia += x;


}
imprime.innerHTML = "<br>" + vacia + "<br>";
