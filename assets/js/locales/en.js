window.MSA_LOCALES = window.MSA_LOCALES || {};

window.MSA_LOCALES.en = {
  documentLanguage: 'en',
  title: 'Microsoft Student Ambassadors Guide - LATAM',
  description: 'From registration to the Senior milestone, with paths, requirements, benefits, and quick answers.',
  ui: {
    skip: 'Skip to content',
    brandHome: 'Microsoft Student Ambassadors Guide, home',
    brandTitle: 'Student Ambassadors',
    brandSubtitle: 'LATAM Guide',
    searchLabel: 'Search the guide',
    searchPlaceholder: 'Registration, paths, benefits...',
    searchEmpty: 'No matching content found.',
    searchCount: (count) => `${count} ${count === 1 ? 'section found' : 'sections found'}.`,
    tocLabel: 'On this page',
    verified: 'Content verified on August 21, 2026',
    lightTheme: 'Use light theme',
    darkTheme: 'Use dark theme',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    closeImage: 'Close image',
    backToTop: 'Back to top',
    independent: 'Independent and unofficial content.',
    footer: 'Developed by Senior Student Ambassador',
    language: 'Page language'
  },
  html: `
    <section class="hero section-card" id="inicio" data-searchable>
      <div class="hero-copy">
        <span class="eyebrow">INDEPENDENT GUIDE · LATAM</span>
        <h1>Microsoft Student Ambassadors Guide</h1>
        <p class="hero-lead">From your first registration to the Senior milestone, in a clear and practical journey built for the LATAM community.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#jornada">Explore the journey</a>
          <a class="button button-secondary" href="#faq">Open the FAQ</a>
        </div>
        <p class="freshness"><span aria-hidden="true">●</span> Updated in August 2026</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <img src="assets/images/logo-programa.png" alt="">
        <span class="spark spark-one">✦</span><span class="spark spark-two">✦</span>
      </div>
    </section>

    <section class="content-section" id="jornada" data-searchable>
      <div class="section-heading"><span class="section-kicker">OVERVIEW</span><h2>The journey in four stages</h2><p>See where you are, what comes next, and when each title becomes official.</p></div>
      <div class="stage-grid">
        <article class="stage-card stage-registered"><span class="stage-number">01</span><div class="stage-icon" aria-hidden="true">✓</div><h3>Registered Member</h3><p>Registration complete, access to the entry community, and preparation for one contribution path.</p><a href="#registered">See requirements <span aria-hidden="true">→</span></a></article>
        <article class="stage-card stage-ambassador"><span class="stage-number">02</span><img src="assets/images/badges/ambassador.png" alt="Student Ambassador badge"><h3>Student Ambassador</h3><p>Invitation accepted, onboarding completed, and official participation begins.</p><a href="#onboarding">Understand onboarding <span aria-hidden="true">→</span></a></article>
        <article class="stage-card stage-associate"><span class="stage-number">03</span><img src="assets/images/badges/associate.png" alt="Associate Student Ambassador badge"><h3>Associate Ambassador</h3><p>The first progression milestone, earned through an approved event.</p><a href="#associate">How to advance <span aria-hidden="true">→</span></a></article>
        <article class="stage-card stage-senior"><span class="stage-number">04</span><img src="assets/images/badges/senior.png" alt="Senior Student Ambassador badge"><h3>Senior Ambassador</h3><p>Recognition for consistency, leadership, and demonstrated impact.</p><a href="#senior">Review the criteria <span aria-hidden="true">→</span></a></article>
      </div>
      <figure class="journey-diagram"><img src="assets/images/journey/journey-flow-en.svg" alt="Flow from registration to Registered Member, credential and ID, Influencer or Skiller path, validation, invitation, and Student Ambassador"><figcaption>A quick map of the path to onboarding. Associate and Senior progression comes after this sequence.</figcaption></figure>
    </section>

    <section class="notice notice-info" data-searchable><span class="notice-icon" aria-hidden="true">i</span><div><strong>This is an independent guide.</strong><p>Rules, targets, benefits, and schedules may change. Confirm details in the portal, the member handbook, and official messages for your cohort.</p></div></section>

    <section class="content-section" id="programa" data-searchable>
      <div class="section-heading"><span class="section-kicker">BEFORE YOU START</span><h2>What the program is</h2><p>A global community for students who want to explore technology, build AI-driven solutions, and create impact in their communities.</p></div>
      <div class="prose-grid">
        <article class="prose-card"><h3>Learn by doing</h3><p>Build technical and leadership skills through online content, Microsoft Learn Plans, projects, campus events, and program activities.</p></article>
        <article class="prose-card"><h3>Build community</h3><p>Connect with students, AI innovators, aspiring founders, Microsoft MVPs, and Microsoft employees to share ideas and solve challenges.</p></article>
        <article class="prose-card"><h3>Turn learning into impact</h3><p>Your work can become portfolio material, experience for your resume and LinkedIn, international collaboration, and preparation for projects or startups.</p></article>
      </div>
      <div class="rich-text">
        <p>Student Ambassadors is not an internship, a job, or a professional certification, and it does not guarantee a role at Microsoft. It is an extracurricular contribution program. It is also not limited to technology degrees. Business, Design, Engineering, and students from other fields can build useful experiences with Microsoft technology.</p>
        <p>You do not need to arrive as an expert. The goal is to learn, share, and lead responsibly. The program also exposes members to AI, cloud technology, competitions such as Imagine Cup, and resources for testing startup ideas.</p>
        <p class="community-disclaimer">The information on this page was updated in August 2026. The page is maintained by the Student Ambassadors LATAM community and does not represent official Microsoft documentation.</p>
      </div>
    </section>

    <section class="content-section" id="cadastro" data-searchable>
      <div class="section-heading"><span class="section-kicker">STAGE 1</span><h2>Eligibility and registration</h2><p>Align your identities, confirm the requirements, and register through the official portal.</p></div>
      <div class="split-layout">
        <article class="panel-card"><h3>Entry requirements</h3><ul class="check-list"><li>Be at least 18 years old when registering.</li><li>Be enrolled full time at an accredited academic institution.</li><li>Have an active Azure for Students account when that requirement is in effect.</li><li>Not have been previously removed from the program by Microsoft.</li><li>Not be a current Microsoft employee or contractor.</li></ul></article>
        <article class="panel-card accent-panel"><h3>Before the form</h3><ul class="check-list"><li>A Microsoft account you can keep using.</li><li>A Microsoft Learn profile linked to the same identity.</li><li>Regular access to the email address you provide.</li><li>Current institution and course information.</li><li>Verified Azure for Students access if required for your cohort.</li></ul></article>
      </div>
      <aside class="notice notice-warning"><span class="notice-icon" aria-hidden="true">!</span><div><strong>Azure for Students note</strong><p>On August 21, 2026, the public FAQ still listed the account as an entry requirement, while operational guidance for the current round said it was temporarily paused. Check the portal and official messages before registering.</p></div></aside>
      <p class="small-note">When in effect, Azure for Students requires academic verification and offers USD 100 in credit for 12 months without a credit card. Geographic restrictions also apply under United States export rules. The FAQ lists Cuba, Iran, North Korea, Sudan, Syria, Russia, Belarus, and Crimea. Students in the United States on an F-1 visa should confirm compatibility with their institution or qualified immigration guidance.</p>
      <div class="steps-card"><h3>How to register</h3><ol class="step-list">
        <li><span>1</span><div><strong>Open the portal</strong><p>Visit <a href="https://mvp.microsoft.com/studentambassadors/" target="_blank" rel="noopener noreferrer">Microsoft Student Ambassadors</a> and select <em>Get Started</em>. The form usually takes under five minutes.</p></div></li>
        <li><span>2</span><div><strong>Use consistent details</strong><p>Whenever possible, use the same identity for registration, Microsoft Learn, and Azure for Students.</p></div></li>
        <li><span>3</span><div><strong>Read and accept the terms</strong><p>Review the privacy statement, member rules, and the <a href="https://aka.ms/sacoc" target="_blank" rel="noopener noreferrer">Code of Conduct</a>.</p></div></li>
        <li><span>4</span><div><strong>Watch your email</strong><p>The next steps arrive at your registration address. Check your spam folder too.</p></div></li>
      </ol></div>
      <p class="privacy-note">Do not post academic documents, subscription IDs, or personal information when asking for help. Use the official support channels.</p>
    </section>

    <section class="content-section" id="registered" data-searchable>
      <div class="section-heading"><span class="section-kicker">STAGE 2</span><h2>Registered Member</h2><p>Registration gives you access to the entry community, but it does not give you the Student Ambassador title yet.</p></div>
      <div class="rich-text"><p>Registered Members get access to a global Discord community of students, advisors, and mentors, plus resources, guidance, and training. The invitation usually comes from <code>sa-noreply@microsoft.com</code>.</p><p>To become eligible for onboarding, complete two things: earn a Microsoft Certification or Microsoft Applied Skills credential within the 12 months before onboarding, and reach the target for one contribution path. You do not need both paths.</p><p>During this stage, the profile remains <strong>Under review</strong> until all requirements to become a Student Ambassador have been met. Completing registration alone does not change this status.</p></div>
      <div class="resource-callout"><div><span class="resource-label">REGISTERED MEMBER AREA</span><h3>Handbook and progression board</h3><p>Registered Members can review all path rules and follow their personal progression board in the handbook SharePoint. You must sign in with an account authorized by the program.</p></div><a class="button button-primary" href="https://stdntpartners.sharepoint.com/sites/StudentAmbassadorsRegisteredMembersHandbook/SitePages/" target="_blank" rel="noopener noreferrer">Open SharePoint</a></div>
      <div class="metric-grid">
        <article class="metric-card"><span class="metric-value">1</span><h3>Recent credential</h3><p>Certification or Applied Skills within the 12-month window.</p></article>
        <article class="metric-card"><span class="metric-value">1 of 2</span><h3>Completed path</h3><p>Community Influencer or Community Skiller.</p></article>
        <article class="metric-card"><span class="metric-value">4×</span><h3>Cohorts per year</h3><p>Invitations are expected in January, April, July, and October.</p></article>
      </div>
      <div class="subsection" id="contributor-id"><h3>Program Contributor ID</h3><p>Your Student Ambassadors Contributor ID normally arrives by email three to five days after registration. It attributes eligible activity to your profile and stays the same while you are a Registered Member.</p><div class="code-example"><span>Format</span><code>?wt.mc_id=studentamb_######</code></div><p>Do not confuse it with the Learn Contributor ID in your Microsoft Learn profile settings. Use the ID sent by Student Ambassadors for path activities. It is not a password or token.</p>
        <aside class="notice notice-warning compact-notice"><span class="notice-icon" aria-hidden="true">!</span><div><strong>Check your Learn Username</strong><p>If you entered it incorrectly or added extra text, your credential may not be indexed. Update it in the portal or contact support before deleting your registration.</p></div></aside>
      </div>
      <div class="subsection"><h3>Suggested credentials</h3><p>Choose a credential that fits your level and the topic you want to share. Two Applied Skills suggested in the handbook are:</p><ul class="resource-list"><li><a href="https://learn.microsoft.com/credentials/applied-skills/streamline-business-workflows-with-ai-chat/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Streamline business workflows with AI chat</a><span>Microsoft 365 Copilot and business workflows.</span></li><li><a href="https://learn.microsoft.com/credentials/applied-skills/generate-reports-with-ai-research-agents/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Generate reports with AI research agents</a><span>Creating and refining reports with the Researcher agent.</span></li></ul><p class="small-note">Complete the recommended learning path and review the Microsoft 365 Copilot access requirements. Estimated duration can change, so check before starting.</p></div>
    </section>

    <section class="content-section" id="trilhas" data-searchable>
      <div class="section-heading"><span class="section-kicker">CHOOSE YOUR PATH</span><h2>Influencer or Skiller</h2><p>Pick the path that matches how you prefer to create value for your community.</p></div>
      <div class="path-grid">
        <article class="path-card influencer-card"><span class="path-label">COMMUNITY INFLUENCER</span><div class="path-metric"><strong>250</strong><span>Preferred Visitors</span></div><p>For people who enjoy creating, framing, and distributing Microsoft content online.</p><a class="button button-secondary" href="#influencer">Open the Influencer path</a></article>
        <article class="path-card skiller-card"><span class="path-label">COMMUNITY SKILLER</span><div class="path-metric"><strong>1,000</strong><span>net-new modules</span></div><p>For people who prefer organizing groups and facilitating structured learning through Microsoft Learn.</p><a class="button button-secondary" href="#skiller">Open the Skiller path</a></article>
      </div>
      <p class="decision-tip"><strong>Tip:</strong> Skiller is not solo study because results depend on participants. Influencer does not require a huge audience. A small, well-aligned community can create stronger impact.</p>
    </section>

    <section class="content-section path-section" id="influencer" data-searchable>
      <div class="section-heading"><span class="section-kicker">PATH 1</span><h2>Community Influencer</h2><p>Create and share relevant content with your Contributor ID to reach 250 Preferred Visitors on eligible Microsoft pages.</p></div>
      <div class="split-layout">
        <article class="panel-card"><h3>Requirements</h3><ul class="check-list"><li>250 Preferred Visitors on eligible Microsoft URLs.</li><li>The program Contributor ID added correctly.</li><li>A Microsoft credential within the 12-month window.</li><li>Content shared with context and real value.</li></ul></article>
        <article class="panel-card"><h3>Build the link</h3><p>Remove the language locale when the path instructions require it. If the URL already contains <code>?</code>, append your ID with <code>&amp;</code>.</p><div class="code-stack"><code>learn.microsoft.com/en-us/copilot?WT.mc_id=academic</code><span>becomes</span><code>learn.microsoft.com/copilot?WT.mc_id=academic&amp;wt.mc_id=studentamb_######</code></div></article>
      </div>
      <details class="disclosure"><summary>View eligible URLs and prefixes</summary><div class="url-grid"><code>azure.microsoft.com</code><code>blog.fabric.microsoft.com</code><code>code.visualstudio.com</code><code>community.fabric.microsoft.com</code><code>community.powerplatform.com</code><code>copilot.microsoft.com</code><code>devblogs.microsoft.com</code><code>developer.microsoft.com</code><code>dotnet.microsoft.com</code><code>events.microsoft.com</code><code>imaginecup.microsoft.com</code><code>learn.microsoft.com</code><code>learn.microsoft.com/copilot</code><code>microsoft.com/insidetrack</code><code>microsoft.com/microsoft-365-copilot</code><code>microsoft.com/microsoft-cloud/blog</code><code>microsoft.com/microsoft-copilot/for-individuals</code><code>microsoft.com/microsoft-fabric</code><code>microsoft.com/power-platform</code><code>microsoft.com/startups</code><code>mvp.microsoft.com/studentambassadors/</code><code>powerbi.microsoft.com/blog</code><code>reactor.microsoft.com</code><code>techcommunity.microsoft.com</code></div><p>Prefer specific articles, documentation, or announcements instead of a generic home page. Microsoft Learn Plans do not count as Preferred Visitors.</p></details>
      <div class="subsection"><h3>What Preferred Visitor means</h3><p>It is a proprietary metric. Microsoft does not disclose the exact formula, so 250 raw clicks do not automatically equal 250 Preferred Visitors.</p><div class="comparison-grid"><article class="example-card positive-example"><span aria-hidden="true">✓</span><h4>Value-added experience</h4><p>Share a specific resource on LinkedIn, explain the problem it solves, and generate genuine reading and reposts from interested networks.</p></article><article class="example-card negative-example"><span aria-hidden="true">×</span><h4>No value added</h4><p>Drop the same link into unrelated WhatsApp groups and ask people with no demonstrated interest to click it.</p></article></div></div>
      <div class="subsection"><h3>Recommended tool for your links</h3><div class="tool-highlight"><div class="tool-copy"><span class="resource-label">COMMUNITY PROJECT</span><h4><a href="https://github.com/tkusal/ambassador-referral-linker" target="_blank" rel="noopener noreferrer">Ambassador Referral Linker</a></h4><p>The extension helps create eligible Microsoft links with your Contributor ID. It adds or replaces the <code>wt.mc_id</code> parameter, preserves other parameters, and can remove the language segment to create a language-neutral URL.</p><p class="small-note">The project is independent, free, and open source. It is not affiliated with or maintained by Microsoft. Always review the final link before sharing it.</p></div><div class="tool-actions" aria-label="Install Ambassador Referral Linker"><a class="store-link" href="https://chromewebstore.google.com/detail/ambassador-referral-linke/andakdkbonjlmcoocgjfanknedododlp" target="_blank" rel="noopener noreferrer"><strong>Chrome</strong><span>Install from the Chrome Web Store</span></a><a class="store-link" href="https://microsoftedge.microsoft.com/addons/detail/nbjblhjldkjffghlpnjlnccjeljehjbh" target="_blank" rel="noopener noreferrer"><strong>Edge</strong><span>Install from Microsoft Edge Add-ons</span></a><a class="store-link" href="https://addons.mozilla.org/pt-BR/firefox/addon/ambassador-referral-linker/" target="_blank" rel="noopener noreferrer"><strong>Firefox</strong><span>Install from Firefox Browser Add-ons</span></a><a class="store-link source-link" href="https://github.com/tkusal/ambassador-referral-linker" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong><span>View code, documentation, and support</span></a></div></div><p class="small-note">The extension is an independent continuation and refactor of the original project by Martin Brandl. Adding the Contributor ID manually remains a valid option.</p></div>
      <aside class="notice notice-warning"><span class="notice-icon" aria-hidden="true">!</span><div><strong>Do not manipulate metrics</strong><p>Spam, scripts, automated clicks, and purchased traffic violate program rules. Microsoft can request evidence and invalidate activity.</p></div></aside>
    </section>

    <section class="content-section path-section" id="skiller" data-searchable>
      <div class="section-heading"><span class="section-kicker">PATH 2</span><h2>Community Skiller</h2><p>Create Microsoft Learn Plans and guide participants to complete 1,000 net-new modules.</p></div>
      <div class="split-layout">
        <article class="panel-card"><h3>Requirements</h3><ul class="check-list"><li>1,000 net-new modules completed by Plan participants.</li><li>Contributor ID in the description and invitation link.</li><li>A Microsoft credential within the 12-month window.</li><li>Participants have started the Plan and agreed to share progress.</li></ul></article>
        <article class="panel-card accent-panel"><h3>Turn the target into a cohort</h3><div class="math-example"><strong>50 × 20 = 1,000</strong><span>50 people, 20 new modules each</span></div><div class="math-example"><strong>100 × 10 = 1,000</strong><span>100 people, 10 new modules each</span></div></article>
      </div>
      <div class="steps-card"><h3>Create and share the Plan</h3><ol class="step-list">
        <li><span>1</span><div><strong>Start with a Collection</strong><p>Open your Microsoft Learn Collections, use an existing one or create a new one, and copy it as a Plan.</p></div></li>
        <li><span>2</span><div><strong>Shape the outcome</strong><p>Set a title, description, milestones, and a clear result. Put your Contributor ID at the end of the description.</p></div></li>
        <li><span>3</span><div><strong>Use trackable content</strong><p>For this path, prioritize modules and learning paths. Other formats may need manual completion and hurt tracking.</p></div></li>
        <li><span>4</span><div><strong>Share the correct link</strong><p>Add your Student Ambassadors Contributor ID to the invite URL while keeping the Learn Contributor ID added by the platform.</p></div></li>
        <li><span>5</span><div><strong>Guide participants</strong><p>Each learner must select <em>Start</em> and agree to share progress. Selecting <em>Drop</em> removes them from the creator's report.</p></div></li>
      </ol></div>
      <div class="code-example wide-code"><span>Invitation link</span><code>learn.microsoft.com/plans/[id]?SharingId=[id]&amp;wt.mc_id=studentamb_######</code></div>
      <div class="subsection"><h3>What net-new means</h3><p>Only work completed after a learner joins and starts the Plan counts. If Henri finished a cloud computing module in August and joined Maria's Plan in September, that earlier completion adds zero to Maria's net-new metric.</p></div>
      <div class="subsection"><h3>Content ideas</h3><div class="topic-grid"><article class="topic-card"><h4>Copilot</h4><ul><li>Introduction to Microsoft 365 Copilot</li><li>Creating effective prompts</li><li>Prebuilt Copilot agents</li><li>Optimizing business processes</li><li>The new Outlook for Windows</li></ul></article><article class="topic-card"><h4>Power Platform</h4><ul><li>Power Automate capabilities</li><li>Cloud flows</li><li>Business process automation</li><li>Power Apps capabilities</li><li>Canvas apps in Power Apps</li></ul></article></div></div>
      <div class="subsection"><h3>Why the count may be lower</h3><div class="table-wrap"><table><thead><tr><th>Stage</th><th>Possible cause</th></tr></thead><tbody><tr><td>Creating</td><td>The Plan included content other than modules or learning paths, or was changed after being saved.</td></tr><tr><td>Joining</td><td>Learners did not select Start, did not share progress, finished the module before joining, or selected Drop.</td></tr><tr><td>Participating</td><td>Activity violated the terms, including attempts to manipulate counts.</td></tr></tbody></table></div></div>
    </section>

    <section class="content-section" id="acompanhamento" data-searchable>
      <div class="section-heading"><span class="section-kicker">TRACK THE TARGET</span><h2>Reports and Progression Board</h2><p>Both paths use the same update schedule.</p></div>
      <div class="report-card"><div><span class="report-day">SAT</span><strong>Pacific Time</strong><p>Report emails and the Progression Board are updated weekly.</p></div><div><span class="report-day">48h</span><strong>Processing window</strong><p>Recent activity may not appear until the next weekly cycle.</p></div><div><span class="report-day">ME</span><strong>Private view</strong><p>Each Registered Member sees only their progress. The board may be empty before the first report.</p></div></div>
    </section>

    <section class="content-section" id="onboarding" data-searchable>
      <div class="section-heading"><span class="section-kicker">STAGE 3</span><h2>From the target to onboarding</h2><p>Completing the target makes you eligible. The official title starts only after the invitation, acceptance, and onboarding.</p></div>
      <ol class="journey-timeline"><li><span>01</span><div><h3>Processing</h3><p>Your metrics and credential are processed and checked.</p></div></li><li><span>02</span><div><h3>Quarterly cohort</h3><p>Invitations are expected in January, April, July, and October, usually in the second week.</p></div></li><li><span>03</span><div><h3>Acceptance</h3><p>You receive and accept the program team's invitation.</p></div></li><li><span>04</span><div><h3>Onboarding</h3><p>You complete orientation and can officially use the Microsoft Student Ambassador title.</p></div></li></ol>
      <p>If you miss the next cohort, your activity and counts roll forward for consideration in a future cohort. You set the pace, but your credential must stay inside the required window.</p>
      <div class="unlock-card"><img src="assets/images/badges/ambassador.png" alt="Student Ambassador badge"><div><span>MILESTONE UNLOCKED</span><h3>Student Ambassador</h3><p>Title, certificate, <code>@studentambassadors.com</code> email, Microsoft Teams, and program benefits.</p></div></div>
    </section>

    <section class="content-section" id="ambassador" data-searchable>
      <div class="section-heading"><span class="section-kicker">AFTER ONBOARDING</span><h2>Keep your membership active</h2><p>The entry paths end. Your new rhythm combines qualified reach and one approved event every quarter.</p></div>
      <div class="metric-grid two-metrics"><article class="metric-card"><span class="metric-value">50</span><h3>Preferred Visitors</h3><p>Microsoft content shared using your Contributor ID.</p></article><article class="metric-card"><span class="metric-value">1</span><h3>Approved event</h3><p>An activity that skills attendees on Microsoft technology.</p></article></div>
      <div class="resource-callout"><div><span class="resource-label">STUDENT AMBASSADOR AREA</span><h3>Program handbook and quarterly progress</h3><p>Student Ambassadors, Associate Ambassadors, and Senior Ambassadors can review all rules and follow the quarterly requirements progression board in the program SharePoint.</p></div><a class="button button-primary" href="https://stdntpartners.sharepoint.com/sites/SAProgramHandbook" target="_blank" rel="noopener noreferrer">Open SharePoint</a></div>
      <p>Quarters run January to March, April to June, July to September, and October to December. Meeting the requirements renews participation. Members who do not meet them may be removed.</p>
      <div class="prose-grid"><article class="prose-card"><h3>Microsoft Rewards</h3><p>When the reward requirements are also met, an Ambassador gets 5,000 points. The code is personal, expires in 30 days, and usually arrives by the 15th of the following month.</p></article><article class="prose-card"><h3>Insider Calls</h3><p>Members who completed the previous quarter may be invited to conversations about careers, leadership, and community.</p></article><article class="prose-card"><h3>Rotations</h3><p>Experiences with product teams. They generally require two approved events in that area during the prior quarter and do not replace current requirements.</p></article></div>
    </section>

    <section class="content-section" id="associate" data-searchable>
      <div class="milestone-layout"><div class="milestone-image"><img src="assets/images/badges/associate.png" alt="Associate Student Ambassador badge"></div><div><span class="section-kicker">STAGE 4</span><h2>From Ambassador to Associate</h2><p>Associate depends on an approved event that skills attendees on Microsoft technology.</p><ul class="check-list"><li>Create and deliver the event.</li><li>Submit it through the platform and wait for approval.</li><li>Be the person who created, presented, and submitted it.</li><li>Notify the SA-Coordinator listed in Teams after submission.</li></ul><p>Third-party and Microsoft-run events are not eligible. Learn Plans do not count for this milestone. Each event can be submitted once, and only one Ambassador can use it to advance.</p></div></div>
    </section>

    <section class="content-section" id="senior" data-searchable>
      <div class="milestone-layout reverse-layout"><div class="milestone-image senior-image"><img src="assets/images/badges/senior.png" alt="Senior Student Ambassador badge"></div><div><span class="section-kicker">STAGE 5</span><h2>From Associate to Senior</h2><p>The program team reviews nominations in January and July. Meeting the criteria does not guarantee an automatic promotion.</p><ul class="check-list"><li>Have at least one year as a Student Ambassador and be more than six months away from graduation.</li><li>Keep program requirements current and participate in the Teams community.</li><li>Complete Microsoft Learn content and share it with your Contributor ID.</li><li>Run approved events with measurable impact.</li><li>Keep your program profile and LinkedIn complete with activities and results.</li></ul><p>Nomination recognizes consistency, leadership, and impact. Until early 2026, the current milestones were called Alpha, Beta, and Gold. They became Student Ambassador, Associate, and Senior during the first half of 2026.</p></div></div>
    </section>

    <section class="content-section" id="beneficios" data-searchable>
      <div class="section-heading"><span class="section-kicker">WHAT CHANGES</span><h2>Benefits by milestone</h2><p>Certificates update as you progress. Swag, vouchers, letters, and special experiences depend on level, availability, or invitation.</p></div>
      <div class="table-wrap benefits-table"><table><thead><tr><th>Milestone</th><th>Benefits and opportunities</th></tr></thead><tbody><tr><td><strong>Student Ambassador</strong></td><td>Title, certificate, program email, Microsoft 365, Visual Studio Enterprise, USD 150 in monthly Azure credits, AI tools, Teams, badges, and an annual Credly badge.</td></tr><tr><td><strong>Associate</strong></td><td>Previous benefits, USD 100 in Snappy swag credit, certification voucher opportunity, possible Campus Club letter, event support, feedback groups, bug bashes, and prerelease testing.</td></tr><tr><td><strong>Senior</strong></td><td>Previous benefits, USD 200 in Snappy swag credit, consideration for special events, campaign leadership, pilots, MVP mentorship, and potential MVP nomination after graduation.</td></tr></tbody></table></div>
      <p class="small-note">Values reported for August 2026. Azure credit cannot be withdrawn as cash. The Ambassador's USD 150 monthly benefit is different from the USD 100 for 12 months offered by Azure for Students.</p>
    </section>

    <section class="content-section" id="registros" data-searchable>
      <div class="section-heading"><span class="section-kicker">REAL LIFE</span><h2>Moments from the journey</h2><p>A profile and recognition items from different moments in the program. Select an image to enlarge it.</p></div>
      <div class="gallery-grid" data-gallery>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/capa.webp" data-caption="A visual composition of the Student Ambassador, Associate, and Senior journey."><img src="assets/images/journey/capa.webp" alt="Student Ambassador, Associate, and Senior badges over a student using a laptop"><span>Journey overview</span></button>
        <button class="gallery-item gallery-wide" type="button" data-full="assets/images/journey/perfil-msa.webp" data-caption="Example program profile showing the Senior milestone."><img src="assets/images/journey/perfil-msa.webp" alt="Example Student Ambassadors profile showing the Senior milestone"><span>Example program profile</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-associate.webp" data-caption="Associate Student Ambassador milestone swag."><img src="assets/images/journey/swag-associate.webp" alt="Shirt with the Associate Student Ambassador badge"><span>Associate swag</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-beta.webp" data-caption="Former Beta milestone kit, later renamed Associate."><img src="assets/images/journey/swag-beta.webp" alt="Former Beta milestone swag kit"><span>Former Beta milestone</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-gold.webp" data-caption="Former Gold milestone kit, with branding later replaced by Senior."><img src="assets/images/journey/swag-gold.webp" alt="Former Gold milestone jacket and bottle"><span>Former Gold milestone</span></button>
        <button class="gallery-item" type="button" data-full="assets/images/journey/swag-gold-2025.webp" data-caption="Gold swag received in the second half of 2025."><img src="assets/images/journey/swag-gold-2025.webp" alt="Gold Student Ambassador swag received in 2025"><span>Gold in 2025</span></button>
      </div>
      <p class="photo-credit">Cover composition based on a Startup Stock Photos image on Pexels.</p>
    </section>

    <section class="content-section" id="faq" data-searchable>
      <div class="section-heading"><span class="section-kicker">QUICK ANSWERS</span><h2>Frequently asked questions</h2><p>Common questions from registration through progression.</p></div>
      <div class="faq-list">
        <details><summary>Is registration a selection process?</summary><p>The current flow starts with a quick registration. Becoming a Student Ambassador depends on completing a credential and one path, passing validation, receiving an invitation, and finishing onboarding.</p></details>
        <details><summary>How long does it take?</summary><p>There is no fixed deadline for Registered Member activities. You set the pace and then wait for a cohort in January, April, July, or October.</p></details>
        <details><summary>When can I use the title?</summary><p>Only after accepting the invitation and completing onboarding. A Registered Member is not yet a Student Ambassador.</p></details>
        <details><summary>Do I need a technology degree or expert skills?</summary><p>No. Students from many fields can participate. What matters is learning, applying, sharing, and leading responsibly.</p></details>
        <details><summary>Do I need both paths?</summary><p>No. Choose Influencer or Skiller, complete that target, and earn a recent credential.</p></details>
        <details><summary>Does an older certification count?</summary><p>It is still valuable for your resume, but entry requires a credential earned within the 12 months before onboarding.</p></details>
        <details><summary>My Contributor ID did not arrive. What should I do?</summary><p>Wait three to five days, check spam, then email <a href="mailto:registration@studentambassadors.com">registration@studentambassadors.com</a>.</p></details>
        <details><summary>Why is my count missing?</summary><p>Reports are sent on Saturdays in Pacific Time and can take up to 48 hours. Recent activity may appear in the next cycle.</p></details>
        <details><summary>What does a Registered Member receive?</summary><p>Discord access, resources, guidance, and training. The certificate, program email, Teams, and Ambassador benefits arrive after onboarding.</p></details>
        <details><summary>How do I unregister?</summary><p>Sign in to the portal, open your profile, select My Account, Privacy, and Delete Data, then confirm with your name. This does not affect Student Ambassadors social media membership.</p></details>
        <details><summary>Where can I get help?</summary><p>For general identity and verification issues, email <a href="mailto:sa-help@microsoft.com">sa-help@microsoft.com</a>. For Contributor ID delays, use <a href="mailto:registration@studentambassadors.com">registration@studentambassadors.com</a>. After onboarding, follow the Teams support channel and SA-Coordinator.</p></details>
        <details><summary>Does being an Ambassador guarantee a future MVP nomination?</summary><p>No. The programs are independent. A strong contribution history can help, and Seniors may be considered for mentorship or a potential nomination, but there is no guarantee.</p></details>
      </div>
    </section>

    <section class="content-section references-section" id="referencias" data-searchable>
      <div class="section-heading"><span class="section-kicker">SOURCES AND FURTHER READING</span><h2>References and resources</h2><p>Use official pages and messages from the program team to confirm current rules. Community materials provide additional context.</p></div>
      <ul class="reference-list"><li><a href="https://mvp.microsoft.com/studentambassadors/" target="_blank" rel="noopener noreferrer">Microsoft Student Ambassadors</a></li><li><a href="https://mvp.microsoft.com/faq?section=student" target="_blank" rel="noopener noreferrer">Student Ambassadors FAQ</a></li><li><a href="https://mvp.microsoft.com/studentambassadors/milestones" target="_blank" rel="noopener noreferrer">Program milestones</a></li><li><a href="https://aka.ms/sacoc" target="_blank" rel="noopener noreferrer">Code of Conduct</a></li><li><a href="https://learn.microsoft.com/training/student-hub/become-a-student-ambassador?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Microsoft Learn Student Hub</a></li><li><a href="https://learn.microsoft.com/azure/education-hub/find-ids?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Azure for Students</a></li><li><a href="https://learn.microsoft.com/credentials/applied-skills/?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Microsoft Applied Skills</a></li><li><a href="https://learn.microsoft.com/training/support/plans?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Microsoft Learn Plans overview</a></li><li><a href="https://learn.microsoft.com/training/support/plans-create-manage?wt.mc_id=studentamb_365381" target="_blank" rel="noopener noreferrer">Create and manage Plans</a></li><li><a href="https://stdntpartners.sharepoint.com/sites/StudentAmbassadorsRegisteredMembersHandbook/SitePages/" target="_blank" rel="noopener noreferrer">Registered Members Handbook on SharePoint</a></li><li><a href="https://stdntpartners.sharepoint.com/sites/SAProgramHandbook" target="_blank" rel="noopener noreferrer">Student Ambassadors Program Handbook on SharePoint</a></li><li><a href="https://rookieops.dev/posts/microsoft-student-ambassador-2026/" target="_blank" rel="noopener noreferrer">Article: How to become a Microsoft Student Ambassador in 2026</a></li></ul>
    </section>
  `
};
