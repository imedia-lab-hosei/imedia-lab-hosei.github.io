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
    articles: 'Articles',
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
  },
  post_list: {
    '1': {
      title: 'ナビゲーションガードによる i18n 自動切り替えソリューション',
      desc: 'ルートインターセプト技術を活用し、低遅延でSEOに強い多言語切り替えエクスペリエンスを実現する方法を探ります。',
      content: `
    <div class="prose prose-slate dark:prose-invert max-w-none">
      <p class="text-balance leading-relaxed text-secondary">
        グローバルなWebアプリケーションにおいて、<strong class="text-primary">ナビゲーションガード (Route Guard)</strong> は言語切り替えを処理するための最適なゲートウェイです。コンポーネントがレンダリングされる前に、システムが正しい言語リソースを準備することを保証します。
      </p>
      <h2 class="text-primary">1. 動作原理</h2>
      <p>
        ナビゲーションガードはすべてのナビゲーションをインターセプトし、URL内の言語識別子（例：<code>/en/</code> や <code>/ja/</code>）を解析します。期待されるロケールに一致しない場合、即座にリダイレクトやリソースのロードを行います。
      </p>

      <h2 class="text-primary">2. 実装ステップ</h2>
      <ul class="marker:text-primary">
        <li>
          <strong class="text-main">動的ルートマッチング：</strong> <code>/:lang/dashboard</code> 形式のルートを定義し、Paramsを利用して言語パラメータをキャプチャします。
        </li>
        <li>
          <strong class="text-main">ガードによるインターセプト：</strong> <code>router.beforeEach</code> 内で <code>to.params.lang</code> を検出し、Vue I18nインスタンスと同期させます。
        </li>
        <li>
          <strong class="text-main">言語パックの非同期ロード：</strong> すべての言語を一度に読み込むのではなく、切り替え時に <code>import()</code> を使用して動的にロードします。
        </li>
      </ul>

      <blockquote class="border-s-primary bg-muted/30 p-4 rounded-e-lg italic quote">
        「この手法はユーザーエクスペリエンスを向上させるだけでなく、検索エンジンが異なる言語バージョンのコンテンツをクロールしやすくなるため、SEO順位の向上にも大きく貢献します。」
      </blockquote>

      <p class="text-muted text-sm mt-6">
        従来の <code>localStorage</code> による保存策と比較して、ルートベースの構成は<strong>リンクの直接共有</strong>が可能であり、現在のベストプラクティスとされています。
      </p>
    </div>
  `,
    },
    '2': {
      title: 'On the Importance of Being Loud in Interviews',
      desc: 'As a student, a loud voice not only demonstrates your spirit but also lets the interviewer feel your sincerity.',
    },
    '3': {
      title: 'How to Maintain a Good Mindset in the Scorching Summer',
      desc: "Although it's hot, if you keep a calm mind, you can feel the coolness like being at the beach (referring to water temperature).",
    },
    '4': {
      title: "Advanced Guide to 'Eye Power' Training",
      desc: "When you see something you shouldn't, your gaze must be sharp; you can even let out some incoherent roaring.",
    },
    '5': {
      title: 'Descending Stairs as Art: Footwork Analysis',
      desc: "Is this the so-called 'Royal Road'? Every step is taken with extreme steadiness and rhythmic flow.",
    },
    '6': {
      title: 'Philosophical Thoughts After Three Cups of Tea',
      desc: 'At this point, instead of hesitating, just shout it out loud: I want to do it too!',
    },
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
