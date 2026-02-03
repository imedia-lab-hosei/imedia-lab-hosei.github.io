export default {
  base: {
    cancel: 'Cancel',
    confirm: 'Confirm',
    read: 'Read',
  },
  header: {
    changeTheme: 'Toggle Theme',
    changeLanguage: 'Switch Language',
    changeColor: 'Change Color',
    home: 'Home',
    games: 'Games',
    articles: 'Articles & Thoughts',
    process: 'Roadmap', // 或者用 Development Process
    tech: 'Technology',
    entretament: 'Entertainment',
    webtools: 'Web Tools',
  },
  maintenanceView: {
    mainInfor: 'UNDER CONSTRUCTION',
    desc: 'This page is currently under maintenance. Please check back later! O.O',
    back: 'Back',
  },
  heroSection: {
    athour: 'MOMOCHA',
    welcome: 'Welcome to',
    room: 'Room',
    desc: 'Personal blog based on Vue 3, NuxtUI, and Tailwind. Responsive design with mobile support.',
    guest: 'Hello, Guest',
    readArticle: 'Read Articles',
    github: 'Github',
  },
  HomeView: {
    newArticle: 'News',
  },
  tags: {
    shimokita: 'Shimokitazawa',
    food: 'Gourmet',
    interview: 'Interview Tips',
    roar: 'Roaring Style',
    mussel: 'Oyster',
    summer: 'Summer',
    swimming: 'Swimming',
    expression: 'Facial Control',
    eye_power: 'Eye Power',
    sports: 'Sports',
    footwork: 'Footwork',
    philosophy: 'Philosophy',
    hot_blood: 'Hot-blooded',
    tech: 'technology',
    vue: 'Vue.js',
    original: 'Original',
    tailwind: 'Tailwind CSS',
    pinia: 'Pinia',
  },
  post_list: {
    '1': {
      title: 'Route Guard-Based i18n Automation',
      desc: 'Exploring how to leverage full-stack route interception to achieve zero-latency, SEO-friendly language switching.',
      content: `
    <div class="prose prose-slate dark:prose-invert max-w-none">
      <p class="text-balance leading-relaxed ">
        In internationalized web applications, <strong class="text-primary">Route Guards</strong> serve as the optimal gateway for handling language switching. They ensure the system prepares the correct language pack before the component is rendered.
      </p>
      <h2 class="text-primary">1. Core Principles</h2>
      <p>
        Route guards intercept every navigation action to parse the language identifier (e.g., <code>/en/</code> or <code>/ja/</code>) from the URL. If the locale is invalid or missing, it can immediately redirect or load the required resources.
      </p>

      <h2 class="text-primary">2. Implementation Steps</h2>
      <ul class="marker:text-primary">
        <li>
          <strong class="text-main">Dynamic Route Matching:</strong> Define routes in <code>/:lang/dashboard</code> format and capture language parameters via Params.
        </li>
        <li>
          <strong class="text-main">Navigation Interception:</strong> Detect <code>to.params.lang</code> within <code>router.beforeEach</code> and sync it with the Vue I18n instance.
        </li>
        <li>
          <strong class="text-main">Lazy Loading Language Packs:</strong> Instead of loading everything at once, use <code>import()</code> to load specific languages dynamically upon switching.
        </li>
      </ul>

      <blockquote class="border-s-primary bg-muted/30 p-4 rounded-e-lg italic quote">
        "This approach not only enhances user experience but also allows search engines to crawl different language versions, significantly boosting SEO rankings."
      </blockquote>

      <p class="text-muted text-sm mt-6">
        Compared to traditional <code>localStorage</code> storage, a route-based solution supports <strong>direct link sharing</strong>, making it the current industry best practice.
      </p>
    </div>
  `,
    },
    //   '2': {
    //     title: 'Dynamic Dark Mode and Theme Switching with Tailwind CSS',
    //     desc: 'Leveraging Tailwind CSS utility classes to implement a theme system supporting dark mode and custom primary colors.',
    //     content: `
    //   <div class="prose prose-slate dark:prose-invert max-w-none">
    //     <p class="text-balance leading-relaxed ">
    //       In modern web development, a <strong class="text-primary">Theme System</strong>
    //       is no longer just a simple toggle between light and dark; it involves deep customization including
    //       <strong>dynamic branding colors</strong> and <strong>dark mode variants</strong>. By combining
    //       Pinia's persistence capabilities, we can build a responsive and flexible UI architecture.
    //     </p>

    //     <h2 class="text-primary border-b border-muted pb-2">1. Core Strategy</h2>
    //     <p>
    //       This solution employs a two-pronged approach: manipulating the <code>classList</code> of the root DOM
    //       node for dark mode visual toggling, while utilizing <code>CSS Variables</code> to dynamically rewrite the global theme colors.
    //     </p>

    //     <h2 class="text-primary border-b border-muted pb-2">2. Implementation Details</h2>
    //     <ul class="marker:text-primary space-y-4">
    //       <li>
    //         <strong class="text-main">Reactive State Management:</strong> Define <code>isDark</code> and
    //         <code>primaryColor</code> in Pinia. Sync these states to <code>localStorage</code> via watchers
    //         to ensure persistence across sessions.
    //       </li>
    //       <li>
    //         <strong class="text-main">Dark Mode Injection:</strong> Use the <code>applyThemeToDom</code> function.
    //         When <code>isDark.value</code> is true, the <code>dark</code> class is added to
    //         <code>document.documentElement</code>, triggering Tailwind's <code>dark:</code> variants.
    //       </li>
    //       <li>
    //         <strong class="text-main">Dynamic CSS Variables:</strong> Directly manipulate the
    //         <code>--ui-primary</code> variable using <code>document.documentElement.style.setProperty</code>.
    //         This allows brand color changes across the entire site without recompiling CSS.
    //       </li>
    //     </ul>

    //     <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    //       <div class="p-4 rounded-lg bg-muted/20 border border-muted">
    //         <h3 class="text-sm font-bold mb-2">Dark Mode Logic</h3>
    //         <pre class="text-xs bg-slate-900 text-slate-100 p-3 rounded"><code>if (isDark.value) { document.documentElement.classList.add('dark') } else { document.documentElement.classList.remove('dark') }</code></pre>
    //       </div>
    //       <div class="p-4 rounded-lg bg-muted/20 border border-muted">
    //         <h3 class="text-sm font-bold mb-2">Theme Color Override</h3>
    //         <pre class="text-xs bg-slate-900 text-slate-100 p-3 rounded"><code>const colorHex = colorMap[colorName]; document.documentElement.style.setProperty('--ui-primary', colorHex || '#00c951');</code></pre>
    //       </div>
    //     </div>
    //     <p class="text-muted text-sm mt-6">
    //       By variabilizing theme colors and pairing them with Tailwind's flexible configuration, developers can grant users full UI customization at runtime.
    //     </p>
    //   </div>
    // `,
    //   },
    //   '3': {
    //     title: 'How to Maintain a Good Mindset in the Scorching Summer',
    //     desc: "Although it's hot, if you keep a calm mind, you can feel the coolness like being at the beach (referring to water temperature).",
    //   },
    //   '4': {
    //     title: "Advanced Guide to 'Eye Power' Training",
    //     desc: "When you see something you shouldn't, your gaze must be sharp; you can even let out some incoherent roaring.",
    //   },
    //   '5': {
    //     title: 'Descending Stairs as Art: Footwork Analysis',
    //     desc: "Is this the so-called 'Royal Road'? Every step is taken with extreme steadiness and rhythmic flow.",
    //   },
    //   '6': {
    //     title: 'Philosophical Thoughts After Three Cups of Tea',
    //     desc: 'At this point, instead of hesitating, just shout it out loud: I want to do it too!',
    //   },
  },
  colors: {
    green: 'Green',
    teal: 'Teal',
    cyan: 'Cyan',
    sky: 'Sky',
    blue: 'Blue',
    indigo: 'Indigo',
    violet: 'Violet',
    purple: 'Purple',
    fuchsia: 'Fuchsia',
    pink: 'Pink',
    rose: 'Rose',
    red: 'Red',
    orange: 'Orange',
    amber: 'Amber',
    yellow: 'Yellow',
    lime: 'Lime',
    gray: 'Gray',
  },
  timeAgo: {
    just_now: 'just now',
    invalid: 'invalid date',
    past: '{0} ago',
    future: 'in {0}',
    second: '{0} second | {0} seconds',
    minute: '{0} minute | {0} minutes',
    hour: '{0} hour | {0} hours',
    day: '{0} day | {0} days',
    week: '{0} week | {0} weeks',
    month: '{0} month | {0} months',
    year: '{0} year | {0} years',
    yesterday: 'yesterday',
    tomorrow: 'tomorrow',
    last_week: 'last week',
    next_week: 'next week',
    last_month: 'last month',
    next_month: 'next month',
    last_year: 'last year',
    next_year: 'next year',
  },
  footer: {
    desc: '© 2026 MOMOCHA.Log. Built with Vue 3 & Tailwind v4.',
  },
  notFoundView: {
    notFound: 'Page Not Found',
    goHome: 'Back to Home',
    message: 'Sorry, the page you are looking for does not exist.',
  },
  processView: {
    start: {
      title: 'Project Kickoff',
      description: 'Initial commit to GitHub.',
    },
    mainPage: {
      title: 'Core Framework Established',
      description:
        'Home page completed with mobile responsive design. Achieved modular decoupling within the framework.',
    },
    language: {
      title: 'Framework Refinement',
      description: 'Implemented real-time theme color switching and multi-language support.',
    },
    deployment: {
      title: 'Future Roadmap',
      description: 'Continuously developing new features...',
    },
    router: {
      title: 'Navigation Guard Integration',
      description:
        'Integrated language prefix into the URL; implemented route filtering and 404 redirection.',
    },
    webtools: {
      title: 'Web Tools Page Added',
      description: 'Implemented secondary menu logic and launched the Web Tools collection page.',
    },
    articles: {
      title: 'Articles & Thoughts Page Added',
      description:
        'Launched the Articles & Thoughts section with expandable content viewing functionality.',
    },
  },
  webtoolsView: {
    bookmarks: {
      title: 'Tool Recommendations',
      subtitle:
        'A curated collection of my favorite development tools, design inspiration, and productivity hacks.',
      search_placeholder: 'Search tools...',
      no_results: 'No tools found matching "{query}"',
      categories: {
        dev: 'Frameworks',
        design: 'Design Inspiration',
        productivity: 'Productivity',
        treasure: 'Treasure Sites',
      },
      items: {
        vue_desc:
          'An approachable, performant, and versatile framework for building web user interfaces.',
        nuxt_desc: 'A modern UI component library built for Nuxt and Tailwind CSS.',
        tailwind_desc:
          'A utility-first CSS framework for rapidly building modern websites without leaving your HTML.',
        vite_desc: 'Next-generation frontend tooling with lightning-fast cold starts.',
        dribbble_desc:
          'The world’s leading community for creatives to share design work and find UI/UX inspiration.',
        coolors_desc:
          'The superfast color palettes generator! Create the perfect matching colors for your next project.',
        lucide_desc:
          'Beautiful & consistent icons made by the community, perfectly suited for various design styles.',
        chatgpt_desc: 'An AI chatbot developed by OpenAI, capable of conversational interaction.',
        gemini_desc:
          'Google’s multimodal AI model, designed for a wide range of tasks and creative work.',
        inspira_desc:
          'A stunning UI library with selective import support, perfectly compatible with Vue and Nuxt UI.',
        icones_desc:
          'A comprehensive icon explorer compatible with Nuxt UI, offering free access to various icon sets.',
        pinia_desc:
          'The intuitive store for Vue.js. Type-safe, extensible, and modular by design. You’ll forget you’re even using a store.',
        wix_desc:
          'Build websites online with one-click cloud deployment and powerful pre-set components.',
        lorem_picsum_desc:
          'A free service providing placeholder images of various sizes and styles.',
        congyu_desc: 'A nifty tool to bypass restrictions and easily access various web resources.',
        figma_desc:
          'A cloud-based design tool supporting real-time collaboration and a robust plugin ecosystem.',
        wplace_desc: 'A global drawing platform to experience the beauty of the world.',
      },
    },
  },
  articles: {
    title: 'Articles & Thoughts',
    subtitle: 'Sharing fragments of thoughts on tech, design, and life.',
    search_placeholder: 'Search articles...',
    filter_all: 'All',
    read_more: 'Read Article',
    no_results_title: 'No articles found',
    no_results_desc: 'Try adjusting your search for "{query}" or clear filters.',
    clear_filter: 'Clear all filters',
    body_empty: 'No content available.',
  },
}
