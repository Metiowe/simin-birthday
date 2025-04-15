// pages/index.tsx
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Leichtesfahren.pro – Deine Führerschein Theorie App</title>
        <meta
          name="description"
          content="Lerne für die Führerscheinprüfung mit Leichtesfahren. Intuitiv. Effizient. Kostenlos."
        />
      </Head>

      {/* Header mit Logo */}
      <header className="p-6 shadow-md bg-blue-600 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo6.png"
            alt="Leichtesfahren Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h1 className="text-xl font-bold">Leichtesfahren.pro</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/team">Team</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🎓 Führerschein Theorie leicht gemacht
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Lerne für deine Theorieprüfung – mit echten Fragen, modernen
          Erklärungen und deiner persönlichen Lernstatistik.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=com.leichtesfahren.app"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl shadow-md"
          >
            Android App herunterladen
          </a>

          <a
            href="https://apps.apple.com/de/app/leichtesfahren/id1234567890"
            className="bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-xl shadow-md"
          >
            iOS App herunterladen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Leichtesfahren.pro •{" "}
        <Link href="/impressum">Impressum</Link>
      </footer>
    </div>
  );
}
