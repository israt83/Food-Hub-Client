import { LoginForm } from "@/components/modules/authentication/LoginForm";

import Link from "next/link";
import { GiChefToque } from "react-icons/gi";

export default async function LoginPage() {
	return (
		<div className='min-h-screen bg-muted/30 flex items-center justify-center pb-6 px-4'>
			<div className='grid w-full max-w-5xl min-h-[600px] lg:grid-cols-2 bg-background rounded-[2.5rem] overflow-hidden shadow-2xl border-none'>
				{/* LEFT SIDE: THE FORM */}
				<div className='flex flex-col justify-center px-8 py-10 lg:px-12'>
					<div className='mx-auto w-full max-w-[320px] space-y-6'>
						<Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <div >
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
						<div className='space-y-1'>
							<h1 className='text-3xl font-black tracking-tight italic uppercase leading-none'>
								Welcome <span className='text-primary'>Back</span>
							</h1>
							<p className='text-muted-foreground font-medium text-[13px]'>
								Log in to continue your food journey.
							</p>
						</div>

						<LoginForm />
					</div>
				</div>

				{/* RIGHT SIDE: THE VISUAL */}
				<div className='relative hidden lg:block overflow-hidden'>
					<img
						src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Delicious Food Background'
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-10'>
						<div className='text-white space-y-2'>
							<div className='bg-primary w-fit px-2 py-0.5 rounded-md'>
								<p className='text-[9px] font-black uppercase tracking-[0.2em] text-white'>
									Join 10k+ Foodies
								</p>
							</div>
							<h2 className='text-4xl font-black leading-tight italic uppercase'>
								Best Flavors <br />
								<span className='text-amber-500'>For You.</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}