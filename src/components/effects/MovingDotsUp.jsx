import { useRef, useEffect } from "react"

export default function MovingDotsUp() {
const canvasRef = useRef(null);
const dots = useRef([])

const colorsArr = ['#fff', '#00c9af', '#c68300'];
const randomIdx = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  };

useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Function to generate random number within a range
    const randomRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    // Function to create a dot
    const createDot = () => {
      return {
        x: randomRange(0, canvas.width),
        y: randomRange(0, canvas.height),
        radius: randomRange(1, 3),
        speedY: -2,
        // speedY: randomRange(-2, 2),
        color: randomIdx(colorsArr)
      };
    };

    // Function to update dot positions
    const update = () => {
      for (let dot of dots.current) {
        
        dot.y += dot.speedY;

        // MOVE BACK INTO POSITION WHEN IT HITS THE TOP //
        if (dot.y < 0 || dot.y > canvas.height) {
            dot.speedY = -2;
            dot.x = randomRange(0, canvas.width);
            dot.y = randomRange(0, canvas.height);
        }
      }
    };

    // Function to draw the dots
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let dot of dots.current) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
        ctx.closePath();
      }
    };

    // Animation loop
    const animate = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Create dots and start animation
    for (let i = 0; i < 15; i++) {
      dots.current.push(createDot());
    }
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return <canvas ariahidden="true" className="contact-canvas" ref={canvasRef} />;
}