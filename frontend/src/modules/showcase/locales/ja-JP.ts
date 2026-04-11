export default {
  project_detail: {
    intro:
      '本研究は画像取得システム全体に着目し、圧縮センシング（CS）に基づく測定領域での画像センシングと測定領域データ圧縮を統合した手法を提案しています。従来手法と比較して、システム全体の消費電力を90%以上削減することが期待されます。',
    labels: {
      abstract: 'Abstract',
      published: 'Published',
      related_papers: 'Related Papers',
    },
    links: {
      paper: 'Paper',
      code: 'Code',
    },
    video_caption:
      '[Hosei Research Brand vol.9 (Video)] Next-generation technology for processing enormous dynamic data (Associate Professor Jinjia Zhou, Graduate School of Science and Engineering)',
    sections: {
      s1: {
        title:
          'CS-MCNet: A Video Compressive Sensing Reconstruction Network with Interpretable Motion Compensation',
        abstract:
          'In this paper, a deep neural network with interpretable motion compensation called CS-MCNet is proposed to realize high-quality and real-time decoding of video compressive sensing. Firstly, explicit multi-hypothesis motion compensation is applied in our network to extract correlation information of adjacent frames(as shown in Fig. 1), which improves the recover performance. And then, a residual module further narrows down the gap between reconstruction result and original signal. The overall architecture is interpretable by using algorithm unrolling, which brings the benefits of being able to transfer prior knowledge about the conventional algorithms. As a result, a PSNR of 22dB can be achieved at 64x compression ratio, which is about 4% to 9% better than state-of-the-art methods. In addition, due to the feed-forward architecture, the reconstruction can be processed by our network in real time and up to three orders of magnitude faster than traditional iterative methods.',
        published: 'Asian Conference on Computer Vision 2020 (ACCV), Virtual Tokyo. Nov. 2020.',
      },
      s2: {
        title:
          'Bi-directional intra prediction based measurement coding for compressive sensing images',
        abstract:
          'This work proposes a bi-directional intra prediction-based measurement coding algorithm for compressive sensing images. Compressive sensing is capable of reducing the size of the sparse signals, in which the high-dimensional signals are represented by the under-determined linear measurements. In order to explore the spatial redundancy in measurements, the corresponding pixel domain information extracted using the structure of measurement matrix. Firstly, the mono-directional prediction modes (i.e. horizontal mode and vertical mode), which refer to the nearest information of neighboring pixel blocks, areobtained by the structure of the measurement matrix. Secondly, we design bi-directional intra prediction modes (i.e. Diagonal +Horizontal, Diagonal + Vertical) base on the already obtained mono-directional prediction modes. Experimental results show that this work improves 0.01 - 0.02 dB PSNR improvement and the birate reductions of on average 19%, up to 36% compared to the state-of-the-art.',
        published:
          '2020 IEEE 22nd International Workshop on Multimedia Signal Processing (MMSP), Sep. 2020.',
      },
    },
  },
  project_detail_coding: {
    intro: 'ディープラーニングに基づく動画像符号化システムの研究開発を行っています。',
    labels: {
      abstract: 'Abstract',
      published: 'Published',
      related_papers: 'Related Papers',
    },
    links: {
      paper: 'Paper',
      code: 'Code',
      video: 'Video',
    },
    video_caption:
      '[Hosei Research Brand vol.9 (Video)] Next-generation technology for processing enormous dynamic data (Associate Professor Jinjia Zhou, Graduate School of Science and Engineering)',
    sections: {
      s1: {
        title:
          'RR-DnCNN v2.0: Enhanced Restoration-Reconstruction Deep Neural Network for Down-Sampling Based Video Coding',
        abstract:
          'we proposed an end-to-end restoration-reconstruction deep neural network (RR-DnCNN) using the degradation-aware technique, which entirely solves degradation from compression and sub-sampling. Besides, we proved that the compression degradation produced by Random Access configuration is rich enough to cover other degradation types, such as Low Delay P and All Intra, for training. Since the straightforward network RR-DnCNN with many layers as a chain has poor learning capability suffering from the gradient vanishing problem, we redesign the network architecture to let reconstruction leverages the captured features from restoration using up-sampling skip connections. Our novel architecture is called restoration-reconstruction u-shaped deep neural network (RR-DnCNN v2.0). As a result, our RR-DnCNN v2.0 outperforms the previous works and can attain 17.02% BD-rate reduction on UHD resolution for all-intra anchored by the standard H.265/HEVC. ',
        published:
          'IEEE Transactions on Image Processing (TIP).　DOI:10.1109/TIP.2020.3046872. 2021. (SJR Q1, Impact Factor: 9.34)',
      },
      s2: {
        title: 'Image Compression with Encoder-Decoder Matched Semantic Segmentation',
        abstract:
          'In recent years, the layered image compression is demonstrated to be a promising direction, which encodes a compact representation of the input image and apply an up-sampling network to reconstruct the image. To further improve the quality of the reconstructed image, some works transmit the semantic segment together with the compressed image data. Consequently, the compression ratio is also decreased because extra bits are required for transmitting the semantic segment. To solve this problem, we propose a new layered image compression framework with encoder-decoder matched semantic segmentation (EDMS). And then, followed by the semantic segmentation, a special convolution neural network is used to enhance the inaccurate semantic segment. As a result, the accurate semantic segment can be obtained in the decoder without requiring extra bits. The experimental results show that the proposed EDMS framework can get up to 35.31% BD-rate reduction over the HEVC-based (BPG) codec, 5% bitrate and 24% encoding time saving compare to the state-of-the-art semantic-based image codec.',
        published:
          '2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Seattle, WA, USA, 2020, pp. 619-623, doi: 10.1109/CVPRW50498.2020.00088.',
      },
    },
  },
  project_detail_compression: {
    intro:
      'iMedia Labでは、従来のコーデック設計から最新のニューラル圧縮まで、画像・動画圧縮に関する幅広い研究に取り組んでいます。研究テーマは、ニューラル強調、トーキングヘッド圧縮、適応型ハイブリッド符号化、そして圧縮センシングまで多岐にわたります。',
    labels: {
      abstract: 'Abstract',
      published: 'Published',
      related_papers: 'Selected Publications',
    },
    sections: {
      s1: {
        title:
          'High-Frequency Semantic Enhancement in Compressed Scenarios for Robust Visual and Machine Vision Applications',
        abstract:
          'With the growing demand for video processing in both human and machine vision, optimizing post-processing techniques has become a crucial challenge. To address the limitations of current post-processing techniques in these domains, this paper introduces a novel post-processing method that enhances high-frequency information through semantic enhancement, significantly improving performance in both domains. We propose a High Semantic Extraction (HSE) model to capture more recognizable details, and design a High-Frequency Semantic Fusion (HFSF) strategy that preserves critical details while suppressing noise. Experimental results demonstrate that our method effectively enhances performance in object detection, semantic segmentation, and video quality, achieving a significant advancement in optimizing video processing for both human and machine vision.',
        published: '2025 IEEE International Conference on Image Processing (ICIP)',
      },
      s2: {
        title:
          'A Comprehensive Study of MCS-TCL: Multi-Functional Sampling for Trustworthy Compressive Learning',
        abstract:
          'Compressive Learning (CL) is an emerging paradigm that allows machine learning models to perform inference directly from compressed measurements, significantly reducing sensing and computational costs. While existing CL approaches have achieved competitive accuracy compared to traditional image-domain methods, they typically rely on reconstruction to address information loss and often neglect uncertainty arising from ambiguous or insufficient data. In this work, we propose MCS-TCL, a novel and trustworthy CL framework based on Multi-functional Compressive Sensing Sampling. Our approach unifies sampling, compression, and feature extraction into a single operation by leveraging the compatibility between compressive sensing and convolutional feature learning. This joint design enables efficient signal acquisition while preserving discriminative information, leading to feature representations that remain robust across varying sampling ratios. To enhance the model’s reliability, we incorporate evidential deep learning (EDL) during training. EDL estimates the distribution of evidence over output classes, enabling the model to quantify predictive uncertainty and assign higher confidence to well-supported predictions. Extensive experiments on image classification tasks show that MCS-TCL outperforms existing CL methods, achieving state-of-the-art accuracy at a low sampling rate of 6%. Additionally, our framework reduces model size by 85.76% while providing meaningful uncertainty estimates, demonstrating its effectiveness in resource-constrained learning scenarios.',
        published: 'Information 2025',
      },
      s3: {
        title: 'Audio-Visual Driven Compression for Low-Bitrate Talking Head Videos',
        abstract:
          'Talking head video compression has advanced with neural rendering and keypoint-based methods, but challenges remain, especially at low bit rates, including handling large head movements, suboptimal lip synchronization, and distorted facial reconstructions. To address these problems, we propose a novel audio-visual driven video codec that integrates compact 3D motion features and audio signals. This approach robustly models significant head rotations and aligns lip movements with speech, improving both compression efficiency and reconstruction quality. Experiments on the CelebV-HQ dataset show that our method reduces bitrate by 22% compared to VVC and by 8.5% over state-of-the-art learning-based codec. Furthermore, it provides superior lip-sync accuracy and visual fidelity at comparable bitrates, highlighting its effectiveness in bandwidth-constrained scenarios.',
        published: 'International Conference on Multimedia Retrieval (ICMR) 2025',
      },
    },
  },
  project_detail_processing: {
    intro: 'ディープラーニングに基づくマルチメディア信号処理システムの研究開発を行っています。',
  },
  project_detail_eda: {
    intro:
      '本研究は、この配置問題を強化学習として定式化し、自動化する手法を提案する。チップを環境、配置を行動とみなし、自己探索によって性能を最大化する配置を学習する。その結果、人手に匹敵またはそれ以上の高効率なレイアウトを短時間で生成可能となる。',
  },
  aboutUs: {
    profile: {
      jinjia_zhou: {
        breadcrumb_members: 'メンバー',
        breadcrumb_profile: 'プロフィール',
        name: '周 金佳',
        subtitle: 'しゅう きんか',
        role: '教授',
        institution: '法政大学',
        research_tag: 'VLSI・マルチメディア信号処理',
        bio_title: '略歴',
        bio_p1:
          '2007年に上海交通大学にて学士号を取得し、2010年および2013年に早稲田大学にてそれぞれ修士号および博士号を取得した。2013年から2016年まで同大学にて次席研究員を務めた。',
        bio_p2:
          '2016年から2025年まで法政大学の准教授を務め、2026年4月より同大学教授に就任している。また、2017年から2021年まで復旦大学のState Key Laboratory of ASIC & Systemにて上級訪問研究員を務めた。さらに、2020年から2021年まで大阪大学にて特任准教授を兼任した。2025年より法政大学においてIISTプログラムのディレクターを務めている。',
        bio_p3:
          '研究分野は、マルチメディア信号処理に関するアルゴリズム設計およびVLSIアーキテクチャの開発に加え、コンピュータビジョンおよび生成AIに関する研究である。',
        career_title: '職歴',
        awards_title: '受賞歴',
        academic_title: '学術活動',
      },
    },
    members: {
      pageTitle: 'メンバー',
      pageDescription: '知能メディア処理研究室のメンバーを紹介します。',
      roles: {
        professor: '教員',
        lab_director: '研究室長',
        doctoral: '博士課程学生',
        masters: '修士課程学生',
        b4: '学部4年生',
        b3: '学部3年生',
        alumni: '卒業生',
      },
      names: {
        jinjia_zhou: '​周 金佳',
        keren_he: '何 可人',
        alaa_zein: 'Alaa Zein El Abdein Marouf',
        qi_yuanrui: '戚 原瑞',
        ding_jinhao: '丁 劲皓',
        wang_qi: '王 琪',
        chen_shiyu: '陈 世宇',
        wang_haixin: '王 海鑫(佐藤 海来)',
        kimishima_fuma: '君島 楓実',
        yuan_lingfan: '原 令凡',
        miyamoto_mizuki: '宮本 美月',
        iwama_kosuke: '岩間 浩介',
        morita_ryugo: '守田 竜梧',
        wu_zijian: '武 子健',
        handa_takuma: '半田 琢馬',
        yao_zhidi: '姚 智棣',
        sai: 'UMMITHI Sai Jayaprakash',
        yang_yu: '于 洋',
        akihiro_sakurai: '櫻井 彬浩',
        hiroto_sugiura: '杉浦 海翔',
        riku_takahashi: '高橋 陸',
        ayumu_seki: '関歩 夢',
        haruto_domori: '堂森 陽都',
        fan_wei: '魏 凡',
        rigen_mo: '莫 日根',
        mirino_otsubo: '大坪 美莉乃',
        shoki_masuda: '増田 翔希',
        jiaqi_mei: '梅 嘉麒',
        ryosuke_sato: '佐藤 亮介',
        kohta_nakamura: '中村 恒汰',
        rikuya_maeta: '前田 陸弥',
        iwasaki_yota: '岩﨑 陽太',
        asano_shunsuke: '浅野 俊介',
        nakajima_sawaki: '中島 沢棋',
        ito_tomoki: '伊藤 朋紀',
        mikano_ryota: '三甲野 涼太',
        enomoto_machika: '榎本 真智香',
        nonoo_gaku: '野々 尾岳',
        ajiki_ren: '安喰 廉',
        kashiyama_keisuke: '樫山 敬介',
        yagihashi_kaito: '八木橋 凱斗',
        jianbin_zhou: 'Jianbin Zhou',
        tran_thi_thu_thuy: 'Tran Thi Thu Thuy',
        nguyen_tan_ho: 'Nguyen Tan Ho',
        gu_qirui: '古 骐瑞',
        trinh_man_hoang: 'Trinh Man Hoang',
        minh_man_ho: 'Minh Man Ho',
        jirayu_peetakul: 'Jirayu Peetakul',
        pham_do_kim_chi: 'Pham Do Kim Chi',
        catherine_waithera: 'Catherine Waithera Wangari',
        miyoshi_hayato: '三好 颯人',
        otagiri_kengo: '小田切 健悟',
        kikuchi_syunshuke: '菊地 峻佑',
        makino_hiroya: '牧野 浩也',
        usukura_riki: '薄倉 利生',
        fujii_riku: '藤井 陸',
        hayama_hibiki: '葉山 響',
        zhiqiang_zhang: '张 志强',
        fu_chen: '傅 晨',
        jiayao_xu: '徐 嘉瑶',
        yang_jian: '杨 健',
        hayashi_shinkou: '林 震浩',
        haga_shinkou: '芳賀 浩輔 ',
        nakano_kyoka: '中野 杏香',
        xin_cheng: '程 鑫',
      },
      destinations: {
        dji: 'DJI',
        rakuten: 'Rakuten, Tokyo',
        ficha: 'Ficha Inc, Tokyo, Japan',
        thoughtworks: 'Thoughtworks Inc, Beijing, China',
        utah: 'University of Utah, Salt Lake City, UT',
        muspace: 'muSpace Japan',
        ando_hazama: 'Ando Hazama Corporation, Japan',
        kisii: 'Kisii University, Kenya',
        veriserve: 'Veriserve, Japan',
        docomo: 'NTT DOCOMO, Japan',
        nintendo: 'Nintendo, Japan',
        accenture: 'Accenture, Japan',
        mitsubishi: 'Mitsubishi Electric, Japan',
        ntt_data: 'NTT DATA SMS, Japan',
        scsk: 'SCSK Corporation, Japan',
        toyota: 'TOYOTA Motor Corporation, Japan',
        kyudenko: 'KYUDENKO Corporation, Japan',
        swust: 'Southwest University of Sci & Tech, China',
        chn_energy: 'CHN ENERGY Investment Group',
        sds_dfki: 'SDS DFKI, Germany',
        pengcheng: 'PengCheng Laboratory',
        tokyo_tech: 'Tokyo University of Technology',
        hitachi: 'Hitachi',
        capcom: 'CAPCOM CO.',
        sky: 'Sky',
      },
    },
    facilities: {
      header: {
        title: '​研究室',
        description: '私たちの研究と革新を支える空間と最先端の設備を探求してください。',
      },
      notice: {
        title: '研究室移転のお知らせ',
        description:
          '2021年4月に研究室を南館に移設します。これから徐々に研究室を整備していきます。',
      },
      sections: {
        research_facilities: '研究環境',
        gallery: '設備ギャラリー',
        relocation_gallery: '新研究室の写真',
      },
      categories: {
        library: '図書館',
        computing: 'コンピューティングリソース',
        hardware: 'ハードウェア',
      },
      texts: {
        library_p1:
          '研究で必要となる書籍を定期的に購入しており、研究室で誰でも自由に読むことができます。',
        computing_p1:
          '研究室では、GPUサーバを含む複数の高性能計算機が稼働しており、日々の研究活動を支えています。',
        hardware_p1:
          'さらに、エッジコンピューティング、コンピュータビジョン、および信号処理実験用の専門的なハードウェアを提供しています。',
      },
      gallery: {
        gpu: 'GPU サーバ',
        testing: 'ハードウェアテスト環境',
        sensor: 'センサーテスト環境',
      },
    },
    activities: {
      header: {
        title: '研究会',
        description:
          '共同研究の促進と継続的な学習を目的とした、定期的なセミナー、勉強会、およびガイドライン。',
      },
      links: {
        submission_guide: '会議リンク',
        meeting_link: '参加用リンク',
      },
      frequency: {
        weekly: '毎週',
        monthly: '毎月',
      },
      labels: {
        language: '言語',
        timing: 'タイミング',
      },
      seminar: {
        title: '総合研究会',
        description:
          '毎週研究セミナーを開催しています。メンバー全員で進捗状況や成果について話し合います。この会議の目的は、研究室のメンバー全員でさまざまな意見を交換することです。',
        lang_slides: 'スライド：主に英語',
        lang_talk: 'トーク：英語または日本語（英語が望ましい）',
        time_phd: '博士課程学生の発表時間：20分',
        time_others: '修士・学部生の発表時間：10分 ',
      },
      study_groups: {
        title: '勉強会',
        reading: {
          title: '論文輪読会',
          desc: '毎週、院生は各自が気になった論文や発表動画等を紹介し、最新の研究についての知見を深めます。学部生は任意参加としています。',
          note: '学部生の方は自由参加です',
        },
        theory: {
          title: '理論基礎勉強会',
          target: '学部３年生 ゼミナール',
          desc: '情報処理や機械学習の基礎を学ぶため、Information Theory, Inference, and Learning Algorithmsを読みます。1回毎に学部3年生1人ずつ担当が発表する形で進めます。',
        },
        programming: {
          title: 'プログラミング基礎勉強会',
          target: '学部３年生 実験IIIとPBL',
          desc: 'Unix環境でのプログラミング方法，研究室の実験環境を学びます。毎週資料を配布します。卒業研究に向けて、興味がある研究テーマに関連する各種プログラムを実装します。',
        },
      },
      project_report: {
        title: 'プロジェクト研究成果報告会',
        time: '各グループの発表時間：20分',
      },
      weekly_report: {
        title: '週報',
        desc: '全員が週報をMLアドレス宛にメール送信します。',
        template_btn: '週報 テンプレート',
      },
    },
  },
  publications: {
    header: {
      label: '研究成果',
      title: '発表論文・成果',
      description:
        '知能メディア処理研究室の研究成果を紹介します。ここでは、私たちの研究活動の成果である論文、特許、講演などを掲載しています。',
    },
    sections: {
      publications: '選択された論文',
      patents: '特許',
      talks: '招待講演',
    },
    ui: {
      search_placeholder: 'タイトルまたは著者または日付で検索...',
      no_results: '検索条件に一致する論文が見つかりませんでした。',
      load_more: '古い論文を読み込む',
      filter_all: 'すべて',
      filter_journal: '論文誌',
      filter_conference: '国際会議',
      paper_singular: '件',
      paper_plural: '件',
    },
    stats: {
      journal_articles: '論文誌論文',
      conference_papers: '国際会議論文',
    },
    types: {
      journal: '論文誌',
      conference: '国際会議',
    },
  },
  activities: {
    header: {
      title: 'アルバム',
      description: '研究室の歩み：学術的な節目から親睦の記録まで。',
    },
    ui: {
      search_placeholder: 'タイトルまたは著者または日付で検索...',
      no_results: '検索条件に一致する活動が見つかりませんでした。',
      load_more: '古い活動を読み込む',
    },
    types: {
      ordinary: '通常の活動',
      conference: '会議発表',
      award: '受賞',
      event: 'イベント',
    },
    list: {
      event_xmas_2025: {
        title: '2025年度 クリスマスパーティー 🎄',
      },
      event_graduation_2026: {
        title: '2026年度 卒業式 🌸',
      },
      conf_iconip_2025_gao: {
        title: '研究発表',
        venue: 'ICONIP 2025',
        location: '日本、沖縄',
      },
      conf_icip_2025_he: {
        title: '研究発表',
        venue: 'ICIP 2025',
        location: 'アメリカ、アラスカ州アンカレッジ',
      },
      conf_icmr_2025_takahashi: {
        title: '研究発表',
        venue: 'ICMR 2025',
        location: 'アメリカ、シカゴ',
      },
      conf_miru_2025_takahashi: {
        title: '研究発表',
        venue: 'MIRU 2025',
        location: '日本、京都',
      },
      award_kubota_2025_zein: {
        title: '久保田基金 贈呈式・レセプション',
        venue: '久保田助成金（Kubota Grant Award）',
      },
      conf_cvpr_2025_morita: {
        title: '研究発表',
        venue: 'CVPR 2025',
        location: 'アメリカ、ナッシュビル',
      },
      conf_glsvlsi_2025_ding: {
        title: '研究発表',
        venue: 'GLSVLSI 2025',
        location: 'アメリカ、ルイジアナ州ニューオーリンズ',
      },
      event_welcome_2025: {
        title: '2025年度 新入生歓迎会',
      },
      conf_date_2025_ding: {
        title: '研究発表',
        venue: 'DATE 2025',
        location: 'フランス、リヨン',
      },
      event_graduation_2025: {
        title: '2025年度 卒業式 🌸',
      },
      conf_wcci_2024_shirai_kimishima: {
        title: '研究発表',
        venue: 'WCCI 2024',
        location: '日本、横浜',
      },
      conf_iscas_2024_wang_miyamoto_yang: {
        title: '研究発表',
        venue: 'ISCAS 2024',
        location: 'シンガポール',
      },
      event_workshop_2024: {
        title: '研究室ワークショップ 📚',
      },
      event_welcome_2024: {
        title: '2024年度 新入生歓迎会 🌸',
      },
      event_xmas_2023: {
        title: 'クリスマスパーティー 🎄',
      },
      conf_acmmm_2023_wang_iwama: {
        title: '研究発表',
        venue: 'ACM MM 2023',
        location: '台湾、台南',
      },
      conf_cecnet_2023_fu: {
        title: '研究発表',
        venue: 'CECNet 2023',
        location: '中国、マカオ',
      },
      conf_insa_2023_yao_keren: {
        title: '研究発表',
        venue: 'INSA 2023',
        location: 'フランス、レンヌ',
      },
      conf_icip_2023_zhang_morita: {
        title: '研究発表',
        venue: 'ICIP 2023',
        location: 'マレーシア、クアラルンプール',
      },
      conf_wacv_2023_morita: {
        title: '研究発表',
        venue: 'WACV 2023',
        location: 'アメリカ、ハワイ・ワイコロア',
      },
      conf_insa_2022_yang_fu: {
        title: '研究発表',
        venue: 'INSA 2022',
        location: 'フランス、レンヌ',
      },
      conf_iconip_2022_wang_hayashi: {
        title: '論文発表',
        venue: 'ICONIP 2022',
        location: 'オンライン開催',
      },
      conf_icann_2022_zein: {
        title: '論文発表',
        venue: 'ICANN 2022',
        location: 'イギリス、ブリストル',
      },
      conf_icme_2022_fu_zhiqiang: {
        title: '論文発表',
        venue: 'ICME 2022',
        location: 'オンライン開催',
      },
      event_defense_2022_zein_catherine: {
        title: '学位論文公聴会（最終審査）',
      },
      conf_mmm_2022_yang_yao: {
        title: '論文発表',
        venue: 'MMM 2022',
        location: 'オンライン開催',
      },
      event_welcome_2022_park: {
        title: '小金井公園での歓迎会',
      },
      conf_iciap_2022_kimishima: {
        title: '研究発表',
        venue: 'ICIAP 2022',
        location: 'オンライン開催',
      },
      conf_cvmp_2021_man: {
        title: '論文発表',
        venue: 'CVMP 2021',
        location: 'オンライン開催',
      },
      event_festival_2021: {
        title: '第69回 小金井祭',
      },
      event_poster_2021: {
        title: 'ポスター発表会',
      },
      event_farewell_welcome_2021: {
        title: 'オンライン歓送迎会',
      },
      event_welcome_2021_online: {
        title: 'オンライン新メンバー歓迎会',
      },
      award_mmm_2020_man: {
        title: '最優秀論文賞ランナーアップ（Best Paper Runner-up Award）',
        venue: 'MMM 2020',
        location: '韓国、大田',
      },
      conf_cvmp_2019_man: {
        title: '論文発表',
        venue: 'CVMP 2019',
        location: 'イギリス、ロンドン',
      },
      conf_pcs_2019_hoang: {
        title: '論文発表',
        venue: 'PCS 2019',
        location: '中国、寧波',
      },
      event_outing_autumn_2019: {
        title: '秋の親睦遠足',
      },
      event_entrance_2019: {
        title: '入学式',
      },
      conf_isair_2019_chi: {
        title: '論文発表',
        venue: 'ISAIR 2019',
        location: '韓国、大邱',
      },
      event_outing_summer_2019: {
        title: '夏の親睦遠足',
      },
      event_outing_spring_2019: {
        title: '春の親睦遠足',
      },
      conf_talk_dcc_2019_jinjia_jay: {
        title: '招待講演および学会参加',
        venue: 'Video Live Stack & DCC 2019',
      },
      event_visit_taiwan_2019: {
        title: '台湾の大学訪問',
      },
      event_visit_singapore_2019: {
        title: 'シンガポールの研究機関訪問',
      },
      event_workshop_media_2019: {
        title: '次世代メディアに関する国際ワークショップ',
      },
      event_bbq_2018: {
        title: '夏季BBQパーティー',
      },
    },
  },
  home: {
    hero: {
      title: '知能メディア処理研究室',
      subtitle: '知能メディア処理',
    },
    intro: {
      text: '知能メディア処理研究室では、AI、IoT、ビッグデータ処理に基づいたマルチメディアAI技術の最先端研究と実社会への応用を行っています。',
    },
    news: {
      title: 'ニュース',
      more: '詳細を見る',
      item1: '公益財団法人栢森情報科学振興財団の研究助成に採択されました',
      item2: '2025年度に17本の論文が採択されました',
      item3: 'パターン認識分野のトップジャーナル『Pattern Recognition』に論文が採択されました',
      item4: '人工知能分野のトップ会議CVPR 2025に論文が採択されました',
      item5: 'JSPS 科研費に研究プロジェクトが採択されました',
    },
    projects: {
      title: '研究プロジェクト',
      p1: {
        title:
          '機械視覚と人間の視覚の両方に対応した適応型階層ニューラルコーデックを用いたビデオストリーミング',
        desc: 'AI、IoT、およびビッグデータ処理におけるマルチメディアAI技術の最先端の研究と実用的な応用を探索します。',
      },
      p2: {
        title: '深層学習と圧縮センシングを融合した革新的超低消費電力イメージングシステムの実現',
        desc: 'ディープラーニングとコンプレッシブセンシングを統合した、革新的な超低消費電力イメージングシステムの開発。',
      },
      p3: {
        title: 'コンピュータビジョンアプリケーションにおける画像および動画の圧縮',
        desc: 'Development of a novel AI-based multimedia data analysis method for cross-modal retrieval.',
      },
      p4: {
        title: 'バッテリー不要かつワイヤレスによる映像取得機能を備えた、高分散型監視システム',
        desc: 'Research on advanced multimedia compression technology based on deep learning.',
      },
      p5: {
        title: '高解像度画像生成に向けた生成AIモデルの効率最適化技術の開発',
        desc: 'Research on advanced multimedia compression technology based on deep learning.',
      },
    },
    videos: {
      sectionTitle: '紹介動画',
      v1: '研究室紹介ビデオ',
      v2: '動画圧縮AI技術の紹介',
    },
    stats: {
      projects: '研究プロジェクト',
      publications: '研究業績',
      members: '研究室メンバー',
      years: '研究年数',
      alumni_members: '卒業生メンバー',
    },
  },
  research: {
    overview: {
      title: '研究分野',
      description:
        'We conduct cutting-edge research across multiple areas of multimedia AI, spanning compression, sensing, visual processing, and electronic design automation.',
      explore: '詳細を見る',
    },
  },
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
    research: '研究',
    sensing: '圧縮センシング',
    coding: 'ビデオコーディング',
    compression: '情報・画像・動画圧縮',
    processing: '画像処理',
    aboutUs: '研究室紹介',
    members: 'メンバー',
    facilities: '研究室環境',
    meetings: '研究会',
    publications: '業績',
    activities: 'アルバム',
    visit: '研究室見学',
    eda: '電子設計自動化',
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
    address: '住所',
    address_desc: '〒184-8584　東京都小金井市梶野町３−７−２　法政大学',
    tel: '電話番号',
    email: 'メールアドレス',
  },
  notFoundView: {
    notFound: 'ページが見つかりません',
    goHome: 'ホームに戻る',
    message: '申し訳ありませんが、お探しのページは存在しません。',
  },
  visit: {
    header: {
      title: '2026年度 研究室配属予定の学生向け情報',
      update_info: '最終更新日：2026/3/30',
      description:
        '次世代情報社会への貢献を目指して、人工知能、画像処理、ハードウェア実装等の技術に基づいて Intelligent Media Processing System の開発に取り組んでいます。学生は大きく3つのグループに分かれ、協力しながら連携して研究をしています。',
    },
    themes: {
      title: '研究グループ',
      ai: {
        title: '人工知能・画像処理',
        desc: '人工知能を用いた画像処理（画像・動画自動生成、超解像技術など）の研究。',
      },
      sensor: {
        title: '低消費電力イメージセンサー',
        desc: '圧縮センシング、疎情報の再構成アルゴリズムのハードウェア実装。',
      },
      compression: {
        title: '映像圧縮',
        desc: '深層学習を用いた動画像符号化技術、最新の動画圧縮符号化方式のハードウェア設計。',
      },
    },
    environment: {
      title: 'グローバルな活動と研究環境',
      description:
        '本研究室では、卒業生がグローバルな場で活躍できる実力を身につけられるように、国際的な活動を重視しています。普段から研究室でも英語で発表、議論、作文などを練習します。これまで多くの国際会議で論文を発表し、大学や研究所と国際共同研究プログラムを実施して成果を上げてきています。',
    },
    resources: {
      title: '研究室紹介・資料',
      overview: '研究室の概要 (PDF)',
      themes: '卒研テーマ紹介 (PDF)',
      video_1: '研究室紹介動画 1',
      video_2: '研究室紹介動画 2',
      video_3: '研究室紹介動画 3',
      video_4: '研究室紹介動画 4',
    },
    tours: {
      title: '研究室見学＆質疑応答スケジュール',
      cat_open: 'オープンゼミ',
      cat_intro: '先輩によるサポート',
      cat_qa: '教授との質疑応答',
      open_semi: 'オープンゼミ体験',
      open_semi_note: '会場がW211からW202に変更になりました',
      senior_qa: '先輩による研究室紹介と質問受付け',
      prof_qa: '教員による質問对応',
      date_open: '2025/4/7 (月) 2限',
      date_intro: '2026/4/3 (金) 15:20~17:00',
      date_intro_2: '2026/4/6 (月) - 4/8 (水) 13:20~15:00',
      date_qa_1: '2026/4/3 (金) 15:20~17:00',
      date_qa_2: '2026/4/6 (月) - 4/8 (水) 15:20~17:00',
      location_south_s504: '南館 S504',
    },
  },
}
