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
    github_actions: 'GitHub Actions',
    aliyun: 'Alibaba Cloud',
    nginx: 'Nginx',
    linux: 'Linux',
  },
  post_list: {
    '1': {
      title: 'Route Guard-Based i18n Automation',
      desc: 'Exploring how to leverage full-stack route interception to achieve zero-latency, SEO-friendly language switching.',
      content: {
        title: 'Route Guard-Based i18n Automation',
        desc: 'Exploring how to leverage route interception to achieve zero-latency, SEO-friendly language switching.',
        intro:
          'In internationalized web applications, Route Guards serve as the optimal gateway for handling language switching. They ensure the system prepares the correct language pack before the component is rendered.',
        h2_1: '1. Core Principles',
        p_1: 'Route guards intercept every navigation action to parse the language identifier (e.g., /en/ or /zh/) from the URL. If the locale is invalid, it can immediately redirect or load the required resources.',
        h2_2: '2. Implementation Steps',
        li_1_label: 'Dynamic Route Matching',
        li_1_desc:
          'Define routes in /:lang/dashboard format and capture language parameters via Params.',
        li_2_label: 'Navigation Interception',
        li_2_desc:
          'Detect to.params.lang within router.beforeEach and sync it with the Vue I18n instance.',
        li_3_label: 'Lazy Loading Language Packs',
        li_3_desc:
          'Avoid loading all languages at once; use import() to load specific languages dynamically upon switching.',
        quote:
          'This approach not only enhances user experience but also allows search engines to crawl different language versions, significantly boosting SEO rankings.',
        footer_note:
          'Compared to traditional localStorage storage, a route-based solution supports direct link sharing, making it the current industry best practice.',
      },
    },
    '2': {
      title: 'Dynamic Dark Mode and Theme Switching with Tailwind CSS',
      desc: 'Leveraging Tailwind CSS utility classes to implement a theme system supporting dark mode and custom primary colors.',
      content: {
        intro:
          "In modern web development, a Theme System is no longer just a simple toggle between light and dark; it involves deep customization including dynamic branding colors and dark mode variants. By combining Pinia's persistence capabilities, we can build a responsive and flexible UI architecture.",
        h2_1: '1. Core Strategy',
        p_1: 'This solution employs a two-pronged approach: manipulating the classList of the root DOM node for dark mode visual toggling, while utilizing CSS Variables to dynamically rewrite the global theme colors.',
        h2_2: '2. Implementation Details',
        li_1_label: 'Reactive State Management',
        li_1_desc:
          'Define isDark and primaryColor in Pinia. Sync these states to localStorage via watchers to ensure persistence across sessions.',
        li_2_label: 'Dark Mode Injection',
        li_2_desc:
          "Use the applyThemeToDom function. When isDark.value is true, the dark class is added to document.documentElement, triggering Tailwind's dark: variants.",
        li_3_label: 'Dynamic CSS Variables',
        li_3_desc:
          'Directly manipulate the --ui-primary variable using document.documentElement.style.setProperty. This allows brand color changes across the entire site without recompiling CSS.',
        footer_note:
          "By variabilizing theme colors and pairing them with Tailwind's flexible configuration, developers can grant users full UI customization at runtime.",
      },
    },
    '3': {
      title: 'Automating DevOps: A Guide to Deploying Vue Projects via GitHub Actions',
      desc: 'A comprehensive guide on building a CI/CD pipeline from local push to automated cloud deployment on Alibaba Cloud.',
      content: {
        intro:
          'Manual deployment is a repetitive chore. This article demonstrates how to configure a production-ready GitHub Actions workflow for your Vue 3 + Vite projects.',
        h2_1: '1. Designing the CI/CD Strategy',
        p_1: 'The core approach is decoupling "building" from "deployment." A GitHub-hosted runner handles build tasks, while an encrypted SSH tunnel synchronizes the "dist" assets directly to Alibaba Cloud.',

        h2_4: '2. Crafting the deploy.yml File', // Added
        p_3: 'Create deploy.yml in the .github/workflows directory. It defines the lifecycle of the pipeline: triggering on a push to the main branch, setting up the Node environment, and executing "npm run build". The key is matching the "source" (dist/*) and "target" paths correctly so assets land in the Nginx root.',

        h2_2: '3. Key Configuration Steps',
        li_1_label: 'Node 24 Environment Locking',
        li_1_desc:
          'Specifying node-version: 24.13.0 ensures the cloud build matches your local setup perfectly.',
        li_2_label: 'Encrypted Secrets Management',
        li_2_desc:
          'Store SSH_HOST and SSH_PRIVATE_KEY in GitHub Secrets to keep credentials secure and out of the source code.',
        li_3_label: 'Automated SCP Synchronization',
        li_3_desc:
          'Use the scp-action plugin with strip_components to achieve automated directory cleanup and precise file overwriting.',

        h2_3: '4. Common Troubleshooting',
        p_2: 'The "ParsePrivateKey" error is common for beginners. Ensure the Secret includes the full BEGIN/END headers with no trailing spaces. Also, verify that the "admin" user has write permissions for the Nginx folder.',

        footer_note:
          'This CI/CD architecture allows developers to focus 100% on logic. That green checkmark in GitHub Actions represents the true elegance of modern web development.',
      },
    },
    '4': {
      title: 'The Foundation: Installing Nginx and Configuring SPA Environment',
      desc: 'Before diving into automation, we must establish a robust Nginx environment on the server to support modern Single Page Applications.',
      content: {
        intro:
          'Nginx is more than just a web server; it is the bridge between your frontend application and its users. Proper configuration of Nginx logic and permissions is a critical prerequisite for any automated deployment.',
        h2_1: '1. Installation and Basic Management',
        p_1: 'We install Nginx via the system package manager on Linux and enable it to start on boot. Mastering systemctl commands for starting, stopping, and reloading is fundamental for all future server maintenance.',
        h2_2: '2. Core Configuration Logic',
        li_1_label: 'SPA Routing Compatibility',
        li_1_desc:
          'For frameworks like Vue using History mode, we use the try_files directive to ensure all unmatched paths redirect to index.html, preventing 404 errors on page refresh.',
        li_2_label: 'Static Asset Handling',
        li_2_desc:
          'Defining specific rules for static asset directories allows for caching strategies and prevents the server from returning HTML for missing JS/CSS files, which avoids MIME type errors.',
        h2_3: '3. Permissions and Directory Security',
        p_2: 'It is essential to ensure the web root directory has correct read/write permissions. By assigning ownership to a non-root user (e.g., admin) and setting permissions to 755, we ensure Nginx can serve files while keeping the environment secure for automation scripts.',
        footer_note:
          'Configuring Nginx is like laying down the tracks; once finished, your automation pipelines can run smoothly at high speed.',
      },
    },
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
      title_2: 'Optimized Article Secondary Page Display Logic',
      description_2:
        'Optimized the content display logic of the article page to support multiple content structures and HTML customization.',
    },
    nginx: {
      title: 'Backend Migration to Nginx',
      description:
        'Migrated the backend from GitHub Pages to an Nginx server, optimizing deployment processes and performance.',
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
