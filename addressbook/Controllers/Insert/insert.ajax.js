$(document).ready(function() {
  $("#add-contacts-form").on("submit", function(e) {
    $.ajax({
      url: $("#edit-val-id-pass").val()
        ? "Controllers/Update/update.controller.php"
        : "Controllers/Insert/insert.controller.php",
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
          $("#edit-val-ref-id").val("");
          $("#email-input").val("");
          $("#email-input").val("");
          $("#email-input").val("");
        }
      }
    });
  });

  $(".edit-btn").on("click", function(e) {
    $("#delete-val-id-pass").val("");
    $("#edit-val-id-pass").val($(this).data("id"));
    // form reference
    $("#email-input").val(
      $(this)
        .parent()
        .parent()
        .find("#email")
        .html()
    );
    $("#contact-number").val(
      $(this)
        .parent()
        .parent()
        .find("#phone")
        .html()
    );
    $("#name-input").val(
      $(this)
        .parent()
        .parent()
        .find("#name")
        .html()
    );
  });

  $(".delete-btn").on("click", function(e) {
    $("#delete-val-id-pass").val($(this).data("id"));

    Swal.fire({
      title: "Contact will be Deleted",
      text: "Are you sure?",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      preConfirm: () => {
        $(this)
          .closest("tr")
          .remove();

        $.ajax({
          url: "Controllers/Delete/delete.controller.php",
          method: "POST",
          data: { idref: $("#delete-val-id-pass").val() },
          success: function(data) {
            console.log(data);
            $("#delete-val-id-pass").val("");
          }
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  });
});
