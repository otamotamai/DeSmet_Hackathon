var menuCounter = 0;
var cost = 0;
var totalcost = 0;
var individualID = "null";
function changeMenuItems(element){
  $('#main').hide();
  $('#bev').hide();
  if(element){
    $('#'+element).show();
  }
}

function addItem(item){
  menuCounter++;
  individualID = item;
  var itemId = 'item' + menuCounter;

    $('#menu').append('<div id='+itemId+' class="row"><div class="col-md-offset-4">'+item+' <div onClick="removeItem(\''+itemId+'\')">  -- Remove</div></div></div>');

    costs(item);
}

function costs(input){

  if (input == 'Pizza........................$1.50'){
    cost = cost + 1.50;
  }
  if (input == 'Hamburger...............$3.00'){
    cost = cost + 3.00;
  }
  if (input == 'Soft Drink....................$0.50'){
    cost = cost + 0.50;
  }
  if (input == 'Tea.....................$2.00'){
    cost = cost + 2.00;
  }

  totalcost = "$" + cost;
  setCost(cost);
  $('#total').empty();

  $('#total').append('<div class="row"><div class="col-md-offset-7">' +totalcost+ '</div></div>');

}

function removeItem(itemId){
  //console.log(itemId);
  //console.log('test');

  $("#"+itemId).remove();

  if (individualID == 'Pizza........................$1.50'){
    cost = cost - 1.50;
  }
  if (individualID == 'Hamburger...............$3.00'){
    cost = cost - 3.00;
  }
  if (individualID == 'Soft Drink....................$0.50'){
    cost = cost - 0.50;
  }
  if (individualID == 'Tea.....................$2.00'){
    cost = cost - 2.00;
  }


  totalcost = "$" + cost;
  setCost(cost);

  $('#total').empty();

  $('#total').append('<div class="row"><div class="col-md-offset-7">' +totalcost+ '</div></div>');


}

function setBalance(balance){
  localStorage.setItem('balance',balance);
}

function getBalance(){
  return localStorage.getItem('balance');
}

function submitMenu(cost){
  setBalance(getBalance() - cost);
  $('#menu').html("");
   $("#balance").html('<div>'+getBalance()+'<div>');
}

function setCost(C){
  localStorage.setItem('MONEY',C);
}

function getCost(){
  return localStorage.getItem('MONEY');
}

if(!getCost()){
  setCost(0.00);
}

//localStorage.clear();
if(!getBalance()){
  setBalance(200.00)
}

function getNewBalance(){
  return getBalance()-getCost();

}
function muffinButton(){
  return getBalance()+x;
}
