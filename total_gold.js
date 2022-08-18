const scriptName = "수집형 포인트";
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
  
  if(msg[0] != '!'){
    return;
  }
  
  if (msg.indexOf('!골드 ') != -1) {
    var char = msg.split(' ');

    url = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + char[1]);
    url = url.toLowerCase();

    var goldUrl = url.split('보유 캐릭터')[1];
    goldUrl = goldUrl.split('레이어 닫기')[0];

    var characters = {};

    while (goldUrl.indexOf('<strong>') != -1) {
      var server_name = '';

      server_name_start = goldUrl.indexOf('<strong>');
      goldUrl = goldUrl.substr(server_name_start + 9);
      server_name_end = goldUrl.indexOf('</strong');
      server_name = goldUrl.substr(0, server_name_end);

      var server_characters = [];

      while (goldUrl.indexOf('</span>') != -1) {
        char_name_start = goldUrl.indexOf('</span> ');
        goldUrl = goldUrl.substr(char_name_start + 8);
        char_name_end = goldUrl.indexOf('</a');
        var char_name = goldUrl.substr(0, char_name_end);

        server_characters.push(char_name);
      }

      characters[server_name] = server_characters;
    }

    replier.reply(characters);
    
  } else {
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