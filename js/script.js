$(function(){

  $(".triangleInfo").submit(function() {
    event.preventDefault();
    var side1Input = parseInt($("input#side1").val());
    var side2Input = parseInt($("input#side2").val());
    var side3Input = parseInt($("input#side3").val());


    if (side1Input === side2Input && side1Input === side3Input){
      alert ('equilateral');
    } else if (side1Input === side2Input || side1Input === side3Input || side2Input === side3Input){
      alert ('Isosceles');
    } else if (side1Input != side2Input && side2Input !=side3Input){
      alert ('Scalene');
    } else if (side1Input + side2Input < side3Input || side2Input + side3Input < side1Input || side1Input + side3Input < side2Input){
      alert ('No');
    } else {
      alert ("crazy")
    }

    // $("#math").empty().append(triangle);
    // $(".answer").show();


  });
});
