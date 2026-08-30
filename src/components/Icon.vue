<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'menu'">
      <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
    </template>
    <template v-else-if="name === 'close'">
      <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
    </template>
    <template v-else-if="name === 'arrow-up'">
      <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5,12 12,5 19,12" />
    </template>
    <template v-else-if="name === 'arrow-right'">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3,7 12,13 21,7" />
    </template>
    <template v-else-if="name === 'chat'">
      <path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </template>
    <template v-else-if="name === 'code'">
      <polyline points="9,7 4,12 9,17" /><polyline points="15,7 20,12 15,17" />
    </template>
    <template v-else-if="name === 'briefcase'">
      <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="3" y1="13" x2="21" y2="13" />
    </template>
    <template v-else-if="name === 'layout'">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="9" x2="9" y2="21" />
    </template>
    <template v-else-if="name === 'nodes'">
      <circle cx="7" cy="12" r="3" /><circle cx="17" cy="12" r="3" /><line x1="10" y1="12" x2="14" y2="12" />
    </template>
    <template v-else-if="name === 'git-branch'">
      <line x1="6" y1="3" x2="6" y2="15" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
    </template>
    <template v-else-if="name === 'database'">
      <ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </template>
    <template v-else-if="name === 'clipboard'">
      <rect x="6" y="4" width="12" height="17" rx="2" /><rect x="9" y="2" width="6" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="15" y2="16" />
    </template>
    <template v-else-if="name === 'star'">
      <polygon points="12,2 15,9 22,9.5 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9.5 9,9" />
    </template>
    <template v-else-if="name === 'award'">
      <circle cx="12" cy="8" r="6" /><polyline points="8.5,13.5 6,22 12,18.5 18,22 15.5,13.5" />
    </template>
    <template v-else-if="name === 'users'">
      <path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M22 20v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" />
    </template>
    <template v-else-if="name === 'factory'">
      <path d="M3 21V11l5 3v-3l5 3V9l5 3v9z" /><line x1="3" y1="21" x2="21" y2="21" />
    </template>
    <template v-else-if="name === 'leaf'">
      <path d="M4 20c8 1 14-4 15-15-8 0-14 6-15 15z" /><path d="M4 20c2-6 6-10 11-12" />
    </template>
    <template v-else-if="name === 'network'">
      <circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><line x1="6.7" y1="7.2" x2="11" y2="16.5" /><line x1="17.3" y1="7.2" x2="13" y2="16.5" />
    </template>
    <template v-else-if="name === 'book'">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 5.5v15" />
    </template>
    <template v-else-if="name === 'check'">
      <polyline points="5,13 10,18 19,7" />
    </template>
    <template v-else-if="name === 'download'">
      <path d="M12 3v12" /><polyline points="7,10 12,15 17,10" /><line x1="4" y1="20" x2="20" y2="20" />
    </template>
  </svg>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>
