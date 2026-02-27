import { RegisterForm } from "@/components/modules/authentication/RegisterForm";
import { ChefHat, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { GiChefToque } from "react-icons/gi";

export default async function RegisterPage() {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center pb-6 px-4">
      <div className="grid w-full max-w-5xl min-h-[600px] lg:grid-cols-2 bg-background rounded-[2.5rem] overflow-hidden shadow-2xl border-none">
        <div className="relative hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
            alt="Join FoodHub"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/80 flex items-center p-10">
            <div className="text-white space-y-4">
              <div className="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/30 flex items-center gap-2">
                <ChefHat size={14} className="text-primary" />
                <p className="text-[9px] font-black uppercase tracking-widest text-white">
                  Start your journey
                </p>
              </div>
              <h2 className="text-4xl font-black leading-tight italic uppercase text-white">
                Join the <br />
                <span className="text-green-500">Foodie</span> <br />
                Revolution.
              </h2>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="flex flex-col justify-center px-8 py-8 lg:px-10">
          <div className="mx-auto w-full max-w-[300px] space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2 transition-transform hover:scale-105"
            >
              <div className=" ">
                <GiChefToque className="text-3xl md:text-4xl lg:text-5xl text-amber-500 transition-all group-hover:rotate-12 group-hover:text-amber-400 hover:drop-shadow-[0_0_15px] hover:drop-shadow-500/50" />
              </div>
              <div className="inline-block">
                <span
                  className="text-2xl md:text-xl lg:text-4xl 
    bg-gradient-to-r from-amber-400 to-amber-600 
    bg-clip-text text-transparent 
    tracking-wider font-bold"
                >
                  Food-Hub
                </span>

                <div
                  className="w-full h-[3px] bg-gradient-to-r 
    from-amber-600/30 via-amber-400/50 to-amber-600/30 
    mt-1 rounded-full"
                ></div>
              </div>
            </Link>

            <div className="space-y-1">
              <h1 className="text-2xl font-black tracking-tight italic uppercase leading-none">
                Create <span className="text-primary">Account</span>
              </h1>
              <p className="text-muted-foreground font-medium text-[12px]">
                Join 10k+ people ordering meals.
              </p>
            </div>

            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
