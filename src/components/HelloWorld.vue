<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const toggleLang = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}

const flipped = ref([false, false, false])

const flipCard = (i) => {
  flipped.value[i] = !flipped.value[i]
}
</script>

<template>
 <!-- NAVBAR -->


  <nav class="navbar">
    <div class="nav-container">

        <div class="logo">MY PORTFOLIO</div>

        <ul class="nav-links">
            <li><a href="#about" data-es="Sobre mí" data-en="About">{{ $t('home.about') }}</a></li>
            <li><a href="#skills" data-es="Tecnologías" data-en="Technologies">{{ $t('home.tecnologies') }}</a></li>
            <li><a href="#projects" data-es="Proyectos" data-en="Projects">{{ $t('home.projects') }}</a></li>
            <li><a href="#contact" data-es="Contacto" data-en="Contact">{{ $t('home.contact') }}</a></li>
        </ul>

        <button @click="toggleLang" id="langBtn">
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>
      </div>
  </nav>


  <!-- HERO -->

  <section id="hero">

    <div class="chips">
      <div class="chip chip1"></div>
      <div class="chip chip2"></div>
      <div class="chip chip3"></div>
      <div class="chip chip4"></div>
    </div>

    <h1>{{ $t('home.title') }}</h1>

    <h2 class="hero-text">{{ $t('home.subtitle') }}</h2>

    <a class="hero-button" href="#contact">
      {{ $t('home.contactbutton') }}
    </a>

  </section>


  <!-- MAIN BOARD -->

  <main id="board">

    <!-- ABOUT -->

    <section id="about">

  <h1 class="section-title">
    {{ $t('home.aboutme') }}
  </h1>

  <div class="about-container">

    <div class="about-text">

      <p>{{ $t('home.desc1') }}</p>

      <p>{{ $t('home.desc2') }}</p>

      <h2>{{ $t('home.education') }}</h2>

      <p>{{ $t('home.desc3') }}</p>

    </div>

  </div>

</section>


<!-- TECHNOLOGIES -->

<section id="skills">

  <h1 class="section-title">{{ $t('home.tecnologies') }}</h1>

  <div class="skills-container">

    <!-- Python -->
    <div class="skill">
      <span class="skill-name">Python</span>
      <span class="diamonds">
        <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span>
      </span>
    </div>

    <!-- Machine Learning -->
    <div class="skill">
      <span class="skill-name">Machine Learning</span>
      <span class="diamonds">
        <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span><span>♦</span><span>♦</span><span>♦</span>
      </span>
    </div>

    <!-- TensorFlow -->
    <div class="skill">
      <span class="skill-name">TensorFlow</span>
      <span class="diamonds">
        <span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span>
      </span>
    </div>

    <!-- C++ -->
    <div class="skill">
      <span class="skill-name">C++</span>
      <span class="diamonds">
        <span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span><span>♦</span><span>♦</span>
      </span>
    </div>

    <!-- Vue -->
    <div class="skill">
      <span class="skill-name">Vue / React</span>
      <span class="diamonds">
        <span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span><span>♦</span>
      </span>
    </div>

    <!-- Django -->
    <div class="skill">
      <span class="skill-name">Django / FastAPI</span>
      <span class="diamonds">
        <span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span><span>♦</span><span>♦</span>
      </span>
    </div>

    <!-- Git / Linux -->
    <div class="skill">
      <span class="skill-name">Git / Linux</span>
      <span class="diamonds">
        <span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span><span>♦</span><span>♦</span>
        <span>♦</span>
      </span>
    </div>

  </div>

