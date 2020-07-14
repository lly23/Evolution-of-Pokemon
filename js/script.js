console.log('scripts loaded');

$(document).ready(function (){
  console.log('DOM loaded');

  var character = $('#character');
  var red = $('#characterred');
  var gold = $('#charactergold');
  var ruby = $('#characterruby');
  var dia = $('#characterdia');
  var bw = $('#characterbw');
  var xy = $('#characterxy');
  var sun = $('#charactersun');

  var pressed = false;
  var characterzero = true;
  var characterone = false;
  var charactertwo = false;
  var characterthree = false;
  var characterfour = false;
  var characterfive = false;
  var charactersix = false;
  var characterseven = false;

  var checkpoints = 0;

  // arrow mouseover
  $('#startarea').mouseover(function() {
    $('#start').css('display', 'block');
  }).mouseout(function() {
    $('#start').css('display', 'none');
  });

  $('#sourcesarea').mouseover(function() {
    $('#sources').css('display', 'block');
  }).mouseout(function() {
    $('#sources').css('display', 'none');
  });

  // clicking start or sources
  $('#startarea').click(function() {
    character.css('left', 'auto');
    $('#intro').css('filter', 'opacity(100)');

    characterzero = true;
    characterone = false;
    charactertwo = false;
    characterthree = false;
    characterfour = false;
    characterfive = false;
    charactersix = false;
    characterseven = false;

    checkpoints = 0;

    if($(window).width() < 650) {
      $('#the-creation-modal').css('display', 'block');
      $('#red-green-modal').css('display', 'block');
      $('#blue-modal').css('display', 'block');
      $('#yellow-modal').css('display', 'block');
      $('#gold-silver-modal').css('display', 'block');
      $('#crystal-modal').css('display', 'block');
      $('#ruby-sapphire-modal').css('display', 'block');
      $('#fire-leaf-modal').css('display', 'block');
      $('#emerald-modal').css('display', 'block');
      $('#dpp-modal').css('display', 'block');
      $('#heart-soul-modal').css('display', 'block');
      $('#black-white-modal').css('display', 'block');
      $('#blackt-whitet-modal').css('display', 'block');
      $('#x-y-modal').css('display', 'block');
      $('#oruby-asapphire-modal').css('display', 'block');
      $('#sun-moon-modal').css('display', 'block');
      $('#usun-umoon-modal').css('display', 'block');
    } else {
      $('#the-creation-modal').css('display', 'none');
      $('#red-green-modal').css('display', 'none');
      $('#blue-modal').css('display', 'none');
      $('#yellow-modal').css('display', 'none');
      $('#gold-silver-modal').css('display', 'none');
      $('#crystal-modal').css('display', 'none');
      $('#ruby-sapphire-modal').css('display', 'none');
      $('#fire-leaf-modal').css('display', 'none');
      $('#emerald-modal').css('display', 'none');
      $('#dpp-modal').css('display', 'none');
      $('#heart-soul-modal').css('display', 'none');
      $('#black-white-modal').css('display', 'none');
      $('#blackt-whitet-modal').css('display', 'none');
      $('#x-y-modal').css('display', 'none');
      $('#oruby-asapphire-modal').css('display', 'none');
      $('#sun-moon-modal').css('display', 'none');
      $('#usun-umoon-modal').css('display', 'none');
    }

    $('#levelzeroscreen').css('display', 'block');
    $('#levelonescreen').css('display', 'block');
    $('#leveltwoscreen').css('display', 'block');
    $('#levelthreescreen').css('display', 'block');
    $('#levelfourscreen').css('display', 'block');
    $('#levelfivescreen').css('display', 'block');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');

    $('html, body').animate({
        scrollTop: $("#levelzeroscreen").offset().top
    }, 1000);
  });

  // other functions
  $('#back').click(function() {
    character.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#back1').click(function() {
    red.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#back2').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#back3').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#back4').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#back5').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#back6').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#back7').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('#backend').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    $('html, body').animate({
        scrollTop: $("#main-div").offset().top
    }, 1000);
  });

  $('.zero').click(function() {
    character.css('left', 'auto');
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    characterzero = true;
    characterone = false;
    charactertwo = false;
    characterthree = false;
    characterfour = false;
    characterfive = false;
    charactersix = false;
    characterseven = false;

    $('#the-creation-modal').css('display', 'none');
    $('#red-green-modal').css('display', 'none');
    $('#blue-modal').css('display', 'none');
    $('#yellow-modal').css('display', 'none');
    $('#gold-silver-modal').css('display', 'none');
    $('#crystal-modal').css('display', 'none');
    $('#ruby-sapphire-modal').css('display', 'none');
    $('#fire-leaf-modal').css('display', 'none');
    $('#emerald-modal').css('display', 'none');
    $('#dpp-modal').css('display', 'none');
    $('#heart-soul-modal').css('display', 'none');
    $('#black-white-modal').css('display', 'none');
    $('#blackt-whitet-modal').css('display', 'none');
    $('#x-y-modal').css('display', 'none');
    $('#oruby-asapphire-modal').css('display', 'none');
    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'block');
    $('#levelonescreen').css('display', 'block');
    $('#leveltwoscreen').css('display', 'block');
    $('#levelthreescreen').css('display', 'block');
    $('#levelfourscreen').css('display', 'block');
    $('#levelfivescreen').css('display', 'block');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  $('.one').click(function() {
    red.css('left', 'auto');
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    characterzero = false;
    characterone = true;
    charactertwo = false;
    characterthree = false;
    characterfour = false;
    characterfive = false;
    charactersix = false;
    characterseven = false;

    $('#red-green-modal').css('display', 'none');
    $('#blue-modal').css('display', 'none');
    $('#yellow-modal').css('display', 'none');
    $('#gold-silver-modal').css('display', 'none');
    $('#crystal-modal').css('display', 'none');
    $('#ruby-sapphire-modal').css('display', 'none');
    $('#fire-leaf-modal').css('display', 'none');
    $('#emerald-modal').css('display', 'none');
    $('#dpp-modal').css('display', 'none');
    $('#heart-soul-modal').css('display', 'none');
    $('#black-white-modal').css('display', 'none');
    $('#blackt-whitet-modal').css('display', 'none');
    $('#x-y-modal').css('display', 'none');
    $('#oruby-asapphire-modal').css('display', 'none');
    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'none');
    $('#levelonescreen').css('display', 'block');
    $('#leveltwoscreen').css('display', 'block');
    $('#levelthreescreen').css('display', 'block');
    $('#levelfourscreen').css('display', 'block');
    $('#levelfivescreen').css('display', 'block');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  $('.two').click(function(){
    gold.css('left', 'auto');
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    characterzero = false;
    characterone = false;
    charactertwo = true;
    characterthree = false;
    characterfour = false;
    characterfive = false;
    charactersix = false;
    characterseven = false;

    $('#gold-silver-modal').css('display', 'none');
    $('#crystal-modal').css('display', 'none');
    $('#ruby-sapphire-modal').css('display', 'none');
    $('#fire-leaf-modal').css('display', 'none');
    $('#emerald-modal').css('display', 'none');
    $('#dpp-modal').css('display', 'none');
    $('#heart-soul-modal').css('display', 'none');
    $('#black-white-modal').css('display', 'none');
    $('#blackt-whitet-modal').css('display', 'none');
    $('#x-y-modal').css('display', 'none');
    $('#oruby-asapphire-modal').css('display', 'none');
    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'none');
    $('#levelonescreen').css('display', 'none');
    $('#leveltwoscreen').css('display', 'block');
    $('#levelthreescreen').css('display', 'block');
    $('#levelfourscreen').css('display', 'block');
    $('#levelfivescreen').css('display', 'block');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  $('.three').click(function() {
    ruby.css('left', 'auto');
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    characterzero = false;
    characterone = false;
    charactertwo = false;
    characterthree = true;
    characterfour = false;
    characterfive = false;
    charactersix = false;
    characterseven = false;

    $('#ruby-sapphire-modal').css('display', 'none');
    $('#fire-leaf-modal').css('display', 'none');
    $('#emerald-modal').css('display', 'none');
    $('#dpp-modal').css('display', 'none');
    $('#heart-soul-modal').css('display', 'none');
    $('#black-white-modal').css('display', 'none');
    $('#blackt-whitet-modal').css('display', 'none');
    $('#x-y-modal').css('display', 'none');
    $('#oruby-asapphire-modal').css('display', 'none');
    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'none');
    $('#levelonescreen').css('display', 'none');
    $('#leveltwoscreen').css('display', 'none');
    $('#levelthreescreen').css('display', 'block');
    $('#levelfourscreen').css('display', 'block');
    $('#levelfivescreen').css('display', 'block');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  $('.four').click(function() {
    dia.css('left', 'auto');
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    characterzero = false;
    characterone = false;
    charactertwo = false;
    characterthree = false;
    characterfour = true;
    characterfive = false;
    charactersix = false;
    characterseven = false;

    $('#dpp-modal').css('display', 'none');
    $('#heart-soul-modal').css('display', 'none');
    $('#black-white-modal').css('display', 'none');
    $('#blackt-whitet-modal').css('display', 'none');
    $('#x-y-modal').css('display', 'none');
    $('#oruby-asapphire-modal').css('display', 'none');
    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'none');
    $('#levelonescreen').css('display', 'none');
    $('#leveltwoscreen').css('display', 'none');
    $('#levelthreescreen').css('display', 'none');
    $('#levelfourscreen').css('display', 'block');
    $('#levelfivescreen').css('display', 'block');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  $('.five').click(function() {
    bw.css('left', 'auto');
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    characterzero = false;
    characterone = false;
    charactertwo = false;
    characterthree = false;
    characterfour = false;
    characterfive = true;
    charactersix = false;
    characterseven = false;

    $('#black-white-modal').css('display', 'none');
    $('#blackt-whitet-modal').css('display', 'none');
    $('#x-y-modal').css('display', 'none');
    $('#oruby-asapphire-modal').css('display', 'none');
    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'none');
    $('#levelonescreen').css('display', 'none');
    $('#leveltwoscreen').css('display', 'none');
    $('#levelthreescreen').css('display', 'none');
    $('#levelfourscreen').css('display', 'none');
    $('#levelfivescreen').css('display', 'block');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  $('.six').click(function() {
    xy.css('left', 'auto');
    sun.css('left', 'auto');

    characterzero = false;
    characterone = false;
    charactertwo = false;
    characterthree = false;
    characterfour = false;
    characterfive = false;
    charactersix = true;
    characterseven = false;

    $('#x-y-modal').css('display', 'none');
    $('#oruby-asapphire-modal').css('display', 'none');
    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'none');
    $('#levelonescreen').css('display', 'none');
    $('#leveltwoscreen').css('display', 'none');
    $('#levelthreescreen').css('display', 'none');
    $('#levelfourscreen').css('display', 'none');
    $('#levelfivescreen').css('display', 'none');
    $('#levelsixscreen').css('display', 'block');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  $('.seven').click(function() {
    sun.css('left', 'auto');

    characterzero = false;
    characterone = false;
    charactertwo = false;
    characterthree = false;
    characterfour = false;
    characterfive = false;
    charactersix = false;
    characterseven = true;

    $('#sun-moon-modal').css('display', 'none');
    $('#usun-umoon-modal').css('display', 'none');

    $('#levelzeroscreen').css('display', 'none');
    $('#levelonescreen').css('display', 'none');
    $('#leveltwoscreen').css('display', 'none');
    $('#levelthreescreen').css('display', 'none');
    $('#levelfourscreen').css('display', 'none');
    $('#levelfivescreen').css('display', 'none');
    $('#levelsixscreen').css('display', 'none');
    $('#levelsevenscreen').css('display', 'block');
    $('#levelendscreen').css('display', 'block');
  });

  // sources modal window
  $('#sourcesarea').click(function() {
    $('#sources-modal').css('display', 'block');
  });

  $('#close').click(function() {
    $('#sources-modal').css('display', 'none');
  });

$(document).keydown(function(e) {
  var characterLeft = character.offset().left;
  var characterRight = character.offset().left + character.outerWidth();
  var characteroneLeft = red.offset().left;
  var characteroneRight = red.offset().left + red.outerWidth();
  var charactertwoLeft = gold.offset().left;
  var charactertwoRight = gold.offset().left + gold.outerWidth();
  var characterthreeLeft = ruby.offset().left;
  var characterthreeRight = ruby.offset().left + ruby.outerWidth();
  var characterfourLeft = dia.offset().left;
  var characterfourRight = dia.offset().left + dia.outerWidth();
  var characterfiveLeft = bw.offset().left;
  var characterfiveRight = bw.offset().left + bw.outerWidth();
  var charactersixLeft = xy.offset().left;
  var charactersixRight = xy.offset().left + xy.outerWidth();
  var charactersevenLeft = sun.offset().left;
  var charactersevenRight = sun.offset().left + sun.outerWidth();

  if(!pressed && characterzero) {
      width = $(this).width();
      height = $(this).height();
      switch (e.which) {
          case 37:
          character.stop().animate({
              left: '-=' + width
          }, 3000); //left arrow key
          break;

          case 39:
          character.stop().animate({
              left: '+=' + width
          }, 3000); //right arrow key
          break;
      }
  }

   if (!pressed && characterone) {
    width = $(this).width();
    height = $(this).height();
    switch (e.which) {
        case 37:
        red.stop().animate({
            left: '-=' + width
        }, 3000); //left arrow key
        break;

        case 39:
        red.stop().animate({
            left: '+=' + width
        }, 3000); //right arrow key
        break;

    }
  }

  if (!pressed && charactertwo) {
   width = $(this).width();
   height = $(this).height();
   switch (e.which) {
       case 37:
       gold.stop().animate({
           left: '-=' + width
       }, 3000); //left arrow key
       break;

       case 39:
       gold.stop().animate({
           left: '+=' + width
       }, 3000); //right arrow key
       break;

   }
 }

 if (!pressed && characterthree) {
  width = $(this).width();
  height = $(this).height();
  switch (e.which) {
      case 37:
      ruby.stop().animate({
          left: '-=' + width
      }, 3000); //left arrow key
      break;

      case 39:
      ruby.stop().animate({
          left: '+=' + width
      }, 3000); //right arrow key
      break;

  }
}

if (!pressed && characterfour) {
 width = $(this).width();
 height = $(this).height();
 switch (e.which) {
     case 37:
     dia.stop().animate({
         left: '-=' + width
     }, 3000); //left arrow key
     break;

     case 39:
     dia.stop().animate({
         left: '+=' + width
     }, 3000); //right arrow key
     break;

 }
}

if (!pressed && characterfive) {
 width = $(this).width();
 height = $(this).height();
 switch (e.which) {
     case 37:
     bw.stop().animate({
         left: '-=' + width
     }, 3000); //left arrow key
     break;

     case 39:
     bw.stop().animate({
         left: '+=' + width
     }, 3000); //right arrow key
     break;

 }
}

 if (!pressed && charactersix) {
  width = $(this).width();
  height = $(this).height();
  switch (e.which) {
      case 37:
      xy.stop().animate({
          left: '-=' + width
      }, 3000); //left arrow key
      break;

      case 39:
      xy.stop().animate({
          left: '+=' + width
      }, 3000); //right arrow key
      break;

  }
}

if (!pressed && characterseven) {
 width = $(this).width();
 height = $(this).height();
 switch (e.which) {
     case 37:
     sun.stop().animate({
         left: '-=' + width
     }, 3000); //left arrow key
     break;

     case 39:
     sun.stop().animate({
         left: '+=' + width
     }, 3000); //right arrow key
     break;

 }
}

  // restricts character from moving off the left side of the screen
  if (characterLeft < 0) {
    console.log('out of left bound');
    character.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  if (characteroneLeft < 0) {
    console.log('out of left bound');
    red.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  if (charactertwoLeft < 0) {
    console.log('out of left bound');
    gold.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  if (characterthreeLeft < 0) {
    console.log('out of left bound');
    ruby.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  if (characterfourLeft < 0) {
    console.log('out of left bound');
    dia.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  if (characterfiveLeft < 0) {
    console.log('out of left bound');
    bw.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  if (charactersixLeft < 0) {
    console.log('out of left bound');
    xy.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  if (charactersevenLeft < 0) {
    console.log('out of left bound');
    sun.stop().animate({
        left: '+=' + width
    }, 3000); //left arrow key
  }

  //remove intro
  if (characterLeft >= $('#game-freak-logo').offset().left - 300) {
    $('#intro').css('filter', 'opacity(0)');
  } else {
    $('#intro').css('filter', 'opacity(100)');
  }

  //modal windows
  if (characterLeft >= $('#game-freak-logo').offset().left - 100 &&
  characterRight <= ($('#game-freak-logo').offset().left + $('#game-freak-logo').outerWidth()) + 30) {
    console.log('game freak!');
    $('#the-creation-modal').css('display', 'block');
  } else if (characterRight + 30 > $('#game-freak-logo').offset().left + $('#game-freak-logo').outerWidth() ||
  characterLeft <= $('#game-freak-logo').offset().left) {
    $('#the-creation-modal').css('display', 'none');
  }

  if (characteroneLeft >= $('#red-green').offset().left - 100 &&
  characteroneRight <= ($('#red-green').offset().left + $('#red-green').outerWidth() - 50)) {
    $('#red-green-modal').css('display', 'block');
  } else if (characteroneRight - 50 > $('#red-green').offset().left + $('#red-green').outerWidth() ||
  characteroneLeft <= $('#red-green').offset().left) {
    $('#red-green-modal').css('display', 'none');
  }

  if (characteroneLeft >= $('#blue').offset().left - 100 &&
  characteroneRight <= ($('#blue').offset().left + $('#blue').outerWidth()) + 10) {
    $('#blue-modal').css('display', 'block');
  } else if (characteroneRight + 10 > $('#blue').offset().left + $('#blue').outerWidth() ||
  characteroneLeft <= $('#blue').offset().left) {
    $('#blue-modal').css('display', 'none');
  }

  if (characteroneLeft >= $('#yellow').offset().left - 100 &&
  characteroneRight <= ($('#yellow').offset().left + $('#yellow').outerWidth()) + 10) {
    $('#yellow-modal').css('display', 'block');
  } else if (characteroneRight + 10 > $('#yellow').offset().left + $('#yellow').outerWidth() ||
  characteroneLeft <= $('#yellow').offset().left) {
    $('#yellow-modal').css('display', 'none');
  }

  if (charactertwoLeft >= $('#gold-silver').offset().left - 100 &&
  charactertwoRight <= ($('#gold-silver').offset().left + $('#gold-silver').outerWidth()) + 30) {
    $('#gold-silver-modal').css('display', 'block');
  } else if (charactertwoRight + 30 > $('#gold-silver').offset().left + $('#gold-silver').outerWidth() ||
  charactertwoLeft <= $('#gold-silver').offset().left) {
    $('#gold-silver-modal').css('display', 'none');
  }

  if (charactertwoLeft >= $('#crystal').offset().left - 100 &&
  charactertwoRight <= ($('#crystal').offset().left + $('#crystal').outerWidth()) + 30) {
    $('#crystal-modal').css('display', 'block');
  } else if (charactertwoRight + 30 > $('#crystal').offset().left + $('#crystal').outerWidth() ||
  charactertwoLeft <= $('#crystal').offset().left) {
    $('#crystal-modal').css('display', 'none');
  }

  if (characterthreeLeft >= $('#ruby-sapphire').offset().left - 100 &&
  characterthreeRight <= ($('#ruby-sapphire').offset().left + $('#ruby-sapphire').outerWidth()) + 10) {
    $('#ruby-sapphire-modal').css('display', 'block');
  } else if (characterthreeRight + 10 > $('#ruby-sapphire').offset().left + $('#ruby-sapphire').outerWidth() ||
  charactertwoLeft <= $('#ruby-sapphire').offset().left) {
    $('#ruby-sapphire-modal').css('display', 'none');
  }

  if (characterthreeLeft >= $('#fire-leaf').offset().left - 100 &&
  characterthreeRight <= ($('#fire-leaf').offset().left + $('#fire-leaf').outerWidth()) + 10) {
    $('#fire-leaf-modal').css('display', 'block');
  } else if (characterthreeRight + 10 > $('#fire-leaf').offset().left + $('#fire-leaf').outerWidth() ||
  charactertwoLeft <= $('#fire-leaf').offset().left) {
    $('#fire-leaf-modal').css('display', 'none');
  }

  if (characterthreeLeft >= $('#emerald').offset().left - 120 &&
  characterthreeRight <= ($('#emerald').offset().left + $('#emerald').outerWidth()) + 10) {
    $('#emerald-modal').css('display', 'block');
  } else if (characterthreeRight + 10 > $('#emerald').offset().left + $('#emerald').outerWidth() ||
  charactertwoLeft <= $('#fire-leaf').offset().left) {
    $('#emerald-modal').css('display', 'none');
  }

  if (characterfourLeft >= $('#dpp').offset().left - 100 &&
  characterfourRight <= ($('#dpp').offset().left + $('#dpp').outerWidth()) + 10) {
    $('#dpp-modal').css('display', 'block');
  } else if (characterfourRight + 10 > $('#dpp').offset().left + $('#dpp').outerWidth() ||
  characterfourLeft <= $('#dpp').offset().left) {
    $('#dpp-modal').css('display', 'none');
  }

  if (characterfourLeft >= $('#heart-soul').offset().left - 100 &&
  characterfourRight <= ($('#heart-soul').offset().left + $('#heart-soul').outerWidth()) + 10) {
    $('#heart-soul-modal').css('display', 'block');
  } else if (characterfourRight + 10 > $('#heart-soul').offset().left + $('#heart-soul').outerWidth() ||
  characterfourLeft <= $('#heart-soul').offset().left) {
    $('#heart-soul-modal').css('display', 'none');
  }

  if (characterfiveLeft >= $('#black-white').offset().left - 100 &&
  characterfiveRight <= ($('#black-white').offset().left + $('#black-white').outerWidth()) + 10) {
    $('#black-white-modal').css('display', 'block');
  } else if (characterfiveRight + 10 > $('#black-white').offset().left + $('#black-white').outerWidth() ||
  characterfiveLeft <= $('#black-white').offset().left) {
    $('#black-white-modal').css('display', 'none');
  }

  if (characterfiveLeft >= $('#blackt-whitet').offset().left - 100 &&
  characterfiveRight <= ($('#blackt-whitet').offset().left + $('#blackt-whitet').outerWidth()) + 10) {
    $('#blackt-whitet-modal').css('display', 'block');
  } else if (characterfiveRight + 10 > $('#blackt-whitet').offset().left + $('#blackt-whitet').outerWidth() ||
  characterfiveLeft <= $('#blackt-whitet').offset().left) {
    $('#blackt-whitet-modal').css('display', 'none');
  }

  if (charactersixLeft >= $('#x-y').offset().left - 100 &&
  charactersixRight <= ($('#x-y').offset().left + $('#x-y').outerWidth()) + 10) {
    $('#x-y-modal').css('display', 'block');
  } else if (charactersixRight + 10 > $('#x-y').offset().left + $('#x-y').outerWidth() ||
  charactersixLeft <= $('#x-y').offset().left) {
    $('#x-y-modal').css('display', 'none');
  }

  if (charactersixLeft >= $('#oruby-asapphire').offset().left - 100 &&
  charactersixRight <= ($('#oruby-asapphire').offset().left + $('#oruby-asapphire').outerWidth()) + 10) {
    $('#oruby-asapphire-modal').css('display', 'block');
  } else if (charactersixRight + 10 > $('#oruby-asapphire').offset().left + $('#oruby-asapphire').outerWidth() ||
  charactersixLeft <= $('#oruby-asapphire').offset().left) {
    $('#oruby-asapphire-modal').css('display', 'none');
  }

  if (charactersevenLeft >= $('#sun-moon').offset().left - 100 &&
  charactersevenRight <= ($('#sun-moon').offset().left + $('#sun-moon').outerWidth()) + 10) {
    $('#sun-moon-modal').css('display', 'block');
  } else if (charactersevenRight > ($('#sun-moon').offset().left + $('#sun-moon').outerWidth()) + 10 || charactersevenLeft <= $('#sun-moon').offset().left) {
    $('#sun-moon-modal').css('display', 'none');
  }

  if (charactersevenLeft >= $('#usun-umoon').offset().left - 100 &&
  charactersixRight <= ($('#usun-umoon').offset().left + $('#usun-umoon').outerWidth()) + 10) {
    $('#usun-umoon-modal').css('display', 'block');
  } else if (charactersevenRight + 10 > $('#usun-umoon').offset().left + $('#usun-umoon').outerWidth() ||
  charactersevenLeft <= $('#usun-umoon').offset().left) {
    $('#usun-umoon-modal').css('display', 'none');
  }

  // change screen and character
  if (characterLeft >= $('#zerobadge').offset().left - 100) {
    $('#levelzeroscreen').css('display', 'none');
    characterzero = false;
    characterone = true;
    checkpoint = 0;
  }

  if (characteroneLeft >= $('#onebadge').offset().left - 100) {
    $('#levelonescreen').css('display', 'none');
    characterone = false;
    charactertwo = true;
    checkpoint = 1;
  }

  if (charactertwoLeft >= $('#twobadge').offset().left - 100) {
    $('#leveltwoscreen').css('display', 'none');
    charactertwo = false;
    characterthree = true;
    checkpoint = 2;
  }

  if (characterthreeLeft >= $('#threebadge').offset().left - 100) {
    $('#levelthreescreen').css('display', 'none');
    characterthree = false;
    characterfour = true;
    checkpoint = 3;
  }

  if (characterfourLeft >= $('#fourbadge').offset().left - 100) {
    $('#levelfourscreen').css('display', 'none');
    characterfour = false;
    characterfive = true;
    checkpoint = 4;
  }

  if (characterfiveLeft >= $('#fivebadge').offset().left - 100) {
    $('#levelfivescreen').css('display', 'none');
    characterfive = false;
    charactersix = true;
    checkpoint = 5;
  }

  if (charactersixLeft >= $('#sixbadge').offset().left - 100) {
    $('#levelsixscreen').css('display', 'none');
    charactersix = false;
    characterseven = true;
    checkpoint = 6;
  }

  if (charactersevenLeft >= $('#sevenbadge').offset().left - 100) {
    $('#levelsevenscreen').css('display', 'none');
    characterseven = false;
    checkpoint = 7;
  }

  pressed = true;

}).keyup(function(){
  character.stop();
  red.stop();
  gold.stop();
  ruby.stop();
  dia.stop();
  bw.stop();
  xy.stop();
  sun.stop();
  pressed = false;

});

});
