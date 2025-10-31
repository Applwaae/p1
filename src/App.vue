<script setup>
import { ref, onMounted, computed, onBeforeMount } from 'vue'
import anime from 'animejs'

// --- 1. 个人简介数据 ---
const profile = ref({
  name: "Apple Ma",
  avatar: "/public/assets/avatar.jpg", // Added avatar path
  title: [
    { "text": "Self-starter", "color": "#FF6347" },
    { "text": "Growing developer", "color": "#4682B4" },
    { "text": "STEM Enthusiast", "color": "#32CD32" }
  ],
  bio: "Hello! I'm here to make this world a better place."
})

const nameLetters = computed(() => {
  return profile.value.name.split('').map(letter => {
    return {
      char: letter === ' ' ? '\u00A0' : letter, // Replace space with non-breaking space
      class: 'letter'
    }
  })
})

// --- 2. 个人项目数据 ---
const projects = ref([
  {
    id: 1,
    title: "Smart Schedule Generator",
    description: "Smart schedule generation tool that allows users to customize courses, activities, and preferences to automatically create an optimal schedule.",
    image: "/public/assets/p1-preview.png",
    links: [
      { "text": "Visit Website", "url": "https://timetablev1-4rfgm5xwcsnjftm3jbmtmb.streamlit.app/" },
      { "text": "GitHub", "url": "https://github.com/Applwaae/timetablev1" }
    ]
  },
  {
    id: 2,
    title: "AI chatting robot",
    description: "An AI-powered chatting robot that can assist you",
    image: "/public/assets/p2-preview.png",
    links: [
      { "text": "Visit Website", "url": "https://aichatbot-9fahrsv79da58puyzmoce6.streamlit.app/" },
      { "text": "GitHub", "url": "https://github.com/Applwaae/aichatbot" }
    ]
  }
])

// --- 3. 社交链接数据 (使用 SVG 图标) ---
const socials = ref([
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Applwaae",
    svgIcon: "M9 19c-4.3 1.4 -4.3-1.8 -5-2.2c.7 0 1.4-.3 2.1-.7c-1.3-.3 -2.3-1.4 -2.3-2.8c0-1.3 .5-2.3 1.3-3.1c-.1-.3 -.6-1.5 .1-3.1c0 0 1-.3 3.3 1.2c1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2c.7 1.6 .2 2.8 .1 3.1c.8 .8 1.3 1.8 1.3 3.1c0 1.4-1 2.5-2.3 2.8c.7 .4 1.3 1.1 1.3 2.2c0 1.6-.0 2.9-.0 3.3c0 .3 .2 .7 .7 .6c3.7-1.2 6.3-4.5 6.3-8.5C22 6.1 17.9 2 12 2S2 6.1 2 12c0 4 2.6 7.3 6.3 8.5c.5 .1 .7-.3 .7-.6c0-.4-.0-1.7-.0-3.3z"
  },
  {
    id: 2,
    name: "Email",
    url: "mailto:applwaae@gmail.com",
    svgIcon: "M22 4H2C.9 4 0 4.9 0 6v12c0 1.1 .9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 6l-8 5l-8-5h16zM2 18V8l10 6.2L22 8v10H2z"
  }
])

// --- 4. 动画 ---
const avatar = ref(null)
const nameH1 = ref(null)
const taglineElements = ref([])
const bio = ref(null)
const projectCards = ref([])
const socialLinks = ref([])
const isNavOpen = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

onBeforeMount(() => {
  projectCards.value = []
  socialLinks.value = []
})

