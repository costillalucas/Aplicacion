// Importa la biblioteca "axios" para realizar las solicitudes HTTP
// Asegúrate de haber incluido la biblioteca axios en tu proyecto.
// Puedes incluirla con un script <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// o descargándola e incluyéndola localmente.
// Aquí se muestra el enfoque de incluirla localmente.
// Descarga axios desde https://www.npmjs.com/package/axios
// y guarda el archivo en el mismo directorio que este archivo HTML.
const axios = require('./axios.min.js');

// Define la URL de la API alojada en PythonAnywhere
const apiUrl = 'http://costillalucas.pythonanywhere.com/productos';

// Realiza una solicitud GET a la API
axios.get(apiUrl)
  .then(function (response) {
    console.log('Datos de la base de datos:', response.data);
    // Aquí puedes manipular los datos recibidos y realizar otras acciones con ellos
  })
  .catch(function (error) {
    console.log('Error al obtener datos:', error);
  });
  