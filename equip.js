function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (msg.indexOf('!장비 ') != -1) {

    var char = msg.split(' ');

    url = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + char[1]);
    url = url.toLowerCase();

    var island = url.split('"equip"')[1];
    island = island.split('"skill"')[0];

    equip_group = ['무기', '', '머리', '', '상의', '', '하의', '', '장갑', '', '어깨', ''];
    var i = 0;
    var j = 0;

    for (i; i < 6 ; i++) {
        equip_name_start = island.indexOf('"value": "<p align=');
        island = island.substr(equip_name_start + 51);
        equip_name_end = island.indexOf('</font>');
        equip_name = island.substr(0, equip_name_end);
        equip_group[j + 1] = equip_name;
        j = j + 2;
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