import type { Metadata } from 'next'
import './globals.css'
import NavigationLine from '@/components/NavigationLine'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mohamed Ayman - Senior Data Scientist',
  description: 'Professional portfolio of Mohamed Ayman, Senior Data Scientist with 5+ years of experience generating multimillion revenue growth.',
  keywords: ['Data Scientist', 'Machine Learning', 'Business Intelligence', 'Analytics', 'Python', 'R'],
  authors: [{ name: 'Mohamed Ayman' }],
  openGraph: {
    title: 'Mohamed Ayman - Senior Data Scientist',
    description: '5+ years of experience generating multimillion revenue growth through advanced analytics and machine learning.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-midnight-blue text-white min-h-screen antialiased">
        <Header />
        {/* <NavigationLine /> */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

