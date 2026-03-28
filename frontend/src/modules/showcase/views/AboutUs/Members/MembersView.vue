<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <!-- Page Header -->
    <div class="border-b border-border bg-card">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <p class="text-primary text-xs font-bold tracking-widest uppercase mb-3">About Us</p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ pageContent.title }}
        </h1>
        <p class="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {{ pageContent.description }}
        </p>
      </div>
    </div>

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

          <!-- Photo Grid (professor / doctoral) -->
          <div
            v-if="section.layout === 'photo-grid'"
            class="grid gap-6"
            :class="
              section.id === 'professor'
                ? 'grid-cols-1 max-w-xs'
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
                    ? 'group-hover:border-primary/40 group-hover:shadow-md'
                    : 'group-hover:border-border/80',
                ]"
              >
                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="member.name"
                  class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  v-else
                  class="w-full h-full flex items-center justify-center text-muted-foreground"
                >
                  <UIcon name="i-heroicons-user" class="w-10 h-10" />
                </div>

                <!-- Hover overlay — only shown when member has a link -->
                <div
                  v-if="member.link || member.internalLink"
                  class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-2"
                >
                  <UIcon
                    :name="member.internalLink ? 'i-heroicons-user-circle' : 'i-heroicons-arrow-top-right-on-square'"
                    class="w-4 h-4 text-white/80"
                  />
                </div>
              </div>

              <div class="text-center">
                <p
                  class="font-semibold text-sm transition-colors"
                  :class="[
                    section.id === 'professor' ? 'text-base' : '',
                    member.link
                      ? 'text-foreground group-hover:text-primary'
                      : 'text-foreground',
                  ]"
                >
                  {{ member.name }}
                </p>
                <p v-if="member.role" class="text-xs text-muted-foreground mt-0.5">
                  {{ member.role }}
                </p>
              </div>
            </div>
          </div>

          <!-- Text Grid (masters / b4 / b3) -->
          <div
            v-else-if="section.layout === 'text-grid'"
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            <div
              v-for="member in section.members"
              :key="member.name"
              class="flex justify-between items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card border transition-all group"
              :class="
                member.link
                  ? 'border-border hover:border-primary/40 hover:bg-primary/5 cursor-pointer'
                  : 'border-border/60 cursor-default'
              "
              @click="toLink(member.link, member.internalLink)"
            >
              <div class="flex items-center truncate gap-2.5">
                <div
                  class="w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
                  :class="
                    member.link
                      ? 'bg-primary/50 group-hover:bg-primary'
                      : 'bg-muted-foreground/30'
                  "
                />
                <span
                  class="text-sm truncate transition-colors"
                  :class="
                    member.link
                      ? 'text-foreground group-hover:text-primary'
                      : 'text-foreground/70'
                  "
                >
                  {{ member.name }}
                </span>
              </div>
              <UIcon
                v-if="member.link"
                name="i-heroicons-arrow-top-right-on-square"
                class="shrink-0 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors hidden sm:block"
              />
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
                alumnus.link
                  ? 'border-border hover:border-primary/40 hover:bg-primary/5 cursor-pointer'
                  : 'border-border/60 cursor-default'
              "
              @click="toLink(alumnus.link, alumnus.internalLink)"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div
                  class="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 transition-colors"
                  :class="alumnus.link ? 'group-hover:bg-primary/10' : ''"
                >
                  <UIcon
                    name="i-heroicons-user-circle"
                    class="w-4 h-4 transition-colors"
                    :class="
                      alumnus.link
                        ? 'text-muted-foreground group-hover:text-primary'
                        : 'text-muted-foreground/60'
                    "
                  />
                </div>
                <span
                  class="font-medium text-sm truncate transition-colors"
                  :class="
                    alumnus.link
                      ? 'text-foreground group-hover:text-primary'
                      : 'text-foreground/80'
                  "
                >
                  {{ alumnus.name }}
                </span>
                <UIcon
                  v-if="alumnus.link"
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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { memberSections } from './members'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

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
</script>
