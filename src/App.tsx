import { useEffect, useState } from 'react';
import { ActiveView } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentView, setView] = useState<ActiveView>(ActiveView.HOME);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentView]);

  const views = {
    [ActiveView.HOME]: <HomeView setView={setView} />,
    [ActiveView.ABOUT]: <AboutView setView={setView} />,
    [ActiveView.SERVICES]: <ServicesView setView={setView} />,
    [ActiveView.CONTACT]: <ContactView />,
  };

  return (
    <div className="min-h-screen bg-white text-brand-900">
      <Header currentView={currentView} setView={setView} />
      <main>{views[currentView]}</main>
      <Footer setView={setView} />
    </div>
  );
}