</section>


    <!-- PROJECTS -->

    <section id="myprojects">

      <h1>{{ $t('home.myprojects') }}</h1>

      <div id="projects">

        <!-- CARD 1 -->

        <div class="card" @click="flipCard(0)">
          <div class="card-inner" :class="{ flipped: flipped[0] }">

            <div class="card-front">
              <h2>LibreCourse</h2>
              <p>{{ $t('home.contribution') }}</p>
            </div>

            <div class="card-back">
              <p>{{ $t('home.librecourse1') }}</p>
              <p>{{ $t('home.librecourse2') }}</p>

              <a
                class="button"
                href="https://github.com/emiliano-gandini-outeda/LibreCourse"
                target="_blank">
                {{ $t('home.seemore') }}
              </a>
            </div>

          </div>
        </div>


        <!-- CARD 2 -->

        <div class="card" @click="flipCard(1)">
          <div class="card-inner" :class="{ flipped: flipped[1] }">

            <div class="card-front">
              <h2>Pigeon</h2>
              <p>{{ $t('home.project') }}</p>
            </div>

            <div class="card-back">
              <p>{{ $t('home.mailter') }}</p>

              <a class="button" href="#" target="_blank">
                {{ $t('home.seemore') }}
              </a>
            </div>

          </div>
        </div>


        <!-- CARD 3 -->

        <div class="card" @click="flipCard(2)">
          <div class="card-inner" :class="{ flipped: flipped[2] }">

            <div class="card-front">
              <h2>Nauta</h2>
              <p>{{ $t('home.project') }}</p>
            </div>

            <div class="card-back">
              <p>{{ $t('home.nauta1') }}</p>
              <p>{{ $t('home.nauta2') }}</p>

              <a class="button" href="#" target="_blank">
                {{ $t('home.seemore') }}
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>


    <!-- CONTACT -->

    <section id="contact">

      <h1>{{ $t('home.contactbutton') }}</h1>

      <div id="contactcontainer">

        <div class="cbox">
          <h2>{{ $t('home.phone') }}</h2>
          <p>{{ $t('home.number') }}</p>
          <button class="button">+598 99 463 319</button>
        </div>

        <div class="cbox">
          <h2>Email</h2>
          <p>zalayetapedro@gmail.com</p>

          <a
            class="button"
            href="mailto:zalayetapedro@gmail.com">
            {{ $t('home.seemore') }}
          </a>
        </div>

        <div class="cbox">
          <h2>Discord</h2>
          <p>pedro.z.dev</p>

          <a
            class="button"
            href="https://discord.com/users/pedro.z.dev"
            target="_blank">
            {{ $t('home.seemore') }}
          </a>
        </div>

      </div>

    </section>

  </main>
</template>


<style scoped>
/* ---------- BASE ---------- */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:#0b0b0b;
  color:white;
  font-family: "Segoe UI",sans-serif;
}

/* ---------- NAVBAR ---------- */

.navbar {
    width: 100%;
    padding: 20px 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(6px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.nav-container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 3px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 35px;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: 0.3s;
    letter-spacing: 1px;
}

.nav-links a:hover {
    color: #ff3c3c;
}

button{
  background:#8b0000;
  color:white;
  border:none;
  padding:8px 16px;
  border-radius:5px;
  cursor:pointer;
  font-weight:bold;
  transition:0.3s;
}

button:hover{
  background:#c40000;
  transform:scale(1.05);
}

/* ---------- HERO ---------- */

#hero{
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;

  background: radial-gradient(circle at top center, rgba(255,50,50,0.2), rgba(0,0,0,0.95) 80%);

  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  overflow: hidden;
}

#hero h1{

  font-size:2rem;
  letter-spacing:3px;
  margin-bottom:10px;
  color:#ff4d4d;

}

#hero h2{

  font-size:3.8rem;
  font-weight:800;

  margin-bottom:20px;

  text-shadow:
  0 0 15px rgba(255,0,0,0.6),
  0 0 40px rgba(255,0,0,0.3);

}

.hero-text{

  max-width:650px;
  font-size:1.2rem;
  line-height:1.7;

  opacity:0.9;

}

