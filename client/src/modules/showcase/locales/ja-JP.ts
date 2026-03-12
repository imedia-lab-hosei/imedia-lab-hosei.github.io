export default {
  base: {
    cancel: 'キャンセル',
    confirm: '確認',
    read: '読む',
  },
  header: {
    changeTheme: 'テーマ切り替え',
    changeLanguage: '言語切り替え',
    changeColor: 'カラー変更',
    home: 'ホーム',
    games: 'ゲーム',
    articles: '記事と随筆',
    process: '開発進捗',
    tech: '技術',
    entretament: 'エンタメ',
    webtools: 'ツール',
  },
  maintenanceView: {
    mainInfor: 'メンテナンス中',
    desc: 'ただいまページメンテナンス中です。また後で来てくださいね O.O',
    back: 'ホームページへ',
  },
  heroSection: {
    athour: 'モモチャ',
    welcome: 'ようこそ',
    room: 'の茶室へ',
    desc: 'Vue 3 / NuxtUI / Tailwind ベースの個人ブログ。レスポンシブ対応、モバイル端末をサポート。',
    guest: 'こんにちは、ゲストさん',
    readArticle: '記事を読む',
    github: 'Github',
  },
  HomeView: {
    newArticle: '最新の文書',
  },
  tags: {
    shimokita: '下北沢',
    food: '美食',
    interview: '面接テクニック',
    roar: '咆哮系',
    mussel: '牡蠣',
    summer: '真夏',
    swimming: '水泳',
    expression: '表情管理',
    eye_power: '目力',
    sports: 'スポーツ',
    footwork: 'フットワーク',
    philosophy: '哲学',
    hot_blood: '熱血',
    tech: '技術',
    vue: 'Vue.js',
    original: 'オリジナル',
    tailwind: 'Tailwind CSS',
    pinia: 'Pinia',
    github_actions: 'GitHub Actions',
    aliyun: 'アリババクラウド',
    nginx: 'Nginx',
    linux: 'Linux',
  },
  post_list: {
    '1': {
      title: 'ナビゲーションガードによる i18n 自動切り替えソリューション',
      desc: 'ルートインターセプト技術を活用し、低遅延でSEOに強い多言語切り替えエクスペリエンスを実現する方法を探ります。',
      content: {
        title: 'ナビゲーションガードによる i18n 自動切り替え',
        desc: 'ルートインターセプト技術を活用した SEO に強い多言語化...',
        intro:
          'グローバルなWebアプリケーションにおいて、ナビゲーションガードは言語切り替えを処理するための最適なゲートウェイです。コンポーネントがレンダリングされる前に、システムが正しい言語リソースを準備することを保証します。',
        h2_1: '1. 動作原理',
        p_1: 'ナビゲーションガードはすべてのナビゲーションをインターセプトし、URL内の言語識別子を解析します。期待されるロケールに一致しない場合、即座にリダイレクトやリソースのロードを行います。',
        h2_2: '2. 実装ステップ',
        li_1_label: '動的ルートマッチング',
        li_1_desc:
          '/:lang/dashboard 形式のルートを定義し、Paramsを利用して言語パラメータをキャプチャします。',
        li_2_label: 'ガードによるインターセプト',
        li_2_desc:
          'router.beforeEach 内で to.params.lang を検出し、Vue I18nインスタンスと同期させます。',
        li_3_label: '言語パックの非同期ロード',
        li_3_desc:
          'すべての言語を一度に読み込むのではなく、切り替え時に import() を使用して動的にロードします。',
        quote:
          'この手法はユーザーエクスペリエンスを向上させるだけでなく、検索エンジンが異なる言語バージョンのコンテンツをクロールしやすくなるため、SEO順位の向上にも大きく貢献します。',
        footer_note:
          '従来の localStorage による保存策と比較して、ルートベースの構成はリンクの直接共有が可能であり、現在のベストプラクティスとされています。',
      },
    },
    '2': {
      title: 'Tailwind CSSによるダークモードとテーマカラーの動的切り替え',
      desc: 'Tailwind CSSのユーティリティ特性を活かし、ダークモードとカスタムテーマカラーに対応したUIレンダリングを実現します。',
      content: {
        intro:
          'モダンなWeb開発において、テーマシステム (Theme System) は単なるライト/ダークの切り替えに留まりません。動的なブランドカラーとダークモードを組み合わせた、高度なカスタマイズが求められています。Piniaの永続化機能と組み合わせることで、応答性が高く、柔軟なUI体系を構築できます。',
        h2_1: '1. コア技術構成',
        p_1: '本ソリューションでは「2つのアプローチ」を採用しています。DOMルートノードの classList 操作によるダークモードの切り替えと、CSS変数を利用したグローバルテーマカラーの動的な書き換えです。',
        h2_2: '2. 実装の詳細',
        li_1_label: 'リアクティブな状態管理',
        li_1_desc:
          'Piniaで isDark と primaryColor を定義します。変更を監視し localStorage と同期させることで、セッションを跨いだ永続化を実現します。',
        li_2_label: 'ダークモードの注入',
        li_2_desc:
          'applyThemeToDom 関数を実行します。isDark.value が真の場合、document.documentElement に dark クラスを付与し、Tailwindの dark: バリアントを有効にします。',
        li_3_label: '動的なCSS変数',
        li_3_desc:
          'document.documentElement.style.setProperty を使用して、コア変数 --ui-primary を直接操作します。これにより、CSSを再コンパイルすることなくサイト全体の配色を変更できます。',
        footer_note:
          'テーマカラーを変数化し、Tailwindの柔軟な設定と組み合わせることで、開発者はランタイムでユーザーに完全なインターフェースのカスタマイズ権限を提供できます。',
      },
      //     content: `
      //   <div class="prose prose-slate dark:prose-invert max-w-none">
      //     <p class="text-balance leading-relaxed ">
      //       モダンなWeb開発において、<strong class="text-primary">テーマシステム</strong>は単なるライト/ダークの切り替えに留まりません。
      //       <strong>動的なブランドカラー</strong>と<strong>ダークモード</strong>を組み合わせた、高度なカスタマイズが求められています。
      //       Piniaの永続化機能と組み合わせることで、応答性が高く、柔軟なUI体系を構築できます。
      //     </p>

      //     <h2 class="text-primary border-b border-muted pb-2">1. コア技術構成</h2>
      //     <p>
      //       本ソリューションでは「2つのアプローチ」を採用しています。DOMルートノードの
      //       <code>classList</code> 操作によるダークモードの切り替えと、<code>CSS変数</code> を利用したグローバルテーマカラーの動的な書き換えです。
      //     </p>

      //     <h2 class="text-primary border-b border-muted pb-2">2. 実装の詳細</h2>
      //     <ul class="marker:text-primary space-y-4">
      //       <li>
      //         <strong class="text-main">リアクティブな状態管理：</strong> Piniaで <code>isDark</code> と
      //         <code>primaryColor</code> を定義します。変更を監視し <code>localStorage</code> と同期させることで、セッションを跨いだ永続化を実現します。
      //       </li>
      //       <li>
      //         <strong class="text-main">ダークモードの注入：</strong> <code>applyThemeToDom</code> 関数を実行します。
      //         <code>isDark.value</code> が真の場合、<code>document.documentElement</code> に <code>dark</code> クラスを付与し、Tailwindの <code>dark:</code> バリアントを有効にします。
      //       </li>
      //       <li>
      //         <strong class="text-main">動的なCSS変数：</strong> <code>document.documentElement.style.setProperty</code>
      //         を使用して、コア変数 <code>--ui-primary</code> を直接操作します。これにより、CSSを再コンパイルすることなくサイト全体の配色を変更できます。
      //       </li>
      //     </ul>

      //     <p class="text-muted text-sm mt-6">
      //       テーマカラーを変数化し、Tailwindの柔軟な設定と組み合わせることで、開発者はランタイムでユーザーに完全なインターフェースのカスタマイズ権限を提供できます。
      //     </p>
      //   </div>
      // `,
    },

    '3': {
      title: '開発の自動化：GitHub Actions による Vue プロジェクトのデプロイ実践',
      desc: 'ローカルでのプッシュから GitHub でのビルド、そして Alibaba Cloud への自動同期まで、CI/CD パイプラインの構築方法を解説。',
      content: {
        intro:
          '手動でのデプロイはミスが起きやすい作業です。本記事では、git push するだけで数秒以内に自動更新される GitHub Actions ワークフローの設定方法を紹介します。',
        h2_1: '1. CI/CD パイプラインの設計',
        p_1: '「ビルド」と「デプロイ」を分離するのが核心です。GitHub 上のランナーでビルドを実行し、生成された静的資産（dist）を SSH 経由でサーバーの Nginx ディレクトリに同期させます。',

        h2_4: '2. deploy.yml の作成と解説', // 追加
        p_3: '.github/workflows フォルダに deploy.yml を作成します。このファイルは、main ブランチへのプッシュ、Node 環境の構築、npm run build の実行といった「ライフサイクル」を定義します。source: "dist/*" と target パスを正確に設定し、成果物が Nginx ルートに正しく配置されるようにします。',

        h2_2: '3. 実装の重要ポイント',
        li_1_label: 'Node 24 環境の固定',
        li_1_desc:
          'node-version: 24.13.0 を明示的に指定することで、クラウド上の環境をローカル開発環境と完全に一致させます。',
        li_2_label: 'シークレット情報の管理',
        li_2_desc:
          'SSH_HOST や SSH_PRIVATE_KEY を GitHub Secrets に保存し、ソースコードに認証情報を公開することなく安全にアクセスします。',
        li_3_label: 'SCP による自動同期',
        li_3_desc:
          'appleboy/scp-action プラグインを活用し、strip_components でディレクトリ構造を整理しながらファイルを上書き更新します。',

        h2_3: '4. よくあるトラブルシューティング',
        p_2: '「ParsePrivateKey」エラーは、鍵の形式が不完全な場合に発生します。BEGIN と END の行が含まれているか、余計な空白がないか確認してください。また、サーバー側のディレクトリに admin ユーザーの書き込み権限があることも確認が必要です。',

        footer_note:
          'この CI/CD 体系により、開発者はロジックの実装に集中できます。緑色のチェックマークが灯る瞬間、モダンな開発の真の効率性を実感できるはずです。',
      },
    },
    '4': {
      title: '土台作り：サーバーサイド Nginx のインストールと SPA 環境設定',
      desc: '自動化パイプラインを構築する前に、モダンなシングルページアプリケーションを支える堅牢な Nginx 環境をサーバー上に構築します。',
      content: {
        intro:
          'Nginx は単なる Web サーバーではなく、フロントエンドアプリとユーザーを繋ぐ架け橋です。自動デプロイを開始する前に、処理ロジックと権限システムを正しく設定しておくことは極めて重要です。',
        h2_1: '1. インストールと基本管理',
        p_1: 'Linux サーバーでは、パッケージマネージャー経由で Nginx をインストールし、自動起動を設定します。systemctl による起動、停止、リロードの操作をマスターすることは、その後の全ての運用作業の基礎となります。',
        h2_2: '2. コア設定のロジック',
        li_1_label: 'SPA ルーティングの互換性',
        li_1_desc:
          'Vue などの History モードを利用するフレームワークでは、try_files ディレクティブを設定することで、パスが見つからない場合でも正しく index.html にリダイレクトし、404 エラーを防ぎます。',
        li_2_label: '静的資産の最適化',
        li_2_desc:
          '静的ファイルディレクトリ専用のアクセスルールを定義し、キャッシュ戦略を設定します。これにより、ファイル欠損時に誤って HTML が返されることによる MIME タイプエラーを回避します。',
        h2_3: '3. 権限とディレクトリのセキュリティ',
        p_2: 'Web ルートディレクトリに適切な読み書き権限があることを確認します。通常、非 root ユーザー（admin など）に所有権を付与し、755 パーミッションを設定することで、Nginx の読み取り性能と自動化スクリプトの操作性を両立させます。',
        footer_note:
          'Nginx の設定は鉄道のレールを敷くようなものです。一度整えば、その上を自動化パイプラインが加速していきます。',
      },
    },
    //   '5': {
    //     title: '階段降りも芸術になる：歩法解析',
    //     desc: 'これがいわゆる「王道を往く」というやつですか？一歩一歩が異常に安定しており、リズミカルです。',
    //   },
    //   '6': {
    //     title: '紅茶三杯の後の哲学的思考',
    //     desc: '事ここに至っては、悩むより大声で叫ぶべきです。「私もやりたいです」と！',
    //   },
  },
  colors: {
    green: '緑',
    teal: 'ティール',
    cyan: 'シアン',
    sky: 'スカイブルー',
    blue: '青',
    indigo: 'インディゴ',
    violet: 'バイオレット',
    purple: '紫',
    fuchsia: 'フクシア',
    pink: 'ピンク',
    rose: 'ローズ',
    red: '赤',
    orange: 'オレンジ',
    amber: 'アンバー',
    yellow: '黄色',
    lime: 'ライム',
    gray: 'グレー',
  },
  timeAgo: {
    just_now: 'たった今',
    invalid: '無効な日付',
    past: '{0}前',
    future: '{0}後',
    second: '{0}秒',
    minute: '{0}分',
    hour: '{0}時間',
    day: '{0}日',
    week: '{0}週間',
    month: '{0}ヶ月',
    year: '{0}年',
    yesterday: '昨日',
    tomorrow: '明日',
    last_week: '先週',
    next_week: '来週',
    last_month: '先月',
    next_month: '来月',
    last_year: '去年',
    next_year: '来年',
  },
  footer: {
    desc: '© 2026 MOMOCHA.Log。 Vue 3 & Tailwind v4 で構築。',
  },
  notFoundView: {
    notFound: 'ページが見つかりません',
    goHome: 'ホームに戻る',
    message: '申し訳ありませんが、お探しのページは存在しません。',
  },
  processView: {
    start: {
      title: 'プロジェクト始動',
      description: 'GitHubへの初コミット。',
    },
    mainPage: {
      title: 'サイトの基本フレームワーク完成',
      description:
        'ホームページの機能実装とレスポンシブデザインを完了。機能ごとのデカップリング（疎結合化）を実現。',
    },
    language: {
      title: 'フレームワークのブラッシュアップ',
      description: 'テーマカラーのリアルタイム変更機能と多言語切り替え機能を実装。',
    },
    deployment: {
      title: '今後の開発予定',
      description: '現在、新機能を開発中...',
    },
    router: {
      title: 'ナビゲーションガードの導入',
      description:
        'URLパスへの言語コード自動付与、および不正アクセスのフィルタリングと404リダイレクトを実装。',
    },
    webtools: {
      title: 'ツール紹介ページの追加',
      description: 'サブメニューのロジックを実装し、実用的なツールをまとめた専用ページを追加。',
    },
    articles: {
      title: '記事と随筆ページの追加',
      description: '記事と随筆の閲覧機能を実装。クリックで詳細が展開され、内容を確認可能に。',
      title_2: '記事の二次ページ表示ロジックの最適化',
      description_2:
        '記事ページのコンテンツ表示ロジックを最適化し、多様な内容構造の記事レンダリングとHTMLカスタマイズをサポート。',
    },
    nginx: {
      title: 'サイトのバックエンドを変更',
      description:
        'サイトのバックエンドをGitHub PagesからNginxサーバーに移行し、デプロイメントプロセスとパフォーマンスを最適化。',
    },
    compile: {
      title: 'リリースとビルドプロセスの最適化',
      description:
        'ローカルでのビルドとデプロイメントプロセスをGitHub Actionsによる自動化に最適化し、リリースの効率と安定性を向上。サーバーへの二次的な手動同期も不要になり、真の意味でのワンクリックデプロイメントを実現。',
    },
  },
  webtoolsView: {
    bookmarks: {
      title: 'おすすめツール',
      subtitle:
        '普段愛用している開発ツール、デザインのインスピレーション、効率化ツールをまとめました。',
      search_placeholder: 'ツールを検索...',
      no_results: '"{query}" に一致するツールは見つかりませんでした',
      categories: {
        dev: '開発フレームワーク',
        design: 'デザイン・着想',
        productivity: '生産性・効率化',
        treasure: '宝藏サイト',
      },
      items: {
        vue_desc:
          '学習しやすく、パフォーマンスに優れた、汎用性の高いWebフロントエンドフレームワーク。',
        nuxt_desc: 'NuxtとTailwind CSSをベースにしたモダンなUIコンポーネントライブラリ。',
        tailwind_desc:
          'HTMLから離れることなく、モダンなサイトを迅速に構築できるユーティリティファーストのCSSフレームワーク。',
        vite_desc: '極速なコールドスタートを実現する、次世代フロントエンド開発・ビルドツール。',
        dribbble_desc: '世界中のトップデザイナーが集まるコミュニティ。UI/UXデザインの参考に。',
        coolors_desc: '完璧なカラーパレットを瞬時に作成できる、超便利な配色ジェネレーター。',
        lucide_desc:
          '美しく一貫性のあるオープンソース・アイコンライブラリ。あらゆるスタイルにマッチ。',
        chatgpt_desc: 'OpenAIによって開発された、対話型AIチャットボットプログラム。',
        gemini_desc: 'Googleが開発したマルチモーダルAI。多様なタスクやクリエイティブ作業に対応。',
        inspira_desc:
          '選択的インポートに対応した超クールなUIライブラリ。VueやNuxt UIとの相性も抜群。',
        icones_desc: 'Nuxt UIに対応したアイコンライブラリ。多種多様なアイコンを無料で利用可能。',
        pinia_desc:
          'Vue.jsのための直感的なストア。型安全、拡張可能、そしてモジュール化された設計。',
        wix_desc:
          'オンラインでウェブサイトを作成し、ワンクリックでクラウドへデプロイ。強力なプリセットコンポーネントを搭載。',
        lorem_picsum_desc:
          '様々なサイズとスタイルのランダム画像を提供する、無料の画像プレースホルダーサービス。',
        congyu_desc: '城墙を越える妙妙ツール。様々なウェブリソースの取得を簡単にサポート。',
        figma_desc:
          'クラウドベースのデザインツール。リアルタイムの共同作業と強力なプラグインエコシステムをサポート。',
        wplace_desc: 'グローバルな描画プラットフォーム。世界の美しさを感じてください。',
      },
    },
  },
  articles: {
    title: '記事と随筆',
    subtitle: 'Tech、デザイン、生活に関する思考の断片を共有します。',
    search_placeholder: '記事を検索...',
    filter_all: 'すべて',
    read_more: '記事を読む',
    no_results_title: '記事が見つかりません',
    no_results_desc:
      '"{query}" に一致する記事が見つかりませんでした。検索条件を調整するか、フィルターをクリアしてください。',
    clear_filter: 'フィルターをクリア',
    body_empty: '本文がありません。',
  },
}
