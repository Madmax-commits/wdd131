// Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather data
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

// Wind chill calculation (metric formula)
function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

// Display wind chill if conditions are valid
const windchill = (temp <= 10 && speed > 4.8)
  ? `${calculateWindChill(temp, speed).toFixed(2)} °C`
  : "N/A";

document.getElementById("windchill").textContent = windchill;

