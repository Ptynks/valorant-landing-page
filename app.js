const parallaxImage = document.querySelector("#parallax-image");
var agent = 0
const agents = [
    "images/agents/chamber_portrait.webp",
    "images/agents/jett_portrait.webp",
    "images/agents/killjoy_portrait.webp",
    "images/agents/neon_portrait.webp",
    "images/agents/omen_portrait.webp",
    "images/agents/phoenix_portrait.webp",
    "images/agents/sage_portrait.webp",
    "images/agents/viper_portrait.webp",
    "images/agents/yoru_portrait.webp",
]

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    console.log((value - 3500) );
    parallaxImage.style.marginTop = (value - 2900) * 0.3 + "px";
})

parallaxImage.addEventListener("click", () => {
    if (agent < agents.length-1) {
        agent++
    } else {
        agent = 0
    }
    console.log(agent, agents.length)
    parallaxImage.src = agents[agent]
})