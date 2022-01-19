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
    island_heart_start = island.indexOf('alt="섬의마음">');
    island = island.substr(island_heart_start + 69);
    island_heart_end = island.indexOf('</dd>');
    island_heart = island.substr(0, island_heart_end);
    island_heart = island_heart.trim();

    // 오르페우스의 별
    star_start = island.indexOf('alt="오르페우스의별"');
    island = island.substr(star_start + 72);
    star_end = island.indexOf('</dd>');
    star = island.substr(0, star_end);
    star = star.trim();

    // 거인의 심장
    gient_heart_start = island.indexOf('alt="거인의심장"');
    island = island.substr(gient_heart_start + 70);
    gient_heart_end = island.indexOf('</dd>');
    gient_heart = island.substr(0, gient_heart_end);
    gient_heart = gient_heart.trim();
    
    // 위대한 미술품
    art_start = island.indexOf('alt="위대한미술품"');
    island = island.substr(art_start + 71);
    art_end = island.indexOf('</dd>');
    art = island.substr(0, art_end);
    art = art.trim();

    // 모코코 씨앗
    mococo_start = island.indexOf('alt="모코코씨앗"');
    island = island.substr(mococo_start + 70);
    mococo_end = island.indexOf('</dd>');
    mococo = island.substr(0, mococo_end);
    mococo = mococo.trim();
    if (mococo.length == 4) {
      mococo = mococo[0] + ',' + mococo[1] + mococo[2] + mococo[3];
    }


    // 모험물
    adventure_start = island.indexOf('alt="항해모험물"');
    island = island.substr(adventure_start + 70);
    adventure_end = island.indexOf('</dd>');
    adventure = island.substr(0, adventure_end);
    adventure = adventure.trim();

    // 이그네아의 징표
    ignea_start = island.indexOf('alt="이그네아의징표"');
    island = island.substr(ignea_start + 72);
    ignea_end = island.indexOf('</dd>');
    ignea = island.substr(0, ignea_end);
    ignea = ignea.trim();

    // 세계수의 잎
    world_tree_start = island.indexOf('alt="세계수의잎"');
    island = island.substr(world_tree_start + 70);
    world_tree_end = island.indexOf('</dd>');
    world_tree = island.substr(0, world_tree_end);
    world_tree = world_tree.trim();

    replier.reply('[' + char[1] + '님의 수집형 포인트]' + 
      '\n섬의 마음 : ' + island_heart + 
      ' / 95\n오르페우스의 별 : ' + star + 
      ' / 8\n거인의 심장 : ' + gient_heart + 
      ' / 15\n위대한 미술품 : ' + art + 
      ' / 56\n모코코 씨앗 : ' + mococo + 
      ' / 1,268\n항해 모험물 : ' + adventure + 
      ' / 47\n이그네아의 징표 : ' + ignea + 
      ' / 15\n세계수의 잎 : ' + world_tree + ' / 67'
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