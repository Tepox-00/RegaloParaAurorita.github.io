
const letterButton = document.querySelector("#letterButton");
const styleSwitch = document.querySelector("#styleSwitch");
const styleCurrent = document.querySelector("#styleCurrent");
const themeLabel = document.querySelector("#themeLabel");
const birthdayMessage = document.querySelector("#birthdayMessage");
const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const bottomToast = document.querySelector("#bottomToast");
const waitCharacters = document.querySelectorAll(".wait-character");

const scene = document.querySelector(".scene");
const slideshowSection = document.querySelector("#slideshowSection");
const cakeSection = document.querySelector("#cakeSection");
const dialogueCard = document.querySelector("#dialogueCard");
const dialogueCharacter = document.querySelector("#dialogueCharacter");
const dialogueText = document.querySelector("#dialogueText");
const dialogueProgressBar = document.querySelector("#dialogueProgressBar");
const slideHelper = document.querySelector("#slideHelper");
const slideNextButton = document.querySelector("#slideNextButton");
const cakeKicker = document.querySelector("#cakeKicker");
const cakeTitle = document.querySelector("#cakeTitle");
const cakeMessage = document.querySelector("#cakeMessage");
const cakeImage = document.querySelector("#cakeImage");
const cakeCompanions = document.querySelector("#cakeCompanions");
const blowCandlesButton = document.querySelector("#blowCandlesButton");
const blowGameHint = document.querySelector("#blowGameHint");
const playMiniGameButton = document.querySelector("#playMiniGameButton");

const finalGameSection = document.querySelector("#finalGameSection");
const finalGameTitle = document.querySelector("#finalGameTitle");
const finalGameStatus = document.querySelector("#finalGameStatus");

const circusGamePanel = document.querySelector("#circusGamePanel");
const circusCanvas = document.querySelector("#circusCanvas");
const circusActionButton = document.querySelector("#circusActionButton");
const circusStick = document.querySelector("#circusStick");
const circusStickKnob = document.querySelector("#circusStickKnob");
const circusLookArea = document.querySelector("#circusLookArea");

const cinnamonGamePanel = document.querySelector("#cinnamonGamePanel");
const cinnamonCanvas = document.querySelector("#cinnamonCanvas");

const mcdonalsGamePanel = document.querySelector("#mcdonalsGamePanel");
const mcCustomerNumber = document.querySelector("#mcCustomerNumber");
const mcOrderText = document.querySelector("#mcOrderText");
const mcFails = document.querySelector("#mcFails");
const mcTimer = document.querySelector("#mcTimer");
const burgerBuilder = document.querySelector("#burgerBuilder");
const ingredientButtons = document.querySelector("#ingredientButtons");
const mcServeButton = document.querySelector("#mcServeButton");
const mcClearButton = document.querySelector("#mcClearButton");

// NOTA DE TEPOX: Aquí guardo los estilos que puede usar la página.
const styles = [
  {
    className: "style-digital-circus",
    label: "Circo Digital",
    birthday: "FELIZ CUMPLEAÑOOOS, espero que la pases bien en nuestro ASOMBROSO CIRCO DIGITAAL",
    cakeTitle: "¡Pantalla Pastel Digital!",
    cakeMessage: "Un pastel dramático, digital y perfectamente inevitable.",
    cakeImageCandidates: [
      "Assets/Image/Pasteles/Circo_Pastel.png",
      "Assets/Images/Pasteles/Circo_Pastel.png",
      "Image/Pasteles/Circo_Pastel.png",
    ],
    introImageCandidates: [
      "Assets/Image/Intro/CaineGif.gif",
      "Assets/Images/Intro/CaineGif.gif",
    ],
    introImageFlipped: true,
    companionFolder: "Assets/Image/Compañeros/Circo",
    companionCount: 7,
    musicPath: "Assets/Audio/CircoDigital_Music.mp3",
    musicVolume: 0.05,
  },
  {
    className: "style-cinnamon",
    label: "Cinamonn",
    birthday: "FELICIDADDEEES POR SE TU CUMPLEAÑOS, ven a pasarla bien y ver lo que te prepare.",
    cakeTitle: "Pastel suavecito de nubes",
    cakeMessage: "Pide un deseo tranquilo, dulce y lleno de cariño.",
    cakeImageCandidates: [
      "Assets/Image/Pasteles/Cinnamon_Pastel.png",
      "Assets/Images/Pasteles/Cinnamon_Pastel.png",
      "Image/Pasteles/Cinnamon_Pastel.png",
    ],
    introImageCandidates: [
      "Assets/Images/Intro/Cinnamon.gif",
      "Assets/Image/Intro/Cinnamon.gif",
    ],
    introImageFlipped: false,
    companionFolder: "Assets/Image/Compañeros/Cinnamon",
    companionCount: 5,
    musicPath: "Assets/Audio/Cinnamon_Music.mp3",
    musicVolume: 0.02,
  },
  {
    className: "style-mcdonals",
    label: "McDonals",
    birthday: "FELIZ CUMPLEAÑOOOS, Hoy por ser tu dia especial tendras un COMBO ASOMBROSO para ti",
    cakeTitle: "¡MacPastel de cumpleaños!",
    cakeMessage: "Tu orden especial viene con extra felicidad y velitas crujientes.",
    cakeImageCandidates: [
      "Assets/Image/Pasteles/McDonalds_Pastel.png",
      "Assets/Images/Pasteles/McDonalds_Pastel.png",
      "Image/Pasteles/McDonalds_Pastel.png",
    ],
    introImageCandidates: [
      "Assets/Images/Intro/McDonaldCat.png",
      "Assets/Image/Intro/McDonaldCat.png",
    ],
    introImageFlipped: false,
    companionFolder: "Assets/Image/Compañeros/McDonald",
    companionCount: 5,
    musicPath: "Assets/Audio/Mcdonald_Music.mp3",
    musicVolume: 0.02,
  },
];


// NOTA DE TEPOX: Aquí guardo los diálogos y audios de cada estilo.
const dialogueSets = {
  "style-digital-circus": {
    audioBasePaths: [
      "Assets/Audio/CircoDigital/Intro/",
      "Assets/Audios/CircoDigital/Intro/",
      "Audios/CircoDigital/Intro/",
    ],
    audioFiles: ["Caine_1.mp3", "Caine_2.mp3", "Caine_3.mp3", "Caine_4.mp3"],
    lines: [
      "¡Vaya, vaya, vaya! ¿Pero qué tenemos aquí? ¡Una CUMPLEAÑERA DIGITAL dentro de nuestro maravilloso circo!",
      "No te preocupes, querida cumpleañera. ¡Mi programación está perfectamente preparada para atender todas tus necesidades de festejo!",
      "Así que ponte cómoda, sonríe mucho y prepárate, porque te daré una felicitación como corresponde: ¡dramática, digital y absolutamente inevitable!",
      "¡Ahora vayamos a reunir a todos! ¡Un cumpleaños no se celebra solo… a menos que el sistema falle, claro!",
    ],
    requireManualAdvance: false,
  },
  "style-cinnamon": {
    audioBasePaths: [
      "Assets/Audios/Cinnamon/Intro/",
      "Assets/Audio/Cinnamon/Intro/",
      "Audios/Cinnamon/Intro/",
    ],
    audioFiles: ["Cinnamon_1.mp3", "Cinnamon_2.mp3", "Cinnamon_3.mp3", "Cinnamon_4.mp3"],
    lines: [
      "Oh… hola. Estaba descansando un poquito entre nubecitas…",
      "¿Eh? ¿Hoy es tu cumpleaños? ¡Qué bonito! Eso es algo muy, muy especial.",
      "Vamos por un pastel suavecito, algo rico para comer… y, claro, unos chiles morrones muy coloridos.",
      "Prometo acompañarte con mucho cariño. Hoy todo debe sentirse dulce, tranquilo y feliz.",
    ],
    requireManualAdvance: false,
  },
  "style-mcdonals": {
    audioBasePaths: [],
    audioFiles: [],
    lines: [
      "¡Hola! Bienvenido a McDonald’s. ¿Cuál será tu orden el día de hoy?",
      "Oh, espera… ¿escuché bien? ¿Hoy es tu cumpleaños?",
      "¡Eso es increíble! Entonces olvida por un momento los combos normales, porque hoy tenemos algo especial para ti.",
      "Por ser tu día, te vamos a preparar un combo de cumpleaños cortesía de la casa.",
      "Incluye una MacBurger especial, papitas bien crujientes y, por supuesto… ¡un MacPastel digno de celebración!",
      "Así que ponte cómoda, cumpleañera. Nosotros nos encargamos de que tu orden salga con extra felicidad.",
      "¡Felicidades! Que tu día esté lleno de sonrisas, pastel y muchas hamburguesas.",
    ],
    requireManualAdvance: true,
  },
};


// NOTA DE TEPOX: Aquí guardo las respuestas que salen al presionar Noporolo.
const noMessages = ["Apoco si?", "Andale ven a veeer", "Porfis Porfis", "Pq dices esa diablura", "ª", "iiijadelavrgaaa"];


