$(document).ready(function() {
  $("#add-contacts-form").on("submit", function(e) {
    e.preventDefault();

    if ($("#edit.id").val()) {

        $.ajax({
            url: "Controllers/Insert/insert.controller.php",
            method: "POST",
            data: new FormData(this),
            contentType: false,
            processData: false,
            success: function(data) {
              console.log(data);
    
              if (
                $("#email-input").val() === "" ||
                $("#email-input").val() === "" ||
                $("#email-input").val() === ""
              ) {
                Swal.fire({
                  title: "Invalid Inputs",
                  text: "Missing information",
                  confirmButtonText: "OK"
                });
              } else if (data) {
                Swal.fire({
                  title: "Success",
                  text: "New contact is added",
                  confirmButtonText: "OK"
                });
              }
            }
          });  

    } else {
      $.ajax({
        url: "Controllers/Insert/insert.controller.php",
        method: "POST",
        data: new FormData(this),
        contentType: false,
        processData: false,
        success: function(data) {
          console.log(data);

          if (
            $("#email-input").val() === "" ||
            $("#email-input").val() === "" ||
            $("#email-input").val() === ""
          ) {
            Swal.fire({
              title: "Invalid Inputs",
              text: "Missing information",
              confirmButtonText: "OK"
            });
          } else if (data) {
            Swal.fire({
              title: "Success",
              text: "New contact is added",
              confirmButtonText: "OK"
            });
          }
        }
      });
    }
  });
});
