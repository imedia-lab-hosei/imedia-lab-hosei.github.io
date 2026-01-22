<template>
  <AnimatedModal v-slot="{ closeModal }" v-model:open="open">
    <AnimatedModalBody :lock-scroll="false">
      <AnimatedModalContent>
        <h3 class="text-highlighted text-xl font-semibold">How to Use</h3>
        <p class="text-muted-foreground mt-4 text-sm">
          Two ways to control the modal: controlled mode with v-model, or uncontrolled mode using
          slot methods.
        </p>
        <div class="mt-6 space-y-3">
          <div class="flex items-start gap-3">
            <div class="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
            <div class="flex-1">
              <p class="text-sm font-medium text-foreground">Controlled Mode</p>
              <p class="mt-1 text-xs text-muted-foreground">
                Use v-model:open or :open with @update:open to manage state externally.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
            <div class="flex-1">
              <p class="text-sm font-medium text-foreground">Uncontrolled Mode</p>
              <p class="mt-1 text-xs text-muted-foreground">
                Use v-slot to get openModal() and closeModal() methods. Recommended for most cases.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
            <div class="flex-1">
              <p class="text-sm font-medium text-foreground">Quick Start</p>
              <p class="mt-1 text-xs text-muted-foreground">
                Copy the code from this demo and customize the content inside AnimatedModalContent.
              </p>
            </div>
          </div>
        </div>
      </AnimatedModalContent>
      <AnimatedModalFooter class="gap-2">
        <UButton color="neutral" variant="soft" label="Cancel" @click="closeModal" />
        <UButton label="Confirm" @click="closeModal" />
      </AnimatedModalFooter>
    </AnimatedModalBody>
  </AnimatedModal>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AnimatedModal',
})
const open = defineModel<boolean>('open', {
  default: false,
  required: true,
})
</script>
