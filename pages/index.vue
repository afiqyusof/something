<template>
  <div>
    <!-- Attach a FloatingWindow instance to prompt downloads.. -->
    <FloatingWindow ref="announcement" :header="announcementHeader" :text="announcementText" />
    <!-- Home page (parallax scene) -->
    <div id="home" class="page-container dark">
      <div id="scene" class="vertcenter">
        <!-- Scene background has low depth -->
        <div data-depth="0.4" class="bg">
          <div class="bgimg" />
        </div>
        <!-- Spinning cogs have different depths depending on their sizes. -->
        <div data-depth="0.6" class="topleft">
          <img src="../static/cogwhite.svg" class="spinning-cog-1">
        </div>
        <div data-depth="0.8" class="bottomright">
          <img src="../static/cogwhite.svg" class="spinning-cog-2">
        </div>
        <!-- Typewriter text -->
        <div data-depth="1.7">
          <div class="head-title centreish typewriter">
            {{ typetext }}
          </div>
        </div>
      </div>
    </div>
    <!-- About page -->
    <div id="about" class="page-container">
      <div class="page-title">
        <h1>ABOUT ME</h1>
      </div>
      <hr>
      <img src="../static/afiq.jpg" style="width: 60vmin; margin-bottom: 7vh;">
      <div>
        <h2>MY STORY</h2>
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I am Afiq, a Mechanical Engineering student in my penultimate year in the National University of Singapore. I believe that engineering and
        technology has shaped our very world and society to be what it is today and I am excited to think that I could be a part
        of that in the near future. Moving away from the technical side of things, I have tried my hand in creating a social nonprofit
        organization that aims to reduce recidivism rates among drug offenders in Singapore.
      </div>
      <div>
        <h2>MY OBJECTIVES</h2>
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I am currently seeking an internship in Silicon Valley to hone my more technical skills as. I would be very interested
        in product development roles for hardware. I would also be very open to handling software roles as well.
        The most important takeaway that I hope to achieve from this program is the skills and knowledge that I would
        acquire by the end of it
      </div>
      <div v-scroll-reveal class="page-paragraph">
        During the course of my internship, I hope to be trusted with a variety of responsibilities and be able to work on
        meaningful and challenging problems. I wish to contribute as much as I can in the technical as well as
        business aspects of my company. I also want to learn and experience what it takes for start ups to scale and be successful so that I can apply
        it to my own endeavors in the future.
      </div>
      <!-- Contact and Resume download div -->
      <div class="twoelements dark">
        <div class="contact-and-resume-box">
          <h3>CONTACT</h3>
          <p>
            <i class="el-icon-message" style="color: #aeeff0" /> - afiqyusof@u.nus.edu
          </p>
          <p>
            <i class="el-icon-phone" style="color: #aeeff0" /> - <span style="color: #ff8080">(+65)</span> 9178 5580
          </p>
        </div>
        <div class="contact-and-resume-box">
          <a href="/Afiq_Resume.pdf" style="text-decoration: none" download="Afiq_Yusof.pdf" target="_blank" @click="downloadResume">
            <h3>RESUME</h3>
            <p>
              <i class="el-icon-download" style="color: #aeeff0" /> <span style="color:white">Click to download</span><br><br>
            </p>
          </a>
        </div>
      </div>
    </div>
    <!-- Work page -->
    <div id="work" class="page-container">
      <div class="page-title">
        <h1>WORK EXPERIENCE</h1>
      </div>
      <hr>
      <!-- Uncage -->
      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <div class="twoelements">
          <img src="../static/uncage.png" alt="uncage" class="company-logo">
          <div class="work-description">
            <h3 style="color: #305f72">
              Uncage
            </h3>
            <h4>
              <em>Co-Founder, Vice-President (External)</em>
            </h4>
            <p>
              May 2018 - <em>Present</em>
            </p>
          </div>
        </div>
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I co-founded a for youths, by youths non-profit organization dedicated to
        reducing drug recidivism in Singapore by harnessing the power of community.
      </div>
      <img v-scroll-reveal src="../static/SACA.jpg" class="pictures-with-company">
      <div v-scroll-reveal class="imgcaption">
        My team attending the basic prison training conducted by the Singapore
        Aftercare Association (SACA).
      </div>
      <div v-scroll-reveal class="page-paragraph">
        In my time thus far as the Vice-President of External Relations, I've pitched our
        idea to, and forged partnerships with various established organizations in the field
        for approval.
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I am now leading my team in starting a pilot test together with the Singapore
        Prison Service.
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I have learned much from starting up a non-profit organisation such as this. None of my team had and prior experience
        with such things and did not have anyone we could depend on. We had to learn and experience first-hand the difficulty
        of what we set out to do. As Vice-President, I was tasked with pitching our idea to established organizations to see if
        what we proposed was viable and for their approval. This allowed me to really improve my communication and management skills.
      </div>
      <hr class="thinhr">
      <!-- Illumina -->
      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <div class="twoelements">
          <img src="../static/illumina.png" alt="illumina" class="company-logo">
          <div class="work-description">
            <h3 style="color: #ff8364">
              Illumina Inc.
            </h3>
            <h4>
              <em>Product Support Intern</em>
            </h4>
            <p>
              May 2019 - Aug 2019
            </p>
          </div>
        </div>
      </div>
      <div v-scroll-reveal class="page-paragraph">
        Just this summer, I joined Illumina Inc. as a product support intern.
      </div>
      <img v-scroll-reveal src="../static/illum.jpg" class="pictures-with-company">
      <div v-scroll-reveal class="imgcaption">
        My awesome colleagues!
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I worked with scientists and engineers to streamline technical information
        for less technical staff, and monitored cases in the Asia Pacific (APAC) region to recommend
        improvements to workflow processes.
      </div>
      <div v-scroll-reveal class="page-paragraph">
        Towards the end of my internship, I also created a web crawling script in
        Python that updated a database that was used for product analytics too!
      </div>
      <div v-scroll-reveal class="page-paragraph">
        My internship at Illumina taught me how to work independently. I had easily completed my main tasks
        at the company and took the initiative to work on a more technical project for them. To that end, I was
        tasked to work on a web crawling script in Python to create a database. However, as this was not in the main scope
        of my work, I did not have much guidance and had to work independently. The skills that I needed for this project were
        self-taught and I managed to complete this project by the time my internship ended.
      </div>
      <hr class="thinhr">
      <!-- SPF -->
      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <div class="twoelements">
          <img src="../static/MHASPF2.png" alt="illumina" class="company-logo">
          <div class="work-description">
            <h3 style="color: #ff8080">
              Singapore Police Force
            </h3>
            <h4>
              <em>Neighbourhood Police Centre Officer</em>
            </h4>
            <p>
              May 2015 - Mar 2017
            </p>
          </div>
        </div>
      </div>
      <div v-scroll-reveal class="page-paragraph">
        As part of National Service, I enlisted as a Police Officer and served my
        two years as a first responder in the Tampines neighbourhood.
      </div>
      <img v-scroll-reveal src="../static/spf.jpg" class="pictures-with-company">
      <div v-scroll-reveal class="imgcaption">
        My squad and I after a counter-terrorism exercise.
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I responded to calls and emergencies, and performed various duties
        that require excellent communication and conflict resolution skills.
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I was also given the opportunity to plan a division-wide event for more than
        500 participants.
      </div>
      <div v-scroll-reveal class="page-paragraph">
        I believe being in the police force has given me good problem solving skills as well
        as conflict resolution skills. Having to attend to numerous calls - sometimes from the same people -
        and act as a mediator would definitely hone these skills. Performing the job while maintaining an unbiased
        and professional stance was extremely important. Thus I learned to handle people in a strictly professional manner.
      </div>
    </div>
    <!-- Education page -->
    <div id="education" class="page-container">
      <div class="page-title">
        <h1>EDUCATION</h1>
      </div>
      <hr>
      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <div class="twoelements">
          <img src="../static/NUS.png" alt="illumina" class="company-logo">
          <div class="work-description">
            <h3 style="color: #ff8364">
              National University of Singapore
            </h3>
            <h4>
              <em>Bachelor of Engineering (Honours) in Mechanical Engineering</em>
            </h4>
            <p>
              Aug 2017 - May 2021
            </p>
          </div>
        </div>
      </div>
      <div class="page-paragraph">
        <p>
          Cumulative Average Point (CAP): 4.26/5.00 (Second Upper Class Honours)
        </p>
        <p>
          Dean's List for Semester 1 Academic Year 18/19
        </p>
      </div>
      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <div class="twoelements">
          <div class="work-description">
            <h2>DESIGN PROJECT</h2>
          </div>
          <div class="work-description">
            <h3>
              Royal Chemical & Tools Asia Pacific Pte Ltd
            </h3>
            <p>
              Aug 2019 - Dec 2019
            </p>
          </div>
        </div>
      </div>
      <div v-scroll-reveal class="page-paragraph">
        Led a group of 4 in a design project for Royal Chemical & Tools Asia Pacific Pte Ltd.
        Designed an original wheel locking mechanism for glass grinding wheels.
        Unique feature of locking mechanism was the ease of installation and removal of wheels. Oversaw
        every stage of the project from conceptualization, designing, prototyping, testing and fabrication
        of final product.
      </div>
      <div v-scroll-reveal class="page-paragraph">
        This design project was my first experience with product development. I also experienced project management as the leader of the team and
        main contact point between the university and the company. I was heavily involved in using Solidworks for CADing and basic simulation.
        I was also responsible for 3D printing prototypes and sourcing for materials and companies for fabrication.
        While the project was by no means easy, I found that I excelled at it and had a keen interest with the project work.
        This was also the reason why I was in charge of the many facets of the project.
      </div>
    </div>
    <!-- Skills page -->
    <div id="skills" class="page-container dark" name="skills">
      <div class="page-title">
        <h1>SKILLS</h1>
      </div>
      <hr>
      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <el-row>
          <el-col :span="10">
            Solidworks (CAD, Basic simulation)
          </el-col>
          <el-col :span="10">
            <progress value="89" max="100">
              Hi
            </progress>
          </el-col>
        </el-row>
      </div>

      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <el-row>
          <el-col :span="10">
            Ansys
          </el-col>
          <el-col :span="10">
            <progress value="83" max="100">
              Hi
            </progress>
          </el-col>
        </el-row>
      </div>

      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <el-row>
          <el-col :span="10">
            Arduino
          </el-col>
          <el-col :span="10">
            <progress value="62" max="100">
              Hi
            </progress>
          </el-col>
        </el-row>
      </div>

      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <el-row>
          <el-col :span="10">
            Java
          </el-col>
          <el-col :span="10">
            <progress value="68" max="100">
              Hi
            </progress>
          </el-col>
        </el-row>
      </div>

      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <el-row>
          <el-col :span="10">
            C
          </el-col>
          <el-col :span="10">
            <progress value="76" max="100">
              Hi
            </progress>
          </el-col>
        </el-row>
      </div>

      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <el-row>
          <el-col :span="10">
            Python
          </el-col>
          <el-col :span="10">
            <progress value="89" max="100">
              Hi
            </progress>
          </el-col>
        </el-row>
      </div>

      <div v-scroll-reveal class="work-box" style="margin-bottom: 7vh">
        <el-row>
          <el-col :span="10">
            Project Management
          </el-col>
          <el-col :span="10">
            <progress value="59" max="100">
              Hi
            </progress>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'
