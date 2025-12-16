import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Lock,
  User,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import authService from "../../services/authService";

const LoginForm = ({ onSuccess }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await authService.login(identifier, password);
      setSuccess(true);
      setTimeout(() => {
        onSuccess(result.user);
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Identifiant */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Identifiant
        </label>
        <div className="relative">
          <User
            className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            size={20}
          />
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            className="w-full py-3 pl-12 pr-4 text-gray-900 transition-all border border-gray-300 rounded-lg outline-none bg-gray-50 dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
            placeholder="Entrez votre identifiant"
            required
            disabled={loading || success}
          />
        </div>
      </div>

      {/* Mot de passe */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Mot de passe
        </label>
        <div className="relative">
          <Lock
            className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
            size={20}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            className="w-full py-3 pl-12 pr-4 text-gray-900 transition-all border border-gray-300 rounded-lg outline-none bg-gray-50 dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
            placeholder="Entrez votre mot de passe"
            required
            disabled={loading || success}
          />
        </div>
      </div>

      {/* Messages d'état */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 p-4 text-red-700 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
          >
            <AlertCircle size={20} />
            <span className="text-sm">{error}</span>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 text-green-700 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
          >
            <CheckCircle size={20} />
            <span className="text-sm">
              Connexion réussie ! Redirection en cours...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de connexion */}
      <motion.button
        whileHover={{ scale: loading || success ? 1 : 1.02 }}
        whileTap={{ scale: loading || success ? 1 : 0.98 }}
        onClick={handleSubmit}
        disabled={loading || success}
        className="flex items-center justify-center w-full gap-2 py-4 font-semibold text-white transition-all rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader className="animate-spin" size={20} />
            <span>Connexion en cours...</span>
          </>
        ) : success ? (
          <>
            <CheckCircle size={20} />
            <span>Connecté</span>
          </>
        ) : (
          <>
            <Wifi size={20} />
            <span>Se connecter</span>
          </>
        )}
      </motion.button>

      {/* Aide
      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
        Identifiants de test : <strong>admin</strong> / <strong>drwintech2024</strong>
      </p> */}
    </div>
  );
};

export default LoginForm;
