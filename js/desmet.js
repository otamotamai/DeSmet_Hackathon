var menuCounter = 0;
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

}

function removeItem(itemId){
  console.log(itemId);
  $("#"+itemId).remove();
  console.log('test');
}
