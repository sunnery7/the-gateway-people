"use client"

import Link from 'next/link'
import Header from '../components/header'

export default function NotFound() {
  return (
    <section className="w-full" data-id="1">
        <Header />
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className='text-blue-700' href="/">Return Home</Link>
    </section>
  )
}