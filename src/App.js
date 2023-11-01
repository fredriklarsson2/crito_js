import './App.css';
import AboutSection from './components/AboutSection';
import ArticleSection from './components/ArticleSection';
import ChooseSection from './components/ChooseSection';
import ClientSection from './components/ClientSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsletterSection from './components/NewsletterSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ShowcaseSection from './components/ShowcaseSection';
import TeamSection from './components/TeamSection';
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <>
      <Header />
      <ShowcaseSection />
      <ClientSection />
      <FeaturesSection />
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
  );
}

export default App;
