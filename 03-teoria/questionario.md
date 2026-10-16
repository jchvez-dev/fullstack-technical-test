**Pregunta 1: Arquitectura de Backend**

El documento sugiere usar Node.js con los frameworks Express o NestJS. ¿Cuáles son las
principales diferencias arquitectónicas entre Express y NestJS, y en qué tipo de proyectos o
escenarios recomendarías utilizar uno sobre el otro?

**Respuesta**:
Express es principalmente mas simple y libre que Nest pues te da total libertar para organizar el codigo, Nest es mas estructurado y utiliza cosas mas avanzadas como injeccion de depenedencias.
Recomendaria Express para pequeños proyectos o con entrega con tiempo de entrega pequeño, Nest si es algo mas a gran escala o extenso.

---
**Pregunta 2: Bases de Datos (SQL vs NoSQL)**

Para la persistencia de datos, la prueba da la opción de elegir entre MongoDB (usando
Mongoose) o PostgreSQL (usando TypeORM). Explica las diferencias teóricas clave entre un
motor de base de datos relacional y uno no relacional. ¿Qué factores tomarías en cuenta para
elegir la base de datos ideal para una aplicación de tareas a gran escala?

Respuesta:
PostgreSQL es relacional lo que significa que es mas estricto organizando la informacion en tablas estructuradas gestionadas mediante claves primarias y foraneas mientras que MongoDB los almacena mas flexible en JSON ya que se enfoca mas en la velocidad
Para elegir cdual usar hay que determinar la complejidad de las relaciones, si es muy complejo es mejor una relacional, pero de igual manera se debe tomar en cueta el tamaño de la data a guardar, digase el volumen de la informacion y lsii es muy cambiante

---
**Pregunta 3: Seguridad y Middlewares**

Se solicita proteger las rutas de la API mediante un middleware de autenticación. Describe
teóricamente cómo funciona el ciclo de vida de una petición HTTP que pasa por un middleware
de autenticación. Además, explica brevemente el flujo de trabajo de la autenticación basada en
JWT (JSON Web Tokens) y por qué es preferida en APIs RESTful.

Respuesta:
El flujo es: llega la péticion -> es interceptada por el middleware -> se valida el token -> si es valido continua con la informacion solicitada, si no rgresa algun error con un mensaje, por lo genarl un 401 o 403
JWT es basicamente uin token firmado por el backend que es enviado por el cliente en cada peticion para que se alide en los middleware y le de acceso a los recursos, se prefiere en  REST porque no necesita guardar la sesion.

---
**Pregunta 4: Gestión del Estado Global en Frontend**

En el desarrollo del frontend con Vue (Nuxt 3), se requiere explícitamente el uso de Pinia para
manejar el estado global de la aplicación. ¿Qué problemas arquitectónicos resuelve un gestor
de estado global como Pinia en comparación con pasar props y emitir eventos de forma
tradicional entre múltiples componentes anidados?
Pregunta 5: Estrategias de Renderizado
El ejercicio de la interfaz de usuario específica que el candidato puede crear una SPA (Single
Page Application) o una SSR (Server-Side Rendering). Define teóricamente ambos conceptos e
indica cuáles son las ventajas y desventajas de utilizar SSR con Nuxt 3, haciendo especial
énfasis en el impacto sobre el SEO y el rendimiento (First Contentful Paint)


Respuesta:
Pinia al ser una herramienta de global state ayuda mucho a evitar pasar propiedades masivas o innecesarias entre componentes, centraliza la informacion en un solo hook para que sea accesible en todos lados.
SPA es una aplicacion donde JS renderiza todo en el navegador
SSR procesa el codigo y renderiza html desde el servidor, muestra todo listo. ayuda mucho en el SEO porque los rastreadores web encunetran toda la informacion ya lista o con metadatos que queramos. Mientras que con SPA los rastreadores no encunetran nada porque esta vacio hasta que llega al cliente.

---