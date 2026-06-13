"use client";

import { useState, useEffect } from "react";
import { cars } from "@/data/cars";
import { CarGrid } from "@/components/cars/car-grid";

export default function CarsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest block mb-2">
          Used Cars · Verified · Trusted
        </span>
        <h1 className="text-2xl font-semibold text-zinc-900">
          Find Your Next Car
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          {cars.length} cars available across India
        </p>
        <div className="mt-8 border-b border-zinc-100" />
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <CarGrid cars={cars} loading={loading} />
      </section>
    </main>
  );
}
