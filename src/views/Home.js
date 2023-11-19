import React from 'react'
import AboutSection from '../components/sections/AboutSection';
import ArticleSection from '../components/sections/ArticleSection';
import ChooseSection from '../components/sections/ChooseSection';
import ClientSection from '../components/sections/ClientSection';
import FeatureSection from '../components/sections/FeaturesSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsletterSection from '../components/sections/NewsletterSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ServicesSection from '../components/sections/ServicesSection';
import Showcase from '../components/Showcase';
import TeamSection from '../components/sections/TeamSection';
import TestimonialSection from '../components/sections/TestimonialSection';

const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <ClientSection />
      <FeatureSection />
      <AboutSection />
      <ServicesSection />
      <ChooseSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialSection />
      <ArticleSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

export default Home