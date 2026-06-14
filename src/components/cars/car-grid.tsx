
"use client";

import { Car as CarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { CarCard } from "./car-card";
import { Button } from "@/components/ui/button";
import type { Car } from "@/types/car-types";
import { CarCardSkeleton } from "./car-card-skeleton";


interface CarGridProps {
  cars: Car[];
  loading?: boolean;
}

export function CarGrid({ cars, loading = false }: CarGridProps) {
  const router = useRouter();

  const handleReset = () => {
    router.push("/cars");
  };

  if (loading) {
    return (
      <section aria-label="Car listings" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <CarCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (cars.length === 0) {
    return (
      <section aria-label="Car listings" className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-zinc-400">
          <CarIcon className="h-6 w-6 stroke-[1.5]" />
        </div>
        <h3 className="mt-4 text-sm font-semibold text-zinc-900">No cars found</h3>
        <p className="mt-1 text-xs text-zinc-400">Try adjusting your filters.</p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="mt-4 border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg text-xs px-4"
        >
          Reset Filters
        </Button>
      </section>
    );
  }

  return (
    <section aria-label="Car listings" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </section>
  );
}
