export default {
  base: {
    cancel: '关闭',
    confirm: '确定',
    read: '阅读',
  },
  header: {
    changeTheme: '改变主题',
    changeLanguage: '改变语言',
    changeColor: '改变颜色',
    home: '主页',
    games: '游戏',
    articles: '文章',
    process: '开发进度',
    tech: '技术',
    entretament: '娱乐',
    webtools: '实用工具',
  },
  maintenanceView: {
    mainInfor: '正在维护',
    desc: '当前页面维护中，请稍后再来吧 O.O',
    back: '返回首页',
  },
  heroSection: {
    athour: '抹抹茶',
    welcome: '欢迎来到',
    room: '的茶室',
    desc: '基于 Vue 3 / NuxtUI / Tailwind 的个人博客。 响应式设计，支持移动端。',
    guest: '你好，访客',
    readArticle: '阅读文章',
    github: 'Github',
  },
  HomeView: {
    newArticle: '最新文章',
  },

  tags: {
    shimokita: '下北泽',
    food: '美食',
    interview: '面试技巧',
    roar: '咆哮系',
    mussel: '牡蛎',
    summer: '夏日',
    swimming: '游泳',
    expression: '表情管理',
    eye_power: '目力',
    sports: '运动',
    footwork: '步法',
    philosophy: '哲学',
    hot_blood: '热血',
    tech: '技术',
    vue: 'Vue.js',
    original: '原创',
    tailwind: 'Tailwind CSS',
  },
  post_list: {
    '1': {
      title: '基于路由守卫的 i18n 自动化切换方案',
      desc: '探索如何通过全栈路由拦截技术，实现多语言环境下零延迟、SEO 友好的语言切换体验。',
      content: `
   <div class="prose prose-slate dark:prose-invert max-w-none">
      <p class="text-balance leading-relaxed text-secondary">
        在国际化 Web 应用中，<strong class="text-primary">路由守卫 (Route Guard)</strong> 是处理语言切换的最佳关口。它能确保用户在渲染组件前，系统已经准备好了正确的语言包。
      </p>
      <h2 class="text-primary">1. 核心工作原理</h2>
      <p>
        路由守卫通过拦截每一个导航动作，解析 URL 中的语言标识符（如 <code>/en/</code> 或 <code>/zh/</code>）。如果不符合预期的语言环境，它可以立即重定向或加载缺少的资源。
      </p>

      <h2 class="text-primary">2. 实现步骤</h2>
      <ul class="marker:text-primary">
        <li>
          <strong class="text-main">动态路径匹配：</strong> 定义 <code>/:lang/dashboard</code> 格式的路由，利用 Params 捕获语言参数。
        </li>
        <li>
          <strong class="text-main">前置守卫拦截：</strong> 在 <code>router.beforeEach</code> 中检测 <code>to.params.lang</code>，并与 Vue I18n 实例同步。
        </li>
        <li>
          <strong class="text-main">异步加载语言包：</strong> 避免一次性加载所有语言，仅在切换时通过 <code>import()</code> 动态加载。
        </li>
      </ul>

      <blockquote class="border-s-primary bg-muted/30 p-4 rounded-e-lg italic quote">
        “这种方式不仅提升了用户体验，还极大地利于搜索引擎抓取不同语言版本的页面内容，提升 SEO 排名。”
      </blockquote>

      <p class="text-muted text-sm mt-6">
        相比于传统的 localStorage 存储方案，基于路由的方案支持<strong>链接直接分享</strong>，是目前的最佳实践。
      </p>
    </div>
  `,
    },
    '2': {
      title: '通过 Tailwind CSS 实现亮暗模式与主题色切换',
      desc: '通过 Tailwind CSS 的原子化特性，实现支持亮暗模式和自定义主题色的内容渲染。',
      content: `
    <div class="prose dark:prose-invert max-w-none">
      <p class="text-gray-700 dark:text-gray-300 mb-6">
        在 Tailwind CSS 的加持下，亮暗模式和主题色的切换变得异常简单。我们可以在 <code>v-html</code> 渲染的内容中直接应用 Tailwind 的工具类，完美响应全局主题。
      </p>

      <h3 class="text-2xl font-semibold mb-4 text-primary border-l-4 border-primary-500 pl-4">
        1. 为什么选择 Tailwind CSS?
      </h3>
      <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li><strong>原子化：</strong> 类名直接对应样式，易于理解和组合。</li>
        <li><strong>响应式设计：</strong> 内置 <code>dark:</code> 变体，轻松实现亮暗模式。</li>
        <li><strong>JIT 编译：</strong> 按需生成 CSS，减小文件体积。</li>
      </ul>

      <p class="mt-6 text-gray-700 dark:text-gray-300">
        通过在 HTML 元素上添加 <code>dark:</code> 前缀的类，Tailwind 会自动在暗黑模式下应用这些样式。
      </p>



      <h3 class="text-2xl font-semibold mb-4 text-primary border-l-4 border-primary-500 pl-4 mt-8">
        2. 如何实现主题色切换？
      </h3>
      <p class="">
        Tailwind CSS 允许你在 <code>tailwind.config.js</code> 中扩展主题。你可以定义一个 <code>primary</code> 颜色系列，然后在内容中直接使用 <code>text-primary-500</code>、<code>bg-primary-100</code> 等类。
      </p>
      <blockquote class="bg-muted border-l-4 border-primary-500 text-primary-700 dark:text-primary-200 p-4 mt-6 rounded">
        “利用 Tailwind 的 <code>dark:</code> 变体和自定义颜色扩展，我们能够创建出既美观又灵活的多主题内容界面。”
      </blockquote>
    </div>
  `,
    },
    '3': {
      title: '如何在炎炎夏日保持良好的心态',
      desc: '虽说天气很热，但只要保持平常心，就能像在海边一样感受到清凉（指水温）。',
    },
    '4': {
      title: '关于“目力”训练的进阶指南',
      desc: '当你看到不该看的东西时，眼神要犀利，甚至可以发出一些意义不明的咆哮。',
    },
    '5': {
      title: '下个楼梯也能成为艺术：步法解析',
      desc: '这就是所谓的“王道征途”吗？每一步都走得异常沉稳且富有节奏感。',
    },
    '6': {
      title: '三杯茶后的哲学思考',
      desc: '事已至此，与其纠结，不如大声喊出那句：我也想做啊！',
    },
  },
  colors: {
    green: '绿色',
    teal: '蓝绿',
    cyan: '青色',
    sky: '天蓝',
    blue: '蓝色',
    indigo: '靛蓝',
    violet: '紫罗兰',
    purple: '紫色',
    fuchsia: '洋红',
    pink: '粉色',
    rose: '玫瑰红',
    red: '红色',
    orange: '橙色',
    amber: '琥珀色',
    yellow: '黄色',
    lime: '青柠',
    gray: '灰色',
  },
  timeAgo: {
    just_now: '刚刚',
    invalid: '无效值',
    past: '{0}前',
    future: '{0}后',
    second: '{0}秒',
    minute: '{0}分钟',
    hour: '{0}小时',
    day: '{0}天',
    week: '{0}周',
    month: '{0}个月',
    year: '{0}年',
    yesterday: '昨天',
    tomorrow: '明天',
    last_week: '上周',
    next_week: '下周',
    last_month: '上个月',
    next_month: '下个月',
    last_year: '去年',
    next_year: '明年',
  },
  footer: {
    desc: '© 2026 MOMOCHA.Log。 使用 Vue 3 & Tailwind v4 构建。',
  },
  notFoundView: {
    notFound: '页面未找到',
    goHome: '返回首页',
    message: '抱歉，您访问的页面不存在。',
  },
  processView: {
    start: {
      title: '个人网站项目启动',
      description: '首次Github提交。',
    },
    mainPage: {
      title: '网站基础框架完成',
      description: '网站首页功能完成，并且加入移动端响应式设计，框架部分实现各功能解耦。',
    },
    language: {
      title: '框架完善',
      description: '加入主色调实时变更，多语言切换。',
    },
    deployment: {
      title: '未来开发',
      description: '正在开发中...',
    },
    router: {
      title: '加入路由守卫',
      description: '实现多语言拼接到地址栏后，并且对非法地址进行过滤与404重定向。',
    },
    webtools: {
      title: '添加实用工具页面',
      description: '添加二级菜单逻辑，并且加入实用工具页面',
    },
  },
  webtoolsView: {
    bookmarks: {
      title: '工具推荐',
      subtitle: '收集了一些我常用的开发工具、设计灵感和效率神器。',
      search_placeholder: '搜索工具...',
      no_results: '没有找到与 "{query}" 相关的工具',
      categories: {
        dev: '开发框架',
        design: '设计灵感',
        productivity: '效率工具',
        treasure: '宝藏网站',
      },
      items: {
        vue_desc: '易学易用，性能出色，适用场景丰富的 Web 前端框架。',
        nuxt_desc: '基于 Nuxt 和 Tailwind CSS 的现代化 UI 组件库。',
        tailwind_desc: '只需书写 HTML 即可快速构建现代网站的原子化 CSS 框架。',
        vite_desc: '下一代前端开发与构建工具，极速冷启动。',
        dribbble_desc: '全球顶尖设计师的灵感社区，寻找 UI/UX 设计参考。',
        coolors_desc: '超好用的配色生成器，快速创建完美的调色板。',
        lucide_desc: '美观且一致的开源图标库，完美适配各种设计风格。',
        chatgpt_desc: 'OpenAI 开发的人工智能聊天机器人程序。',
        gemini_desc: 'Google 开发的人工智能机器人，适合各种任务。',
        inspira_desc: '超级酷炫的 UI 库，支持选择性导入，完美适配 Vue 与 Nuxt UI。',
        icones_desc: '支持 Nuxt UI 的图标库，免费使用各种图标。',
        pinia_desc: 'Vue.js 的直观存储，类型安全、可扩展且模块化设计，忘记你甚至在使用存储。',
        wix_desc: '在线搭建网站，一键式部署到云端，预设组件功能强大。',
        lorem_picsum_desc: '一个免费的图片占位符服务，提供各种尺寸和风格的随机图片。',
        congyu_desc: '穿越城墙的妙妙工具，助你轻松获取各类网站资源。',
        figma_desc: '基于云端的设计工具，支持多人实时协作与强大插件生态。',
        wplace_desc: '全球作画平台，感受世界的美好。',
      },
    },
  },
  articles: {
    title: '文章与随笔',
    subtitle: '分享关于技术、设计以及生活的思考碎片。',
    search_placeholder: '搜索文章标题或内容...',
    filter_all: '全部',
    read_more: '阅读全文',
    no_results_title: '未找到相关文章',
    no_results_desc: '尝试更换关键词 "{query}" 或清除过滤条件。',
    clear_filter: '清除所有筛选',
    body_empty: '暂无正文内容。',
  },
}
