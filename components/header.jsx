import Link from "next/link";
import React from "react";
import { categories } from "../data"


export default function Header(){
    return(
        <header className="bg-white text-zinc-900 pt-4 border-b sticky top-0" data-id="2">
            <div className="container mx-auto px-4 md:px-6" data-id="3">
                <nav className="text-center" data-id="4">
                    <div>
                        <Link href={`/`}>
                            <div className="text-[#ff0000] leading-3" data-id="5">
                                <div className=" m-auto flex items-center justify-center">
                                    {/* <img src="/logo.jpeg" alt="logo" className="w-full" /> */}
                                    <h1 className="font-bold text-2xl">The Gateway People</h1>
                                </div>
                                <span className="text-xs italic">...promoting dignity, cultures, places</span>
                            </div>
                        </Link>
                    </div>
                    <div className="space-x-2 sm:space-x-4 pt-4" data-id="6">
                        {categories.map((category) => (
                            <Link key={category.name} className="text-zinc-900 hover:text-red-600 text-xs sm:text-sm uppercase" data-id="7" href={`/category/${category.name}`}>{category.title}</Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}