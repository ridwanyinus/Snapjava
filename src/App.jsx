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

      <section className="bg-secondary w-full">
         <Features />
      </section>

      <section className="padding bg-secondary  padding-t">
         <Features2 />
      </section>

      <section className=" bg-secondary">
         <Testimonial />
      </section>

      <section className="padding-t padding-l padding-r  bg-secondary">
         <CTA />
      </section>

      <section className="padding-t padding-l padding-r  bg-[#1F0F0E]">
         <Footer />
      </section>
   </main>
);

export default App;
