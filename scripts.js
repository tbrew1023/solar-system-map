var info = [
  {
    name: 'Mercury',
    description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.'
  },
  {
    name: 'Venus',
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.'
  },
  {
    name: 'Earth',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth\'s only natural satellite.'
  },
  {
    name: 'Mars',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the \'Red Planet\'.'
  },
  {
    name: 'Jupiter',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter has been known to astronomers since antiquity.'
  },
  {
    name: 'Saturn',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.'
  },
  {
    name: 'Uranus',
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.'
  },
  {
    name: 'Neptune',
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.'
  },
  {
    name: 'Sun',
    description: 'The Sun, or Sol, is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth.'
  }
]

// $('.spinner-box').css({ // scale 75%
//   'transform': 'scale(0.75)',
//   // 'margin-left': '20vw'
// });

$('.orbitview-button').click(function() {
  defaultView();
});

$('.distanceview-button').click(function() {
  distanceView();
});

function defaultView() {
  $('.mercury-orbit').css({
    'width': '160px',
    'height':'160px',
    'animation':'spin 1s linear 0s infinite'
  });
  $('.venus-orbit').css({
    'width':'240px',
    'height':'240px',
    'animation':'spin 3s linear 0s infinite'
  }); 
  $('.earth-orbit').css({
    'width':'320px',
    'height':'320px',
    'animation':'spin 5s linear 0s infinite'
  }); 
  $('.mars-orbit').css({
    'width':'400px',
    'height':'400px',
    'animation':'spin 9.5s linear 0s infinite'
  }); 
  $('.jupiter-orbit').css({
    'width':'480px',
    'height':'480px',
    'animation':'spin 59.5s linear 0s infinite'
  }); 
  $('.saturn-orbit').css({
    'width':'560px',
    'height':'560px',
    'animation':'spin 147.5s linear 0s infinite'
  }); 
  $('.uranus-orbit').css({
    'width':'640px',
    'height':'640px',
    'animation':'spin 420s linear 0s infinite'
  }); 
  $('.neptune-orbit').css({
    'width':'720px',
    'height':'720px',
    'animation':'spin 824s linear 0s infinite'
  });
  $('.sun').css({
    'width': '80px',
    'height':'80px'
  });
  $('.planet').css({
    'width': '24px',
    'height':'24px',
    'top':'-13px'
  });
  $('.solar-system').css({
    'transform':'rotate(540deg) translateX(0%) scale(0.6)',

  });
  $('.backdrop').css({
    // 'filter': 'brightness(0.4) contrast(1)',
    // 'transform':'scale(1.2) translateX(0%)',
  });
  $('.orbitview-button').css({
    'background':'white',
    'color':'black'
  });
  $('.distanceview-button').css({
    'background':'#ffffff00',
    'color':'white'
  });
}

function distanceView() {
  $('.mercury').css({
    'width': '2px',
    'height':'2px',
    'top':'-3px'
  });
  $('.venus').css({
    'width':'2px',
    'height':'2px',
    'top':'-3px'
  }); 
  $('.earth').css({
    'width':'4px',
    'height':'4px',
    'top':'-3px'
  }); 
  $('.mars').css({
    'width':'2px',
    'height':'2px',
    'top':'-3px'
  }); 
  $('.jupiter').css({
    'width':'22px',
    'height':'22px',
    'top':'-13px'
  }); 
  $('.saturn').css({
    'width':'18px',
    'height':'18px',
    'top':'-9px'
  }); 
  $('.uranus').css({
    'width':'8px',
    'height':'8px',
    'top':'-4px'
  }); 
  $('.neptune').css({
    'width':'7px',
    'height':'7px',
    'top':'-4px'
  });
  $('.mercury-orbit').css({
    'width': '247px',
    'height':'247px',
    'animation':'none'
  });
  $('.venus-orbit').css({
    'width':'273px',
    'height':'273px',
    'animation':'none',
  }); 
  $('.earth-orbit').css({
    'width':'292px',
    'height':'292px',
    'animation':'none',
  }); 
  $('.mars-orbit').css({
    'width':'333px',
    'height':'333px',
    'animation':'none',
  }); 
  $('.jupiter-orbit').css({
    'width':'595px',
    'height':'595px',
    'animation':'none',
  }); 
  $('.saturn-orbit').css({
    'width':'910px',
    'height':'910px',
    'animation':'none',
  }); 
  $('.uranus-orbit').css({
    'width':'1600px',
    'height':'1600px',
    'animation':'none',
  }); 
  $('.neptune-orbit').css({
    'width':'2600px',
    'height':'2600px',
    'transform':'rotate(90deg)',
    'animation':'none'
  });
  $('.sun').css({
    'width': '220px',
    'height':'220px'
  });
  $('.backdrop').css({
    // 'transform':'scale(1) translateX(0%)', 
    // 'filter': 'brightness(0.8) contrast(1)',
  });
  $('.orbitview-button').css({
    'background':'#ffffff00',
    'color':'white'
  });
  $('.distanceview-button').css({
    'background':'white',
    'color':'black'
  });
  $('.solar-system').css({
    'transform':'rotate(540deg) translateX(-50%) scale(0.6)',
    // 'margin-left':'100%',
  });
}
/*$('.mercury').css({
  'width': '2px',
  'height':'2px'
});*/

