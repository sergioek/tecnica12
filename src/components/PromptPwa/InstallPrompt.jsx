import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevenir que el prompt aparezca automáticamente
      e.preventDefault();
      setDeferredPrompt(e);
      // Mostrar el botón de instalación
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("El usuario aceptó la instalación");
        } else {
          console.log("El usuario rechazó la instalación");
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white p-4 text-center">
      <p>
        ¡Instala nuestra app para una mejor experiencia! Es rápida y accesible
        desde tu pantalla de inicio.
      </p>
      <button
        onClick={handleInstallClick}
        className="mt-2 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg"
      >
        Instalar ahora
      </button>
    </div>
  );
};

export default InstallPrompt;