.hero-button{

  margin-top:35px;

  padding:14px 36px;

  border:2px solid #ff4d4d;

  text-decoration:none;
  color:white;

  font-weight:600;
  letter-spacing:1px;

  transition:0.3s;

}

.hero-button:hover{

  background:#ff0000;

  box-shadow:
  0 0 20px rgba(255,0,0,0.7);

  transform:translateY(-3px);

}

.chips{
  position:absolute;
  inset:0;
  pointer-events:none;
}

/* ficha base */

.chip{

  position:absolute;

  width:90px;
  height:90px;

  border-radius:50%;

  background:
  radial-gradient(circle at center,
  #ff0000 40%,
  #8b0000 60%,
  #400000 100%);

  border:6px dashed white;

  box-shadow:
  0 0 20px rgba(255,0,0,0.6),
  inset 0 0 15px rgba(0,0,0,0.6);

  animation:floatChip 8s infinite ease-in-out;

}

/* posiciones */

.chip1{
  top:15%;
  left:10%;
}

.chip2{
  top:60%;
  left:15%;
  animation-delay:2s;
}

.chip3{
  top:20%;
  right:10%;
  animation-delay:4s;
}

.chip4{
  bottom:10%;
  right:15%;
  animation-delay:6s;
}

/* animación flotante */

@keyframes floatChip{

  0%{
    transform:translateY(0) rotate(0deg);
  }

  50%{
    transform:translateY(-20px) rotate(10deg);
  }

  100%{
    transform:translateY(0) rotate(0deg);
  }

}


/* capa de cartas */

#board::before{

  content:"♠ ♥ ♦ ♣";

  position:absolute;

  inset:0;

  font-size:120px;

  color:rgba(255,255,255,0.03);

  letter-spacing:120px;
  line-height:200px;

  white-space:pre-wrap;

  transform:rotate(-15deg);

  pointer-events:none;

}

/* ---------- BUTTON ---------- */

.button{
  display:inline-block;
  margin-top:25px;
  padding:12px 26px;
  border-radius:6px;
  background:#8b0000;
  color:white;
  text-decoration:none;
  font-weight:bold;
  letter-spacing:1px;
  transition:0.3s;
  border:1px solid #ff0000;
}

.button:hover{
  background:#c00000;
  box-shadow:0 0 15px rgba(255,0,0,0.6);
}

/* ---------- BOARD ---------- */

#board{
  padding:80px 10%;
  background:
    repeating-linear-gradient(
      45deg,
      #0a0a0a,
      #0a0a0a 10px,
      #0f0f0f 10px,
      #0f0f0f 20px
    );
}

/* ---------- ABOUT ---------- */

#aboutme h1{
  font-size:2rem;
  margin-bottom:20px;
  color:#ff4d4d;
}

#desc{
  max-width:900px;
  line-height:1.7;
  opacity:0.9;
}

#desc p{
  margin-bottom:18px;
}

/* ---------- PROJECT SECTION ---------- */

#myprojects{
  margin-top:80px;
}

#myprojects h1{
  text-align:center;
  margin-bottom:50px;
  color:#ff4d4d;
}

/* ---------- CARDS ---------- */

#projects{
  display:flex;
  justify-content:center;
  gap:40px;
  flex-wrap:wrap;
}

/* carta base */

.card{
  width:260px;
  height:330px;
  perspective:1200px;
  cursor:pointer;
}

/* interior */

.card-inner{
  width:100%;
  height:100%;
  position:relative;
  transition:transform 0.7s;
  transform-style:preserve-3d;
}

.card-inner.flipped{
  transform:rotateY(180deg);
}

/* lados */

.card-front,
.card-back{
  position:absolute;
  width:100%;
  height:100%;
  backface-visibility:hidden;
  border-radius:10px;
  padding:25px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
}

/* frente */

