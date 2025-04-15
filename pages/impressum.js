import Head from "next/head";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <Head>
        <title>Impressum – Leichtesfahren</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">📄 Impressum</h1>

      <p className="mb-4">
        Angaben gemäß § 5 TMG
        <br />
        <strong>Mahdi Bavi Nezhad</strong>
        <br />
        Musterstraße 12
        <br />
        12345 Musterstadt
        <br />
        Deutschland
      </p>

      <p className="mb-4">
        <strong>Kontakt:</strong>
        <br />
        E-Mail:{" "}
        <a
          href="mailto:info@leichtesfahren.pro"
          className="text-blue-600 underline"
        >
          info@leichtesfahren.pro
        </a>
      </p>

      <p className="mb-4">
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
        <br />
        Mahdi Bavi Nezhad
        <br />
        Anschrift siehe oben
      </p>

      <p className="mb-4 text-sm text-gray-600">
        Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen
        wir keine Haftung für die Inhalte externer Links. Für den Inhalt der
        verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Leichtesfahren • Alle Rechte vorbehalten.
      </p>
    </div>
  );
}
