var Enemy = function (name){
  this.name = name;
  this.health = 100;
  switch (this.type) {
    case 1:
      attack_pt = 10;
      special_pt = 20;
    break;
    case 2:
      attack_pt = 15;
      special_pt = 25;
    break;
    case 3:
        attack_pt = 5;
        special_pt = 30;
    break;
  };
  this.attack= function (attackee){
      return attackee.health = attackee.health - _.random(2,7);
  };
  this.special= function (attackee){
    return attackee.health = attackee.health - _.random(10, 50);
  };
};

var Good = function (options){
  var special_pt, attack_pt, attackee;
  var options= options || {};
  this.name = options.name;
  this.type = options.type;
  this.health = 100;
  switch (this.type) {
    case 1:
      attack_pt = 10;
      special_pt = 20;
    break;
    case 2:
      attack_pt = 15;
      special_pt = 25;
    break;
    case 3:
        attack_pt = 8;
        special_pt = 30;
    break;
  };
  this.attack= function (attackee){
    return attackee.health = attackee.health - _.random(2,8);
  };
  this.special= function (attackee){
    return attackee.health = attackee.health - _.random(10, 50);
  };
};


var player,
 monster;
$('.welcome2 h2').addClass('animated bounceInDown');

$('.welcome2 h3').addClass('animated zoomIn');
$('.welcome2 li').addClass('animated zoomIn');



$('.welcome2 button').on('click', function (event){

  event.preventDefault();


    player = new Good({
    name: $(this).text(),
    type: parseInt($(this).attr('name'))

    });

   monster = new Enemy("Bill O'Reilly");

    $('.welcome2').fadeOut(800,function (){

    $('.ggName').prepend(player.name).find('.ggHealth').text(player.health);
    $('.bbName').prepend(monster.name).find('.bbHealth').text(player.health);
    $('.fight').fadeIn();

  });

});



$('#fight2').on('click', function(event){
  event.preventDefault();

$('#fight2').toggleClass('animated wobble');

player.attack(monster)
if (monster.health >0){
 $('.bbHealth').text(monster.health);
 $("#health-bar2").css({'width' : monster.health +"%"});

 if (monster.health < 30) {$("#health-bar2").css({'background-color' : "red"})}
else if  (monster.health > 29 & monster.health < 75)    {$("#health-bar2").css({'background-color' : "rgb(237,255,88)"})}
else if (monster.health > 74)
  {$("#health-bar2").css({'background-color' : "hsla(85, 100%, 50%, 1)"})}
 }

else{
    $('.bbHealth').text('0');
    $('.bbName').css('text-decoration', 'line-through').css('color', 'black');
    $('#fight2').hide();
    $("#health-bar2").css({'width' : "0px"});
    $('#game-over').fadeIn();
   $('.game-over-message').prepend("YOU WIN! " + "..thanks for playing!");
  $('.beyonce').fadeIn();

  }

 monster.attack(player)
 if (player.health >0){
  $('.ggHealth').text(player.health);

  $("#health-bar").css({'width' : player.health +"%"});
  if (player.health < 30) {$("#health-bar").css({'background-color' : "red"})}
 else if  (player.health > 29 & player.health < 75)    {$("#health-bar").css({'background-color' : "rgb(237,255,88)"})}
 else if (player.health > 74)
   {$("#health-bar").css({'background-color' : "hsla(85, 100%, 50%, 1)"})}
  }
 else{
     $('.ggHealth').text('0');
     $('.ggName').css('text-decoration', 'line-through').css('color', 'black');
     $('#fight2').hide();
     $("#health-bar").css({'width' : "0px"});
      $('#game-over').fadeIn();
      $('.game-over-message').fadeIn();
     $('.game-over-message').prepend("GAME OVER, " + player.name + "  ...better luck next time.");


   }

});
