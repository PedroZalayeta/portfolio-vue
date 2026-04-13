<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({ useScope: 'global' })
const showMenu = ref(false)
const activeCategory = ref('web')

const toggleLang = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}

const flippedWeb   = ref([false, false, false])
const flippedML    = ref([false])
const flippedGames = ref([false, false])

const flipCard = (arr, i) => { arr[i] = !arr[i] }

const categories = computed(() => [
  { key: 'web',   icon: '♠', label: t('home.tab_web') },
  { key: 'ml',    icon: '♥', label: t('home.tab_ml') },
  { key: 'games', icon: '♦', label: t('home.tab_games') },
])

// Animated counter helper
function animateCounter(el, target, duration = 1400) {
  let start = null
  const step = (timestamp) => {
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(ease * target)
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = target
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  // Scroll reveal
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el))

  // Animated counters
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.dataset.target)
        animateCounter(el, target)
        counterObs.unobserve(el)
      }
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.counter-num').forEach(el => counterObs.observe(el))

  // Skill bars — trigger only when visible
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bar-animate')
        barObs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })
  document.querySelectorAll('.sr-fill').forEach(el => barObs.observe(el))
})
</script>

<template>

  <!-- ══ NAVBAR ══════════════════════════════════════ -->
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-suit">♠</span>
        PZ<span class="logo-dot">.</span>DEV
        <span class="logo-suit">♠</span>
      </div>

      <button @click="showMenu = !showMenu" class="hamburger" aria-label="menu">
        <span class="hbar"></span>
        <span class="hbar"></span>
        <span class="hbar"></span>
      </button>

      <ul :class="['nav-links', { show: showMenu }]">
        <li><a href="#about"    @click="showMenu=false">{{ $t('home.about') }}</a></li>
        <li><a href="#skills"   @click="showMenu=false">{{ $t('home.tecnologies') }}</a></li>
        <li><a href="#projects" @click="showMenu=false">{{ $t('home.projects') }}</a></li>
        <li><a href="#contact"  @click="showMenu=false">{{ $t('home.contact') }}</a></li>
      </ul>

      <button @click="toggleLang" class="lang-btn">{{ locale === 'es' ? 'EN' : 'ES' }}</button>
    </div>
  </nav>


  <!-- ══ HERO ════════════════════════════════════════ -->
  <section id="hero">
    <div class="felt-layer"></div>
    <div class="table-oval"></div>
    <span class="corner-suit cs-tl">♠</span>
    <span class="corner-suit cs-tr">♥</span>
    <span class="corner-suit cs-bl">♦</span>
    <span class="corner-suit cs-br">♣</span>

    <div class="hero-inner">
      <div class="hero-badge">
        <span class="badge-pip">♦</span>
        {{ $t('home.available') }}
      </div>

      <h1 class="hero-name">Pedro Zalayeta</h1>

      <div class="suit-divider">
        <span>♠</span><span class="red">♥</span><span class="red">♦</span><span>♣</span>
      </div>

      <h2 class="hero-title">{{ $t('home.subtitle') }}</h2>

      <div class="hero-ctas">
        <a class="cta-red" href="#projects">{{ $t('home.myprojects') }}</a>
        <a class="cta-ghost" href="#contact">{{ $t('home.contactbutton') }}</a>
        <a class="cta-cv" href="/cv/Pedro_Zalayeta_CV.pdf" download>
          <span class="cta-cv-icon">♣</span>
          {{ $t('home.downloadcv') }}
        </a>
      </div>

      <div class="hero-chips">
        <div class="chip chip-red"><span>WEB</span></div>
        <div class="chip chip-white"><span>ML</span></div>
        <div class="chip chip-green"><span>GAMES</span></div>
      </div>
    </div>

    <div class="deco-card dc1">A<br><span>♠</span></div>
    <div class="deco-card dc2 red-card">K<br><span>♥</span></div>
    <div class="deco-card dc3 red-card">Q<br><span>♦</span></div>
    <div class="deco-card dc4">J<br><span>♣</span></div>
  </section>


  <!-- ══ MAIN BOARD ══════════════════════════════════ -->
  <main id="board">

    <!-- Floating edge cards — fill empty board space -->
    <div class="board-edge-cards">
      <div class="bec bec-1">A<br><span>♠</span></div>
      <div class="bec bec-2 red-card">Q<br><span>♥</span></div>
      <div class="bec bec-3 red-card">J<br><span>♦</span></div>
      <div class="bec bec-4">K<br><span>♣</span></div>
      <div class="bec bec-5">7<br><span>♠</span></div>
      <div class="bec bec-6 red-card">9<br><span>♥</span></div>
      <div class="bec bec-7">3<br><span>♣</span></div>
      <div class="bec bec-8 red-card">5<br><span>♦</span></div>
    </div>

    <!-- ── ABOUT ──────────────────────────────────── -->
    <section id="about" class="felt-section casino-section about-section">
      <div class="cs-frame">
        <span class="csf-tl">♥</span><span class="csf-tr">♥</span>
        <span class="csf-bl">♥</span><span class="csf-br">♥</span>
      </div>
      <span class="sec-suit ss1">♥</span>
      <span class="sec-suit ss2">♦</span>

      <!-- Eyebrow + headline -->
      <div class="section-eyebrow reveal">♥ &nbsp; {{ $t('home.eyebrow_about') }}</div>
      <h2 class="section-headline reveal" style="--delay:0.1s">
        {{ $t('home.headline_about') }}
        <em>{{ $t('home.headline_about_em') }}</em>
      </h2>
      <div class="sec-suit-divider reveal" style="--delay:0.15s">
        <span class="red">♥</span><span>♠</span><span class="red">♦</span><span>♣</span>
      </div>
      <p class="section-subline reveal" style="--delay:0.2s">
        {{ $t('home.desc1') }}
      </p>

      <!-- Stats row — counters animados -->
      <div class="about-stats-row reveal" style="--delay:0.3s">
        <div class="ast">
          <span class="ast-n"><span class="counter-num" data-target="3">0</span><span class="ast-plus">+</span></span>
          <span class="ast-l">{{ $t('home.years') }}</span>
        </div>
        <div class="ast-line"></div>
        <div class="ast">
          <span class="ast-n"><span class="counter-num" data-target="5">0</span><span class="ast-plus">+</span></span>
          <span class="ast-l">{{ $t('home.projects_count') }}</span>
        </div>
        <div class="ast-line"></div>
        <div class="ast">
          <span class="ast-n"><span class="counter-num" data-target="3">0</span></span>
          <span class="ast-l">{{ $t('home.fields') }}</span>
        </div>
        <div class="ast-line"></div>
        <div class="ast">
          <span class="ast-n"><span class="counter-num" data-target="2">0</span></span>
          <span class="ast-l">{{ $t('home.langs') }}</span>
        </div>
      </div>

      <!-- Two column content -->
      <div class="about-body-grid">

        <!-- LEFT -->
        <div class="about-col-left">
          <p class="about-desc reveal reveal-left" style="--delay:0s">
            {{ $t('home.desc2') }}
          </p>

          <!-- Specialties numbered list -->
          <div class="spec-list">
            <div class="spec-item reveal reveal-left" style="--delay:0.05s">
              <span class="spec-num">01</span>
              <div class="spec-body">
                <span class="spec-name">{{ $t('home.spec_web') }}</span>
                <span class="spec-tech">Vue · React · Django · FastAPI · .NET</span>
              </div>
              <span class="spec-suit">♠</span>
            </div>
            <div class="spec-item reveal reveal-left" style="--delay:0.15s">
              <span class="spec-num">02</span>
              <div class="spec-body">
                <span class="spec-name">{{ $t('home.spec_ml') }}</span>
                <span class="spec-tech">Python · TensorFlow · Scikit-learn · Pandas</span>
              </div>
              <span class="spec-suit red">♥</span>
            </div>
            <div class="spec-item reveal reveal-left" style="--delay:0.25s">
              <span class="spec-num">03</span>
              <div class="spec-body">
                <span class="spec-name">{{ $t('home.spec_games') }}</span>
                <span class="spec-tech">C++ · PS2 SDK · EE Core · GS Pipeline</span>
              </div>
              <span class="spec-suit red">♦</span>
            </div>
          </div>

          <a class="about-cv-btn reveal reveal-left" style="--delay:0.35s" href="/cv/Pedro_Zalayeta_CV.pdf" download>
            <span>{{ $t('home.downloadcv') }}</span>
            <span class="btn-arrow">↓</span>
          </a>
        </div>

        <!-- RIGHT -->
        <div class="about-col-right">

          <!-- Education -->
          <div class="edu-block reveal reveal-right" style="--delay:0.1s">
            <div class="edu-eyebrow">♣ &nbsp; {{ $t('home.education') }}</div>
            <div class="edu-timeline">
              <div class="edu-entry">
                <div class="edu-dot"></div>
                <div class="edu-body">
                  <span class="edu-degree">{{ $t('home.edu_degree') }}</span>
                  <span class="edu-school">{{ $t('home.edu_school') }}</span>
                  <span class="edu-period">{{ $t('home.edu_period') }}</span>
                </div>
              </div>
              <div class="edu-entry">
                <div class="edu-dot dim"></div>
                <div class="edu-body">
                  <span class="edu-degree">{{ $t('home.edu_bach') }}</span>
                  <span class="edu-school">{{ $t('home.edu_bach_school') }}</span>
                </div>
              </div>
              <div class="edu-entry">
                <div class="edu-dot dim"></div>
                <div class="edu-body">
                  <span class="edu-degree">{{ $t('home.edu_self') }}</span>
                  <span class="edu-school">{{ $t('home.edu_self_desc') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Languages -->
          <div class="lang-block reveal reveal-right" style="--delay:0.25s">
            <div class="edu-eyebrow">♦ &nbsp; {{ $t('home.langs_label') }}</div>
            <div class="lang-item">
              <div class="lang-top">
                <span class="lang-name">🇺🇾 {{ $t('home.lang_es') }}</span>
                <span class="lang-level">{{ $t('home.lang_es_level') }}</span>
              </div>
              <div class="lang-bar"><div class="sr-fill" style="--w:100%"></div></div>
            </div>
            <div class="lang-item">
              <div class="lang-top">
                <span class="lang-name">🇺🇸 {{ $t('home.lang_en') }}</span>
                <span class="lang-level">{{ $t('home.lang_en_level') }}</span>
              </div>
              <div class="lang-bar"><div class="sr-fill" style="--w:60%"></div></div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SEPARATOR ────────────────────────────── -->
    <div class="sec-separator">
      <span class="sep-line"></span>
      <span class="sep-suits">♠ &nbsp; ♥ &nbsp; ♦ &nbsp; ♣</span>
      <span class="sep-line"></span>
    </div>

    <!-- ── TECHNOLOGIES ───────────────────────────── -->
    <section id="skills" class="felt-section casino-section skills-section">
      <div class="cs-frame">
        <span class="csf-tl">♠</span><span class="csf-tr">♠</span>
        <span class="csf-bl">♠</span><span class="csf-br">♠</span>
      </div>
      <span class="sec-suit ss1">♠</span>
      <span class="sec-suit ss2">♣</span>

      <div class="section-eyebrow reveal">♠ &nbsp; {{ $t('home.eyebrow_skills') }}</div>
      <h2 class="section-headline reveal" style="--delay:0.1s">
        {{ $t('home.headline_skills') }}
        <em>{{ $t('home.headline_skills_em') }}</em>
      </h2>
      <div class="sec-suit-divider reveal" style="--delay:0.15s">
        <span>♠</span><span class="red">♥</span><span class="red">♦</span><span>♣</span>
      </div>

      <!-- Domain area cards -->
      <div class="domain-grid">

        <div class="domain-card reveal reveal-up" style="--delay:0s">
          <div class="domain-top">
            <span class="domain-suit">♥</span>
            <span class="domain-num">01</span>
          </div>
          <h3 class="domain-name">{{ $t('home.domain1_name') }}</h3>
          <p class="domain-desc">{{ $t('home.domain1_desc') }}</p>
          <div class="domain-tags">
            <span>Python</span><span>Django</span><span>FastAPI</span><span>.NET</span><span>PostgreSQL</span><span>REST</span>
          </div>
        </div>

        <div class="domain-card reveal reveal-up" style="--delay:0.1s">
          <div class="domain-top">
            <span class="domain-suit">♠</span>
            <span class="domain-num">02</span>
          </div>
          <h3 class="domain-name">{{ $t('home.domain2_name') }}</h3>
          <p class="domain-desc">{{ $t('home.domain2_desc') }}</p>
          <div class="domain-tags">
            <span>Vue.js</span><span>React</span><span>JavaScript</span><span>HTML/CSS</span><span>Vite</span>
          </div>
        </div>

        <div class="domain-card reveal reveal-up" style="--delay:0.2s">
          <div class="domain-top">
            <span class="domain-suit red">♦</span>
            <span class="domain-num">03</span>
          </div>
          <h3 class="domain-name">{{ $t('home.domain3_name') }}</h3>
          <p class="domain-desc">{{ $t('home.domain3_desc') }}</p>
          <div class="domain-tags">
            <span>TensorFlow</span><span>Scikit-learn</span><span>Pandas</span><span>NumPy</span><span>Python</span>
          </div>
        </div>

        <div class="domain-card reveal reveal-up" style="--delay:0.3s">
          <div class="domain-top">
            <span class="domain-suit red">♣</span>
            <span class="domain-num">04</span>
          </div>
          <h3 class="domain-name">{{ $t('home.domain4_name') }}</h3>
          <p class="domain-desc">{{ $t('home.domain4_desc') }}</p>
          <div class="domain-tags">
            <span>C++</span><span>C</span><span>PS2 SDK</span><span>EE Core</span><span>VU0/VU1</span><span>Linux</span><span>Godot</span><span>Unity</span>
          </div>
        </div>

        <div class="domain-card reveal reveal-up" style="--delay:0.4s">
          <div class="domain-top">
            <span class="domain-suit">♠</span>
            <span class="domain-num">05</span>
          </div>
          <h3 class="domain-name">{{ $t('home.domain5_name') }}</h3>
          <p class="domain-desc">{{ $t('home.domain5_desc') }}</p>
          <div class="domain-tags">
            <span>Git</span><span>GitHub</span><span>Linux</span><span>Bash</span><span>Docker</span>
          </div>
        </div>

        <div class="domain-card reveal reveal-up" style="--delay:0.48s">
          <div class="domain-top">
            <span class="domain-suit red">♥</span>
            <span class="domain-num">+</span>
          </div>
          <h3 class="domain-name">{{ $t('home.domain6_name') }}</h3>
          <p class="domain-desc">{{ $t('home.domain_learning_desc') }}</p>
          <div class="domain-tags">
            <span>Algoritmos</span><span>Sistemas operativos</span><span>Arquitectura de software</span><span>Redes</span>
          </div>
        </div>

      </div>

      <!-- Badge cloud -->
      <div class="tech-cloud reveal" style="--delay:0.1s">
        <span class="tcl-label">{{ $t('home.also_with') }}</span>
        <div class="tech-badges">
          <span class="tbadge" v-for="t in ['.NET','Git','Linux','HTML/CSS','NumPy','Pandas','Scikit-learn','TensorFlow','EE Core','GS Pipeline','PostgreSQL','Bash','Vite']" :key="t">{{ t }}</span>
        </div>
      </div>

    </section>

    <!-- ── SEPARATOR ────────────────────────────── -->
    <div class="sec-separator">
      <span class="sep-line"></span>
      <span class="sep-suits">♦ &nbsp; ♣ &nbsp; ♠ &nbsp; ♥</span>
      <span class="sep-line"></span>
    </div>

    <!-- ── PROJECTS ───────────────────────────────── -->
    <section id="projects" class="felt-section casino-section">
      <div class="cs-frame">
        <span class="csf-tl red">♦</span><span class="csf-tr red">♦</span>
        <span class="csf-bl red">♦</span><span class="csf-br red">♦</span>
      </div>
      <span class="sec-suit ss1 red">♦</span>
      <span class="sec-suit ss2">♣</span>
      <div class="section-header">
        <span class="sh-suit red">♦</span>
        <h2 class="section-title">{{ $t('home.myprojects') }}</h2>
        <span class="sh-suit red">♦</span>
      </div>

      <div class="cat-tabs">
        <button
          v-for="cat in categories"
          :key="cat.key"
          :class="['cat-chip', `chip-cat-${cat.key}`, { active: activeCategory === cat.key }]"
          @click="activeCategory = cat.key"
        >
          <span class="chip-suit">{{ cat.icon }}</span>
          {{ cat.label }}
        </button>
      </div>

      <!-- WEB -->
      <div v-show="activeCategory === 'web'" class="project-panel">
        <p class="panel-tagline">♠ &nbsp; {{ $t('home.tab_web') }} &nbsp; ♠</p>
        <div class="cards-row">

          <!-- Nautilus Studio -->
          <div class="play-card" @click="flipCard(flippedWeb, 0)">
            <div class="pc-inner" :class="{ flipped: flippedWeb[0] }">
              <div class="pc-front">
                <div class="pc-corner tl"><span class="pc-rank">N</span><span class="pc-suit">♠</span></div>
                <div class="pc-center">
                  <span class="pc-big-suit">♠</span>
                  <h3>Nautilus<br>Studio</h3>
                  <p class="pc-type">Negocio · Web</p>
                </div>
                <div class="pc-corner br rot"><span class="pc-rank">N</span><span class="pc-suit">♠</span></div>
              </div>
              <div class="pc-back">
                <div class="pc-back-header"><span class="pcbs">♠</span><h3>Nautilus Studio</h3></div>
                <p>{{ $t('home.nautilus1') }}</p>
                <div class="pc-tags"><span>Vue</span><span>Django</span><span>UX/UI</span></div>
                <div class="pc-btn-group">
                  <a class="pc-btn pc-btn-demo" href="https://nautilusstudio.com.uy" target="_blank">Demo en vivo ↗</a>
                  <a class="pc-btn pc-btn-ghost" href="https://github.com/PedroZalayeta" target="_blank">GitHub →</a>
                </div>
              </div>
            </div>
          </div>

          <!-- LibreCourse -->
          <div class="play-card" @click="flipCard(flippedWeb, 1)">
            <div class="pc-inner" :class="{ flipped: flippedWeb[1] }">
              <div class="pc-front">
                <div class="pc-corner tl"><span class="pc-rank">L</span><span class="pc-suit">♣</span></div>
                <div class="pc-center">
                  <span class="pc-big-suit">♣</span>
                  <h3>Libre<br>Course</h3>
                  <p class="pc-type">Open Source · Web</p>
                </div>
                <div class="pc-corner br rot"><span class="pc-rank">L</span><span class="pc-suit">♣</span></div>
              </div>
              <div class="pc-back">
                <div class="pc-back-header"><span class="pcbs">♣</span><h3>LibreCourse</h3></div>
                <p>{{ $t('home.librecourse1') }}</p>
                <div class="pc-tags"><span>Python</span><span>TensorFlow</span><span>Vue</span></div>
                <a class="pc-btn" href="https://github.com/emiliano-gandini-outeda/LibreCourse" target="_blank">{{ $t('home.seemore') }} →</a>
              </div>
            </div>
          </div>

          <!-- Pigeon -->
          <div class="play-card" @click="flipCard(flippedWeb, 2)">
            <div class="pc-inner" :class="{ flipped: flippedWeb[2] }">
              <div class="pc-front">
                <div class="pc-corner tl"><span class="pc-rank red">P</span><span class="pc-suit red">♥</span></div>
                <div class="pc-center">
                  <span class="pc-big-suit red">♥</span>
                  <h3>Pigeon</h3>
                  <p class="pc-type">App · Web</p>
                </div>
                <div class="pc-corner br rot"><span class="pc-rank red">P</span><span class="pc-suit red">♥</span></div>
              </div>
              <div class="pc-back">
                <div class="pc-back-header"><span class="pcbs">♥</span><h3>Pigeon</h3></div>
                <p>{{ $t('home.mailter') }}</p>
                <div class="pc-tags"><span>Vue</span><span>FastAPI</span></div>
                <a class="pc-btn" href="https://github.com/PedroZalayeta" target="_blank">{{ $t('home.seemore') }} →</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ML -->
      <div v-show="activeCategory === 'ml'" class="project-panel">
        <p class="panel-tagline">♥ &nbsp; {{ $t('home.tab_ml') }} &nbsp; ♥</p>
        <div class="cards-row">

          <!-- Pigeon ML -->
          <div class="play-card" @click="flipCard(flippedML, 0)">
            <div class="pc-inner" :class="{ flipped: flippedML[0] }">
              <div class="pc-front">
                <div class="pc-corner tl"><span class="pc-rank red">P</span><span class="pc-suit red">♥</span></div>
                <div class="pc-center">
                  <span class="pc-big-suit red">♥</span>
                  <h3>Pigeon</h3>
                  <p class="pc-type">ML · Clasificación</p>
                </div>
                <div class="pc-corner br rot"><span class="pc-rank red">P</span><span class="pc-suit red">♥</span></div>
              </div>
              <div class="pc-back">
                <div class="pc-back-header"><span class="pcbs">♥</span><h3>Pigeon</h3></div>
                <p>{{ $t('home.pigeon_ml_desc') }}</p>
                <div class="pc-tags"><span>Python</span><span>ML</span><span>FastAPI</span><span>Scikit-learn</span></div>
                <a class="pc-btn" href="https://github.com/PedroZalayeta" target="_blank">{{ $t('home.seemore') }} →</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- GAMES -->
      <div v-show="activeCategory === 'games'" class="project-panel">
        <p class="panel-tagline">♦ &nbsp; {{ $t('home.tab_games') }} &nbsp; ♦</p>
        <div class="cards-row">

          <!-- Nauta -->
          <div class="play-card" @click="flipCard(flippedGames, 0)">
            <div class="pc-inner" :class="{ flipped: flippedGames[0] }">
              <div class="pc-front">
                <div class="pc-corner tl"><span class="pc-rank red">Na</span><span class="pc-suit red">♦</span></div>
                <div class="pc-center">
                  <span class="pc-big-suit red">♦</span>
                  <h3>Nauta</h3>
                  <p class="pc-type">Indie · Game</p>
                </div>
                <div class="pc-corner br rot"><span class="pc-rank red">Na</span><span class="pc-suit red">♦</span></div>
              </div>
              <div class="pc-back">
                <div class="pc-back-header"><span class="pcbs">♦</span><h3>Nauta</h3></div>
                <p>{{ $t('home.nauta1') }}</p>
                <div class="pc-tags"><span>C++</span><span>Godot</span></div>
                <a class="pc-btn" href="https://github.com/PedroZalayeta" target="_blank">{{ $t('home.seemore') }} →</a>
              </div>
            </div>
          </div>

          <!-- PROJECT PS2 -->
          <div class="play-card" @click="flipCard(flippedGames, 1)">
            <div class="pc-inner" :class="{ flipped: flippedGames[1] }">
              <div class="pc-front">
                <div class="pc-corner tl"><span class="pc-rank red">A</span><span class="pc-suit red">♦</span></div>
                <div class="pc-center">
                  <span class="pc-big-suit red">♦</span>
                  <h3>PROJECT<br>PS2</h3>
                  <p class="pc-type">Indie · PS2</p>
                </div>
                <div class="pc-corner br rot"><span class="pc-rank red">A</span><span class="pc-suit red">♦</span></div>
              </div>
              <div class="pc-back">
                <div class="pc-back-header"><span class="pcbs">♦</span><h3>PROJECT PS2</h3></div>
                <p>{{ $t('home.ps2_1') }}</p>
                <div class="pc-tags"><span>C</span><span>C++</span><span>PS2 SDK</span><span>EE Core</span></div>
                <a class="pc-btn" href="https://github.com/PedroZalayeta" target="_blank">{{ $t('home.seemore') }} →</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── SEPARATOR ────────────────────────────── -->
    <div class="sec-separator">
      <span class="sep-line"></span>
      <span class="sep-suits">♣ &nbsp; ♦ &nbsp; ♥ &nbsp; ♠</span>
      <span class="sep-line"></span>
    </div>

    <!-- ── CONTACT ────────────────────────────────── -->
    <section id="contact" class="felt-section casino-section">
      <div class="cs-frame">
        <span class="csf-tl">♣</span><span class="csf-tr">♣</span>
        <span class="csf-bl">♣</span><span class="csf-br">♣</span>
      </div>
      <span class="sec-suit ss1">♣</span>
      <span class="sec-suit ss2 red">♥</span>
      <!-- Mini floating deco cards -->
      <div class="sec-deco-card sdc1">A<br><span>♣</span></div>
      <div class="sec-deco-card sdc2 red-card">K<br><span>♥</span></div>
      <div class="section-header">
        <span class="sh-suit">♣</span>
        <h2 class="section-title">{{ $t('home.contactbutton') }}</h2>
        <span class="sh-suit">♣</span>
      </div>

      <p class="contact-intro">{{ $t('home.contactdesc') }}</p>

      <div class="contact-grid">
        <div class="cbox cbox-featured">
          <span class="cbox-suit">♦</span>
          <h3>Email</h3>
          <a class="cbox-link" href="mailto:zalayetapedro@gmail.com"><span class="__cf_email__" data-cfemail="c399a2afa2baa6b7a2b3a6a7b1ac83a4aea2aaafeda0acae">Click</span></a>
        </div>
        <div class="cbox">
          <span class="cbox-suit">♣</span>
          <h3>GitHub</h3>
          <a class="cbox-link" href="https://github.com/PedroZalayeta" target="_blank">Click</a>
        </div>
        <div class="cbox">
          <span class="cbox-suit">♥</span>
          <h3>LinkedIn</h3>
          <a class="cbox-link" href="https://www.linkedin.com/in/pedro-zalayeta-aa2870375/" target="_blank">Click</a>
        </div>
        <div class="cbox">
          <span class="cbox-suit red">♠</span>
          <h3>Discord</h3>
          <a class="cbox-link" href="https://discord.com/users/pedro.z.dev" target="_blank">pedro.z.dev</a>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <span class="footer-suits">♠ ♥ ♦ ♣</span>
    <span>Pedro Zalayeta © {{ new Date().getFullYear() }}</span>
    <span class="footer-suits">♣ ♦ ♥ ♠</span>
  </footer>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,700;1,400&family=IM+Fell+English+SC&display=swap');

/* ══ TOKENS ════════════════════════════════════════ */
:root {
  --felt:       #0d3b1e;
  --felt-dark:  #081a0e;
  --felt-light: #154a26;
  --red:        #c0392b;
  --red-hi:     #e74c3c;
  --red-glow:   rgba(192,57,43,0.4);
  --gold:       #d4af37;
  --gold-dim:   #9a7d28;
  --gold-glow:  rgba(212,175,55,0.28);
  --ivory:      #f5f0e8;
  --cream:      #ede5d0;
  --ink:        #1a0800;
  --text:       #f5f0e8;
  --text-dim:   rgba(245,240,232,0.55);
  --border-g:   rgba(212,175,55,0.4);
  --fn-head:    'Cinzel', serif;
  --fn-body:    'Playfair Display', serif;
  --fn-card:    'IM Fell English SC', serif;
}

* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { background:var(--felt-dark); color:var(--text); font-family:var(--fn-body); }

/* ══ NAVBAR ═══════════════════════════════════════ */
.navbar {
  width:100%; padding:16px 0;
  background:rgba(5,16,9,0.92);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--border-g);
  box-shadow:0 2px 24px rgba(0,0,0,0.6);
  position:fixed; top:0; left:0; z-index:1000;
}
.nav-container { width:88%; margin:auto; display:flex; justify-content:space-between; align-items:center; }

.logo {
  font-family:var(--fn-head); font-size:18px; font-weight:700;
  letter-spacing:4px; color:var(--gold);
  text-shadow:0 0 14px var(--gold-glow);
  display:flex; align-items:center; gap:8px;
}
.logo-suit { color:var(--red); font-size:15px; }
.logo-dot  { color:var(--red); }

.nav-links { list-style:none; display:flex; gap:32px; }
.nav-links a {
  text-decoration:none; color:var(--text-dim);
  font-family:var(--fn-head); font-size:13px; letter-spacing:2px;
  transition:0.2s;
}
.nav-links a:hover { color:var(--gold); text-shadow:0 0 8px var(--gold-glow); }

.lang-btn {
  background:transparent; color:var(--gold-dim);
  border:1px solid var(--border-g); padding:6px 16px; border-radius:2px;
  cursor:pointer; font-family:var(--fn-head); font-size:12px; letter-spacing:2px;
  transition:0.2s;
}
.lang-btn:hover { background:var(--gold-dim); color:var(--ink); }

.hamburger { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
.hbar { display:block; width:24px; height:2px; background:var(--gold); border-radius:1px; }

/* ══ HERO ═════════════════════════════════════════ */
#hero {
  position:relative; min-height:100vh;
  display:flex; justify-content:center; align-items:center;
  padding:100px 20px 60px; overflow:hidden;
  background:
    radial-gradient(ellipse 75% 65% at 50% 50%, var(--felt-light) 0%, var(--felt) 55%, var(--felt-dark) 100%);
}

.felt-layer {
  position:absolute; inset:0; pointer-events:none;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px),
    repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px);
}

