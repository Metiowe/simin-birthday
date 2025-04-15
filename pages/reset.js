import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { account } from "../lib/appwrite";

export default function ResetPage() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    const rawUserId = router.query.userId;
    const rawSecret = router.query.secret;

    const safeUserId = Array.isArray(rawUserId) ? rawUserId[0] : rawUserId;
    const safeSecret = Array.isArray(rawSecret) ? rawSecret[0] : rawSecret;

    if (!safeUserId || !safeSecret) {
      setMessage("❌ Der Link ist ungültig oder unvollständig.");
      return;
    }

    // ✨ Setze erst, wenn sicher vorhanden
    setUserId(safeUserId);
    setSecret(safeSecret);
  }, [router.isReady, router.query.userId, router.query.secret]);

  const handleReset = async () => {
    console.log("🧪 DEBUG RESET:", {
      userId,
      secret,
      password,
      confirm,
    });
    console.log("🚀 Reset starten mit:", { userId, secret, password, confirm });

    if (!userId || !secret) {
      return setMessage("❌ Der Link ist ungültig oder abgelaufen.");
    }

    if (!password || password.length < 6) {
      return setMessage("❌ Passwort muss mindestens 6 Zeichen haben.");
    }

    if (password !== confirm) {
      return setMessage("❌ Passwörter stimmen nicht überein.");
    }

    try {
      await account.updateRecovery(userId, secret, password, confirm);
      setMessage("✅ Passwort erfolgreich geändert.");
      setTimeout(() => router.push("/"), 3000);
    } catch (err) {
      console.error("❌ Fehler beim Zurücksetzen:", err);
      if (err?.message?.includes("token")) {
        setMessage("❌ Der Link ist abgelaufen. Bitte fordere einen neuen an.");
      } else {
        setMessage("❌ Fehler: " + (err?.message || "Unbekannter Fehler"));
      }
    }
  };

  const inputStyle =
    "w-full p-3 pr-10 border border-gray-700 rounded-lg mb-4 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-[#1f1f1f] shadow-2xl rounded-2xl w-full max-w-md p-6 border border-gray-700">
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          Passwort zurücksetzen
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Bitte gib dein neues Passwort ein.
        </p>

        {/* Neues Passwort */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Neues Passwort"
            className={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="material-icons absolute right-3 top-3 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </div>

        {/* Bestätigung */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Passwort bestätigen"
            className={inputStyle}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <span
            className="material-icons absolute right-3 top-3 text-gray-400 cursor-pointer"
            onClick={() => setShowConfirm((prev) => !prev)}
          >
            {showConfirm ? "visibility_off" : "visibility"}
          </span>
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-4 transition duration-200"
        >
          Passwort zurücksetzen
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-300">{message}</p>
        )}
      </div>
    </div>
  );
}
