document.addEventListener("onload", function() {
document.getElementById('contactCard').addEventListener('click', function() {
  const pinPopup = document.getElementById('pinPopup');
  pinPopup.style.display = 'block';
});

document.getElementById('submitPin').addEventListener('click', function() {
  const pin = Array.from(document.querySelectorAll('.pin-digit')).map(input => input.value).join('');
  fetch('https://your-project.vercel.app/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pin })
  })
  .then(response => response.json())
  .then(data => {
    if (data.valid) {
      window.location.href = data.url; // Redirect to the download link
    } else {
      alert('Incorrect PIN. Please try again.');
    }
  });
});
});