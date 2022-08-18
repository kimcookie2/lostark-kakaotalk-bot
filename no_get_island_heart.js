const scriptName = "test";
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
  
  if (msg.indexOf('!섬마 ') != -1) {
    var char = msg.split(' ');
    
    url = Utils.getWebText("https://loawa.com/char/" + char[1]);
    url = url.toLowerCase();

    var island = url.split('획득하지 못한 섬의마음')[1];
    island = island.split('획득한 오르페우스의별')[0];

    island_heart_group = new Array();
    var i = 0;
    var j = 0;

    while (island.indexOf('"lang-ko">') != -1) {

      island_name_start = island.indexOf('"lang-ko">');
      island = island.substr(island_name_start + 10);
      island_name_end = island.indexOf(' </span');
      island_name_end = island.indexOf('</span');
      island_name = island.substr(0, island_name_end);

      method_start = island.indexOf('"lang-ko">');
      island = island.substr(method_start + 10);
      method_end = island.indexOf('</span');
      method = island.substr(0, method_end);
      method = method.split('<br>');
      var delete_word = method.indexOf('<span class="text-red">(획득불가)');
      method[delete_word] = '(획득불가)';
         

      island_heart_group[i] = island_name;
      island_heart_group[i + 1] = method;
            
            
      i = i + 2;
      j++;
                  
    }    
      
    var k = 0;
    var island_heart = '[' + char[1] + '님의 획득하지 못한 섬의 마음] : ' + j + '개' + allsee + '\n<교환처 : 외로운 섬 오페르 - 오페르 할아버지>';
    var l = 0;

    for (k ; k < j ; k++) {
      island_heart = island_heart + '\n' + island_heart_group[l] + '\n' + island_heart_group[l + 1];
      l = l + 2;
    }       
        
    island_heart = island_heart.trim();
    replier.reply(island_heart);

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