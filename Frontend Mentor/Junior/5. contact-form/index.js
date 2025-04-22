document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('main');
    const submitButton = document.querySelector('#submit');
    const successMessage = document.querySelector('#success-message');
    const emailField = document.querySelector('#email');
    const consentCheckbox = document.querySelector('#consent');
    const requiredFields = document.querySelectorAll('input[required], textarea[required]');
    const radioButtons = document.querySelectorAll('input[type="radio"][name="query"]');
    
    const requiredSpans = {
      firstName: document.querySelector('.first .required'),
      lastName: document.querySelector('.last .required'),
      email: {
        required: document.querySelector('.email-field .required'),
        invalid: document.querySelector('.email-field .required-email')
      },
      query: document.querySelector('.required-query'),
      message: document.querySelector('.message-field .required'),
      consent: document.querySelector('.required-consent')
    };
  
    // Verstecke die Erfolgsmeldung und alle Fehlermeldungen zu Beginn
    successMessage.style.display = 'none';
    requiredSpans.email.required.style.display = 'none';
    requiredSpans.email.invalid.style.display = 'none';
    requiredSpans.query.style.display = 'none';
    requiredSpans.message.style.display = 'none';
    requiredSpans.consent.style.display = 'none';
  
    // Funktion zum Überprüfen der Felder
    function validateForm() {
      let isValid = true;
  
      // Überprüfe alle Eingabefelder, ob sie leer sind
      requiredFields.forEach(field => {
        const span = field.parentElement.querySelector('.required');
        const invalidSpan = field.parentElement.querySelector('.required-email');
        const parentDiv = field.parentElement;
        
        // Verstecke die Fehlermeldungen am Anfang
        span.style.display = 'none';
        if (invalidSpan) {
          invalidSpan.style.display = 'none';
        }
        
        // Überprüfe, ob das Feld leer ist
        if (field.value.trim() === '') {
          span.style.display = 'inline';
          parentDiv.classList.add('error'); // Füge die Fehlerklasse hinzu
          isValid = false;
        } else {
          parentDiv.classList.remove('error'); // Entferne die Fehlerklasse
        }
      });
  
      // Überprüfe, ob ein Radio-Button ausgewählt wurde
      const isQuerySelected = Array.from(radioButtons).some(radio => radio.checked);
      if (!isQuerySelected) {
        requiredSpans.query.style.display = 'inline';
        isValid = false;
      } else {
        requiredSpans.query.style.display = 'none';
      }
  
      // Überprüfe, ob das Consent-Checkbox ausgewählt wurde
      if (!consentCheckbox.checked) {
        requiredSpans.consent.style.display = 'inline';
        isValid = false;
      } else {
        requiredSpans.consent.style.display = 'none';
      }
  
      // Überprüfe das E-Mail-Feld
      if (emailField.value.trim() === '') {
        // Zeige nur die "required"-Meldung, wenn das Feld leer ist
        requiredSpans.email.required.style.display = 'inline';
        requiredSpans.email.invalid.style.display = 'none';
        emailField.parentElement.classList.add('error');
        isValid = false;
      } else if (!validateEmail(emailField.value.trim())) {
        // Zeige die "invalid"-Meldung, wenn die E-Mail ungültig ist
        requiredSpans.email.required.style.display = 'none';
        requiredSpans.email.invalid.style.display = 'inline';
        emailField.parentElement.classList.add('error');
        isValid = false;
      } else {
        // Wenn die E-Mail korrekt ist, entferne beide Fehlermeldungen
        requiredSpans.email.required.style.display = 'none';
        requiredSpans.email.invalid.style.display = 'none';
        emailField.parentElement.classList.remove('error');
      }
  
      return isValid;
    }
  
    // E-Mail-Validierung (simple Regular Expression)
    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    }
  
    // Event Listener für den Submit-Button
    submitButton.addEventListener('click', function (event) {
      event.preventDefault(); // Verhindere das Standard-Verhalten des Formulars
  
      // Überprüfe, ob das Formular gültig ist
      if (validateForm()) {
        // Erfolgreiche Validierung
        successMessage.style.display = 'block';
        successMessage.style.position = 'absolute';  // Positioniere die Erfolgsmeldung oben
        successMessage.style.top = '10%';
        successMessage.style.left = '42%';
        successMessage.style.width = 'auto';
  
        form.style.marginTop = '60px'; // Verhindere Überlappung mit der Erfolgsmeldung
  
        // Formular zurücksetzen (alle Felder löschen)
        form.reset();
  
        // Entferne alle Fehlerklassen von den Feldern
        document.querySelectorAll('.error').forEach(function(element) {
          element.classList.remove('error');
        });
  
        // Verstecke alle Fehlermeldungen
        Object.keys(requiredSpans).forEach(function(key) {
          const span = requiredSpans[key];
          if (span instanceof Object) {
            // Für das E-Mail-Feld: setze beide Fehlermeldungen zurück
            span.required.style.display = 'none';
            span.invalid.style.display = 'none';
          } else {
            span.style.display = 'none';
          }
        });
  
        // Nach einer kurzen Verzögerung, das Formular vollständig zurücksetzen
        setTimeout(() => {
          // Nach der Erfolgsmeldung wird das Formular zurückgesetzt
          form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => {
            input.value = ''; // Leert alle Texteingabefelder
          });
          form.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false; // Deaktiviert alle Radio-Buttons
          });
          consentCheckbox.checked = false; // Deaktiviert das Consent-Checkbox
        }, 1000);
      } else {
        // Zeige Fehlermeldungen an
        successMessage.style.display = 'none';
        form.style.marginTop = '0';  // Stelle sicher, dass die Form-Karte nicht nach unten verschoben wird
      }
    });
  });
  