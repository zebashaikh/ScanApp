import React from "react";
import OnBoardingA from "@icons/Discovernewtechnology.svg";
import OnBoardingB from "@icons/Group.svg";
import OnBoardingC from "@icons/FatherandSon1.svg";
import OnBoardingD from "@icons/HeroImage.svg";

export const ONBOARDING_DATA = [
    {
      TITLE: `Scan anything in HD,\nwherever you are...`,
      TEXT:
        `Simply launch the AirScan app and scan any\n document, papers or real world photographs in\n seconds.`,
      IMAGE: <OnBoardingA style={{ flex: 1 }} />
    },
    {
      TITLE: `Navigate work documents\nlike a Pro`,
      TEXT:
        `Scan and organize your work documents in\n structured folders. Scan single or multiple\n documents in one swift go. Merge scans into PDFs,\n reorder pages and share them on the fly.`,
      IMAGE: <OnBoardingB style={{ flex: 1 }} />
    },
    {
      TITLE: `Less time scanning homework\n = more time for fun`,
      TEXT:
        `Scanning of homework and assignments are \na breeze with AirScan. Capture scans, generate\n PDFs and push them to any app installed on\n your phone. Its that easy!`,
      IMAGE: <OnBoardingC style={{ flex: 1 }} />
    },
    {
      TITLE: `Covert Pictures to Text with our\n next generation offline OCR`,
      TEXT:
        `Leverage our cutting edge machine learning\n OCR to convert documents to text in seconds\n with accurate results. Share OCR scans as Doc\n files or PDFs in seconds`,
      IMAGE: <OnBoardingD style={{ flex: 1 }} />
    }
  ];
   