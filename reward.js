const scriptName = "보상목록";
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
  
  island_array = ['5', '상급 능력치 증가 물약', '10', ' 감정 표현 : 위협', '15', '고급 원목 나침반', '20', '상급 스킬 포인트 물약', 
    '25', '탈 것 : 황금이끼 거북', '30', '위대한 미술품 #3', '35', '감정 표현 : 파도의 춤', '40', '영롱한 아쿠아마린', 
    '45', '기에나의 가호', '50', '룬 : 영웅 수호', '55', '위대한 미술품 # 22', '60', '모험물 지도 : 대왕 조개', 
    '65', '물결의 아쿠아마린', '70', '설치물 : 조화의 여신상', '75', '위대한 미술품 # 38', '80', '선박스킨 : 토토이크 아롱거북', 
    '85', '모험물 지도 : 여인의 얼음 조각상', '90', '파도의 아쿠아마린', '95', '설치물 : 프로키온 석상'
  ];

  mococo_array = ['50', '토토마 카드', '100', '친절 증가 물약', '150', '영지 선원 : 치카치카', '200', '체력 증가 물약',
    '250', '해양 선원 : 코코리코', '300', '능력치 증가 물약', '350', '모카모카 카드', '400', '낙원의 기사 자격증',
    '450', '프뉴마 설계도 X 15', '500', '영지 선원 : 무코무코', '550', '수줍은 바람꽃가루 X 3', '600', '프뉴마 설계도 X 20',
    '650', '해양 선원 : 포이포이', '700', '칭호  "모코코 사냥꾼"', '750', '설치물 : 모코코 씨앗 기념비', '800', '변신 : 창조의 알',
    '850', '영지 선원 : 다정한 파루루', '900', '벽지 : 모코코 마을', '950', '위대한 미술품 #32', '1000', '선박 스킨 : 블루밍 프뉴마',
    '1050', '해양 선원 : 나리나리', '1100', '칭호  "기분좋은 향기"', '1150', '위대한 미술품 #44', '1200', '변신 : 모코코 씨앗',
    '1250', '별난 모코코 이모티콘 팩'
  ];
  
  ignea_array = ['1', '탈 것 : 하얀 동글 풍뎅이', '2', '모코코의 프라이팬', '3', '영롱한 기운', '4', '최상급 체력 증가 물약',
    '5' ,'룬 : 영웅 정화' ,'6', '진저웨일 카드', '7', '최상급 능력치 증가 물약' ,'8', '상급 스킬 포인트 물약',
    '9' ,'비프로스트의 열쇠', '10' ,'데런 아만 카드', '11', '칭호 "아크라시아의 순례자"', '12', '설치물 : 이그네아',
    '13', '탈 것 : 황금 테르페이온', '14', '벽지 : 안식의 정원', '15', '룬 : 전설 정화'
  ];
  
  art_array = ['2'   ,'영혼의 잎사귀 X 30',   '4'   ,'감정 표현 : 뽐내기'   ,'6',   '고급 카드 팩 X 3'   ,'8'   ,'체력 증가 물약',
    '10',   '해바라기 섬의 마음'   ,'12',   '영겁의 정수 X 20'   ,'14',   '능력치 증가 물약',   '16',   '희귀 카드 팩 X 3',
    '18',   '설치물 : 푸른 언덕',   '20'   ,'위대한 미술가의 보화 상자(3,000골드)',   '22',   '태초의 조각 X 15',   '24',   '룬 :  영웅 단죄',
    '26'   ,'영웅 카드 팩',   '28',   '설치물 : 풍등이 빛나는 밤에',   '30',   '위대한 미술가의 보화 상자(5,000골드)',   '32',   '메넬리크의 서 X 10',
    '34',   '위대한 미술가의 보화 상자(8,000골드)',   '36',   '웨이 카드',   '38',   '위대한 미술가의 보화 상자(13,000골드)',   '40',   '칭호 : 미술품 애호가',
    '42',   '설치물 : 여신의 가호'   ,'44',   '룬: 전설 심판',   '46'   ,'가디언 루 카드',   '48',   '위대한 인생의 걸작',
    '50', '전설 카드 팩', '52', '위대한 미술가의 보화 상자(20,000골드)', '54', '메넬리크의 서 X 15', '56', '상급 능력치 증가 물약', '58', '룬 : 전설 철벽',
    '60', '펫 : 앙드레 산쵸'
  ];

  gient_array = ['1'   ,'능력치 증가 물약',   '2'   ,'지성 증가 물약',   '3'   ,'공명하는 거인의 심장(지혜의 섬의 마음)'   ,'4',   '스킬 포인트 물약',
    '5',   '룬 : 희귀 풍요'   ,'6'   ,'스킬 포인트 물약',   '7',   '체력 증가 물약',   '8',   '변신 : 토토이끼',
    '9',   '위대한 미술품 #21'   ,'10'   ,'스킬 포인트 물약',   '11',   '위대한 미술품 #33'   ,'12'   ,'스킬 포인트 물약',
    '13', '룬 : 영웅 집중', '14', '다시금 공명하는 거인의 심장(거인의 심장 #15)', '15', '거인의 비밀 상자'
  ];

  sea_array = ['2',   '모험가의 재화 상자'   ,'4'   ,'해양 선원 : 미카엘',   '6'   ,'모험가의 재화 상자',   '8'   ,'해양 선원 : 벤더빌',
    '10',   '능력치 증가 물약',   '12',   '모험가의 재화 상자',   '14',   '해양 선원 : 설리'   ,'16',   '모험가의 재화 상자',
    '18',   '해양 선원 : 은광'   ,'20',   '칭호 : 일등 항해사'   ,'22',   '모험가의 재화 상자',   '24',   '변신 : 갈매기',
    '26',   '크림스네일의 빛나는 동전 X 5'   ,'28',   '해양 선원 : 에드워드',   '30',   '위대한 미술품 #23',   '32',   '모험가의 재화 상자',
    '34',   '룬 : 영웅 풍요',   '36',   '칭호 "서풍의 지휘자"',   '38'   ,'위대한 미술품 #39', '40'   ,'심연의 눈물 X 2',
    '42', '룬 : 전설 집중', '44',   '심연의 눈물 X 2', '46', '모험가의 재화 상자'
  ];

  star_array = ['1'   ,'능력치 증가 물약'   ,'2',   '상급 스킬 포인트 물약'   ,'3'   ,'룬 : 영웅 압도',   '4',   '상급 능력치 증가 물약',
    '5',   '룬 : 전설 풍요',   '6',   '상급 스킬 포인트 물약'   ,'7'   ,'룬 : 전설 수호', '8', '오르페우스의 별빛', 
    '9', '상급 체력 증가 물약', '10', '부서진 별의 조각'
  ];

  leaf_array = ['6'   ,'숙련 전체 생활 경험치 물약 X 5',   '12',   '은은한 원석 부적',   '18',   '숙련가용 제작 키트 X6'   ,'24'   ,'위대한 미술품 #11',
    '30',   '변신 : 토끼',   '36',   '은은한 시트린',   '42'   ,'칭호 "생활의 달인"'   ,'48'   ,'침묵의 시트린',
    '54',   '변신 : 채집물'   ,'60',   '설치물 : 세계수의 잎',   '66',   '변신 : 생선',   '72'   ,'고요한 시트린'
  ];
  
  trade = ['<교환처 : 외로운 섬 오페르 - 오페르 할아버지>', 
    '<교환처 : 토토이크, 모코코 마을 - 토토마>', 
    '<교환처 : 대도시 - 버드>', 
    '<교환처 : 해바라기 섬 - 알폰스 베디체>', 
    '<교환처 : 지혜의 섬 - 미네르바>', 
    '<교환처 : 해상 낙원 페이토 - 혹등고래 바티우스>', 
    '<교환처 : 파푸니카 - 알비온>'
  ];

  array_group = [island_array, mococo_array, ignea_array, art_array, gient_array, sea_array, star_array, leaf_array];

  if (msg.indexOf('!보상 ') != -1) {
    var collection = msg.split(' ');
    var array_num;
    var j;
    switch (collection[1]) {
      case "섬마":
        array_num = 0;
        break;
      case "모코코":
        array_num = 1;
        break;
      case "이그네아":
        array_num = 2;
        break;
      case "미술품":
        array_num = 3;
        break;
      case "거심":
        array_num = 4;
        break;
      case "모험물":
        array_num = 5;
        break;
      case "오페별":
        array_num = 6;
        break;
      case "세계수":
        array_num = 7;
        break;
      default:
        return;
    }

    var k = 0;
    var final_reward = '[' + collection[1] + '보상 목록]' + allsee + '\n' + trade[array_num];
    var l = 0;

    j = ((array_group[array_num].length) / 2) ;
    for (k ; k < j ; k++) {
      final_reward = final_reward + '\n' + array_group[array_num][l] + '개 - ' + array_group[array_num][l + 1];
      l = l + 2;
    }

    replier.reply(final_reward);
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