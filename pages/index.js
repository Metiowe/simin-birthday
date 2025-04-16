"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaApple,
  FaGooglePlay,
  FaGift,
  FaUsers,
  FaHome,
  FaQuestionCircle,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* 🔝 HEADER – Navigation oben */}
      <header className="w-full bg-white/90 backdrop-blur-md shadow-md py-4 px-6 flex items-center justify-between">
        <h1 className="text-lg sm:text-2xl font-bold text-blue-700">
          leichtesfahren.pro
        </h1>

        <nav className="flex gap-4 text-sm sm:text-base">
          {/* 🏠 Startseite */}
          {/* <Link href="/" className="text-blue-600 hover:text-purple-600">
            <FaHome className="inline mr-1" /> Start
          </Link> */}

          {/* ❓ Fragen ausprobieren */}
          <Link
            href="/quiz-preview"
            className="text-blue-600 hover:text-purple-600"
          >
            <FaQuestionCircle className="inline mr-1" /> Fragen
          </Link>

          {/* 👥 Teamseite */}
          {/* <Link href="/team" className="text-blue-600 hover:text-purple-600">
            <FaUsers className="inline mr-1" /> Team
          </Link> */}
        </nav>
      </header>

      {/* 📱 MAIN-CONTENT – Begrüßung + Download */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* 🌸 Farsi Begrüßung */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl w-full mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-rose-600 font-negar mb-2">
            به رانندگی آسان خوش آمدید
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-800 font-light font-negar leading-relaxed">
            یک اپلیکیشن برای یادگیری آسان، ایمن و چندزبانه سوالات گواهینامه
            آلمانی 🇩🇪🇮🇷
          </p>
        </motion.div>

        {/* 🇩🇪 Deutsch Begrüßung */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-2xl w-full"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
            Willkommen bei{" "}
            <span className="text-purple-500">leichtesfahren.pro</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-light">
            Deine App für sicheres, leichtes und mehrsprachiges Lernen der
            deutschen Führerscheinfragen 🇩🇪🇮🇷
          </p>
        </motion.div>

        {/* 📲 Download Buttons */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.leichtesfahren"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition w-full text-center"
          >
            <FaGooglePlay /> Google Play
          </a>
          <a
            href="https://apps.apple.com/app/leichtesfahren"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl shadow-md transition w-full text-center"
          >
            <FaApple /> App Store
          </a>
        </motion.div>

        {/* 🎁 Bonus-Button */}
        <motion.div
          className="mt-10 w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/BirthdaySurprise">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 w-full rounded-full shadow-xl text-sm sm:text-base flex items-center justify-center gap-2 animate-bounce"
            >
              🎁 Simin, klick mich!
            </motion.button>
          </Link>
        </motion.div>
      </main>

      {/* 🔻 FOOTER */}
      <footer className="w-full bg-white/90 backdrop-blur-md text-center text-sm py-4 px-6 text-gray-600 border-t">
        © {new Date().getFullYear()} leichtesfahren.pro – made with 💙 for alle
        Lernenden
      </footer>
    </div>
  );
}
