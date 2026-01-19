<template>
  <div id="dash">
    <a href="#hello">About</a>
    <a href="#myprojects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <h3>Software Developer / Machine Learning / Web Development</h3>
    <a class="button" href="#contact">Contact Me</a>
  </div>
  <div id="board">
    <div id="aboutme">
      <h1>
        About me:
      </h1>
    </div>
    <div id="desc">
      <p>
        I am a university student focused on Machine Learning and software development. I enjoy working with Python and libraries such as scikit-learn, TensorFlow, NumPy, and pandas, as well as exploring C++ and web development.
      </p>
      <p>
        I’m especially interested in applying Machine Learning and Deep Learning to real-world problems, learning through hands-on projects, and continuously improving my technical skills while growing in professional environments.
      </p>
      <h1>Education:</h1>
      <p>
        I am currently studying at the University of the Republic (UDELAR), pursuing a degree in Computer Engineering.
      </p>
    </div>
    <div id="myprojects">
      <h1>
        My Projects & Contributions:
      </h1>
      <div id="projects">
        <div class="box">
          <h1>LibreCourse</h1>
          <h2>Contribution</h2>
          <p>LibreCourse is an open-source Django application for creating, organizing, and collaborating on courses.</p>
          <p>It’s designed to empower educators, learners, and communities by providing a flexible, modern platform to share knowledge freely.</p>
          <a class="button" href="https://github.com/emiliano-gandini-outeda/LibreCourse" target="_blank">See more</a>
        </div>
        <div class="box">
          <h1>Mailter</h1>
          <h2>Project</h2>
          <p>Mailter is an open-source application developed in Python that uses Machine Learning to classify and filter emails, automatically identifying those relevant for professional or work-related purposes.</p>
          <a class="button" href="https://github.com/emiliano-gandini-outeda/LibreCourse" target="_blank">See more</a>
        </div>
        <div class="box">
          <h1>Nauta</h1>
          <h2>Project</h2>
          <p>Nauta is a pixel art RPG developed in Godot, inspired by classic RPGs but with a reinvented approach.</p>
          <p>The game features a vast, living world filled with lovable characters, interconnected stories, and environments that encourage constant exploration.</p>
          <a class="button" href="https://github.com/emiliano-gandini-outeda/LibreCourse" target="_blank">See more</a>
        </div>
      </div>
    </div>
    <div id="contact">
      <div id="cheader"> 
        <h1>Contact Me</h1>
      </div>
      <div id="contactcontainer">
        <div class ="cbox">
          <img class="icon" src="@/assets/phone.png" alt="Phone">
          <h1>Phone</h1>
          <h2>+598 99 463 319</h2>
        </div>
        <div class ="cbox">
          <img class="icon" src="@/assets/mail.png" alt="Email">
          <h1>Email</h1>
          <h2>zalayetapedro@gmail.com</h2>
          <a class="button" href="mailto:zalayetapedro@gmail.com" target="_blank">
            See more
          </a>
        </div>
        <div class ="cbox">
          <img class="icon" src="@/assets/discord.png" alt="Discord">
          <h1>Discord</h1>
          <h2>pedro.z.dev</h2>
          <a class="button" href="https://discord.com/users/pedro.z.dev" target="_blank">
            See more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

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
