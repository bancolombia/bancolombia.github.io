---
sidebar_position: 4
---

# Estándar de commits


## Estructura del mensaje de commit

El mensaje de commit debe cumplir con la siguiente estructura:

```
<tipo>(<área>)!: <mensaje>
```

Donde:

1. **`<tipo>`** *(obligatorio)*: Indica la categoría del cambio. Los valores permitidos son:
   - `feat`: Nueva funcionalidad.
   - `fix`: Corrección de errores.
   - `docs`: Cambios en la documentación.
   - `style`: Cambios de formato (espacios, comas, etc.), sin afectar el código.
   - `refactor`: Código reestructurado sin cambiar funcionalidad.
   - `perf`: Mejoras de rendimiento.
   - `test`: Agregar o modificar pruebas.
   - `build`: Cambios en el sistema de compilación o dependencias.
   - `ci`: Configuración de integración continua.
   - `removed`: Código eliminado.
   - `deprecated`: Código marcado como obsoleto.
   - `security`: Cambios relacionados con seguridad.
   - `chore`: Tareas de mantenimiento o refactorización menor.

   comentado:
   - `featurerelease`: Lanzamiento de una nueva característica.
   - `securitypatchrelease`: Parche de seguridad.
   - `fixpatchrelease`: Parche de corrección de errores.
   - `breakingrelease`: Cambios que rompen compatibilidad.
   - `breaking`: Similar a `breakingrelease`, indicando un cambio incompatible. 
   fin de comentado

2. **`(<área>)`** *(opcional)*: Especifica qué parte del código se ve afectada. Puede ser un módulo, archivo o componente específico.

3. **`\!`** *(opcional)*: Indica que el cambio es **importante** o tiene **impacto significativo**.

4. **`: <mensaje>`** *(obligatorio)*: Breve descripción del cambio realizado.

---

### **Ejemplos válidos**
✅ **Commit agregando una nueva función (importante):**
```
feat(auth)!: agregar autenticación con JWT
```

✅ **Commit corrigiendo un bug en la API:**
```
fix(api): corregir error en la validación de datos
```

✅ **Commit marcando código como obsoleto:**
```
deprecated(core): eliminar uso de función obsoleta
```

✅ **Commit eliminando un módulo innecesario:**
```
removed(ui): eliminar el módulo de interfaz obsoleto
```
cometado:
✅ **Commit con cambio importante (rompe compatibilidad):**
```
breaking(db)!: actualizar esquema de base de datos
``` 
fin cometado