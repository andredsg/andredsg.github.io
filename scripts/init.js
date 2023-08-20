let isDarkMode = true

const darkMode = {
    text      : '#f5f9f6',
    bg        : '#0f1a12',
    primary   : '#5e9c8e',
    secondary : '#92d5e8',
    accent    : '#6994a5',
    selection : '#6994a5cc',

    invert    : '100%' // invert black logos to white
}

const lightMode = {
    text      : '#0f1a12',
    bg        : '#f5f9f6',
    primary   : '#5e9c8e',
    secondary : '#153b48',
    accent    : '#2c4149',
    selection : '#2c4149cc',

    invert    : '0%'
}

function updateStyleColors() {
    let mode = isDarkMode ? darkMode : lightMode;
    document.documentElement.style.setProperty('--text', mode.text);
    document.documentElement.style.setProperty('--bg', mode.bg);
    document.documentElement.style.setProperty('--primary', mode.primary);
    document.documentElement.style.setProperty('--secondary', mode.secondary);
    document.documentElement.style.setProperty('--accent', mode.accent);
    document.documentElement.style.setProperty('--selection', mode.selection);

    document.documentElement.style.setProperty('--invert', mode.invert);
}

updateStyleColors()


/* Themes Gerator Functions */
function generateMonochromaticColorScheme() {

    let primary = [Math.random()*360, Math.random(), Math.random()]
   
    let dark_bg = [primary[0], Math.random(), Math.random()*0.25]
    let light_bg = [primary[0], Math.random()*0.2, 1-Math.random()*0.15]

    let dark_text = [primary[0], Math.random()*0.2, 1-Math.random()*0.15]
    let light_text = [primary[0], Math.random(), Math.random()*0.25]

    let dark_secondary = [primary[0], Math.random(), Math.random()]
    let light_secondary = [primary[0], 1-dark_secondary[1], 1-dark_secondary[2]]

    let dark_accent = [primary[0], primary[1]+Math.random()*(1-primary[1]), primary[2]+Math.random()*(1-primary[2])]
    let light_accent = [primary[0], primary[1]+Math.random()*(1-primary[1]), primary[2]+Math.random()*(1-primary[2])]

    darkMode.text      = hsvToHex(dark_text),
    darkMode.bg        = hsvToHex(dark_bg),
    darkMode.primary   = hsvToHex(primary),
    darkMode.secondary = hsvToHex(dark_secondary),
    darkMode.accent    = hsvToHex(dark_accent),
    darkMode.selection = hsvToHex(dark_accent)+'cc'
    
    lightMode.text      = hsvToHex(light_text),
    lightMode.bg        = hsvToHex(light_bg),
    lightMode.primary   = hsvToHex(primary),
    lightMode.secondary = hsvToHex(light_secondary),
    lightMode.accent    = hsvToHex(light_accent),
    lightMode.selection = hsvToHex(light_accent)+'cc'

}

function hsvToHex ([H, S, V]) {
    let f = (n) => { let k = (n+H/60)%6; return V - V * S * Math.max(0, Math.min(k, 4 - k, 1)); }

    let toHex = (n) => { i = Number(Math.floor(n*256)).toString(16); return i.length > 1 ? i : '0' + i; }

    return '#'+toHex(f(5))+toHex(f(3))+toHex(f(1))
}