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
  var itemId = 'menuItem'+menuCounter

    $('#menu').append('<div id='+itemId+' class="row"><div class="col-md-offset-7">'+item+' <div onClick="removeItem(\''+itemId+'\')">   -- Remove</div></div></div>');

    costs(menuCounter);
}

function costs(input){
  if (input == 1){
    cost = cost + 1.50;
  }
  if (input == 2){
    cost = cost + 1.00;
  }

  $('#menu').append('<div class="row"><div class="col-md-offset-7">' +cost+ '</div></div>');

}

function removeItem(itemId){
  console.log(itemId);
  $("#"+itemId).remove();
  console.log('test');
}
