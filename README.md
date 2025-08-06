# 🛠️ Sentando Bases con NestJS

---

## **Objetivo:**
**Sentar las bases en NestJS** a través de una serie de temas fundamentales que permitirán al estudiante construir una comprensión sólida de este poderoso framework. Los temas a tocar en el taller incluyen:

- 🛡️ **¿Qué es Nest?**
- 🤔 **¿Por qué usarlo?**
- 🗂️ **Explicación sobre cada archivo en un proyecto nuevo de Nest**
- 🏗️ **Core Nest building blocks**
- 📦 **Módulos**
- 📋 **Controladores (Post, Patch, Get, Delete)**
- 🏷️ **Primeros decoradores**
- 💼 **Servicios**
- 💉 **Inyección de dependencias**
- 🧪 **Pipes**
- 🚨 **Exception Filters**

---

## **Introducción:**
> **¡Bienvenidos!** 🎉 Después de un viaje profundo por el mundo de Node.js, TypeScript, decoradores, pruebas de desempeño y otras cosas que generan una potencial frustración 😅, nos adentramos ahora en el universo de NestJS, un framework que nos permitirá estructurar nuestras aplicaciones de manera modular y escalable, llevando nuestras habilidades a un nuevo nivel. En este taller, crearemos una base sólida en NestJS, preparándonos para enfrentar problemas complejos en el ámbito de la tecnología financiera.



## **Problemática:**

**Contexto de la Problemática:**

Imagina que has sido contratado por una fintech emergente que busca revolucionar el mercado de microcréditos. La compañía, **QuickLoan**, quiere ofrecer préstamos rápidos a personas con poca o ninguna historia crediticia, pero se enfrenta a varios desafíos:

1. **Velocidad y Seguridad:** Los usuarios esperan decisiones inmediatas sobre sus solicitudes de préstamo, lo cual requiere un sistema rápido y seguro.
2. **Escalabilidad:** A medida que la fintech crezca, el sistema debe ser capaz de manejar miles de solicitudes simultáneamente.
3. **Modularidad y Mantenimiento:** El sistema debe ser modular para permitir la incorporación de nuevas funcionalidades y mejoras sin comprometer la estabilidad.
4. **Personalización y Manejo de Excepciones:** Se requiere un sistema que pueda personalizar las ofertas de crédito y manejar excepciones de manera eficiente para evitar posibles fraudes.

**Problemática**: QuickLoan necesita un sistema backend robusto que permita manejar solicitudes de préstamos de manera segura, rápida y escalable, asegurando una experiencia fluida para el usuario final. Debes crear la base de este sistema utilizando NestJS.

---

## **Epica:**

**Como** desarrollador backend en **QuickLoan**,
**Quiero** construir un sistema modular y seguro en NestJS,
**Para** gestionar ***solicitudes de préstamos*** de manera eficiente y escalable, mientras garantizo la seguridad de los datos y el manejo adecuado de excepciones.

---

## **Criterios de Aceptación:**

- **Comprensión y Explicación de la Estructura de un Proyecto NestJS**: El estudiante debe identificar y explicar la función de cada archivo en la estructura básica de un proyecto NestJS.
- **Implementación de Controladores Eficientes**: El estudiante debe crear controladores que manejen diferentes métodos HTTP (Post, Patch, Get, Delete) para gestionar solicitudes de préstamo.
- **Uso Efectivo de Decoradores y Servicios**: Implementar decoradores y servicios que permitan personalizar y manejar la lógica de negocio del sistema de préstamos.
- **Configuración Adecuada de Pipes y Exception Filters**: Configurar y aplicar pipes para la validación de datos y filtros de excepción para manejar errores y proteger el sistema.
- **Aplicación de la Inyección de Dependencias para Modularidad**: Usar inyección de dependencias para construir un sistema modular, permitiendo la fácil adición de nuevas funcionalidades.


---

## **Historias de Usuario**

## **Historia de Usuario 1: Configuración Inicial y Estructura del Proyecto**

**Como** desarrollador backend,  
**Quiero** aprender a configurar y entender la estructura básica de un proyecto NestJS,  
**Para** asegurarme de que la arquitectura del proyecto sea modular y fácilmente escalable.

