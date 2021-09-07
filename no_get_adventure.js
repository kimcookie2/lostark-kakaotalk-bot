const scriptName = "획득하지 못한 모험물";
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
  
  if (msg.indexOf('!모험물 ') != -1) {
    var char = msg.split(' ');

    url = Utils.getWebText("https://loawa.com/char/" + char[1]);
    url = url.toLowerCase();

    var island = url.split('획득하지 못한 모험물')[1];
    island = island.split('이그네아')[0];

    adventure_group = new Array();
    var i = 0;
    var j = 0;

    while (island.indexOf('"letter-spacing:-1px;">') != -1) {

      adventure_name_start = island.indexOf('"letter-spacing:-1px;">');
      island = island.substr(adventure_name_start + 23);
      adventure_name_end = island.indexOf(' </span');
      adventure_name = island.substr(0, adventure_name_end);

      method_start = island.indexOf('block" style="letter-spacing:-1.5px;">');
      island = island.substr(method_start + 38);
      method_end = island.indexOf('</span');
      method = island.substr(0, method_end);
      method = method.split('<br>');

      adventure_group[i] = adventure_name;
      adventure_group[i + 1] = method;

      i = i + 2;
      j++;

    }

    var k = 0;
    var adventure = '[' + char[1] + '님의 획득하지 못한 모험물] : ' + j + '개' + allsee + '\n<교환처 : 해상 낙원 페이토 - 혹등고래 바티우스>';
    var l = 0;

    for (k ; k < j ; k++) {
      adventure = adventure + '\n' + adventure_group[l] + '\n' + adventure_group[l + 1];
      l = l + 2;
    }

    replier.reply(adventure);

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