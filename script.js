body {
    font-family: Arial, sans-serif;
    background-color: #f8ecec;
    text-align: center;
    color: #333;
}

header {
    background-color: #ffe0e0;
    padding: 20px;
}

button {
    background-color: #ff6666;
    border: none;
    color: white;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #ff4d4d;
}

.topics {
    margin: 20px;
}

footer {
    background-color: #ffe0e0;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}

function createRipple(event) {
    const animationCanvas = document.getElementById("animationCanvas");
    const ctx = animationCanvas.getContext("2d");
    
    const x = event.clientX - animationCanvas.offsetLeft;
    const y = event.clientY - animationCanvas.offsetTop;
    
    ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
    
    ctx.beginPath();
    ctx.arc(x, y, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 102, 102, 0.5)";
    ctx.fill();
    
    let radius = 0;
    const maxRadius = Math.max(animationCanvas.width, animationCanvas.height);
    
    function animateRipple() {
        ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 102, 102, 0.5)";
        ctx.fill();
        
        radius += 2;
        
        if (radius < maxRadius) {
            requestAnimationFrame(animateRipple);
        }
    }
    
    animateRipple();
}

const animationCanvas = document.getElementById("animationCanvas");
animationCanvas.addEventListener("click", createRipple);