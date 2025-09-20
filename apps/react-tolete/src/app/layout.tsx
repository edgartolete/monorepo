import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import { NavbarMenu } from '@/components/navbar'
import { Modal } from '@/components/ui/animated-modal'
import { ContactModal } from './components/modal'
import { Toaster } from 'sonner'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//
// });
export const metadata: Metadata = {
  title: 'Edgar Tolete | Tolete Web Development Services',
  description:
    'Tolete Web Development Services specializes in building high-quality, modern websites using cutting-edge technologies like Next.js for the frontend and Node.js for the backend. We deliver fast, scalable, and professional web solutions tailored to your business needs.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <Modal>
          <NavbarMenu />
          {children}
          <ContactModal />
        </Modal>
        <Toaster />
      </body>
    </html>
  )
}
