function updateClock() {
    const now = new Date();
    let currentHours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${currentHours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
    const dateString = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
      document.getElementById('date').textContent = dateString.replace(/\//g, '/');
  }

  // Initial call
  updateClock();
  // Update every second
  setInterval(updateClock, 1000);