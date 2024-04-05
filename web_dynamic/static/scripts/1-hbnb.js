$(document).ready(function () {
    let amenityIds = [];

    $('input[type="checkbox"]').change(function () {
      const amenityId = $(this).data('id');
  
      if ($(this).prop('checked')) {
        amenityIds.push(amenityId);
      } else {
        amenityIds = amenityIds.filter(id => id !== amenityId);
      }
      // Update the h4 tag inside the div Amenities with the list of Amenities checked
      updateAmenitiesDisplay();
    });
  
    // Function to update the h4 tag with the list of Amenities checked
    function updateAmenitiesDisplay () {
      const amenitiesText = amenityIds.length > 0 ? amenityIds.join(', ') : '&nbsp;';
      $('.popover h4').html(amenitiesText);
    }
  });