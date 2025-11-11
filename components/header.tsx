"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <img src="/thalen-logo.jpg" alt="Thalen Industries" className="h-8 w-8" />
          <span className="text-lg font-bold text-foreground tracking-tight hidden sm:inline">THALEN</span>
        </Link>

        <nav className="hidden gap-12 md:flex">
          <Link
            href="/technology"
            className={`text-sm uppercase tracking-wider transition ${
              isActive("/technology") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Technology
          </Link>
          <Link
            href="/how-it-works"
            className={`text-sm uppercase tracking-wider transition ${
              isActive("/how-it-works")
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className={`text-sm uppercase tracking-wider transition ${
              isActive("/about") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </Link>
        </nav>
        <Link href="/contact">
          <button className="border border-white px-6 py-2 text-sm font-semibold text-foreground transition hover:bg-white hover:text-background">
            Contact
          </button>
        </Link>
      </div>
    </header>
  )
}
