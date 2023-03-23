# Cajero-Electronico

Descripcion del Desarrollo:

El Cajero debe cumplir con los siguientes requerimientos.

![imagen](https://user-images.githubusercontent.com/99287560/227064874-955649ee-ee7e-46b0-a0d2-d23e8c3a8201.png)

Estructuras de Carpetas:
El proyecto cuenta con 2 archivos, el index.html que solo usaremos para enlazar nuestra funcion creada en el segundo archivo llamado script.js que contiene la info en un array y también tendrá la lógica para que el usuario o el administrador ingresen documento y contraseña, si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña, si el usuario es administrador, debe permitir cargar dinero.

![imagen](https://user-images.githubusercontent.com/99287560/227064982-b2a46b19-bb28-48ff-86df-005a25479e4a.png)

Resumen paso a paso:
Los primeros pasos realizados fueron la creación de dos arrays de objetos (El primer array tendra los datos del admin y usuario: id, name, document y passwoord; y otra array de dinero en cajero con denomination y quantity) 
Estos dos array son importantes para la creación de nuestras funciones, las cuales van a determinar que el aplicativo de cajero electrónico funcione. En la primera función se crea la validación de usuario o admin el cual ejecuta la operación para añadir dinero en el cajero, como segunda acción se establece el tipo de usuario cliente quien proporciona sus datos para validación y así hacer uso de cajero con una constate creada para retirar dinero, si el cliente quiere retirar más dinero lo podrá hacer hasta que el cajero se quede sin fondos.

Vistas:

![imagen](https://user-images.githubusercontent.com/99287560/227067468-55f41f8a-c113-42c6-9a7a-73a4cd9d64a6.png)

luego de ingresar los datos del admin lo siguiente es ir a depositar dinero.

![imagen](https://user-images.githubusercontent.com/99287560/227067746-3060b064-a1ca-4ddb-bc36-23995fc160a4.png)

Al terminar de depositar dinero te pedira que si quieres volver a ingresar un usuario, para poder ingresar como cliente y poder retirar dinero.

![imagen](https://user-images.githubusercontent.com/99287560/227067890-0e75bfca-769a-416e-af6d-85b8c9a94f83.png)
[
