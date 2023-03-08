<template>
    <n-layout>
        <n-layout-header bordered class="c-navtool-header">
            {{ resMenuData }}
            <n-menu mode="horizontal" :options="menuOptions" />
        </n-layout-header>
    </n-layout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { renderIcon } from '@/utils/renderIcon'

interface menuOption {
    label: String,
    key: String,
    icon?: String,
    url: String,
    children?: Array<Object>
}
const resMenuData: Array<menuOption> = reactive([])
const menuOptions = reactive([])

const getOption = async (menu) => {
    return {
        label: menu.label,
        key: menu.key,
        url: menu.url,
        icon: menu.icon && await renderIcon(menu.icon),
        children: menu?.children
    }
}

// icon: please refer to the: https://ionic.io/ionicons/ name 改成大驼峰
onMounted(async () => {
    console.log('执行mounted')
    //    let resMenuData =  useFetch('/api/menu/headetMenuList').then(res=>{
    //         console.log(res)
    //    })
    //    console.log(resMenuData.data)

    const resMenuData = [
        {
            label: '导航',
            key: '1',
            url: '/home'
        },
        {
            label: '送书',
            key: '2',
            url: '/userAbout'
        }, {
            label: '技术',
            key: '3',
            url: '/home',
            children: [
                {
                    label: 'js',
                    key: '3.1',
                    url: '/home',
                    icon: 'BookOutline'
                }
            ]
        }
    ]

    await getMenu(resMenuData)
})

async function getMenu (menuItem: Array<menuOption>) {
    await Promise.all(
        menuItem.map(async (item) => {
            if (item.children && item.children.length !== 0) {
                const children = await Promise.all(
                    item.children.map(async (childrenItem: any) => await getOption(childrenItem))
                )
                const menu = await getOption(item)
                menu.children = children
                return menu
            } else {
                return await getOption(item)
            }
        })
    )
    // .then(res => {
    //     menuOptions.push(...res)
    // })
}

</script>
