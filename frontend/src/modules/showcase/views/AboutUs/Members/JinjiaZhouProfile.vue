<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
          <button
            class="text-muted-foreground hover:text-primary transition-colors"
            @click="router.push(`/${route.params.locale}/aboutUs/members`)"
          >
            {{ t('aboutUs.profile.jinjia_zhou.breadcrumb_members') }}
          </button>
          <span class="text-muted-foreground/40">/</span>
          <span class="text-primary">{{ t('aboutUs.profile.jinjia_zhou.breadcrumb_profile') }}</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-8 items-start">
          <div
            class="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden bg-muted border border-border shrink-0"
          >
            <img
              src="/images/AboutUs/Members/jinjia_zhou_new.png"
              alt="Jinjia Zhou"
              class="object-cover w-full h-full"
            />
          </div>

          <div class="flex-1 min-w-0">
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">{{ t('aboutUs.profile.jinjia_zhou.name') }}</h1>
            <p class="text-muted-foreground text-lg mb-1">
              {{ t('aboutUs.profile.jinjia_zhou.subtitle') }}
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
              >
                <UIcon name="i-heroicons-academic-cap" class="w-3.5 h-3.5" />
                {{ t('aboutUs.profile.jinjia_zhou.role') }}
              </span>
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border"
              >
                <UIcon name="i-heroicons-building-library" class="w-3.5 h-3.5" />
                {{ t('aboutUs.profile.jinjia_zhou.institution') }}
              </span>
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border"
              >
                <UIcon name="i-heroicons-cpu-chip" class="w-3.5 h-3.5" />
                {{ t('aboutUs.profile.jinjia_zhou.research_tag') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-14">
      <!-- Biography -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">
            {{ t('aboutUs.profile.jinjia_zhou.bio_title') }}
          </h2>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="space-y-4 text-base leading-relaxed text-foreground/80 max-w-4xl">
          <p>{{ t('aboutUs.profile.jinjia_zhou.bio_p1') }}</p>
          <p>{{ t('aboutUs.profile.jinjia_zhou.bio_p2') }}</p>
          <p>{{ t('aboutUs.profile.jinjia_zhou.bio_p3') }}</p>
        </div>
      </section>

      <!-- Career History -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">
            {{ t('aboutUs.profile.jinjia_zhou.career_title') }}
          </h2>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="max-w-4xl">
          <div
            v-for="item in careerItems"
            :key="item.period"
            class="flex gap-4 py-3 border-b border-border/50 last:border-0"
          >
            <span class="text-sm font-mono text-primary shrink-0 w-32">{{ item.period }}</span>
            <span class="text-sm text-foreground/80">{{ item.desc }}</span>
          </div>
        </div>
      </section>

      <!-- Awards & Recognition -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">
            {{ t('aboutUs.profile.jinjia_zhou.awards_title') }}
          </h2>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
          <div
            v-for="award in awards"
            :key="award.title"
            class="flex gap-4 p-4 rounded-2xl bg-card border border-border"
          >
            <div
              class="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"
            >
              <UIcon name="i-heroicons-trophy" class="w-4 h-4 text-primary" />
            </div>
            <div>
              <p class="font-semibold text-sm leading-snug">{{ award.title }}</p>
              <p class="text-xs text-muted-foreground mt-0.5">{{ award.year }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Academic Activities -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-1 h-6 rounded-full bg-primary" />
          <h2 class="text-xl font-bold tracking-tight">
            {{ t('aboutUs.profile.jinjia_zhou.academic_title') }}
          </h2>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="flex flex-wrap gap-2 max-w-4xl">
          <span
            v-for="item in academicItems"
            :key="item"
            class="px-3 py-1.5 rounded-xl text-sm bg-card border border-border text-foreground/70"
          >
            {{ item }}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n()

const careerItems = computed(() => {
  if (locale.value === 'ja') {
    return [
      { period: '2007年', desc: '上海交通大学　電子電気工学学部　卒業' },
      { period: '2010年', desc: '早稲田大学大学院　修士課程　修了' },
      { period: '2013年', desc: '早稲田大学大学院　博士課程　修了' },
      { period: '2011年–2013年', desc: '日本学術振興会　特別研究員（DC, PD）' },
      { period: '2013年–2016年', desc: '早稲田大学　次席研究員（研究助教）' },
      { period: '2016年–2020年', desc: '法政大学　理工学研究科　准教授' },
      { period: '2017年–2020年', desc: '復旦大学（中国）　客員研究員　兼任' },
      { period: '2017年–2021年', desc: 'JSTさきがけ研究員　兼任' },
      { period: '2020年–2021年', desc: '大阪大学　大学院情報科学研究科　特任准教授' },
      { period: '2021年–2025年', desc: '法政大学　理工学部　准教授' },
      { period: '2025年–', desc: '法政大学　IISTプログラム　ディレクター' },
      { period: '2026年4月–', desc: '法政大学　理工学部　教授' },
    ]
  }
  return [
    {
      period: '2007',
      desc: 'B.E., Electronic & Electrical Engineering, Shanghai Jiao Tong University, China',
    },
    { period: '2010', desc: 'M.E., Waseda University, Japan' },
    { period: '2013', desc: 'Ph.D., Waseda University, Japan' },
    {
      period: '2010–2013',
      desc: 'Research Fellowship, Japan Society for the Promotion of Science (DC, PD)',
    },
    {
      period: '2013–2016',
      desc: 'Junior Researcher (Research Assistant Professor), Waseda University',
    },
    {
      period: '2016–2020',
      desc: 'Associate Professor, Graduate School of Science and Engineering, Hosei University',
    },
    {
      period: '2017–2020',
      desc: 'Senior Visiting Scholar, State Key Lab of ASIC & System, Fudan University (concurrent)',
    },
    { period: '2017–2021', desc: 'JST PRESTO Researcher (concurrent)' },
    {
      period: '2020–2021',
      desc: 'Specially Appointed Associate Professor, Graduate School of Information Science and Technology, Osaka University',
    },
    {
      period: '2021–2025',
      desc: 'Associate Professor, Faculty of Science and Engineering, Hosei University',
    },
    { period: '2025–', desc: 'Director, IIST Program, Hosei University' },
    {
      period: 'Apr. 2026–',
      desc: 'Professor, Faculty of Science and Engineering, Hosei University',
    },
  ]
})

const awards = computed(() => {
  if (locale.value === 'ja') {
    return [
      { title: 'IEEE 国際会議 MMM 優秀論文賞', year: '2020年' },
      {
        title: 'ISSCC Takuo Sugano Award for Outstanding Far-East Paper',
        year: '2017年（共同受賞）',
      },
      { title: '日本画像電子工学会　優秀論文賞', year: '2016年' },
      { title: 'IEEE 国際会議 ICIP　トップ10%論文賞', year: '2014年' },
      { title: 'STARCシンポジウム　優秀発表賞', year: '2013年' },
      { title: '中国政府優秀留学生賞', year: '2012年' },
      {
        title: '半導体オブザイヤ　半導体デバイス部門優秀賞（世界初8K UHDTVデコーダLSI）',
        year: '2012年',
      },
      { title: 'ひびきの賞　最優秀賞（修士論文）', year: '2011年' },
      { title: 'ACM ISLPED Design Contest Award（3位・日本初受賞）', year: '2010年' },
      {
        title: 'IEEE VLSI Circuits Symposium Best Student Paper Award（アジア唯一の受賞）',
        year: '2010年',
      },
      { title: '日本学術振興会　特別研究員', year: '2010年' },
      { title: '大川功　情報通信学術奨学金', year: '2009年' },
      { title: 'グローバルCOEリサーチフェローシップ', year: '2008年' },
    ]
  }
  return [
    { title: 'Best Paper Award, IEEE MMM', year: '2020' },
    {
      title: 'ISSCC Takuo Sugano Award for Outstanding Far-East Paper',
      year: '2017 (co-recipient)',
    },
    { title: 'Excellent Paper Award, IIEEJ', year: '2016' },
    { title: 'Top 10% Paper Award, IEEE ICIP', year: '2014' },
    { title: 'Best Presentation Award, STARC Symposium', year: '2013' },
    { title: 'Chinese Government Award for Outstanding Students Abroad', year: '2012' },
    {
      title: 'Semiconductor of the Year Award of Japan (8K UHDTV video decoder chip)',
      year: '2012',
    },
    { title: 'Hibikino Best Thesis Award', year: '2011' },
    { title: 'ACM ISLPED Design Contest Award (3rd place; first from Japan)', year: '2010' },
    {
      title: 'IEEE VLSI Circuits Symposium Best Student Paper Award (sole Asian recipient)',
      year: '2010',
    },
    { title: 'Research Fellowship, Japan Society for the Promotion of Science', year: '2010' },
    { title: 'Okawa Foundation Research Grant', year: '2009' },
    { title: 'Global COE Research Fellowship', year: '2008' },
  ]
})

const academicItems = computed(() => {
  if (locale.value === 'ja') {
    return [
      'HPCCI 2020　国際会議プログラムチェア',
      'ICIVP 2020　テクニカルコミッティーメンバー',
      'IEEE VLSI-DAT 2018　プログラム委員',
      'IEEE Access　編集委員',
      'Computers & Electrical Engineering　編集委員',
      'Cognitive Robotics　編集委員',
      'IEEE Trans. Circuits Syst. Video Technol. (TCSVT)　査読委員',
      'IEEE Trans. Circuits Syst. I　査読委員',
      'IEEE Trans. VLSI Systems (TVLSI)　査読委員',
      'IEEE Trans. Multimedia (TMM)　査読委員',
      'Journal of Signal Processing Systems　査読委員',
    ]
  }
  return [
    'Program Chair, HPCCI 2020',
    'Technical Committee Member, ICIVP 2020',
    'Program Committee Member, IEEE VLSI-DAT 2018',
    'Associate Editor, IEEE Access',
    'Associate Editor, Computers & Electrical Engineering',
    'Editorial Board Member, Cognitive Robotics',
    'Reviewer, IEEE Trans. Circuits Syst. Video Technol. (TCSVT)',
    'Reviewer, IEEE Trans. Circuits Syst. I',
    'Reviewer, IEEE Trans. VLSI Systems (TVLSI)',
    'Reviewer, IEEE Trans. Multimedia (TMM)',
    'Reviewer, Journal of Signal Processing Systems',
  ]
})
</script>
