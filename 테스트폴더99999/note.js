// function ABCheck(str) {

// if (str === undefined) {
//   return false;
// }

// str = str.toLowerCase();
// console.log("입력받은 문자열을 소문자로!:",str);

// for (let i = 4; i < str.length; i++) {
//   if ((str[i] === 'a' && str[i - 4] === 'b') || (str[i] === 'b' && str[i - 4] === 'a')) {
//     console.log(i);
//     console.log("입력받은 문자열의 i번째 순번의 값은 : ",str[i]);
//     console.log("입력받은 문자열의 i-4번째 순번의 값은 :",str[i-4]);
//     return true;
//   }
// }

// return false;

// }


// let output = ABCheck('aMAJ7sBrO4CyysuoHFrgGTX');
// console.log(output);


// const dummyTweets = [
//   {
//     id: 1,
//     username: 'kimcoding',
//     content:
//       '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
//     createdAt: '2022-02-24T16:17:47.000Z',
//     updatedAt: '2022-02-24T16:17:47.000Z',
//   },
//   {
//     id: 2,
//     username: 'parkhacker',
//     content:
//       '형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.',
//     createdAt: '2022-02-25T16:17:47.000Z',
//     updatedAt: '2022-02-25T16:17:47.000Z',
//   },
//   {
//     id: 3,
//     username: 'leedesign',
//     content:
//       '모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 모든 국민은 양심의 자유를 가진다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 연소자의 근로는 특별한 보호를 받는다. 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.',
//     createdAt: '2022-02-26T16:17:47.000Z',
//     updatedAt: '2022-02-26T16:17:47.000Z',
//   },
//   {
//     id: 4,
//     username: 'songfront',
//     content:
//       '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다.',
//     createdAt: '2022-02-27T16:17:47.000Z',
//     updatedAt: '2022-02-27T16:17:47.000Z',
//   },
//   {
//     id: 5,
//     content:
//       '주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 모든 국민은 주거의 자유를 침해받지 아니한다.',
//     createdAt: '2022-02-28T16:17:47.000Z',
//     updatedAt: '2022-02-28T16:17:47.000Z',
//   },
// ];


// let Tweet = dummyTweets.map(()=>console.log());

// console.log(Tweet);
// // console.log(dummyTweets[0])


// function removeExtremes(arr) {
//   // 배열의 최대길이
//   let shortestLen = 20;
//   // 배열의 최소길이
//   let longestLen = 0;
//   //  배열 최대길이의 인덱스
//   let longestIdx = 0;
//   //  배열 최소길이의 인덱스
//   let shortestIdx = 0;

//   //  받은 arr의 길이만큼반복
//   for (let i = 0; i < arr.length; i++) {
//     // 만약 arr i번째의 길이가 지정해놓은 최대길이보다크다면
//     if (arr[i].length >= longestLen) {
//       // 지정해놓은 최대길이에 할당
//       longestLen = arr[i].length;
//       console.log("최대길이:",longestLen);
//       // 지정해놓은 인덱스에 최대길이의 인덱스 할당
//       longestIdx = i;
//       console.log("최대길이인덱스:",longestIdx);
//       console.log("__")
//     }

//     // 위와같음
//     if (arr[i].length <= shortestLen) {
//       shortestLen = arr[i].length;
//       console.log("최소길이:",shortestLen);
//       shortestIdx = i;
//       console.log("최소길이인덱스:",shortestIdx);
//       console.log("__")
//     }
//   }

//   // 최대, 최소를 담기위한 빈배열 선언
//   let result = [];
//   //다시 받은 배열의 길이만큼반복
//   for (let i = 0; i < arr.length; i++) {
//     // i가 최소 인덱스와 같지 않고 i가 최대 인덱스와 같지않으면
//     if (i !== shortestIdx && i !== longestIdx) {
//       // 선언해놓은 빈배열에 추가
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }


// let output = removeExtremes(['a', 'b', 'c', 'def']);
// // console.log(output); // --> ['a', 'b']

// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); // --> ['where', 'the', 'word',]


//   function readVertically(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 배열안의 값을 순회돌면서 첫번째값들은 먼저넣는다
//   // arr[0][0], arr[1][0] , arr[0][1], arr[1][1]
//   // 1. arr 0번째 요소인 hello를 str변수에
//   // 2. j for문에서 5의길이만큼 반복
  
  
//    let temp = [];
//    console.log('temp:',temp);
//     for (let i = 0; i < arr.length; i++) {
//       let str = arr[i];
//       console.log('str:',str);
//       for (let j = 0; j < str.length; j++) {
//         if (temp.length === j) {
//           console.log(temp.length === j)
//           temp.push(str[j]);
//           console.log(temp.push(str[j]));
//         } else {
//           temp[j] = temp[j] + str[j];
//         }
//       }
//     }
  
//     let result = '';
//     for (let i = 0; i < temp.length; i++) {
//       result = result + temp[i];
//     }
  
//     return result;
    
//   }

// let input = [
//   //
//   'hello',
//   'wolrd',
// ];
// let output = readVertically(input);
// console.log(output); // --> 'hweolllrod'

let pass = true;

pass = pass && false

console.log(pass)