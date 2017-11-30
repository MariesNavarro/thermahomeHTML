var valueAsesoria = " ";
var optionValue = " ";


function changeValue(value) {
  switch (value) {
    case 1:
      valueAsesoria = "asesoria";
    break;
    case 2:
      valueAsesoria = "solicitud de presupuesto";
    break;
    case 3:
      valueAsesoria = "información sobre producto";
    break;
  }
}


function sendTo() {
  var selectOp = _("#selectContacto"),
      name = _("#name").value,
      mensaje = _('#mensaje').value,
      city = _("#city").value,
      email = _("#email").value,
      asesoria1 = _("#asesoria1"),
      asesoria2 = _("#asesoria2"),
      asesoria3 = _("#asesoria3");
      var strUser = selectOp.options[selectOp.selectedIndex].value;

      if(strUser == 1){
        optionValue = "Empresa";
      } else if(strUser == 2) {
        optionValue = "Casa";
      } else {
        optionValue = "No ingreso dato";
      }
  window.location.href = "mailto:info@thermahome.mx?Subject=De:%20" + name + ":%20necesito%20" + valueAsesoria + "&body=" + mensaje + "%0A%0ACorreo:%20" + email + "%0AEspacio%20de%20instalacion:%20" + optionValue + "%0ACiudad:%20" + city;
}
