# Cómo contribuir

[Português do Brasil](CONTRIBUTING.md) | [Español](CONTRIBUTING.es.md) | [English](CONTRIBUTING.en.md)

Gracias por tu interés en mejorar la Guía Microsoft Student Ambassadors - LATAM.

## Antes de comenzar

1. Lee el [Código de Conducta](CODE_OF_CONDUCT.es.md).
2. Revisa las issues abiertas para evitar trabajo duplicado.
3. Para cambios importantes de estructura o contenido, abre una issue antes de comenzar la implementación.
4. Usa fuentes oficiales de Microsoft para confirmar requisitos, objetivos, beneficios y calendarios.

## Seguridad y privacidad

No envíes:

- credenciales, tokens, Contributor IDs personales o datos de suscripción;
- documentos académicos o información personal de estudiantes;
- capturas o archivos internos cuya redistribución no esté autorizada;
- contenido protegido de terceros sin permiso o atribución adecuada.

Informa vulnerabilidades de forma privada al mantenedor mediante el contacto disponible en el perfil [@tkusal](https://github.com/tkusal). No publiques información sensible en una issue.

## Flujo de contribución

1. Crea un fork del repositorio.
2. Crea una rama breve y descriptiva, como `docs/actualizar-requisitos` o `fix/menu-idioma`.
3. Realiza los cambios y pruébalos localmente.
4. Escribe commits claros y objetivos.
5. Abre un pull request que explique el problema, la solución y las fuentes utilizadas.

## Contenido multilingüe

Las traducciones están en:

- `assets/js/locales/pt-br.js`;
- `assets/js/locales/es.js`;
- `assets/js/locales/en.js`.

Al modificar información del programa:

1. actualiza los tres idiomas;
2. conserva los mismos identificadores de sección;
3. mantén los enlaces y números consistentes entre las versiones;
4. utiliza un lenguaje claro y adecuado para lectores de América Latina;
5. indica cuándo una información depende de la convocatoria o puede cambiar.

## Código e interfaz

- Conserva el funcionamiento como sitio estático, sin dependencias obligatorias.
- Mantén la navegación por teclado, el contraste, los textos alternativos y el foco visible.
- Prueba los temas claro y oscuro.
- Revisa el sitio en pantallas pequeñas y grandes.
- Evita agregar bibliotecas para resolver problemas sencillos de HTML, CSS o JavaScript.
- No incluyas seguimiento ni recopilación de datos sin discusión previa.

## Prueba local

Desde la raíz del repositorio, ejecuta:

```bash
python -m http.server 8000
```

Abre `http://localhost:8000` y comprueba:

- carga sin errores;
- cambio de idioma;
- persistencia del tema;
- búsqueda y enlaces internos;
- imágenes y enlaces externos;
- lectura en dispositivos móviles.

## Lista de verificación del pull request

- [ ] El cambio tiene un objetivo claro.
- [ ] Los tres idiomas fueron revisados cuando era necesario.
- [ ] Se indicaron las fuentes oficiales.
- [ ] No se incluyeron datos sensibles.
- [ ] La interfaz continúa siendo accesible y responsiva.
- [ ] El sitio fue probado localmente.

Al contribuir, aceptas que tu contribución se publique bajo la licencia aplicable al repositorio.
