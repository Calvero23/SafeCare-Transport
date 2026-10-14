document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.js-contact-form');

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const status = form.querySelector('.form-status');
      const originalText = btn ? btn.textContent : 'Submit Request';
      const recipient = form.dataset.recipient || 'safecare70@gmail.com';
      const subject = form.dataset.subject || 'SafeCare medical ride request';
      const formData = new FormData(form);
      const body = Array.from(formData.entries())
        .filter(([, value]) => String(value).trim() !== '')
        .map(([key, value]) => {
          const label = key
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (letter) => letter.toUpperCase());

          return `${label}: ${value}`;
        })
        .join('\n');

      if (btn) {
        form.dataset.submitLabel = btn.textContent;
        btn.textContent = 'Opening Email';
      }

      if (status) {
        status.textContent = 'Your email app should open with the ride details filled in. Please send the email to submit the request.';
      }

      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.setTimeout(() => {
        if (btn) btn.textContent = originalText;
      }, 3000);
    });
  });
});
