$(window).on('load',function(){
    gsap.to('#loader',1,{y:"-100%"});
    gsap.to('#loader',1,{opacity:0});
    gsap.to('#loader',0,{display:"none",delay:1});
    gsap.to('#header',0,{display:"block",delay:1})
    gsap.to('#navigation-content',0,{display:"none"});
    gsap.to('#navigation-content',0,{display:"flex",delay:1});
  });
  $(function(){
    var body =  document.querySelector('body');
    var $cursor = $('.cursor')
      function cursormover(e){
       
       gsap.to( $cursor, {
         x : e.clientX ,
         y : e.clientY,
         stagger:.002
        })
      }
      function cursorhover(e){
       gsap.to( $cursor,{
        scale:1.4,
        opacity:1
       })
       
     }
     function cursor(e){
       gsap.to( $cursor, {
        scale:1,
        opacity:.6
       }) 
     }
     $(window).on('mousemove',cursormover);
     $('.menubar').hover(cursorhover,cursor);
     $('a').hover(cursorhover,cursor);
     $('.navigation-close').hover(cursorhover,cursor);
   
   });
   $(function(){
    $('.menubar').on('click',function(){
        gsap.to('#navigation-content',.6,{y:0});
    })
    $('.navigation-close').on('click',function(){
       gsap.to('#navigation-content',.6,{y:"-100%"});
   });
  }); 