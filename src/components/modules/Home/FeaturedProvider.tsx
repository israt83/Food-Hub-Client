"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, ShieldCheck, Star, Store, Utensils } from "lucide-react";
import Link from "next/link";

type Provider = {
  id: string;
  restaurantName: string;
  description?: string;
  isOpen: boolean;
};

export function FeaturedProviders({ providers }: { providers: any }) {
  const providerList = Array.isArray(providers)
    ? providers
    : providers?.data || [];

  const displayProviders = providerList.slice(0, 3);

  return (
    <section className="relative py-24  overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full " />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full " />

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 text-center md:text-left">
            <Badge
              variant="outline"
              className="border-amber-500 text-amber-600  px-4 py-1 rounded-full"
            >
              ✨ Verified Kitchens
            </Badge>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Restaurants
              </span>
            </h2>

            <p className="max-w-xl text-lg text-muted-foreground">
              Discover trusted local providers known for their quality, hygiene,
              and incredible taste.
            </p>
          </div>

          {/* Button - Gradient Amber */}
          <Button
            asChild
            className="hidden md:flex rounded-full h-12 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-amber-500/40 transition-all hover:-translate-y-1"
          >
            <Link href="/providers" className="flex items-center gap-2">
              Explore All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TooltipProvider>
            {displayProviders.map((provider: Provider) => (
             <Card
  key={provider.id}
  className="group relative flex flex-col overflow-hidden border-2 border-amber-500/40  shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-300/20"
>

  {/* 🔥 TOP SECTION (Left Icon + Right Status) */}
  <div className="flex items-center justify-between p-6 pb-0">

    {/* Left Icon (Better Food Related Icon) */}
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 shadow-md transition-transform group-hover:scale-110">
      <Utensils className="h-6 w-6" />
    </div>

    {/* Status Badge (Right Side) */}
    <Badge
      className={cn(
        "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-none",
        provider.isOpen
          ? "bg-gradient-to-r from-green-500 to-green-600 text-white animate-pulse"
          : "bg-gray-200 text-gray-600"
      )}
    >
      {provider.isOpen ? "Open Now" : "Closed"}
    </Badge>

  </div>

  {/* Content */}
  <CardContent className="flex flex-col gap-4 p-6">
    <div className="space-y-2">
      <h3 className="text-xl font-bold group-hover:text-amber-600 transition-colors">
        {provider.restaurantName}
      </h3>

      <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
        {provider.description ||
          "A top-rated kitchen serving fresh and delicious meals every day."}
      </p>
    </div>

    {/* Info Row */}
    <div className="flex items-center gap-4 border-t border-amber-100 pt-4 text-xs font-bold text-muted-foreground">
      <div className="flex items-center gap-1">
        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
        4.8 (120+)
      </div>

      <div className="flex items-center gap-1">
        <Clock className="h-3.5 w-3.5 text-amber-600" />
        25-35 min
      </div>
    </div>
  </CardContent>

  {/* Footer Button */}
  <CardFooter className="p-6 pt-0">
    <Button
      asChild
      disabled={!provider.isOpen}
      className={cn(
        "w-full h-12 rounded-xl font-bold transition-all duration-300",
        provider.isOpen
          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
          : "bg-gray-200 text-gray-500 cursor-not-allowed opacity-70"
      )}
    >
      <Link
        href={
          provider.isOpen
            ? `/providers/${provider.id}`
            : "#"
        }
        className="flex items-center justify-center gap-2"
      >
        {provider.isOpen ? "Explore Menu" : "Opening Soon"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  </CardFooter>

</Card>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}