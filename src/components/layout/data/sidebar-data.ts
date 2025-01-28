import { AudioWaveform, Command, GalleryVerticalEnd, BookText, Building, Users, SquareArrowOutUpRight } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'xmile',
    email: 'xmiledev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: '教育管理Sass',
      logo: Command,
      plan: 'マネージャー',
    },
    {
      name: '教育管理Sass',
      logo: GalleryVerticalEnd,
      plan: 'スタッフ',
    },
    {
      name: '教育管理Sass',
      logo: AudioWaveform,
      plan: 'ワーカー',
    },
  ],
  navGroups: [
    // {
    //   title: 'General',
    //   items: [
    //     {
    //       title: 'Dashboard',
    //       url: '/',
    //       icon: IconLayoutDashboard,
    //     },
    //     {
    //       title: 'Tasks',
    //       url: '/tasks',
    //       icon: IconChecklist,
    //     },
    //     // {
    //     //   title: 'Apps',
    //     //   url: '/apps',
    //     //   icon: IconPackages,
    //     // },
    //     // {
    //     //   title: 'Chats',
    //     //   url: '/chats',
    //     //   badge: '3',
    //     //   icon: IconMessages,
    //     // },
    //     {
    //       title: 'Users',
    //       url: '/users',
    //       icon: IconUsers,
    //     },
    //   ],
    // },
    // {
      // title: 'Pages',
      // items: [
        // {
        //   title: 'Auth',
        //   icon: IconLockAccess,
        //   items: [
        //     {
        //       title: 'Sign In',
        //       url: '/sign-in',
        //     },
        //     {
        //       title: 'Sign In (2 Col)',
        //       url: '/sign-in-2',
        //     },
        //     {
        //       title: 'Sign Up',
        //       url: '/sign-up',
        //     },
        //     {
        //       title: 'Forgot Password',
        //       url: '/forgot-password',
        //     },
        //     {
        //       title: 'OTP',
        //       url: '/otp',
        //     },
        //   ],
        // },
        // {
        //   title: 'Errors',
        //   icon: IconBug,
        //   items: [
        //     {
        //       title: 'Unauthorized',
        //       url: '/401',
        //       icon: IconLock,
        //     },
        //     {
        //       title: 'Forbidden',
        //       url: '/403',
        //       icon: IconUserOff,
        //     },
        //     {
        //       title: 'Not Found',
        //       url: '/404',
        //       icon: IconError404,
        //     },
        //     {
        //       title: 'Internal Server Error',
        //       url: '/500',
        //       icon: IconServerOff,
        //     },
        //     {
        //       title: 'Maintenance Error',
        //       url: '/503',
        //       icon: IconBarrierBlock,
        //     },
        //   ],
        // },
      // ],
    // },
    {
      title: 'マニュアル管理',
      items: [
        {
          title: 'マニュアル',
          icon: BookText,
          items: [
            {
              title: '公開中',
              url: '/manuals/published',
            },
            {
              title: '非公開',
              url: '/tasks?status=private',
            },
            {
              title: '下書き',
              url: '/tasks?status=draft',
            },
            {
              title: 'ゴミ箱',
              url: '/tasks?status=trash',
            },
          ],
        },
      ],
    },
    {
      title: '管理',
      items: [
        {
          title: '組織設定',
          url: '/settings/display',
          icon: Building,
        },
        {
          title: 'アカウント設定',
          url: '/settings/account',
          icon: Users,
        },
      ]
      // items: [
      //   {
      //     title: '組織設定',
      //     icon: IconSettings,
      //     items: [
      //       {
      //         title: 'Profile',
      //         url: '/settings',
      //         icon: IconUserCog,
      //       },
      //       {
      //         title: 'Account',
      //         url: '/settings/account',
      //         icon: IconTool,
      //       },
      //       {
      //         title: 'Appearance',
      //         url: '/settings/appearance',
      //         icon: IconPalette,
      //       },
      //       {
      //         title: 'Notifications',
      //         url: '/settings/notifications',
      //         icon: IconNotification,
      //       },
      //       {
      //         title: 'Display',
      //         url: '/settings/display',
      //         icon: IconBrowserCheck,
      //       },
      //     ],
      //   },
        // {
        //   title: 'Help Center',
        //   url: '/help-center',
        //   icon: IconHelp,
        // },
      // ],
    },
    // 外部リンクに対応したフラグとリンク管理
    {
      title: '外部リンク',
      items: [
        {
          title: 'ロジポケ',
          url: 'https://yourtruck.jp',
          icon: SquareArrowOutUpRight,
          isExternal: true,
        },
        {
          title: 'モビポケ',
          url: 'https://bus.yourtruck.jp/',
          icon: SquareArrowOutUpRight,
          isExternal: true,
        },
      ],
    },
  ],
}
