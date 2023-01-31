$( document ).ready( function() {
    var jbOffset = $( '#header' ).offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 300) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#header' ).addClass("on");
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
        $('#top').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('#top').fadeOut();//나타날 아이콘 클래스 수정!
    }
});