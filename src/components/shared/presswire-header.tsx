'use client'

import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { useState } from 'react'

export function PresswireHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Press releases', href: '/press-release' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Main Header with Dark Blue Gradient */}
      <header className="bg-[#1A1A33] sticky top-0 z-40 w-full text-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Site Title */}
            <Link href="/" className="text-2xl font-bold text-white transition-opacity hover:opacity-85">
              mediyao
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden items-center gap-2 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-3">
              {/* Search Icon */}
              <Button 
                variant="ghost" 
                size="icon" 
                asChild 
                className="hidden rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 md:flex backdrop-blur-sm"
              >
                <Link href="/search">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Link>
              </Button>

              {/* Action Buttons */}
              <div className="hidden items-center gap-2 md:flex">
                <Button 
                  asChild 
                  className="rounded-full bg-red-600 text-white hover:bg-red-700 font-semibold"
                >
                  <Link href="/press-release">Explore releases</Link>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="rounded-full border-white bg-white/10 text-white hover:bg-white/20 font-semibold backdrop-blur-sm"
                >
                  <Link href="/pricing">View pricing</Link>
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full text-white hover:bg-white/20 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-white/20 bg-[#1A1A33] lg:hidden">
              <div className="px-4 py-4 space-y-3">
                {/* Mobile Search */}
                <Link 
                  href="/search" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm"
                >
                  <Search className="h-4 w-4" />
                  Search releases
                </Link>
                
                {/* Mobile Navigation */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Action Buttons */}
                <div className="pt-3 space-y-2">
                  <Button 
                    asChild 
                    className="w-full rounded-full bg-red-600 text-white hover:bg-red-700 font-semibold"
                  >
                    <Link href="/press-release" onClick={() => setIsMobileMenuOpen(false)}>
                      Explore releases
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    className="w-full rounded-full border-white bg-white/10 text-white hover:bg-white/20 font-semibold backdrop-blur-sm"
                  >
                    <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                      View pricing
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
