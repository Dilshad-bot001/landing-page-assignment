import React from "react";

import { HeaderSection, ServiceSection, WorkSection, BusinessSection, TestimonialSection, BlogSection, ContactSection, Footer } from './components'

function App() {
  return (
    <div className="max-w-[1080px] flex flex-col items-center mx-auto overflow-hidden">
      <HeaderSection />
      <ServiceSection />
      <WorkSection />
      <BusinessSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
