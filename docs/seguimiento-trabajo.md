# Seguimiento del trabajo

## 2026-04-07

### Inicio del proyecto

- se crea el proyecto independiente `TpvReactGarazi`
- se inicializa Git dentro de su propia carpeta en `htdocs`
- se prepara la base tecnica con React + Vite
- se añade la documentacion inicial del trabajo

## 2026-04-08

### Integracion visual de la maqueta

- se revisa el material de referencia entregado: `tpv.html`, `App.css` y `assets.zip`
- se traslada la estructura principal del HTML a `App.jsx` adaptandola a JSX
- se reutiliza y adapta el CSS base para mantener la misma apariencia del TPV
- se incorporan al proyecto las imagenes de productos en `src/assets`
- se deja construida la interfaz visual del TPV en React como base para la siguiente fase funcional

## 2026-04-10

### Separacion de la interfaz en componentes

- se reorganiza la interfaz visual del TPV para dividirla en componentes React independientes
- se separa la zona de productos y la zona de carrito en componentes propios
- se extrae la tarjeta de producto a un componente reutilizable
- se mueve el listado de productos a un archivo de datos independiente para preparar mejor la siguiente fase funcional
- se mantiene la misma apariencia visual mientras se mejora la estructura interna del proyecto

### Implementacion de la logica del TPV

- se conecta el input superior con la seleccion de productos
- se implementa el carrito con lineas reales de productos seleccionados
- se calculan de forma automatica el subtotal, el descuento y el total
- se añaden los cupones `SAVE10`, `SAVE20` y `VIP`
- se implementa la accion de `Cobrar / Reset` para reiniciar la compra
- se mantiene la apariencia visual original mientras la interfaz pasa a ser funcional

## 2026-04-13

### Revision y pulido final del TPV

- se revisa el comportamiento general del TPV para reforzar la consistencia de la entrega
- se ajusta el tratamiento de cantidades para que los productos por unidad se añadan con valores enteros
- se mejora la respuesta del sistema ante entradas invalidas y acciones sin productos en carrito
- se refuerzan los mensajes de estado para que el uso del TPV resulte mas claro
- se valida de nuevo el proyecto para dejar esta fase cerrada y estable

## 2026-04-14

### Ajuste final de fidelidad respecto a la maqueta

- se revisan textos y etiquetas para acercarlos mas al documento original
- se restauran detalles visibles de presentacion como iconos y textos con tildes
- se afinan nombres de productos y elementos del carrito para que la interfaz resulte mas fiel a la maqueta base
- se mantiene intacta la logica ya implementada mientras se remata la presentacion final

## 2026-04-15

### Comprobacion final y cierre documental

- se revisa el estado general del proyecto antes de la entrega
- se corrige la presentacion del README para dejar una documentacion mas limpia
- se crea un documento especifico de comprobacion final
- se deja constancia de que el proyecto compila correctamente y cumple los puntos principales del trabajo

## Proximos registros

Este documento recogera cada fase importante del desarrollo del TPV para dejar constancia del trabajo realizado en el tiempo.
