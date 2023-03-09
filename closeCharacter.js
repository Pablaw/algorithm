function solution(s) {
  // 반복문 사용을 위해서 주어진 문자열 배열화
  let stringArr = s.split("");
  // 빈 배열을 선언하고 탐색 후 문자열을 요소로 모아서 주어진 문자열과 차례로 탐색, 비교하기 위해 사용
  let prevArr = [];
  // 탐색 결과 값에 따라서 조건에 해당하는 인덱스를 반환하기 위해 빈 배열 선언
  let answer = [];
  // 반복문을 사용해서 stringArr 요소를 차례로 prevArr 배열의 요소와 비교해서 조건에따라서 answer 배열에 삽입
  for (item of stringArr) {
    if (prevArr.lastIndexOf(item) === -1) {
      // prevArr 배열에 해당 문자가 없을 경우 answer 배열에 -1 값 삽입
      answer.push(-1);
    } else {
      // prevArr 배열에 해당 문자가 존재한다면 가장 가까운 인덱스 값을 구하기 위해 push 속성으로 가장 나중에 삽입 되었기 때문에 lastIndexOf 속석으로 인덱스 구하기
      answer.push(prevArr.length - prevArr.lastIndexOf(item));
    }
    // 비교 후 prevArr 배열로 문자열 삽입
    prevArr.push(item);
  }
  return answer;
}
// map을 이용하는 방법 중 배열 인덱스 값으로 map 인덱스 값에서 빼서 구하는 방법과 문자열을 slice() 속성을 사용해서 map 인덱스를 활용하는 방법이 있다.
