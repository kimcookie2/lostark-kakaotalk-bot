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
  
  if (msg.indexOf('!스킬 ') != -1) {
    var char = msg.split(' ');

    url = Utils.getWebText("https://www.mgx.kr/lostark/character/?character_name=" + char[1]);
    url = url.toLowerCase();

    // 채용중인 스킬을 담을 리스트
    skills = [];

    var skill = url.split('전투 스킬')[1];

    // 사용 스킬 포인트 / 보유 스킬 포인트
    used_skill_point_start = skill.indexOf('point_number">');
    skill = skill.substr(used_skill_point_start + 14);
    used_skill_point_end = skill.indexOf('</span>');
    used_skill_point = skill.substr(0, used_skill_point_end);
    used_skill_point = used_skill_point.trim();

    total_skill_point_start = skill.indexOf('point_number">');
    skill = skill.substr(total_skill_point_start + 14);
    total_skill_point_end = skill.indexOf('</span>');
    total_skill_point = skill.substr(0, total_skill_point_end);
    total_skill_point = total_skill_point.trim();

    // skills에 스킬정보를 담기
    for (var i = 0; i < 8; i ++) {
      var skill_info = {}

      // 스킬 이름
      skill_name_start = skill.indexOf('skill-data-name">');
      skill = skill.substr(skill_name_start + 17);
      skill_name_end = skill.indexOf('</div>');
      skill_name = skill.substr(0, skill_name_end);
      skill_name = skill_name.trim();
      skill_info.skill_name = skill_name;

      // 스킬 레벨
      skill_level_start = skill.indexOf('level_accent">');
      skill = skill.substr(skill_level_start + 14);
      skill_level_end = skill.indexOf('</span>');
      skill_level = skill.substr(0, skill_level_end);
      skill_level = skill_level.trim();
      skill_info.skill_level = skill_level;

      // 트라이포드
      tripods = [];
      while (skill.indexOf('"tripod_name">') != -1) {
        tmp = 123456789;
        if (skill.indexOf('"tripod_name">')){
          tmp = skill.indexOf('"tripod_name">');
        }        
        if (tmp > skill.indexOf('"skill-data-name">')) {
          break;
        }

        tripod = {}
        tripod_name_start = skill.indexOf('"tripod_name">');
        skill = skill.substr(tripod_name_start + 14);
        tripod_name_end = skill.indexOf(' </div');
        tripod_name = skill.substr(0, tripod_name_end);
        tripod_name = tripod_name.trim();

        tripod_level_start = skill.indexOf('"tripod_level">');
        skill = skill.substr(tripod_level_start + 15);
        tripod_level_end = skill.indexOf(' </div');
        tripod_level = skill.substr(0, tripod_level_end);
        tripod_level = tripod_level.trim();
        
        tripod.tripod_name = tripod_name;
        tripod.tripod_level = tripod_level;
        tripods.push(tripod);
      }
      skill_info.tripods = tripods;

      // 보석
      jewlys = [];
      while (skill.indexOf('"option_name">') != -1) {
        tmp = 123456789;
        if (skill.indexOf('"option_name">')){
          tmp = skill.indexOf('"option_name">');
        }        
        if (tmp > skill.indexOf('"skill-data-name">')) {
          break;
        }

        jewly_name_start = skill.indexOf('"option_name">');
        skill = skill.substr(jewly_name_start + 14);
        jewly_name_end = skill.indexOf(' </div');
        jewly_name = skill.substr(0, jewly_name_end);
        jewly_name = jewly_name.trim();
        
        jewlys.push(jewly_name);
      }
      skill_info.jewlys = jewlys;

      skills.push(skill_info);
    }

    result = '';
    result += '[' + char[1] + '님의 스킬 정보]' + '\n스킬 포인트 : ' + used_skill_point + ' / ' + total_skill_point;

    skills.map((skill) => {
      result += '\n\nLv.' + skill.skill_level + ' ' + skill.skill_name;
      if (skill.tripods) {
        result += '\n-----트라이포드-----'
        skill.tripods.map((tripod) => {
          result += '\n' + tripod.tripod_name + '(' + tripod.tripod_level + ')';
        })
      }
      if (skill.jewlys[0]) {
        result += '\n----------보석----------'
        skill.jewlys.map((jewly) => {
          result += '\n' + jewly;
        })
      }
    })

    replier.reply(result);

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