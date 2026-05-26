---
name: design-guide
description: "Pautas de diseño del proyecto: tipografía, color, motion, accesibilidad y uso de Tailwind v4. Aplica a componentes y estilos en `src/`"
applyTo:
  - "src/components/**"
  - "src/index.css"
---

# Design Guide — Pautas prácticas

Estas instrucciones ofrecen pautas breves y accionables para diseñar componentes y pantallas en este repositorio. Úsalas cuando propongas cambios visuales, añadas componentes UI o ajustes estilos globales.

**Principios clave**
- **Propósito**: diseña con intención — cada cambio visual debe mejorar la usabilidad, la jerarquía o la emoción.
- **Identidad**: evita estéticas genéricas. Elige tipografía, paleta y motion que den personalidad coherente.
- **Accesibilidad**: contraste suficiente, foco visible y tamaños táctiles mínimos.
- **Simplicidad con intención**: evita micro-interacciones innecesarias; prioriza unas pocas animaciones bien diseñadas.

**Tipografía**
- **Preferencia:** selecciona una familia distintiva para títulos y otra para texto de lectura. Evita Inter/Arial por defecto salvo justificación clara.
- **Escala:** usa una escala tipográfica clara (ej. 12/14/16/20/24/32) y aplica `font-display` para títulos cuando sea necesario.

**Color & Tokens**
- Define tokens en `@theme` o `:root` (ver `.github/instructions/tailwind-4.instructions.md`).
- **Tokens mínimos recomendados**: `--color-primary`, `--color-accent`, `--color-bg`, `--color-text`, `--color-success`, `--color-warning`.
- Evita paletas cliché (p. ej. degradados morados por defecto). Si necesitas inspiración, extrae tonalidades de una paleta existente (IDE themes, obras de arte, branding local).

**Motion**
- Prioriza una animación de alto impacto (p. ej. entrada de pantalla, victoria) y micro-animaciones sutiles (pop al marcar). Usa `animation` CSS y clases utilitarias para control.
- Respeta `prefers-reduced-motion` — provee versión estática cuando el usuario la solicita.

**Tailwind v4 — prácticas**
- Usa `@theme` para tokens y variables. Prefiere utilidades nativas v4 (`bg-black/50`, `@container`, `fill-[--my-color]`).
- Evita configuraciones complejas en `tailwind.config.js`; confía en variables CSS y utilidades arbitrarias cuando sea necesario.

**Componentes & patrones**
- Botones: altura mínima 44px, foco visible (`ring`), estados `:hover`, `:active` y `:disabled` claros.
- Tarjetas: capas de fondo con sombra sutil, padding consistente y esquinas moderadas.
- Modales: centrar contenido, fondo semitransparente y botón primario destacado.

**Evitar**
- No copies tonos o tipografías «on-distribution» sin adaptarlos.
- No sobrecargar con múltiples animaciones simultáneas.

**Checklist rápido (PR de UI)**
- [ ] ¿Los tokens de color están definidos en `@theme` o `:root`?
- [ ] ¿El contraste cumple WCAG AA para texto importante?
- [ ] ¿Los botones y elementos táctiles tienen tamaño y foco adecuados?
- [ ] ¿Las animaciones respetan `prefers-reduced-motion`?
- [ ] ¿Se evitó la estética genérica y hay una intención de diseño?

**Ejemplos de prompts útiles**
- "Refactoriza `StartScreen` para usar tokens `--color-accent` y una tipografía de título distinta".
- "Añade una animación de celebracion al modal de victoria que respete reduced-motion".
- "Crea un componente `Badge` consistente con la paleta y tokens del proyecto".

**Cuando usar estas instrucciones**
- Cambios de UI que afectan componentes en `src/components`.
- Propuestas de paleta, tipografía o motion.
- Revisión de PRs que añaden estilos globales o cambios visuales.

Si quieres, puedo convertir esto en una `copilot-instructions.md` más compacta para carga global, o crear plantillas de PR que incluyan la checklist automáticamente.