// NOTA DE TEPOX: Aquí guardo estados que necesito mientras la página está corriendo.
let currentStyleIndex = 0;
let toastTimer = null;
let hideToastTimer = null;
let currentAudio = null;
let slideIsRunning = false;

const backgroundMusic = new Audio();
backgroundMusic.loop = true;
backgroundMusic.volume = getBackgroundMusicVolume();

let backgroundMusicUnlocked = false;
let activeBackgroundMusicPath = "";
let skipSlidesRequested = false;
let currentTypingInterval = null;
let blowGameActive = false;
let flamePower = 100;
let audioContext = null;
let microphoneStream = null;
let microphoneAnalyser = null;
let microphoneFrame = null;

let activeFinalGame = null;
let activeGameFrame = null;
let keysPressed = new Set();
let lastIngredientPressAt = 0;
let circusState = null;
let cinnamonState = null;
let mcdonalsState = null;
let mcdonalsTimerFrame = null;


function getBackgroundMusicVolume(styleInfo = getCurrentStyle()) {
  return typeof styleInfo.musicVolume === "number" ? styleInfo.musicVolume : 0.05;
}

function setBackgroundMusic(styleInfo) {
  if (!styleInfo.musicPath) return;

  const volume = getBackgroundMusicVolume(styleInfo);
  const isSameSong = activeBackgroundMusicPath === styleInfo.musicPath;

  backgroundMusic.loop = true;
  backgroundMusic.volume = volume;

  if (isSameSong) {
    if (backgroundMusicUnlocked && backgroundMusic.paused) {
      backgroundMusic.play().catch(() => {});
    }

    return;
  }

  activeBackgroundMusicPath = styleInfo.musicPath;
  backgroundMusic.pause();
  backgroundMusic.src = styleInfo.musicPath;
  backgroundMusic.currentTime = 0;

  if (backgroundMusicUnlocked) {
    backgroundMusic.play().catch(() => {});
  }
}

function unlockBackgroundMusic() {
  if (backgroundMusicUnlocked) return;

  backgroundMusicUnlocked = true;
  setBackgroundMusic(getCurrentStyle());

  if (activeBackgroundMusicPath) {
    backgroundMusic.play().catch(() => {});
  }
}

function pauseBackgroundMusic() {
  backgroundMusic.pause();
}

function resumeBackgroundMusic() {
  if (!backgroundMusicUnlocked || !activeBackgroundMusicPath) return;
  backgroundMusic.volume = getBackgroundMusicVolume();
  backgroundMusic.play().catch(() => {});
}


function playTapAnimation() {
  letterButton.classList.remove("is-tapping");
  void letterButton.offsetWidth;
  letterButton.classList.add("is-tapping");
}

function getCurrentStyle() {
  return styles[currentStyleIndex];
}


// NOTA DE TEPOX: Aquí cambio todo el tema visual activo.
function applyStyle(index) {
  const selectedStyle = styles[index];
  styles.forEach((style) => document.body.classList.remove(style.className));
  document.body.classList.add(selectedStyle.className);
  styleCurrent.textContent = selectedStyle.label;
  themeLabel.textContent = selectedStyle.label;
  birthdayMessage.textContent = selectedStyle.birthday;
  cakeTitle.textContent = selectedStyle.cakeTitle;
  cakeMessage.textContent = selectedStyle.cakeMessage;
  cakeKicker.textContent = `Pantalla Pastel ${selectedStyle.label}`;
  setImageWithFallback(cakeImage, selectedStyle.cakeImageCandidates);
  renderCompanions(selectedStyle);
  setBackgroundMusic(selectedStyle);
}

function switchToNextStyle() {
  if (slideIsRunning) return;
  currentStyleIndex = (currentStyleIndex + 1) % styles.length;
  window.addEventListener('keydown', (event) => {
  if ((event.key || "").toLowerCase() === "ñ") {
    skipToCakeForTesting();
  }
});


// NOTA DE TEPOX: Aquí conecto teclado, mouse, botones y controles táctiles.
document.addEventListener("keydown", (event) => {
  keysPressed.add((event.key || "").toLowerCase());

  if ((event.key || "").toLowerCase() === "e") {
    circusInteract();
  }
});

document.addEventListener("keyup", (event) => {
  keysPressed.delete((event.key || "").toLowerCase());
});

document.addEventListener("mousemove", (event) => {
  if (activeFinalGame === "circus" && document.pointerLockElement === circusCanvas) {
    circusState.angle += event.movementX * 0.002;
    circusState.pitch = clamp(circusState.pitch + event.movementY * 0.001, -0.22, 0.22);
  }
});

circusActionButton.addEventListener("click", circusInteract);

circusStick.addEventListener("pointerdown", (event) => {
  circusStick.setPointerCapture(event.pointerId);
});

circusStick.addEventListener("pointermove", (event) => {
  if (activeFinalGame !== "circus") return;

  const rect = circusStick.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = clamp((event.clientX - cx) / (rect.width / 2), -1, 1);
  const dy = clamp((event.clientY - cy) / (rect.height / 2), -1, 1);

  circusState.touchMove.x = dx;
  circusState.touchMove.y = dy;
  circusStickKnob.style.left = `${50 + dx * 32}%`;
  circusStickKnob.style.top = `${50 + dy * 32}%`;
});

function resetCircusStick() {
  if (!circusState) return;
  circusState.touchMove.x = 0;
  circusState.touchMove.y = 0;
  circusStickKnob.style.left = "50%";
  circusStickKnob.style.top = "50%";
}

circusStick.addEventListener("pointerup", resetCircusStick);
circusStick.addEventListener("pointercancel", resetCircusStick);

circusLookArea.addEventListener("pointerdown", (event) => {
  circusLookArea.setPointerCapture(event.pointerId);
  circusLookArea.dataset.lastX = String(event.clientX);
  circusLookArea.dataset.lastY = String(event.clientY);
});

circusLookArea.addEventListener("pointermove", (event) => {
  if (activeFinalGame !== "circus") return;

  const lastX = Number(circusLookArea.dataset.lastX || event.clientX);
  const lastY = Number(circusLookArea.dataset.lastY || event.clientY);
  const dx = event.clientX - lastX;
  const dy = event.clientY - lastY;

  circusState.angle += dx * 0.006;
  circusState.pitch = clamp(circusState.pitch + dy * 0.002, -0.22, 0.22);

  circusLookArea.dataset.lastX = String(event.clientX);
  circusLookArea.dataset.lastY = String(event.clientY);
});

circusLookArea.addEventListener("pointerup", () => {
  circusLookArea.dataset.lastX = "";
  circusLookArea.dataset.lastY = "";
});

function updateCinnamonPointerTarget(event) {
  if (activeFinalGame !== "cinnamon") return;

  event.preventDefault();

  const rect = cinnamonCanvas.getBoundingClientRect();
  const normalizedX = clamp((event.clientX - rect.left) / rect.width, 0.12, 0.88);

  // NOTA DE TEPOX: En móvil quiero que el personaje siga mi dedo, no que se mueva raro por rangos viejos.
  cinnamonState.targetX = normalizedX;
  cinnamonState.playerX = normalizedX;
}

cinnamonCanvas.addEventListener("pointerdown", (event) => {
  if (activeFinalGame !== "cinnamon") return;

  cinnamonCanvas.setPointerCapture(event.pointerId);
  updateCinnamonPointerTarget(event);
});

cinnamonCanvas.addEventListener("pointermove", (event) => {
  if (activeFinalGame !== "cinnamon") return;

  const isTouch = event.pointerType === "touch";
  const isMouseDragging = event.buttons === 1;

  if (isTouch || isMouseDragging) {
    updateCinnamonPointerTarget(event);
  }
});

cinnamonCanvas.addEventListener("pointerup", (event) => {
  if (cinnamonCanvas.hasPointerCapture(event.pointerId)) {
    cinnamonCanvas.releasePointerCapture(event.pointerId);
  }
});

cinnamonCanvas.addEventListener("pointercancel", (event) => {
  if (cinnamonCanvas.hasPointerCapture(event.pointerId)) {
    cinnamonCanvas.releasePointerCapture(event.pointerId);
  }
});

ingredientButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-ingredient]");
  if (!button || button.disabled) return;
  addMcIngredient(button.dataset.ingredient, button);
});

mcServeButton.addEventListener("click", serveMcOrder);
mcClearButton.addEventListener("click", clearMcBurger);

applyStyle(currentStyleIndex);
setBackgroundMusic(getCurrentStyle());
}

