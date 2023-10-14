import Link from "next/link";
import React from "react";
import { categories } from "../data"


export default function Header(){
    return(
        <header className="bg-white text-zinc-900 py-4 border-b sticky top-0" data-id="2">
            <div className="container mx-auto px-4 md:px-6" data-id="3">
                <nav className="flex items-center justify-between flex-col md:flex-row" data-id="4">
                    <Link href={`/`}>
                        <div className="text-[#bd23bd] leading-3" data-id="5">
                            <div className="text-2xl font-bold">The Gateway People</div>
                            <span className="text-xs italic">...promoting dignity, cultures, places</span>
                        </div>
                    </Link>
                    <div className="space-x-2 sm:space-x-4 pt-2" data-id="6">
                        {categories.map((category) => (
                            <Link key={category.name} className="text-zinc-900 hover:text-zinc-700 text-xs sm:text-base" data-id="7" href={`/category/${category.name}`}>{category.title}</Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}