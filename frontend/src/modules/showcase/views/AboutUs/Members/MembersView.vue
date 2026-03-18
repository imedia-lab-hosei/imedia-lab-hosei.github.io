<template>
  <div class="max-w-4xl mx-auto px-6 py-24 space-y-24 bg-background min-h-screen">
    <header class="space-y-6">
      <h1 class="text-primary text-4xl md:text-5xl font-bold tracking-tight">
        {{ pageContent.title }}
      </h1>
      <p class="text-lg text-muted-foreground max-w-2xl leading-relaxed">
        {{ pageContent.description }}
      </p>
    </header>

    <template v-for="section in pageContent.sections" :key="section.id">
      <section class="space-y-12">
        <div class="space-y-4">
          <h2 class="text-2xl font-medium tracking-tight text-foreground">
            {{ section.title }}
          </h2>
          <UDivider class="border-border" />
        </div>

        <div
          v-if="section.layout === 'photo-grid'"
          class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          <UCard
            v-for="member in section.members"
            :key="member.name"
            class="group bg-card border-border overflow-hidden transition-all duration-300 hover:shadow-md ring-border"
          >
            <div class="aspect-4/5 bg-muted relative overflow-hidden">
              <img
                v-if="member.image"
                :src="member.image"
                :alt="member.name"
                class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <template #footer>
              <div class="text-center">
                <span
                  class="text-base font-medium text-foreground transition-colors duration-300 group-hover:text-primary block"
                >
                  {{ member.name }}
                </span>
                <span v-if="member.role" class="text-sm text-muted-foreground mt-1 block">
                  {{ member.role }}
                </span>
              </div>
            </template>
          </UCard>
        </div>

        <div
          v-else-if="section.layout === 'text-grid'"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4"
        >
          <div
            v-for="member in section.members"
            :key="member.name"
            class="flex items-center space-x-3"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></div>
            <span class="text-foreground text-base tracking-wide">{{ member.name }}</span>
          </div>
        </div>

        <div
          v-else-if="section.layout === 'alumni-list'"
          class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          <div
            v-for="alumnus in section.members"
            :key="alumnus.name"
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 p-4 rounded-lg bg-card border border-border"
          >
            <span class="text-foreground font-medium">{{ alumnus.name }}</span>
            <UBadge variant="soft" class="w-fit text-center">
              {{ alumnus.destination }}
            </UBadge>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n' // 引入 useI18n

// 1. 定义明确的类型接口，将非通用字段设为可选 (?)
interface Member {
  name: string
  image?: string
  role?: string
  destination?: string
}

interface Section {
  id: string
  title: string
  layout: 'photo-grid' | 'text-grid' | 'alumni-list'
  members: Member[]
}

interface PageContent {
  title: string
  description: string
  sections: Section[]
}

const { t } = useI18n()

