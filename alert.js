function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (msg.indexOf('!주요알림') != -1) {

    var now = new Date();
    var day = now.getDay();
    var alert = '';

    switch (day){

        case 0 :

            alert += '\n필드보스 : 11:00 ~ 익일 05:00 정시\n모험섬 : 09:00, 11:00, 13:00, 19:00, 21:00, 23:00\n점령전 - 슬라임 아일랜드 : 22:30';
            break;

        case 1 :

            alert += '\n카오스게이트 : 11:00 ~ 익일 05:00 정시\n모험섬 : 11:00, 13:00, 19:00, 21:00';

        case 2 :

            alert += '\n유령선 : 11:00 ~ 익일 05:00 정시\n필드보스 : 11:00 ~ 익일 05:00 정시\n모험섬 : 11:00, 13:00, 19:00, 21:00';
            break;

        case 3 :

            alert += '\n모험섬 : 11:00, 13:00, 19:00, 21:00';
            break;

        case 4 :

            alert += '\n카오스게이트 : 11:00 ~ 익일 05:00 정시\n유령선 : 11:00 ~ 익일 05:00 정시\n모험섬 : 11:00, 13:00, 19:00, 21:00';
            break;

        case 5 :

            alert += '\n필드보스 : 11:00 ~ 익일 05:00 정시\n모험섬 : 11:00, 13:00, 19:00, 21:00';
            break;

        case 6 :

            alert += '\n유령선 : 11:00 ~ 익일 05:00 정시\n모험섬 : 09:00, 11:00, 13:00, 19:00, 21:00, 23:00\n점령전 - 메데이아 : 22:30';
            break;

    }

    replier.reply('[오늘의 주요 알림]' + alert);

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

function onStop(activity) { }}