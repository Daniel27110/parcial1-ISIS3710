# parcial1-ISIS3710

## Autor

Daniel Felipe Vargas - 202123899

## Pasos de ejecución

### Requisitos previos


* Tener Git instalado en su sistema.
* Tener Node.js y npm instalados.

### 1. Clone el repositorio:

```bash
git clone https://github.com/Daniel27110/parcial1-ISIS3710.git
```

### 2. Acceder al directorio del proyecto:

```bash
cd parcial1-ISIS3710
```

### 3. Instalar dependencias:

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo:

```bash
npm start
```

### 5. Abrir la aplicación en su navegador:

Visite http://localhost:3000 en su navegador web para ver la aplicación en ejecución.

## Proceso previo al parcial

Para prepararme para el parcial, dediqué tiempo a crear los componentes necesarios para la aplicación. Además, practiqué con componentes React adicionales y componentes React Bootstrap para profundizar mi comprensión de la biblioteca React y sus componentes. Esta familiaridad resultó ser crucial para abordar efectivamente el examen parcial. De hecho, algunos de los componentes practicados fueron de gran utilidad durante el examen, permitiéndome implementarlos con confianza y precisión.

## Componentes desarollados para el examen

### Componente CardFotos.js

![Screenshot_20240317_195331](https://github.com/Daniel27110/parcial1-ISIS3710/assets/98629277/03b15686-47a0-4366-83cd-f69cbeb66171)

El componente CardFotos.js sirve como menú principal del usuario, mostrando su información de perfil y una lista de sus fotos. A continuación, se presenta un desglose de los componentes React y React Bootstrap utilizados en este componente:


* **useState**: Administra el estado del componente para los datos de las tarjetas y los usuarios.
* **useEffect**: Obtiene datos de archivos JSON (photos.json y users.json) para poblar el componente con información del usuario y sus fotos.
* **Card**: Proporciona un contenedor para la información del perfil del usuario y las fotos.
* **Container**: Crea un contenedor receptivo para el diseño de la página.
* **Row**: Organiza el contenido en filas horizontales.
* **Col**: Define columnas dentro de filas para un diseño receptivo.
* **Image**: Muestra la imagen de perfil del usuario.
* **Link**: Permite la navegación entre rutas (por ejemplo, a una página de detalles de foto específica).
* **FormattedMessage**: Facilita la internacionalización, permitiendo que el contenido se muestre en diferentes idiomas.

**Nota**: El código completo del componente CardFotos.js no se incluye aquí para evitar redundancia. Sin embargo, la explicación anterior destaca los componentes clave utilizados en este componente, el cual se puede encontrar en el codigo fuente del repositorio.

### Componente CardDetails.js

![Screenshot_20240317_195337](https://github.com/Daniel27110/parcial1-ISIS3710/assets/98629277/7b4fca89-3c45-4609-8146-59c7139fac20)

El componente CardDetails.js representa una página dedicada para cada foto individual, permitiendo a los usuarios ver los detalles de una foto específica. Es accesible en la URL /card/#, donde el # representa el ID dinámico de la foto. Se decidió implementar de esta manera dado que esta es la forma tradicional de implementar el detalle de una publicación, de tal forma que la información detallada de esta publicación no se obtiene al momento de entrar al perfil del usuario para ahorrarse el tiempo de estas peticiones, pero en vez se obteiene unicamente cuando se accede a la pagina del detalle de esta publicación. Estos son los componentes React y React Bootstrap utilizados en este componente:

* **useState**: Administra el estado del componente para los datos de las tarjetas.
* **useEffect**: Obtiene datos de photos.json para recuperar detalles de la foto específica.
* **useParams**: Extrae el ID de la foto de la ruta URL.
* **Card**: Proporciona un contenedor para los detalles de la foto.
* **Container**: Crea un contenedor receptivo para el diseño de la página.
* **Col**: Define una columna para la foto y sus detalles.
* **Card.Img**: Muestra la foto seleccionada a la publicación.
* **Card.Title**: Muestra el título de la foto con un ID.
* **Link**: Permite la navegación de regreso a la página principal (/) cuando el usuario quiere salirse de esta publicación.
* **Button**: Proporciona un botón para regresar a la página principal.

**Nota**: El código completo del componente CardDetails.js no se incluye aquí por la misma razón que el anterior. Sin embargo, la explicación proporciona una comprensión clara de los componentes esenciales utilizados.

### Componente ForumComponent.js

![Screenshot_20240317_194610](https://github.com/Daniel27110/parcial1-ISIS3710/assets/98629277/fe40b1a8-25a7-4be4-a5eb-77f158f0f574)


El componente ForumComponent.js representa el formulario de usuario, permitiendo al usuario modificar todos los aspectos de su perfíl. Para la vista implementada de la pagina, se asume que el usuario ha iniciado sesión con su cuenta, por lo que puede editar todos los campos de su perfíl. Si bien no hay muchas decisiones relevantes que mencionar específicamente para este componente, aquí hay un resumen de los componentes React y React Bootstrap utilizados:

* **useState**: Administra el estado del componente para los datos del formulario.
* **useEffect**: Obtiene datos para poblar el formulario y mostrar la imagen de perfíl.
* **Card**: Proporciona un contenedor para el formulario.
* **Container**: Crea un contenedor receptivo para el diseño de la página.
* **Row**: Organiza el contenido en filas horizontales.
* **Col**: Define columnas dentro de filas para un diseño receptivo.
* **Form.Control**: Proporciona campos de entrada para los datos del usuario.
* **Form.Label**: Etiqueta los campos de entrada.

**Nota**: El código completo del componente CardDetails.js no se incluye aquí por la misma razón que el anterior. Sin embargo, la explicación proporciona una comprensión clara de los componentes esenciales utilizados.

## Internacionalización (I18N)

Posterior al desarollo del examen, se desarolló la internacionalización de la pagina tal y como se describe en el tutorial de bloque neon, incluyendo un diccionario para cada locale soportado por la pagina (en este caso, inglés y español).  Adicional al proceso presentado en el tutorial de bloque neon, se decidió incluir tambien detección automatica del lenguaje utilizado por el navegador del usuario, para automaticamente traducir la pagina al lenguaje que el usuario espera ver. 

### Demostración del correcto funcionamiento de esta funcionalidad.

### Internacionalización de la pagina al ingles

Podemos ver que cuando cambiamos el lenguaje preferido de nuestro buscador (En este caso Firefox) a inglés, la pagina en efecto se mostrará de forma correcta en este lenguaje:

![Screenshot_20240317_194113](https://github.com/Daniel27110/parcial1-ISIS3710/assets/98629277/5a4394bf-2a0e-4fe0-a73a-9baf689da466)

El lenguaje de la pagina exitosamente se traduce al inglés:

![Screenshot_20240317_194610](https://github.com/Daniel27110/parcial1-ISIS3710/assets/98629277/fe40b1a8-25a7-4be4-a5eb-77f158f0f574)

### Internacionalización de la pagina al español

Despues de esto, vemos que si cambiamos nuevamente el lenguajde de nuestro buscador al español, la pagina en efecto se mostrará de forma correcta en este lenguaje:

![Screenshot_20240317_194749](https://github.com/Daniel27110/parcial1-ISIS3710/assets/98629277/841c7540-699f-46a1-a4be-18c0bef7d8b2)

El lenguaje de la pagina exitosamente se traduce al español:

![Screenshot_20240317_194830](https://github.com/Daniel27110/parcial1-ISIS3710/assets/98629277/deb0f0c0-7fd7-4dff-8bd5-a2dee97ca400)

### Release con internacionalización

Podemos encontrar la versión del proyecto que soporta internacionalización en el release con versión v2.0.0 y nombre 'parcial_1_final', el cual fue publicado en el tiempo establecido para desarollar esta funcionalidad. Notese por ultimo que no se traducen los elementos proprios de cada perfil como la descripción, dado que esta la define cada usuario.