.table-oval {
  position:absolute; width:88%; height:72%;
  border-radius:50%;
  border:3px solid var(--gold);
  box-shadow:
    0 0 0 1px rgba(0,0,0,0.5),
    0 0 0 7px var(--gold-dim),
    0 0 0 8px rgba(0,0,0,0.4),
    0 0 80px rgba(212,175,55,0.1),
    inset 0 0 100px rgba(0,0,0,0.25);
  pointer-events:none;
  top:50%; left:50%; transform:translate(-50%,-50%);
}

.corner-suit {
  position:absolute; pointer-events:none;
  font-size:clamp(2.5rem,5.5vw,5.5rem); opacity:0.1;
  font-family:var(--fn-card);
}
.cs-tl { top:7%;    left:4%;   color:var(--ivory); }
.cs-tr { top:7%;    right:4%;  color:var(--red); }
.cs-bl { bottom:7%; left:4%;   color:var(--red); }
.cs-br { bottom:7%; right:4%;  color:var(--ivory); }

.hero-inner {
  position:relative; z-index:2;
  display:flex; flex-direction:column; align-items:center; text-align:center;
}

.hero-badge {
  display:inline-flex; align-items:center; gap:8px;
  background:rgba(212,175,55,0.1); border:1px solid var(--border-g);
  padding:6px 20px; border-radius:2px;
  font-family:var(--fn-head); font-size:11px; letter-spacing:3px; color:var(--gold);
  margin-bottom:28px;
  animation:fadeDown 0.8s ease both;
}
.badge-pip { color:var(--red); font-size:13px; }