function getViewportBox() {
  const viewport = window.visualViewport;
  return {
    width: viewport ? viewport.width : window.innerWidth,
    height: viewport ? viewport.height : window.innerHeight,
    left: viewport ? viewport.offsetLeft : 0,
    top: viewport ? viewport.offsetTop : 0,
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function showFloatingNoText(event) {
  const randomIndex = Math.floor(Math.random() * noMessages.length);
  bottomToast.textContent = noMessages[randomIndex];
  clearTimeout(toastTimer);
  clearTimeout(hideToastTimer);
  bottomToast.classList.remove("is-visible", "is-hiding");
  bottomToast.style.opacity = "0";
  bottomToast.style.left = "0px";
  bottomToast.style.top = "0px";

  const viewport = getViewportBox();
  const clickX = typeof event.clientX === "number" ? event.clientX : viewport.left + viewport.width / 2;
  const clickY = typeof event.clientY === "number" ? event.clientY : viewport.top + viewport.height / 2;

  requestAnimationFrame(() => {
    const toastRect = bottomToast.getBoundingClientRect();
    const margin = 12;
    const minX = viewport.left + margin + toastRect.width / 2;
    const maxX = viewport.left + viewport.width - margin - toastRect.width / 2;
    const minY = viewport.top + margin + toastRect.height;
    const maxY = viewport.top + viewport.height - margin;
    const finalX = clamp(clickX, minX, Math.max(minX, maxX));
    const finalY = clamp(clickY - 6, minY, Math.max(minY, maxY));

    bottomToast.style.left = `${finalX}px`;
    bottomToast.style.top = `${finalY}px`;
    bottomToast.style.opacity = "";
    void bottomToast.offsetWidth;
    bottomToast.classList.add("is-visible");

    toastTimer = setTimeout(() => {
      bottomToast.classList.remove("is-visible");
      bottomToast.classList.add("is-hiding");
    }, 1150);

    hideToastTimer = setTimeout(() => {
      bottomToast.classList.remove("is-hiding");
    }, 1650);
  });
}

function getRunawayZones() {
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  if (isMobile) {
    return [
      { xMin: 0.08, xMax: 0.28, yMin: 0.34, yMax: 0.48 },
      { xMin: 0.66, xMax: 0.84, yMin: 0.34, yMax: 0.5 },
      { xMin: 0.08, xMax: 0.26, yMin: 0.58, yMax: 0.72 },
      { xMin: 0.66, xMax: 0.84, yMin: 0.58, yMax: 0.74 },
      { xMin: 0.35, xMax: 0.54, yMin: 0.76, yMax: 0.84 },
    ];
  }
  return [
    { xMin: 0.08, xMax: 0.2, yMin: 0.28, yMax: 0.42 },
    { xMin: 0.78, xMax: 0.9, yMin: 0.28, yMax: 0.42 },
    { xMin: 0.08, xMax: 0.22, yMin: 0.68, yMax: 0.82 },
    { xMin: 0.74, xMax: 0.88, yMin: 0.68, yMax: 0.82 },
    { xMin: 0.32, xMax: 0.48, yMin: 0.79, yMax: 0.87 },
    { xMin: 0.56, xMax: 0.72, yMin: 0.52, yMax: 0.66 },
  ];
}

function moveNoButton() {
  const viewport = getViewportBox();
  const buttonWidth = noButton.offsetWidth || 180;
  const buttonHeight = noButton.offsetHeight || 62;
  const safeMargin = 14;
  const zones = getRunawayZones();
  const zone = zones[Math.floor(Math.random() * zones.length)];

  const zoneMinX = viewport.left + viewport.width * zone.xMin;
  const zoneMaxX = viewport.left + viewport.width * zone.xMax;
  const zoneMinY = viewport.top + viewport.height * zone.yMin;
  const zoneMaxY = viewport.top + viewport.height * zone.yMax;

  const globalMinX = viewport.left + safeMargin;
  const globalMaxX = viewport.left + viewport.width - buttonWidth - safeMargin;
  const globalMinY = viewport.top + safeMargin;
  const globalMaxY = viewport.top + viewport.height - buttonHeight - safeMargin;

  const minX = clamp(zoneMinX, globalMinX, globalMaxX);
  const maxX = clamp(zoneMaxX - buttonWidth, globalMinX, globalMaxX);
  const minY = clamp(zoneMinY, globalMinY, globalMaxY);
  const maxY = clamp(zoneMaxY - buttonHeight, globalMinY, globalMaxY);

  const usableMaxX = Math.max(minX, maxX);
  const usableMaxY = Math.max(minY, maxY);

  const finalX = minX + Math.random() * (usableMaxX - minX);
  const finalY = minY + Math.random() * (usableMaxY - minY);

  noButton.classList.add("is-running-away");
  noButton.style.setProperty("--runaway-left", `${finalX}px`);
  noButton.style.setProperty("--runaway-top", `${finalY}px`);
}

function handleNoButton(event) {
  showFloatingNoText(event);
  moveNoButton();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function typeText(text, onProgress) {
  return new Promise((resolve) => {
    dialogueText.textContent = "";
    let index = 0;
    const speed = window.matchMedia("(max-width: 640px)").matches ? 24 : 20;
    const timer = setInterval(() => {
      dialogueText.textContent += text[index] || "";
      index += 1;
      if (typeof onProgress === "function") {
        onProgress(Math.min(index / text.length, 1));
      }
      if (index >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

function setImageWithFallback(img, candidates = [], flipped = false) {
  img.classList.remove('is-missing', 'is-flipped');
  if (flipped) img.classList.add('is-flipped');

  let idx = 0;
  const tryNext = () => {
    if (idx >= candidates.length) {
      img.removeAttribute('src');
      img.classList.add('is-missing');
      img.onerror = null;
      return;
    }
    img.src = candidates[idx];
    idx += 1;
  };

  img.onerror = () => tryNext();
  img.onload = () => img.classList.remove('is-missing');
  tryNext();
}

function getAudioCandidates(set, index) {
  const fileName = set.audioFiles[index];
  if (!fileName) return [];
  return set.audioBasePaths.map((basePath) => `${basePath}${fileName}`);
}

function stopCurrentAudio() {
  if (!currentAudio) return;

  const audio = currentAudio;

  try {
    audio.pause();
    audio.currentTime = 0;
  } catch (error) {
  }

  if (typeof audio._forceDone === "function") {
    audio._forceDone();
  }

  currentAudio = null;
  backgroundMusic.volume = getBackgroundMusicVolume();
}

function playSingleAudio(src) {
  return new Promise((resolve, reject) => {
    const audio = new Audio(src);
    currentAudio = audio;
    backgroundMusic.volume = getBackgroundMusicVolume() * 0.5;

    let finished = false;

    const cleanup = () => {
      audio.onended = null;
      audio.onerror = null;
      audio._forceDone = null;
      audio._forceFail = null;
    };

    const done = () => {
      if (finished) return;
      finished = true;
      cleanup();

      if (currentAudio === audio) {
        currentAudio = null;
      }

      backgroundMusic.volume = getBackgroundMusicVolume();
      resolve(true);
    };

    const fail = () => {
      if (finished) return;
      finished = true;
      cleanup();

      if (currentAudio === audio) {
        currentAudio = null;
      }

      backgroundMusic.volume = getBackgroundMusicVolume();
      reject(new Error("No se pudo reproducir el audio."));
    };

    audio._forceDone = done;
    audio._forceFail = fail;

    audio.onended = done;
    audio.onerror = fail;

    const playPromise = audio.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(fail);
    }
  });
}

async function playAudioFromCandidates(candidates) {
  if (!candidates.length) return false;

  stopCurrentAudio();
  for (const candidate of candidates) {
    try {
      await playSingleAudio(candidate);
      return true;
    } catch (error) {
      stopCurrentAudio();
    }
  }

  return false;
}

async function playDialogueAudio(set, index) {
  stopCurrentAudio();
  const candidates = getAudioCandidates(set, index);
  return playAudioFromCandidates(candidates);
}

function waitForNextClick() {
  return new Promise((resolve) => {
    slideNextButton.hidden = false;
    const handler = () => {
      slideNextButton.hidden = true;
      slideNextButton.removeEventListener('click', handler);
      resolve();
    };
    slideNextButton.addEventListener('click', handler);
  });
}

function skipToCakeForTesting() {
  if (!slideIsRunning) return;

  skipSlidesRequested = true;

  if (currentTypingInterval) {
    clearInterval(currentTypingInterval);
    currentTypingInterval = null;
  }

  stopCurrentAudio();

  slideNextButton.hidden = true;
  dialogueProgressBar.style.width = "100%";
  slideshowSection.hidden = true;
  cakeSection.hidden = false;
  resetBlowGame();
  slideIsRunning = false;
}

async function showDialogue(set, styleInfo, text, index) {
  dialogueCard.classList.remove('is-changing');
  void dialogueCard.offsetWidth;
  dialogueCard.classList.add('is-changing');

  setImageWithFallback(dialogueCharacter, styleInfo.introImageCandidates, styleInfo.introImageFlipped);
  dialogueProgressBar.style.width = '0%';
  slideNextButton.hidden = true;
  slideHelper.textContent = '';

  const typingPromise = typeText(text, (progress) => {
    dialogueProgressBar.style.width = `${Math.round(progress * 100)}%`;
  });

  const audioPromise = playDialogueAudio(set, index);

  const [_, hasAudio] = await Promise.all([typingPromise, audioPromise]);
  dialogueProgressBar.style.width = '100%';

  if (hasAudio) {
    slideHelper.textContent = '';
    await wait(420);
    return;
  }

  if (set.requireManualAdvance) {
    slideHelper.textContent = '';
    await waitForNextClick();
    return;
  }

  slideHelper.textContent = '';
  await wait(1200);
}

// NOTA DE TEPOX: Aquí arranco la parte de diálogos.
async function startSlideshow() {
  if (slideIsRunning) return;
  slideIsRunning = true;
  skipSlidesRequested = false;

  const selectedStyle = getCurrentStyle();
  const set = dialogueSets[selectedStyle.className];

  scene.classList.add('is-hidden');
  cakeSection.hidden = true;
  slideshowSection.hidden = false;
  setImageWithFallback(dialogueCharacter, selectedStyle.introImageCandidates, selectedStyle.introImageFlipped);
  setImageWithFallback(cakeImage, selectedStyle.cakeImageCandidates);
  renderCompanions(selectedStyle);
  setBackgroundMusic(selectedStyle);
  resetBlowGame();

  await wait(280);

  for (let index = 0; index < set.lines.length; index += 1) {
    await showDialogue(set, selectedStyle, set.lines[index], index);

    if (skipSlidesRequested) {
      return;
    }
  }

  slideshowSection.hidden = true;
  cakeSection.hidden = false;
  resetBlowGame();
  slideIsRunning = false;
}


function renderCompanions(styleInfo) {
  cakeCompanions.innerHTML = "";

  for (let index = 1; index <= styleInfo.companionCount; index += 1) {
    const img = document.createElement("img");
    img.className = `companion companion-${index}`;
    img.alt = "";
    img.src = `${styleInfo.companionFolder}/Compa_${index}.png`;

    img.addEventListener("error", () => {
      img.classList.add("is-missing");
    });

    cakeCompanions.appendChild(img);
  }
}

function updateFlames() {
  const normalizedPower = Math.max(0, Math.min(flamePower, 100)) / 100;
  cakeSection.style.setProperty("--flame-power", normalizedPower.toFixed(2));

  document.querySelectorAll(".candle").forEach((candle) => {
    candle.classList.toggle("is-out", normalizedPower <= 0);
  });

  if (normalizedPower <= 0) {
    finishBlowGame();
  }
}

function reduceFlame(amount) {
  if (!blowGameActive) return;

  flamePower = Math.max(0, flamePower - amount);
  updateFlames();
}

function finishBlowGame() {
  if (!blowGameActive) return;

  blowGameActive = false;
  cakeSection.classList.remove("is-blowing");
  blowCandlesButton.classList.add("is-finished");
  blowCandlesButton.textContent = "Velas Apagadas";
  blowGameHint.textContent = "Listo, las velitas ya se apagaron. Ahora puedes iniciar el mini-juego.";
  playMiniGameButton.hidden = false;

  stopMicrophoneBlowDetection();
}


// NOTA DE TEPOX: Aquí reinicio el juego de soplar velas.
function resetBlowGame() {
  blowGameActive = false;
  flamePower = 100;
  cakeSection.classList.remove("is-blowing");
  blowCandlesButton.classList.remove("is-finished");
  blowCandlesButton.textContent = "Soplar las Velas";
  blowGameHint.textContent = "Presiona el botón y sopla al micrófono o toca rápido la pantalla.";
  playMiniGameButton.hidden = true;
  updateFlames();
  stopMicrophoneBlowDetection();
}

async function startMicrophoneBlowDetection() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    blowGameHint.textContent = "Micrófono no disponible. Toca rápido la pantalla para apagar las velas.";
    return;
  }

  try {
    microphoneStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(microphoneStream);

    microphoneAnalyser = audioContext.createAnalyser();
    microphoneAnalyser.fftSize = 1024;
    source.connect(microphoneAnalyser);

    const data = new Uint8Array(microphoneAnalyser.fftSize);

    const readMicrophone = () => {
      if (!blowGameActive || !microphoneAnalyser) return;

      microphoneAnalyser.getByteTimeDomainData(data);

      let sum = 0;

      for (const value of data) {
        const centered = value - 128;
        sum += centered * centered;
      }

      const volume = Math.sqrt(sum / data.length);

      if (volume > 18) {
        reduceFlame(Math.min(6, volume / 9));
      }

      microphoneFrame = requestAnimationFrame(readMicrophone);
    };

    blowGameHint.textContent = "Sopla al micrófono o toca rápido la pantalla.";
    readMicrophone();
  } catch (error) {
    blowGameHint.textContent = "No pude usar el micrófono. Toca rápido la pantalla para apagar las velas.";
  }
}

function stopMicrophoneBlowDetection() {
  if (microphoneFrame) {
    cancelAnimationFrame(microphoneFrame);
    microphoneFrame = null;
  }

  if (microphoneStream) {
    microphoneStream.getTracks().forEach((track) => track.stop());
    microphoneStream = null;
  }

  if (audioContext) {
    audioContext.close().catch(() => {});
    audioContext = null;
  }

  microphoneAnalyser = null;
}


// NOTA DE TEPOX: Aquí empiezo a detectar soplidos o toques rápidos.
function startBlowGame() {
  if (blowGameActive) return;

  resetBlowGame();
  blowGameActive = true;
  cakeSection.classList.add("is-blowing");
  blowCandlesButton.textContent = "Sopla o toca rápido";
  blowGameHint.textContent = "Activando micrófono... también puedes tocar rápido la pantalla.";

  startMicrophoneBlowDetection();
}

function handleCakeTapForBlowGame(event) {
  if (!blowGameActive) return;

  const clickedButton = event.target.closest("#blowCandlesButton");

  if (clickedButton) return;

  reduceFlame(7);
}


function hideAllFinalGamePanels() {
  circusGamePanel.hidden = true;
  cinnamonGamePanel.hidden = true;
  mcdonalsGamePanel.hidden = true;
}

function cancelActiveGameFrame() {
  if (activeGameFrame) {
    cancelAnimationFrame(activeGameFrame);
    activeGameFrame = null;
  }
}


// NOTA DE TEPOX: Aquí decido qué mini juego toca según el estilo activo.
function startUniqueMiniGame() {
  const styleInfo = getCurrentStyle();

  stopMicrophoneBlowDetection();
  cancelActiveGameFrame();

  cakeSection.hidden = true;
  finalGameSection.hidden = false;
  finalGameSection.classList.remove("is-circus-game", "is-cinnamon-game", "is-mcdonals-game");
  hideAllFinalGamePanels();

  if (styleInfo.className === "style-digital-circus") {
    finalGameSection.classList.add("is-circus-game");
    startCircusGame(styleInfo);
    return;
  }

  if (styleInfo.className === "style-cinnamon") {
    finalGameSection.classList.add("is-cinnamon-game");
    startCinnamonGame(styleInfo);
    return;
  }

  finalGameSection.classList.add("is-mcdonals-game");
  startMcdonalsGame(styleInfo);
}

function finishFinalGame(message = "Juego terminado.") {
  cancelActiveGameFrame();

  if (mcdonalsTimerFrame) {
    cancelAnimationFrame(mcdonalsTimerFrame);
    mcdonalsTimerFrame = null;
  }

  activeFinalGame = null;
  finalGameStatus.textContent = message;

  setTimeout(() => {
    stopMicrophoneBlowDetection();

    finalGameSection.hidden = true;
    finalGameSection.classList.remove("is-circus-game", "is-cinnamon-game", "is-mcdonals-game");
    cakeSection.hidden = true;
    slideshowSection.hidden = true;
    scene.classList.remove("is-hidden");

    noButton.classList.remove("is-running-away");
    noButton.style.removeProperty("--runaway-left");
    noButton.style.removeProperty("--runaway-top");

    resetBlowGame();

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, 1400);
}

function loadImageForGame(src) {
  const img = new Image();
  img.src = src;
  return img;
}


function requestLandscapeForCircus() {
  const root = document.documentElement;

  if (root.requestFullscreen) {
    root.requestFullscreen().catch(() => {});
  }

  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("landscape").catch(() => {});
  }
}


// NOTA DE TEPOX: Aquí inicio el mini juego 3D del Circo Digital.
function startCircusGame(styleInfo) {
  activeFinalGame = "circus";
  finalGameTitle.textContent = "Circo Digital 3D";
  finalGameStatus.textContent = "Vista 3D: WASD para moverte, mouse para mirar, E para interactuar.";
  circusGamePanel.hidden = false;

  requestLandscapeForCircus();

  const companions = [];
  const positions = [
    { x: -6.6, z: 11.5 },
    { x: -3.2, z: 14.3 },
    { x: 0.0, z: 15.5 },
    { x: 3.2, z: 14.3 },
    { x: 6.6, z: 11.5 },
    { x: -6.2, z: 18.2 },
    { x: 6.2, z: 18.2 },
  ];

  for (let index = 1; index <= styleInfo.companionCount; index += 1) {
    companions.push({
      x: positions[index - 1].x,
      z: positions[index - 1].z,
      img: loadImageForGame(`${styleInfo.companionFolder}/Compa_${index}.png`),
      served: false,
    });
  }

  circusState = {
    x: 0,
    z: 2.2,
    angle: 0,
    pitch: -0.06,
    cameraHeight: 1.35,
    cakePieces: 0,
    totalServed: 0,
    companions,
    table: { x: 0, z: 6.0 },
    lastTime: performance.now(),
    touchMove: { x: 0, y: 0 },
    touchLookDelta: 0,
    touchPitchDelta: 0,
    worldBounds: { minX: -9.4, maxX: 9.4, minZ: 1.1, maxZ: 21.5 },
  };

  circusCanvas.onclick = () => {
    if (document.pointerLockElement !== circusCanvas) {
      circusCanvas.requestPointerLock?.();
    }
  };

  drawCircusFrame();
}

function drawCircusFrame(now = performance.now()) {
  if (activeFinalGame !== "circus") return;

  const ctx = circusCanvas.getContext("2d");
  const w = circusCanvas.width;
  const h = circusCanvas.height;
  const dt = Math.min(0.05, (now - circusState.lastTime) / 1000);
  circusState.lastTime = now;

  updateCircusMovement(dt);

  ctx.clearRect(0, 0, w, h);
  drawCircus3DBackground(ctx, w, h);
  drawCircus3DFloor(ctx, w, h);
  drawCircus3DStage(ctx, w, h);
  drawCircus3DObjects(ctx, w, h);
  drawCircusHud(ctx, w, h);

  activeGameFrame = requestAnimationFrame(drawCircusFrame);
}

function updateCircusMovement(dt) {
  const moveSpeed = 5.4;
  const turnSpeed = 2.4;
  let forward = 0;
  let strafe = 0;

  if (keysPressed.has("w") || keysPressed.has("arrowup")) forward += 1;
  if (keysPressed.has("s") || keysPressed.has("arrowdown")) forward -= 1;
  if (keysPressed.has("a") || keysPressed.has("arrowleft")) strafe -= 1;
  if (keysPressed.has("d") || keysPressed.has("arrowright")) strafe += 1;

  forward += -circusState.touchMove.y;
  strafe += circusState.touchMove.x;

  circusState.angle += circusState.touchLookDelta * dt * turnSpeed;
  circusState.pitch = clamp(circusState.pitch + circusState.touchPitchDelta * dt * 0.9, -0.22, 0.22);

  const length = Math.hypot(forward, strafe) || 1;
  forward /= length;
  strafe /= length;

  const sin = Math.sin(circusState.angle);
  const cos = Math.cos(circusState.angle);
  circusState.x += (sin * forward + cos * strafe) * moveSpeed * dt;
  circusState.z += (cos * forward - sin * strafe) * moveSpeed * dt;

  const b = circusState.worldBounds;
  circusState.x = clamp(circusState.x, b.minX, b.maxX);
  circusState.z = clamp(circusState.z, b.minZ, b.maxZ);
}

function transformCircusPoint(x, y, z) {
  const dx = x - circusState.x;
  const dz = z - circusState.z;

  const sin = Math.sin(circusState.angle);
  const cos = Math.cos(circusState.angle);

  return {
    x: dx * cos - dz * sin,
    y: y - circusState.cameraHeight,
    z: dx * sin + dz * cos,
  };
}

function projectCircus3D(x, y, z, w, h) {
  const cam = transformCircusPoint(x, y, z);

  if (cam.z <= 0.08) return null;

  const fov = 540;
  const screenX = w / 2 + (cam.x / cam.z) * fov;
  const horizon = h * (0.42 + circusState.pitch);
  const screenY = horizon - (cam.y / cam.z) * fov;

  return {
    x: screenX,
    y: screenY,
    z: cam.z,
    scale: fov / cam.z,
  };
}

function drawCircus3DBackground(ctx, w, h) {
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.56);
  sky.addColorStop(0, "#fff044");
  sky.addColorStop(0.33, "#ff315d");
  sky.addColorStop(0.72, "#5a2be2");
  sky.addColorStop(1, "#245cff");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h * 0.56);

  ctx.fillStyle = "#100c1b";
  ctx.fillRect(0, h * 0.56, w, h * 0.44);

  ctx.fillStyle = "rgba(255,255,255,0.18)";
  for (let i = 0; i < 18; i += 1) {
    ctx.beginPath();
    ctx.moveTo(w / 2, h * 0.16);
    ctx.lineTo((i / 18) * w, h * 0.56);
    ctx.lineTo(((i + 0.45) / 18) * w, h * 0.56);
    ctx.closePath();
    ctx.fill();
  }
}

function drawProjectedQuad(ctx, points, fillStyle, strokeStyle = "rgba(32,20,45,0.45)") {
  const visible = points.every(Boolean);
  if (!visible) return;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineTo(points[1].x, points[1].y);
  ctx.lineTo(points[2].x, points[2].y);
  ctx.lineTo(points[3].x, points[3].y);
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();

  if (strokeStyle) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }
}

function drawCircus3DFloor(ctx, w, h) {
  const nearZ = Math.max(0, circusState.z - 1);
  const farZ = circusState.z + 24;
  const minX = -11;
  const maxX = 11;
  for (let z = Math.floor(farZ); z >= Math.floor(nearZ); z -= 1) {
    for (let x = minX; x < maxX; x += 1) {
      const p1 = projectCircus3D(x, 0, z, w, h);
      const p2 = projectCircus3D(x + 1, 0, z, w, h);
      const p3 = projectCircus3D(x + 1, 0, z + 1, w, h);
      const p4 = projectCircus3D(x, 0, z + 1, w, h);

      if (!p1 || !p2 || !p3 || !p4) continue;

      const minScreenX = Math.min(p1.x, p2.x, p3.x, p4.x);
      const maxScreenX = Math.max(p1.x, p2.x, p3.x, p4.x);
      const minScreenY = Math.min(p1.y, p2.y, p3.y, p4.y);
      const maxScreenY = Math.max(p1.y, p2.y, p3.y, p4.y);

      if (maxScreenX < -80 || minScreenX > w + 80 || maxScreenY < -80 || minScreenY > h + 80) {
        continue;
      }
      const tinyTile = (maxScreenX - minScreenX) < 2 || (maxScreenY - minScreenY) < 2;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.closePath();

      ctx.fillStyle = (x + z) % 2 === 0 ? "#fff7cf" : "#160d24";
      ctx.fill();

      if (!tinyTile) {
        ctx.strokeStyle = "rgba(32,20,45,0.24)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 1;

  for (let x = minX; x <= maxX; x += 4) {
    const near = projectCircus3D(x, 0.01, nearZ, w, h);
    const far = projectCircus3D(x, 0.01, farZ, w, h);

    if (!near || !far) continue;

    ctx.beginPath();
    ctx.moveTo(near.x, near.y);
    ctx.lineTo(far.x, far.y);
    ctx.stroke();
  }
}

function drawCircus3DStage(ctx, w, h) {
  const leftX = -10.5;
  const rightX = 10.5;
  const frontZ = 22.2;
  const backZ = 25.2;
  const floorY = 0.05;
  const stageTopY = 0.85;
  drawProjectedQuad(ctx, [
    projectCircus3D(leftX, stageTopY, frontZ, w, h),
    projectCircus3D(rightX, stageTopY, frontZ, w, h),
    projectCircus3D(rightX, stageTopY, backZ, w, h),
    projectCircus3D(leftX, stageTopY, backZ, w, h),
  ], "#ff2c49", "#20142d");
  drawProjectedQuad(ctx, [
    projectCircus3D(leftX, floorY, frontZ, w, h),
    projectCircus3D(rightX, floorY, frontZ, w, h),
    projectCircus3D(rightX, stageTopY, frontZ, w, h),
    projectCircus3D(leftX, stageTopY, frontZ, w, h),
  ], "#c51e3a", "#20142d");
  drawProjectedQuad(ctx, [
    projectCircus3D(leftX, stageTopY, backZ, w, h),
    projectCircus3D(rightX, stageTopY, backZ, w, h),
    projectCircus3D(rightX, 5.2, backZ, w, h),
    projectCircus3D(leftX, 5.2, backZ, w, h),
  ], "#ff315d", "#20142d");
  for (let i = -10; i < 10; i += 2.5) {
    drawProjectedQuad(ctx, [
      projectCircus3D(i, stageTopY, backZ - 0.02, w, h),
      projectCircus3D(i + 0.75, stageTopY, backZ - 0.02, w, h),
      projectCircus3D(i + 1.2, 5.2, backZ - 0.02, w, h),
      projectCircus3D(i + 0.45, 5.2, backZ - 0.02, w, h),
    ], "#ffe947", null);
  }
  drawCircusPost(ctx, w, h, leftX, frontZ, floorY, 5.4, "#20142d");
  drawCircusPost(ctx, w, h, rightX, frontZ, floorY, 5.4, "#20142d");
  drawCircusPost(ctx, w, h, leftX, backZ, stageTopY, 5.4, "#20142d");
  drawCircusPost(ctx, w, h, rightX, backZ, stageTopY, 5.4, "#20142d");
  const sign = projectCircus3D(0, 4.55, backZ - 0.06, w, h);
  if (sign) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#20142d";
    ctx.lineWidth = 7;
    ctx.font = `bold ${Math.max(22, Math.min(56, sign.scale * 0.17))}px system-ui`;
    ctx.textAlign = "center";
    ctx.strokeText("ESCENARIO", sign.x, sign.y);
    ctx.fillText("ESCENARIO", sign.x, sign.y);
  }
}

function drawCircusPost(ctx, w, h, x, z, y1, y2, color) {
  const bottom = projectCircus3D(x, y1, z, w, h);
  const top = projectCircus3D(x, y2, z, w, h);

  if (!bottom || !top) return;

  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(5, top.scale * 0.035);
  ctx.beginPath();
  ctx.moveTo(bottom.x, bottom.y);
  ctx.lineTo(top.x, top.y);
  ctx.stroke();

  ctx.fillStyle = "#ffe947";
  ctx.beginPath();
  ctx.arc(top.x, top.y, Math.max(5, top.scale * 0.035), 0, Math.PI * 2);
  ctx.fill();
}

function drawCircus3DObjects(ctx, w, h) {
  const drawables = [];

  drawables.push({
    z: transformCircusPoint(circusState.table.x, 0, circusState.table.z).z,
    draw: () => drawCircus3DTable(ctx, w, h),
  });

  for (const companion of circusState.companions) {
    drawables.push({
      z: transformCircusPoint(companion.x, 0, companion.z).z,
      draw: () => drawCircus3DCompanion(ctx, w, h, companion),
    });
  }

  drawables
    .filter((item) => item.z > 0.08)
    .sort((a, b) => b.z - a.z)
    .forEach((item) => item.draw());

  drawCircusHeldCake(ctx, w, h);
}

function drawCircus3DTable(ctx, w, h) {
  const p = projectCircus3D(circusState.table.x, 0.05, circusState.table.z, w, h);
  if (!p) return;

  const near = Math.hypot(circusState.x - circusState.table.x, circusState.z - circusState.table.z) < 1.7;
  const width = Math.min(310, 1.9 * p.scale);
  const height = Math.min(110, 0.78 * p.scale);

  ctx.save();
  ctx.translate(p.x, p.y);

  if (near && circusState.cakePieces <= 0) {
    ctx.fillStyle = "rgba(76,255,176,0.34)";
    ctx.beginPath();
    ctx.ellipse(0, height * 0.3, width * 0.68, height * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = near ? "#4cffb0" : "#ffde45";
  ctx.strokeStyle = "#20142d";
  ctx.lineWidth = Math.max(3, p.scale * 0.035);
  ctx.beginPath();
  ctx.roundRect(-width / 2, -height / 2, width, height, 18);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#20142d";
  ctx.font = `bold ${Math.max(14, Math.min(28, p.scale * 0.16))}px system-ui`;
  ctx.textAlign = "center";
  ctx.fillText("MESA", 0, -4);
  ctx.fillText("PASTEL", 0, 24);
  ctx.restore();
}

function drawCircus3DCompanion(ctx, w, h, companion) {
  const p = projectCircus3D(companion.x, 0, companion.z, w, h);
  if (!p) return;

  const near = Math.hypot(circusState.x - companion.x, circusState.z - companion.z) < 1.8;
  const spriteHeight = Math.min(260, Math.max(62, p.scale * 1.25));
  const spriteWidth = spriteHeight * 0.72;

  ctx.save();
  ctx.globalAlpha = companion.served ? 0.45 : 1;

  if (near && !companion.served) {
    ctx.fillStyle = "rgba(76,255,176,0.34)";
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 14, spriteWidth * 0.65, spriteHeight * 0.16, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  if (companion.img.complete && companion.img.naturalWidth > 0) {
    ctx.drawImage(companion.img, p.x - spriteWidth / 2, p.y - spriteHeight, spriteWidth, spriteHeight);
  } else {
    ctx.fillStyle = "#ff2c49";
    ctx.beginPath();
    ctx.arc(p.x, p.y - spriteHeight * 0.55, spriteWidth * 0.35, 0, Math.PI * 2);
    ctx.fill();
  }

  if (companion.served) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#20142d";
    ctx.lineWidth = 5;
    ctx.font = `bold ${Math.max(24, spriteHeight * 0.38)}px system-ui`;
    ctx.textAlign = "center";
    ctx.strokeText("✓", p.x, p.y - spriteHeight * 0.7);
    ctx.fillText("✓", p.x, p.y - spriteHeight * 0.7);
  }

  ctx.restore();
}

function drawCircusHeldCake(ctx, w, h) {
  if (circusState.cakePieces <= 0) return;

  ctx.save();
  ctx.translate(w * 0.78, h * 0.76);

  ctx.fillStyle = "rgba(32,20,45,0.28)";
  ctx.beginPath();
  ctx.ellipse(0, 42, 90, 24, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#fff7cf";
  ctx.strokeStyle = "#20142d";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-70, -10);
  ctx.lineTo(70, 20);
  ctx.lineTo(-58, 54);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ff2c49";
  ctx.fillRect(-32, 8, 52, 16);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 20px system-ui";
  ctx.textAlign = "center";
  ctx.strokeText("LLEVAS PASTEL", 0, -24);
  ctx.fillText("LLEVAS PASTEL", 0, -24);

  ctx.restore();
}

function drawCircusHud(ctx, w, h) {
  const nearTable = Math.hypot(circusState.x - circusState.table.x, circusState.z - circusState.table.z) < 1.7;
  const nearCompanion = getNearestUnservedCompanion();

  ctx.fillStyle = "rgba(32,20,45,0.78)";
  ctx.fillRect(18, 18, 460, 132);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 22px system-ui";
  ctx.textAlign = "left";
  ctx.fillText(circusState.cakePieces > 0 ? "Pastel cargado: SÍ" : "Pastel cargado: NO", 36, 54);
  ctx.fillText(`Entregados: ${circusState.totalServed}/${circusState.companions.length}`, 36, 88);
  ctx.fillText("Una rebanada a la vez", 36, 122);

  if (nearTable && circusState.cakePieces <= 0) {
    finalGameStatus.textContent = "Estás en la mesa. Presiona E o Dar pastel para tomar las rebanadas.";
  } else if (nearCompanion && circusState.cakePieces > 0) {
    finalGameStatus.textContent = "Estás junto a un compañero. Presiona E o Dar pastel para entregar una rebanada.";
  } else if (circusState.cakePieces <= 0) {
    finalGameStatus.textContent = "No traes pastel. Vuelve a la mesa para tomar una rebanada.";
  } else {
    finalGameStatus.textContent = "Llevas una rebanada. Busca a un compañero sin palomita.";
  }
}

function getNearestUnservedCompanion() {
  return circusState.companions.find((companion) => {
    return !companion.served && Math.hypot(circusState.x - companion.x, circusState.z - companion.z) < 1.8;
  });
}

function circusInteract() {
  if (activeFinalGame !== "circus") return;

  const nearTable = Math.hypot(circusState.x - circusState.table.x, circusState.z - circusState.table.z) < 1.7;

  if (nearTable && circusState.cakePieces <= 0) {
    circusState.cakePieces = 1;
    finalGameStatus.textContent = "¡Ya cargas una rebanada! Entrégala y vuelve por otra.";
    return;
  }

  const companion = getNearestUnservedCompanion();

  if (companion && circusState.cakePieces > 0) {
    companion.served = true;
    circusState.cakePieces -= 1;
    circusState.totalServed += 1;
    finalGameStatus.textContent = "¡Pastel entregado! Ahora vuelve a la mesa por otra rebanada.";

    if (circusState.totalServed >= circusState.companions.length) {
      finishFinalGame("¡Todos recibieron pastel!");
    }
  }
}


// NOTA DE TEPOX: Aquí inicio el mini juego de Cinnamon.
function startCinnamonGame(styleInfo) {
  activeFinalGame = "cinnamon";
  finalGameTitle.textContent = "Viaje por las nubes";
  finalGameStatus.textContent = "Versión 2D: muévete a los lados y esquiva las nubecitas.";
  cinnamonGamePanel.hidden = false;

  cinnamonState = {
    playerX: 0.5,
    targetX: 0.5,
    distance: 0,
    targetDistance: 300,
    hearts: 3,
    clouds: [],
    lastSpawn: 0,
    lastTime: performance.now(),
    playerImg: loadImageForGame("Assets/Image/Compañeros/Cinnamon/Compa_1.png"),
  };

  drawCinnamonFrame();
}

function drawCinnamonFrame(now = performance.now()) {
  if (activeFinalGame !== "cinnamon") return;

  const ctx = cinnamonCanvas.getContext("2d");
  const w = cinnamonCanvas.width;
  const h = cinnamonCanvas.height;
  const dt = Math.min(0.05, (now - cinnamonState.lastTime) / 1000);
  cinnamonState.lastTime = now;

  updateCinnamon(dt);
  renderCinnamon(ctx, w, h);

  activeGameFrame = requestAnimationFrame(drawCinnamonFrame);
}

function updateCinnamon(dt) {
  let input = 0;
  if (keysPressed.has("a") || keysPressed.has("arrowleft")) input -= 1;
  if (keysPressed.has("d") || keysPressed.has("arrowright")) input += 1;

  cinnamonState.targetX = clamp(cinnamonState.targetX + input * dt * 1.25, 0.12, 0.88);
  cinnamonState.playerX += (cinnamonState.targetX - cinnamonState.playerX) * 0.22;

  cinnamonState.distance += dt * 7.5;
  cinnamonState.lastSpawn += dt;

  if (cinnamonState.lastSpawn > 0.8) {
    cinnamonState.lastSpawn = 0;

    const lanes = [0.18, 0.34, 0.5, 0.66, 0.82];
    const x = lanes[Math.floor(Math.random() * lanes.length)];

    cinnamonState.clouds.push({
      x,
      y: -0.12,
      width: 0.14 + Math.random() * 0.06,
      height: 0.075 + Math.random() * 0.035,
      speed: 0.33 + Math.random() * 0.12,
      color: ["#ffffff", "#ffe6f5", "#dff7ff", "#fff3b6"][Math.floor(Math.random() * 4)],
      hit: false,
    });
  }

  for (const cloud of cinnamonState.clouds) {
    cloud.y += dt * cloud.speed;
  }

  cinnamonState.clouds = cinnamonState.clouds.filter((cloud) => cloud.y < 1.15);

  const playerBox = getCinnamonPlayerBox();

  for (const cloud of cinnamonState.clouds) {
    if (cloud.hit) continue;

    const cloudBox = {
      left: cloud.x - cloud.width * 0.42,
      right: cloud.x + cloud.width * 0.42,
      top: cloud.y - cloud.height * 0.28,
      bottom: cloud.y + cloud.height * 0.28,
    };

    if (boxesOverlap(playerBox, cloudBox)) {
      cloud.hit = true;
      cinnamonState.hearts -= 1;
      finalGameStatus.textContent = `¡Nube golpeada! Corazones: ${cinnamonState.hearts}`;

      if (cinnamonState.hearts <= 0) {
        finalGameStatus.textContent = "Te chocaste con muchas nubes. Se repite.";
        setTimeout(() => startCinnamonGame(getCurrentStyle()), 800);
        return;
      }
    }
  }

  if (cinnamonState.distance >= cinnamonState.targetDistance) {
    finishFinalGame("¡Llegaste entre nubecitas!");
  }
}

function getCinnamonPlayerBox() {
  return {
    left: cinnamonState.playerX - 0.045,
    right: cinnamonState.playerX + 0.045,
    top: 0.76 - 0.06,
    bottom: 0.76 + 0.06,
  };
}

function boxesOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function renderCinnamon(ctx, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#86e4ff");
  bg.addColorStop(0.52, "#eaf9ff");
  bg.addColorStop(1, "#fff0fb");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "rgba(255,255,255,0.34)";
  for (let i = 0; i < 14; i += 1) {
    const y = (i * 76 + cinnamonState.distance * 10) % h;
    ctx.fillRect(w * 0.12, y, w * 0.76, 5);
  }

  ctx.strokeStyle = "rgba(108,134,170,0.34)";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.14, 0);
  ctx.lineTo(w * 0.14, h);
  ctx.moveTo(w * 0.86, 0);
  ctx.lineTo(w * 0.86, h);
  ctx.stroke();

  ctx.strokeStyle = "rgba(108,134,170,0.16)";
  ctx.lineWidth = 3;
  for (const lane of [0.18, 0.34, 0.5, 0.66, 0.82]) {
    ctx.beginPath();
    ctx.moveTo(w * lane, 0);
    ctx.lineTo(w * lane, h);
    ctx.stroke();
  }

  for (const cloud of cinnamonState.clouds) {
    const x = cloud.x * w;
    const y = cloud.y * h;
    const size = cloud.width * w;

    drawCloud(ctx, x, y, size, cloud.hit ? "#ff9ab6" : cloud.color, "#6c86aa");
  }

  drawCinnamonPlayer(ctx, cinnamonState.playerX * w, h * 0.76);

  ctx.fillStyle = "#6c86aa";
  ctx.font = "bold 26px system-ui";
  ctx.textAlign = "center";
  const progressPercent = Math.min(100, Math.floor((cinnamonState.distance / cinnamonState.targetDistance) * 100));
  ctx.fillText(`Progreso ${progressPercent}%   ♥ ${cinnamonState.hearts}`, w / 2, 42);
}

function drawCinnamonPlayer(ctx, x, y) {
  const img = cinnamonState.playerImg;
  const size = 120;

  ctx.save();

  ctx.fillStyle = "rgba(255,255,255,0.8)";
  drawCloud(ctx, x, y + 46, 128, "#ffffff", "#78bce7");

  if (img && img.complete && img.naturalWidth > 0) {
    ctx.drawImage(img, x - size / 2, y - size * 0.98, size, size);
  } else {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#78bce7";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y - 45, 44, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#78bce7";
    ctx.font = "bold 42px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("♡", x, y - 31);
  }
  ctx.strokeStyle = "rgba(108,134,170,0.35)";
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 43, y - 43, 86, 86);

  ctx.restore();
}

function drawCloud(ctx, x, y, size, fill = "#ffffff", stroke = "#6c86aa") {
  ctx.save();
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = Math.max(3, size * 0.045);

  ctx.beginPath();
  ctx.arc(x - size * 0.36, y, size * 0.28, Math.PI * 0.85, Math.PI * 1.85);
  ctx.arc(x - size * 0.05, y - size * 0.14, size * 0.38, Math.PI * 1.05, Math.PI * 2.05);
  ctx.arc(x + size * 0.33, y, size * 0.28, Math.PI * 1.15, Math.PI * 0.15);
  ctx.lineTo(x + size * 0.5, y + size * 0.18);
  ctx.lineTo(x - size * 0.5, y + size * 0.18);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}


const mcIngredients = ["Pan", "Tomate", "Carne", "Mayonesa", "Catsup", "Mostaza"];


// NOTA DE TEPOX: Aquí inicio el mini juego de hamburguesas.

function requestLandscapeForMcdonals() {
  const root = document.documentElement;

  if (root.requestFullscreen) {
    root.requestFullscreen().catch(() => {});
  }

  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("landscape").catch(() => {});
  }
}

function startMcdonalsGame() {
  activeFinalGame = "mcdonals";
  requestLandscapeForMcdonals();
  finalGameTitle.textContent = "Combo de cumpleaños";
  finalGameStatus.textContent = "Prepara 20 pedidos antes de que se acabe el tiempo.";
  mcdonalsGamePanel.hidden = false;

  lastIngredientPressAt = 0;

  mcdonalsState = {
    customer: 1,
    fails: 0,
    currentOrder: [],
    currentBurger: [],
    timeLimit: 15,
    timeLeft: 15,
    lastTimerTime: performance.now(),
  };

  nextMcOrder();
  updateMcdonalsTimer();
}


function getMcdonalsTimeLimit() {
  const start = 15;
  const minimum = 4;
  const progress = (mcdonalsState.customer - 1) / 19;
  return Math.max(minimum, start - (start - minimum) * progress);
}

function updateMcdonalsTimer(now = performance.now()) {
  if (activeFinalGame !== "mcdonals" || !mcdonalsState) return;

  const dt = Math.min(0.25, (now - mcdonalsState.lastTimerTime) / 1000);
  mcdonalsState.lastTimerTime = now;
  mcdonalsState.timeLeft = Math.max(0, mcdonalsState.timeLeft - dt);

  if (mcTimer) {
    mcTimer.textContent = mcdonalsState.timeLeft.toFixed(1);
    mcTimer.parentElement.classList.toggle("is-low", mcdonalsState.timeLeft <= 4.5);
  }

  if (mcdonalsState.timeLeft <= 0) {
    failMcdonalsOrder("Se acabó el tiempo.");
    return;
  }

  mcdonalsTimerFrame = requestAnimationFrame(updateMcdonalsTimer);
}

function restartMcdonalsTimer() {
  if (mcdonalsTimerFrame) {
    cancelAnimationFrame(mcdonalsTimerFrame);
    mcdonalsTimerFrame = null;
  }

  mcdonalsState.timeLimit = getMcdonalsTimeLimit();
  mcdonalsState.timeLeft = mcdonalsState.timeLimit;
  mcdonalsState.lastTimerTime = performance.now();

  if (mcTimer) {
    mcTimer.textContent = mcdonalsState.timeLeft.toFixed(1);
    mcTimer.parentElement.classList.remove("is-low");
  }

  mcdonalsTimerFrame = requestAnimationFrame(updateMcdonalsTimer);
}

function failMcdonalsOrder(reason = "Orden incorrecta.") {
  if (activeFinalGame !== "mcdonals" || !mcdonalsState) return;

  if (mcdonalsTimerFrame) {
    cancelAnimationFrame(mcdonalsTimerFrame);
    mcdonalsTimerFrame = null;
  }

  mcdonalsState.fails += 1;
  finalGameStatus.textContent = `${reason} Fallos: ${mcdonalsState.fails}/5`;

  if (mcdonalsState.fails >= 5) {
    finalGameStatus.textContent = "Perdiste, se repite el juego.";
    setTimeout(startMcdonalsGame, 900);
    return;
  }

  setTimeout(() => {
    nextMcOrder();
  }, 650);
}

function nextMcOrder() {
  const insideCount = 1 + Math.floor(Math.random() * 4);
  const order = ["Pan"];

  for (let i = 0; i < insideCount; i += 1) {
    const ingredient = mcIngredients[1 + Math.floor(Math.random() * (mcIngredients.length - 1))];
    order.push(ingredient);
  }

  order.push("Pan");

  mcdonalsState.currentOrder = order;
  mcdonalsState.currentBurger = [];
  updateMcUI();
  restartMcdonalsTimer();
}

function ingredientToClass(ingredient) {
  return ingredient.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatOrderChips(order) {
  return order
    .map((ingredient) => {
      const cls = ingredientToClass(ingredient);
      return `<span class="order-chip order-chip--${cls}">${ingredient}</span>`;
    })
    .join("");
}

function updateMcUI() {
  mcCustomerNumber.textContent = String(mcdonalsState.customer);
  mcFails.textContent = String(mcdonalsState.fails);
  mcOrderText.innerHTML = formatOrderChips(mcdonalsState.currentOrder);

  burgerBuilder.querySelectorAll(".burger-layer, .burger-preview-text").forEach((el) => el.remove());

  const baseBottom = 58;

  mcdonalsState.currentBurger.forEach((ingredient, index) => {
    const layer = document.createElement("span");
    layer.className = `burger-layer layer-${ingredientToClass(ingredient)}`;
    layer.style.bottom = `${baseBottom + index * 30}px`;
    burgerBuilder.appendChild(layer);
  });

  const preview = document.createElement("p");
  preview.className = "burger-preview-text";
  preview.textContent = mcdonalsState.currentBurger.length
    ? `Tu hamburguesa: ${mcdonalsState.currentBurger.join(" + ")}`
    : "Tu hamburguesa está vacía.";
  burgerBuilder.appendChild(preview);
}

function addMcIngredient(ingredient, sourceButton = null) {
  if (activeFinalGame !== "mcdonals") return;

  const now = performance.now();
  if (now - lastIngredientPressAt < 180) {
    return;
  }

  lastIngredientPressAt = now;

  if (sourceButton) {
    sourceButton.classList.add("is-cooling");
    sourceButton.disabled = true;

    setTimeout(() => {
      sourceButton.disabled = false;
      sourceButton.classList.remove("is-cooling");
    }, 180);
  }

  mcdonalsState.currentBurger.push(ingredient);
  updateMcUI();
}

function clearMcBurger() {
  if (activeFinalGame !== "mcdonals") return;
  mcdonalsState.currentBurger = [];
  updateMcUI();
}

function arraysMatch(a, b) {
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

function serveMcOrder() {
  if (activeFinalGame !== "mcdonals") return;

  if (arraysMatch(mcdonalsState.currentBurger, mcdonalsState.currentOrder)) {
    finalGameStatus.textContent = "¡Orden correcta!";

    if (mcdonalsTimerFrame) {
      cancelAnimationFrame(mcdonalsTimerFrame);
      mcdonalsTimerFrame = null;
    }

    if (mcdonalsState.customer >= 20) {
      finishFinalGame("¡Los 20 clientes quedaron felices!");
      return;
    }

    mcdonalsState.customer += 1;
    setTimeout(nextMcOrder, 350);
    return;
  }

  mcdonalsState.currentBurger = [];
  updateMcUI();
  failMcdonalsOrder("Orden incorrecta.");
}

waitCharacters.forEach((character) => {
  character.dataset.fallbackTried = 'false';
  character.addEventListener('error', () => {
    if (character.dataset.fallbackTried === 'false') {
      character.dataset.fallbackTried = 'true';
      character.src = character.src.replace('/Assets/Image/', '/Assets/Images/');
      return;
    }
    character.classList.add('is-missing');
  });
});


document.addEventListener("pointerdown", unlockBackgroundMusic, { once: true });
document.addEventListener("keydown", unlockBackgroundMusic, { once: true });
styleSwitch.addEventListener("click", unlockBackgroundMusic);
letterButton.addEventListener("click", unlockBackgroundMusic);

letterButton.addEventListener('click', playTapAnimation);
letterButton.addEventListener('animationend', (event) => {
  if (event.animationName === 'chestTap') {
    letterButton.classList.remove('is-tapping');
  }
});

styleSwitch.addEventListener('click', switchToNextStyle);
yesButton.addEventListener('click', startSlideshow);
noButton.addEventListener('click', handleNoButton);
blowCandlesButton.addEventListener('click', startBlowGame);
playMiniGameButton.addEventListener('click', startUniqueMiniGame);
cakeSection.addEventListener('pointerdown', handleCakeTapForBlowGame);

window.addEventListener('resize', () => {
  if (noButton.classList.contains('is-running-away')) {
    moveNoButton();
  }
});

window.addEventListener('keydown', (event) => {
  if ((event.key || "").toLowerCase() === "ñ") {
    skipToCakeForTesting();
  }
});


document.addEventListener("keydown", (event) => {
  keysPressed.add((event.key || "").toLowerCase());

  if ((event.key || "").toLowerCase() === "e") {
    circusInteract();
  }
});

document.addEventListener("keyup", (event) => {
  keysPressed.delete((event.key || "").toLowerCase());
});

document.addEventListener("mousemove", (event) => {
  if (activeFinalGame === "circus" && document.pointerLockElement === circusCanvas) {
    circusState.angle += event.movementX * 0.002;
    circusState.pitch = clamp(circusState.pitch + event.movementY * 0.001, -0.22, 0.22);
  }
});

circusActionButton.addEventListener("click", circusInteract);

circusStick.addEventListener("pointerdown", (event) => {
  circusStick.setPointerCapture(event.pointerId);
});

circusStick.addEventListener("pointermove", (event) => {
  if (activeFinalGame !== "circus") return;

  const rect = circusStick.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = clamp((event.clientX - cx) / (rect.width / 2), -1, 1);
  const dy = clamp((event.clientY - cy) / (rect.height / 2), -1, 1);

  circusState.touchMove.x = dx;
  circusState.touchMove.y = dy;
  circusStickKnob.style.left = `${50 + dx * 32}%`;
  circusStickKnob.style.top = `${50 + dy * 32}%`;
});

function resetCircusStick() {
  if (!circusState) return;
  circusState.touchMove.x = 0;
  circusState.touchMove.y = 0;
  circusStickKnob.style.left = "50%";
  circusStickKnob.style.top = "50%";
}

circusStick.addEventListener("pointerup", resetCircusStick);
circusStick.addEventListener("pointercancel", resetCircusStick);

circusLookArea.addEventListener("pointerdown", (event) => {
  circusLookArea.setPointerCapture(event.pointerId);
  circusLookArea.dataset.lastX = String(event.clientX);
  circusLookArea.dataset.lastY = String(event.clientY);
});

circusLookArea.addEventListener("pointermove", (event) => {
  if (activeFinalGame !== "circus") return;

  const lastX = Number(circusLookArea.dataset.lastX || event.clientX);
  const lastY = Number(circusLookArea.dataset.lastY || event.clientY);
  const dx = event.clientX - lastX;
  const dy = event.clientY - lastY;

  circusState.angle += dx * 0.006;
  circusState.pitch = clamp(circusState.pitch + dy * 0.002, -0.22, 0.22);

  circusLookArea.dataset.lastX = String(event.clientX);
  circusLookArea.dataset.lastY = String(event.clientY);
});

circusLookArea.addEventListener("pointerup", () => {
  circusLookArea.dataset.lastX = "";
  circusLookArea.dataset.lastY = "";
});

function updateCinnamonPointerTarget(event) {
  if (activeFinalGame !== "cinnamon") return;

  event.preventDefault();

  const rect = cinnamonCanvas.getBoundingClientRect();
  const normalizedX = clamp((event.clientX - rect.left) / rect.width, 0.12, 0.88);

  // NOTA DE TEPOX: En móvil quiero que el personaje siga mi dedo, no que se mueva raro por rangos viejos.
  cinnamonState.targetX = normalizedX;
  cinnamonState.playerX = normalizedX;
}

cinnamonCanvas.addEventListener("pointerdown", (event) => {
  if (activeFinalGame !== "cinnamon") return;

  cinnamonCanvas.setPointerCapture(event.pointerId);
  updateCinnamonPointerTarget(event);
});

cinnamonCanvas.addEventListener("pointermove", (event) => {
  if (activeFinalGame !== "cinnamon") return;

  const isTouch = event.pointerType === "touch";
  const isMouseDragging = event.buttons === 1;

  if (isTouch || isMouseDragging) {
    updateCinnamonPointerTarget(event);
  }
});

cinnamonCanvas.addEventListener("pointerup", (event) => {
  if (cinnamonCanvas.hasPointerCapture(event.pointerId)) {
    cinnamonCanvas.releasePointerCapture(event.pointerId);
  }
});

cinnamonCanvas.addEventListener("pointercancel", (event) => {
  if (cinnamonCanvas.hasPointerCapture(event.pointerId)) {
    cinnamonCanvas.releasePointerCapture(event.pointerId);
  }
});

ingredientButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-ingredient]");
  if (!button || button.disabled) return;
  addMcIngredient(button.dataset.ingredient, button);
});

mcServeButton.addEventListener("click", serveMcOrder);
mcClearButton.addEventListener("click", clearMcBurger);

applyStyle(currentStyleIndex);
