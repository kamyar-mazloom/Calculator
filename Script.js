var size = 16;
var gridSize = 20;

$(document).ready(function() {
  makeGrid();
  $(".button").click(function() {
    $('div').removeClass("active");
    size = prompt("Choose the size of your new square. Max 100");
    if (size > 100) {size = 100};
    gridSize = 320/size;
    makeNew();
  });
});

function makeGrid() {
  for (i=1;i<=size*size;i++) {
    $(".container").append("<div class='grid'></div>");
  };
  $(".container").width(size*gridSize + "px");
  $(".grid").width(gridSize + "px");
  $(".grid").height(gridSize + "px");
};

function makeNew() {
  $(".container").empty();
  makeGrid();
};

$(document).on("mouseenter", ".grid", function() {
  $(this).addClass("active");
});