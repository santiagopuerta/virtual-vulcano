
Prácticas
---------

> Documentación y explicaciones adicionales para la entrega de las prácticas.

### Práctica 3

El énfasis de esta práctica está en la automatización para lanzar la aplicación en un SASS. Nosotros nos hemos centrado en lanzar el panel de provisionamiento de nuestra herramienta en cualquier plataforma SASS que tenga el usuario. En concreto el ejemplo está hecho en Azure pero cualquier valdría siguiendo las instrucciones.

Se puede ver la aplicación funcionando en [este link](http://137.117.145.58/). Se puede incluso ejecutar un [servicio de prueba](example-service.md), aunque no se van a poder ver los logs de la ejecución a menos que se acceda al servidor por SSH (de momento).

Para ver las instrucciones de cómo crear una instancia de Virtual Vulcano en Azure se puede consultar [este fichero](azure-setup.md). Para conocer más sobre la arquitectura de la aplicación entera podemos usar [este fichero](arquitecture.md).

Como resumen rápido de los avances del proyecto en este hito:

 - Hemos configurado [Travis](https://travis-ci.org/ernestoalejo/virtual-vulcano) como servidor de CI.
 - Hemos preparado el despliegue automático de servicios en los servidores del cliente usando *fleetctl*
 - Ya podemos configurar y administrar clústeres de máquinas.
 - Tenemos una interfaz web para el panel de provisionamiento.
 - Estamos cubriendo bastante parte del código de *NodeJS* (y más que viene en camino) con pruebas automatizadas usando *Jasmine*.
 - Usamos MongoDB para guardar los datos de los clústeres y próximamente los servicios y el estado de las máquinas.
 - Como referencia: [Dockerfile](https://github.com/ernestoalejo/virtual-vulcano/blob/master/web/Dockerfile) y [Dockerhub](https://registry.hub.docker.com/u/virtualvulcano/web/)
