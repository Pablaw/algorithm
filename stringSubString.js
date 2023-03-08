function solution(t, p) {
  // 주어진 문자열 길이만큼 만들어진 요소들을 모아두기 위해서 빈배열 선언
  let result = [];
  // 반복문 함수를 실행해서 p문자열 길이만큼 새로운 문자열 만들기 위해서 빈배열 선언
  let newString = [];
  // 숫자문자열 p 보다 작은 숫자(result에 삽입된 요소들)를 카운트하기 위해서 사용
  let answer = 0;
  // 주어진 숫자 문자열 t를 p문자열 길이만큼 잘라서 가공하기 위해서 반복문을 함수로 선언
  // p길이와 일치하는 새로운 문자열이 만들어지면 t에서는 해당 길이만큼 substring 속성으로 제거
  const numIterator = () => {
    for (let i = 0; i <= t.length; i++) {
      if (newString.length < p.length) {
        newString.push(t[i]);
      } else {
        result.push(newString);
        newString = [];
        t = t.substring(1, t.length);
        break;
      }
    }
  };
  // t문자열이 p문자열보다 크거나 같다면 새로운 문자열을 만드는 함수를 반복해서 실행
  for (num of t.split("")) {
    if (t.length >= p.length) numIterator();
  }
  // 새롭게 만들어진 문자열이 모인 result 배열을 반복문을 사용해서 p 크기와 비교하여 작거나 같다면 카운트
  for (num of result) {
    Number(num.join("")) <= Number(p) ? (answer += 1) : answer;
  }
  return answer;
}
// 단순히 카운트가 필요한 문제이기 때문에 문자열이 새롭게 가공되는 과정에서 카운트 할 수 있다면 코드가 간결해질 수 있다.
