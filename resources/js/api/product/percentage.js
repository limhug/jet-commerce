$(document).ready(function() {

  const flag = document.querySelectorAll(".flag-off .value-off")
  const newflag = document.querySelectorAll(".flag-off .new-value-off")
  const flagArray = Array.from(flag)
  
  function aplicaPorcentagem(index) {
    const valueText = flagArray[index].innerHTML.replace("-", "").replace(",", ".");
    const numberPercentage = Math.round(valueText);

    newflag[index].insertAdjacentText("afterbegin", numberPercentage)
    
  }

  flagArray.forEach(function(percent, index) {
    aplicaPorcentagem(index);
  });

  // flag.each(function(index) {
  //   const valueText = $(this).text().replace("-", "").replace(",", ".");
  //   const numberPercentage = Math.round(valueText);

  //   flag.text(numberPercentage);
  //   console.log(numberPercentage, index)

  // });


});
