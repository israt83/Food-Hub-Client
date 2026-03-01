"use client";

import { Button } from "@/components/ui/button";
import { Provider } from "@/types";
import { ArrowRight, MapPin, Star, Utensils } from "lucide-react";
import Link from "next/link";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="group relative bg-card border-2 border-amber-200 rounded-[2rem] p-5 transition-all duration-500 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">

      {/* ================= IMAGE SECTION ================= */}
      <div className="relative mb-5 h-48 w-full overflow-hidden rounded-[1.5rem] bg-muted">

        {provider.image ? (
          <img
            src={provider.image}
            alt={provider.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center  text-amber-600">
            <Utensils size={40} strokeWidth={1.5} />
          </div>
        )}

        {/* Status Badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md border shadow-sm ${
            provider.isOpen
              ? "bg-gradient-to-r from-amber-500 to-orange-500 border-amber-400 text-white"
              : "bg-black/60 border-white/20 text-white"
          }`}
        >
          {provider.isOpen ? "• Open Now" : "Closed"}
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="space-y-4">

        {/* Title + Rating */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black uppercase tracking-tight truncate group-hover:text-amber-600 transition-colors">
              {provider.name}
            </h3>

            <div className="flex items-center gap-1 text-amber-500">
              <Star size={12} fill="currentColor" />
              <span className="text-[10px] font-black">4.9</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin size={12} className="text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider truncate">
              {provider.address || "Local Kitchen"}
            </span>
          </div>
        </div>

        {/* Description */}
        {provider.description && (
          <p className="line-clamp-2 text-xs font-medium text-muted-foreground leading-relaxed italic">
            "{provider.description}"
          </p>
        )}

        {/* ================= FOOTER ================= */}
        <div className="flex items-center justify-between pt-2 border-t border-amber-100">

          <span className="text-[10px] font-black uppercase text-amber-600 tracking-widest">
            {provider.mealsCount || 0} Signature Dishes
          </span>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-8 px-0 hover:bg-transparent"
            disabled={!provider.isOpen}
          >
            <Link
              href={`/providers/${provider.id}`}
              className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-foreground hover:text-amber-600 transition-colors"
            >
              View Menu
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        {/* ================= MAIN CTA ================= */}
        <Button
          asChild
          className={`w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg transition-all ${
            provider.isOpen
              ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-amber-500/30 text-white"
              : "bg-muted text-muted-foreground pointer-events-none"
          }`}
        >
          <Link href={`/providers/${provider.id}`}>
            {provider.isOpen ? "Order Now" : "Currently Offline"}
          </Link>
        </Button>

      </div>
    </div>
  );
}