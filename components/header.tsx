import Link from "next/link";
import React from "react";
import { categories } from "../data"


export default function Header(){
    return(
        <header className="bg-white text-zinc-900 py-4 border-b" data-id="2">
            <div className="container mx-auto px-4 md:px-6" data-id="3">
                <nav className="flex items-center justify-between flex-col md:flex-row" data-id="4">
                    <div className="text-2xl font-bold" data-id="5"><Link href={`/`}>The Gateway People</Link></div>
                    <div className="space-x-4" data-id="6">
                        {categories.map((category) => (
                            <Link key={category.name} className="text-zinc-900 hover:text-zinc-700" data-id="7" href={`/category/${category.name}`}>{category.title}</Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}