function updateTime() {
    const now = new Date();
    document.getElementById('time').textContent = `Hora: ${now.toLocaleTimeString()}`;
    document.getElementById('date').textContent = `Fecha: ${now.toLocaleDateString()}`;
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById('location').textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Lng ${longitude.toFixed(2)}`;
        }, () => {
            document.getElementById('location').textContent = "Ubicación no disponible";
        });
    } else {
        document.getElementById('location').textContent = "Geolocalización no soportada";
    }
}

setInterval(updateTime, 1000);
updateTime();
updateLocation();