onMounted(() => {
  const tl = anime.timeline({
    easing: 'easeOutExpo',
  });

  tl.add({
      targets: avatar.value,
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 800,
    })
    .add({
      targets: nameH1.value.querySelectorAll('.letter'),
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      opacity: [0, 1], /* Add this line to animate opacity */
      duration: 750,
      easing: "easeOutExpo",
      delay: anime.stagger(50)
    }, '-=200')
    .add({
      targets: taglineElements.value,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(800)
    }, '+=0')
    .add({
      targets: bio.value,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600
    }, '+=300')
    .add({
      targets: '.project-card',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(150)
    }, '-=400')
    .add({
      targets: '.social-link',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 400,
      delay: anime.stagger(100)
    }, '-=400');

  // Mouse Trace Effect
  const canvas = document.getElementById('mouse-trace-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleLife = 40; // How many frames a particle lives
  const particleColor = '255, 120, 0'; // Orange RGB

  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 4; // Starting size
      this.life = particleLife;
      this.opacity = 1;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.5, // Very small random velocity
        y: (Math.random() - 0.5) * 0.5
      };
    }

    draw() {
      ctx.fillStyle = `rgba(${particleColor}, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }

    update() {
      this.life--;
      this.opacity = this.life / particleLife;
      this.size *= 0.95; // Shrink over time
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }

  window.addEventListener('mousemove', (e) => {
    particles.push(new Particle(e.clientX, e.clientY));
  });

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.update();
      p.draw();

      if (p.life < 0 || p.size < 0.1) {
        particles.splice(i, 1);
        i--;
      }
    }
    requestAnimationFrame(animateParticles);
  }

  animateParticles();
})

function handleMouseMove(event) {
  const card = event.currentTarget;
  const { clientX, clientY } = event;
  const { top, left, width, height } = card.getBoundingClientRect();
  
  const xRotation = 20 * ((clientY - top - height / 2) / height);
  const yRotation = -20 * ((clientX - left - width / 2) / width);

  card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05, 1.05, 1.05)`;
}

function handleMouseLeave(event) {
  const card = event.currentTarget;
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

</script>

<template>
  <canvas id="mouse-trace-canvas" class="mouse-trace-canvas"></canvas>
  <div class="page-wrapper">
    <button @click="toggleNav" class="nav-toggle-btn">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    <a href="/public/assets/Resume - Apple Ma.docx.pdf" download class="resume-download-btn">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Resume
    </a>
    <nav :class="['main-nav', { 'is-open': isNavOpen }]">
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#academic-achievements">Academic Achievements</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="content-container">

      <section id="about-me" class="profile section-with-wave">
        <div class="avatar-name-group">
          <img :src="profile.avatar" alt="Profile Avatar" class="avatar" ref="avatar">
          <h1 ref="nameH1">
            <span v-for="(letter, index) in nameLetters" :key="index" :class="letter.class" v-html="letter.char"></span>
          </h1>
        </div>
        <h2 class="section-title profile-section-title">About Me</h2>
        <div class="tagline-container">
          <span
            v-for="(item, index) in profile.title"
            :key="index"
            class="tagline-item"
            :style="{ color: item.color }"
            ref="taglineElements"
          >
            {{ item.text }}
          </span>
        </div>
        <p class="bio" ref="bio">{{ profile.bio }}</p>
      </section>

      <section id="academic-achievements" class="academic-achievements section-with-wave">
        <h2 class="section-title">Academic Achievements</h2>
        <div class="achievements-list">
          <h3>Education Background</h3>
          <ul>
            <li><strong>Harrow International School Hong Kong</strong>, Hong Kong, Grade 11 - 12 (2024-Present)
              <ul>
                <li><span class="highlight-prominent">TOEFL</span>: <span class="highlight-prominent">112</span></li>
                <li><span class="highlight-prominent">SAT</span>: <span class="highlight-prominent">1540 (Reading and Writing 780; Math 760)</span></li>
              </ul>
            </li>
            <li><strong>Diocesan Girls' School</strong>, Hong Kong, Grades 9 -11 (2022-2024)</li>
          </ul>
          <h3>Honors and Awards</h3>
          <ul>
            <li><span class="highlight-prominent">Gold Award, The 8th National Youth Artificial Intelligence Innovation Challenge 2025, G12</span></li>
          </ul>
          <h3>Academic Enrichment & Research</h3>
          <ul>
            <li><strong>Research on Renewable Energy</strong>, Research Assistance (2025)
              <ul>
                <li>Studied on various renewable energy and technologies under the guidance of Prof. Nasr Ghoniem at UCLA</li>
                <li><span class="highlight-prominent">Produced a research report on “Review and Design of a Wave Energy Conversion System” and earned a grade A</span></li>
                <li>Link: <a href="https://www.researchgate.net/publication/394143469_Review_and_Design_of_a_Wave_Energy_Conversion_System" target="_blank">Review and Design of a Wave Energy Conversion System</a></li>
              </ul>
            </li>
            <li><strong>Research on Structural Dynamics and Vibrations</strong>, Research Assistance (2024)
              <ul>
                <li>Mentored by UCLA Professor Jiann-Wen Woody Ju to explore free vibration analysis of SDOF equation of motion...</li>
                <li><span class="highlight-prominent">Published the research paper on the 3rd International Conference on Mechatronics and Smart Systems (CONF-MSS 2025) and EWA Publishing</span></li>
                <li>Link: <a href="https://www.ewadirect.com/proceedings/ace/article/view/26390" target="_blank">The Interplay of Structural Stiffness and Mechanical Vibrations in Multi-Level Constructions</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" class="projects section-with-wave">
        <h2 class="section-title">My Projects</h2>
        <div class="project-grid">
          <div 
            class="project-card" 
            v-for="project in projects" 
            :key="project.id"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <img :src="project.image" :alt="project.title" class="project-image" v-if="project.image">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-links">
              <a 
                v-for="link in project.links" 
                :key="link.text" 
                :href="link.url" 
                target="_blank"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="socials">
        <h2 class="section-title">Contact Me</h2>
        <div class="social-icons">
          <a 
            v-for="social in socials" 
            :key="social.id" 
            :href="social.url" 
            :title="social.name" 
            target="_blank" 
            class="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path :d="social.svgIcon" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
/* Mouse Trace Canvas */
.mouse-trace-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* Allow interaction with elements beneath the canvas */
  z-index: 9999; /* Ensure it's on top of everything */
}

html {
  scroll-behavior: smooth;
}

.nav-toggle-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001; /* Higher than nav */
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.nav-toggle-btn:hover {
  transform: scale(1.1);
}

.resume-download-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 24px; /* Adjusted for text */
  padding: 8px 16px; /* Added padding */
  height: 48px; /* Keep height consistent */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* Space between icon and text */
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.resume-download-btn:hover {
  transform: scale(1.1);
}

.main-nav {
  position: fixed;
  top: 0;
  transform: translateX(-100%); /* Start off-screen using transform */
  width: 180px;
  height: 100vh; /* Full height */
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  z-index: 1000;
  padding: 20px;
  text-align: center;
  border-radius: 0; /* No border-radius for full height */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease; /* Smooth transition for transform */
}

.main-nav.is-open {
  transform: translateX(0); /* Slide in */
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; /* Stack links vertically */
  gap: 10px; /* Adjust gap between links */
  width: 100%; /* Take full width of nav */
}

.main-nav li {
  width: 100%;
}

.main-nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  font-size: 1rem; /* Slightly smaller font size */
  padding: 10px 15px; /* Adjust padding for links */
  border-radius: 8px; /* Rounded corners for links */
  transition: background-color 0.3s ease, color 0.3s ease;
  display: block; /* Make links block level for full width click area */
}