import FloatingWindow from '../components/FloatingWindow'

/* Constants for the typewriter */
const TIME_TO_TYPE_EACH_CHAR = 150
const TIME_TO_DELETE_EACH_CHAR = 100
const TIME_TEXT_IS_SHOWN = 1000
const TIME_TO_PUSH_ADDITIONAL_MESSAGES = 30000
const TIME_BEFORE_NEXT_MESSAGE_IS_SHOWN = 500

export default {
  /**
   * Importing Ubuntu and Roboto web fonts.
   */
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },
  components: {
    FloatingWindow
  },

  /**
   * announcementHeader The header of the floating window.
   * announcementText   The inner text of the floating window.
   * prompters          The array of text messages to display in the
   *                    typewriter in the scene.
   * prompterIndex      The index of the current typewriter text.
   * typetext           The actual text currently shown by the typewriter.
   */
  data () {
    return {
      announcementHeader: '',
      announcementText: '',
      prompters: [
        'HELLO!',
        'I\'M AFIQ',
        'I LIKE TRAINS',
        'HIRE ME PLEASE'
      ],
      prompterIndex: 0,
      typetext: ''
    }
  },

  computed: {
    /**
     * currtypetext The full string of text to be displayed by the
     *              typewriter.
     */
    currtypetext () {
      return this.prompters[this.prompterIndex]
    }
  },

  mounted () {
    /* Initialising Parallax.js scene. */
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene)
    console.log(parallaxInstance)

    /* Beginning the typewriter text */
    this.prompter()

    /* Inserting extra messages after 30s */
    setTimeout(() => {
      this.prompters.push('YOU\'RE STILL HERE?')
      this.prompters.push('ERM OKAY...')
      this.prompters.push('IT\'S GETTING CREEPY')
    }, TIME_TO_PUSH_ADDITIONAL_MESSAGES)
  },

  beforeDestroy () {
    clearTimeout(this.prompter)
    clearTimeout(this.unprompt)
  },

  methods: {
    /**
     * Initialize and show the floating window instance.
     */
    downloadResume () {
      this.announcementHeader = 'Download starting...'
      this.announcementText = 'Thanks for waiting, hope you enjoy the read!'
      this.$refs.announcement.show()
    },

    /**
     * Adding the next letter to the typewriter.
     */
    prompter () {
      if (this.typetext.length < this.prompters[this.prompterIndex].length) {
        this.typetext = this.prompters[this.prompterIndex].substring(0, this.typetext.length + 1)
        setTimeout(this.prompter, TIME_TO_TYPE_EACH_CHAR)
        return
      }
      setTimeout(this.unprompt, TIME_TEXT_IS_SHOWN)
    },

    /**
     * Removing the last letter of the typewriter.
     */
    unprompt () {
      if (this.typetext.length === 0) {
        this.prompterIndex++
        if (this.prompterIndex >= this.prompters.length) {
          this.prompterIndex = 0
        }
        setTimeout(this.prompter, TIME_BEFORE_NEXT_MESSAGE_IS_SHOWN)
        return
      }
      this.typetext = this.typetext.substring(0, this.typetext.length - 1)
      setTimeout(this.unprompt, TIME_TO_DELETE_EACH_CHAR)
    }
  }

}
</script>

