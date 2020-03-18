$(document).ready(function() {
  // set empty state
  $(".insert-btn").on("click", function(e) {
    $("#delete-val-id-pass").val("");
    $("#edit-val-ref-id").val("");
    $("#name-input").val("");
    $("#email-input").val("");
    $("#contact-number").val("");
  });

  // on adding new contacts
  $("#add-contacts-form").on("submit", function(e) {
    $("#edit-val-id-pass").val() ? "" : e.preventDefault();
    $(".insert-btn").blur();
    if (
      $("#name-input").val() === "" ||
      $("#email-input").val() === "" ||
      $("#contact-number").val() === ""
    ) {
      Swal.fire({
        title: "Invalid Inputs",
        text: "Missing information",
        confirmButtonText: "OK"
      });
    } else {
      $.ajax({
        url: $("#edit-val-id-pass").val()
          ? "Controllers/Update/update.controller.php"
          : "Controllers/Insert/insert.controller.php",
        method: "POST",
        data: new FormData(this),
        contentType: false,
        processData: false,
        success: function(data) {
          if (data) {
            Swal.fire({
              title: "Success",
              text: "New contact is added",
              confirmButtonText: "OK"
            });

            $("#update-modal").modal("toggle");

            $("#edit-val-id-pass").val()
              ? ""
              : $(".table-data-row").append(data);

            reset();
          }
        }
      });
    }
  });

  // On editing values of a row
  $("tbody").on("click", ".edit-btn", function(e) {
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

  //Deleting a row
  $("tbody").on("click", ".delete-btn", function(e) {
    $("#delete-val-id-pass").val($(this).data("id"));

    console.log($(this).html());

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
            reset();
          }
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  });

  const reset = () => {
    console.log("resetting data");
    // reset data
    $("#edit-val-ref-id").val("");
    $("#name-input").val("");
    $("#email-input").val("");
    $("#contact-number").val("");
  };
});
