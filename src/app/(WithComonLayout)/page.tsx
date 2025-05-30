"use client";

import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import CoursesSection from "@/components/home/CourseSection";
import EventsSection from "@/components/home/EventSection";
import FeaturesSection from "@/components/home/FeatureSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServiceSection";
import StatsSection from "@/components/home/StatsSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const HomePage = () => {
  return (
    <div className=" md:space-y-16 space-y-8">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <AboutSection />
      <CoursesSection />
      <EventsSection />
      <TeamSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
