const authService = {
  login: async (identifier, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulation d'authentification
        if (identifier === "admin" && password === "drwintech2024") {
          resolve({
            success: true,
            user: {
              name: identifier,
              email: `${identifier}@drwintech.com`,
            },
          });
        } else {
          reject(new Error("Identifiants incorrects"));
        }
      }, 1500);
    });
  },
};

export default authService;
