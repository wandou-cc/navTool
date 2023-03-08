// import type { IncomingMessage, ServerResponse } from 'http'

// export default async (req: IncomingMessage, res: ServerResponse) => {
//     let headerMenuList = [
//         {
//             label: '导航',
//             key: '1',
//             url: '/home',
//         },
//         {
//             label: '送书',
//             key: '2',
//             url: '/userAbout',
//         }, {
//             label: '技术',
//             key: '3',
//             url: '/home',
//             children: [
//                 {
//                     label: 'js',
//                     key: '3.1',
//                     url: '/home',
//                     icon: 'BookOutline',
//                 }
//             ]
//         }
//     ]
//     console.log(headerMenuList)
//     res.end(headerMenuList)
// }
export default defineEventHandler((event) => {
    return {
        name: 1
    }
})
