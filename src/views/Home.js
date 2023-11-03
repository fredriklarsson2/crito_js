import React from 'react'
import AboutSection from '../components/AboutSection';
import ArticleSection from '../components/ArticleSection';
import ChooseSection from '../components/ChooseSection';
import ClientSection from '../components/ClientSection';
import FeatureSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import NavSection from '../components/NavSection';
import NewsletterSection from '../components/NewsletterSection';
import ProjectSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import ShowcaseSection from '../components/ShowcaseSection';
import TeamSection from '../components/TeamSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
  return (
    <>
      <Header />
      {/* <NavSection /> */}
      <ShowcaseSection />
      <ClientSection />
      <FeatureSection />
      <AboutSection />
      <ServicesSection />
      <ChooseSection />
      <ProjectSection />
      <TeamSection />
      <TestimonialSection />
      <ArticleSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

export default Home