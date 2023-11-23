import React from "react";
import { CTA, Features, Footer, Heading, Hero, Testimonial } from "./sections";
import Features2 from "./component/Features2";
const App = () => (
   <main className="relative">
      <section className="padding-x bg-secondary">
         <Heading />
      </section>

      <section className="paddind-y padding-b bg-secondary  ">
         <Hero />
      </section>

      <section className=" bg-secondary ">
         <Features />
      </section>

      <section className="padding">
         <Features2 />
      </section>

      <section className="padding">
         <Testimonial />
      </section>

      <section className="padding">
         <CTA />
      </section>

      <section className="padding">
         <Footer />
      </section>
   </main>
);

export default App;
