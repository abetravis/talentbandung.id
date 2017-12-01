var filter = $('#filter');
filter.keyup(wisatafilter);

function wisatafilter(){
  var wisatadiv = $('.wisata');

  for (var i = 0; i < wisatadiv.length; i++) {
    var item = $(wisatadiv[i]).text().toLowerCase();
    if (item.indexOf(filter.val().toLowerCase()) > -1) {
      $(wisatadiv[i]).slideDown();
    }else {
      $(wisatadiv[i]).slideUp();
    }
  }
}

} );

$(document).ready(function () {

    filter.on('keyup', function () {
        var grid = $(".grid-item");
        var search = this.value.toLowerCase();

        grid.each(function () {
            var namaGrid = $(this).find('.wisata-detail').text().toLowerCase();


            if (namaGrid.indexOf(search) != -1) {
                $(this).show(300);
            } else {
                $(this).hide(300);
            }
        })
    });

});