/* Buttons Events */
document.getElementById("switchMode").addEventListener("click", () => {isDarkMode = !isDarkMode; updateStyleColors();}); 
document.getElementById("randomColors").addEventListener("click", () => {generateMonochromaticColorScheme(); updateStyleColors();}); 