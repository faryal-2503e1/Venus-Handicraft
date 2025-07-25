document.addEventListener('DOMContentLoaded', function () {
    // TOAST (heart icon)
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger && toastLiveExample) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', function () {
            toastBootstrap.show();
        });
    }

    // POPOVER (shopping cart)
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

  $(document).ready(function () {
    $('form').on('submit', function (e) {
      e.preventDefault(); // Prevent default submit behavior
      alert('Your Information has been submitted');
      this.reset(); // Clear the form fields
    });
  });