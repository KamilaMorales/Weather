//TODO: Referenciar el Select de html
var citySelect = document.getElementById("ciudades");
//---------------------------------------------------------------


async function getData() {
    const url = "https://api-colombia.com/api/v1/City";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Response status:' + '' + response.status);
      }
    


      // TODO: Crear una opcion para cada elemento del json en el select
      const json = await response.json();
      //TODO: Recorrer cada elemento del json y a gregar la opcion al select

      json.forEach(item => {
        var option = document.createElement("option");
        option.text = item.name;
        option.value = item.id;
        citySelect.add(option);
      });

      //[index].name

      console.log(json);

    } catch (error) {
      console.error(error.message);
    }
  }

  getData();
  //--------------------------------------------------------------------//

//TODO: Nueva interfaz de usuario para mostar la informacion de la ciudad seleccionada

//TODO: Enviar peticion a la api y manejar la respuesta de la api
