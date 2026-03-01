import { ProviderCard } from "@/components/modules/provider/provider-card";
import { providerService } from "@/service/provider.service";
import { Provider } from "@/types";
import { Sparkles, Store } from "lucide-react";

export default async function ProvidersPage() {
  const { data, error } = await providerService.getPublicProviders();

  if (error) {
    return (
      <div className="container py-20 text-center font-black uppercase italic text-red-500">
        Failed to load chefs.
      </div>
    );
  }

  const providers = data?.data || [];

  return (
    <div className="relative container py-12 space-y-12 mx-auto px-4">

      {/* 🔥 AMBER BACKGROUND GLOW */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px] -z-10" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[120px] -z-10" />

      {/* --- PREMIUM HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-200 pb-10">

        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-amber-600">
            <Store size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Verified Kitchens
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tight uppercase">
            Discover{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Chefs
            </span>
          </h1>

          <p className="text-muted-foreground font-medium max-w-md">
            Browse trusted home chefs and restaurants delivering fresh flavors near you.
          </p>
        </div>

        {/* 🔥 AMBER GRADIENT STATS BUTTON */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-[2rem] shadow-lg flex items-center gap-4">
          <Sparkles size={20} />
          <span className="text-sm font-black uppercase">
            {providers.length} Partners Online
          </span>
        </div>

      </div>

      {/* --- PROVIDERS GRID --- */}
      {providers.length === 0 ? (
        <div className="py-20 text-center space-y-4">
          <p className="text-muted-foreground font-black uppercase">
            No providers active right now.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {providers.map((provider: Provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      )}

    </div>
  );
}