/*$(function(){
    var curDown = false,
        curYPos = 0,
        curXPos = 0;
    $(window).mousemove(function(m){
      if(curDown === true){
       $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY)); 
       $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
      }
    });
    
    $(window).mousedown(function(m){
      curDown = true;
      curYPos = m.pageY;
      curXPos = m.pageX;
    });
    
    $(window).mouseup(function(){
      curDown = false;
    });
  })*/

  $('.neptune-orbit').hover(function() {
    $('.info h1').html(info[7].name);
    $('.info p').html(info[7].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html('');
    $('.info p').html('🔭 Hover an orbit for info');
    $('.orbit').css('border','2px solid #ffffff34');
  });

  $('.uranus-orbit').hover(function() {
    $('.info h1').html(info[6].name);
    $('.info p').html(info[6].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html(info[7].name);
    $('.info p').html(info[7].description);
    $('.neptune-orbit').css('border','2px solid #ffffff');
    $(this).css('border','2px solid #ffffff34');
  });

  $('.saturn-orbit').hover(function() {
    $('.info h1').html(info[5].name);
    $('.info p').html(info[5].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html(info[6].name);
    $('.info p').html(info[6].description);
    $('.uranus-orbit').css('border','2px solid #ffffff');
    $(this).css('border','2px solid #ffffff34');
  });

  $('.jupiter-orbit').hover(function() {
    $('.info h1').html(info[4].name);
    $('.info p').html(info[4].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html(info[5].name);
    $('.info p').html(info[5].description);
    $('.saturn-orbit').css('border','2px solid #ffffff');
    $(this).css('border','2px solid #ffffff34');
  });

  $('.mars-orbit').hover(function() {
    $('.info h1').html(info[3].name);
    $('.info p').html(info[3].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html(info[4].name);
    $('.info p').html(info[4].description);
    $('.jupiter-orbit').css('border','2px solid #ffffff');
    $(this).css('border','2px solid #ffffff34');
  });

  $('.earth-orbit').hover(function() {
    $('.info h1').html(info[2].name);
    $('.info p').html(info[2].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html(info[3].name);
    $('.info p').html(info[3].description);
    $('.mars-orbit').css('border','2px solid #ffffff');
    $(this).css('border','2px solid #ffffff34');
  });

  $('.venus-orbit').hover(function() {
    $('.info h1').html(info[1].name);
    $('.info p').html(info[1].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html(info[2].name);
    $('.info p').html(info[2].description);
    $('.earth-orbit').css('border','2px solid #ffffff');
    $(this).css('border','2px solid #ffffff34');
  });

  $('.mercury-orbit').hover(function() {
    $('.info h1').html(info[0].name);
    $('.info p').html(info[0].description);
    $('.orbit').css('border','2px solid #ffffff34');
    $(this).css('border','2px solid #ffffff');
  }, function() {
    $('.info h1').html(info[1].name);
    $('.info p').html(info[1].description);
    $('.venus-orbit').css('border','2px solid #ffffff');
    $(this).css('border','2px solid #ffffff34');
  });

  $('.sun').hover(function() {
    $('.info h1').html(info[8].name);
    $('.info p').html(info[8].description);
    $('.orbit').css('border','2px solid #ffffff34');
  }, function() {
    $('.info h1').html(info[0].name);
    $('.info p').html(info[0].description);
    $('.mercury-orbit').css('border','2px solid #ffffff');
  });