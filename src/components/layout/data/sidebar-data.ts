import { AudioWaveform, Command, GalleryVerticalEnd, BookText, Building, Users, SquareArrowOutUpRight, HelpCircle } from 'lucide-react'
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
              url: '/manuals/private',
            },
            {
              title: '下書き',
              url: '/manuals/draft',
            },
            {
              title: 'ゴミ箱',
              url: '/manuals/trash',
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
    },
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
    {
      title: 'ヘルプ',
      items: [
        {
          title: 'ヘルプ',
          icon: HelpCircle,
          items: [
            {
              title: 'お問い合わせ',
              url: 'https://www.xmile.co.jp/',
              isExternal: true,
            },
            {
              title: '利用規約',
              url: 'https://www.xmile.co.jp/',
              isExternal: true,
            },
            {
              title: 'プライバシーポリシー',
              url: 'https://www.xmile.co.jp/',
              isExternal: true,
            },
            {
              title: '企業情報',
              url: 'https://www.xmile.co.jp/',
              isExternal: true,
            },
            {
              title: 'サービスについて',
              url: 'https://www.xmile.co.jp/',
              isExternal: true,
            },
          ],
        },
      ],
    },
  ],
}
