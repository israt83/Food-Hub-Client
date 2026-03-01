"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SidebarLink } from "@/components/ui/SidebarLink";
import { handleLogout } from "@/lib/utils";
import { Link, LogOut, Menu } from "lucide-react";
import { GiChefToque } from "react-icons/gi";


type Role = "ADMIN" | "PROVIDER" | "CUSTOMER";

export function MobileSidebar({ role }: { role: Role }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Menu className='h-5 w-5' />
				</Button>
			</SheetTrigger>

			<SheetContent side='left' className='w-64 p-0'>
				<SheetHeader className='border-b px-6 py-5'>
					<SheetTitle className='text-left font-bold'> <Link
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
							  </Link></SheetTitle>
				</SheetHeader>

				<nav className='px-3 py-4 space-y-1'>
					{role === "CUSTOMER" && (
						<>
							<SidebarLink href='/dashboard/orders' label='My Orders' />
							<SidebarLink href='/dashboard/profile' label='My Profile' />
						</>
					)}

					{role === "PROVIDER" && (
						<>
							<SidebarLink href='/provider-dashboard/orders' label='Orders' />
							<SidebarLink href='/provider-dashboard/meals' label='Meals' />
						</>
					)}

					{role === "ADMIN" && (
						<>
							<SidebarLink href='/admin-dashboard/users' label='Users' />
							<SidebarLink href='/admin-dashboard/orders' label='Orders' />
							<SidebarLink href='/admin-dashboard/categories' label='Categories' />
						</>
					)}
				</nav>

				<div className='border-t p-4'>
					<Button
						variant='ghost'
						className='w-full justify-start text-red-500'
						onClick={() => handleLogout()}
					>
						<LogOut className='mr-2 h-4 w-4' />
						Log out
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}