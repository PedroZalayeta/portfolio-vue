<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const toggleLang = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <div id="dash">
    <button @click="toggleLang">
    {{ locale === 'es' ? 'EN' : 'ES' }}
    </button>
    <a href="#hello">{{ $t('home.about') }}</a>
    <a href="#myprojects">{{ $t('home.projects') }}</a>
    <a href="#contact">{{ $t('home.contact') }}</a>
  </div>
  <div id="hello">
      <h1>{{ $t('home.title') }}</h1>
    <h3>{{ $t('home.subtitle') }}</h3>
    <a class="button" href="#contact">{{ $t('home.contactbutton') }}</a>
  </div>
  <div id="board">
    <div id="aboutme">
      <h1>
      {{  $t('home.aboutme') }}
      </h1>
    </div>
    <div id="desc">
      <p>
      {{  $t('home.desc1') }}
      </p>
      <p>
      {{  $t('home.desc2') }}
      </p>
      <h1>{{  $t('home.education') }}</h1>
      <p>
        {{  $t('home.desc3') }}
      </p>
    </div>
    <div id="myprojects">
      <h1>
        {{ $t('home.myprojects') }}
      </h1>
      <div id="projects">
        <div class="box">
          <h1>LibreCourse</h1>
          <h2>{{ $t('home.contribution') }}</h2>
          <p>{{ $t('home.librecourse1') }}</p>
          <p>{{ $t('home.librecourse2') }}</p>
          <a class="button" href="https://github.com/emiliano-gandini-outeda/LibreCourse" target="_blank"><p>{{ $t('home.seemore') }}</p></a>
        </div>
        <div class="box">
          <h1>Mailter</h1>
          <h2>{{ $t('home.project') }}</h2>
          <p>{{ $t('home.mailter') }}</p>
          <a class="button" href="https://github.com/emiliano-gandini-outeda/LibreCourse" target="_blank">{{ $t('home.seemore') }}</a>
        </div>
        <div class="box">
          <h1>Nauta</h1>
          <h2>{{ $t('home.project') }}</h2>
          <p>{{ $t('home.nauta1') }}</p>
          <p>{{ $t('home.nauta2') }}</p>
          <a class="button" href="https://github.com/emiliano-gandini-outeda/LibreCourse" target="_blank">{{ $t('home.seemore') }}</a>
        </div>
      </div>
    </div>
    <div id="contact">
      <div id="cheader"> 
        <h1>{{ $t('home.contactbutton') }}</h1>
      </div>
      <div id="contactcontainer">
        <div class ="cbox">
          <img class="icon" src="@/assets/phone.png" alt="Phone">
          <h1>{{ $t('home.phone') }}</h1>
          <h2>+598 99 463 319</h2>
        </div>
        <div class ="cbox">
          <img class="icon" src="@/assets/mail.png" alt="Email">
          <h1>Email</h1>
          <h2>zalayetapedro@gmail.com</h2>
          <a class="button" href="mailto:zalayetapedro@gmail.com" target="_blank">
            {{ $t('home.seemore') }}
          </a>
        </div>
        <div class ="cbox">
          <img class="icon" src="@/assets/discord.png" alt="Discord">
          <h1>Discord</h1>
          <h2>pedro.z.dev</h2>
          <a class="button" href="https://discord.com/users/pedro.z.dev" target="_blank">
            {{ $t('home.seemore') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  width: 100%;
  height: 25%;
  background: linear-gradient(
      rgba(0,0,0,0.4),
      rgb(0, 0, 0)
    ),url('@/assets/banner.jpg') center / cover no-repeat;
  font-size: 25px;
  padding: 100px 9px 100px 0;
  border: solid;
  border-left: 0cap;
  border-top: 0cap;
  border-right: 0cap;
  border-color: #777777;
  margin-top: 70px; 
}

#aboutme{
  font-size: 20px;
  font-weight: bolder;
}

#desc{
  padding: 0 100px 50px 100px;
  font-size: 20px;
  text-align: center;
  border: solid;
  border-left: 0cap;
  border-top: 0cap;
  border-right: 0cap;
  border-color: #949494;
  margin-top: 70px; 
}

#myprojects {
  font-size: 20px;
  font-weight: bolder;
  padding: 100px 0 50px 0;
}

#dash {
  position: fixed;
  top: 0;
  left: -40px;

  width: 100%;
  height: 30px;

  display: flex;
  justify-content: flex-end;
  gap: 50px;
  padding: 20px 200px 20px 0;
  z-index: 1;

  background-color: black;
  border: solid;
  border-left: 0cap;
  border-top: 0cap;
  border-right: 0cap;
  border-color: #474747; 
}

#dash a {
  font-size: 25px;
}

a {
  text-decoration: none;
  font-weight: 500;
  color:#ffffff
}

a:visited {
  color:#ffffff;
}

a:hover {
  color: #ffffff;
}

#projects {
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 50px 0;
  flex-wrap: wrap;
  border: solid;
  border-left: 0cap;
  border-top: 0cap;
  border-right: 0cap;
  border-color: #cfcfcf; 
  margin-bottom: 30px;
}

.box {
  width: 400px;
  text-align: center;
}

.button {
  border: solid white;
  padding: 8px 16px;  
  border-radius: 20px;
  display: inline-block;
  margin-top: 20px;
}

.button:hover {
  background-color: #ffffff34;
}

#contactcontainer {
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 50px 0;
  flex-wrap: wrap;
}

.cbox {
  width: 400px;
  text-align: center;
}

.icon {
  width: 15%;
}

#contact {
  padding: 50px 0 20px 0;
}

#board {
     background: linear-gradient(
      rgb(0, 0, 0),
      rgba(255, 255, 255, 0.301)
    ),url('@/assets/background.jpg') center / cover no-repeat;
}


</style>
