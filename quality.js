function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (msg.indexOf('!장비 ') != -1) {

    var char = msg.split(' ');

    url = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + char[1]);
    url = url.toLowerCase();

    var island = url.split('"equip": {')[1];
    island = island.split('무작위 각인 효과')[0];

    equip_group = ['무기', '', '머리', '', '상의', '', '하의', '', '장갑', '', '어깨', ''];
    var i = 0;
    var j = 0;

    while (i < 6) {
        equip_name_start = island.indexOf('"qualityvalue": ');
        island = island.substr(equip_name_start + 16);
        equip_name_end = island.indexOf(',');
        equip_name = island.substr(0, equip_name_end);
        if (equip_name.substr(0, 1) == '-') {
          continue;
        }
        equip_group[j + 1] = equip_name;
        j = j + 2;
        i = i + 1;
    }

    var k = 0;
    var equip = '[' + char[1] + '님의 장비]';
    var l = 0;
    
    for (k ; k < 6 ; k++) {
        equip = equip + '\n' + equip_group[l] + ' : ' +equip_group[l + 1];
        l = l + 2;
    }
    replier.reply(equip);

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

function onStart(activity) { }

function onResume(activity) { }

function onPause(activity) { }

function onStop(activity) { }