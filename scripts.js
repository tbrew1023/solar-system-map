$(window).ready(function() {
    console.log('i love you');
});

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
    'height':'80px',
  });
  $('.solar-system').css({
    'margin-left':'0'
  });
  $('.backdrop').css({
    'filter':'blur(1px)',
    'transform':'scale(1)'
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
  $('.mercury-orbit').css({
    'width': '247px',
    'height':'247px',
    'animation':'none'
  });
  $('.venus-orbit').css({
    'width':'271px',
    'height':'271px',
    'animation':'none',
  }); 
  $('.earth-orbit').css({
    'width':'292px',
    'height':'292px',
    'animation':'none',
  }); 
  $('.mars-orbit').css({
    'width':'331px',
    'height':'331px',
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
    'filter':'blur(2px)',
    'transform':'scale(1.5)'
  });
  /*$('.mercury').css({
    'width': '1px',
    'height':'1px'
  });*/

  $('.orbitview-button').css({
    'background':'#ffffff00',
    'color':'white'
  });
  $('.distanceview-button').css({
    'background':'white',
    'color':'black'
  });

  $('.solar-system').css({
    'margin-left':'-50vw'
  });
}

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