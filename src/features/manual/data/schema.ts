import { z } from 'zod'

export const labelValues = [
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
] as const

export const manualSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum(['movie', 'image', 'pdf', 'folder']),
  status: z.enum(['published', 'private', 'draft', 'trash']),
  author: z.enum(['shota_sato', 'ichiro_suzuki', 'mao_matsumoto']),
  updatedAt: z.date(),
  labels: z.array(z.enum(labelValues)).default([]),
})

export type Manual = z.infer<typeof manualSchema>
export type LabelValue = typeof labelValues[number]