function animateCounter() {
  const counter = document.getElementById('archiveCount');
  const target = 15; 
  let current = 0;
  
  const interval = setInterval(() => {
    if (current >= target) {
      clearInterval(interval);
      return;
    }
    
    current += 1;
    counter.textContent = current;
  }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
  animateCounter();
});
