function solution(cards1, cards2, goal) {
  // goal 문자열과 비교 후 일치하는 단어를 요소로 삽입하기 위해 빈 배열 선언
  let result = [];
  // 답으로 제출할 문자열("Yes", "No")을 사용하기 위해 빈 문자열 선언
  let answer = "";
  // 목표 문자열 for 반복문을 사용해서 cards1 배열과 cards2 배열 내 요소와 일치하는 것이 있는지 if 조건문으로 확인 후 둘다 없는 경우는 answer를 "No"로 할당하고 반복문 종료
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      result.push(cards1.shift());
    } else if (goal[i] === cards2[0]) {
      result.push(cards2.shift());
    } else {
      answer = "No";
      break;
    }
  }
  // 위 반복문에서 조건으로 분기되어 모든 goal 요소가 result 배열에 추가된다면 길이가 같기 때문에 같을 경우에는 "Yes"를 answer 문자열에 재할당, 다를 경우에는 기존 값 유지
  result.length === goal.length ? (answer = "Yes") : (answer = answer);
  return answer;
}
