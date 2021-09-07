const scriptName = "정보 테스트";
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
    // 전체보기로 묶기
    var allsee = new Array(500).join(String.fromCharCode(847));  

    // 캐릭터명을 level에 저장
    if (msg.indexOf('!정보 ') != -1) {
        var level = msg.split(' ');       
        
    var server;
    var classname;
    var expedition_lv;
    var equiped_lv;
    var item_lv;
    var attack_abil;
    var critical;
    var speciality;
    var subdue;
    var agility;
    var endurance;
    var proficiency;

    // lostark 전투정보실에서 캐릭터명 검색
    url = Utils.getWebText("https://lostark.game.onstove.com/Profile/Character/" + level[1]);
    url = url.toLowerCase();

    // 서버
    server = url.split('서버\n')[1];
    server = server.split('</dt>')[1];
    server = server.split('<dd>')[1];
    server = server.split('</dd>')[0];
    server = server.trim();
    server = server.replace(/\@/, '');

    // 클래스
    classname = url.split('클래스\n')[1];
    classname = classname.split('</dt>')[1];
    classname = classname.split('<dd>')[1];
    classname = classname.split('</dd')[0];
    classname = classname.trim();

    // 원정대 레벨
    expedition_lv = url.split('원정대\n')[1];
    expedition_lv = expedition_lv.split('</dt>')[1];
    expedition_lv = expedition_lv.split('<dd class="level">')[1];
    expedition_lv = expedition_lv.split('</dd>')[0];
    expedition_lv = expedition_lv.trim();

    // 장착 아이템 레벨
    equiped_lv = url.split('장착 아이템 레벨\n')[1];
    equiped_lv = equiped_lv.split('"level">')[1];
    equiped_lv = equiped_lv.split('</small>')[0];
    equiped_lv = equiped_lv.trim();
    equiped_lv = equiped_lv.replace(/\<small\>/, '');

    // 달성 아이템 레벨
    item_lv = url.split('달성 아이템 레벨\n')[1];
    item_lv = item_lv.split('</dt>')[1];
    item_lv = item_lv.split('<dd class="level">')[1];
    item_lv = item_lv.split('</small>')[0];
    item_lv = item_lv.trim();
    item_lv = item_lv.replace(/\<small\>/, '');

    // 공격력
    attack_abil = url.split('공격력')[1];
    attack_abil = attack_abil.split('</span>')[1];
    attack_abil = attack_abil.split('<span>')[1];
    attack_abil = attack_abil.split('</span>')[0];
    attack_abil = attack_abil.trim();

    // 치명
    critical = url.split('치명')[1];
    let critical1 = critical.substr(14, 17);
    critical = critical1.replace(/[^(0-9)]/gi, '');

    // 특화
    speciality = url.split('특화')[1];
    let speciality2 = speciality.substr(14, 17);
    speciality = speciality2.replace(/[^(0-9)]/gi, '');

    // 제압
    subdue = url.split('제압')[1];
    let subdue3 = subdue.substr(14, 17);
    subdue = subdue3.replace(/[^(0-9)]/gi, '');

    // 신속
    agility = url.split('신속')[1];
    let agility4 = agility.substr(14, 17);
    agility = agility4.replace(/[^(0-9)]/gi, '');

    // 인내
    endurance = url.split('인내')[1];
    let endurance5 = endurance.substr(14, 17);
    endurance = endurance5.replace(/[^(0-9)]/gi, '');

    // 숙련
    proficiency = url.split('숙련')[1];
    let proficiency6 = proficiency.substr(14, 17);
    proficiency = proficiency6.replace(/[^(0-9)]/gi, '');
 
    // 각인 효과
    var engrave = url.split('각인 효과')[1];
    engrave = engrave.split('"profile-card" class')[0];

    var i = 0;
    var j = 0;
    engrave_group = new Array();

    while (engrave.indexOf('<li> <span>') != -1) {

      engrave_name_start = engrave.indexOf('<li> <span>');
      engrave = engrave.substr(engrave_name_start + 11);
      engrave_name_end = engrave.indexOf('</span');
      engrave_name = engrave.substr(0, engrave_name_end);
      engrave_group[i] = engrave_name;
      i++;
      j++;

    }

    var k = 0;
    var my_engrave = '';
    var l = 0;

    for (k ; k < j ; k++) {
    
      my_engrave = my_engrave + '\n' + engrave_group[l];
      l = l + 1;

    }
    
    // 팔찌 효과
    if (url.indexOf('팔찌 효과') != -1){
            
    var bracelt = url.split('팔찌 효과')[1];
    bracelt = bracelt.split('element_006')[0];

    var a = 0;
    bracelt_effect = new Array();

    while (bracelt.indexOf('</img>') != -1) {

      bracelt_tmp_start = bracelt.indexOf('</img>');
      bracelt = bracelt.substr(bracelt_tmp_start + 6);
      bracelt_tmp_end = bracelt.indexOf('<br>');
      bracelt_tmp = bracelt.substr(0, bracelt_tmp_end);
      
      var cnt = 0
      while (cnt < 4){
        if (bracelt_tmp.indexOf("<font color='#f9f7d0'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#f9f7d0'>", "");
        }

        if (bracelt_tmp.indexOf("<font color='#99ff99'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#99ff99'>", "");
        }

        if (bracelt_tmp.indexOf("<font color='#969696'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#969696'>", "");
        }

        if (bracelt_tmp.indexOf("<font color='#aaaaaa'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#aaaaaa'>", "");
        }

        if (bracelt_tmp.indexOf('</font>') != -1) {
          bracelt_tmp = bracelt_tmp.replace('</font>', "");
        }

        if (bracelt_tmp.indexOf('<br>') != -1) {
          bracelt_tmp = bracelt_tmp.replace('<br>', "");
        }
        cnt ++;
      }
      bracelt_tmp = bracelt_tmp.trim();
      bracelt_effect[a] = bracelt_tmp;
      a++;
    }
    
    bracelt_tmp_end = bracelt.indexOf('"');
    bracelt_tmp = bracelt.substr(0, bracelt_tmp_end);
    var cnt = 0
      while (cnt < 4){
        if (bracelt_tmp.indexOf("<font color='#f9f7d0'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#f9f7d0'>", "");
        }

        if (bracelt_tmp.indexOf("<font color='#99ff99'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#99ff99'>", "");
        }

        if (bracelt_tmp.indexOf("<font color='#969696'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#969696'>", "");
        }

        if (bracelt_tmp.indexOf("<font color='#aaaaaa'>") != -1) {
          bracelt_tmp = bracelt_tmp.replace("<font color='#aaaaaa'>", "");
        }

        if (bracelt_tmp.indexOf('</font>') != -1) {
          bracelt_tmp = bracelt_tmp.replace('</font>', "");
        }

        if (bracelt_tmp.indexOf('<br>') != -1) {
          bracelt_tmp = bracelt_tmp.replace('<br>', "");
        }
        cnt ++;
      }
    bracelt_tmp = bracelt_tmp.trim();

    bracelt_effect[a - 1] = bracelt_tmp;
    
    var my_bracelt = '';
    b = 0;
    c = 0;

    for (b ; b < a ; b++) {

        my_bracelt = my_bracelt + '\n' + bracelt_effect[c];
        c = c + 1;

    }
    }
    else {
      my_bracelt = '\n없음';
    }
    
    replier.reply('[' + level[1] + '님의 정보]' + allsee + 
                  '\n서버 : ' + server + 
                  '\n클래스 : ' + classname + 
                  '\n원정대 레벨 : ' + expedition_lv + 
                  '\n장착 아이템 레벨 : Lv.' + equiped_lv + 
                  '\n달성 아이템 레벨 : Lv.' + item_lv + 
                  '\n공격력 : ' + attack_abil + 
                  '\n치명 : ' + critical + 
                  '\n특화 : ' + speciality + 
                  '\n제압 : ' + subdue + 
                  '\n신속 : ' + agility + 
                  '\n인내 : ' + endurance + 
                  '\n숙련 : ' + proficiency + 
                  '\n<각인효과>' + my_engrave + 
                  '\n<팔찌효과>' + my_bracelt
                  );    
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