.card-front{
  background:
    linear-gradient(145deg,#8b0000,#3a0000);
  border:2px solid white;
  box-shadow:
    0 0 25px rgba(255,0,0,0.4),
    inset 0 0 20px rgba(0,0,0,0.6);
}

.card-front h1{
  font-size:1.8rem;
  margin-bottom:10px;
}

.card-front p{
  opacity:0.9;
}

/* reverso */

.card-back{
  background:#111;
  border:2px solid #8b0000;
  transform:rotateY(180deg);
  box-shadow:0 0 25px rgba(255,0,0,0.25);
}

/* hover glow */

.card:hover .card-front{
  box-shadow:
    0 0 40px rgba(255,0,0,0.7),
    inset 0 0 25px rgba(0,0,0,0.6);
}

/* ---------- CONTACT ---------- */

#contact{
  margin-top:100px;
}

#cheader{
  text-align:center;
  margin-bottom:40px;
}

#contactcontainer{
  display:flex;
  justify-content:center;
  gap:40px;
  flex-wrap:wrap;
}

.cbox{
  background:#111;
  border:1px solid #8b0000;
  padding:30px;
  width:240px;
  text-align:center;
  border-radius:8px;
  transition:0.3s;
}

.cbox:hover{
  transform:translateY(-5px);
  box-shadow:0 0 20px rgba(255,0,0,0.4);
}

.cbox h1{
  color:#ff4d4d;
  margin-bottom:10px;
}

/* TITULOS DE SECCION */

.section-title{
  text-align:center;
  font-size:2.2rem;
  margin-bottom:40px;
  color:#ff4d4d;
  letter-spacing:1px;
  text-shadow:0 0 15px rgba(255,0,0,0.3);
}

/* ABOUT */

.about-container{
  display:flex;
  justify-content:center;
}

.about-text{
  max-width:800px;
  text-align:center;
  line-height:1.8;
  font-size:1.05rem;
  padding:30px;
  background:#111;
  border:1px solid #8b0000;
  border-radius:10px;
  box-shadow:0 0 25px rgba(255,0,0,0.15);
}

.about-text p{
  margin-bottom:18px;
}

.about-text h2{
  margin-top:25px;
  margin-bottom:10px;
  color:#ff4d4d;
}


/* SKILLS */

#skills{
  margin-top:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
}

/* contenedor */

.skills-container{
  width:600px;
  max-width:90%;
}

/* skill */

.skill{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:14px 20px;
  margin-bottom:12px;

  background:#111;
  border:1px solid #8b0000;
  border-radius:8px;

  transition:0.3s;
}

.skill:hover{
  transform:translateY(-2px);
  box-shadow:0 0 15px rgba(255,0,0,0.35);
}

/* nombre */

.skill-name{
  font-weight:600;
  letter-spacing:1px;
}

/* diamantes */

.diamonds span{

  color:#ff2a2a;
  font-size:1.2rem;
  margin-left:3px;

  opacity:0;

  text-shadow:
  0 0 6px rgba(255,0,0,0.9),
  0 0 15px rgba(255,0,0,0.6);

  animation:diamondAppear 0.4s forwards;

}

/* delay progresivo */

.diamonds span:nth-child(1){animation-delay:0.1s;}
.diamonds span:nth-child(2){animation-delay:0.2s;}
.diamonds span:nth-child(3){animation-delay:0.3s;}
.diamonds span:nth-child(4){animation-delay:0.4s;}
.diamonds span:nth-child(5){animation-delay:0.5s;}
.diamonds span:nth-child(6){animation-delay:0.6s;}
.diamonds span:nth-child(7){animation-delay:0.7s;}
.diamonds span:nth-child(8){animation-delay:0.8s;}
.diamonds span:nth-child(9){animation-delay:0.9s;}
.diamonds span:nth-child(10){animation-delay:1s;}

/* animacion */

@keyframes diamondAppear{

  from{
    opacity:0;
    transform:translateY(-6px) scale(0.8);
  }

  to{
    opacity:1;
    transform:translateY(0) scale(1);
  }

}

</style>
