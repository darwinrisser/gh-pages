var data = {
  totalRevs:360,
  totalCurrent:0,
  totalRPS:0
};

setInterval(coinTurn,1000);

function coinTurn() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#bitcoin-png").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

// checks to see if the nunber of bitcoins has changed after each time a button is selected
function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}

// when you click the bitcoin button, you receive 1 bitcoin. the bitcoin also starts to turn faster
$("#bitcoin-png").click(function (){
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
})

// when you click one of these buttons, bitcoins are subtracted from your total but your passive bitcoin generation is increased
$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
})
// the updateReport function is called every time you click a button
