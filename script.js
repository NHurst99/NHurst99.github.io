document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('contactCard').addEventListener('click', function() {
    fetch('https://pin-auth.vercel.app/api/auth') // Replace with your actual URL
      .then(response => {
        if (response.ok) {
          return response.blob();
        } else if (response.status === 403) {
          // If a 403 Forbidden response is received, show the PIN popup
          throw new Error('PIN required');
        } else {
          throw new Error('An error occurred');
        }
      })
      .then(blob => {
        downloadContactCard(blob); // Call the new download function
      })
      .catch(error => {
        if (error.message === 'PIN required') {
          // Only show the PIN popup if the PIN is required
          togglePinPopup(true);
        } else {
          // For other errors, you might want to display a different message
          alert('An error occurred while downloading the contact card.');
        }
      });
  });
  document.querySelector('.popup-close').addEventListener('click', function() {
    togglePinPopup(false);
  });


document.getElementById('submitPin').addEventListener('click', function() {
  const submitButton = document.getElementById('submitPin');
  submitButton.disabled = true;
  submitButton.querySelector('.button-text').style.display = 'none';
  submitButton.querySelector('.fa-spinner').style.display = 'inline-block';


  const pin = Array.from(document.querySelectorAll('.pin-digit')).map(input => input.value).join('');
  fetch('https://pin-auth.vercel.app/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pin })
  })
  .then(response => response.blob()) // Convert the data to a blob
      .then(blob => {
        downloadContactCard(blob);
        togglePinPopup(false);
      })
      .catch(() => alert('Oh no!, something went wrong while downloading the file.'))
      .finally(() => {
        submitButton.disabled = false;
        submitButton.querySelector('.button-text').style.display = 'inline-block';
        submitButton.querySelector('.fa-spinner').style.display = 'none';
      })
});
});

document.addEventListener('DOMContentLoaded', (event) => {
  const inputs = document.querySelectorAll('.pin-digit');
  inputs.forEach((input, index) => {
      input.addEventListener('keyup', (e) => {
          if (e.key >= 0 && e.key <= 9) { // If a number is entered
              if (index < inputs.length - 1) {
                  // Move to next input
                  inputs[index + 1].focus();
              }
          } else if (e.key === 'Backspace') {
              if (index > 0) {
                  // Move to previous input
                  inputs[index - 1].focus();
              }
          }
          // If all inputs have a value, consider triggering the submit action
          const allFilled = Array.from(inputs).every(input => input.value);
          if (allFilled) {
              document.getElementById('submitPin').click();
          }
      });
  });
});

const isValidUrl = urlString=> {
              
  var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
  return !!urlPattern.test(urlString);
}

function togglePinPopup(show) {
  const pinPopup = document.getElementById('pinPopup');
  if (show) {
      pinPopup.style.display = 'flex'; // Use 'flex' to match the .overlay display style
      pinPopup.style.opacity = '1';
      pinPopup.style.visibility = 'visible';
  } else {
      pinPopup.style.display = 'none';
      pinPopup.style.opacity = '0';
      pinPopup.style.visibility = 'hidden';
  }
}

function downloadContactCard(blob) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'contact-card.vcf'; // Replace with your desired filename
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}