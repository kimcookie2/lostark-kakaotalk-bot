function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (msg.indexOf('!모험섬') != -1) {
    // !모험섬 이후 띄어쓰기가 들어가면 종료 => 특정일 모험섬과 겹치지 않기 위해
    if (msg.substring(4, 5) == ' ') {
        return 0;
    }

    url = Utils.getWebText("https://loawa.com/");
    url = url.toLowerCase();

    var adventure_island = url.split('오늘의 모험섬')[1];
    island_list = [];
    award_list = [];

    for (i = 0; i < 3; i++) {
        // 이름 찾기
        name_start = adventure_island.indexOf('alt="');
        adventure_island = adventure_island.substr(name_start + 5);
        name_end = adventure_island.indexOf('"');
        var name = adventure_island.substr(0, name_end);
        island_list.push(name);

        // 다음 값 스킵
        name_start = adventure_island.indexOf('alt="');
        adventure_island = adventure_island.substr(name_start + 5);

        // 보상 찾기
        reward_start = adventure_island.indexOf('alt="');
        adventure_island = adventure_island.substr(reward_start + 5);
        reward_end = adventure_island.indexOf('"');
        var reward = adventure_island.substr(0, reward_end);
        award_list.push(reward);

        // 다음 값 스킵
        reward_start = adventure_island.indexOf('alt="');
        adventure_island = adventure_island.substr(reward_start + 5);
    }

    result = '[오늘의 모험섬]';

    for (i = 0; i < 3; i++) {
        result += '\n' + island_list[i] + ' : ' + award_list[i];
    }

    replier.reply(result);

    // today_island1 = ''  // 주말 오전 모험섬 저장
    // today_island2 = ''  // 주말 오후 모험섬 저장
    // today_island = ''   // 평일 모험섬 저장

    // // now 가 주말이라면
    // if (now.getDay() == 0 || now.getDay() == 6) {
    //     // 모험섬을 3개씩 나눠서 today_islan1, 2에 오전, 오후를 각각 저장
    //     for (j = 0; j < 6; j = j + 2) {
    //         today_island1 += '\n' + island[now.getDate()][j] + ' : ' + island[now.getDate()][j + 1];
    //     }
    //     for (j = 6; j < 12; j = j + 2) {
    //         today_island2 += '\n' + island[now.getDate()][j] + ' : ' + island[now.getDate()][j + 1];
    //     }
    //     replier.reply('[오늘의 모험 섬]' + today_island1 + '\n등장 시간 : 09:00, 11:00, 13:00' + today_island2 + '\n등장 시간 : 19:00, 21:00, 23:00');
    // }
    // // now 가 평일이라면
    // else {
    //     // 모험섬 3개를 바로 today_island 에 저장
    //     for (j = 0; j < 6; j = j + 2) {
    //         today_island += '\n' + island[now.getDate()][j] + ' : ' + island[now.getDate()][j + 1];
    //     }
    //     replier.reply('[오늘의 모험 섬]' + today_island);
    // }
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