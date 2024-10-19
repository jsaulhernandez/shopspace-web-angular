# ShopspaceAngular

## Commands to install and run the application

```
npm install
npm run start
```

## Folder structure (src/app)

    ## core: Todo lo que se necesita que cargue al inicio.
        ### guards: servicios especiales que ayudan a otorgar o revocar el acceso a las rutas
        ### interceptors: clases para interceptar o modificar solicitudes y respuestas
        ### utils: funciones o ayudantes comunes
    ## data: manejos de datos que son necesarios para la logica de la aplicación.
        ### api: modelado de datos para la respuesta de los servicios
        ### constants: archivos de constantes necesarias para componentes o otras areas
        ### interfaces: necesarias para cualquier proceso que no incluya el modelado de los datos de respuesta de los servicios
        ### models: modelos representativos para los datos de respuestas de los servicios
        ### services: serie de servicios para el consumo de endpoints
    ## layout: serie de elementos que conforman la plantilla base.
        Ejemplo: Navbar, Body y Footer
    ## modules: serie de areas de la logica del negocio.
    ## shared: serie de elementos compartidos en toda la aplicación.
        ### components
        ### directives
        ### pipes
        ### services
    ## store: contendra el o los manejadores de estado de la aplicación.
        ### actions
        ### effects
        ### reducers
        ### states
