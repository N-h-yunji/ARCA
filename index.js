$( document ).ready( function() {
    var jbOffset = $( '#header' ).offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 100) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#header'  ).addClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
      else {
        $( '#header' ).removeClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
    });
  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('#btn').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('#btn').fadeOut();//나타날 아이콘 클래스 수정!
    }
});


/*햄버거모양*/
$(function () {
  $("#slide-open").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide").addClass("on");
    }
  });
  $("#slide ul li a").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide").addClass("on");
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          500
        ); //움직이는 시간 조정
        return false;
      }
    }
  });
});


/*팝업창*/
$(function(){
  /*.more 안에 있는 a를 클릭했을 때, .popup이 fadeIn하면서 나타난다. 그리고 .close를 클릭하면, popup이 fadeOut하면서 사라진다.*/
  $(".close").click(function(){
      $(".popup").fadeOut();
  });
});