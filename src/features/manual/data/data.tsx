import { Globe, Lock, FileEdit, Trash2 } from 'lucide-react'
import { type Manual } from './schema'
import { type LucideIcon } from 'lucide-react'

export type ManualStatus = Manual['status']
export type ManualType = Manual['type']
export type Author = {
  value: string
  label: string
}

export type IconType = LucideIcon | string

interface StatusItem {
  value: ManualStatus
  label: string
  icon: LucideIcon
}

interface TypeItem {
  value: ManualType
  label: string
  icon: string
}

export const statuses: Record<ManualStatus, StatusItem> = {
  published: {
    value: 'published',
    label: '公開中',
    icon: Globe,
  },
  private: {
    value: 'private',
    label: '非公開',
    icon: Lock,
  },
  draft: {
    value: 'draft',
    label: '下書き',
    icon: FileEdit,
  },
  trash: {
    value: 'trash',
    label: 'ゴミ箱',
    icon: Trash2,
  },
} as const

export const types: Record<ManualType, TypeItem> = {
  movie: {
    value: 'movie',
    label: '動画マニュアル',
    icon: '/assets/manual_mov.svg',
  },
  image: {
    value: 'image',
    label: '画像',
    icon: '/assets/manual_img.svg',
  },
  pdf: {
    value: 'pdf',
    label: 'PDF',
    icon: '/assets/manual_pdf.png',
  },
  folder: {
    value: 'folder',
    label: 'フォルダ',
    icon: '/assets/folder.svg',
  },
} as const

export const labels = [
  {
    value: 'warehouse',
    label: '倉庫',
  },
  {
    value: 'shipping',
    label: '出荷',
  },
  {
    value: 'onboarding',
    label: 'オンボーディング',
  },
  {
    value: 'receiving',
    label: '入荷',
  },
  {
    value: 'inspection',
    label: '検品',
  },
  {
    value: 'sorting',
    label: '仕分け',
  },
  {
    value: 'picking',
    label: 'ピッキング',
  },
  {
    value: 'packing',
    label: '梱包',
  },
  {
    value: 'inventory',
    label: '在庫管理',
  },
  {
    value: 'delivery',
    label: '配送',
  },
  {
    value: 'route_planning',
    label: '配送ルート計画',
  },
  {
    value: 'vehicle_inspection',
    label: '車両点検',
  },
  {
    value: 'temperature_control',
    label: '温度管理',
  },
  {
    value: 'cold_chain',
    label: 'コールドチェーン',
  },
  {
    value: 'frozen_delivery',
    label: '冷凍配送',
  },
  {
    value: 'refrigerated_delivery',
    label: '冷蔵配送',
  },
  {
    value: 'safety',
    label: '安全管理',
  },
  {
    value: 'forklift_safety',
    label: 'フォークリフト安全',
  },
  {
    value: 'driving_safety',
    label: '安全運転',
  },
  {
    value: 'accident_prevention',
    label: '事故防止',
  },
  {
    value: 'emergency',
    label: '緊急対応',
  },
  {
    value: 'forklift_operation',
    label: 'フォークリフト操作',
  },
  {
    value: 'hand_truck',
    label: '手押し台車',
  },
  {
    value: 'pallet_jack',
    label: 'パレットジャッキ',
  },
  {
    value: 'conveyor',
    label: 'コンベア',
  },
  {
    value: 'scanner',
    label: 'スキャナー',
  },
  {
    value: 'handy_terminal',
    label: 'ハンディターミナル',
  },
  {
    value: 'quality_control',
    label: '品質管理',
  },
  {
    value: 'damage_prevention',
    label: '破損防止',
  },
  {
    value: 'expiration_date',
    label: '賞味期限管理',
  },
  {
    value: 'lot_control',
    label: 'ロット管理',
  },
  {
    value: 'customer_service',
    label: '接客対応',
  },
  {
    value: 'communication',
    label: 'コミュニケーション',
  },
  {
    value: 'team_coordination',
    label: 'チーム連携',
  },
  {
    value: 'reporting',
    label: '報告・連絡',
  },
  {
    value: 'hazardous_materials',
    label: '危険物取扱',
  },
  {
    value: 'heavy_cargo',
    label: '重量物',
  },
  {
    value: 'precision_instruments',
    label: '精密機器',
  },
  {
    value: 'fragile_items',
    label: '割れ物',
  },
  {
    value: 'wms',
    label: '倉庫管理システム',
  },
  {
    value: 'tms',
    label: '配送管理システム',
  },
  {
    value: 'inventory_system',
    label: '在庫システム',
  },
  {
    value: 'mobile_app',
    label: 'モバイルアプリ',
  },
  {
    value: 'compliance',
    label: 'コンプライアンス',
  },
  {
    value: 'driving_regulations',
    label: '運転規制',
  },
  {
    value: 'work_regulations',
    label: '労働規則',
  },
  {
    value: 'eco_driving',
    label: 'エコドライブ',
  },
  {
    value: 'waste_management',
    label: '廃棄物管理',
  },
  {
    value: 'recycling',
    label: 'リサイクル',
  },
  {
    value: 'new_employee',
    label: '新人教育',
  },
  {
    value: 'skill_improvement',
    label: 'スキル向上',
  },
  {
    value: 'certification',
    label: '資格取得',
  }
] as const

export const authors: Author[] = [
  {
    value: 'shota_sato',
    label: '佐藤翔太',
  },
  {
    value: 'ichiro_suzuki',
    label: '鈴木一郎',
  },
  {
    value: 'mao_matsumoto',
    label: '松本真央',
  },
]