

$(function(){
    

    let second = $(window).width();
    if (second < 1600)
    {
        $('.acceuil').css({left:'0.5%'});
    };
    $(window).resize(function(){
        let first = $(window).width();
        if (first < 1600)
           {
              $('.acceuil').css({left:'-20%'});
           }
        if(first >1600)
        {
            $('.acceuil').css({left: '0%'});
        }
    });
    
    //move triangle
    $('#apropos').on('click', function(){
        $('.triangle').animate( {left:'-33%'},1500);
    });
    $('#acceuil').on('click', function(){
        $('.triangle').animate( {left:'0%'},1500);
    });
    $('#contact').on('click', function(){
        $('.triangle').animate( {left:'33%'},1500);
    });


    //border menu and content start
    $('#apropos').on('click', function(){
        $('#apropos').css({
            borderWidth:'2px',
            borderStyle:'solid'
        }),
        $('#contact').css({
            borderWidth:'0px',
            borderStyle:'none'
        }),
        $('#acceuil').css({
            borderWidth:'0px',
            borderStyle:'none'
        }),
        $('.contact').css({
            visibility: 'hidden'
        }),
        $('.apropos').css({
            visibility: 'visible'
        }),
        $('.acceuil').css({
            visibility: 'hidden'
        }),
        $('.tablemoteur').css({
            visibility: 'visible'
        }),
        $('.tabletrans').css({
            visibility: 'hidden'
        })
        $('.tableperf').css({
            visibility: 'hidden'
        });
    });

    $('#acceuil').on('click', function(){
        $('#acceuil').css({
            borderWidth:'2px',
            borderStyle:'solid'
        }),
        $('#contact').css({
            borderWidth:'0px',
            borderStyle:'none'
        }),
        $('#apropos').css({
            borderWidth:'0px',
            borderStyle:'none'
        }),
        $('.contact').css({
            visibility: 'hidden'
        }),
        $('.apropos').css({
            visibility: 'hidden'
        }),
        $('.acceuil').css({
            visibility: 'visible'
        }),
        $('.tablemoteur').css({
            visibility: 'hidden'
        }),
        $('.tabletrans').css({
            visibility: 'hidden'
        })
        $('.tableperf').css({
            visibility: 'hidden'
        });
    });

    $('#contact').on('click', function(){
        $('#contact').css({
            borderWidth:'2px',
            borderStyle:'solid'
        }),
        $('#acceuil').css({
            borderWidth:'0px',
            borderStyle:'none'
        }),
        $('#apropos').css({
            borderWidth:'0px',
            borderStyle:'none'
        }),
        $('.contact').css({
            visibility: 'visible'
        }),
        $('.apropos').css({
            visibility: 'hidden'
        }),
        $('.acceuil').css({
            visibility: 'hidden'
        }),
        $('.tablemoteur').css({
            visibility: 'hidden'
        }),
        $('.tabletrans').css({
            visibility: 'hidden'
        })
        $('.tableperf').css({
            visibility: 'hidden'
        });
    });
    //border menu and content end
    

    //sous menu ||apropos|| start
    $('#sousmoteur').on('click', function(){
        $('.tablemoteur').css({
            visibility: 'visible'
        })
        $('.tableperf').css({
            visibility: 'hidden'
        })
        $('.tabletrans').css({
            visibility: 'hidden'
        })
        $('#sousperf').css({
            backgroundColor: 'white',
            color: '#FC7A10'
        })
        $('#sousmoteur').css({
            backgroundColor: '#FC7A10',
            color: 'white'
        })
        $('#soustrans').css({
            backgroundColor: 'white',
            color: '#FC7A10'
        })
        $('.hondamoteur').attr('src','img/honda.jpg');        
    });   

    $('#sousperf').on('click', function(){
        $('.tableperf').css({
            visibility: 'visible'
        })
        $('.tablemoteur').css({
            visibility: 'hidden'
        })
        $('.tabletrans').css({
            visibility: 'hidden'
        })
        $('#sousperf').css({
            backgroundColor: '#FC7A10',
            color: 'white'
        })
        $('#sousmoteur').css({
            backgroundColor: 'white',
            color:'#FC7A10'
        })
        $('#soustrans').css({
            backgroundColor: 'white',
            color:'#FC7A10'
        })
        $('.hondamoteur').attr('src','img/honda2.jpg');
            
           
    });     
    $('#soustrans').on('click', function(){
        $('.tabletrans').css({
            visibility: 'visible'
        })
        $('.tableperf').css({
            visibility: 'hidden'
        })
        $('.tablemoteur').css({
            visibility: 'hidden'
        })
        $('#soustrans').css({
            backgroundColor: '#FC7A10',
            color:'white'
        })
        $('#sousmoteur').css({
            backgroundColor: 'white',
            color: '#FC7A10'
        })
        $('#sousperf').css({
            backgroundColor: 'white',
            color: '#FC7A10'
        })
        $('.hondamoteur').attr('src','img/honda3.jpg');
    });
    //sous menu ||apropos|| end
});