<style>
/*
  A page-container of min-height of 100vh. All pages must have this
  minimum height and by default, has the text aligned to the center.
*/
.page-container {
  margin: 0 auto;
  padding-top: 60px;
  min-height: 100vh;
  text-align: center;
  overflow: hidden;
}

.page-title {
  padding: 0 0 10px 0;
  font-size: 1.3rem;
  color: #2e3d46;
}

/*
  A standard page-paragraph has 85vw on small devices and 45vw on large ones.
*/
.page-paragraph {
  max-width: 85vw;
  margin: 0 auto 10vh auto;
}

/*
  All dark page-containers will have a dark background and light text.
*/
.dark {
  background: #1d272d;
  color: #fcf9ea;
}

.dark .page-title {
  color: #aeeff0;
}

.dark h3 {
  color: #aeeff0;
}

/*
  Horizontal rules will slightly exceed the page-paragraph width.
*/
hr {
  margin: 0 auto 5vh auto;
  border: #305f72 5px solid;
  border-radius: 5px;
  width: 85vw;
}

.dark hr {
  border-color: #d8eff0;
}

hr.thinhr {
  border-width: 2px;
  border-radius: 2px;
}

.blank {
  height: 10vh;
  width: 10vh;
  transform: translate(10vw, 100vh);
}

