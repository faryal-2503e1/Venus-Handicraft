$('.subImg').click(
    function () {
        let newImg = $(this).attr('src')
        $('#mainImg').attr('src', newImg)
    })

$('.increase').click(function () {
    let qty = parseInt($('.num').text());
    qty++;
    $('.num').text(qty);
});

$('.decrese').click(function () {
    let qty = parseInt($('.num').text());
    if (qty > 1) {
        qty--;
        $('.num').text(qty);
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast');

  if (toastTrigger && toastLiveExample) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show();
    });
  }
});

  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

   AOS.init();