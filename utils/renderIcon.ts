import { NIcon } from 'naive-ui'

export async function renderIcon (icon: string): Promise<Function> {
    const { [icon]: iconCompontent } = await import('@vicons/ionicons5')
    return () => h(NIcon, null, { default: () => h(iconCompontent) })
}
