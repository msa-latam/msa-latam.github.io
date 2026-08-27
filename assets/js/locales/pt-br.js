window.MSA_LOCALES = window.MSA_LOCALES || {};

window.MSA_LOCALES['pt-BR'] = {
  documentLanguage: 'pt-BR',
  title: 'Guia Microsoft Student Ambassadors - LATAM',
  description: 'Do cadastro ao marco Senior, com trilhas, requisitos, benefícios e respostas rápidas.',
  ui: {
    skip: 'Pular para o conteúdo',
    brandHome: 'Guia Microsoft Student Ambassadors, início',
    brandTitle: 'Student Ambassadors',
    brandSubtitle: 'Guia LATAM',
    searchLabel: 'Buscar no guia',
    searchPlaceholder: 'Cadastro, trilhas, benefícios...',
    searchEmpty: 'Nenhum trecho encontrado.',
    searchCount: (count) => `${count} ${count === 1 ? 'seção encontrada' : 'seções encontradas'}.`,
    tocLabel: 'Nesta página',
    verified: 'Conteúdo verificado em 21/08/2026',
    lightTheme: 'Ativar tema claro',
    darkTheme: 'Ativar tema escuro',
    openMenu: 'Abrir navegação',
    closeMenu: 'Fechar navegação',
    closeImage: 'Fechar imagem',
    backToTop: 'Voltar ao topo',
    independent: 'Conteúdo independente e não oficial.',
    footer: 'Desenvolvido pelo Senior Student Ambassador',
    language: 'Idioma da página'
  },
  html: `
    <section class="hero section-card" id="inicio" data-searchable>
      <div class="hero-copy">
        <span class="eyebrow">GUIA INDEPENDENTE · LATAM</span>
        <h1>Guia Microsoft Student Ambassadors</h1>
        <p class="hero-lead">Do primeiro cadastro ao marco Senior, em uma jornada clara, prática e feita para a comunidade LATAM.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#jornada">Explorar a jornada</a>
          <a class="button button-secondary" href="#faq">Ir para o FAQ</a>
        </div>
        <p class="freshness"><span aria-hidden="true">●</span> Atualizado em agosto de 2026</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <img src="assets/images/logo-programa.png" alt="">
        <span class="spark spark-one">✦</span>
        <span class="spark spark-two">✦</span>
      </div>
    </section>

    <section class="content-section" id="jornada" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">VISÃO GERAL</span>
        <h2>A jornada em quatro etapas</h2>
        <p>Entenda onde você está, qual é o próximo passo e quando cada título passa a valer.</p>
      </div>
      <div class="stage-grid">
        <article class="stage-card stage-registered">
          <span class="stage-number">01</span>
          <div class="stage-icon" aria-hidden="true">✓</div>
          <h3>Registered Member</h3>
          <p>Cadastro concluído, acesso à comunidade inicial e preparação de uma trilha de contribuição.</p>
          <a href="#registered">Ver requisitos <span aria-hidden="true">→</span></a>
        </article>
        <article class="stage-card stage-ambassador">
          <span class="stage-number">02</span>
          <img src="assets/images/badges/ambassador.png" alt="Badge Student Ambassador">
          <h3>Student Ambassador</h3>
          <p>Convite aceito, onboarding concluído e início oficial no programa.</p>
          <a href="#onboarding">Entender o onboarding <span aria-hidden="true">→</span></a>
        </article>
        <article class="stage-card stage-associate">
          <span class="stage-number">03</span>
          <img src="assets/images/badges/associate.png" alt="Badge Associate Student Ambassador">
          <h3>Associate Ambassador</h3>
          <p>O primeiro marco de progressão, conquistado com um evento aprovado.</p>
          <a href="#associate">Como avançar <span aria-hidden="true">→</span></a>
        </article>
        <article class="stage-card stage-senior">
          <span class="stage-number">04</span>
          <img src="assets/images/badges/senior.png" alt="Badge Senior Student Ambassador">
          <h3>Senior Ambassador</h3>
          <p>Reconhecimento por consistência, liderança e impacto demonstrável.</p>
          <a href="#senior">Conhecer os critérios <span aria-hidden="true">→</span></a>
        </article>
      </div>
      <figure class="journey-diagram"><img src="assets/images/journey/fluxo-jornada-pt.svg" alt="Fluxo: cadastro, Registered Member, credencial e ID, trilha Influencer ou Skiller, validação, convite e Student Ambassador"><figcaption>Resumo do caminho até o onboarding. A progressão para Associate e Senior acontece depois desta sequência.</figcaption></figure>
    </section>

    <section class="notice notice-info" data-searchable>
      <span class="notice-icon" aria-hidden="true">i</span>
      <div>
        <strong>Este é um guia independente.</strong>
        <p>Regras, metas, benefícios e calendários podem mudar. Confirme os detalhes no portal, no manual do membro e nos emails oficiais da sua rodada.</p>
      </div>
    </section>

    <section class="content-section" id="programa" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">ANTES DE COMEÇAR</span>
        <h2>O que é o programa</h2>
        <p>Uma comunidade global para estudantes que querem aprender tecnologia, construir soluções orientadas por IA e ampliar o impacto em suas comunidades.</p>
      </div>
      <div class="prose-grid">
        <article class="prose-card">
          <h3>Aprenda fazendo</h3>
          <p>Você desenvolve habilidades técnicas e de liderança por meio de conteúdo online, Microsoft Learn Plans, projetos, eventos no campus e atividades orientadas pelo programa.</p>
        </article>
        <article class="prose-card">
          <h3>Construa comunidade</h3>
          <p>Você se conecta com estudantes, inovadores de IA, empreendedores, Microsoft MVPs e funcionários da Microsoft para compartilhar ideias e resolver desafios.</p>
        </article>
        <article class="prose-card">
          <h3>Transforme estudo em impacto</h3>
          <p>As atividades podem virar portfólio, experiência para currículo e LinkedIn, colaboração internacional e preparação para projetos ou startups.</p>
        </article>
      </div>
      <div class="rich-text">
        <p>O Student Ambassadors não é estágio, emprego nem certificação profissional, e não garante uma vaga na Microsoft. É um programa extracurricular baseado em contribuição. Também não é exclusivo de cursos de tecnologia. Estudantes de Administração, Design, Engenharia e qualquer outra área podem criar experiências úteis com tecnologias Microsoft.</p>
        <p>Você não precisa chegar como especialista. O objetivo é aprender, compartilhar e liderar com responsabilidade. O programa também oferece contato com IA, nuvem, competições como o Imagine Cup e recursos para quem deseja testar uma ideia de startup.</p>
        <p class="community-disclaimer">As informações desta página foram atualizadas em agosto de 2026. A página é mantida pela comunidade de Student Ambassadors LATAM e não representa documentação oficial da Microsoft.</p>
      </div>
    </section>

    <section class="content-section" id="cadastro" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">ETAPA 1</span>
        <h2>Elegibilidade e cadastro</h2>
        <p>Organize suas identidades, confirme os requisitos e faça o registro no portal oficial.</p>
      </div>
      <div class="split-layout">
        <article class="panel-card">
          <h3>Requisitos de entrada</h3>
          <ul class="check-list">
            <li>Ter pelo menos 18 anos na data do cadastro.</li>
            <li>Estar matriculado em tempo integral em uma instituição acadêmica credenciada.</li>
            <li>Possuir Azure for Students ativo quando a exigência estiver vigente.</li>
            <li>Não ter sido removido anteriormente do programa pela Microsoft.</li>
            <li>Não ser funcionário nem prestador de serviços atual da Microsoft.</li>
          </ul>
        </article>
        <article class="panel-card accent-panel">
          <h3>Checklist antes do formulário</h3>
          <ul class="check-list">
            <li>Uma conta Microsoft que você consiga manter.</li>
            <li>Perfil do Microsoft Learn associado à mesma identidade.</li>
            <li>Acesso frequente ao email informado.</li>
            <li>Dados atuais da instituição e do curso.</li>
            <li>Azure for Students verificado, se exigido na rodada.</li>
          </ul>
        </article>
      </div>
      <aside class="notice notice-warning">
        <span class="notice-icon" aria-hidden="true">!</span>
        <div>
          <strong>Atenção ao Azure for Students</strong>
          <p>Em 21/08/2026, o FAQ público ainda listava essa conta como requisito, mas a orientação operacional da rodada informava suspensão temporária. Confirme o portal e as mensagens oficiais antes de iniciar seu cadastro.</p>
        </div>
      </aside>
      <p class="small-note">Quando vigente, o Azure for Students exige verificação acadêmica e oferece USD 100 em crédito por 12 meses, sem cartão de crédito. Há também restrições geográficas ligadas às regras de exportação dos Estados Unidos. O FAQ cita Cuba, Irã, Coreia do Norte, Sudão, Síria, Rússia, Belarus e Crimeia. Estudantes com visto F-1 nos Estados Unidos devem confirmar a compatibilidade da participação com a instituição ou orientação jurídica de imigração.</p>
      <div class="steps-card">
        <h3>Como fazer o cadastro</h3>
        <ol class="step-list">
          <li><span>1</span><div><strong>Acesse o portal</strong><p>Entre em <a href="https://mvp.microsoft.com/studentambassadors/" target="_blank" rel="noopener noreferrer">Microsoft Student Ambassadors</a> e selecione <em>Get Started</em>. O preenchimento costuma levar menos de cinco minutos.</p></div></li>
          <li><span>2</span><div><strong>Preencha com dados consistentes</strong><p>Use a mesma identidade no cadastro, Microsoft Learn e Azure for Students sempre que possível.</p></div></li>
          <li><span>3</span><div><strong>Leia e aceite os termos</strong><p>Confira a declaração de privacidade, as regras do membro e o <a href="https://aka.ms/sacoc" target="_blank" rel="noopener noreferrer">Código de Conduta</a>.</p></div></li>
          <li><span>4</span><div><strong>Acompanhe o email</strong><p>Os próximos passos chegam ao endereço do cadastro. Verifique também a pasta de spam.</p></div></li>
        </ol>
      </div>
      <p class="privacy-note">Não publique documentos acadêmicos, IDs de assinatura ou dados pessoais para pedir ajuda. Use os canais oficiais de suporte.</p>
    </section>

    <section class="content-section" id="registered" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">ETAPA 2</span>
        <h2>Registered Member</h2>
        <p>Depois do registro você entra na comunidade inicial, mas ainda não pode usar o título de Student Ambassador.</p>
      </div>
      <div class="rich-text">
        <p>Registered Members recebem acesso à comunidade global de estudantes, orientadores e mentores no Discord, além de recursos, orientação e treinamento. O convite costuma chegar por email enviado por <code>sa-noreply@microsoft.com</code>.</p>
        <p>Para ficar elegível ao onboarding, conclua duas frentes: obtenha uma Microsoft Certification ou Microsoft Applied Skills emitida nos 12 meses anteriores ao onboarding e alcance a meta de uma das trilhas de contribuição. Você não precisa concluir as duas trilhas.</p>
      </div>
      <div class="resource-callout">
        <div>
          <span class="resource-label">ÁREA DO REGISTERED MEMBER</span>
          <h3>Manual e quadro de progressão</h3>
          <p>Registered Members podem consultar todas as regras das trilhas e acompanhar o próprio quadro de progressão no SharePoint do manual. É necessário entrar com uma conta autorizada pelo programa.</p>
        </div>
        <a class="button button-primary" href="https://stdntpartners.sharepoint.com/sites/StudentAmbassadorsRegisteredMembersHandbook/SitePages/" target="_blank" rel="noopener noreferrer">Abrir o SharePoint</a>
      </div>
      <div class="metric-grid">
        <article class="metric-card">
          <span class="metric-value">1</span>
          <h3>Credencial recente</h3>
          <p>Certification ou Applied Skills dentro da janela de 12 meses.</p>
        </article>
        <article class="metric-card">
          <span class="metric-value">1 de 2</span>
          <h3>Trilha concluída</h3>
          <p>Community Influencer ou Community Skiller.</p>
        </article>
        <article class="metric-card">
          <span class="metric-value">4×</span>
          <h3>Rodadas por ano</h3>
          <p>Convites previstos em janeiro, abril, julho e outubro.</p>
        </article>
      </div>

      <div class="subsection" id="contributor-id">
        <h3>Contributor ID do programa</h3>
        <p>O Student Ambassadors Contributor ID chega por email normalmente de três a cinco dias após o cadastro. Ele atribui ao seu perfil os resultados elegíveis e permanece igual durante o período como Registered Member.</p>
        <div class="code-example"><span>Formato</span><code>?wt.mc_id=studentamb_######</code></div>
        <p>Não confunda esse valor com o Learn Contributor ID exibido nas configurações do perfil Microsoft Learn. Use o ID enviado pelo Student Ambassadors nas atividades da trilha. Ele não é senha nem token.</p>
        <aside class="notice notice-warning compact-notice">
          <span class="notice-icon" aria-hidden="true">!</span>
          <div><strong>Confira o Learn Username</strong><p>Se ele foi informado incorretamente ou com texto extra, a credencial pode não ser indexada. Atualize o campo no portal ou procure o suporte antes de excluir o cadastro.</p></div>
        </aside>
      </div>

      <div class="subsection">
        <h3>Credenciais sugeridas</h3>
        <p>Escolha uma credencial coerente com seu nível e com o assunto que pretende compartilhar. Duas opções de Applied Skills citadas pelo manual são:</p>
        <ul class="resource-list">
          <li><a href="https://learn.microsoft.com/credentials/applied-skills/streamline-business-workflows-with-ai-chat/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Streamline business workflows with AI chat</a><span>Microsoft 365 Copilot e fluxos de trabalho.</span></li>
          <li><a href="https://learn.microsoft.com/credentials/applied-skills/generate-reports-with-ai-research-agents/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Generate reports with AI research agents</a><span>Criação e refinamento de relatórios com o agente Researcher.</span></li>
        </ul>
        <p class="small-note">Conclua o learning path recomendado e confira os requisitos do Microsoft 365 Copilot. A duração exibida nas páginas pode mudar, por isso confirme antes de iniciar a avaliação.</p>
      </div>
    </section>

    <section class="content-section" id="trilhas" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">ESCOLHA SEU CAMINHO</span>
        <h2>Influencer ou Skiller</h2>
        <p>Escolha uma trilha de acordo com a forma pela qual você prefere gerar valor para a comunidade.</p>
      </div>
      <div class="path-grid">
        <article class="path-card influencer-card">
          <span class="path-label">COMMUNITY INFLUENCER</span>
          <div class="path-metric"><strong>250</strong><span>Preferred Visitors</span></div>
          <p>Para quem prefere criar, contextualizar e distribuir conteúdo Microsoft em canais online.</p>
          <a class="button button-secondary" href="#influencer">Abrir trilha Influencer</a>
        </article>
        <article class="path-card skiller-card">
          <span class="path-label">COMMUNITY SKILLER</span>
          <div class="path-metric"><strong>1.000</strong><span>módulos net-new</span></div>
          <p>Para quem prefere organizar turmas e facilitar jornadas estruturadas no Microsoft Learn.</p>
          <a class="button button-secondary" href="#skiller">Abrir trilha Skiller</a>
        </article>
      </div>
      <p class="decision-tip"><strong>Dica:</strong> Skiller não é estudo individual, pois o resultado depende dos participantes. Influencer não exige uma audiência enorme, e uma comunidade pequena bem alinhada pode produzir mais impacto do que muitos seguidores desinteressados.</p>
    </section>

    <section class="content-section path-section" id="influencer" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">TRILHA 1</span>
        <h2>Community Influencer</h2>
        <p>Crie e compartilhe conteúdo relevante com seu Contributor ID para alcançar 250 Preferred Visitors em páginas Microsoft elegíveis.</p>
      </div>
      <div class="split-layout">
        <article class="panel-card">
          <h3>Requisitos</h3>
          <ul class="check-list">
            <li>250 Preferred Visitors em URLs Microsoft elegíveis.</li>
            <li>Contributor ID do programa incluído corretamente.</li>
            <li>Credencial Microsoft dentro da janela de 12 meses.</li>
            <li>Conteúdo compartilhado com contexto e valor real.</li>
          </ul>
        </article>
        <article class="panel-card">
          <h3>Como montar o link</h3>
          <p>Remova o trecho de idioma quando a orientação da trilha pedir. Se já existir <code>?</code> na URL, acrescente o ID com <code>&amp;</code>.</p>
          <div class="code-stack">
            <code>learn.microsoft.com/en-us/copilot?WT.mc_id=academic</code>
            <span>fica</span>
            <code>learn.microsoft.com/copilot?WT.mc_id=academic&amp;wt.mc_id=studentamb_######</code>
          </div>
        </article>
      </div>

      <details class="disclosure">
        <summary>Ver URLs e prefixos elegíveis</summary>
        <div class="url-grid">
          <code>azure.microsoft.com</code><code>blog.fabric.microsoft.com</code><code>code.visualstudio.com</code><code>community.fabric.microsoft.com</code><code>community.powerplatform.com</code><code>copilot.microsoft.com</code><code>devblogs.microsoft.com</code><code>developer.microsoft.com</code><code>dotnet.microsoft.com</code><code>events.microsoft.com</code><code>imaginecup.microsoft.com</code><code>learn.microsoft.com</code><code>learn.microsoft.com/copilot</code><code>microsoft.com/insidetrack</code><code>microsoft.com/microsoft-365-copilot</code><code>microsoft.com/microsoft-cloud/blog</code><code>microsoft.com/microsoft-copilot/for-individuals</code><code>microsoft.com/microsoft-fabric</code><code>microsoft.com/power-platform</code><code>microsoft.com/startups</code><code>mvp.microsoft.com/studentambassadors/</code><code>powerbi.microsoft.com/blog</code><code>reactor.microsoft.com</code><code>techcommunity.microsoft.com</code>
        </div>
        <p>Prefira artigos, documentação, anúncios e outros caminhos específicos. Compartilhar somente uma página inicial costuma gerar menos valor. Microsoft Learn Plans não contam como Preferred Visitors.</p>
      </details>

      <div class="subsection">
        <h3>O que significa Preferred Visitor</h3>
        <p>É uma métrica proprietária. A Microsoft não divulga a fórmula exata, então 250 cliques brutos não significam automaticamente 250 Preferred Visitors.</p>
        <div class="comparison-grid">
          <article class="example-card positive-example">
            <span aria-hidden="true">✓</span>
            <h4>Experiência com valor</h4>
            <p>Compartilhar no LinkedIn um conteúdo específico, explicar o problema que ele resolve e gerar leitura ou republicações genuínas em redes interessadas.</p>
          </article>
          <article class="example-card negative-example">
            <span aria-hidden="true">×</span>
            <h4>Experiência sem valor</h4>
            <p>Enviar o mesmo link em grupos de WhatsApp sem contexto e pedir cliques a pessoas que não demonstraram interesse no assunto.</p>
          </article>
        </div>
      </div>

      <div class="subsection">
        <h3>Ferramenta recomendada para os links</h3>
        <div class="tool-highlight">
          <div class="tool-copy">
            <span class="resource-label">PROJETO DA COMUNIDADE</span>
            <h4><a href="https://github.com/tkusal/ambassador-referral-linker" target="_blank" rel="noopener noreferrer">Ambassador Referral Linker</a></h4>
            <p>A extensão ajuda a criar links Microsoft elegíveis com seu Contributor ID. Ela adiciona ou substitui o parâmetro <code>wt.mc_id</code>, preserva outros parâmetros e pode remover o trecho de idioma para gerar uma URL neutra.</p>
            <p class="small-note">O projeto é independente, gratuito e de código aberto. Ele não é afiliado nem mantido pela Microsoft. Confira sempre o link final antes de compartilhar.</p>
          </div>
          <div class="tool-actions" aria-label="Instalar Ambassador Referral Linker">
            <a class="store-link" href="https://chromewebstore.google.com/detail/ambassador-referral-linke/andakdkbonjlmcoocgjfanknedododlp" target="_blank" rel="noopener noreferrer"><strong>Chrome</strong><span>Instalar pela Chrome Web Store</span></a>
            <a class="store-link" href="https://microsoftedge.microsoft.com/addons/detail/nbjblhjldkjffghlpnjlnccjeljehjbh" target="_blank" rel="noopener noreferrer"><strong>Edge</strong><span>Instalar pelo Microsoft Edge Add-ons</span></a>
            <a class="store-link" href="https://addons.mozilla.org/pt-BR/firefox/addon/ambassador-referral-linker/" target="_blank" rel="noopener noreferrer"><strong>Firefox</strong><span>Instalar pelo Firefox Browser Add-ons</span></a>
            <a class="store-link source-link" href="https://github.com/tkusal/ambassador-referral-linker" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong><span>Ver código, documentação e suporte</span></a>
          </div>
        </div>
        <p class="small-note">A extensão é uma continuação independente e uma refatoração do projeto original criado por Martin Brandl. Adicionar o Contributor ID manualmente continua sendo uma opção válida.</p>
      </div>

      <aside class="notice notice-warning">
        <span class="notice-icon" aria-hidden="true">!</span>
        <div><strong>Não manipule as métricas</strong><p>Spam, scripts, cliques automatizados e compra de tráfego violam as regras. A Microsoft pode solicitar evidências da contribuição e invalidar atividades.</p></div>
      </aside>
    </section>

    <section class="content-section path-section" id="skiller" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">TRILHA 2</span>
        <h2>Community Skiller</h2>
        <p>Crie Microsoft Learn Plans e conduza participantes até 1.000 módulos net-new concluídos.</p>
      </div>
      <div class="split-layout">
        <article class="panel-card">
          <h3>Requisitos</h3>
          <ul class="check-list">
            <li>1.000 módulos net-new concluídos pelos participantes.</li>
            <li>Contributor ID na descrição e no link de convite.</li>
            <li>Credencial Microsoft dentro da janela de 12 meses.</li>
            <li>Participantes iniciados no plano e com compartilhamento de progresso aceito.</li>
          </ul>
        </article>
        <article class="panel-card accent-panel">
          <h3>Transforme a meta em turma</h3>
          <div class="math-example"><strong>50 × 20 = 1.000</strong><span>50 pessoas, 20 módulos novos cada</span></div>
          <div class="math-example"><strong>100 × 10 = 1.000</strong><span>100 pessoas, 10 módulos novos cada</span></div>
        </article>
      </div>

      <div class="steps-card">
        <h3>Como criar e compartilhar o Plan</h3>
        <ol class="step-list">
          <li><span>1</span><div><strong>Comece com uma Collection</strong><p>Abra suas Collections no Microsoft Learn, use uma existente ou crie uma nova e copie-a como um Plan.</p></div></li>
          <li><span>2</span><div><strong>Organize o resultado</strong><p>Defina título, descrição, marcos e um objetivo claro. Inclua seu Contributor ID no fim da descrição.</p></div></li>
          <li><span>3</span><div><strong>Use conteúdo rastreável</strong><p>Para a trilha, priorize módulos e learning paths. Outros formatos podem exigir conclusão manual e prejudicar o acompanhamento.</p></div></li>
          <li><span>4</span><div><strong>Compartilhe o link correto</strong><p>Acrescente o Student Ambassadors Contributor ID ao link de convite, preservando o Learn Contributor ID adicionado pela plataforma.</p></div></li>
          <li><span>5</span><div><strong>Oriente os participantes</strong><p>Cada pessoa precisa selecionar <em>Start</em> e aceitar compartilhar o progresso. Se selecionar <em>Drop</em>, deixa de aparecer no relatório do criador.</p></div></li>
        </ol>
      </div>

      <div class="code-example wide-code"><span>Link de convite</span><code>learn.microsoft.com/plans/[id]?SharingId=[id]&amp;wt.mc_id=studentamb_######</code></div>

      <div class="subsection">
        <h3>O que é net-new</h3>
        <p>Conta somente o que a pessoa conclui depois de entrar e iniciar o Plan. Se Henri concluiu um módulo de computação em nuvem em agosto e entrou no Plan de Maria em setembro, esse módulo anterior vale como concluído, mas soma zero na métrica net-new de Maria.</p>
      </div>

      <div class="subsection">
        <h3>Ideias de conteúdo</h3>
        <div class="topic-grid">
          <article class="topic-card"><h4>Copilot</h4><ul><li>Introdução ao Microsoft 365 Copilot</li><li>Crie prompts eficazes</li><li>Agentes predefinidos do Copilot</li><li>Otimize processos de negócios</li><li>Descubra o Novo Outlook</li></ul></article>
          <article class="topic-card"><h4>Power Platform</h4><ul><li>Recursos do Power Automate</li><li>Fluxos de nuvem</li><li>Automação de processos</li><li>Recursos do Power Apps</li><li>Aplicativo de tela no Power Apps</li></ul></article>
        </div>
      </div>

      <div class="subsection">
        <h3>Por que a contagem pode ficar menor</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Momento</th><th>Possível causa</th></tr></thead>
            <tbody>
              <tr><td>Criação</td><td>O plano incluiu conteúdo além de módulos e learning paths, ou foi alterado depois de salvo.</td></tr>
              <tr><td>Entrada</td><td>Participantes não selecionaram Start, recusaram compartilhar progresso, concluíram o módulo antes ou selecionaram Drop.</td></tr>
              <tr><td>Participação</td><td>Atividades violaram os termos, inclusive tentativas de manipular a contagem.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="content-section" id="acompanhamento" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">ACOMPANHE A META</span>
        <h2>Relatórios e Progression Board</h2>
        <p>As duas trilhas usam a mesma cadência de atualização.</p>
      </div>
      <div class="report-card">
        <div><span class="report-day">SÁB</span><strong>Horário do Pacífico</strong><p>Emails de relatório e Progression Board são atualizados semanalmente.</p></div>
        <div><span class="report-day">48h</span><strong>Janela de processamento</strong><p>Atividades muito próximas do envio podem aparecer somente na semana seguinte.</p></div>
        <div><span class="report-day">EU</span><strong>Visualização privada</strong><p>Cada Registered Member vê apenas o próprio progresso. Antes do primeiro relatório, o painel pode estar vazio.</p></div>
      </div>
    </section>

    <section class="content-section" id="onboarding" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">ETAPA 3</span>
        <h2>Da meta ao onboarding</h2>
        <p>Concluir a meta deixa você elegível. O título oficial começa apenas depois do convite, aceite e onboarding.</p>
      </div>
      <ol class="journey-timeline">
        <li><span>01</span><div><h3>Processamento</h3><p>As métricas e a credencial são processadas e verificadas.</p></div></li>
        <li><span>02</span><div><h3>Rodada trimestral</h3><p>Convites são previstos para janeiro, abril, julho e outubro, geralmente na segunda semana.</p></div></li>
        <li><span>03</span><div><h3>Aceite</h3><p>Você recebe e aceita o convite enviado pela equipe do programa.</p></div></li>
        <li><span>04</span><div><h3>Onboarding</h3><p>Você conclui a integração e passa a usar oficialmente o título Microsoft Student Ambassador.</p></div></li>
      </ol>
      <p>Se a meta não ficar pronta antes da próxima coorte, a atividade e a contagem são transferidas para consideração em uma rodada futura. Você define o ritmo, mas precisa manter a credencial dentro da janela exigida.</p>
      <div class="unlock-card">
        <img src="assets/images/badges/ambassador.png" alt="Badge Student Ambassador">
        <div><span>MARCO DESBLOQUEADO</span><h3>Student Ambassador</h3><p>Título, certificado, email <code>@studentambassadors.com</code>, Microsoft Teams e benefícios do programa.</p></div>
      </div>
    </section>

    <section class="content-section" id="ambassador" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">DEPOIS DO ONBOARDING</span>
        <h2>Mantenha a participação ativa</h2>
        <p>As trilhas de entrada terminam. A rotina passa a combinar alcance qualificado e um evento aprovado em cada trimestre.</p>
      </div>
      <div class="metric-grid two-metrics">
        <article class="metric-card"><span class="metric-value">50</span><h3>Preferred Visitors</h3><p>Conteúdo Microsoft compartilhado com o Contributor ID.</p></article>
        <article class="metric-card"><span class="metric-value">1</span><h3>Evento aprovado</h3><p>Atividade que capacite participantes em tecnologia Microsoft.</p></article>
      </div>
      <div class="resource-callout">
        <div>
          <span class="resource-label">ÁREA DO STUDENT AMBASSADOR</span>
          <h3>Manual do programa e progresso trimestral</h3>
          <p>Student Ambassadors, Associate Ambassadors e Senior Ambassadors podem consultar todas as regras e acompanhar o quadro de progressão dos requisitos trimestrais no SharePoint do programa.</p>
        </div>
        <a class="button button-primary" href="https://stdntpartners.sharepoint.com/sites/SAProgramHandbook" target="_blank" rel="noopener noreferrer">Abrir o SharePoint</a>
      </div>
      <p>Os trimestres são janeiro a março, abril a junho, julho a setembro e outubro a dezembro. Cumprir os requisitos renova a participação. Quem não os cumpre pode ser removido do programa.</p>
      <div class="prose-grid">
        <article class="prose-card"><h3>Microsoft Rewards</h3><p>Ao atender também aos requisitos de recompensa, o Ambassador recebe 5.000 pontos. O código é pessoal, expira em 30 dias e costuma chegar até o dia 15 do mês seguinte.</p></article>
        <article class="prose-card"><h3>Insider Calls</h3><p>Quem cumpriu o trimestre anterior pode ser convidado para conversas sobre carreira, liderança e comunidade.</p></article>
        <article class="prose-card"><h3>Rotations</h3><p>Experiências com equipes de produto. Em geral, pedem dois eventos aprovados na área da rotação no trimestre anterior e não substituem as metas atuais.</p></article>
      </div>
    </section>

    <section class="content-section" id="associate" data-searchable>
      <div class="milestone-layout">
        <div class="milestone-image"><img src="assets/images/badges/associate.png" alt="Badge Associate Student Ambassador"></div>
        <div>
          <span class="section-kicker">ETAPA 4</span>
          <h2>De Ambassador para Associate</h2>
          <p>Associate depende de um evento aprovado que capacite participantes em tecnologia Microsoft.</p>
          <ul class="check-list">
            <li>Crie e apresente o evento.</li>
            <li>Registre a atividade na plataforma e aguarde aprovação.</li>
            <li>Seja a pessoa que criou, apresentou e submeteu o evento.</li>
            <li>Avise o SA-Coordinator indicado no Teams depois da submissão.</li>
          </ul>
          <p>Eventos organizados por terceiros ou pela Microsoft não contam. Learn Plans também não contam para esse avanço. Cada evento pode ser submetido uma única vez e apenas um Ambassador pode usá-lo para chegar a Associate.</p>
        </div>
      </div>
    </section>

    <section class="content-section" id="senior" data-searchable>
      <div class="milestone-layout reverse-layout">
        <div class="milestone-image senior-image"><img src="assets/images/badges/senior.png" alt="Badge Senior Student Ambassador"></div>
        <div>
          <span class="section-kicker">ETAPA 5</span>
          <h2>De Associate para Senior</h2>
          <p>A equipe avalia indicações em janeiro e julho. Cumprir os critérios não garante promoção automática.</p>
          <ul class="check-list">
            <li>Ter pelo menos um ano como Student Ambassador e não estar a menos de seis meses da graduação.</li>
            <li>Manter os requisitos em dia e participar da comunidade no Teams.</li>
            <li>Concluir conteúdo do Microsoft Learn e compartilhá-lo com o Contributor ID.</li>
            <li>Organizar eventos aprovados com impacto demonstrável.</li>
            <li>Manter completos o perfil do programa e o LinkedIn, registrando atividades e resultados.</li>
          </ul>
          <p>A indicação reconhece consistência, liderança e impacto. Até o início de 2026, os marcos atuais se chamavam Alpha, Beta e Gold. Os nomes passaram a Student Ambassador, Associate e Senior no primeiro semestre de 2026.</p>
        </div>
      </div>
    </section>

    <section class="content-section" id="beneficios" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">O QUE MUDA</span>
        <h2>Benefícios por marco</h2>
        <p>Certificados são atualizados conforme o avanço. Swag, vouchers, cartas e experiências dependem do nível, da disponibilidade ou de convite.</p>
      </div>
      <div class="table-wrap benefits-table">
        <table>
          <thead><tr><th>Marco</th><th>Benefícios e oportunidades</th></tr></thead>
          <tbody>
            <tr><td><strong>Student Ambassador</strong></td><td>Título, certificado, email do programa, Microsoft 365, Visual Studio Enterprise, USD 150 mensais em créditos do Azure, ferramentas de IA, Teams, selos e badge anual no Credly.</td></tr>
            <tr><td><strong>Associate</strong></td><td>Benefícios anteriores, USD 100 em crédito de swag na Snappy, oportunidade de voucher de certificação, possível Campus Club letter, suporte para eventos, feedback groups, bug bashes e testes de pré-lançamento.</td></tr>
            <tr><td><strong>Senior</strong></td><td>Benefícios anteriores, USD 200 em crédito de swag na Snappy, consideração para eventos especiais, liderança de campanhas, pilotos, mentoria de MVPs e possível indicação ao programa MVP após a graduação.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small-note">Valores informados para agosto de 2026. Crédito do Azure não é dinheiro para saque. O saldo de USD 150 mensais do Ambassador é diferente dos USD 100 por 12 meses do Azure for Students.</p>
    </section>

    <section class="content-section" id="registros" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">VIDA REAL</span>
        <h2>Registros da jornada</h2>
        <p>Perfil e itens de reconhecimento de diferentes momentos do programa. Selecione uma imagem para ampliar.</p>
      </div>
      <div class="gallery-grid" data-gallery>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/capa.webp" data-caption="Composição visual da jornada Student Ambassador, Associate e Senior."><img src="assets/images/journey/capa.webp" alt="Selos Student Ambassador, Associate e Senior sobre foto de estudante com notebook"><span>Visão da jornada</span></button>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/perfil-msa.webp" data-caption="Perfil de Thiago Kusal no programa com o marco Senior."><img src="assets/images/journey/perfil-msa.webp" alt="Perfil de Thiago Kusal no portal Microsoft Student Ambassadors com o marco Senior"><span>Perfil no programa</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-associate.webp" data-caption="Swag do marco Associate Student Ambassador."><img src="assets/images/journey/swag-associate.webp" alt="Camiseta preta com o selo Associate Student Ambassador"><span>Swag Associate</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-beta.webp" data-caption="Kit do antigo marco Beta, posteriormente renomeado Associate."><img src="assets/images/journey/swag-beta.webp" alt="Kit de brindes do antigo marco Beta Student Ambassador"><span>Antigo marco Beta</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-gold.webp" data-caption="Kit do antigo marco Gold, identidade substituída por Senior."><img src="assets/images/journey/swag-gold.webp" alt="Jaqueta e garrafa do antigo marco Gold Student Ambassador"><span>Antigo marco Gold</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-gold-2025.webp" data-caption="Swag Gold recebido no segundo semestre de 2025."><img src="assets/images/journey/swag-gold-2025.webp" alt="Swag de Gold Student Ambassador recebido em 2025"><span>Gold em 2025</span></button>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/atividade-em-comunidade.webp" data-caption="Atividade técnica colaborativa com estudantes."><img src="assets/images/journey/atividade-em-comunidade.webp" alt="Grupo de estudantes participa de atividade técnica colaborativa"><span>Aprendizado em comunidade</span></button>
      </div>
      <p class="photo-credit">Foto da atividade em comunidade por <a href="https://www.pexels.com/photo/people-with-laptops-at-lecture-in-technical-school-19895774/" target="_blank" rel="noopener noreferrer">ThisIsEngineering no Pexels</a>, conforme a licença do Pexels. Imagem de capa baseada em foto de Startup Stock Photos no Pexels.</p>
    </section>

    <section class="content-section" id="faq" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">RESPOSTAS RÁPIDAS</span>
        <h2>Perguntas frequentes</h2>
        <p>Dúvidas comuns desde o cadastro até a progressão.</p>
      </div>
      <div class="faq-list">
        <details><summary>O cadastro é uma seleção?</summary><p>O fluxo atual começa com um registro rápido, sem uma candidatura tradicional. Tornar-se Student Ambassador depende de concluir a credencial e a meta de uma trilha, passar pela validação, receber o convite e concluir o onboarding.</p></details>
        <details><summary>Quanto tempo leva para virar Student Ambassador?</summary><p>Não há prazo fixo para concluir as atividades. Você define o ritmo. Depois, precisa aguardar uma das rodadas trimestrais de convite em janeiro, abril, julho ou outubro.</p></details>
        <details><summary>Quando posso usar o título?</summary><p>Somente depois de aceitar o convite e concluir o onboarding. Registered Member ainda não é Student Ambassador.</p></details>
        <details><summary>Preciso cursar tecnologia ou já ser especialista?</summary><p>Não. O programa é aberto a estudantes de diferentes áreas. O importante é aprender, aplicar, compartilhar e liderar com responsabilidade.</p></details>
        <details><summary>Preciso concluir as duas trilhas?</summary><p>Não. Escolha Community Influencer ou Community Skiller e cumpra a respectiva meta, além da credencial recente.</p></details>
        <details><summary>Uma certificação antiga conta?</summary><p>Ela continua valiosa no currículo, mas a entrada exige uma Certification ou Applied Skills obtida nos 12 meses anteriores ao onboarding.</p></details>
        <details><summary>Meu Contributor ID não chegou. O que faço?</summary><p>Aguarde de três a cinco dias, confira o spam e, se o prazo passar, escreva para <a href="mailto:registration@studentambassadors.com">registration@studentambassadors.com</a>.</p></details>
        <details><summary>Por que minha contagem ainda não apareceu?</summary><p>Os relatórios saem aos sábados no horário do Pacífico e podem levar até 48 horas. Atividades recentes podem entrar somente no ciclo seguinte.</p></details>
        <details><summary>O que eu recebo como Registered Member?</summary><p>Acesso à comunidade inicial no Discord, recursos, orientação e treinamentos. Certificado, email do programa, Microsoft Teams e benefícios de Ambassador chegam somente após o onboarding.</p></details>
        <details><summary>Como cancelar meu registro?</summary><p>Entre no portal com a conta cadastrada, abra o perfil, selecione Minha Conta, acesse Privacidade, escolha Excluir Dados e confirme digitando seu nome. Isso não afeta a associação às redes sociais do Student Ambassadors.</p></details>
        <details><summary>Onde peço ajuda?</summary><p>Para problemas gerais de vínculo e verificação, use <a href="mailto:sa-help@microsoft.com">sa-help@microsoft.com</a>. Para atraso do Contributor ID, use <a href="mailto:registration@studentambassadors.com">registration@studentambassadors.com</a>. Depois do onboarding, siga o canal e o SA-Coordinator indicados no Teams.</p></details>
        <details><summary>Ser Ambassador garante uma futura nomeação MVP?</summary><p>Não. Os programas são independentes. Produção de conteúdo, eventos e impacto técnico podem ajudar a construir um histórico relevante, e Seniors podem ser considerados para mentoria ou possível indicação, mas não há garantia.</p></details>
      </div>
    </section>

    <section class="content-section references-section" id="referencias" data-searchable>
      <div class="section-heading">
        <span class="section-kicker">FONTES E LEITURA COMPLEMENTAR</span>
        <h2>Referências e recursos</h2>
        <p>Use as páginas oficiais e as mensagens recebidas da equipe para confirmar regras vigentes. Os materiais comunitários oferecem contexto adicional.</p>
      </div>
      <ul class="reference-list">
        <li><a href="https://mvp.microsoft.com/studentambassadors/" target="_blank" rel="noopener noreferrer">Microsoft Student Ambassadors</a></li>
        <li><a href="https://mvp.microsoft.com/faq?section=student" target="_blank" rel="noopener noreferrer">FAQ do Student Ambassadors</a></li>
        <li><a href="https://mvp.microsoft.com/studentambassadors/milestones" target="_blank" rel="noopener noreferrer">Marcos do programa</a></li>
        <li><a href="https://aka.ms/sacoc" target="_blank" rel="noopener noreferrer">Código de Conduta</a></li>
        <li><a href="https://learn.microsoft.com/training/student-hub/become-a-student-ambassador?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Microsoft Learn Student Hub</a></li>
        <li><a href="https://learn.microsoft.com/azure/education-hub/find-ids?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Azure for Students</a></li>
        <li><a href="https://learn.microsoft.com/credentials/applied-skills/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Microsoft Applied Skills</a></li>
        <li><a href="https://learn.microsoft.com/training/support/plans?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Visão geral dos Microsoft Learn Plans</a></li>
        <li><a href="https://learn.microsoft.com/training/support/plans-create-manage?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Criar e gerenciar Plans</a></li>
        <li><a href="https://stdntpartners.sharepoint.com/sites/StudentAmbassadorsRegisteredMembersHandbook/SitePages/" target="_blank" rel="noopener noreferrer">Manual do Registered Member no SharePoint</a></li>
        <li><a href="https://stdntpartners.sharepoint.com/sites/SAProgramHandbook" target="_blank" rel="noopener noreferrer">Manual do Student Ambassador no SharePoint</a></li>
        <li><a href="https://rookieops.dev/posts/microsoft-student-ambassador-2026/" target="_blank" rel="noopener noreferrer">Artigo: Como se tornar Microsoft Student Ambassador em 2026</a></li>
      </ul>
    </section>
  `
};