.main-nav a:hover {
  background-color: var(--primary-color);
  color: white;
}

.letter {
  display: inline-block;
}

.profile, .projects, .socials {
  opacity: 1; /* Reset opacity as we are animating children */
}

.avatar, .bio, .project-card, .social-link {
  opacity: 0; /* Initially hide elements that will be animated */
}

/* CSS 变量定义 */
.page-wrapper {
  --b3-theme-background: #f1f0f0; /* Editor Background */
  --Sv--dialog-container: #e2e1e1; /* Dialogs and Containers */
  --Sv-plugin-off-bg: #d0cfcf; /* Inactive Plugin/UI Elements */
  --Sv-tab-inactive: #d4d3d3; /* Inactive tab bar items */

  --primary-color: #8B4513; /* Saddle Brown */
  --accent-color: #A0522D; /* Sienna */
  --text-color: #2C3E50; /* Darker text for better contrast */
  --text-secondary: #7F8C8D; /* Softer grey for secondary text */
  --bg-color: var(--b3-theme-background); /* Use editor background as main page background */
  --card-bg: var(--Sv--dialog-container); /* Use dialog container for card background */
  --shadow: 0 6px 20px rgba(0, 0, 0, 0.08); /* More pronounced but still subtle shadow */
  --border-radius: 16px; /* Larger border-radius for a softer, modern look */

  --section-bg-1: #F5F5DC; /* Light Beige */
  --section-bg-2: #D4E2D4; /* Soft Green */
  --section-bg-3: #E0D8D0; /* Warm Grey */
  --section-bg-4: #E6BEAE; /* Muted Orange/Terracotta */

  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* Modern font stack with Inter as primary */
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  width: 100%; /* Restore width: 100% */
  box-sizing: border-box;
  overflow-x: hidden; /* Prevent horizontal scrollbar from animations */
  /* display: flex; */ /* Remove flexbox for layout */
}

