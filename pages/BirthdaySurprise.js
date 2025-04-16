"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

const poems = [
  {
    fa: "دوستی‌ات برکت روزهای منه 🌟",
    de: "Deine Freundschaft ist ein Geschenk für meine Tage 🎁",
  },
  {
    fa: "بودنت یعنی آرامش کنارم ☀️",
    de: "Deine Nähe bringt Ruhe in meinen Tag 🌈",
  },
  {
    fa: "با تو بودن یعنی لبخند بی‌دلیل 😊",
    de: "Mit dir lacht man einfach so 😄",
  },
  {
    fa: "یاد تو همیشه خوشحال‌کننده‌ست 🧸",
    de: "Der Gedanke an dich macht gute Laune ☀️",
  },
  {
    fa: "رفاقت واقعی مثل گنجی نایابه 💎",
    de: "Wahre Freundschaft ist wie ein Schatz 💎",
  },
  {
    fa: "کنارت حس خوبی دارم 💫",
    de: "Bei dir fühl ich mich wohl 🌼",
  },
  {
    fa: "حرف‌هات مثل نسیمه – آروم و دلنشین 🍃",
    de: "Deine Worte sind wie eine sanfte Brise 🍃",
  },
  {
    fa: "خاطره‌هامون مثل عکسای قشنگن 📸",
    de: "Unsere Erinnerungen sind wie schöne Bilder 📷",
  },
  {
    fa: "همیشه به داشتن دوستی مثل تو افتخار می‌کنم 🫂",
    de: "Ich bin dankbar für eine Freundin wie dich 🌟",
  },
  {
    fa: "بودن تو در کنارم، زیباترین اتفاق زندگی‌مه 💖",
    de: "Deine Nähe ist das schönste Geschenk meines Lebens 💫",
  },
];

export default function BirthdaySurprise() {
  const [openedBoxes, setOpenedBoxes] = useState([]);

  const handleClick = (index) => {
    if (!openedBoxes.includes(index)) {
      setOpenedBoxes((prev) => [...prev, index]);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center"
      >
        {/* 🎉 Titel */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-4 font-serif"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🎉 Alles Gute zum Geburtstag!
        </motion.h1>

        {/* 💌 Intro */}
        <motion.p
          className="text-lg md:text-xl text-gray-800 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Liebe <span className="font-semibold text-pink-500">Smin</span>,
          <br />
          ich wünsche dir einen wundervollen Tag voller Lachen, Wärme und
          schöner Momente.
          <br />
          Deine Freundschaft bedeutet mir sehr viel 🌸
        </motion.p>

        {/* 🌸 Farsi Gruß */}
        <motion.p
          className="text-right text-xl mt-6 font-medium text-rose-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          تولدت مبارک 🌷
        </motion.p>

        {/* 🎁 Geschenkboxen */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {poems.map((poem, index) => {
            const isOpen = openedBoxes.includes(index);
            return (
              <motion.div
                key={index}
                className={`relative w-full aspect-square rounded-xl shadow-md flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                  isOpen
                    ? "bg-white border border-pink-300"
                    : "bg-pink-200 hover:bg-pink-300"
                }`}
                onClick={() => handleClick(index)}
                whileTap={{ scale: 0.95 }}
              >
                {!isOpen ? (
                  <FaGift className="text-pink-600 text-3xl" />
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center px-3"
                  >
                    <p className="text-right text-rose-600 text-sm">
                      {poem.fa}
                    </p>
                    <p className="text-gray-700 text-sm mt-1">{poem.de}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
}
