// pages/team.tsx
import Head from "next/head";
import Image from "next/image";

/**
 * 👥 TeamPage – Übersicht über das Leichtesfahren-Team
 * Zeigt alle Teammitglieder mit Bild, Namen und Funktion
 * Fokus: Vertrauen & Transparenz gegenüber Nutzern
 */
export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-12">
      <Head>
        <title>Unser Team – Leichtesfahren</title>
        <meta
          name="description"
          content="Lerne das Team hinter Leichtesfahren kennen – moderne Theorie-App für deinen Führerschein."
        />
      </Head>

      {/* 🧭 Überschrift */}
      <h1 className="text-4xl font-bold text-center mb-6">👥 Unser Team</h1>

      {/* 🧠 Einführungstext */}
      <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-12">
        Hinter <strong>Leichtesfahren</strong> steckt ein engagiertes Team, das
        dir hilft, deine Führerschein-Theorie effizient, modern und mit Spaß zu
        meistern.
      </p>

      {/* 👤 Teammitglieder */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* 🧑‍💻 Gründer */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
          <Image
            src="/logo6.png"
            alt="Mahdi Bavi Nezhad"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold leading-snug mb-2 break-words">
            👨‍💻 Mahdi Bavi Nezhad
          </h2>
          <p className="text-gray-600 text-sm">
            UX/UI Design & Gründer & Fullstack Entwickler
          </p>
        </div>

        {/* ✍️ Content & UX */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
          <Image
            src="/logo6.png"
            alt="Simin Maghsoudi"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold leading-snug mb-2 break-words">
            ✍️ Simin Maghsoudi
          </h2>
          <p className="text-gray-600 text-sm">
            Mitentwicklung der Prüfungsfragen
          </p>
        </div>

        {/* 🤖 Künstliche Intelligenz */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
          <Image
            src="/logo6.png"
            alt="AI Logiksystem"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold leading-snug mb-2 break-words">
            🤖 KI Logiksystem
          </h2>
          <p className="text-gray-600 text-sm">
            Adaptive Analyse, Auswertung von Lernverhalten <br />& smarte
            Optimierung deiner Vorbereitung.
          </p>
        </div>
      </div>

      {/* 📅 Footer */}
      <p className="text-center mt-16 text-sm text-gray-500">
        Made with ❤️ by Leichtesfahren • {new Date().getFullYear()}
      </p>
    </div>
  );
}
