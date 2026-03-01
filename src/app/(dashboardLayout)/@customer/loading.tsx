"use client";

import { GiChefToque } from "react-icons/gi";

export default function Loading() {
	return (
		<div className='fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background'>
			{/* Background Glow Accent */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full' />

			<div className='relative flex flex-col items-center gap-6'>
				{/* BRAND LOGO WITH PULSE */}
				<div className='relative'>
					{/* Outer Ring Animation */}
					<div className='absolute inset-0 rounded-3xl bg-amber-500/20 animate-ping duration-[2000ms]' />

					<div className='relative  p-4 rounded-[2rem] shadow-2xl shadow-amber-500/40 border-4 border-background'>
						<GiChefToque className="text-3xl md:text-4xl lg:text-5xl text-amber-500 transition-all group-hover:rotate-12 group-hover:text-amber-400 hover:drop-shadow-[0_0_15px] hover:drop-shadow-500/50" />
					</div>
				</div>

				{/* BRAND TEXT */}
				<div className='text-center space-y-2'>
					<h2 className='text-3xl font-black tracking-tighter italic uppercase animate-pulse'>
						<span
                className="text-2xl md:text-xl lg:text-4xl 
    bg-gradient-to-r from-amber-400 to-amber-600 
    bg-clip-text text-transparent 
    tracking-wider font-bold"
              >
                Food-Hub
              </span>
					</h2>

					{/* PRECISE PROGRESS BAR */}
					<div className='w-40 h-1.5 bg-muted rounded-full overflow-hidden border border-muted shadow-inner'>
						<div className='h-full bg-amber-500 rounded-full animate-loading-bar w-[40%]' />
					</div>

					<p className='text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground pt-2'>
						Preparing your kitchen...
					</p>
				</div>
			</div>

			<style jsx>{`
				@keyframes loading-bar {
					0% {
						transform: translateX(-100%);
					}
					50% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(100%);
					}
				}
				.animate-loading-bar {
					animation: loading-bar 1.5s infinite linear;
				}
			`}</style>
		</div>
	);
}