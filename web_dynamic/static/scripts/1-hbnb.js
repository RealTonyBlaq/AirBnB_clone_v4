$(document).ready(function () {
    let amenityIds = [];

    $('input[type="checkbox"]').change(function () {
      const amenityId = $(this).data('id');
  
      if ($(this).prop('checked')) {
        amenityIds.push(amenityId);
      } else {
        amenityIds = amenityIds.filter(id => id !== amenityId);
      }
      updateDisplay();
    });

    function updateDisplay () {
      const amenitiesText = amenityIds.length > 0 ? amenityIds.join(', ') : '&nbsp;';
      $('.popover h4').html(amenitiesText);
    }
});
