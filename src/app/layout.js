import './globals.css';
import SparklesIcon from "@/components/SparklesIcon";
import { Inter } from 'next/font/google';
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SubtitleSync',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white"}>
        <header className="bg-gray-900 p-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <SparklesIcon />
              <span className="text-xl font-bold text-white hover:text-gray-400 transition duration-200 ease-in">SubtitleSync</span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/" className="text-white before:bg-gray-500  before:absolute before:-bottom-1  before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0  before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:-translate-y-1 transition duration-200">Home</Link>
              <Link href="/pricing" className="text-white before:bg-gray-500  before:absolute before:-bottom-1  before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0  before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:-translate-y-1 transition duration-200">Pricing</Link>
              <a href="mailto:adarsh.b.yadav243@gmail.com" className="text-white before:bg-gray-500  before:absolute before:-bottom-1  before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0  before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 hover:-translate-y-1 transition duration-200">Contact</a>
            </nav>
          </div>
        </header>
        <main className="p-4 max-w-2xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}


