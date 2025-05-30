---
sidebar_position: 2
---

# Etiquetado de Issues 

🎏 Las etiquetas o Label en el módulo de Issues de un proyecto GitHub hace parte fundamental para la gestión eficiente, para establecer una comunicación práctica y didáctica, permite la administración de Issues más fluida y transparente entre usuarios que interactúan indirectamente con repositorios Open Source. 

En la comunidadad de Open Sourece Bancolombia se busca tener una clasificación de problemas o oportunidades de mejora que facilite la visibilidad e identificación que permita al usuario asimilar que tipo de Issue esta trabajando, como por ejemplo: Bug, vulnerabilidad, documentation, entre otros que detallaremos a continuación. 

## Clasificación de Issues 

La implementación de clasificar las etiquetas o tipos de etiqueta es llevada a cabo en agrupar el problema según su naturaleza o origen. 
Nota: se hace énfasis en agrupar o asociar las etiquetas en darles una identidad por medio de un color y un prefijo. 

# Clasificación de nombres de etiquetas 

## Etiquetas de Categorías

c: prefijo de la palabra “categoría”, permite categorizar reportes según su naturaleza y es identificada con el color verde claro.

<span class="green label">__*c: documentation*__</span> Reporta ítems relacionado a la documentación.

<span class="green label">__*c: feature*__</span> Reporta ítems relacionado a una mejora o nueva característica.

<span class="green label">__*c: vulnerability*__</span> Reporta ítems relacionado a una vulnerabilidad detectada.

<span class="green label">__*c: bug*__</span> Reporta ítem relacionado a un error o problema. 
 
## Etiquetas Generales

g: prefijo de la palabra “general”, son etiquetas genéricas disponibles para permita identificar reportes con asunto genérico para facilitar su organización y es identificado con el color azul claro. 

<span class="blue label">__*g: good first issue*__</span> Asocia esta etiqueta para expresar un buen trabajo en tu primer resolución de problema. 

<span class="blue label">__*g: help wanted*__</span> Asocia esta etiqueta para expresar que se requiere asignación. 

<span class="blue label">__*g: in triage*__</span> Reporta ítems en proceso de análisis antes de permitir asignación. 

<span class="blue label">__*g: assigned for triage*__</span> Reporta ítem escalado a un experto para un análisis más profundo antes de permitir asignación. 

<span class="blue label">__*g: question*__</span> Asocia esta etiqueta para expresar que el problema va enfocado más a un interrogante que aun problema.  

# Hablemos más sobre el proceso de Triaje 

Triaje es el estado inicial que obtiene todo issue o reporte creado en GitHub, la cual es el primer filtro antes de ser atendida por un colaborador. Es la validación inicial con base a los argumentos y validar su urgencia para luego otorgar una clasificación y asignación de demás etiquetas descriptivas. El proceso de triaje como primer paso de cada reporte nos permite depurar, filtrar, identificar, reportes mal creados, falta de argumentación, duplicados, críticos, urgentes para luego proceder a la atención adecuada. 

A nivel de organización o de proyecto, este primer control en las issues, nos permite como organización darle un manejo sólido y transparente de los tiques que son escalados y poder dar solución y mejor manejo de tiempos a responder las peticiones recibidas según la urgencia merecida gracias a la clasificaron asignada por el proceso de triaje. 

Cabe mencionar que quienes realizan este análisis de triaje son los miembros de la organización que ejercen el rol de “Maintainer”. 


# ¿Qué es un Maintainer en GitHub? 

El Maintainer es el miembro del equipo cuyo rol es dar mantenimiento del repositorio y garantizar el correcto flujo y administración del proyecto GitHub, por ejemplo, funciones como: garantizar el cumplimiento de las políticas de versiones, pull request, despliegues, llaves, aprobar peticiones o solicitudes de la comunidad del proyecto, entre otras. 

## Etiquetas de Resolución

r: prefijo de la palabra “resolución”, son etiquetas de cierre para dar por finalizado o cierre definitivo a un reporte y son identificados con el color rojo. 

<span class="red label">__*r: duplicade*__</span> se cierra el caso por haber otro issue con el mismo reporte. 

<span class="red label">__*r: fixed*__</span> se cierra el caso porque la solución se encuentra trabajando en otro issue. 

<span class="red label">__*r: solved*__</span> se cierra el caso porque la solución se implementó desde otro issue. 

<span class="red label">__*r: invalid*__</span> se cierra el caso porque se encuentra con invalidez. 

<span class="red label">__*r: timeout*__</span> se cierra el caso por falta de detalles, que el autor no proporciono dentro del tiempo esperado. 

<span class="red label">__*r: wontfix*__</span> caso cerrado porque no será solucionado. 

## Etiquetas de Prioridad

Son etiquetas que permiten comunicar que reportes requieren atención inmediata por su nivel crítico y será identificado por el color morado claro. 

<span class="label dark-blue">__*P0*__</span> Prioridad 0: es la etiqueta que permite comunicar la prioridad más alta que requiere ser atendida inmediatamente. El reporte puede contener alguno de los siguientes criterios: 

Incidencia presentada relacionada a un fallo existente que interrumpe al usuario la compilación o ejecución de la aplicación. 

Incidencia presentada relacionada a una deuda técnica detectada de alto riesgo y necesita solución inmediata antes de presentar afectación(es) al usuario. 

Incidencia que presenta bloqueos o pronto bloquear procesos de clientes de primer nivel. 

# ¿Qué son clientes de primer nivel? 

Aquellos clientes que trabajan con una colaboración muy estrecha con miembros del equipo, estos serán considerados como clientes de primer nivel.  

<span class="label dark-blue">__*P1*__</span> Prioridad 1: es la etiqueta que permite comunicar la prioridad alta, para un problema importante que debe ser atendido lo más pronto posible. Se entiende que es la prioridad mas alta y critica sin afectación al cliente ni interrupción de un servicio o compilación. 

Se recomienda para los reportes con esta etiqueta una actualización de su estado diariamente en GitHub. 

<span class="label dark-blue">__*P2*__</span> Prioridad 2: es la etiqueta que permite comunicar una prioridad alta para un problema que debe ser atendido dentro de un plazo razonable con base al Triaje. Teniendo en cuenta que su clasificación no es prioridad alta o critica, puede ser atendido según la cola y capacidad de los colaboradores. 

<span class="label dark-blue">__*P3*__</span> Prioridad 3: es la etiqueta que permite comunicar una prioridad mínima para un problema que podrá ser atendido con la importancia más baja de criticidad a comparación de las etiquetas anteriores. Los niveles de tiempo de respuesta no están sujetos a un plazo inmediato.