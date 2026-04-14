export interface Member {
  /** i18n key suffix — used as t(`aboutUs.members.names.${nameKey}`, name) */
  nameKey: string
  /** English fallback name */
  name: string
  image?: string
  imagePosition?: string
  /** i18n key suffix for role */
  roleKey?: string
  /** i18n key suffix for destination */
  destinationKey?: string
  link?: string
  /** Internal route path (relative to current route) — navigates without opening new tab */
  internalLink?: string
}

export interface MemberSection {
  id: string
  /** i18n key suffix — used as t(`aboutUs.members.roles.${id}`) */
  titleKey: string
  layout: 'photo-grid' | 'text-grid' | 'alumni-list'
  members: Member[]
}

export const memberSections: MemberSection[] = [
  {
    id: 'professor',
    titleKey: 'professor',
    layout: 'photo-grid',
    members: [
      {
        nameKey: 'jinjia_zhou',
        name: 'Jinjia Zhou',
        image: '/images/AboutUs/Members/jinjia_zhou_new.png',
        internalLink: 'jinjia-zhou',
      },
    ],
  },
  {
    id: 'doctoral',
    titleKey: 'doctoral',
    layout: 'photo-grid',
    members: [
      { nameKey: 'gao_yufei', name: 'Yufei Gao', image: '/images/AboutUs/Members/gyf.png' },
      {
        nameKey: 'zhu_shuliang',
        name: 'Shuliang Zhu',
        image: '/images/AboutUs/Members/zsl.jpg',
        imagePosition: 'center 6%',
      },
      { nameKey: 'keren_he', name: 'Keren He', image: '/images/AboutUs/Members/heren_new.jpg' },
      {
        nameKey: 'alaa_zein',
        name: 'Alaa Zein El Abdein Marouf',
        image: '/images/AboutUs/Members/alaa.avif',
      },
      {
        nameKey: 'qi_yuanrui',
        name: 'Yuanrui Qi',
        image: '/images/AboutUs/Members/qi_new.jpg',
      },
      {
        nameKey: 'ding_jinhao',
        name: 'Jinhao Ding',
        image: '/images/AboutUs/Members/ding_jinhao.avif',
      },
      {
        nameKey: 'wang_qi',
        name: 'Qi Wang',
        image: '/images/AboutUs/Members/wangqi_new.jpg',
        imagePosition: 'center 6%',
      },
      {
        nameKey: 'chen_shiyu',
        name: 'Shiyu Chen',
        image: '/images/AboutUs/Members/chen_shiyu.avif',
      },
      {
        nameKey: 'wang_haixin',
        name: 'Haixin Wang (Mirai Sato)',
        image: '/images/AboutUs/Members/sato_new.jpg',
        link: 'https://whx0.github.io/my-website/',
      },
      {
        nameKey: 'yuan_lingfan',
        name: 'Lingfan Yuan',
        image: '/images/AboutUs/Members/ylf_new.png',
        imagePosition: 'center 26%',
      },
      {
        nameKey: 'kimishima_fuma',
        name: 'Fuma Kimishima',
        image: '/images/AboutUs/Members/kimishima_fuma.avif',
      },
    ],
  },
  {
    id: 'masters',
    titleKey: 'masters',
    layout: 'text-grid',
    members: [
      { nameKey: 'ryosuke_sato', name: 'Ryosuke Sato' },
      { nameKey: 'haruto_domori', name: 'Haruto Domori' },
      { nameKey: 'jiaqi_mei', name: 'Jiaqi Mei' },
      { nameKey: 'rigen_mo', name: 'Rigen Mo' },
      { nameKey: 'handa_takuma', name: 'Takuma Handa' },
      { nameKey: 'wu_zijian', name: 'Zijian Wu', image: '/images/AboutUs/Members/wzj.png' },
      {
        nameKey: 'yao_zhidi',
        name: 'Zhidi Yao',
        link: 'https://www.momocha.icu/en/resume',
        image: '/images/AboutUs/Members/yzd_new.jpg',
      },
      { nameKey: 'sai', name: 'Sai Jayaprakash Ummithi' },
      { nameKey: 'yang_yu', name: 'Yu Yang' },
      { nameKey: 'akihiro_sakurai', name: 'Akihiro Sakurai' },
      { nameKey: 'hiroto_sugiura', name: 'Hiroto Sugiura' },
      { nameKey: 'riku_takahashi', name: 'Riku Takahashi' },
      { nameKey: 'ayumu_seki', name: 'Ayumu Seki' },
    ],
  },
  {
    id: 'b4',
    titleKey: 'b4',
    layout: 'text-grid',
    members: [
      { nameKey: 'iwasaki_yota', name: 'Yota Iwasaki' },
      { nameKey: 'asano_shunsuke', name: 'Shunsuke Asano' },
      { nameKey: 'nakajima_sawaki', name: 'Sawaki Nakajima' },
      { nameKey: 'ito_tomoki', name: 'Tomoki Ito' },
      { nameKey: 'mikano_ryota', name: 'Ryota Mikano' },
      { nameKey: 'enomoto_machika', name: 'Machika Enomoto' },
      { nameKey: 'nonoo_gaku', name: 'Gaku Nonoo' },
      { nameKey: 'ajiki_ren', name: 'Ren Ajiki' },
      { nameKey: 'kashiyama_keisuke', name: 'Keisuke Kashiyama' },
      { nameKey: 'yagihashi_kaito', name: 'Kaito Yagihashi' },
    ],
  },
  {
    id: 'b3',
    titleKey: 'b3',
    layout: 'text-grid',
    members: [],
  },
  {
    id: 'alumni',
    titleKey: 'alumni',
    layout: 'alumni-list',
    members: [
      { nameKey: 'miyamoto_mizuki', name: 'Mizuki Miyamoto', destinationKey: 'docomo' },
      { nameKey: 'iwama_kosuke', name: 'Kosuke Iwama' },
      { nameKey: 'fan_wei', name: 'Wei Fan' },
      { nameKey: 'mirino_otsubo', name: 'Mirino Otsubo', destinationKey: 'nintendo' },
      { nameKey: 'shoki_masuda', name: 'Shoki Masuda' },
      { nameKey: 'kohta_nakamura', name: 'Kohta Nakamura' },
      { nameKey: 'rikuya_maeta', name: 'Rikuya Maeta' },
      { nameKey: 'jianbin_zhou', name: 'Jianbin Zhou', destinationKey: 'dji' },
      { nameKey: 'tran_thi_thu_thuy', name: 'Thi Thu Thuy Tran', destinationKey: 'rakuten' },
      { nameKey: 'nguyen_tan_ho', name: 'Tan Ho Nguyen', destinationKey: 'ficha' },
      { nameKey: 'gu_qirui', name: 'Qirui Gu', destinationKey: 'thoughtworks' },
      { nameKey: 'trinh_man_hoang', name: 'Man Hoang Trinh', destinationKey: 'ficha' },
      {
        nameKey: 'minh_man_ho',
        name: 'Minh Man Ho',
        destinationKey: 'utah',
        link: 'https://minhmanho.github.io/',
      },
      { nameKey: 'jirayu_peetakul', name: 'Jirayu Peetakul', destinationKey: 'muspace' },
      { nameKey: 'pham_do_kim_chi', name: 'Do Kim Chi Pham', destinationKey: 'ando_hazama' },
      {
        nameKey: 'catherine_waithera',
        name: 'Catherine Waithera Wangari',
        destinationKey: 'kisii',
      },
      { nameKey: 'miyoshi_hayato', name: 'Hayato Miyoshi', destinationKey: 'veriserve' },
      { nameKey: 'otagiri_kengo', name: 'Kengo Otagiri', destinationKey: 'accenture' },
      { nameKey: 'kikuchi_syunshuke', name: 'Syunshuke Kikuchi', destinationKey: 'mitsubishi' },
      { nameKey: 'makino_hiroya', name: 'Hiroya Makino', destinationKey: 'ntt_data' },
      { nameKey: 'usukura_riki', name: 'Riki Usukura', destinationKey: 'scsk' },
      { nameKey: 'fujii_riku', name: 'Riku Fujii', destinationKey: 'toyota' },
      { nameKey: 'hayama_hibiki', name: 'Hibiki Hayama', destinationKey: 'kyudenko' },
      { nameKey: 'zhiqiang_zhang', name: 'Zhiqiang Zhang', destinationKey: 'swust' },
      { nameKey: 'fu_chen', name: 'Chen Fu', destinationKey: 'chn_energy' },
      {
        nameKey: 'morita_ryugo',
        name: 'Ryugo Morita',
        destinationKey: 'sds_dfki',
        link: 'https://ryugo417.github.io/',
      },
      {
        nameKey: 'jiayao_xu',
        name: 'Jiayao Xu',
        destinationKey: 'pengcheng',
        link: 'https://xu-jiayao.github.io/',
      },
      { nameKey: 'yang_jian', name: 'Yang Jian', destinationKey: 'tokyo_tech' },
      { nameKey: 'hayashi_shinkou', name: 'Hayashi Shinkou', destinationKey: 'hitachi' },
      { nameKey: 'haga_shinkou', name: 'Haga Shinkou', destinationKey: 'capcom' },
      { nameKey: 'nakano_kyoka', name: 'Nakano Kyoka', destinationKey: 'sky' },
      { nameKey: 'xin_cheng', name: 'Xin Cheng', destinationKey: 'swust' },
    ],
  },
]

/** 当前在读成员数（不含 alumni） */
export const currentMemberCount = memberSections
  .filter((s) => s.id !== 'alumni')
  .reduce((sum, s) => sum + s.members.length, 0)

/** 校友数 */
export const alumniCount = memberSections.find((s) => s.id === 'alumni')?.members.length ?? 0
