'use client'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu
} from '@/components/ui/resizable-navbar'
import Link from 'next/link'
import { useState } from 'react'
import { useModal } from './ui/animated-modal'

export function NavbarMenu() {
  const navItems = [
    // {
    //   name: "Projects",
    //   link: "/#projects",
    // },
    //   name: "Blogs",
    //   link: "/blogs",
    // },
    {
      name: 'About',
      link: '/#about'
    },
    {
      name: 'Testimonials',
      link: '/#testimonials'
    }
    // {
    //   name: "Certifications",
    //   link: "/#certifications",
    // // {
    // },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { setOpen } = useModal()

  return (
    <div className='fixed w-full h-20 z-50 pt-4'>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className='flex items-center gap-4'>
            <NavbarButton variant='primary' as='button' onClick={() => setOpen(true)}>
              Contact
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              action={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className='relative text-neutral-600 dark:text-neutral-300'
              >
                <span className='block'>{item.name}</span>
              </Link>
            ))}
            <div className='flex w-full flex-col gap-4'>
              <NavbarButton
                as='button'
                onClick={() => {
                  setOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                variant='primary'
                className='w-full'
              >
                Contact
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  )
}