.content-container {
  /* flex-grow: 1; */ /* Remove flex-grow */
  max-width: none; /* Allow content to take full width */
  margin: 0; /* Remove auto margin */
  padding: 0; /* Remove all padding for full width and height content */
  box-sizing: border-box;
}

h1, h2, h3 {
  color: var(--text-color); /* Use text-color for headings */
  font-weight: 700; /* Bolder headings */
  line-height: 1.2;
}
h2.section-title {
  font-size: 2.5rem; /* Larger section titles */
  text-align: center;
  margin-top: 100px; /* Increased module spacing */
  margin-bottom: 50px;
  position: relative;
}
h2.section-title::after {
  content: '';
  display: block;
  width: 80px; /* Longer separator */
  height: 4px; /* Thicker separator */
  background-color: var(--primary-color);
  margin: 20px auto 0;
  border-radius: 2px;
}
p {
  line-height: 1.8; /* Increased line-height for readability */
  color: var(--text-secondary); /* Use text-secondary for paragraphs */
  font-size: 1.1rem;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px; /* Add padding to the top of the circular section */
  padding-bottom: 10px; /* Greatly reduce bottom padding for the first section */
  background-color: var(--section-bg-1);
}
.avatar-name-group {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
.avatar {
  width: 180px; /* Larger avatar */
  height: 180px;
  border-radius: 50%;
  background-color: var(--primary-color); /* Use primary color for background */
  color: white; /* White text for contrast */
  font-size: 4rem; /* Large font size for initial */
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover; /* Ensure the image covers the circular area */
}
.profile h1 {
  font-size: 3.8rem; /* Larger, more impactful name */
  margin: 0;
  letter-spacing: -0.04em; /* Tighter letter spacing for titles */
  color: var(--text-color);
  /* Add perspective for letter animation */
  perspective: 400px;
}
.profile-section-title {
  margin-top: 30px; /* Reduced top margin */
  margin-bottom: 30px; /* Adjusted bottom margin */
}
.tagline-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
.tagline-item {
  font-size: 1.4rem;
  font-weight: 500;
  opacity: 0;
}

.profile .bio {
  font-size: 1.2rem;
  max-width: none;
  margin: 30px auto 0;
  color: var(--text-secondary);
}

.academic-achievements {
  background-color: var(--section-bg-2);
  padding-top: 10px; /* Greatly reduced top padding */
  padding-bottom: 110px; /* Slightly increased bottom padding */
}

.academic-achievements ul {

  list-style: none; /* Remove bullet points */

  padding-left: 0; /* Remove default padding */

}



.section-with-wave {

  position: relative;

  padding-bottom: 100px; /* Ensure enough space for the wave */

}



.section-with-wave::after {

  content: '';

  position: absolute;

  bottom: 0;

  left: 0;

  width: 100%;

    height: 120px; /* Increased height for a more pronounced wave */

    background-color: transparent; /* Will be overridden by specific section styles */

    border-top-left-radius: 100% 120px; /* Smoother, wider crest */

    border-top-right-radius: 100% 120px; /* Smoother, wider crest */

    transform: translateY(50%); /* Move half of the wave into the next section */

    z-index: 1;

    box-shadow: 0 -5px 0 0 rgba(255, 255, 255, 0.8); /* White line above the wave */

}

.profile.section-with-wave::after {
  background-color: var(--section-bg-1);
  transform: translateY(50%) scaleY(-1);
}

.academic-achievements.section-with-wave::after {

  background-color: var(--section-bg-3);

}



.projects.section-with-wave::after {

  background-color: var(--section-bg-4);

}



/* Adjust padding for sections to accommodate the wave */

.profile {

  padding-bottom: 100px; /* Ensure enough space for the wave */

}



.academic-achievements {

  padding-bottom: 100px; /* Ensure enough space for the wave */

}



.projects {

  padding-bottom: 100px; /* Ensure enough space for the wave */

}







.projects {
  background-color: var(--section-bg-3);
  padding-top: 10px; /* Greatly reduced top padding */
  padding-bottom: 110px; /* Slightly increased bottom padding */
  padding-left: 40px;
  padding-right: 40px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Adjusted minmax for project cards */
  gap: 40px; /* Increased gap for more separation */
  perspective: 1500px; /* Add perspective for 3D effect */
}
.project-card {
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 35px; /* Increased padding */
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  text-align: left;
  display: flex; /* Use flexbox for internal layout */
  flex-direction: column;
  justify-content: space-between; /* Push links to the bottom */
  will-change: transform; /* Optimize for transform changes */
}
.project-card:hover {
  /* transform is now handled by JS */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
.project-card .project-image {
  width: 100%;
  height: 200px; /* Fixed height for consistency */
  object-fit: cover; /* Cover the area, cropping if necessary */
  border-radius: var(--border-radius);
  margin-bottom: 20px;
}

.project-card h3 {
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--primary-color);
}
.project-card p {
  margin-bottom: 25px;
  color: var(--text-secondary);
  flex-grow: 1; /* Allow description to take available space */
}
.project-links {
  margin-top: 20px; /* Space above links */
}
.project-links a {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 600;
  margin-right: 25px; /* Increased spacing between links */
  transition: color 0.2s;
  position: relative;
  padding-bottom: 5px; /* More space for the underline effect */
}
.project-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 3px; /* Thicker underline */
  background-color: var(--accent-color); /* Use accent color for underline */
  transition: width 0.3s ease-out;
}
.project-links a:hover::after {
  width: 100%;
}
.project-links a:hover {
  color: var(--accent-color); /* Change color on hover */
}

