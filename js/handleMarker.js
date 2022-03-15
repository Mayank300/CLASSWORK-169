AFRAME.registerComponent("handleMarker", {
  init: async function () {
    this.el.addEventListener("markerFound", () => {
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function () {
    var div = document.getElementById("button-div");
    div.style.display = "flex";
    var orderButton = document.getElementById("order-button");
    orderButton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpeg",
        title: "on the way :)",
        text: "get $5 off for 2 fries",
        timer: 1000,
        buttons: false,
      });
    });

    var orderSummaryButton = document.getElementById("order-summary-button");
    orderSummaryButton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "PIZZAAAA",
        text: "cost: $20, mere liye ?",
      });
    });
  },

  handleMarkerLost: function () {
    console.log("marker not found");
    var div = document.getElementById("button-div");
    div.style.display = "none";
  },
});