**Tareas:**

### **1. Configuración del Proyecto**

- **Propuesta de Solución**:
   - Crear un nuevo proyecto NestJS llamado `quickloan-app` utilizando el CLI:
   ```bash
   nest new quickloan-app
   ```
   - Revisar y entender la estructura de archivos generada por defecto. Asegúrate de leer la documentación o las notas adicionales proporcionadas. Puedes explorar cada archivo y carpeta para comprender su propósito y cómo contribuye a la arquitectura del proyecto [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).
   - Identificar el propósito de cada archivo y cómo contribuye a la modularidad del proyecto. Puedes leer la siguiente documentación [Estructura propuesta aplicaciones NestJS](../notes/proposed-architecture.md).

- **Preguntas**:
   1. ¿Qué propósito cumple el archivo `main.ts` en un proyecto NestJS y por qué es crucial en la configuración inicial? Puedes leer más sobre el archivo [aquí](../first-step-project/src/main.ts) en la sección inferior de
   notas.
   2. ¿Qué diferencia existe entre `app.module.ts` y `app.controller.ts`? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? Puedes leer sobre el archivo [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).

---

### **2. Creación de Módulos Básicos**

- **Propuesta de Solución**:
   - Crear un módulo `LoansModule` para gestionar operaciones de préstamos:
   ```bash
   nest g mo loans
   ```
   - Crear un módulo `UsersModule` para gestionar la información de los usuarios:
   ```bash
   nest g mo users
   ```

- **Cascarita**: Revisa el nombre del módulo generado y asegúrate de que sea correcto y consistente con el estándar de nombres.

- **Preguntas**:
   1. ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?
        - ***Solucion***
        - Una estructura modular nos permite construir de manera ordenada una aplicacion ademas de facilitar la busqueda de puntos exactos dentro de la aplicacion y al estar construyendo en capas tambien se facilita la deteccion de errores y el manejo de los mismos.

   2. ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
        - ***Solucion***
        - afecta mas que todo en la busqueda de archivos para realizar cambios especificos para que se pueda ir modificando de manera progresiva

   3. Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?
        - ***Solucion***
        - Define el módulo: Es como una caja que agrupa todas las   funcionalidades relacionadas con "loans" (préstamos).
        - Organiza componentes: Dentro de esta caja, puedes añadir y organizar cosas como controladores y servicios (aunque al principio está vacío).
        - El módulo es la base que agrupa y organiza todo lo que necesitas para manejar las funcionalidades de "loans".
0
---

### **3. Implementación de Controladores**

- **Propuesta de Solución**:
   - Crear un controlador `LoansController` para manejar solicitudes POST de creación de préstamos:
   ```bash
   nest g co loans
   ```
   - Implementar rutas GET para consultar el estado de un préstamo en el mismo controlador:
   ```typescript
   import { Controller, Get, Post, Body, Param } from '@nestjs/common';

   @Controller('loans')
   export class LoansController {
     @Post()
     createLoan(@Body() createLoanDto: any) {
       return 'Loan created';
     }

     @Get(':id')
     getLoanStatus(@Param('id') id: string) {
       return `Status of loan ${id}`;
     }
   }
   ```

- **Cascarita**: Asegúrate de que las rutas estén correctamente definidas y que los decoradores estén aplicados en los lugares correctos.

- **Preguntas**:
   1. ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?
    - ***Solucion***
    - Si pones mal un decorador en un controlador, el endpoint (ruta) no funcionará correctamente y no podrás manejar las solicitudes como esperabas.
   2. ¿Por qué es importante manejar rutas dinámicas (por ejemplo, `@Get(':id')`) en aplicaciones que interactúan con bases de datos?
    - ***Solucion***
    - Las rutas dinámicas, como `@Get(':id')`, permiten acceder a información específica en la base de datos usando identificadores únicos, lo que es útil para obtener detalles precisos de un préstamo o cualquier otro dato.
---

## **Historia de Usuario 2: Implementación de la Lógica de Negocio y Seguridad**

