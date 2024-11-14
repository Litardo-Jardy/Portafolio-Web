# 🚀 **Portafolio Web**

## 📜 Descripcion
 Este proyecto sirve como una plantilla para mostar un portafolio web. Con sus 4 modulos cubre todo lo que un buen portafolio debria tener siendo estos: presentacion, informacion personal, proyectos y contacto. La informacion de cada modulo es      personalizable mediante un json's que contendran todos los detalles.

## 🔧 Instalacion
1. Clona el repositorio:

     ```bash

     git clone
     https://github.com/Litardo-Jardy/Portafolio-Web.git

   ```

2. Instala las dependencias necesarias para el proyecto (Omitir "-"):
 
   ```bash
      -
      npm install
   ```

3. Configura tu EmailJs para el modulo de contacto:
   
   - [EmailJs](https://www.emailjs.com/)
   

4. Crea un archivo .env para el servicio de EmailJs de la siguiente manera:

   ```bash

    VITE_EMAILJS_SERVICE_ID=TU_CLAVE_API
    VITE_SEND_FORM_ONE=Service_ID
    VITE_SEND_FORM_TWO=TEMPLATE_ID

   ```

## 🔧 USO
 1. Crear un json por cada modulo con la informacion correspondiente con las siguientes estrucrutas:

   - Proyetos:

     
     ```bash
     // Ejemplo de json:
     {
       "projects": [
      {
      "name": "- Library Online",
      "repository": "https://github.com/Litardo-Jardy/Libreria-Online",
      "deploy": "https://libreria-online.vercel.app/",
      "labels": [ // Caracteristicas del proyecto;
        {
          "color": "#28a745",
          "name": "Web"
        },

        {
          "color": "#28a745",
          "name": "Deploy"
        },

        {
          "color": "#28a745",
          "name": "Finished"
        }
      ],
      "descripcion": "LibraryOnline es un proyecto desarrollado con el fin de crear y gestionar tu propia biblioteca de lectura en línea con funcionalidades como la persistencia de datos mediante el navegador, el buen rendimiento, etc. Este proyecto está construido desde 0 con React.js aprovechando sus diversas herramientas para crear interfaces de usuario agradables e interactivas, la app cuenta con un estado global el cual es gestionado por medio de Redux Toolkit que, incluyendo la implementación de TypeScript, dan una experiencia de usuario dinámica y confiable. Puedes visitar el repositorio del proyecto (Icono de github a lado del nombre) para enterarte un poco más de cómo está construido.",
      "technologis": [ // Tecnologias usadas en el proyecto;
        { 
          "color": "#02569B",
          "name": "TypeScript"
        },

        {
          "color": "#777BB4",
          "name": "React"
        }
      ],
      "device": 0, // Controla en que dospositivo quieres renderizar la imagenes de tu proyecto 0 = Mobil 1 = Desktop;
      // Es importante colocar ambos por que al disminuir el tamaño de la pantalla lo sufiente se pasara de Desktop a mobile d eser el caso;
      "images": [ // Imagenes de tu proyecto para Desktop;
        { "url": "/assets/libreria/ImageOne.png" },
        { "url": "/assets/libreria/ImageTwo.png" }
      ],
      "imagesResponsive": [ // Imagenes de tu proyecto para mobil;
        { "url": "/assets/libreria/ResponsiveOne.png" },
        { "url": "/assets/libreria/ResponsiveTwo.png" }
      ],
      "leftToRigth": false} // Controla si quieres ver el contenido de Derecha a Izquierda o de Izquierda a derecha;
     ]}
     ```
 
 3. Todos los recursos como imagenes, pdfs, vedios y demas deben ir en esta carpeta para que sean accesibles desde el json:
    
    ```bash
    -
    public/assets
    ```

## ⚠️ IMPORTANTE

  Aunque el proyecto es de uso libre y no tiene licencia alguna, si lo vas a usar dejame un mensaje para asi saber que te he aportado en algo, gracias. 
 
