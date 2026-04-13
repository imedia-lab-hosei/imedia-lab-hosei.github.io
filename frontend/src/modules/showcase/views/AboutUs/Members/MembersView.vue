<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <button
      type="button"
      class="relative block w-full overflow-hidden border-b border-border bg-card text-left cursor-zoom-in"
      aria-label="Open hero image preview"
      @click="isHeroPreviewOpen = true"
    >
      <img
        src="/images/AboutUs/Members/lab.png"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 h-[115%] w-full object-cover will-change-transform"
        :style="{ transform: `translateY(${heroParallaxOffset}px)` }"
      />
      <div class="absolute inset-0 bg-black/55" />
      <div class="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/20" />

      <div class="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
        <p class="text-primary-foreground/80 text-xs font-bold tracking-widest uppercase mb-3">
          About Us
        </p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          {{ pageContent.title }}
        </h1>
        <p class="text-white/80 text-lg leading-relaxed max-w-2xl">
          {{ pageContent.description }}
        </p>
      </div>
    </button>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <template v-for="section in pageContent.sections" :key="section.id">
        <section>
          <!-- Section Title -->
          <div class="flex items-center gap-4 mb-10">
            <div class="w-1 h-6 rounded-full bg-primary" />
            <h2 class="text-xl font-bold tracking-tight text-foreground">
              {{ section.title }}
            </h2>
            <div class="flex-1 h-px bg-border" />
            <span class="text-xs text-muted-foreground font-mono tabular-nums">
              {{ section.members.length }}
            </span>
          </div>

          <!-- Member Card Grid (professor / doctoral / masters / b4 / b3) -->
          <div
            v-if="section.layout === 'photo-grid' || section.layout === 'text-grid'"
            class="grid gap-6"
            :class="
              section.id === 'professor'
                ? 'grid-cols-1 max-w-xs'
                : section.layout === 'text-grid'
                  ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
            "
          >
            <div
              v-for="member in section.members"
              :key="member.name"
              class="group flex flex-col items-center gap-3"
              :class="member.link || member.internalLink ? 'cursor-pointer' : 'cursor-default'"
              @click="toLink(member.link, member.internalLink)"
            >
              <div
                class="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted border border-border transition-all duration-300"
                :class="[
                  section.id === 'professor' ? 'rounded-3xl' : '',
                  member.link || member.internalLink
                    ? 'group-hover:border-primary/40 group-hover:shadow-lg group-hover:-translate-y-0.5'
                    : 'group-hover:border-border/80',
                ]"
              >
                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="member.name"
                  class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  :style="{ objectPosition: member.imagePosition ?? 'center 28%' }"
                />
                <div
                  v-else
                  class="w-full h-full p-4"
                >
                  <div
                    class="w-full h-full rounded-[inherit] border border-border/70 bg-muted/40 flex flex-col items-center justify-center gap-3"
                  >
                    <div
                      class="w-18 h-18 rounded-full border border-border/80 bg-background/80 flex items-center justify-center"
                    >
                      <span class="text-lg font-semibold tracking-wide text-muted-foreground">
                        {{ getMemberInitials(member.name) }}
                      </span>
                    </div>
                    <div class="space-y-2 w-24">
                      <div class="h-2 rounded-full bg-border/80" />
                      <div class="h-2 rounded-full bg-border/60 w-4/5 mx-auto" />
                    </div>
                  </div>
                </div>

                <div
                  v-if="member.link || member.internalLink"
                  class="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/28 px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm"
                >
                  <UIcon
                    :name="
                      member.internalLink
                        ? 'i-heroicons-user-circle'
                        : 'i-heroicons-arrow-top-right-on-square'
                    "
                    class="w-3 h-3"
                  />
                  <span>{{
                    member.internalLink
                      ? t('aboutUs.members.linkLabels.profile', 'Profile')
                      : t('aboutUs.members.linkLabels.homepage', 'Homepage')
                  }}</span>
                </div>

                <!-- Hover overlay — only shown when member has a link -->
                <div
                  v-if="member.link || member.internalLink"
                  class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-2"
                >
                  <UIcon
                    :name="
                      member.internalLink
                        ? 'i-heroicons-user-circle'
                        : 'i-heroicons-arrow-top-right-on-square'
                    "
                    class="w-4 h-4 text-white/80"
                  />
                </div>
              </div>

              <div class="text-center">
                <p
                  class="font-semibold text-sm transition-colors"
                  :class="[
                    section.id === 'professor' ? 'text-base' : '',
                    member.link || member.internalLink
                      ? 'text-foreground group-hover:text-primary'
                      : 'text-foreground',
                  ]"
                >
                  {{ member.name }}
                </p>
                <p
                  v-if="member.internalLink"
                  class="text-[11px] text-muted-foreground mt-1 transition-colors"
                  :class="member.internalLink ? 'group-hover:text-primary' : ''"
                >
                  {{ t('aboutUs.members.linkDescriptions.viewProfile', 'View profile') }}
                </p>
                <p v-if="member.role" class="text-xs text-muted-foreground mt-0.5">
                  {{ member.role }}
                </p>
              </div>
            </div>
          </div>

          <!-- Alumni List -->
          <div
            v-else-if="section.layout === 'alumni-list'"
            class="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <div
              v-for="alumnus in section.members"
              :key="alumnus.name"
              class="flex items-center justify-between gap-4 px-5 py-3.5 rounded-xl bg-card border transition-all group"
              :class="
                alumnus.link || alumnus.internalLink
                  ? 'border-border hover:border-primary/40 hover:bg-primary/5 cursor-pointer'
                  : 'border-border/60 cursor-default'
              "
              @click="toLink(alumnus.link, alumnus.internalLink)"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div
                  class="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 transition-colors"
                  :class="alumnus.link || alumnus.internalLink ? 'group-hover:bg-primary/10' : ''"
                >
                  <UIcon
                    name="i-heroicons-user-circle"
                    class="w-4 h-4 transition-colors"
                    :class="
                      alumnus.link || alumnus.internalLink
                        ? 'text-muted-foreground group-hover:text-primary'
                        : 'text-muted-foreground/60'
                    "
                  />
                </div>
                <span
                  class="font-medium text-sm truncate transition-colors"
                  :class="
                    alumnus.link || alumnus.internalLink
                      ? 'text-foreground group-hover:text-primary'
                      : 'text-foreground/80'
                  "
                >
                  {{ alumnus.name }}
                </span>
                <UIcon
                  v-if="alumnus.link || alumnus.internalLink"
                  name="i-heroicons-arrow-top-right-on-square"
                  class="shrink-0 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors hidden sm:block"
                />
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <UIcon
                  name="i-heroicons-building-office-2"
                  class="w-3.5 h-3.5 text-muted-foreground"
                />
                <span class="text-xs text-muted-foreground text-right max-w-36 leading-tight">
                  {{ alumnus.destination }}
                </span>
              </div>
            </div>
          </div>
        </section>
      </template>
    </div>

    <div
      v-if="isHeroPreviewOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
      @click="isHeroPreviewOpen = false"
    >
      <div class="relative max-w-6xl w-full" @click.stop>
        <button
          type="button"
          class="absolute -top-12 right-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close hero image preview"
          @click="isHeroPreviewOpen = false"
        >
          <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
        </button>
        <img
          src="/images/AboutUs/Members/lab2.png"
          alt="Members hero background"
          class="w-full max-h-[84vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { memberSections } from './members'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const heroParallaxOffset = ref(0)
