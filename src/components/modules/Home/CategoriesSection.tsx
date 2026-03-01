"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types"; // Ensure you have this type defined
import { ArrowRight, Dessert, Flame, Leaf, Pizza, Soup, Utensils } from "lucide-react";
import Link from "next/link";

// Helper to map icons to categories based on name or slug
const getCategoryIcon = (slug: string) => {
	switch (slug) {
		case "bangladeshi":
			return <Flame className='h-8 w-8 text-orange-500' />;
		case "chinese":
			return <Soup className='h-8 w-8 text-red-500' />;
		case "indian":
			return <Utensils className='h-8 w-8 text-yellow-600' />;
		case "desserts":
			return <Dessert className='h-8 w-8 text-pink-500' />;
		case "healthy-fitness":
			return <Leaf className='h-8 w-8 text-green-500' />;
		case "street-food":
			return <Pizza className='h-8 w-8 text-amber-600' />;
		default:
			return <Utensils className='h-8 w-8 text-primary' />;
	}
};

export function CategoriesSection({ categories }: { categories: Category[] }) {
  const displayCategories =
    categories?.length > 0 ? categories.slice(0, 12) : [];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center w-full">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Explore by <span className="text-amber-600">Cuisine</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              From traditional spices to modern fitness bowls—find exactly what
              you're craving.
            </p>
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-amber-600 hover:bg-amber-700 text-white px-6"
            >
              <Link href="/meals" className="flex items-center gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 🔥 BORDER CIRCLE GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 justify-items-center">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={`/meals?category=${category.id}`}
              className="group"
            >
              <div className="relative flex items-center justify-center 
                              h-32 w-32 rounded-full
                              border-4 border-amber-500
                              text-foreground font-bold text-center
                              transition-all duration-500
                              group-hover:scale-110">
                
                {/* 🔥 Animated Border Glow */}
                <div className="absolute inset-0 rounded-full 
                                border-2 border-transparent
                               
                                opacity-0 group-hover:opacity-100
                                animate-spin-slow
                                blur-sm
                                transition-opacity duration-500" />

                <span className="relative z-10 px-3 text-2xl md:text-xl lg:text-xl 
    bg-gradient-to-r from-amber-400 to-amber-600 
    bg-clip-text text-transparent 
    tracking-wider font-bold">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Button
            asChild
            className="rounded-full bg-amber-600 hover:bg-amber-700 text-white px-8 h-12"
          >
            <Link href="/meals" className="flex items-center gap-2">
              View All Cuisines
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}