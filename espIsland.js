function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (msg.indexOf('!모험섬 ') != -1) {

      var x_date = msg.split(' ')[1];

      reward = ['골드', '실링', '광석', '파편', '숨결', '골드', '실링', '광석', '파편', '숨결'];

      island = [];
      island[1] = ['블루홀 섬', '메데이아'];
      island[2] = ['수라도', '포르페'];
      island[3] = ['기회의 섬', '죽음의 협곡', '쿵덕쿵 아일랜드', '볼라르 섬'];
      island[4] = ['하모니 섬', '쿵덕쿵 아일랜드', '몬테 섬', '스노우팡 아일랜드'];
      island[5] = ['블루홀 섬', '고요한 안식의 섬'];
      island[6] = ['수라도', '메데이아'];
      island[7] = ['기회의 섬', '죽음의 협곡'];
      island[8] = ['포르페', '쿵덕쿵 아일랜드'];
      island[9] = ['볼라르 섬', '몬테 섬', '메데이아'];
      island[10] = ['쿵덕쿵 아일랜드', '죽음의 협곡', '블루홀 섬', '몬테 섬', '하모니 섬'];
      island[11] = ['스노우팡 아일랜드', '기회의 섬', '하모니 섬', '볼라르 섬'];
      island[12] = ['죽음의 협곡', '쿵덕쿵 아일랜드'];
      island[13] = ['하모니 섬', '몬테 섬', '메데이아'];
      island[14] = ['스노우팡 아일랜드', '고요한 안식의 섬'];
      island[15] = ['죽음의 협곡', '항해주화', '수라도', '카드', '환영 나비 섬', '실링'];
      island[16] = ['블루홀 섬', '항해주화', '볼라르 섬', '실링', '죽음의 협곡', '카드'];
      island[17] = ['포르페', '항해주화', '몬테 섬', '실링', '쿵덕쿵 아일랜드', '카드'];
      island[18] = ['우거진 갈대의 섬', '실링', '고요한 안식의 섬', '항해주화', '메데이아', '카드'];
      island[19] = ['스노우팡 아일랜드', '항해주화', '죽음의 협곡', '카드', '수라도', '골드'];
      island[20] = ['고요한 안식의 섬', '실링', '메데이아', '항해주화', '쿵덕쿵 아일랜드', '카드'];
      island[21] = ['블루홀 섬', '카드', '하모니 섬', '항해주화', '볼라르 섬', '실링'];
      island[22] = ['환영 나비 섬', '카드', '우거진 갈대의 섬', '항해주화', '포르페', '실링'];
      island[23] = ['쿵덕쿵 아일랜드', '카드', '스노우팡 아일랜드', '실링', '환영 나비 섬', '항해주화'];
      island[24] = ['기회의 섬', '실링', '메데이아', '골드', '우거진 갈대의 섬', '카드'];
      island[25] = ['볼라르 섬', '실링', '죽음의 협곡', '항해주화', '고요한 안식의 섬', '카드'];
      island[26] = ['쿵덕쿵 아일랜드', '카드', '우거진 갈대의 섬', '실링', '볼라르 섬', '항해주화'];
      island[27] = ['하모니 섬', '골드', '포르페', '실링', '블루홀 섬', '항해주화'];
      island[28] = ['죽음의 협곡', '실링', '메데이아', '카드', '환영 나비 섬', '항해주화'];
      island[29] = ['기회의 섬', '카드', '몬테 섬', '실링', '수라도', '항해주화'];
      island[30] = ['고요한 안식의 섬', '항해주화', '포르페', '골드', '볼라르 섬', '카드'];
      island[31] = ['쿵덕쿵 아일랜드', '항해주화', '몬테 섬', '카드', '수라도', '실링'];

      var now = new Date();
      now.setDate(x_date);
      var now_year = now.getFullYear();
      var now_month = now.getMonth() + 1;
      var now_date = now.getDate();

      today_island = ''

      for (j = 0; j < 6; j = j + 2) {

          today_island += '\n' + island[now.getDate()][j] + ' : ' + island[now.getDate()][j + 1];

      }

      replier.reply('[' + x_date + '일의 모험 섬]' + today_island);

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