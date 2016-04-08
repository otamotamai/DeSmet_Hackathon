var menuCounter = 0;
var cost = 0;
function changeMenuItems(element){
  $('#main').hide();
  $('#bev').hide();
  if(element){
    $('#'+element).show();
  }
}

function addItem(item){
  menuCounter++;
  Food = item;
  var itemId = 'item'+menuCounter



    $('#menu').append('<div id='+itemId+' class="row"><div class="col-md-offset-7">'+item+' <div onClick="removeItem(\''+itemId+'\')">   -- Remove</div></div></div>');

    costs(Food);
}

function costs(input){
  if (input == 'Pizza........................$1.50'){
    cost = cost + 1.50;
  }
  if (input == 'Hamburger...............$3.00'){
    cost = cost + 3.00;
  }
  if (input == 'Coke....................$0.50'){
    cost = cost + 0.50;
  }
  if (input == 'Tea.....................$2.00'){
    cost = cost + 2.00;
  }

  //$('#total').remove(+cost+);

  $('#total').append('<div class="row"><div class="col-md-offset-7">' +cost+ '</div></div>');

}

function removeItem(itemId){
  console.log(itemId);
  $("#"+itemId).remove();
  console.log('test');
}
