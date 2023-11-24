/**
 * v0 by Vercel.
 * @see https://v0.dev/t/l8hoI7BpF8N
 */
import Link from "next/link"
import Header from "../../components/header"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="flex-1 bg-gray-100 p-6">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-2 mt-5">About Us</h1>
          {/* <p className="text-gray-700">The Gatewaypeople is published by THE GATEWAY PEOPLE MAGAZINES & NEWSPAPERS LTD.</p> */}
        </section>
        <section>
          {/* <h2 className="text-3xl font-bold mb-2">Our Organization</h2> */}
          <p className="text-gray-700 mb-4">
            The Gateway People is published by THE GATEWAY PEOPLE MAGAZINES & NEWSPAPERS LTD. <br />
            It was incorporated in Abeokuta, the Ogun State Capital, Southwest, Nigeria with Registration Number 1531820. <br/>
            Registered by the Corporate Affairs Commission  on October 16, 2018, its registered office address is 22, Ake Road, Ijemo, Abeokuta, Ogun State.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you have an assignment for us?</h3>
            <p className="text-gray-700">22, Ake Road, Ijemo, Abeokuta, Ogun State.</p>
            <p className="text-gray-700"> 08033329013, 08055030404</p>
            <p className="text-gray-700"> thegatewaypeople@gmail.com</p>
          </div>
          {/* <p className="text-gray-700">
            Our team of experienced journalists are passionate about bringing you the most important stories, and
            shedding light on the issues that matter.
          </p> */}
        </section>
      </main>
      <footer className="bg-white p-6 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-700"> The Gateway People</p>
          </div>
          <div className="space-x-4">
            <Link href="#">
              <IconFacebook className="h-6 w-6 text-gray-800" />
            </Link>
            <Link href="#">
              <IconTwitter className="h-6 w-6 text-gray-800" />
            </Link>
            <Link href="#">
              <IconInstagram className="h-6 w-6 text-gray-800" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function IconFacebook(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function IconInstagram(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function IconNews(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  )
}


function IconTwitter(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
