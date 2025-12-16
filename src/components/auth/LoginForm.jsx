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

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Injection dans le formulaire hotspot
    document.getElementById("hs-username").value = identifier;
    document.getElementById("hs-password").value = password;

    // Soumission vers le routeur
    document.getElementById("hotspot-login-form").submit();
  };

  return (
    <>
      {/* FORMULAIRE HOTSPOT INVISIBLE */}
      <form
        id="hotspot-login-form"
        method="post"
        action="$(link-login-only)"
        style={{ display: "none" }}
      >
        <input type="text" name="username" id="hs-username" />
        <input type="password" name="password" id="hs-password" />
      </form>

      {/* UI REACT */}
      <div className="space-y-6">
        {/* Identifiant */}
        <div>
          <label className="block mb-2 text-sm font-medium">Identifiant</label>
          <div className="relative">
            <User
              className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2"
              size={20}
            />
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border rounded-lg"
              required
              disabled={loading}
            />
          </div>
        </div>

        {/* Mot de passe */}
        <div>
          <label className="block mb-2 text-sm font-medium">Mot de passe</label>
          <div className="relative">
            <Lock
              className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2"
              size={20}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border rounded-lg"
              required
              disabled={loading}
            />
          </div>
        </div>

        {/* Bouton */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={loading}
          className="flex items-center justify-center w-full gap-2 py-4 font-semibold text-white bg-blue-600 rounded-lg"
        >
          {loading ? (
            <>
              <Loader className="animate-spin" size={20} />
              Connexion…
            </>
          ) : (
            <>
              <Wifi size={20} />
              Se connecter
            </>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default LoginForm;
