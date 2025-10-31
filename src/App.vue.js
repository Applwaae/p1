"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var animejs_1 = require("animejs");
// --- 1. 个人简介数据 ---
var profile = (0, vue_1.ref)({
    name: "Apple Ma", // Example name
    title: [
        { text: "Self-starter", color: "#FF6347" },
        { text: "Growing developer", color: "#4682B4" },
        { text: "STEM Enthusiast", color: "#32CD32" }
    ],
    bio: "Hello! I'm here to make this world a better place."
}); // ✅ ← Added missing closing brace and parenthesis here
var nameLetters = (0, vue_1.computed)(function () {
    return profile.value.name.split('').map(function (letter) {
        return {
            char: letter === ' ' ? '\u00A0' : letter, // Replace space with non-breaking space
            class: 'letter'
        };
    });
});
// --- 2. 个人项目数据 ---
var projects = (0, vue_1.ref)([
    {
        id: 1,
        title: "Smart Schedule Generator",
        description: "Smart schedule generation tool that allows users to customize courses, activities, and preferences to automatically create an optimal schedule.",
        image: "/src/assets/p1-preview.png",
        links: [
            { text: "Visit Website", url: "#" },
            { text: "GitHub", url: "https://timetablev1-4rfgm5xwcsnjftm3jbmtmb.streamlit.app/" }
        ]
    },
    {
        id: 2,
        title: "AI chatting robot",
        description: "An AI-powered chatting robot that can assist you",
        image: "/src/assets/p2-preview.png",
        links: [
            { text: "Visit Website", url: "#" },
            { text: "GitHub", url: "https://aichatbot-9fahrsv79da58puyzmoce6.streamlit.app/" }
        ]
    }
]);
// --- 3. 社交链接数据 (使用 SVG 图标) ---
var socials = (0, vue_1.ref)([
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/Applwaae", // Example GitHub URL
        svgIcon: "M9 19c-4.3 1.4 -4.3-1.8 -5-2.2c.7 0 1.4-.3 2.1-.7c-1.3-.3 -2.3-1.4 -2.3-2.8c0-1.3 .5-2.3 1.3-3.1c-.1-.3 -.6-1.5 .1-3.1c0 0 1-.3 3.3 1.2c1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2c.7 1.6 .2 2.8 .1 3.1c.8 .8 1.3 1.8 1.3 3.1c0 1.4-1 2.5-2.3 2.8c.7 .4 1.3 1.1 1.3 2.2c0 1.6-.0 2.9-.0 3.3c0 .3 .2 .7 .7 .6c3.7-1.2 6.3-4.5 6.3-8.5C22 6.1 17.9 2 12 2S2 6.1 2 12c0 4 2.6 7.3 6.3 8.5c.5 .1 .7-.3 .7-.6c0-.4-.0-1.7-.0-3.3z"
    },
    {
        id: 2,
        name: "Email",
        url: "mailto:applwaae@gmail.com",
        svgIcon: "M22 4H2C.9 4 0 4.9 0 6v12c0 1.1 .9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 6l-8 5l-8-5h16zM2 18V8l10 6.2L22 8v10H2z"
    }
]);
// --- 4. 动画 ---
var avatar = (0, vue_1.ref)(null);
var nameH1 = (0, vue_1.ref)(null);
var taglineElements = (0, vue_1.ref)([]);
var bio = (0, vue_1.ref)(null);
var projectCards = (0, vue_1.ref)([]);
var socialLinks = (0, vue_1.ref)([]);
var isNavOpen = (0, vue_1.ref)(false);
var toggleNav = function () {
    isNavOpen.value = !isNavOpen.value;
};
(0, vue_1.onBeforeMount)(function () {
    projectCards.value = [];
    socialLinks.value = [];
});
(0, vue_1.onMounted)(function () {
    var tl = animejs_1.default.timeline({
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
        opacity: [0, 1],
        duration: 750,
        easing: "easeOutExpo",
        delay: animejs_1.default.stagger(50)
    }, '-=200')
        .add({
        targets: taglineElements.value,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        delay: animejs_1.default.stagger(800)
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
        delay: animejs_1.default.stagger(150)
    }, '-=400')
        .add({
        targets: '.social-link',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 400,
        delay: animejs_1.default.stagger(100)
    }, '-=400');
    // Mouse Trace Effect
    var canvas = document.getElementById('mouse-trace-canvas');
    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleLife = 40;
    var particleColor = '255, 120, 0';
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    var Particle = /** @class */ (function () {
        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.size = 4;
            this.life = particleLife;
            this.opacity = 1;
            this.velocity = {
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5
            };
        }
        Particle.prototype.draw = function () {
            ctx.fillStyle = "rgba(".concat(particleColor, ", ").concat(this.opacity, ")");
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        };
        Particle.prototype.update = function () {
            this.life--;
            this.opacity = this.life / particleLife;
            this.size *= 0.95;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };
        return Particle;
    }());
    window.addEventListener('mousemove', function (e) {
        particles.push(new Particle(e.clientX, e.clientY));
    });
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
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
});
function handleMouseMove(event) {
    var card = event.currentTarget;
    var clientX = event.clientX, clientY = event.clientY;
    var _a = card.getBoundingClientRect(), top = _a.top, left = _a.left, width = _a.width, height = _a.height;
    var xRotation = 20 * ((clientY - top - height / 2) / height);
    var yRotation = -20 * ((clientX - left - width / 2) / width);
    card.style.transform = "perspective(1000px) rotateX(".concat(xRotation, "deg) rotateY(").concat(yRotation, "deg) scale3d(1.05, 1.05, 1.05)");
}
function handleMouseLeave(event) {
    var card = event.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