.socials {
  text-align: center;
  /* margin-bottom: 100px; */ /* Remove margin to eliminate empty space at the bottom */
  padding-top: 10px; /* Greatly reduced top padding */
  padding-bottom: 110px; /* Slightly increased bottom padding */
  background-color: var(--section-bg-4);
}
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px; /* Increased icon spacing */
}
.social-link {
  color: var(--text-secondary);
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.social-link:hover {
  color: var(--primary-color); /* Use primary color on hover */
  transform: scale(1.3); /* More pronounced scale on hover */
}

.social-link:hover {
  color: var(--primary-color); /* Use primary color on hover */
  transform: scale(1.3); /* More pronounced scale on hover */
}

.highlight-prominent {
  background-color: #FFD700; /* Gold for prominent highlight */
  padding: 2px 4px;
  border-radius: 3px;
  font-weight: bold;
}

.social-link svg {
  display: block;
  width: 40px; /* Larger icons */
  height: 40px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .profile h1 {
    font-size: 3rem;
  }
  .profile .tagline {
    font-size: 1.2rem;
  }
  .profile .bio {
    font-size: 1.1rem;
  }
  h2.section-title {
    font-size: 2rem;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  .project-card {
    padding: 30px;
  }
  .project-card h3 {
    font-size: 1.4rem;
  }
  .social-icons {
    gap: 35px;
  }
  .social-link svg {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .profile h1 {
    font-size: 2.5rem;
  }
  .avatar {
    width: 140px;
    height: 140px;
  }
  .profile .bio {
    max-width: 95%;
    font-size: 1rem;
  }
  h2.section-title {
    font-size: 1.8rem;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .project-grid {
    grid-template-columns: 1fr;
  }
  .social-icons {
    gap: 25px;
  }
  .social-link svg {
    width: 30px;
    height: 30px;
  }
}
</style>