**Como** desarrollador backend,  
**Quiero** aprender a implementar la lógica de negocio y asegurar la seguridad de las transacciones,  
**Para** garantizar que el sistema maneje las solicitudes de préstamos de manera segura y eficiente.

**Tareas:**

### **1. Desarrollo de Servicios**

- **Propuesta de Solución**:
   - Crear un servicio `LoansService` para manejar la lógica de negocio de los préstamos:
   ```bash
   nest g s loans
   ```
   - Implementar un método para calcular el riesgo del préstamo basado en el perfil del usuario:
   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class LoansService {
     calculateLoanRisk(userProfile: any): string {
       // Lógica básica para determinar el riesgo
       if (userProfile.creditScore > 700) {
         return 'Low Risk';
       } else {
         return 'High Risk';
       }
     }
   }
   ```

- **Cascarita**: Verifica que el nombre del método y su propósito estén alineados con la lógica de negocio y que el servicio esté correctamente inyectado en el controlador.

- **Preguntas**:
   1. ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?
    - ***Solucion***
    - Los servicios tienen la capacidad de manejar la lógica de negocio de los datos de los usuarios, lo que es más poderosa que los controladores y ayuda a mantener el código más limpio y organizado. Manejan las solicitudes y respuestas, mientras que los servicios se ocupan de la lógica y el procesamiento de datos. Esto hace que el código sea más fácil de mantener y probar.
    
   2. ¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?
    - ***Solucion***
    - La inyección de dependencias se relaciona con la modularidad y la capacidad de prueba de la aplicación. Esto se debe a la capacidad de testear y probar el sistema de la aplicación.

---

### **2. Aplicación de Decoradores y Pipes**

- **Propuesta de Solución**:
   - Utilizar decoradores como `@Body`, `@Param`, y `@Query` para manejar datos de las solicitudes en el `LoansController`:
   ```typescript
   @Post()
   createLoan(@Body() createLoanDto: any) {
     return `Loan created for ${createLoanDto.userId}`;
   }
   ```

   - Implementar un `ValidationPipe` para validar los datos de entrada:
   ```typescript
   import { ValidationPipe } from '@nestjs/common';

   // En main.ts
   app.useGlobalPipes(new ValidationPipe());
   ```

- **Cascarita**: Asegúrate de que el `ValidationPipe` esté configurado correctamente y aplicado en la instancia de la aplicación.

- **Preguntas**:
   1. ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?
    - ***Solucion***
    - Validar los datos de entrada en la aplicación para garantizar que se manejen datos seguros y correctos.

   2. ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?
    - ***Solucion***
    - Si un decorador está mal colocado o si no se aplican los pipes correctamente, esto podría provocar errores de ejecución, errores de validación, y problemas de seguridad en la aplicación.
---

### **3. Configuración de Exception Filters**

- **Propuesta de Solución**:
   - Implementar filtros de excepción para manejar errores comunes:
   ```typescript
   import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

   @Catch(HttpException)
   export class HttpErrorFilter implements ExceptionFilter {
     catch(exception: HttpException, host: ArgumentsHost) {
       const ctx = host.switchToHttp();
       const response = ctx.getResponse();
       const status = exception.getStatus();

       response.status(status).json({
         statusCode: status,
         message: exception.message,
       });
     }
   }
   ```

   - Asegurarse de que los errores se manejen adecuadamente en las respuestas al usuario.

- **Cascarita**: Verifica que el filtro de excepción esté registrado correctamente en el módulo o aplicado globalmente.

- **Preguntas**:
   1. ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?
    - ***Solucion***
    - mejora la experiencia del usuario al proporcionar mensajes de error claros y útiles. También contribuye a la seguridad al evitar que se revelen detalles internos o vulnerabilidades de la aplicación en los mensajes de error.

   2. ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?
    - ***Solucion***
    - manejo centralizado de excepciones facilita la gestión y control de errores en toda la aplicación. Permite aplicar una estrategia uniforme para el tratamiento de errores, mejora la consistencia en las respuestas de error y simplifica la configuración y el mantenimiento del código de manejo de errores.
---
