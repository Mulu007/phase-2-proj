import React from "react";
import picture1 from "./assets/runway1.jpg"

const About = () => {
  return (
    <div className="bg-black">
      <h1 className="text-5xl text-center font-extrabold text-white">About</h1>

      

      <p className="text-right text-white text-2xl">
        Rare's clean design and simple functionality make the experience about
        the product in a way that's inclusive and not intimidating. The three
        categories — Rare (highly sought after pieces from well known designers
        and labels), hype (streetwear and new releases), and basics (vintage and
        mass market brands) — are easy to navigate, whether you're looking for
        something specific or just browsing. The labels for sale speak for
        themselves: Supreme, Nike, and Palace sit next to vintage Raf Simons,
        Helmut Lang, and Number (N)ine. Reselling here isn't just for the
        thrifty — it allows fashion enthusiasts to shop more and experiment with
        new looks and designers, within a community of like-minded people.
        Before Rare Collection, these brands were being resold amongst devout
        followers, but on nerdy, hard-to-decipher forums and eBay pages
        unearthed only through deep keyword searches. Rare Collection has taken
        this practice, streamlined it for the diehard shopper, and made it
        accessible to the more mainstream, casual consumer.
      </p>
      <div className="sm:block">
        <img src="{picture1}" />
      </div>
      <p className="text-left text-white text-2xl">
        Rare Collection then hosts modelling events exhibiting their products.
        Modelling is considered to be different from other types of public
        performance, such as acting or dancing. Although the difference between
        modelling and performing is not always clear, appearing in a film or a
        play is not generally considered to be "modelling". Personal opinions
        are generally not expressed and a model's reputation and image are
        considered critical.
      </p>
    </div>
  );
};

export default About;
