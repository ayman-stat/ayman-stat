import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mohamed Ayman | Senior Data Scientist & Senior ML Engineer',
  description: 'Portfolio of Mohamed Ayman: senior data science, business intelligence, predictive modeling, ML engineering, and practical GenAI/cloud AI development.',
  keywords: [
    'Senior Data Scientist',
    'Senior Machine Learning Engineer',
    'Senior AI Engineer',
    'Senior Analytics',
    'Machine Learning Engineer',
    'Business Intelligence',
    'Predictive Modeling',
    'Python',
    'Power BI',
    'AWS Bedrock',
    'Generative AI',
  ],
  authors: [{ name: 'Mohamed Ayman' }],
  icons: {
    icon: '/ma-logo.png',
    shortcut: '/ma-logo.png',
    apple: '/ma-logo.png',
  },
  openGraph: {
    title: 'Mohamed Ayman | Senior Data Scientist & Senior ML Engineer',
    description: 'Data science, BI, predictive modeling, ML engineering, and practical GenAI/cloud AI portfolio.',
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
      <body className="bg-midnight-blue text-white min-h-screen antialiased overflow-x-hidden">
        <Header />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