.hero-name {
  font-family:var(--fn-head);
  font-size:clamp(2.8rem,8vw,6.5rem);
  font-weight:700; letter-spacing:6px; line-height:1;
  color:var(--gold);
  text-shadow:0 0 30px var(--gold-glow), 0 2px 6px rgba(0,0,0,0.7);
  margin-bottom:22px;
  animation:fadeDown 0.9s 0.1s ease both;
}

.suit-divider {
  display:flex; gap:18px; font-size:1.5rem; margin-bottom:18px;
  animation:fadeDown 0.9s 0.2s ease both;
}
.suit-divider .red { color:var(--red); }

.hero-title {
  font-family:var(--fn-head); font-size:clamp(0.8rem,2vw,1rem);
  letter-spacing:5px; font-weight:400; color:var(--text-dim);
  margin-bottom:40px;
  animation:fadeDown 1s 0.3s ease both;
}

.hero-ctas {
  display:flex; gap:16px; flex-wrap:wrap; justify-content:center;
  margin-bottom:52px;
  animation:fadeDown 1s 0.4s ease both;
}
.cta-red {
  padding:14px 38px; background:var(--red); color:var(--ivory);
  text-decoration:none; font-family:var(--fn-head);
  font-size:12px; font-weight:700; letter-spacing:3px;
  border:2px solid var(--red-hi); transition:0.2s;
  box-shadow:0 0 28px var(--red-glow);
}
.cta-red:hover { background:var(--red-hi); transform:translateY(-2px); box-shadow:0 0 44px var(--red-glow); }
.cta-ghost {
  padding:14px 38px; background:transparent; color:var(--gold);
  text-decoration:none; font-family:var(--fn-head);
  font-size:12px; letter-spacing:3px;
  border:2px solid var(--border-g); transition:0.2s;
}
.cta-ghost:hover { background:rgba(212,175,55,0.08); border-color:var(--gold); }
.cta-cv {
  display:inline-flex; align-items:center; gap:8px;
  padding:14px 28px; background:transparent; color:var(--text-dim);
  text-decoration:none; font-family:var(--fn-head);
  font-size:11px; letter-spacing:3px;
  border:2px solid rgba(255,255,255,0.15); transition:0.2s;
}
.cta-cv:hover { color:var(--text); border-color:rgba(255,255,255,0.35); background:rgba(255,255,255,0.04); }
.cta-cv-icon { font-size:0.9rem; opacity:0.6; }

