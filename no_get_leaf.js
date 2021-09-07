const scriptName = "획득하지 못한 세계수의 잎";
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
  
  if (msg.indexOf('!세계수 ') != -1) {
    var char = msg.split(' ');

    url = Utils.getWebText("https://loawa.com/char/" + char[1]);
    url = url.toLowerCase();

    var island = url.split('생활별 세계수의 잎')[1];
    island = island.split('획득한 세계수')[0];

    leaf_group = new Array();
    var i = 0;
    var j = 0;
    var number;

    while (island.indexOf('-1 text-orange">') != -1) {

      leaf_name_start = island.indexOf('-1 text-orange">');
      island = island.substr(leaf_name_start + 16);
      leaf_name_end = island.indexOf('&nbsp;');
      leaf_name = island.substr(0, leaf_name_end);
            

      number_start = island.indexOf('"col-6 p-0">');
      island = island.substr(number_start + 12);
      number_end = island.indexOf('</div>');
      number = island.substr(0, number_end);
      number = number.replace('<span class="text-theme-4">0</span>', '');
      number = number.replace('<span class="text-theme-4">0</span>', '');           
      number = number.slice(19);
      number = number.split(']')[0];

      leaf_group[i] = leaf_name;
      leaf_group[i + 1] = number;            
            
      i = i + 2;
      j++;

    }

    var k = 0;
    var leaf = '[' + char[1] + '님의 생활별 세계수의 잎]' + '\n';
    var l = 0;

    for (k ; k < j ; k++) {
      leaf = leaf + '\n' + leaf_group[l] + ' ' + leaf_group[l + 1] +']';
      l = l + 2;
    }

    replier.reply(leaf);
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