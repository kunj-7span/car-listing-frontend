"use client"

import { ChevronDown } from "lucide-react"
import { useCarStore } from "@/store/use-car-store"
import { FILTER_OPTIONS, SortOption } from "@/lib/car-utils"

export function CarSort() {
  const { filters, setSortBy } = useCarStore()

  return (
    <div className="relative">
      <select
        value={filters.sortBy}
        onChange={(e) => setSortBy(e.target.value as SortOption)}
        className="h-9 pl-3 pr-8 text-sm text-zinc-600 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl cursor-pointer focus:outline-none focus:border-zinc-400 transition-colors duration-200 appearance-none"
      >
        {FILTER_OPTIONS.sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 w-3.5 h-3.5" />
    </div>
  )
}
