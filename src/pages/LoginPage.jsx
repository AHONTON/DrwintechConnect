import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Wifi, Shield, Zap, Lock } from "lucide-react";
import CardContainer from "../components/ui/CardContainer";
import ThemeSwitcher from "../components/ui/ThemeSwitcher";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLoginSuccess = (user) => {
    setAuthenticated(true);
    console.log("User authenticated:", user);
  };

  if (authenticated) {
    return (
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-md px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardContainer>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle
                  className="mx-auto mb-6 text-green-500"
                  size={80}
                />
              </motion.div>
              <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                Bienvenue sur le réseau DRWINTECH !
              </h2>
              <p className="text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Vous êtes maintenant connecté à la Wi-Fi Zone.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center justify-center gap-4 mt-8 text-sm text-gray-500 sm:flex-row sm:gap-6 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Shield
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>Connexion sécurisée</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-blue-600 dark:text-blue-400" />
                  <span>Haute vitesse</span>
                </div>
              </motion.div>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden lg:flex-row bg-gray-50 dark:bg-gray-900">
      {/* Partie Gauche - Branding (cachée sur mobile, visible desktop) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex-col items-center justify-center flex-1 hidden p-8 lg:flex xl:p-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900"
      >
        {/* Effet de fond animé */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bg-white rounded-full w-96 h-96 blur-3xl -top-20 -left-20"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bg-blue-300 rounded-full w-96 h-96 blur-3xl -bottom-20 -right-20"
          />
        </div>

        {/* Contenu */}
        <div className="relative z-10 text-center text-white">
          {/* Logo */}
          <motion.div
            className="relative inline-block mb-8"
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/logo.png"
              alt="DRWINTECH Logo"
              className="object-contain w-100 h-100 xl:w-50 xl:h-50 drop-shadow-2xl"
            />

            {/* Effet de lueur */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/30 blur-2xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-4xl font-bold tracking-tight xl:text-5xl"
          >
            DRWINTECH INTC
          </motion.h1>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-6 py-2 mb-8 text-xs font-bold tracking-widest border-2 border-white rounded-full xl:text-sm"
          >
            PUSH BEYOND TODAY
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-4 text-blue-100"
          >
            <div className="flex items-center justify-center gap-3">
              <Lock size={22} />
              <span className="text-base xl:text-lg">
                Réseau sécurisé de bout en bout
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield size={22} />
              <span className="text-base xl:text-lg">
                Protection des données garantie
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Zap size={22} />
              <span className="text-base xl:text-lg">
                Connexion ultra-rapide
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Partie Droite - Formulaire (plein écran mobile, moitié desktop) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center justify-center flex-1 p-4 overflow-y-auto bg-white sm:p-8 dark:bg-gray-800"
      >
        {/* Theme Switcher */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
          <ThemeSwitcher />
        </div>

        <div className="w-full max-w-md">
          {/* Logo mobile uniquement */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6 lg:hidden"
          >
            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/logo.png"
                alt="DRWINTECH Logo"
                className="object-contain w-20 h-20 sm:w-24 sm:h-24 drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Titre mobile uniquement */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center mb-6 text-center lg:hidden"
          >
            <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              DRWINTECH INTC
            </h1>
            <div className="inline-block px-4 py-1 text-xs font-bold tracking-widest text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
              PUSH BEYOND TODAY
            </div>
          </motion.div>

          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Wifi className="text-blue-600 dark:text-blue-400" size={40} />
              </motion.div>
            </div>
            <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl dark:text-white">
              Wi-Fi Zone Entreprise
            </h2>
            <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              Connectez-vous pour accéder au réseau sécurisé DRWINTECH
            </p>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CardContainer>
              <LoginForm onSuccess={handleLoginSuccess} />

              {/* Informations */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 mt-4 text-xs text-gray-500 border-t sm:gap-4 dark:text-gray-400 dark:border-gray-700">
                <div className="flex items-center gap-1">
                  <Shield
                    size={14}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>Sécurisé</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Zap size={14} className="text-blue-600 dark:text-blue-400" />
                  <span>Rapide</span>
                </div>
              </div>
            </CardContainer>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center sm:mt-8"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2025 DRWINTECH INTC. Tous droits réservés.
            </p>
          </motion.footer>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
