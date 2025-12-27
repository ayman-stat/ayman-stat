'use client'

import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import AboutSection from '@/components/home/AboutSection'
import ExpertiseCards from '@/components/home/ExpertiseCards'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import TimelineSection from '@/components/home/TimelineSection'
import SkillsMatrix from '@/components/home/SkillsMatrix'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import BlogPreview from '@/components/home/BlogPreview'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ExpertiseCards />
      <FeaturedProjects />
      <TimelineSection />
      <SkillsMatrix />
      <TestimonialsCarousel />
      <BlogPreview />
      <CTASection />
    </main>
  )
}
