$(document).ready(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      burgerName: $("#burger-name").val().trim(),
    };
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });
  $(".delete-btn").click(function () {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, { type: "DELETE" }).then(() => {
      location.reload();
    });
  });
  $(".eat-btn").click(function () {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, { type: "PUT" }).then(() => {
      location.reload();
    });
  });
});
