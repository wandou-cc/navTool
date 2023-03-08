<template>
    <n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale" inline-theme-disabled>
        <appHeader />
        <NuxtPage />
    </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import type { GlobalTheme, NLocale, NDateLocale } from 'naive-ui'
const theme = ref<GlobalTheme | null>(null)
const locale = ref<NLocale | null>(null)
const dateLocale = ref<NDateLocale | null>(null)

</script>
