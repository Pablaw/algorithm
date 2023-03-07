function solution(number) {
  // 답안 제출을 위해서 빈 숫자 변수 선언
  let answer = 0;
  // 주어진 배열(number)내 요소 3개를 더해서 0이 되는 값을 찾기 위해서 반복문 사용, 각기 다른 3개의 요소를 더하기 위해서 삼중 for문 사용.. 시간복잡도 측면에서 성능이 안좋음.
  // 다만 문제 조건에서 number 배열의 길이가 13이하로 주어져서 사용 가능
  for (let i = 2; i < number.length; i++) {
    for (let j = 1; j < i; j++) {
      for (let k = 0; k < j; k++) {
        number[i] + number[j] + number[k] === 0 ? (answer += 1) : answer;
      }
    }
  }
  return answer;
}
