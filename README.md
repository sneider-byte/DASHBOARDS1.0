#  TransControl - Dashboard Administrativo de Gestión de Flota

**TransControl** es un dashboard administrativo moderno, interactivo diseñado para el monitoreo, control y analítica en tiempo real de vehículos, conductores, estado de rutas y consumo de combustible en empresas de transporte y logística.

---

##  Tecnologías Utilizadas

* **HTML5 Semántico:** Estructura organizada mediante etiquetas `<aside>`, `<header>`, `<main>` y `<footer>`, complementada con atributos y roles de accesibilidad **ARIA** (`role="navigation"`, `role="main"`, `aria-label`, etc.).
* **CSS3 Avanzado:**
  * **CSS Grid Layout:** Maquetación global de la aplicación utilizando `grid-template-areas` (`"sidebar header"`, `"sidebar main"`, `"sidebar footer"`) y distribución dinámica en rejillas para métricas y gráficos.
  * **Flexbox:** Alineación y distribución responsiva de componentes internos (navegación, barras de búsqueda, perfiles de usuario, tarjetas KPI y filas de tabla).
  * **Custom Properties (Variables CSS):** Centralización de la paleta de colores (`--bg-sidebar`, `--primary`, `--accent-green`, etc.) para un mantenimiento eficiente.
  * **Media Queries:** Adaptación responsiva completa para escritorio, tablet y dispositivos móviles.
* **JavaScript (ES6 Vanilla):**
  * Colapso interactivo del menú lateral (`sidebar-collapsed`).
  * Buscador en tiempo real sobre la tabla de vehículos.
  * Filtrado dinámico de filas al interactuar con las tarjetas KPI.
  * Manejo de eventos en botones de acción.
* **Chart.js:** Integración de gráficos interactivos (Gráfico de líneas para gasto de combustible y gráfico de dona para distribución de flota).
* **FontAwesome (v6.4.0):** Iconografía vectorial escalable.

---

## Capturas de Pantalla

El sistema fue diseñado bajo principios de diseño líquido y adaptabilidad multi-dispositivo:

### 1. Vista Escritorio (> 992px)
Layout completo de dos columnas principales con barra lateral fija de 260px, gráficos comparativos de dos columnas y acceso rápido a datos del sistema.
![Vista Escritorio]
<img width="1880" height="907" alt="Escritorio" src="https://github.com/user-attachments/assets/000555cc-faf4-4e74-8ffe-b8261b0c310c" />


### 2. Vista Tablet (768px - 992px)
Los gráficos y las secciones inferiores de tablas/alertas se reorganizan verticalmente a una sola columna para maximizar la legibilidad de la información.
![Vista Tablet]
<img width="1007" height="800" alt="Tablet" src="https://github.com/user-attachments/assets/ee8325e2-cf0d-486f-b80b-4e48668c5ab0" />


### 3. Vista Móvil (< 768px)
La barra lateral pasa a posicionarse horizontalmente, ocultando las etiquetas de texto de la navegación para dar prioridad a los íconos. El encabezado ajusta el buscador al 100% del ancho y la tabla habilita desplazamiento horizontal.
![Vista Móvil]
<img width="478" height="820" alt="Movil" src="https://github.com/user-attachments/assets/ad9931de-89ee-4fd3-a154-c6df1d5ef128" />


---

##  Decisores de Diseño y Accesibilidad

* **Estructura Semántica y Estándares WAI-ARIA:** Se integraron atributos de navegación asistida como `role="navigation"`, `role="main"`, `role="contentinfo"`, y descripciones accesibles (`aria-label`) en botones interactivos y elementos sin texto directo.
* **Contraste de Color:** Combinación de tonos oscuros (`#0f172a`) en la navegación con tonos claros neutros (`#f8fafc`) en el fondo del contenido, asegurando legibilidad y reduciendo fatiga visual.
* **Simbología Visual Consistente:** Uso de estados codificados por colores y badges para reconocimiento rápido de condiciones operativas:
  *  **Verde (`#10b981`):** Vehículos en ruta / Operativos.
  *  **Amarillo/Naranja (`#f59e0b`):** Mantenimiento preventivo / En taller.
  *  **Azul (`#2563eb`):** Vehículos disponibles.
  *  **Rojo (`#ef4444`):** Nivel crítico de combustible o alerta alta de mantenimiento.
* **Navegación por Teclado:** Inputs y elementos interactivos poseen estados explícitos de `:focus` y `:hover` para facilitar la interacción a través de lectores de pantalla o teclado.
