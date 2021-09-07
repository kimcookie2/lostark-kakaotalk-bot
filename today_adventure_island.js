function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (msg.indexOf('!모험섬') != -1) {

      // !모험섬 이후 띄어쓰기가 들어가면 종료 => 특정일 모험섬과 겹치지 않기 위해
      if (msg.substring(4, 5) == ' ') {
          return 0;
      }

      // 각 일마다 모험섬, 보상을 순차적으로 입력
      island = [];
      island[1] = ['블루홀 섬', '항해주화', '메데이아', '카드', '스노우팡 아일랜드', '실링', '하모니 섬', '카드', '고요한 안식의 섬' , '실링', '죽음의 협곡', '항해주화'];
      island[2] = ['볼라르 섬', '항해주화', '메데이아', '카드', '포르페', '실링'];
      island[3] = ['쿵덕쿵 아일랜드', '실링', '환영 나비 섬', '골드', '블루홀 섬', '카드'];
      island[4] = ['몬테 섬', '카드', '죽음의 협곡', '실링', '하모니 섬', '항해주화'];
      island[5] = ['스노우팡 아일랜드', '항해주화', '기회의 섬', '카드', '수라도', '실링'];
      island[6] = ['몬테 섬', '카드', '하모니 섬', '항해주화', '쿵덕쿵 아일랜드', '실링'];
      island[7] = ['고요한 안식의 섬', '카드', '환영나비 섬', '항해주화', '우거진 갈대의 섬', '실링'];
      island[8] = ['메데이아', '골드', '블루홀 섬', '항해주화', '몬테 섬', '실링'];
      island[9] = ['수라도', '실링', '볼라르 섬', '항해주화', '고요한 안식의 섬', '카드'];
      island[10] = ['포르페', '항해주화', '기회의 섬', '카드', '메데이아', '실링'];
      island[11] = ['하모니 섬', '실링', '죽음의 협곡', '항해주화', '우거진 갈대의 섬', '카드', '스노우팡 아일랜드', '항해주화', '환영 나비 섬', '실링', '쿵덕쿵 아일랜드', '카드'];
      island[12] = ['스노우팡 아일랜드', '카드', '환영 나비 섬', '골드', '우거진 갈대의 섬', '항해주화', '죽음의 협곡', '항해주화', '쿵덕쿵 아일랜드', '실링', '블루홀 섬', '카드'];
      island[13] = ['포르페', '항해주화', '메데이아', '카드', '기회의 섬', '실링'];
      island[14] = ['하모니 섬', '항해주화', '몬테 섬', '실링', '수라도', '카드'];
      island[15] = ['고요한 안식의 섬', '골드', '볼라르 섬', '카드', '스노우팡 아일랜드', '실링'];
      island[16] = ['메데이아', '실링', '우거진 갈대의 섬', '항해주화', '죽음의 협곡', '카드'];
      island[17] = ['하모니 섬', '항해주화', '기회의 섬', '실링', '몬테 섬', '골드'];
      island[18] = ['환영 나비 섬', '항해주화', '쿵덕쿵 아일랜드', '실링', '포르페', '카드', '블루홀 섬', '카드', '고요한 안식의 섬', '항해주화', '수라도' ,'실링'];
      island[19] = ['볼라르 섬', '카드', '쿵덕쿵 아일랜드', '항해주화', '몬테 섬', '실링', '하모니 섬', '실링', '환영 나비 섬', '카드', '메데이아', '골드'];
      island[20] = ['수라도', '항해주화', '볼라르 섬', '실링', '고요한 안식의 섬', '카드'];
      island[21] = ['우거진 갈대의 섬', '항해주화', '블루홀 섬', '실링', '죽음의 협곡', '카드'];
      island[22] = ['포르페', '카드', '스노우팡 아일랜드', '항해주화', '기회의 섬', '골드'];
      island[23] = ['환영 나비 섬', '항해주화', '몬테 섬', '카드', '블루홀 섬', '실링'];
      island[24] = ['죽음의 협곡', '항해주화', '스노우팡 아일랜드', '카드', '수라도', '실링'];
      island[25] = ['우거진 갈대의 섬', '카드', '메데이아', '실링', '하모니 섬', '항해주화', '볼라르 섬', '항해주화', '기회의 섬', '골드', '쿵덕쿵 아일랜드', '실링'];
      island[26] = ['고요한 안식의 섬', '실링', '포르페', '항해주화', '스노우팡 아일랜드', '카드', '몬테 섬', '실링', '기회의 섬', '항해주화', '메데이아', '카드'];
      island[27] = ['우거진 갈대의 섬', '카드', '죽음의 협곡', '골드', '볼라르 섬', '실링'];
      island[28] = ['블루홀 섬', '항해주화', '쿵덕쿵 아일랜드', '실링', '하모니 섬', '카드'];
      island[29] = ['포르페', '항해주화', '환영 나비 섬', '카드', '수라도', '실링'];
      island[30] = ['고요한 안식의 섬', '골드', '기회의 섬', '항해주화', '하모니 섬', '카드'];

      var now = new Date();
      
      today_island1 = ''  // 주말 오전 모험섬 저장
      today_island2 = ''  // 주말 오후 모험섬 저장
      today_island = ''   // 평일 모험섬 저장

      // now 가 주말이라면
      if (now.getDay() == 0 || now.getDay() == 6) {

          // 모험섬을 3개씩 나눠서 today_islan1, 2에 오전, 오후를 각각 저장
          for (j = 0; j < 6; j = j + 2) {
              today_island1 += '\n' + island[now.getDate()][j] + ' : ' + island[now.getDate()][j + 1];
          }
          for (j = 6; j < 12; j = j + 2) {
              today_island2 += '\n' + island[now.getDate()][j] + ' : ' + island[now.getDate()][j + 1];
          }
          replier.reply('[오늘의 모험 섬]' + today_island1 + '\n등장 시간 : 09:00, 11:00, 13:00' + today_island2 + '\n등장 시간 : 19:00, 21:00, 23:00');
      }

      // now 가 평일이라면
      else {

          // 모험섬 3개를 바로 today_island 에 저장
          for (j = 0; j < 6; j = j + 2) {
              today_island += '\n' + island[now.getDate()][j] + ' : ' + island[now.getDate()][j + 1];
          }
          replier.reply('[오늘의 모험 섬]' + today_island);
      }
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