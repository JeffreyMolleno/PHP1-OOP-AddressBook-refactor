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
  $("#submit-btn").on("click", function(e) {
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
        data: new FormData(document.getElementById("add-contacts-form")),
        contentType: false,
        processData: false,
        success: function(data) {
          console.log(data);

          Swal.fire({
            title: "Success",
            text: "New contact is added",
            confirmButtonText: "OK"
          });

          $("#update-modal").modal("toggle");

          console.log($("#edit-val-id-pass").val());

          $("#edit-val-id-pass").val()
            ? update_table()
            : $(".table-data-row").append(data);

          $("#edit-val-id-pass").val("");
          reset();
        }
      });
    }

    e.preventDefault();
  });

  let edit_ref;
  // On editing values of a row
  $("tbody").on("click", ".edit-btn", function(e) {
    console.log("here 123");
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

    edit_ref = $(this);
  });

  const update_table = () => {
    edit_ref
      .parent()
      .parent()
      .find("#name")
      .html($("#name-input").val());

    edit_ref
      .parent()
      .parent()
      .find("#email")
      .html($("#email-input").val());

    edit_ref
      .parent()
      .parent()
      .find("#phone")
      .html($("#contact-number").val());
  };

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
    $("#name-input").val("");
    $("#email-input").val("");
    $("#contact-number").val("");
  };
});
