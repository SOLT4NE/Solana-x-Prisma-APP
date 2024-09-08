'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "~/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { publicKey } = useWallet()

  console.log(publicKey)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/logof.png" alt="Logo" width={60} height={60} className="rounded-full" />
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Button className="text-muted-foreground hover:text-primary transition-colors">Home</Button></li>
              <li><Button className="text-muted-foreground bg-gray-500 cursor-not-allowed">Gallery</Button></li>
              <li><Button className="text-primary hover:text-primary/80 transition-colors">Club</Button></li>
              <li><Button  className="text-muted-foreground hover:text-primary transition-colors">About</Button></li>
            </ul>
          </nav>
          
          <WalletMultiButton className="hidden md:inline-flex" />
          
          <button 
            className="md:hidden text-primary"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors block py-2">Home</Link></li>
              <li><span className="text-muted-foreground cursor-not-allowed block py-2">Gallery</span></li>
              <li><span className="text-primary hover:text-primary/80 transition-colors block py-2">Club</span></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors block py-2">About</Link></li>
              <li>
                <WalletMultiButton className="w-full bg-primary text-white hover:bg-primary/90 transition-colors rounded-md py-2 px-4 text-sm font-medium shadow-sm" />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}