.hero-chips { display:flex; gap:20px; align-items:center; animation:fadeDown 1s 0.5s ease both; }
.chip {
  width:76px; height:76px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-family:var(--fn-head); font-size:9px; font-weight:700; letter-spacing:2px;
  position:relative;
  box-shadow:inset 0 2px 5px rgba(255,255,255,0.2), inset 0 -2px 5px rgba(0,0,0,0.35), 0 5px 16px rgba(0,0,0,0.5);
}
.chip::before {
  content:''; position:absolute; inset:7px; border-radius:50%;
  border:2px dashed rgba(255,255,255,0.2);
}
.chip::after {
  content:''; position:absolute; inset:0; border-radius:50%;
  border:5px solid transparent;
  border-top-color:rgba(255,255,255,0.15);
  border-bottom-color:rgba(0,0,0,0.2);
}
.chip span { position:relative; z-index:1; }
.chip-red   { background:radial-gradient(circle at 35% 30%, #e74c3c, #7b1010); color:white; }
.chip-white { background:radial-gradient(circle at 35% 30%, #f0f0f0, #b0b0b0); color:#1a0800; }
.chip-green { background:radial-gradient(circle at 35% 30%, #2ecc71, #145a30); color:white; }

/* Deco cards */
.deco-card {
  position:absolute; width:68px; height:96px;
  background:var(--ivory); border-radius:6px;
  border:1px solid rgba(0,0,0,0.12);
  display:flex; flex-direction:column;
  align-items:flex-start; padding:8px;
  font-family:var(--fn-card); font-size:1.3rem; font-weight:700;
  color:var(--ink); box-shadow:0 6px 24px rgba(0,0,0,0.45);
  pointer-events:none; opacity:0.65; z-index:1;
}
.deco-card span { font-size:0.95rem; display:block; line-height:1; }
.red-card, .red-card span { color:var(--red); }
.dc1 { top:14%; left:5%;   transform:rotate(-14deg); animation:floatCard 6s ease-in-out infinite; }
.dc2 { top:18%; right:6%;  transform:rotate(11deg);  animation:floatCard 7.5s 1.2s ease-in-out infinite; }
.dc3 { bottom:16%; right:7%; transform:rotate(-9deg); animation:floatCard 8s 2.4s ease-in-out infinite; }
.dc4 { bottom:14%; left:6%; transform:rotate(17deg);  animation:floatCard 5.5s 3s ease-in-out infinite; }

@keyframes floatCard {
  0%,100% { transform:translateY(0) rotate(var(--rot,0deg)); }
  50%      { transform:translateY(-13px) rotate(var(--rot,0deg)); }
}

/* ══ BOARD ════════════════════════════════════════ */
#board {
  background:
    repeating-linear-gradient(
      45deg,
      var(--felt-dark) 0px,
      var(--felt-dark) 14px,
      rgba(0,0,0,0.18) 14px,
      rgba(0,0,0,0.18) 28px
    );
  position:relative;
  overflow:hidden;
}

/* ══ BOARD EDGE FLOATING CARDS ════════════════════ */
.board-edge-cards { position:absolute; inset:0; pointer-events:none; z-index:0; }

.bec {
  position:absolute;
  width:60px; height:86px;
  background:var(--ivory); border-radius:6px;
  border:1px solid rgba(0,0,0,0.1);
  display:flex; flex-direction:column;
  align-items:flex-start; padding:7px;
  font-family:var(--fn-card); font-size:1.2rem; font-weight:700;
  color:var(--ink); box-shadow:0 6px 28px rgba(0,0,0,0.5);
  opacity:0.18;
}
.bec span { font-size:0.85rem; display:block; line-height:1; }
.bec.red-card, .bec.red-card span { color:var(--red); }

/* Left side */
.bec-1 { top:6%;   left:1.2%; transform:rotate(-18deg); animation:floatCard 7s   0s   ease-in-out infinite; }
.bec-2 { top:22%;  left:0.5%; transform:rotate(12deg);  animation:floatCard 9s   1.5s ease-in-out infinite; }
.bec-3 { top:42%;  left:1.8%; transform:rotate(-8deg);  animation:floatCard 8s   3s   ease-in-out infinite; }
.bec-4 { top:62%;  left:0.8%; transform:rotate(20deg);  animation:floatCard 10s  0.8s ease-in-out infinite; }

/* Right side */
.bec-5 { top:10%;  right:1%;   transform:rotate(14deg);  animation:floatCard 8.5s 0.5s ease-in-out infinite; }
.bec-6 { top:28%;  right:1.5%; transform:rotate(-16deg); animation:floatCard 7.5s 2s   ease-in-out infinite; }
.bec-7 { top:50%;  right:0.8%; transform:rotate(10deg);  animation:floatCard 9.5s 1s   ease-in-out infinite; }
.bec-8 { top:70%;  right:1.2%; transform:rotate(-22deg); animation:floatCard 6.5s 3.5s ease-in-out infinite; }

.felt-section { padding:100px 6% 80px; max-width:1400px; margin:0 auto; position:relative; }

/* ══ SECTION SEPARATOR ════════════════════════════ */
.sec-separator {
  display:flex; align-items:center; gap:24px;
  padding:0 6%; max-width:1400px; margin:0 auto;
  position:relative; z-index:1;
}
.sep-line {
  flex:1; height:1px;
  background:linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent);
}
.sep-suits {
  font-family:var(--fn-card); font-size:1rem;
  color:var(--gold); opacity:0.45; letter-spacing:4px;
  flex-shrink:0; white-space:nowrap;
}
.casino-section {
  position:relative;
  isolation: isolate;
  background:rgba(13,59,30,0.55);
  box-shadow: inset 0 0 120px rgba(0,0,0,0.3);
}
.casino-section::before {
  content:'';
  position:absolute; inset:20px;
  border:1px solid rgba(212,175,55,0.28);
  border-radius:2px;
  pointer-events:none;
  z-index:0;
}
.casino-section::after {
  content:'';
  position:absolute; inset:26px;
  border:1px dashed rgba(212,175,55,0.13);
  border-radius:2px;
  pointer-events:none;
  z-index:0;
}
/* All content inside casino-section above decorations */
.casino-section > *:not(.cs-frame):not(.sec-suit):not(.sec-deco-card) {
  position:relative; z-index:1;
}

/* Ornate corner frame */
.cs-frame {
  position:absolute; inset:0; pointer-events:none; z-index:0;
}
.cs-frame [class^="csf-"] {
  position:absolute;
  font-family:var(--fn-card);
  font-size:clamp(1.8rem, 3.5vw, 3rem);
  color:var(--gold); opacity:0.38;
  line-height:1;
  transition:opacity 0.3s;
}
.casino-section:hover .cs-frame [class^="csf-"] { opacity:0.55; }
.cs-frame .red { color:var(--red); }
.csf-tl { top:18px;    left:18px; }
.csf-tr { top:18px;    right:18px; text-align:right; }
.csf-bl { bottom:18px; left:18px; }
.csf-br { bottom:18px; right:18px; }

/* Large background floating suits */
.sec-suit {
  position:absolute; pointer-events:none; z-index:0;
  font-family:var(--fn-card);
  font-size:clamp(6rem, 14vw, 18rem);
  opacity:0.025; line-height:1;
  color:var(--ivory);
}
.sec-suit.red { color:var(--red); opacity:0.03; }
.ss1 { top:-2%;  right:1%; transform:rotate(12deg); }
.ss2 { bottom:-4%; left:0%;  transform:rotate(-8deg); }

/* Suit divider between headline and content */
.sec-suit-divider {
  display:flex; gap:14px; font-size:1.2rem;
  margin-bottom:36px; justify-content:flex-start;
}
.sec-suit-divider .red { color:var(--red); }
.sec-suit-divider span { opacity:0.45; }

/* Mini floating deco cards for contact section */
.sec-deco-card {
  position:absolute; width:52px; height:74px;
  background:var(--ivory); border-radius:5px;
  border:1px solid rgba(0,0,0,0.1);
  display:flex; flex-direction:column;
  align-items:flex-start; padding:6px;
  font-family:var(--fn-card); font-size:1.1rem; font-weight:700;
  color:var(--ink); box-shadow:0 4px 18px rgba(0,0,0,0.4);
  pointer-events:none; opacity:0.45; z-index:0;
}
.sec-deco-card span { font-size:0.8rem; display:block; line-height:1; }
.sec-deco-card.red-card, .sec-deco-card.red-card span { color:var(--red); }
.sdc1 { top:60px; right:3%; transform:rotate(-10deg); animation:floatCard 7s ease-in-out infinite; }
.sdc2 { top:80px; right:7%; transform:rotate(8deg);   animation:floatCard 9s 1.5s ease-in-out infinite; }

/* ══ SECTION HEADER (projects, contact) ══════════ */
.section-header {
  display:flex; align-items:center; gap:20px; justify-content:center;
  margin-bottom:56px; padding-bottom:22px;
  position:relative;
}
.section-header::after {
  content:'';
  position:absolute; bottom:0; left:50%; transform:translateX(-50%);
  width:min(420px, 80%); height:1px;
  background:linear-gradient(90deg, transparent, var(--gold), var(--red), var(--gold), transparent);
  opacity:0.5;
}
.sh-suit { font-size:1.8rem; color:var(--ivory); opacity:0.35; }
.sh-suit.red { color:var(--red); opacity:0.6; }
.section-title {
  font-family:var(--fn-head); font-size:clamp(1.5rem,4vw,2.4rem);
  font-weight:700; letter-spacing:5px;
  color:var(--gold); text-shadow:0 0 22px var(--gold-glow);
}

/* ══ SCROLL REVEAL ════════════════════════════════ */
.reveal {
  opacity:0;
  transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.16,1,0.3,1);
  transition-delay: var(--delay, 0s);
}
.reveal-left  { transform: translateX(-50px); }
.reveal-right { transform: translateX(50px); }
.reveal-up    { transform: translateY(40px); }
.reveal:not(.reveal-left):not(.reveal-right):not(.reveal-up) { transform: translateY(28px); }
.reveal.is-visible { opacity:1; transform:none; }

/* ══ SHARED HEADLINE SYSTEM ═══════════════════════ */
.section-eyebrow {
  font-family:var(--fn-head); font-size:13px; letter-spacing:4px;
  color:var(--gold); opacity:0.7; margin-bottom:20px; display:block;
}
.section-headline {
  font-family:var(--fn-head);
  font-size:clamp(2rem, 5vw, 3.6rem);
  font-weight:700; line-height:1.15;
  color:var(--text); letter-spacing:1px;
  margin-bottom:20px;
}
.section-headline em {
  font-style:italic; color:var(--gold);
  text-shadow:0 0 30px var(--gold-glow);
}
.section-subline {
  font-size:1.1rem; color:var(--text-dim); line-height:2;
  max-width:680px; margin-bottom:64px;
}

/* ══ ABOUT ════════════════════════════════════════ */
.about-section { padding-bottom:120px; }

/* Stats row */
.about-stats-row {
  display:grid; grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;
  align-items:center;
  border:1px solid var(--border-g); border-radius:4px;
  overflow:hidden; margin-bottom:80px;
  background:rgba(0,0,0,0.35);
  position:relative;
}
/* Gold-to-red-to-gold top accent line */
.about-stats-row::before {
  content:'';
  position:absolute; top:0; left:0; right:0; height:2px;
  background:linear-gradient(90deg, transparent, var(--gold), var(--red), var(--gold), transparent);
}
.ast {
  padding:36px 24px; text-align:center;
  transition:background 0.3s;
}
.ast:hover { background:rgba(212,175,55,0.05); }
.ast-n {
  display:block; font-family:var(--fn-head);
  font-size:clamp(2.6rem,4.5vw,4rem); font-weight:700;
  color:var(--gold); text-shadow:0 0 28px var(--gold-glow);
  line-height:1; margin-bottom:10px;
}
.ast-plus { font-size:0.5em; vertical-align:super; color:var(--red); }
.ast-l { font-family:var(--fn-head); font-size:11px; letter-spacing:3px; color:var(--text-dim); }
.ast-line { width:1px; height:60px; background:rgba(212,175,55,0.15); flex-shrink:0; }

/* Body grid */
.about-body-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }

.about-desc {
  font-size:1.05rem; color:var(--text-dim); line-height:2;
  margin-bottom:40px;
}

/* Specialties numbered list */
.spec-list { display:flex; flex-direction:column; gap:0; margin-bottom:44px; }
.spec-item {
  display:flex; align-items:center; gap:20px;
  padding:20px 0; border-bottom:1px solid rgba(212,175,55,0.08);
  transition:padding-left 0.3s;
  cursor:default;
}
.spec-item:first-child { border-top:1px solid rgba(212,175,55,0.08); }
.spec-item:hover { padding-left:8px; }
.spec-num {
  font-family:var(--fn-head); font-size:13px; letter-spacing:2px;
  color:var(--gold); opacity:0.4; flex-shrink:0; width:32px;
}
.spec-body { flex:1; display:flex; flex-direction:column; gap:5px; }
.spec-name { font-family:var(--fn-head); font-size:15px; letter-spacing:2px; color:var(--text); }
.spec-tech { font-size:13px; color:var(--text-dim); font-style:italic; }
.spec-suit { font-size:1.3rem; opacity:0.3; flex-shrink:0; transition:opacity 0.3s; }
.spec-suit.red { color:var(--red); }
.spec-item:hover .spec-suit { opacity:0.8; }
.spec-item:hover .spec-num { opacity:1; }

/* CV button */
.about-cv-btn {
  display:inline-flex; align-items:center; gap:12px;
  padding:15px 32px; border:1px solid var(--border-g);
  background:rgba(212,175,55,0.07); color:var(--gold);
  font-family:var(--fn-head); font-size:11px; letter-spacing:3px;
  text-decoration:none; border-radius:3px; transition:0.3s;
}
.about-cv-btn:hover {
  background:rgba(212,175,55,0.15); border-color:var(--gold);
  box-shadow:0 0 32px var(--gold-glow); transform:translateY(-3px);
}
.btn-arrow { font-size:1rem; }

/* Education block */
.edu-block {
  background:rgba(0,0,0,0.4); border:1px solid var(--border-g);
  border-radius:4px; padding:36px; margin-bottom:28px;
  position:relative; overflow:hidden;
}
/* Inner ornament */
.edu-block::after {
  content:'';
  position:absolute; inset:6px;
  border:1px solid rgba(212,175,55,0.06);
  pointer-events:none; border-radius:2px;
}
.edu-block::before {
  content:''; position:absolute; top:0; left:0; width:3px; height:100%;
  background:linear-gradient(to bottom, var(--gold), transparent);
}
.edu-eyebrow {
  font-family:var(--fn-head); font-size:12px; letter-spacing:4px;
  color:var(--gold); opacity:0.6; margin-bottom:24px; display:block;
}
.edu-timeline { display:flex; flex-direction:column; gap:24px; padding-left:20px; border-left:1px solid rgba(212,175,55,0.18); }
.edu-entry { display:flex; gap:0; align-items:flex-start; position:relative; }
.edu-dot {
  width:10px; height:10px; border-radius:50%; background:var(--gold);
  box-shadow:0 0 12px var(--gold-glow); flex-shrink:0; margin-top:5px;
  position:relative; left:-25px; margin-right:-10px;
}
.edu-dot.dim { background:var(--gold-dim); box-shadow:none; opacity:0.4; }
.edu-body { display:flex; flex-direction:column; gap:5px; }
.edu-degree { font-family:var(--fn-head); font-size:14px; letter-spacing:1.5px; color:var(--text); }
.edu-school { font-size:0.95rem; color:var(--text-dim); font-style:italic; }
.edu-period { font-family:var(--fn-head); font-size:11px; letter-spacing:2px; color:var(--gold); opacity:0.55; margin-top:2px; }

/* Language block */
.lang-block {
  background:rgba(0,0,0,0.4); border:1px solid var(--border-g);
  border-radius:4px; padding:32px; position:relative; overflow:hidden;
}
.lang-block::after {
  content:'';
  position:absolute; inset:6px;
  border:1px solid rgba(212,175,55,0.06);
  pointer-events:none; border-radius:2px;
}
.lang-block::before {
  content:''; position:absolute; top:0; left:0; width:3px; height:100%;
  background:linear-gradient(to bottom, var(--red), transparent);
}
.lang-item { margin-bottom:18px; }
.lang-item:last-child { margin-bottom:0; }
.lang-top { display:flex; justify-content:space-between; margin-bottom:10px; }
.lang-name { font-family:var(--fn-head); font-size:13px; letter-spacing:2px; color:var(--text); }
.lang-level { font-size:12px; color:var(--text-dim); font-style:italic; }
.lang-bar { height:2px; background:rgba(255,255,255,0.07); border-radius:2px; overflow:hidden; }

/* ══ SKILLS — DOMAIN CARDS ════════════════════════ */
.skills-section { padding-bottom:120px; }

.domain-grid {
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:2px;
  border:1px solid var(--border-g);
  border-radius:4px;
  overflow:hidden;
  margin-bottom:48px;
}

.domain-card {
  padding:36px 32px;
  background:rgba(0,0,0,0.35);
  border-right:1px solid rgba(212,175,55,0.1);
  border-bottom:1px solid rgba(212,175,55,0.1);
  display:flex; flex-direction:column; gap:14px;
  transition:background 0.3s;
  position:relative; overflow:hidden;
  cursor:default;
}
.domain-card::before {
  content:''; position:absolute; inset:0;
  background:radial-gradient(ellipse at 0% 0%, rgba(212,175,55,0.05), transparent 70%);
  opacity:0; transition:opacity 0.4s;
}
.domain-card::after {
  content:''; position:absolute; inset:8px;
  border:1px solid rgba(212,175,55,0.07);
  pointer-events:none;
}
.domain-card:hover { background:rgba(212,175,55,0.04); }
.domain-card:hover::before { opacity:1; }
.domain-card:hover::after { border-color:rgba(212,175,55,0.18); }


.domain-top {
  display:flex; justify-content:space-between; align-items:center;
}
.domain-suit { font-size:1.4rem; opacity:0.3; transition:opacity 0.3s; }
.domain-suit.red { color:var(--red); }
.domain-card:hover .domain-suit { opacity:0.75; }
.domain-num {
  font-family:var(--fn-head); font-size:13px; letter-spacing:3px;
  color:var(--gold); opacity:0.3; transition:opacity 0.3s;
}
.domain-card:hover .domain-num { opacity:0.9; }

.domain-name {
  font-family:var(--fn-head); font-size:clamp(1rem, 1.4vw, 1.2rem);
  letter-spacing:2px; color:var(--text); line-height:1.2;
}
.domain-desc {
  font-size:0.93rem; color:var(--text-dim); line-height:1.85;
  font-style:italic; flex:1;
}
.domain-tags {
  display:flex; flex-wrap:wrap; gap:7px; margin-top:4px;
}
.domain-tags span {
  background:rgba(212,175,55,0.07); border:1px solid rgba(212,175,55,0.2);
  color:var(--gold); font-family:var(--fn-head); font-size:10px;
  letter-spacing:1.5px; padding:4px 12px; border-radius:2px;
  transition:background 0.2s, border-color 0.2s;
}
.domain-card:hover .domain-tags span {
  background:rgba(212,175,55,0.11); border-color:rgba(212,175,55,0.35);
}

/* Shared fill bar (language bars in about) */
.sr-fill {
  height:100%; width:0;
  background:linear-gradient(90deg, var(--gold-dim), var(--gold));
  border-radius:2px; box-shadow:0 0 8px var(--gold-glow);
}
.sr-fill.bar-animate { animation:fillBar 1.4s cubic-bezier(0.22,1,0.36,1) forwards; }
@keyframes fillBar { to { width:var(--w,70%); } }

/* Badge cloud */
.tech-cloud { text-align:center; }
.tcl-label {
  display:block; font-family:var(--fn-head); font-size:12px;
  letter-spacing:3px; color:var(--text-dim); margin-bottom:20px;
}
.tech-badges { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
.tbadge {
  background:rgba(212,175,55,0.05); border:1px solid rgba(212,175,55,0.18);
  color:var(--gold); font-family:var(--fn-head); font-size:11px; letter-spacing:2px;
  padding:8px 20px; border-radius:2px; transition:0.25s; cursor:default;
}
.tbadge:hover {
  background:rgba(212,175,55,0.12); border-color:var(--gold);
  transform:translateY(-3px); box-shadow:0 6px 18px var(--gold-glow);
}

/* ══ PROJECT TABS ═════════════════════════════════ */
.cat-tabs { display:flex; gap:12px; margin-bottom:40px; flex-wrap:wrap; }
.cat-chip {
  display:flex; align-items:center; gap:10px;
  background:rgba(0,0,0,0.45); border:2px solid rgba(255,255,255,0.08);
  color:var(--text-dim); padding:12px 26px; cursor:pointer;
  font-family:var(--fn-head); font-size:12px; letter-spacing:2.5px; border-radius:100px;
  position:relative; transition:0.25s;
}
.cat-chip::before {
  content:''; position:absolute; inset:5px; border-radius:100px;
  border:1px dashed rgba(255,255,255,0.06); pointer-events:none;
}
.cat-chip:hover { color:var(--text); border-color:rgba(212,175,55,0.35); }
.cat-chip.active { color:var(--gold); border-color:var(--gold); background:rgba(212,175,55,0.1); box-shadow:0 0 24px var(--gold-glow); }
.chip-cat-web.active   { color:var(--red); border-color:var(--red); background:rgba(192,57,43,0.12); box-shadow:0 0 24px var(--red-glow); }
.chip-cat-ml.active    { color:var(--red); border-color:var(--red); background:rgba(192,57,43,0.12); box-shadow:0 0 24px var(--red-glow); }
.chip-suit { font-size:1.2rem; }

.panel-tagline {
  font-family:var(--fn-head); font-size:12px; letter-spacing:6px;
  color:var(--gold); opacity:0.5; text-align:center; margin-bottom:32px;
}
.project-panel { animation:panelIn 0.4s ease; }
@keyframes panelIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.cards-row { display:flex; gap:28px; flex-wrap:wrap; }

/* ══ PLAYING CARDS ════════════════════════════════ */
.play-card     { width:200px; height:300px; perspective:1400px; cursor:pointer; flex-shrink:0; }
.play-card-ace { width:240px; height:345px; }

.pc-inner {
  width:100%; height:100%;
  position:relative;
  transition:transform 0.7s cubic-bezier(0.4,0,0.2,1);
  transform-style:preserve-3d;
}
.pc-inner.flipped { transform:rotateY(180deg); }

.pc-front, .pc-back {
  position:absolute;
  top:0; left:0;
  width:100%; height:100%;
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;
  border-radius:12px;
  overflow:hidden;
}

/* Front — ivory card */
.pc-front {
  background:var(--ivory);
  border:2px solid rgba(0,0,0,0.1);
  box-shadow:0 8px 36px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.9);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  overflow:hidden; transition:box-shadow 0.2s;
}
.pc-front-ace { background:linear-gradient(160deg,#fff8f0,var(--cream)); }
/* hover only when NOT flipped */
.pc-inner:not(.flipped) .pc-front:hover {
  box-shadow:0 16px 52px rgba(0,0,0,0.65), 0 0 28px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,255,255,0.9);
}

.pc-corner { position:absolute; display:flex; flex-direction:column; align-items:center; line-height:1; }
.pc-corner.tl { top:10px; left:12px; }
.pc-corner.br { bottom:10px; right:12px; }
.pc-corner.rot { transform:rotate(180deg); }
.pc-rank  { font-family:var(--fn-card); font-size:1.3rem; font-weight:700; color:var(--ink); line-height:1; }
.pc-suit  { font-size:1rem; color:var(--ink); line-height:1; }
.pc-rank.red, .pc-suit.red { color:var(--red) !important; }

.pc-center { display:flex; flex-direction:column; align-items:center; text-align:center; gap:6px; }
.pc-big-suit  { font-size:3.8rem; color:var(--ink); line-height:1; }
.pc-big-suit.red { color:var(--red); }
.pc-ace-num   { font-family:var(--fn-card); font-size:5rem; font-weight:700; color:var(--red); line-height:1; }
.pc-center h3 { font-family:var(--fn-card); font-size:1.05rem; color:var(--ink); line-height:1.2; letter-spacing:1px; }
.pc-type      { font-family:var(--fn-head); font-size:9px; letter-spacing:2px; color:rgba(26,8,0,0.4); }

/* Back — deep red with gold details */
.pc-back {
  background:linear-gradient(160deg,#9b2020,#6b0e0e,#4a0a0a);
  transform:rotateY(180deg);
  border:2px solid var(--cream);
  box-shadow:0 8px 36px rgba(0,0,0,0.55);
  padding:22px; display:flex; flex-direction:column;
  position:absolute;
  top:0; left:0; width:100%; height:100%;
  isolation:isolate;
}
.pc-back::before {
  content:''; position:absolute; inset:8px;
  border:1px solid rgba(212,175,55,0.3); border-radius:7px; pointer-events:none;
}
.pc-back::after {
  content:'♦  ♦  ♦'; position:absolute;
  bottom:16px; left:50%; transform:translateX(-50%);
  font-size:9px; letter-spacing:6px; color:rgba(212,175,55,0.35);
  pointer-events:none;
}
.pc-back-header { display:flex; align-items:center; gap:8px; margin-bottom:12px; }
.pcbs  { font-size:1.1rem; color:var(--cream); opacity:0.7; }
.pc-back h3 { font-family:var(--fn-head); font-size:15px; letter-spacing:2px; color:var(--cream); }
.pc-back p  { font-size:13px; line-height:1.75; color:rgba(245,240,232,0.8); flex:1; margin-bottom:10px; font-style:italic; }
.pc-tags    { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:14px; }
.pc-tags span {
  background:rgba(0,0,0,0.3); color:var(--cream); opacity:0.85;
  font-family:var(--fn-head); font-size:11px; letter-spacing:1.5px;
  padding:3px 9px; border-radius:2px; border:1px solid rgba(212,175,55,0.2);
}
.pc-btn {
  display:block; text-align:center; padding:9px 16px;
  background:var(--cream); color:var(--red);
  text-decoration:none; font-family:var(--fn-head);
  font-size:10px; font-weight:700; letter-spacing:2.5px;
  border-radius:3px; transition:0.2s; margin-top:auto;
}
.pc-btn:hover { background:white; box-shadow:0 0 18px rgba(255,255,255,0.25); }
.pc-btn-group { display:flex; gap:8px; margin-top:auto; flex-wrap:wrap; }
.pc-btn-demo { flex:1; background:var(--cream); color:var(--red); }
.pc-btn-ghost {
  flex:1; background:transparent; color:var(--cream);
  border:1px solid rgba(245,240,232,0.3);
  display:block; text-align:center; padding:9px 12px;
  text-decoration:none; font-family:var(--fn-head);
  font-size:10px; font-weight:700; letter-spacing:2px;
  border-radius:3px; transition:0.2s;
}
.pc-btn-ghost:hover { background:rgba(245,240,232,0.1); border-color:var(--cream); }

/* ══ CONTACT ══════════════════════════════════════ */
.contact-intro { text-align:center; font-size:1rem; font-style:italic; color:var(--text-dim); margin:-20px 0 48px; }
.contact-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; max-width:960px; margin:0 auto; }
.cbox {
  background:rgba(0,0,0,0.35); border:1px solid var(--border-g);
  border-radius:4px; padding:32px 20px; text-align:center; transition:0.25s;
  position:relative; overflow:hidden;
}
/* Inner ornament */
.cbox::before {
  content:'';
  position:absolute; inset:7px;
  border:1px solid rgba(212,175,55,0.07);
  pointer-events:none; border-radius:2px;
  transition:border-color 0.25s;
}
.cbox:hover::before { border-color:rgba(212,175,55,0.18); }
.cbox:hover { background:rgba(212,175,55,0.06); transform:translateY(-4px); box-shadow:0 0 30px var(--gold-glow); }
.cbox-featured { background:rgba(192,57,43,0.1); border-color:var(--red); }
.cbox-featured::before { border-color:rgba(192,57,43,0.1); }
.cbox-featured:hover { background:rgba(192,57,43,0.18); box-shadow:0 0 30px var(--red-glow); }
.cbox-suit { font-size:2rem; display:block; margin-bottom:12px; color:var(--ivory); opacity:0.4; }
.cbox-suit.red { color:var(--red); opacity:0.7; }
.cbox h3 { font-family:var(--fn-head); font-size:12px; letter-spacing:3px; color:var(--gold); margin-bottom:10px; }
.cbox-link { display:block; font-family:var(--fn-head); font-size:13px; letter-spacing:0.5px; color:var(--text); text-decoration:none; line-height:1.6; transition:0.2s; }
.cbox-link:hover { color:var(--gold); }

/* ══ FOOTER ═══════════════════════════════════════ */
.site-footer {
  display:flex; justify-content:center; align-items:center; gap:20px;
  padding:32px; border-top:1px solid var(--border-g);
  background:var(--felt-dark);
  font-family:var(--fn-head); font-size:10px; letter-spacing:2.5px; color:var(--text-dim);
  position:relative;
}
.site-footer::before {
  content:'';
  position:absolute; top:0; left:50%; transform:translateX(-50%);
  width:min(600px,80%); height:1px;
  background:linear-gradient(90deg, transparent, var(--gold), var(--red), var(--gold), transparent);
}
.footer-suits { color:var(--gold); opacity:0.4; letter-spacing:10px; font-size:14px; }

/* ══ ANIMATIONS ═══════════════════════════════════ */
@keyframes fadeDown {
  from{opacity:0;transform:translateY(-14px)}
  to  {opacity:1;transform:translateY(0)}
}

/* ══ MOBILE ═══════════════════════════════════════ */
@media(max-width:768px){
  .felt-section { padding:80px 6% 50px; }
  .hamburger { display:flex; }
  .nav-links {
    display:none; flex-direction:column; gap:20px;
    position:absolute; top:60px; left:0; width:100%;
    background:rgba(5,16,9,0.97); padding:28px 6%;
    border-top:1px solid var(--border-g);
  }
  .nav-links.show { display:flex; }
  .about-body-grid { grid-template-columns:1fr; gap:40px; }
  .about-stats-row { grid-template-columns:1fr 1fr; }
  .ast-line { display:none; }
  .ast { border-bottom:1px solid rgba(212,175,55,0.08); }
  .domain-grid { grid-template-columns:1fr; }
  .section-headline { font-size:clamp(1.6rem,6vw,2.2rem); }
  .hero-ctas { flex-direction:column; align-items:center; }
  .cs-frame [class^="csf-"] { font-size:1.4rem; }
  .sec-suit { display:none; }
  .sec-deco-card { display:none; }
  .contact-grid { grid-template-columns:1fr 1fr; max-width:480px; }
  .table-oval { display:none; }
  .corner-suit { font-size:2rem; }
  .hero-chips { gap:12px; }
  .chip { width:62px; height:62px; font-size:8px; }
  .cat-tabs { gap:8px; }
  .cat-chip { padding:10px 16px; font-size:10px; }
  .play-card { width:175px; height:262px; }
  .play-card-ace { width:210px; height:300px; }
  .cards-row { gap:16px; }
  .hero-name { letter-spacing:3px; }
  .hero-ctas { flex-direction:column; align-items:center; }
}
</style>