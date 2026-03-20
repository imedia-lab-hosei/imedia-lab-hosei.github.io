import { title } from 'process'

export default {
  project_detail: {
    intro:
      'This research focuses on the whole image acquisition system, and proposes to integrate the compressive sensing (CS) based measurement domain image sensing and the corresponding measurement domain data compression. Comparing with the conventional solution, the power of the whole system is expected to be reduced by more than 90%.',
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
    intro: 'We are developing the deep learning based video coding systems.',
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
  project_detail_processing: {
    intro: 'We are developing the deep learning based video coding systems.',
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
      s2: {
        title: 'DrawGAN: Text to Image Synthesis with Drawing Generative Adversarial Networks',
        abstract:
          'In this paper, we propose a novel drawing generative adversarial networks (DrawGAN) for text-to-image synthesis. The whole model divides the image synthesis into three stages by imitating the process of drawing. The first stage synthesizes the simple contour image based on the text description, the second stage generates the foreground image with detailed information, and the third stage synthesizes the final result. Through the step-by-step synthesis process from simple to complex and easy to difficult, the model can draw the corresponding results step by step and finally achieve the higher-quality image synthesis effect. Our method is validated on the Caltech-UCSD Birds 200 (CUB) dataset and the Microsoft Common Objects in Context (MS COCO) dataset. The experimental results demonstrate the effectiveness and superiority of our method. In terms of both subjective and objective evaluation, our method’s results surpass the existing state-of-the-art methods.',
        published:
          'IEEE International Conference on Acoustics, Speach and Signal Processing (ICASSP) Jun. 2021.',
      },
      s1: {
        title: 'Blending and Retouching Photos with Color Style Transfer',
        abstract:
          'End-users, without knowledge in photography, desire to beautify their photos to have a similar color style as a well-retouched reference. However, the definition of style in recent image style transfer works is inappropriate. They usually synthesize undesirable results due to transferring exact colors to the wrong destination. It becomes even worse in sensitive cases such as portraits. In this work, we concentrate on learning low-level image transformation, especially color-shifting methods, rather than mixing contextual features, then present a novel scheme to train color style transfer with ground-truth. Furthermore, we propose a color style transfer named Deep Preset. It is designed to 1) generalize the features representing the color transformation from content with natural colors to retouched reference, then blend it into the contextual features of content, 2) predict hyper-parameters (settings or preset) of the applied low-level color transformation methods, 3) stylize content to have a similar color style as reference. We script Lightroom, a powerful tool in editing photos, to generate 600,000 training samples using 1,200 images from the Flick2K dataset and 500 user-generated presets with 69 settings. Experimental results show that our Deep Preset outperforms the previous works in color style transfer quantitatively and qualitatively.',
        published:
          'IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), pp. 2113-2121, Jan. 2021 (acceptance rate 35.4%).',
      },
    },
  },
  aboutUs: {
    members: {
      pageTitle: 'Our Members',
      pageDescription:
        'Meet the brilliant minds and researchers driving our academic excellence forward.',
      roles: {
        professor: 'Professor',
        lab_director: 'Lab Director',
        doctoral: 'Doctoral students',
        masters: 'Master students',
        b4: 'B4 students',
        b3: 'B3 students',
        alumni: 'Alumni',
      },
      names: {
        jinjia_zhou: 'Jinjia Zhou',
        keren_he: 'Keren He',
        alaa_zein: 'Alaa Zein El Abdein Marouf',
        qi_yuanrui: 'Qi yuanrui',
        ding_jinhao: 'Ding Jinhao',
        wang_qi: 'Wang Qi',
        chen_shiyu: 'Chen Shiyu',
        wang_haixin: 'Wang Haixin (Sato Mirai)',
        kimishima_fuma: 'Kimishima Fuma',
        miyamoto_mizuki: 'Miyamoto Mizuki',
        iwama_kosuke: 'Iwama Kosuke',
        morita_ryugo: 'Morita Ryugo',
        yao_zhidi: 'Zhidi Yao',
        sai: 'UMMITHI Sai Jayaprakash',
        yang_yu: 'Yang Yu',
        akihiro_sakurai: 'Akihiro Sakurai',
        hiroto_sugiura: 'Hiroto Sugiura',
        riku_takahashi: 'Riku Takahashi',
        ayumu_seki: 'Ayumu Seki',
        haruto_domori: 'Haruto Domori',
        fan_wei: 'Fan Wei',
        rigen_mo: 'Rigen Mo',
        mirino_otsubo: 'Mirino Otsubo',
        shoki_masuda: 'Shoki Masuda',
        jiaqi_mei: 'Jiaqi Mei',
        ryosuke_sato: 'Ryosuke Sato',
        kohta_nakamura: 'Kohta Nakamura',
        rikuya_maeta: 'Rikuya Maeta',
        iwasaki_yota: 'Iwasaki Yota',
        asano_shunsuke: 'Asano Shunsuke',
        nakajima_sawaki: 'Nakajima Sawaki',
        ito_tomoki: 'Ito Tomoki',
        mikano_ryota: 'Mikano Ryota',
        enomoto_machika: 'Enomoto Machika',
        nonoo_gaku: 'Nonoo Gaku',
        ajiki_ren: 'Ajiki Ren',
        kashiyama_keisuke: 'Kashiyama Keisuke',
        yagihashi_kaito: 'Yagihashi Kaito',
        jianbin_zhou: 'Jianbin Zhou',
        tran_thi_thu_thuy: 'Tran Thi Thu Thuy',
        nguyen_tan_ho: 'Nguyen Tan Ho',
        gu_qirui: 'Gu Qirui',
        trinh_man_hoang: 'Trinh Man Hoang',
        minh_man_ho: 'Minh Man Ho',
        jirayu_peetakul: 'Jirayu Peetakul',
        pham_do_kim_chi: 'Pham Do Kim Chi',
        catherine_waithera: 'Catherine Waithera Wangari',
        miyoshi_hayato: 'Miyoshi Hayato',
        otagiri_kengo: 'Otagiri Kengo',
        kikuchi_syunshuke: 'Kikuchi Syunshuke',
        makino_hiroya: 'Makino Hiroya',
        usukura_riki: 'Usukura Riki',
        fujii_riku: 'Fujii Riku',
        hayama_hibiki: 'Hayama Hibiki',
        zhiqiang_zhang: 'Zhiqiang Zhang',
        fu_chen: 'Fu Chen',
        jiayao_xu: 'Jiayao Xu',
        yang_jian: 'Yang Jian',
        hayashi_shinkou: 'Hayashi Shinkou',
        haga_shinkou: 'Haga Shinkou',
        nakano_kyoka: 'Nakano Kyoka',
        xin_cheng: 'Xin Cheng',
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
        accenture: 'Accenture, Japan',
        mitsubishi: 'Mitsubishi Electric, Japan',
        ntt_data: 'NTT DATA SMS, Japan',
        scsk: 'SCSK Corporation, Japan',
        toyota: 'TOYOTA Motor Corporation, Japan',
        kyudenko: 'KYUDENKO Corporation, Japan',
        swust: 'Southwest University of Sci & Tech, China',
        chn_energy: 'CHN ENERGY Investment Group',
        pengcheng: 'PengCheng Laboratory',
        tokyo_tech: 'Tokyo University of Technology',
        hitachi: 'Hitachi',
        capcom: 'CAPCOM CO.',
        sky: 'Sky',
      },
    },
    facilities: {
      header: {
        title: 'Lab Room',
        description:
          'Explore the spaces and state-of-the-art equipment that empower our research and innovation.',
      },
      notice: {
        title: 'Lab Relocation Update',
        description:
          'We moved the lab room to the South building in April 2021. The photos of our new room will be updated soon.',
      },
      sections: {
        research_facilities: 'Research Facilities',
        gallery: 'Equipment Gallery',
      },
      categories: {
        library: 'Literature & Library',
        computing: 'Computing Power',
        hardware: 'Hardware & Sensors',
      },
      texts: {
        library_p1:
          'We have a small library in the lab room. Feel free to borrow the books. Currently, most of the books are written in English, and more Japanese books will be purchased to enrich our collection.',
        computing_p1:
          'Several high-performance computers with advanced GPUs are equipped to support intensive research workloads, deep learning training, and complex simulations.',
        hardware_p1:
          'Moreover, we provide specialized hardware for edge computing, computer vision, and signal processing experiments.',
      },
      gallery: {
        gpu: 'GPU Workstation',
        testing: 'Testing Environment',
        sensor: 'Programmable Sensors',
      },
    },
    activities: {
      header: {
        title: 'Research Meetings',
        description:
          'Regular seminars, study groups, and guidelines to foster collaborative research and continuous learning.',
      },
      links: {
        submission_guide: 'Conferences Link',
        meeting_link: 'Meeting Link',
      },
      frequency: {
        weekly: 'Weekly',
        monthly: 'Monthly',
      },
      labels: {
        language: 'Language Requirements',
        timing: 'Presentation Timing',
      },
      seminar: {
        title: 'Research Seminar',
        description:
          'We hold weekly research seminars where all members discuss progress and results. The purpose of this meeting is to exchange diverse ideas among all laboratory members.',
        lang_slides: 'Slides: Mostly English',
        lang_talk: 'Talk: English or Japanese (English preferred)',
        time_phd: 'Doctoral students: 20 minutes',
        time_others: 'Master / Undergrad students: 10 minutes',
      },
      study_groups: {
        title: 'Study Meetings',
        reading: {
          title: 'Paper Reading',
          desc: 'Every week, the gruadate students introduce a paper or a video. We recommend the undegraduated students to attend it.',
          note: 'Optional for undergrads',
        },
        theory: {
          title: 'Theoretical Studying',
          target: 'B3 Seminar',
          desc: 'To learn the basic knowledge of information processing and machine learning, the students read the book titled. Information Theory, Inference, and Learning Algorithms. Every B3 student read one chapter and introduce to the others by presentation.',
        },
        programming: {
          title: 'Programming Studying',
          target: 'B3 Seminar',
          desc: 'Every week, handouts are distributed to learn the programming skills. To enhance the programming skills, some tasks are assigned. ',
        },
      },
      project_report: {
        title: 'Project Research Progress Report',
        time: 'Each group: 20 minutes',
      },
      weekly_report: {
        title: 'Weekly Report',
        desc: 'All members are required to send a weekly report to the mailing list address.',
        template_btn: 'Download Template',
      },
    },
  },
  publications: {
    header: {
      label: 'Research Output',
      title: 'Publications & Achievements',
      description:
        'A comprehensive collection of our academic papers, patents, and invited talks driving innovation forward.',
    },
    sections: {
      publications: 'Selected Publications',
      patents: 'Patents',
      talks: 'Invited Talks',
    },
    ui: {
      search_placeholder: 'Search by title or author or date...',
      no_results: 'No publications found matching your search.',
      load_more: 'Load Older Publications',
      filter_all: 'All',
      filter_journal: 'Journal',
      filter_conference: 'Conference',
      paper_singular: 'paper',
      paper_plural: 'papers',
    },
    stats: {
      journal_articles: 'Journal Articles',
      conference_papers: 'Conference Papers',
    },
    types: {
      journal: 'Journal',
      conference: 'Conference',
    },
  },
  activities: {
    header: {
      title: 'Activities',
      description:
        "A chronicle of our laboratory's journey, from academic milestones to team-building moments.",
    },
    ui: {
      search_placeholder: 'Search activities...',
      no_results: 'No activities match your search criteria.',
      load_more: 'Load Older Activities',
    },
    types: {
      ordinary: 'Activity',
      conference: 'Conference',
      award: 'Award Recognition',
      event: 'Event',
    },
    list: {
      conf_iconip_2025_gao: {
        title: 'Research Presentation',
        venue: 'ICONIP 2025',
        location: 'Okinawa, Japan',
      },
      conf_icip_2025_he: {
        title: 'Research Presentation',
        venue: 'ICIP 2025',
        location: 'Anchorage Alaska, USA',
      },
      conf_icmr_2025_takahashi: {
        title: 'Research Presentation',
        venue: 'ICMR 2025',
        location: 'Chicago, USA',
      },
      conf_miru_2025_takahashi: {
        title: 'Research Presentation',
        venue: 'MIRU 2025',
        location: 'Kyoto, Japan',
      },
      award_kubota_2025_zein: {
        title: 'Grant Presentation & Reception',
        venue: 'Kubota Grant Award',
      },
      conf_cvpr_2025_morita: {
        title: 'Research Presentation',
        venue: 'CVPR 2025',
        location: 'Nashville, USA',
      },
      conf_glsvlsi_2025_ding: {
        title: 'Research Presentation',
        venue: 'GLSVLSI 2025',
        location: 'New Orleans, LA, USA',
      },
      event_welcome_2025: { title: 'Welcome Party 2025' },
      conf_date_2025_ding: {
        title: 'Research Presentation',
        venue: 'DATE 2025',
        location: 'Lyon, France',
      },
      event_graduation_2025: { title: 'Graduation Ceremony 2025 🌸' },
      conf_wcci_2024_shirai_kimishima: {
        title: 'Research Presentation',
        venue: 'WCCI 2024',
        location: 'Yokohama, Japan',
      },
      conf_iscas_2024_wang_miyamoto_yang: {
        title: 'Research Presentation',
        venue: 'ISCAS 2024',
        location: 'Singapore',
      },
      event_workshop_2024: { title: 'Lab Workshop 📚' },
      event_welcome_2024: { title: 'Welcome Party 2024 🌸' },
      event_xmas_2023: { title: "X'mas Party 🎄" },
      conf_acmmm_2023_wang_iwama: {
        title: 'Research Presentation',
        venue: 'ACM MM 2023',
        location: 'Tainan, Taiwan',
      },
      conf_cecnet_2023_fu: {
        title: 'Research Presentation',
        venue: 'CECNet 2023',
        location: 'Macau, China',
      },
      conf_insa_2023_yao_keren: {
        title: 'Research Presentation',
        venue: 'INSA 2023',
        location: 'Rennes, France',
      },
      conf_icip_2023_zhang_morita: {
        title: 'Research Presentation',
        venue: 'ICIP 2023',
        location: 'Kuala Lumpur, Malaysia',
      },
      conf_wacv_2023_morita: {
        title: 'Research Presentation',
        venue: 'WACV 2023',
        location: 'Waikoloa, Hawaii',
      },
      conf_insa_2022_yang_fu: {
        title: 'Research Presentation',
        venue: 'INSA 2022',
        location: 'Rennes, France',
      },
      conf_iconip_2022_wang_hayashi: {
        title: 'Paper Presentation',
        venue: 'ICONIP 2022',
        location: 'Virtual',
      },
      conf_icann_2022_zein: {
        title: 'Paper Presentation',
        venue: 'ICANN 2022',
        location: 'Bristol, UK',
      },
      conf_icme_2022_fu_zhiqiang: {
        title: 'Paper Presentation',
        venue: 'ICME 2022',
        location: 'Virtual',
      },
      event_defense_2022_zein_catherine: { title: 'Graduation Defense' },
      conf_mmm_2022_yang_yao: {
        title: 'Paper Presentation',
        venue: 'MMM 2022',
        location: 'Virtual',
      },
      event_welcome_2022_park: { title: 'Welcome Party at Koganei Park' },
      conf_iciap_2022_kimishima: {
        title: 'Research Presentation',
        venue: 'ICIAP 2022',
        location: 'Virtual',
      },
      conf_cvmp_2021_man: {
        title: 'Paper Presentation',
        venue: 'CVMP 2021',
        location: 'Virtual',
      },
      event_festival_2021: { title: 'The 69th Koganei Campus Festival' },
      event_poster_2021: { title: 'Poster Presentation' },
      event_farewell_welcome_2021: { title: 'Online Farewell and Welcome Party' },
      event_welcome_2021_online: { title: 'Online Welcome Party for New Members' },
      award_mmm_2020_man: {
        title: 'Best Paper Runner-up Award',
        venue: 'MMM 2020',
        location: 'Daejeon, Korea',
      },
      conf_cvmp_2019_man: {
        title: 'Paper Presentation',
        venue: 'CVMP 2019',
        location: 'London, UK',
      },
      conf_pcs_2019_hoang: {
        title: 'Paper Presentation',
        venue: 'PCS 2019',
        location: 'Ningbo, China',
      },
      event_outing_autumn_2019: { title: 'Autumn Group Outing' },
      event_entrance_2019: { title: 'Entrance Ceremony' },
      conf_isair_2019_chi: {
        title: 'Paper Presentation',
        venue: 'ISAIR 2019',
        location: 'Daegu, Korea',
      },
      event_outing_summer_2019: { title: 'Summer Group Outing' },
      event_outing_spring_2019: { title: 'Spring Group Outing' },
      conf_talk_dcc_2019_jinjia_jay: {
        title: 'Talk & Conference Attendance',
        venue: 'Video Live Stack & DCC 2019',
      },
      event_visit_taiwan_2019: { title: 'University Visits in Taiwan' },
      event_visit_singapore_2019: { title: 'Research Institution Visits in Singapore' },
      event_workshop_media_2019: { title: 'International Workshop on Future Media' },
      event_bbq_2018: { title: 'Summer BBQ Party' },
    },
  },
  visit: {
    header: {
      title: 'Information for Prospective Students 2025',
      update_info: 'Last Updated: 2025/3/25',
      description:
        'We are developing Intelligent Media Processing Systems based on AI, image processing, and hardware implementation technologies to contribute to the next-generation information society.',
    },
    themes: {
      title: 'Research Groups',
      ai: {
        title: 'AI Image Processing',
        desc: 'Focusing on automatic image/video generation, super-resolution, and deep learning models.',
      },
      sensor: {
        title: 'Low-Power Image Sensors',
        desc: 'Compressive sensing and sparse information reconstruction algorithms for hardware.',
      },
      compression: {
        title: 'Video Compression',
        desc: 'Deep learning-based video coding and hardware design for the latest compression standards.',
      },
    },
    environment: {
      title: 'Global Research Environment',
      description:
        'We emphasize global active learning. Students practice presenting, discussing, and writing in English, leading to numerous publications in major international conferences.',
    },
    resources: {
      title: 'Resources & Links',
      overview: 'Lab Overview PDF',
      themes: 'Research Themes PDF',
      video_1: 'Intro Video 1',
      video_2: 'Intro Video 2',
      video_3: 'Intro Video 3',
    },
    tours: {
      title: 'Lab Tours & Q&A Schedule',
      cat_open: 'Open Seminar',
      cat_intro: 'Senior Support',
      cat_qa: 'Professor Q&A',
      open_semi: 'Open Seminar Experience',
      open_semi_note: 'Location changed from W211 to W202',
      senior_qa: 'Lab Intro & Q&A by Senior Students',
      prof_qa: 'Consultation with Professor',
      date_open: '2025/4/7 (Mon) 2nd Period',
      date_intro: '2025/4/7 (Mon) - 4/10 (Thu) 13:20~15:00',
      date_qa_1: '2025/4/7 (Mon) 13:20~15:00',
      date_qa_2: '2025/4/8 (Tue) 13:20~15:00',
      date_qa_3: '2025/4/9 (Wed) 15:10~17:00',
    },
  },
  home: {
    hero: {
      title: 'Intelligent Media Processing Lab',
      subtitle: 'Intelligent Media Processing',
    },
    intro: {
      text: 'The Intelligent Media Processing Laboratory is conducting cutting-edge research and real-world applications of multimedia AI technology based on AI, IoT, and big data processing.',
    },
    news: {
      title: 'News',
      more: 'View More',
      item1: 'One Project is accepted by Kayamori Foundation of Informational Science Advancement.',
      item2: '17 Papers were accepted in 2025',
      item3: 'One Paper is accepted by Pattern Recognition',
      item4: 'One paper is accepted by CVPR 2025',
      item5: 'One project is accepted by JSPS KAKENHI',
    },
    projects: {
      title: 'Research Projects',
      p1: {
        title:
          'Adaptive Video Streaming with Layered Neural Codecs for Both Machine and Human Vision',
        desc: 'Exploring the frontier research and practical applications of multimedia AI technology in AI, IoT and big data processing.',
      },
      p2: {
        title:
          'An Innovative Ultra-Low Power Imaging System by Integrating Deep Learning and Compressive Sensing',
        desc: 'Realization of an innovative ultra-low power imaging system combining deep learning and compressive sensing.',
      },
      p3: {
        title: 'Image and Video Compression for Computer Vision Applications',
        desc: 'Development of a novel AI-based multimedia data analysis method for cross-modal retrieval.',
      },
      p4: {
        title:
          'A Highly-Distributed Surveillance System with Batteryless and Wireless Video Acquisition',
        desc: 'Research on advanced multimedia compression technology based on deep learning.',
      },
      p5: {
        title:
          ' Development of Efficiency Optimization Technologies for Generative AI Models Toward High-Definition Image Generation',
        desc: '',
      },
    },
    videos: {
      sectionTitle: 'Featured Videos',
      v1: 'Lab Research Overview',
      v2: 'Video AI Compression Technology',
    },
    stats: {
      projects: 'Research Projects',
      publications: 'Publications',
      members: 'Lab Members',
      years: 'Years of Research',
      alumni_members: 'Alumni Members',
    },
  },
  research: {
    overview: {
      title: 'Research Areas',
      description:
        'We conduct cutting-edge research across three major areas of multimedia AI, spanning compression, sensing, and visual processing.',
      explore: 'Explore',
    },
  },
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
    research: 'Research',
    sensing: 'Compressive Sensing',
    coding: 'Video Coding',
    processing: 'Image Processing',
    aboutUs: 'About Us',
    members: 'Members',
    facilities: 'Lab Facilities',
    meetings: 'Research Meetings',
    publications: 'Publications',
    activities: 'Activities',
    visit: 'Lab Visit',
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
    address: 'Address',
    tel: 'Tel',
    email: 'Email',
    address_desc: 'S504, 3-7-2 Kajino, Koganei, Tokyo 184-8584, Japan.',
  },
  notFoundView: {
    notFound: 'Page Not Found',
    goHome: 'Back to Home',
    message: 'Sorry, the page you are looking for does not exist.',
  },
}