.bgimg {
  background-image: url('../static/wallpaper.jpg');
  height: 130vh;
  width: 130vw;
  transform: translate(-15vw, -15vh);
  background-size: cover;
  overflow: hidden;
}

.centreish {
  position: relative;
  transform: translate(10vw, 30vh);
}

.company-logo {
  width: 60vmin;
  max-width: 200px;
  height: 60vmin;
  max-height: 200px;
  object-fit: contain;
  margin: auto;
}

.pictures-with-company {
  width: 85vw;
}

.head-title {
  z-index: 3;
  color: white;
  font-weight: bold;
  font-size: 2.1rem;
}

.imgcaption {
  font-style: italic;
  margin: 2vh auto 6vh auto;
}

.contact-and-resume-box {
  height: 100%;
  min-width: 40vw;
  margin: auto;
  padding: 32px 0;
}

.contact-and-resume-box h3 {
  animation: color-pulse 4s infinite linear;
}

.spinning-cog-1 {
  display: block;
  transform: translate(-10vw, -30vh);
  z-index: 2;
  animation: clockwise-rotation 2s infinite linear;
  width: 50vmin;
}

.spinning-cog-2 {
  z-index: 2;
  animation: anti-clockwise-rotation 2s infinite linear;
  width: 20vmin;
  transform: translate(50vw, 30vh);
}

.topleft {
  width: 100vw;
  height: 100vh;
  display: block;
  transform: translate(1000px, 1000px);
  padding-top: 50vh;
  padding-left: 50vw;
}

.twoelements {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 16px 16px;
}

.typewriter {
  border-right: .15em solid #fcf9ea; /* The typwriter cursor */
  animation: blink-caret .75s step-end infinite;
  padding-right: calc(5px + 2vw);
  white-space: nowrap;
}

.vertcenter {
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.work-box {
  width: 85vw;
  margin: auto;
}

.new-box{
  width: 30vw;
}

progress{
  background-color:white;
  height: 20px;
  width: 70%;
}
progress::-webkit-progress-bar{
  background-color:white;
  height: 20px;
  border-radius: 5px;
}
progress::-webkit-progress-value{
  background-color: olivedrab;
  height: 20px;
  border-radius: 5px;
}

.work-description {
  font-size: 130%;
  margin: auto;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #eceba7; }
}

#scene {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes clockwise-rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

@keyframes anti-clockwise-rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-359deg);
  }
}

@keyframes color-pulse {
  0% {
    color: #aeeff0;
  }

  25% {
    color: #eceba7;
  }

  50% {
    color: #9cf196;
  }

  100% {
    color: #aeeff0;
  }
}

@media (min-width: 1081px) {
  hr {
    width: 60vw;
  }

  .pictures-with-company {
    width: 60vw;
  }

  .head-title {
    font-size: 7rem;
  }

  .page-title {
    padding: 0 0 30px 0;
    font-size: 2rem;
    color: #1d272d;
  }

  .page-paragraph {
    width: 45vw;
    font-size: 1.1rem;
  }

  .work-box {
    width: 60vw;
  }

}
</style>
