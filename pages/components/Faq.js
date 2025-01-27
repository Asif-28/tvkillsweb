import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect } from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
export default function Faq() {
  const bg1 = {
    backgrounColor: "rgb(27, 27, 49)",
  };

  const bg2 = {
    backgroundColor: "rgb(7, 7, 27)",
  };
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    // <>   <div class="py-20" id="faq">

    <>
      {" "}
      <h1
        id="faq"
        class="text-4xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white text-center font-newton aos-init"
        data-aos="zoom-in-up"
      >
        FAQ
      </h1>
      <div data-aos="fade-right" className="mx-20 overflow-x-hidden">
        {" "}
        <Fragment>
          <Accordion open={open === 1}>
            <AccordionHeader
              className="text-transparent font-NORWESTER text-left bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white"
              onClick={() => handleOpen(1)}
            >
              What is the collection size ?
            </AccordionHeader>
            <AccordionBody className="text-lg font-NORWESTER text-white">
              4444
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader
              className="text-transparent font-NORWESTER text-left bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white"
              onClick={() => handleOpen(2)}
            >
              What are the benifits of holding the Cultpass ?
            </AccordionHeader>
            <AccordionBody className="text-lg font-NORWESTER text-white">
              Priority minting in every upcoming drop in TVKills. Lifetime
              Whitelist for every upcoming drop. Holders will receive 15% of the
              Royalties received from the main drop. Will be eligible for other
              exclusive Collab WL raffles. Cultpass Holders gets the highest Staking reward.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader
              className="text-transparent font-NORWESTER hover:text-transparent text-left bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white"
              onClick={() => handleOpen(3)}
            >
              What are the benifits of holding the Patron Id ?
            </AccordionHeader>
            <AccordionBody className="text-lg font-NORWESTER text-white">
              Patron Id is a special drop by TVKills which provides various utility for our Trait Formation Platform which will be airdropped to the Cultpass holders and Diamond hands of the TVKills main collection!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4}>
            <AccordionHeader
              className="text-left font-NORWESTER text-transparent hover:text-transparent text-left bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white"
              onClick={() => handleOpen(4)}
            >
              Is the team doxxed ?
            </AccordionHeader>
            <AccordionBody className="text-lg text-white font-NORWESTER">
              Yes, Doxxed by Bearmarket.io & Blockinvestmentgroup.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5}>
            <AccordionHeader
              className="text-transparent font-NORWESTER hover:text-transparent text-left bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white"
              onClick={() => handleOpen(5)}
            >
              Policy Id for TV Token ?
            </AccordionHeader>
            <AccordionBody className="text-lg font-NORWESTER text-white">
               <div> efa0e694d5915f52b00a0d01135efdb85a0bdde7009bbcf68ea12a3d </div>
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </>
  );
}
