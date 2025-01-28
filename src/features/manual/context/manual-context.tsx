import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Manual } from '@/features/manual/data/schema'
import { manuals as initialManuals } from '@/features/manual/data/manuals'

interface ManualContextType {
  manuals: Manual[]
  setManuals: (manuals: Manual[]) => void
  selectedManuals: Manual[]
  setSelectedManuals: (manuals: Manual[]) => void
  isImportDialogOpen: boolean
  setIsImportDialogOpen: (isOpen: boolean) => void
  isMutateDrawerOpen: boolean
  setIsMutateDrawerOpen: (isOpen: boolean) => void
  selectedManual: Manual | null
  setSelectedManual: (manual: Manual | null) => void
}

const ManualContext = createContext<ManualContextType | undefined>(undefined)

export function ManualProvider({ children }: { children: ReactNode }) {
  const [manuals, setManuals] = useState<Manual[]>(initialManuals)
  const [selectedManuals, setSelectedManuals] = useState<Manual[]>([])
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false)
  const [isMutateDrawerOpen, setIsMutateDrawerOpen] = useState(false)
  const [selectedManual, setSelectedManual] = useState<Manual | null>(null)

  return (
    <ManualContext.Provider
      value={{
        manuals,
        setManuals,
        selectedManuals,
        setSelectedManuals,
        isImportDialogOpen,
        setIsImportDialogOpen,
        isMutateDrawerOpen,
        setIsMutateDrawerOpen,
        selectedManual,
        setSelectedManual,
      }}
    >
      {children}
    </ManualContext.Provider>
  )
}

export function useManual() {
  const context = useContext(ManualContext)
  if (context === undefined) {
    throw new Error('useManual must be used within a ManualProvider')
  }
  return context
} 