// 2. 为 computed 传入泛型 <PageContent>，强制类型约束
const pageContent = computed<PageContent>(() => {
  return {
    title: t('aboutUs.members.pageTitle', 'Our Members'),
    description: t(
      'aboutUs.members.pageDescription',
      'Meet the brilliant minds and researchers driving our academic excellence forward.',
    ),
    sections: [
      {
        id: 'professor',
        title: t('aboutUs.members.roles.professor', 'Professor'),
        layout: 'photo-grid',
        members: [
          {
            name: t('aboutUs.members.names.jinjia_zhou', 'Jinjia Zhou'),
            image: '/images/AboutUs/Members/jinjia_zhou.avif',
            // role: t('aboutUs.members.roles.lab_director', 'Lab Director'),
          },
        ],
      },
      {
        id: 'doctoral',
        title: t('aboutUs.members.roles.doctoral', 'Doctoral students'),
        layout: 'photo-grid',
        members: [
          {
            name: t('aboutUs.members.names.keren_he', 'Keren He'),
            image: '/images/AboutUs/Members/keren_he.avif',
          },
          {
            name: t('aboutUs.members.names.alaa_zein', 'Alaa Zein El Abdein Marouf'),
            image: '/images/AboutUs/Members/alaa.avif',
          },
          {
            name: t('aboutUs.members.names.qi_yuanrui', 'Qi yuanrui'),
            image: '/images/AboutUs/Members/qi_yuanrui.avif',
          },
          {
            name: t('aboutUs.members.names.ding_jinhao', 'Ding Jinhao'),
            image: '/images/AboutUs/Members/ding_jinhao.avif',
          },
          {
            name: t('aboutUs.members.names.wang_qi', 'Wang Qi'),
            image: '/images/AboutUs/Members/wang_qi.avif',
          },
          {
            name: t('aboutUs.members.names.chen_shiyu', 'Chen Shiyu'),
            image: '/images/AboutUs/Members/chen_shiyu.avif',
          },
          {
            name: t('aboutUs.members.names.wang_haixin', 'Wang Haixin (Sato Mirai)'),
            image: '/images/AboutUs/Members/wang_haixin.avif',
          },
          {
            name: t('aboutUs.members.names.kimishima_fuma', 'Kimishima Fuma'),
            image: '/images/AboutUs/Members/kimishima_fuma.avif',
          },
        ],
      },
      {
        id: 'masters',
        title: t('aboutUs.members.roles.masters', 'Master students'),
        layout: 'text-grid',
        members: [
          { name: t('aboutUs.members.names.miyamoto_mizuki', 'Miyamoto Mizuki') },
          { name: t('aboutUs.members.names.iwama_kosuke', 'Iwama Kosuke') },
          { name: t('aboutUs.members.names.morita_ryugo', 'Morita Ryugo') },
          { name: t('aboutUs.members.names.yao_zhidi', 'Yao Zhidi') },
          { name: t('aboutUs.members.names.sai', 'UMMITHI Sai Jayaprakash') },
          { name: t('aboutUs.members.names.yang_yu', 'Yang Yu') },
          { name: t('aboutUs.members.names.akihiro_sakurai', 'Akihiro Sakurai') },
          { name: t('aboutUs.members.names.hiroto_sugiura', 'Hiroto Sugiura') },
          { name: t('aboutUs.members.names.riku_takahashi', 'Riku Takahashi') },
          { name: t('aboutUs.members.names.ayumu_seki', 'Ayumu Seki') },
        ],
      },
      {
        id: 'b4',
        title: t('aboutUs.members.roles.b4', 'B4 students'),
        layout: 'text-grid',
        members: [
          { name: t('aboutUs.members.names.haruto_domori', 'Haruto Domori') },
          { name: t('aboutUs.members.names.fan_wei', 'Fan Wei') },
          { name: t('aboutUs.members.names.rigen_mo', 'Rigen Mo') },
          { name: t('aboutUs.members.names.mirino_otsubo', 'Mirino Otsubo') },
          { name: t('aboutUs.members.names.shoki_masuda', 'Shoki Masuda') },
          { name: t('aboutUs.members.names.jiaqi_mei', 'Jiaqi Mei') },
          { name: t('aboutUs.members.names.ryosuke_sato', 'Ryosuke Sato') },
          { name: t('aboutUs.members.names.kohta_nakamura', 'Kohta Nakamura') },
          { name: t('aboutUs.members.names.rikuya_maeta', 'Rikuya Maeta') },
        ],
      },
      {
        id: 'b3',
        title: t('aboutUs.members.roles.b3', 'B3 students'),
        layout: 'text-grid',
        members: [
          { name: t('aboutUs.members.names.iwasaki_yota', 'Iwasaki Yota') },
          { name: t('aboutUs.members.names.asano_shunsuke', 'Asano Shunsuke') },
          { name: t('aboutUs.members.names.nakajima_sawaki', 'Nakajima Sawaki') },
          { name: t('aboutUs.members.names.ito_tomoki', 'Ito Tomoki') },
          { name: t('aboutUs.members.names.mikano_ryota', 'Mikano Ryota') },
          { name: t('aboutUs.members.names.enomoto_machika', 'Enomoto Machika') },
          { name: t('aboutUs.members.names.nonoo_gaku', 'Nonoo Gaku') },
          { name: t('aboutUs.members.names.ajiki_ren', 'Ajiki Ren') },
          { name: t('aboutUs.members.names.kashiyama_keisuke', 'Kashiyama Keisuke') },
          { name: t('aboutUs.members.names.yagihashi_kaito', 'Yagihashi Kaito') },
        ],
      },
      {
        id: 'alumni',
        title: t('aboutUs.members.roles.alumni', 'Alumni'),
        layout: 'alumni-list',
        members: [
          {
            name: t('aboutUs.members.names.jianbin_zhou', 'Jianbin Zhou'),
            destination: t('aboutUs.members.destinations.dji', 'DJI'),
          },
          {
            name: t('aboutUs.members.names.tran_thi_thu_thuy', 'Tran Thi Thu Thuy'),
            destination: t('aboutUs.members.destinations.rakuten', 'Rakuten, Tokyo'),
          },
          {
            name: t('aboutUs.members.names.nguyen_tan_ho', 'Nguyen Tan Ho'),
            destination: t('aboutUs.members.destinations.ficha', 'Ficha Inc, Tokyo, Japan'),
          },
          {
            name: t('aboutUs.members.names.gu_qirui', 'Gu Qirui'),
            destination: t(
              'aboutUs.members.destinations.thoughtworks',
              'Thoughtworks Inc, Beijing, China',
            ),
          },
          {
            name: t('aboutUs.members.names.trinh_man_hoang', 'Trinh Man Hoang'),
            destination: t('aboutUs.members.destinations.ficha', 'Ficha Inc, Tokyo, Japan'),
          },
          {
            name: t('aboutUs.members.names.minh_man_ho', 'Minh Man Ho'),
            destination: t(
              'aboutUs.members.destinations.utah',
              'University of Utah, Salt Lake City, UT',
            ),
          },
          {
            name: t('aboutUs.members.names.jirayu_peetakul', 'Jirayu Peetakul'),
            destination: t('aboutUs.members.destinations.muspace', 'muSpace Japan'),
          },
          {
            name: t('aboutUs.members.names.pham_do_kim_chi', 'Pham Do Kim Chi'),
            destination: t(
              'aboutUs.members.destinations.ando_hazama',
              'Ando Hazama Corporation, Japan',
            ),
          },
          {
            name: t('aboutUs.members.names.catherine_waithera', 'Catherine Waithera Wangari'),
            destination: t('aboutUs.members.destinations.kisii', 'Kisii University, Kenya'),
          },
          {
            name: t('aboutUs.members.names.miyoshi_hayato', 'Miyoshi Hayato'),
            destination: t('aboutUs.members.destinations.veriserve', 'Veriserve, Japan'),
          },
          {
            name: t('aboutUs.members.names.otagiri_kengo', 'Otagiri Kengo'),
            destination: t('aboutUs.members.destinations.accenture', 'Accenture, Japan'),
          },
          {
            name: t('aboutUs.members.names.kikuchi_syunshuke', 'Kikuchi Syunshuke'),
            destination: t('aboutUs.members.destinations.mitsubishi', 'Mitsubishi Electric, Japan'),
          },
          {
            name: t('aboutUs.members.names.makino_hiroya', 'Makino Hiroya'),
            destination: t('aboutUs.members.destinations.ntt_data', 'NTT DATA SMS, Japan'),
          },
          {
            name: t('aboutUs.members.names.usukura_riki', 'Usukura Riki'),
            destination: t('aboutUs.members.destinations.scsk', 'SCSK Corporation, Japan'),
          },
          {
            name: t('aboutUs.members.names.fujii_riku', 'Fujii Riku'),
            destination: t(
              'aboutUs.members.destinations.toyota',
              'TOYOTA Motor Corporation, Japan',
            ),
          },
          {
            name: t('aboutUs.members.names.hayama_hibiki', 'Hayama Hibiki'),
            destination: t('aboutUs.members.destinations.kyudenko', 'KYUDENKO Corporation, Japan'),
          },
          {
            name: t('aboutUs.members.names.zhiqiang_zhang', 'Zhiqiang Zhang'),
            destination: t(
              'aboutUs.members.destinations.swust',
              'Southwest University of Sci & Tech, China',
            ),
          },
          {
            name: t('aboutUs.members.names.fu_chen', 'Fu Chen'),
            destination: t(
              'aboutUs.members.destinations.chn_energy',
              'CHN ENERGY Investment Group',
            ),
          },
          {
            name: t('aboutUs.members.names.jiayao_xu', 'Jiayao Xu'),
            destination: t('aboutUs.members.destinations.pengcheng', 'PengCheng Laboratory'),
          },
          {
            name: t('aboutUs.members.names.yang_jian', 'Yang Jian'),
            destination: t(
              'aboutUs.members.destinations.tokyo_tech',
              'Tokyo University of Technology',
            ),
          },
          {
            name: t('aboutUs.members.names.hayashi_shinkou', 'Hayashi Shinkou'),
            destination: t('aboutUs.members.destinations.hitachi', 'Hitachi'),
          },
          {
            name: t('aboutUs.members.names.haga_shinkou', 'Haga Shinkou'),
            destination: t('aboutUs.members.destinations.capcom', 'CAPCOM CO.'),
          },
          {
            name: t('aboutUs.members.names.nakano_kyoka', 'Nakano Kyoka'),
            destination: t('aboutUs.members.destinations.sky', 'Sky'),
          },
          {
            name: t('aboutUs.members.names.xin_cheng', 'Xin Cheng'),
            destination: t(
              'aboutUs.members.destinations.swust',
              'Southwest University of Sci & Tech, China',
            ),
          },
        ],
      },
    ],
  }
})
</script>
