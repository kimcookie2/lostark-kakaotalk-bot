const scriptName = "획득하지 못한 거인의 심장";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  var allsee = new Array(500).join(String.fromCharCode(847));
  
  if (msg.indexOf('!거심 ') != -1) {
    var char = msg.split(' ');

    url = Utils.getWebText("https://loawa.com/char/" + char[1]);
    url = url.toLowerCase();

    var island = url.split('획득하지 못한 거인의심장')[1];
    island = island.split('위대한미술품')[0];

    gient_group = new Array();
    var i = 0;
    var j = 0;

    while (island.indexOf('"lang-ko">') != -1) {
      gient_name_start = island.indexOf('"lang-ko">');
      island = island.substr(gient_name_start + 10);
      gient_name_end = island.indexOf(' </span');
      gient_name = island.substr(0, gient_name_end);

      method_start = island.indexOf('"lang-ko">');
      island = island.substr(method_start + 10);
      method_end = island.indexOf('</span');
      method = island.substr(0, method_end);
      method = method.split('<br>');

      gient_group[i] = gient_name;
      gient_group[i + 1] = method;
      i = i + 2;
      j++;
    }

    var k = 0;
    var heart = '[' + char[1] + '님의 획득하지 못한 거인의 심장] : ' + j + '개' + allsee + '\n<교환처 : 지혜의 섬 - 미네르바>';
    var l = 0;

    for (k ; k < j ; k++) {
      heart = heart + '\n' + gient_group[l] + '\n' + gient_group[l + 1];
      l = l + 2;
    }

    replier.reply(heart);

  }

  else {
    return;
  }
  
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}