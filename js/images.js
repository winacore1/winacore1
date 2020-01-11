$(function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var images = $(".myImg");
    var modalImg = document.getElementById("img01");

    images.filter((index, img) => {
        img.onclick = function () {
            $("#header").hide();
            modal.style.display = "block";
            modalImg.src = $(this).attr("actual");
        }
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            $("#header").show();
            modal.style.display = "none";
        }
    })

});