function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  var allsee = new Array(500).join(String.fromCharCode(847));

  if (msg == !명령어) {

      var answer = ''

      answer = answer + '\n\n!정보 캐릭터명\n- 캐릭터의 정보를 출력합니다';

      answer = answer + '\n\n!장비 캐릭터명\n- 캐릭터의 장비정보를 출력합니다';

      answer = answer + '\n\n!수집 캐릭터명\n- 캐릭터의 현재 수집형 포인트 개수를 출력합니다';

      answer = answer + '\n\n!모험섬\n- 모험섬의 종류, 보상, 등장까지 남은 시간을 출력합니다';

      answer = answer + '\n\n!주요알림\n- 주요알림의 종류, 출현시간, 남은시간을 출력합니다';

      answer = answer + '\n\n!보스시간\n- 오늘의 보스의 종류, 출현시간, 남은시간을 출력합니다';

      answer = answer + '\n\n!항해시간\n- 오늘의 항해활동의 종류, 출현시간, 남은시간을 출력합니다';

      answer = answer + '\n\n!캘린더섬\n- 캘린더섬의 종류, 출현시간, 남은시간을 출력합니다';

      answer = answer + '\n\n!보상 수집품이름\n- 수집품 개수에 따른 보상 목록을 출력합니다\n- 수집품이름 목록 : 섬마/모코코/이그네아/미술품/거심/모험물/오페별/세계수';

      answer = answer + '\n\n!수집품이름 캐릭터이름\n- 캐릭터의 획득하지 못한 수집품 개수, 목록, 획득 방법을 출력합니다\n- 수집품이름 목록 : 섬마/미술품/거심/모험물/오페별/세계수';

      answer = answer + '\n\n!마법의 소라고동님 물어볼내용\n- 마법의 소라고동님께 물어보세요! 고민없이 결정해드립니다!';

      answer = answer + '\n\n!업데이트\n- 가장 최근 업데이트 내역 주소를 출력합니다';

      answer = answer + '\n\n!로아와\n- 로아와 주소를 출력합니다';

      //answer = answer + '\n\n!';

      replier.reply('[쿠키봇 명령어]'+ allsee + answer);

  }

  else {
      return;
  }

  if (msg == '!로아와') {

      replier.reply('https://loawa.com/');

  }

}



//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) { }

function onResume(activity) { }

function onPause(activity) { }

function onStop(activity) { }