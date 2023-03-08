<template>
    <div>
        <NuxtLayout>
            <template #leftMenu>
                <n-layout-sider :collapsed-width="64" bordered show-trigger collapse-mode="width" :width="240"
                                :native-scrollbar="false" boe>
                    <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
                </n-layout-sider>
            </template>

            <template #content>
                <n-layout-content content-style="padding: 24px;">
                    主要文件内容
                </n-layout-content>
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup>
</script>

<style></style>
