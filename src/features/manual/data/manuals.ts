import { type Manual } from './schema'
import { type ManualStatus, type ManualType } from './data'
import { type LabelValue } from './schema'

export const manuals: Manual[] = [
  {
    id: '1',
    title: '倉庫作業の基本操作マニュアル',
    type: 'movie',
    status: 'published',
    author: 'shota_sato',
    updatedAt: new Date('2024-12-18'),
    labels: ['warehouse'],
  },
  {
    id: '2',
    title: '出荷手続き基本マニュアル',
    type: 'pdf',
    status: 'published',
    author: 'mao_matsumoto',
    updatedAt: new Date('2024-12-15'),
    labels: ['shipping'],
  },
  {
    id: '3',
    title: '物流業務スタートガイド',
    type: 'image',
    status: 'private',
    author: 'ichiro_suzuki',
    updatedAt: new Date('2024-12-15'),
    labels: ['onboarding'],
  },
  {
    id: '4',
    title: '倉庫業務フォルダ',
    type: 'folder',
    status: 'draft',
    author: 'shota_sato',
    updatedAt: new Date('2024-12-13'),
    labels: ['warehouse'],
  },
  ...Array.from({ length: 200 }, (_, i) => {
    const types: ManualType[] = ['movie', 'pdf', 'image', 'folder']
    const statuses: ManualStatus[] = ['published', 'private', 'draft', 'trash']
    const authors = ['shota_sato', 'mao_matsumoto', 'ichiro_suzuki'] as const
    const labels: LabelValue[] = [
      'warehouse', 'shipping', 'onboarding', 'receiving', 'inspection', 'sorting',
      'picking', 'packing', 'inventory', 'delivery', 'route_planning', 'vehicle_inspection',
      'temperature_control', 'cold_chain', 'frozen_delivery', 'refrigerated_delivery',
      'safety', 'forklift_safety', 'driving_safety', 'accident_prevention', 'emergency',
      'forklift_operation', 'hand_truck', 'pallet_jack', 'conveyor', 'scanner',
      'handy_terminal', 'quality_control', 'damage_prevention', 'expiration_date',
      'lot_control', 'customer_service', 'communication', 'team_coordination',
      'reporting', 'hazardous_materials', 'heavy_cargo', 'precision_instruments',
      'fragile_items', 'wms', 'tms', 'inventory_system', 'mobile_app', 'compliance',
      'driving_regulations', 'work_regulations', 'eco_driving', 'waste_management',
      'recycling', 'new_employee', 'skill_improvement', 'certification'
    ]

    return {
      id: (i + 5).toString(),
      title: `マニュアル ${i + 5}`,
      type: types[i % types.length],
      status: statuses[i % statuses.length],
      author: authors[i % authors.length],
      updatedAt: new Date(2024, i % 12, (i % 30) + 1),
      labels: [
        labels[i % labels.length],
        labels[(i + 7) % labels.length],
        labels[(i + 13) % labels.length],
        labels[(i + 23) % labels.length],
        labels[(i + 33) % labels.length],
        labels[(i + 43) % labels.length],
        labels[(i + 53) % labels.length],
      ].slice(0, (i % 6) + 1),
    }
  })
]