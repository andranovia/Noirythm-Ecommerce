import ContactCard from "@/components/contact/contact-card";
import ContactHero from "@/components/contact/contact-hero";
import ContactMap from "@/components/contact/contact-map";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">
      <ContactHero />
      <ContactCard />
      {/* <ContactMap /> */}
    </div>
  );
};

export default Contact;