const isHeroPreviewOpen = ref(false)

const pageContent = computed(() => ({
  title: t('aboutUs.members.pageTitle', 'Our Members'),
  description: t(
    'aboutUs.members.pageDescription',
    'Meet the brilliant minds and researchers driving our academic excellence forward.',
  ),
  sections: memberSections.map((section) => ({
    ...section,
    title: t(`aboutUs.members.roles.${section.titleKey}`, section.titleKey),
    members: section.members.map((member) => ({
      ...member,
      name: t(`aboutUs.members.names.${member.nameKey}`, member.name),
      role: member.roleKey ? t(`aboutUs.members.roles.${member.roleKey}`) : undefined,
      destination: member.destinationKey
        ? t(`aboutUs.members.destinations.${member.destinationKey}`)
        : undefined,
    })),
  })),
}))

const toLink = (link: string | undefined, internalLink: string | undefined) => {
  if (internalLink) {
    router.push(`/${route.params.locale}/aboutUs/members/${internalLink}`)
  } else if (link) {
    window.open(link, '_blank')
  }
}

const getMemberInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

const updateHeroParallax = () => {
  heroParallaxOffset.value = Math.min(window.scrollY * 0.28, 72)
}

onMounted(() => {
  updateHeroParallax()
  window.addEventListener('scroll', updateHeroParallax, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeroParallax)
})
</script>
