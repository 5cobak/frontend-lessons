$(document).ready(() => {
  const inlinePickersCollection = document.querySelectorAll('.js-datepicker-inline');

  inlinePickersCollection.forEach((item) => {
    $(item).datepicker({
      range: true,
      inline: true,
      clearButton: true,
    });

    const $calendarEl = $(item).datepicker().data('datepicker').$datepicker;
    const $buttonsParent = $calendarEl.find('.datepicker--buttons');
    $buttonsParent.append('<span class="datepicker--button-access">Применить</span>');
  });
});
