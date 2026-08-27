window.MSA_LOCALES = window.MSA_LOCALES || {};

window.MSA_LOCALES.es = {
  documentLanguage: 'es',
  title: 'Guía Microsoft Student Ambassadors - LATAM',
  description: 'Desde el registro hasta el hito Senior, con rutas, requisitos, beneficios y respuestas rápidas.',
  ui: {
    skip: 'Saltar al contenido',
    brandHome: 'Guía Microsoft Student Ambassadors, inicio',
    brandTitle: 'Student Ambassadors',
    brandSubtitle: 'Guía LATAM',
    searchLabel: 'Buscar en la guía',
    searchPlaceholder: 'Registro, rutas, beneficios...',
    searchEmpty: 'No se encontró ningún contenido.',
    searchCount: (count) => `${count} ${count === 1 ? 'sección encontrada' : 'secciones encontradas'}.`,
    tocLabel: 'En esta página',
    verified: 'Contenido verificado el 21/08/2026',
    lightTheme: 'Activar tema claro',
    darkTheme: 'Activar tema oscuro',
    openMenu: 'Abrir navegación',
    closeMenu: 'Cerrar navegación',
    closeImage: 'Cerrar imagen',
    backToTop: 'Volver arriba',
    independent: 'Contenido independiente y no oficial.',
    footer: 'Desarrollado por el Senior Student Ambassador',
    language: 'Idioma de la página'
  },
  html: `
    <section class="hero section-card" id="inicio" data-searchable>
      <div class="hero-copy">
        <span class="eyebrow">GUÍA INDEPENDIENTE · LATAM</span>
        <h1>Guía Microsoft Student Ambassadors</h1>
        <p class="hero-lead">Desde el primer registro hasta el hito Senior, en un recorrido claro, práctico y creado para la comunidad LATAM.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#jornada">Explorar el recorrido</a>
          <a class="button button-secondary" href="#faq">Ir a preguntas frecuentes</a>
        </div>
        <p class="freshness"><span aria-hidden="true">●</span> Actualizado en agosto de 2026</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <img src="assets/images/logo-programa.png" alt="">
        <span class="spark spark-one">✦</span><span class="spark spark-two">✦</span>
      </div>
    </section>

    <section class="content-section" id="jornada" data-searchable>
      <div class="section-heading"><span class="section-kicker">VISIÓN GENERAL</span><h2>El recorrido en cuatro etapas</h2><p>Identifica dónde estás, cuál es el próximo paso y cuándo puedes usar cada título.</p></div>
      <div class="stage-grid">
        <article class="stage-card stage-registered"><span class="stage-number">01</span><div class="stage-icon" aria-hidden="true">✓</div><h3>Registered Member</h3><p>Registro completo, acceso a la comunidad inicial y preparación de una ruta de contribución.</p><a href="#registered">Ver requisitos <span aria-hidden="true">→</span></a></article>
        <article class="stage-card stage-ambassador"><span class="stage-number">02</span><img src="assets/images/badges/ambassador.png" alt="Insignia Student Ambassador"><h3>Student Ambassador</h3><p>Invitación aceptada, onboarding completo e inicio oficial en el programa.</p><a href="#onboarding">Entender el onboarding <span aria-hidden="true">→</span></a></article>
        <article class="stage-card stage-associate"><span class="stage-number">03</span><img src="assets/images/badges/associate.png" alt="Insignia Associate Student Ambassador"><h3>Associate Ambassador</h3><p>El primer hito de progresión, alcanzado con un evento aprobado.</p><a href="#associate">Cómo avanzar <span aria-hidden="true">→</span></a></article>
        <article class="stage-card stage-senior"><span class="stage-number">04</span><img src="assets/images/badges/senior.png" alt="Insignia Senior Student Ambassador"><h3>Senior Ambassador</h3><p>Reconocimiento por constancia, liderazgo e impacto demostrable.</p><a href="#senior">Conocer los criterios <span aria-hidden="true">→</span></a></article>
      </div>
    </section>

    <section class="notice notice-info" data-searchable><span class="notice-icon" aria-hidden="true">i</span><div><strong>Esta es una guía independiente.</strong><p>Las reglas, metas, beneficios y calendarios pueden cambiar. Confirma los detalles en el portal, el manual del miembro y los correos oficiales de tu cohorte.</p></div></section>

    <section class="content-section" id="programa" data-searchable>
      <div class="section-heading"><span class="section-kicker">ANTES DE EMPEZAR</span><h2>Qué es el programa</h2><p>Una comunidad global para estudiantes que quieren aprender tecnología, crear soluciones con IA y ampliar el impacto en sus comunidades.</p></div>
      <div class="prose-grid">
        <article class="prose-card"><h3>Aprende haciendo</h3><p>Desarrollas habilidades técnicas y de liderazgo con contenido en línea, Microsoft Learn Plans, proyectos, eventos en el campus y actividades del programa.</p></article>
        <article class="prose-card"><h3>Crea comunidad</h3><p>Te conectas con estudiantes, innovadores de IA, emprendedores, Microsoft MVPs y empleados de Microsoft para compartir ideas y resolver desafíos.</p></article>
        <article class="prose-card"><h3>Convierte estudio en impacto</h3><p>Las actividades pueden convertirse en portafolio, experiencia para el currículum y LinkedIn, colaboración internacional y preparación para proyectos o startups.</p></article>
      </div>
      <div class="rich-text">
        <p>Student Ambassadors no es una pasantía, un empleo ni una certificación profesional, y no garantiza un puesto en Microsoft. Es un programa extracurricular basado en contribuciones. Tampoco es exclusivo de carreras tecnológicas. Estudiantes de Administración, Diseño, Ingeniería y otras áreas pueden crear experiencias útiles con tecnología Microsoft.</p>
        <p>No necesitas llegar como especialista. El objetivo es aprender, compartir y liderar con responsabilidad. También hay contacto con IA, nube, competencias como Imagine Cup y recursos para probar ideas de startup.</p>
        <p class="community-disclaimer">La información de esta página fue actualizada en agosto de 2026. La página es mantenida por la comunidad de Student Ambassadors LATAM y no representa documentación oficial de Microsoft.</p>
      </div>
    </section>

    <section class="content-section" id="cadastro" data-searchable>
      <div class="section-heading"><span class="section-kicker">ETAPA 1</span><h2>Elegibilidad y registro</h2><p>Organiza tus identidades, confirma los requisitos y regístrate en el portal oficial.</p></div>
      <div class="split-layout">
        <article class="panel-card"><h3>Requisitos de ingreso</h3><ul class="check-list"><li>Tener al menos 18 años al registrarte.</li><li>Estar matriculado a tiempo completo en una institución académica acreditada.</li><li>Tener Azure for Students activo cuando el requisito esté vigente.</li><li>No haber sido removido anteriormente del programa por Microsoft.</li><li>No ser empleado ni contratista actual de Microsoft.</li></ul></article>
        <article class="panel-card accent-panel"><h3>Lista previa al formulario</h3><ul class="check-list"><li>Una cuenta Microsoft que puedas conservar.</li><li>Perfil de Microsoft Learn asociado a la misma identidad.</li><li>Acceso frecuente al correo informado.</li><li>Datos actuales de la institución y la carrera.</li><li>Azure for Students verificado, si la cohorte lo exige.</li></ul></article>
      </div>
      <aside class="notice notice-warning"><span class="notice-icon" aria-hidden="true">!</span><div><strong>Atención con Azure for Students</strong><p>El 21/08/2026, el FAQ público todavía mostraba esta cuenta como requisito, pero la orientación operativa informaba una suspensión temporal. Confirma el portal y los mensajes oficiales antes de registrarte.</p></div></aside>
      <p class="small-note">Cuando está vigente, Azure for Students exige verificación académica y ofrece USD 100 de crédito por 12 meses, sin tarjeta. También existen restricciones geográficas vinculadas a las normas de exportación de Estados Unidos. El FAQ cita Cuba, Irán, Corea del Norte, Sudán, Siria, Rusia, Bielorrusia y Crimea. Los estudiantes con visa F-1 en Estados Unidos deben confirmar la compatibilidad con su institución o con asesoría migratoria.</p>
      <div class="steps-card"><h3>Cómo registrarte</h3><ol class="step-list">
        <li><span>1</span><div><strong>Abre el portal</strong><p>Visita <a href="https://mvp.microsoft.com/studentambassadors/" target="_blank" rel="noopener noreferrer">Microsoft Student Ambassadors</a> y selecciona <em>Get Started</em>. El formulario suele tomar menos de cinco minutos.</p></div></li>
        <li><span>2</span><div><strong>Usa datos consistentes</strong><p>Siempre que sea posible, usa la misma identidad en el registro, Microsoft Learn y Azure for Students.</p></div></li>
        <li><span>3</span><div><strong>Lee y acepta los términos</strong><p>Revisa la privacidad, las reglas de miembros y el <a href="https://aka.ms/sacoc" target="_blank" rel="noopener noreferrer">Código de Conducta</a>.</p></div></li>
        <li><span>4</span><div><strong>Revisa tu correo</strong><p>Los siguientes pasos llegan al correo registrado. Revisa también la carpeta de spam.</p></div></li>
      </ol></div>
      <p class="privacy-note">No publiques documentos académicos, identificadores de suscripción ni datos personales para pedir ayuda. Usa los canales oficiales.</p>
    </section>

    <section class="content-section" id="registered" data-searchable>
      <div class="section-heading"><span class="section-kicker">ETAPA 2</span><h2>Registered Member</h2><p>Después del registro entras a la comunidad inicial, pero todavía no puedes usar el título Student Ambassador.</p></div>
      <div class="rich-text"><p>Los Registered Members reciben acceso a la comunidad global de estudiantes, asesores y mentores en Discord, además de recursos, orientación y capacitación. La invitación suele llegar desde <code>sa-noreply@microsoft.com</code>.</p><p>Para ser elegible al onboarding debes completar dos frentes: una Microsoft Certification o Microsoft Applied Skills emitida en los 12 meses previos al onboarding y la meta de una ruta de contribución. No necesitas completar ambas rutas.</p></div>
      <div class="resource-callout"><div><span class="resource-label">ÁREA DE REGISTERED MEMBERS</span><h3>Manual y tablero de progresión</h3><p>Los Registered Members pueden consultar todas las reglas de las rutas y seguir su propio tablero de progresión en el SharePoint del manual. Debes iniciar sesión con una cuenta autorizada por el programa.</p></div><a class="button button-primary" href="https://stdntpartners.sharepoint.com/sites/StudentAmbassadorsRegisteredMembersHandbook/SitePages/" target="_blank" rel="noopener noreferrer">Abrir SharePoint</a></div>
      <div class="metric-grid">
        <article class="metric-card"><span class="metric-value">1</span><h3>Credencial reciente</h3><p>Certification o Applied Skills dentro de la ventana de 12 meses.</p></article>
        <article class="metric-card"><span class="metric-value">1 de 2</span><h3>Ruta completa</h3><p>Community Influencer o Community Skiller.</p></article>
        <article class="metric-card"><span class="metric-value">4×</span><h3>Cohortes al año</h3><p>Invitaciones previstas en enero, abril, julio y octubre.</p></article>
      </div>
      <div class="subsection" id="contributor-id"><h3>Contributor ID del programa</h3><p>Normalmente llega por correo entre tres y cinco días después del registro. Atribuye los resultados elegibles a tu perfil y no cambia durante tu etapa como Registered Member.</p><div class="code-example"><span>Formato</span><code>?wt.mc_id=studentamb_######</code></div><p>No lo confundas con el Learn Contributor ID visible en la configuración de Microsoft Learn. Usa el ID enviado por Student Ambassadors. No es una contraseña ni un token.</p>
        <aside class="notice notice-warning compact-notice"><span class="notice-icon" aria-hidden="true">!</span><div><strong>Comprueba tu Learn Username</strong><p>Si fue informado con errores o texto adicional, la credencial puede no indexarse. Actualízalo en el portal o contacta al soporte antes de eliminar tu registro.</p></div></aside>
      </div>
      <div class="subsection"><h3>Credenciales sugeridas</h3><p>Elige una credencial adecuada a tu nivel y al tema que quieres compartir. Dos Applied Skills citadas en el manual son:</p><ul class="resource-list"><li><a href="https://learn.microsoft.com/credentials/applied-skills/streamline-business-workflows-with-ai-chat/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Streamline business workflows with AI chat</a><span>Microsoft 365 Copilot y flujos de trabajo.</span></li><li><a href="https://learn.microsoft.com/credentials/applied-skills/generate-reports-with-ai-research-agents/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Generate reports with AI research agents</a><span>Creación y refinamiento de informes con el agente Researcher.</span></li></ul><p class="small-note">Completa el learning path recomendado y revisa los requisitos de Microsoft 365 Copilot. La duración puede cambiar, por eso conviene verificarla antes de empezar.</p></div>
    </section>

    <section class="content-section" id="trilhas" data-searchable>
      <div class="section-heading"><span class="section-kicker">ELIGE TU CAMINO</span><h2>Influencer o Skiller</h2><p>Escoge una ruta según la forma en que prefieres crear valor para tu comunidad.</p></div>
      <div class="path-grid">
        <article class="path-card influencer-card"><span class="path-label">COMMUNITY INFLUENCER</span><div class="path-metric"><strong>250</strong><span>Preferred Visitors</span></div><p>Para quienes prefieren crear, contextualizar y distribuir contenido Microsoft en canales en línea.</p><a class="button button-secondary" href="#influencer">Abrir ruta Influencer</a></article>
        <article class="path-card skiller-card"><span class="path-label">COMMUNITY SKILLER</span><div class="path-metric"><strong>1.000</strong><span>módulos net-new</span></div><p>Para quienes prefieren organizar grupos y facilitar recorridos estructurados en Microsoft Learn.</p><a class="button button-secondary" href="#skiller">Abrir ruta Skiller</a></article>
      </div>
      <p class="decision-tip"><strong>Consejo:</strong> Skiller no es estudio individual, porque el resultado depende de los participantes. Influencer no exige una audiencia enorme. Una comunidad pequeña y alineada puede generar más impacto.</p>
    </section>

    <section class="content-section path-section" id="influencer" data-searchable>
      <div class="section-heading"><span class="section-kicker">RUTA 1</span><h2>Community Influencer</h2><p>Crea y comparte contenido relevante con tu Contributor ID para alcanzar 250 Preferred Visitors en páginas Microsoft elegibles.</p></div>
      <div class="split-layout">
        <article class="panel-card"><h3>Requisitos</h3><ul class="check-list"><li>250 Preferred Visitors en URLs Microsoft elegibles.</li><li>Contributor ID del programa agregado correctamente.</li><li>Credencial Microsoft dentro de la ventana de 12 meses.</li><li>Contenido compartido con contexto y valor real.</li></ul></article>
        <article class="panel-card"><h3>Cómo crear el enlace</h3><p>Elimina el fragmento de idioma cuando la ruta lo indique. Si la URL ya contiene <code>?</code>, agrega el ID con <code>&amp;</code>.</p><div class="code-stack"><code>learn.microsoft.com/en-us/copilot?WT.mc_id=academic</code><span>se convierte en</span><code>learn.microsoft.com/copilot?WT.mc_id=academic&amp;wt.mc_id=studentamb_######</code></div></article>
      </div>
      <details class="disclosure"><summary>Ver URLs y prefijos elegibles</summary><div class="url-grid"><code>azure.microsoft.com</code><code>blog.fabric.microsoft.com</code><code>code.visualstudio.com</code><code>community.fabric.microsoft.com</code><code>community.powerplatform.com</code><code>copilot.microsoft.com</code><code>devblogs.microsoft.com</code><code>developer.microsoft.com</code><code>dotnet.microsoft.com</code><code>events.microsoft.com</code><code>imaginecup.microsoft.com</code><code>learn.microsoft.com</code><code>learn.microsoft.com/copilot</code><code>microsoft.com/insidetrack</code><code>microsoft.com/microsoft-365-copilot</code><code>microsoft.com/microsoft-cloud/blog</code><code>microsoft.com/microsoft-copilot/for-individuals</code><code>microsoft.com/microsoft-fabric</code><code>microsoft.com/power-platform</code><code>microsoft.com/startups</code><code>mvp.microsoft.com/studentambassadors/</code><code>powerbi.microsoft.com/blog</code><code>reactor.microsoft.com</code><code>techcommunity.microsoft.com</code></div><p>Prefiere artículos, documentación y páginas específicas. Los Microsoft Learn Plans no cuentan como Preferred Visitors.</p></details>
      <div class="subsection"><h3>Qué significa Preferred Visitor</h3><p>Es una métrica propietaria. Microsoft no publica la fórmula exacta, por lo que 250 clics brutos no equivalen automáticamente a 250 Preferred Visitors.</p><div class="comparison-grid"><article class="example-card positive-example"><span aria-hidden="true">✓</span><h4>Experiencia con valor</h4><p>Compartir en LinkedIn un contenido específico, explicar el problema que resuelve y generar lecturas o republicaciones genuinas.</p></article><article class="example-card negative-example"><span aria-hidden="true">×</span><h4>Experiencia sin valor</h4><p>Enviar el mismo enlace a grupos de WhatsApp sin contexto y pedir clics a personas que no tienen interés en el tema.</p></article></div></div>
      <div class="subsection"><h3>Herramienta recomendada para los enlaces</h3><div class="tool-highlight"><div class="tool-copy"><span class="resource-label">PROYECTO DE LA COMUNIDAD</span><h4><a href="https://github.com/tkusal/ambassador-referral-linker" target="_blank" rel="noopener noreferrer">Ambassador Referral Linker</a></h4><p>La extensión ayuda a crear enlaces Microsoft elegibles con tu Contributor ID. Agrega o reemplaza el parámetro <code>wt.mc_id</code>, conserva otros parámetros y puede eliminar el segmento de idioma para generar una URL neutra.</p><p class="small-note">El proyecto es independiente, gratuito y de código abierto. No está afiliado ni es mantenido por Microsoft. Revisa siempre el enlace final antes de compartirlo.</p></div><div class="tool-actions" aria-label="Instalar Ambassador Referral Linker"><a class="store-link" href="https://chromewebstore.google.com/detail/ambassador-referral-linke/andakdkbonjlmcoocgjfanknedododlp" target="_blank" rel="noopener noreferrer"><strong>Chrome</strong><span>Instalar desde Chrome Web Store</span></a><a class="store-link" href="https://microsoftedge.microsoft.com/addons/detail/nbjblhjldkjffghlpnjlnccjeljehjbh" target="_blank" rel="noopener noreferrer"><strong>Edge</strong><span>Instalar desde Microsoft Edge Add-ons</span></a><a class="store-link" href="https://addons.mozilla.org/pt-BR/firefox/addon/ambassador-referral-linker/" target="_blank" rel="noopener noreferrer"><strong>Firefox</strong><span>Instalar desde Firefox Browser Add-ons</span></a><a class="store-link source-link" href="https://github.com/tkusal/ambassador-referral-linker" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong><span>Ver código, documentación y soporte</span></a></div></div><p class="small-note">La extensión es una continuación independiente y una refactorización del proyecto original de Martin Brandl. Agregar el Contributor ID manualmente continúa siendo una opción válida.</p></div>
      <aside class="notice notice-warning"><span class="notice-icon" aria-hidden="true">!</span><div><strong>No manipules las métricas</strong><p>El spam, los scripts, los clics automatizados y la compra de tráfico violan las reglas. Microsoft puede pedir evidencias e invalidar la actividad.</p></div></aside>
    </section>

    <section class="content-section path-section" id="skiller" data-searchable>
      <div class="section-heading"><span class="section-kicker">RUTA 2</span><h2>Community Skiller</h2><p>Crea Microsoft Learn Plans y guía a los participantes hasta completar 1.000 módulos net-new.</p></div>
      <div class="split-layout">
        <article class="panel-card"><h3>Requisitos</h3><ul class="check-list"><li>1.000 módulos net-new completados por participantes.</li><li>Contributor ID en la descripción y en el enlace de invitación.</li><li>Credencial Microsoft dentro de la ventana de 12 meses.</li><li>Participantes iniciados en el Plan y con el uso compartido del progreso aceptado.</li></ul></article>
        <article class="panel-card accent-panel"><h3>Convierte la meta en grupo</h3><div class="math-example"><strong>50 × 20 = 1.000</strong><span>50 personas, 20 módulos nuevos cada una</span></div><div class="math-example"><strong>100 × 10 = 1.000</strong><span>100 personas, 10 módulos nuevos cada una</span></div></article>
      </div>
      <div class="steps-card"><h3>Cómo crear y compartir el Plan</h3><ol class="step-list">
        <li><span>1</span><div><strong>Empieza con una Collection</strong><p>Abre tus Collections en Microsoft Learn, usa una existente o crea una nueva y cópiala como Plan.</p></div></li>
        <li><span>2</span><div><strong>Organiza el resultado</strong><p>Define título, descripción, hitos y un objetivo claro. Agrega tu Contributor ID al final de la descripción.</p></div></li>
        <li><span>3</span><div><strong>Usa contenido rastreable</strong><p>Para esta ruta, prioriza módulos y learning paths. Otros formatos pueden exigir una finalización manual.</p></div></li>
        <li><span>4</span><div><strong>Comparte el enlace correcto</strong><p>Agrega el Student Ambassadors Contributor ID al enlace, conservando el Learn Contributor ID de la plataforma.</p></div></li>
        <li><span>5</span><div><strong>Guía a los participantes</strong><p>Cada persona debe seleccionar <em>Start</em> y aceptar compartir su progreso. Si elige <em>Drop</em>, deja de aparecer en el informe.</p></div></li>
      </ol></div>
      <div class="code-example wide-code"><span>Enlace de invitación</span><code>learn.microsoft.com/plans/[id]?SharingId=[id]&amp;wt.mc_id=studentamb_######</code></div>
      <div class="subsection"><h3>Qué significa net-new</h3><p>Solo cuenta lo que una persona completa después de entrar e iniciar el Plan. Si Henri completó un módulo en agosto y entró al Plan de María en septiembre, esa finalización anterior suma cero a la métrica net-new de María.</p></div>
      <div class="subsection"><h3>Ideas de contenido</h3><div class="topic-grid"><article class="topic-card"><h4>Copilot</h4><ul><li>Introducción a Microsoft 365 Copilot</li><li>Creación de prompts eficaces</li><li>Agentes prediseñados</li><li>Optimización de procesos</li><li>Nuevo Outlook para Windows</li></ul></article><article class="topic-card"><h4>Power Platform</h4><ul><li>Capacidades de Power Automate</li><li>Flujos de nube</li><li>Automatización de procesos</li><li>Capacidades de Power Apps</li><li>Aplicaciones de lienzo</li></ul></article></div></div>
      <div class="subsection"><h3>Por qué la cuenta puede ser menor</h3><div class="table-wrap"><table><thead><tr><th>Momento</th><th>Posible causa</th></tr></thead><tbody><tr><td>Creación</td><td>El Plan incluyó contenido que no era módulos o learning paths, o fue modificado después de guardarlo.</td></tr><tr><td>Ingreso</td><td>Participantes no seleccionaron Start, no compartieron su progreso, completaron el módulo antes o eligieron Drop.</td></tr><tr><td>Participación</td><td>Las actividades incumplieron los términos o intentaron manipular la cuenta.</td></tr></tbody></table></div></div>
    </section>

    <section class="content-section" id="acompanhamento" data-searchable>
      <div class="section-heading"><span class="section-kicker">SIGUE TU META</span><h2>Informes y Progression Board</h2><p>Las dos rutas utilizan el mismo ritmo de actualización.</p></div>
      <div class="report-card"><div><span class="report-day">SÁB</span><strong>Hora del Pacífico</strong><p>Los correos y el Progression Board se actualizan semanalmente.</p></div><div><span class="report-day">48h</span><strong>Ventana de procesamiento</strong><p>La actividad reciente puede aparecer recién en la semana siguiente.</p></div><div><span class="report-day">YO</span><strong>Vista privada</strong><p>Cada Registered Member solo ve su progreso. Antes del primer informe, el panel puede estar vacío.</p></div></div>
    </section>

    <section class="content-section" id="onboarding" data-searchable>
      <div class="section-heading"><span class="section-kicker">ETAPA 3</span><h2>De la meta al onboarding</h2><p>Completar la meta te hace elegible. El título oficial comienza después de la invitación, la aceptación y el onboarding.</p></div>
      <ol class="journey-timeline"><li><span>01</span><div><h3>Procesamiento</h3><p>Las métricas y la credencial son procesadas y verificadas.</p></div></li><li><span>02</span><div><h3>Cohorte trimestral</h3><p>Las invitaciones se esperan en enero, abril, julio y octubre, generalmente en la segunda semana.</p></div></li><li><span>03</span><div><h3>Aceptación</h3><p>Recibes y aceptas la invitación del equipo del programa.</p></div></li><li><span>04</span><div><h3>Onboarding</h3><p>Completas la integración y puedes usar oficialmente el título Microsoft Student Ambassador.</p></div></li></ol>
      <p>Si no completas la meta antes de la próxima cohorte, la actividad y el conteo pasan a consideración futura. Tú defines el ritmo, pero debes mantener la credencial dentro de la ventana requerida.</p>
      <div class="unlock-card"><img src="assets/images/badges/ambassador.png" alt="Insignia Student Ambassador"><div><span>HITO DESBLOQUEADO</span><h3>Student Ambassador</h3><p>Título, certificado, correo <code>@studentambassadors.com</code>, Microsoft Teams y beneficios del programa.</p></div></div>
    </section>

    <section class="content-section" id="ambassador" data-searchable>
      <div class="section-heading"><span class="section-kicker">DESPUÉS DEL ONBOARDING</span><h2>Mantén tu participación activa</h2><p>Las rutas de entrada terminan. Ahora debes combinar alcance calificado y un evento aprobado cada trimestre.</p></div>
      <div class="metric-grid two-metrics"><article class="metric-card"><span class="metric-value">50</span><h3>Preferred Visitors</h3><p>Contenido Microsoft compartido con el Contributor ID.</p></article><article class="metric-card"><span class="metric-value">1</span><h3>Evento aprobado</h3><p>Actividad que capacite a participantes en tecnología Microsoft.</p></article></div>
      <div class="resource-callout"><div><span class="resource-label">ÁREA DE STUDENT AMBASSADORS</span><h3>Manual del programa y progreso trimestral</h3><p>Student Ambassadors, Associate Ambassadors y Senior Ambassadors pueden consultar todas las reglas y seguir el tablero de progresión de los requisitos trimestrales en el SharePoint del programa.</p></div><a class="button button-primary" href="https://stdntpartners.sharepoint.com/sites/SAProgramHandbook" target="_blank" rel="noopener noreferrer">Abrir SharePoint</a></div>
      <p>Los trimestres son enero a marzo, abril a junio, julio a septiembre y octubre a diciembre. Cumplir los requisitos renueva la participación. Quien no los cumple puede salir del programa.</p>
      <div class="prose-grid"><article class="prose-card"><h3>Microsoft Rewards</h3><p>Al cumplir también los requisitos de recompensa, recibes 5.000 puntos. El código es personal, vence en 30 días y suele llegar antes del día 15 del mes siguiente.</p></article><article class="prose-card"><h3>Insider Calls</h3><p>Quienes cumplieron el trimestre anterior pueden recibir invitaciones a conversaciones sobre carrera, liderazgo y comunidad.</p></article><article class="prose-card"><h3>Rotations</h3><p>Experiencias con equipos de producto. Generalmente requieren dos eventos aprobados en el área durante el trimestre anterior y no reemplazan las metas actuales.</p></article></div>
    </section>

    <section class="content-section" id="associate" data-searchable>
      <div class="milestone-layout"><div class="milestone-image"><img src="assets/images/badges/associate.png" alt="Insignia Associate Student Ambassador"></div><div><span class="section-kicker">ETAPA 4</span><h2>De Ambassador a Associate</h2><p>Associate depende de un evento aprobado que capacite a participantes en tecnología Microsoft.</p><ul class="check-list"><li>Crea y presenta el evento.</li><li>Registra la actividad en la plataforma y espera su aprobación.</li><li>Sé la persona que creó, presentó y envió el evento.</li><li>Avisa al SA-Coordinator indicado en Teams después del envío.</li></ul><p>Los eventos de terceros o de Microsoft no cuentan. Los Learn Plans tampoco. Cada evento se envía una sola vez y solo un Ambassador puede usarlo para avanzar.</p></div></div>
    </section>

    <section class="content-section" id="senior" data-searchable>
      <div class="milestone-layout reverse-layout"><div class="milestone-image senior-image"><img src="assets/images/badges/senior.png" alt="Insignia Senior Student Ambassador"></div><div><span class="section-kicker">ETAPA 5</span><h2>De Associate a Senior</h2><p>El equipo revisa nominaciones en enero y julio. Cumplir los criterios no garantiza una promoción automática.</p><ul class="check-list"><li>Tener al menos un año como Student Ambassador y no estar a menos de seis meses de graduarte.</li><li>Mantener los requisitos al día y participar en Teams.</li><li>Completar contenido de Microsoft Learn y compartirlo con el Contributor ID.</li><li>Organizar eventos aprobados con impacto demostrable.</li><li>Mantener completos el perfil del programa y LinkedIn.</li></ul><p>La nominación reconoce constancia, liderazgo e impacto. Hasta principios de 2026, los hitos se llamaban Alpha, Beta y Gold. Luego pasaron a Student Ambassador, Associate y Senior.</p></div></div>
    </section>

    <section class="content-section" id="beneficios" data-searchable>
      <div class="section-heading"><span class="section-kicker">QUÉ CAMBIA</span><h2>Beneficios por hito</h2><p>Los certificados se actualizan con el avance. Swag, vouchers, cartas y experiencias dependen del nivel, la disponibilidad o la invitación.</p></div>
      <div class="table-wrap benefits-table"><table><thead><tr><th>Hito</th><th>Beneficios y oportunidades</th></tr></thead><tbody><tr><td><strong>Student Ambassador</strong></td><td>Título, certificado, correo del programa, Microsoft 365, Visual Studio Enterprise, USD 150 mensuales en créditos de Azure, herramientas de IA, Teams, insignias y badge anual en Credly.</td></tr><tr><td><strong>Associate</strong></td><td>Beneficios anteriores, USD 100 de swag en Snappy, oportunidad de voucher de certificación, posible Campus Club letter, soporte para eventos, grupos de feedback, bug bashes y pruebas previas al lanzamiento.</td></tr><tr><td><strong>Senior</strong></td><td>Beneficios anteriores, USD 200 de swag en Snappy, consideración para eventos especiales, campañas, pilotos, mentoría de MVPs y posible nominación a MVP después de graduarte.</td></tr></tbody></table></div>
      <p class="small-note">Valores informados para agosto de 2026. El crédito Azure no se puede retirar como dinero. Los USD 150 mensuales del Ambassador son diferentes de los USD 100 por 12 meses de Azure for Students.</p>
    </section>

    <section class="content-section" id="registros" data-searchable>
      <div class="section-heading"><span class="section-kicker">VIDA REAL</span><h2>Momentos del recorrido</h2><p>Perfil y reconocimientos de distintos momentos del programa. Selecciona una imagen para ampliarla.</p></div>
      <div class="gallery-grid" data-gallery>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/capa.webp" data-caption="Composición visual del recorrido Student Ambassador, Associate y Senior."><img src="assets/images/journey/capa.webp" alt="Insignias Student Ambassador, Associate y Senior sobre una foto de estudiante con portátil"><span>Vista del recorrido</span></button>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/perfil-msa.webp" data-caption="Perfil de Thiago Kusal en el programa con el hito Senior."><img src="assets/images/journey/perfil-msa.webp" alt="Perfil de Thiago Kusal en Student Ambassadors con el hito Senior"><span>Perfil en el programa</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-associate.webp" data-caption="Swag del hito Associate Student Ambassador."><img src="assets/images/journey/swag-associate.webp" alt="Camiseta con la insignia Associate Student Ambassador"><span>Swag Associate</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-beta.webp" data-caption="Kit del antiguo hito Beta, luego renombrado Associate."><img src="assets/images/journey/swag-beta.webp" alt="Kit del antiguo hito Beta"><span>Antiguo hito Beta</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-gold.webp" data-caption="Kit del antiguo hito Gold, reemplazado por Senior."><img src="assets/images/journey/swag-gold.webp" alt="Kit del antiguo hito Gold"><span>Antiguo hito Gold</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-gold-2025.webp" data-caption="Swag Gold recibido en el segundo semestre de 2025."><img src="assets/images/journey/swag-gold-2025.webp" alt="Swag Gold recibido en 2025"><span>Gold en 2025</span></button>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/atividade-em-comunidade.webp" data-caption="Actividad técnica colaborativa con estudiantes."><img src="assets/images/journey/atividade-em-comunidade.webp" alt="Grupo de estudiantes en una actividad técnica colaborativa"><span>Aprendizaje en comunidad</span></button>
      </div>
      <p class="photo-credit">Foto de la actividad por <a href="https://www.pexels.com/photo/people-with-laptops-at-lecture-in-technical-school-19895774/" target="_blank" rel="noopener noreferrer">ThisIsEngineering en Pexels</a>, según su licencia. Imagen de portada basada en una foto de Startup Stock Photos en Pexels.</p>
    </section>

    <section class="content-section" id="faq" data-searchable>
      <div class="section-heading"><span class="section-kicker">RESPUESTAS RÁPIDAS</span><h2>Preguntas frecuentes</h2><p>Dudas comunes desde el registro hasta la progresión.</p></div>
      <div class="faq-list">
        <details><summary>¿El registro es un proceso de selección?</summary><p>El flujo actual empieza con un registro rápido. Convertirte en Student Ambassador depende de completar la credencial y una ruta, pasar la validación, recibir la invitación y completar el onboarding.</p></details>
        <details><summary>¿Cuánto tarda el proceso?</summary><p>No hay un plazo fijo para las actividades. Tú defines el ritmo y luego esperas una cohorte de enero, abril, julio u octubre.</p></details>
        <details><summary>¿Cuándo puedo usar el título?</summary><p>Solo después de aceptar la invitación y completar el onboarding. Registered Member todavía no es Student Ambassador.</p></details>
        <details><summary>¿Necesito estudiar tecnología o ser especialista?</summary><p>No. El programa recibe estudiantes de diferentes áreas. Lo importante es aprender, aplicar, compartir y liderar con responsabilidad.</p></details>
        <details><summary>¿Debo completar ambas rutas?</summary><p>No. Elige Influencer o Skiller, completa su meta y obtiene una credencial reciente.</p></details>
        <details><summary>¿Cuenta una certificación antigua?</summary><p>Sigue siendo útil para tu currículum, pero el ingreso exige una credencial obtenida en los 12 meses anteriores al onboarding.</p></details>
        <details><summary>Mi Contributor ID no llegó. ¿Qué hago?</summary><p>Espera de tres a cinco días, revisa spam y luego escribe a <a href="mailto:registration@studentambassadors.com">registration@studentambassadors.com</a>.</p></details>
        <details><summary>¿Por qué mi conteo no aparece?</summary><p>Los informes salen los sábados en horario del Pacífico y pueden tardar hasta 48 horas. La actividad reciente puede entrar en el siguiente ciclo.</p></details>
        <details><summary>¿Qué recibe un Registered Member?</summary><p>Discord, recursos, orientación y capacitación. El certificado, el correo del programa, Teams y otros beneficios llegan después del onboarding.</p></details>
        <details><summary>¿Cómo cancelo mi registro?</summary><p>Entra al portal, abre tu perfil, selecciona Mi Cuenta, Privacidad y Eliminar Datos, luego confirma con tu nombre. Esto no afecta tu participación en las redes sociales de Student Ambassadors.</p></details>
        <details><summary>¿Dónde pido ayuda?</summary><p>Para problemas generales usa <a href="mailto:sa-help@microsoft.com">sa-help@microsoft.com</a>. Para el Contributor ID usa <a href="mailto:registration@studentambassadors.com">registration@studentambassadors.com</a>. Después del onboarding, sigue el canal y el SA-Coordinator de Teams.</p></details>
        <details><summary>¿Ser Ambassador garantiza una futura nominación MVP?</summary><p>No. Son programas independientes. Un buen historial puede ayudar y los Seniors pueden ser considerados para mentoría o una posible nominación, pero no hay garantía.</p></details>
      </div>
    </section>

    <section class="content-section references-section" id="referencias" data-searchable>
      <div class="section-heading"><span class="section-kicker">FUENTES Y LECTURA COMPLEMENTARIA</span><h2>Referencias y recursos</h2><p>Usa las páginas oficiales y los mensajes del equipo para confirmar las reglas vigentes. Los materiales de la comunidad ofrecen contexto adicional.</p></div>
      <ul class="reference-list"><li><a href="https://mvp.microsoft.com/studentambassadors/" target="_blank" rel="noopener noreferrer">Microsoft Student Ambassadors</a></li><li><a href="https://mvp.microsoft.com/faq?section=student" target="_blank" rel="noopener noreferrer">FAQ de Student Ambassadors</a></li><li><a href="https://mvp.microsoft.com/studentambassadors/milestones" target="_blank" rel="noopener noreferrer">Hitos del programa</a></li><li><a href="https://aka.ms/sacoc" target="_blank" rel="noopener noreferrer">Código de Conducta</a></li><li><a href="https://learn.microsoft.com/es-es/training/student-hub/become-a-student-ambassador?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Microsoft Learn Student Hub</a></li><li><a href="https://learn.microsoft.com/azure/education-hub/find-ids?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Azure for Students</a></li><li><a href="https://learn.microsoft.com/credentials/applied-skills/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Microsoft Applied Skills</a></li><li><a href="https://learn.microsoft.com/training/support/plans?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Descripción de Microsoft Learn Plans</a></li><li><a href="https://learn.microsoft.com/training/support/plans-create-manage?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Crear y administrar Plans</a></li><li><a href="https://stdntpartners.sharepoint.com/sites/StudentAmbassadorsRegisteredMembersHandbook/SitePages/" target="_blank" rel="noopener noreferrer">Manual de Registered Members en SharePoint</a></li><li><a href="https://stdntpartners.sharepoint.com/sites/SAProgramHandbook" target="_blank" rel="noopener noreferrer">Manual de Student Ambassadors en SharePoint</a></li><li><a href="https://rookieops.dev/posts/microsoft-student-ambassador-2026/" target="_blank" rel="noopener noreferrer">Artículo: Cómo convertirse en Microsoft Student Ambassador en 2026</a></li></ul>
    </section>
  `
};
