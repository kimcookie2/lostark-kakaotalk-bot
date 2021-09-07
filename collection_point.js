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
  
  if (msg.indexOf('!수집 ') != -1) {
    var char = msg.split(' ');

    url = Utils.getWebText("https://loawa.com/char/" + char[1]);
    url = url.toLowerCase();

    var island = url.split('수집형 포인트')[1];

    // 섬의 마음
    island_heart_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(island_heart_start + 20);
    island_heart_end = island.indexOf('<');
    island_heart = island.substr(0, island_heart_end);

    // 오르페우스의 별
    star_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(star_start + 20);
    star_end = island.indexOf('<');
    star = island.substr(0, star_end);

    // 거인의 심장
    gient_heart_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(gient_heart_start + 20);
    gient_heart_end = island.indexOf('<');
    gient_heart = island.substr(0, gient_heart_end);
    
    // 위대한 미술품
    art_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(art_start + 20);
    art_end = island.indexOf('<');
    art = island.substr(0, art_end);

    // 모코코 씨앗
    mococo_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(mococo_start + 20);
    mococo_end = island.indexOf('<');
    mococo = island.substr(0, mococo_end);

    // 모험물
    adventure_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(adventure_start + 20);
    adventure_end = island.indexOf('<');
    adventure = island.substr(0, adventure_end);

    // 이그네아의 징표
    ignea_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(ignea_start + 20);
    ignea_end = island.indexOf('<');
    ignea = island.substr(0, ignea_end);

    // 세계수의 잎
    world_tree_start = island.indexOf('text-theme-0 tfs14">');
    island = island.substr(world_tree_start + 20);
    world_tree_end = island.indexOf('<');
    world_tree = island.substr(0, world_tree_end);

    replier.reply('[' + char[1] + '님의 수집형 포인트]' + 
      '\n섬의 마음 : ' + island_heart + 
      ' / 94\n오르페우스의 별 : ' + star + 
      ' / 7\n거인의 심장 : ' + gient_heart + 
      ' / 15\n위대한 미술품 : ' + art + 
      ' / 54\n모코코 씨앗 : ' + mococo + 
      ' / 1,238\n항해 모험물 : ' + adventure + 
      ' / 47\n이그네아의 징표 : ' + ignea + 
      ' / 14\n세계수의 잎 : ' + world_tree + ' / 61'
      );
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