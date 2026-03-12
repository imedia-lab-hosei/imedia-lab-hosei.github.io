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
    articles: '文章与随笔',
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
    pinia: 'Pinia',
    github_actions: 'GitHub Actions',
    aliyun: '阿里云',
    nginx: 'Nginx',
    linux: 'Linux',
  },
  post_list: {
    '1': {
      title: '基于路由守卫的 i18n 自动化切换方案',
      desc: '探索如何通过全栈路由拦截技术，实现多语言环境下零延迟、SEO 友好的语言切换体验。',
      content: {
        title: '基于路由守卫的 i18n 自动化切换方案',
        desc: '探索如何通过全栈路由拦截技术，实现多语言环境下零延迟、SEO 友好的语言切换体验。',
        intro:
          '在国际化 Web 应用中，导航守卫 (Route Guard) 是处理语言切换的最佳关口。它能确保用户在渲染组件前，系统已经准备好了正确的语言包。',
        h2_1: '1. 核心工作原理',
        p_1: '路由守卫通过拦截每一个导航动作，解析 URL 中的语言标识符（如 /en/ 或 /zh/）。如果不符合预期的语言环境，它可以立即重定向或加载缺少的资源。',
        h2_2: '2. 实现步骤',
        li_1_label: '动态路径匹配',
        li_1_desc: '定义 /:lang/dashboard 格式的路由，利用 Params 捕获语言参数。',
        li_2_label: '前置守卫拦截',
        li_2_desc: '在 router.beforeEach 中检测 to.params.lang，并与 Vue I18n 实例同步。',
        li_3_label: '异步加载语言包',
        li_3_desc: '避免一次性加载所有语言，仅在切换时通过 import() 动态加载。',
        quote:
          '这种方式不仅提升了用户体验，还极大地利于搜索引擎抓取不同语言版本的页面内容，提升 SEO 排名。',
        footer_note:
          '相比于传统的 localStorage 存储方案，基于路由的方案支持链接直接分享，是目前的最佳实践。',
      },
    },
    '2': {
      title: '通过 Tailwind CSS 实现亮暗模式与主题色切换',
      desc: '通过 Tailwind CSS 的原子化特性，实现支持亮暗模式和自定义主题色的内容渲染。',
      content: {
        intro:
          '在现代 Web 开发中，主题系统 (Theme System) 不再仅仅是简单的亮暗切换，而是包含动态品牌色与深色模式的深度定制。结合 Pinia 的持久化能力，我们可以构建一套响应迅速、配置灵活的 UI 体系。',
        h2_1: '1. 核心技术方案',
        p_1: '本方案采用“双管齐下”的策略：通过修改 DOM 根节点的 classList 实现亮暗视觉切换，同时利用 CSS 变量 动态改写全局主题色。',
        h2_2: '2. 实现细节',
        li_1_label: '响应式状态管理',
        li_1_desc:
          '在 Pinia 中定义 isDark 与 primaryColor。通过监听变化，确保状态同步至 localStorage，实现跨会话持久化。',
        li_2_label: '亮暗模式 DOM 注入',
        li_2_desc:
          '执行 applyThemeToDom 函数。当 isDark.value 为真时，为 document.documentElement 添加 dark 类名，触发 Tailwind 的 dark: 变体。',
        li_3_label: '动态 CSS 变量',
        li_3_desc:
          '通过 document.documentElement.style.setProperty 直接操作核心变量 --ui-primary。这使得我们无需重新编译 CSS 即可改变整站的品牌色调。',
        footer_note:
          '通过将主题色变量化，配合 Tailwind 的灵活配置，开发者可以在运行时赋予用户完全的界面定制权。',
      },
    },
    '3': {
      title: '自动化运维：GitHub Actions 部署 Vue 项目全流程',
      desc: '从本地代码推送，到 GitHub 云端构建，最后自动同步至阿里云服务器的 CI/CD 实践指南。',
      content: {
        intro:
          '手动部署网站就像“搬砖”，不仅枯燥而且容易出错。本文将带你配置一套生产级别的 GitHub Actions 工作流，实现每次 git push 后自动更新。',
        h2_1: '1. 工作流设计思路',
        p_1: '核心方案是将“编译”和“部署”分离：GitHub 提供的云端 Runner 负责编译任务，而我们通过加密的 SSH 通道将生成的静态资源（dist）精准推送到阿里云的 Nginx 目录。',

        h2_4: '2. 编写 deploy.yml 核心文件', // 新增
        p_3: '在项目根目录的 .github/workflows 文件夹下创建 deploy.yml。它定义了流水线的“生命周期”：从 master 分支的 push 触发，到 Node 环境安装，再到执行 npm run build。关键在于配置 source: "dist/*" 与 target 路径，确保打包产物能准确落入 Nginx 的根目录。',

        h2_2: '3. 关键配置细节',
        li_1_label: 'Node 24 环境锁定',
        li_1_desc:
          '在配置文件中通过 node-version 显式指定版本为 24.13.0，确保打包逻辑与本地开发环境完全一致。',
        li_2_label: '加密变量 (Secrets) 管理',
        li_2_desc:
          '在 GitHub 仓库设置中存储 SSH_HOST 和 SSH_PRIVATE_KEY，通过非对称加密保护服务器访问凭证。',
        li_3_label: 'SCP 自动化同步',
        li_3_desc:
          '利用 appleboy/scp-action 插件，配合 strip_components 参数，实现产物目录的自动清洗与覆盖安装。',

        h2_3: '4. 常见坑点排查',
        p_2: '初次配置时最容易遇到 ParsePrivateKey 错误，这通常是因为私钥格式不完整。务必确保 Secret 中包含了 BEGIN 和 END 的页眉页脚，且没有多余的空格干扰。同时，Nginx 目录的权限需确保 admin 用户有写入权限。',

        footer_note:
          '通过这套体系，开发者可以专注于代码逻辑。当你看到 GitHub Actions 那颗跳动的绿勾时，你会发现这才是现代 Web 开发应有的优雅。',
      },
    },
    '4': {
      title: '奠基之路：服务器端 Nginx 安装与 SPA 环境配置',
      desc: '在部署自动化流水线之前，我们需要先在服务器上搭建稳健的 Nginx 环境，以支持现代单页面应用。',
      content: {
        intro:
          'Nginx 不仅仅是一个简单的 Web 服务器，它更是前端应用与用户之间的桥梁。在进行自动化部署之前，正确配置 Nginx 的处理逻辑和权限系统是至关重要的一步。',
        h2_1: '1. 环境安装与基础管理',
        p_1: '在 Linux 服务器上，我们通过系统包管理器安装 Nginx 并将其设置为开机自启。掌握 systemctl 的启动、停止与重载命令，是后续所有运维操作的基础。',
        h2_2: '2. 核心配置逻辑',
        li_1_label: 'SPA 路由兼容性',
        li_1_desc:
          '针对 Vue 等前端框架的 History 模式，通过配置 try_files 指令，确保所有未匹配的路径都能正确重定向到 index.html，避免页面刷新出现 404。',
        li_2_label: '静态资源精准拦截',
        li_2_desc:
          '独立配置静态资源目录的访问规则，设置缓存策略并防止资源找不到时错误地返回 HTML 内容，从而解决常见的 MIME 类型解析报错。',
        h2_3: '3. 权限与目录安全',
        p_2: '确保 Web 根目录具备正确的读写权限。我们通常将目录所有权赋予非 root 用户（如 admin），并配合 755 权限设置，既保证了 Nginx 的读取效能，也为后续的自动化脚本留出了操作空间。',
        footer_note: '配置好 Nginx 就像是铺好了铁轨，接下来的自动化流水线才能在这之上飞驰。',
      },
    },
    //   '5': {
    //     title: '下个楼梯也能成为艺术：步法解析',
    //     desc: '这就是所谓的“王道征途”吗？每一步都走得异常沉稳且富有节奏感。',
    //   },
    //   '6': {
    //     title: '三杯茶后的哲学思考',
    //     desc: '事已至此，与其纠结，不如大声喊出那句：我也想做啊！',
    //   },
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
    articles: {
      title: '添加文章与随笔页面',
      description: '加入文章与随笔页面，优化点击页面展开详情，能够查看文章内容。',
      title_2: '优化文章二级页面展示逻辑',
      description_2: '优化文章页面的内容展示逻辑，支持多种内容结构的文章渲染和 html 自定义。',
    },
    nginx: {
      title: '修改网站后端',
      description: '将网站后端从 github pages 迁移到 nginx 服务器，优化部署流程和性能。',
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
