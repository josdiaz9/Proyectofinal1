# TP Final - Clon de WhatsApp

Este proyecto es un clon de la interfaz de WhatsApp Web hecho con React. La idea fue aplicar todo lo que vimos en la cursada, desde la estructura de componentes hasta la navegación dinámica.

### Funcionalidades:
* **Navegación con React Router**: Usé parámetros en la URL (`:contact_id`) para que cada chat tenga su propio link y se cargue el contacto que corresponde.
* **Responsive**: La App cambia según el tamaño de la pantalla. En PC se ve la lista y el chat juntos, y en el celu se ve uno por vez con la flechita para volver, igual que la original.
* **Envío de mensajes**: El chat tiene un formulario que permite escribir y mandar mensajes con la tecla Enter sin que se recargue la página.

### Lo que más me costó:
Lo más complicado fue acomodar el CSS para que el diseño no se rompa al pasar de monitor a celular, sobre todo el tema de ocultar y mostrar la barra lateral. También hubo que renegar un poco para que los contenedores ocupen siempre el 100% del alto y ancho de la pantalla sin dejar espacios vacíos.

---
*Ezequiel - 2026*