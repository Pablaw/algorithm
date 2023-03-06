function solution(wallpaper) {
  // 답으로 제출할 집합 변수 선언
  let result = [];
  // 문자열 속성 indexOf를 이용해서 "#"포함 여부와 인덱스 탐색 후 오름차순 정렬, 찾는 값이 없을 경우 -1 예외 처리 필터
  let firstIdxArr = wallpaper
    .map((element) => element.indexOf("#"))
    .sort((a, b) => a - b)
    .filter((element) => element !== -1);
  // 문자열 속성 lastIndexOf를 이용해서 "#"포함 여부와 인덱스 탐색 후 내림차순 정렬, 찾는 값이 없을 경우 -1 예외 처리 필터
  let lastIdxArr = wallpaper
    .map((element) => element.lastIndexOf("#"))
    .sort((a, b) => b - a)
    .filter((element) => element !== -1);
  // 주어진 집합 내 요소 중 문자열 "#"을 포함하는 가장 인덱스가 작은 값을 반복문을 사용해서 탐색 후 문자열 속성으로 구한 인덱스 값 차례로 result 답안 배열에 삽입 후 반복문 종료
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].indexOf("#") !== -1) {
      result.push(i);
      result.push(firstIdxArr[0]);
      break;
    }
  }
  // 주어진 집합 내 요소 중 문자열 "#"을 포함하는 가장 인덱스가 큰 값을 반복문을 사용해서 탐색(위와 역순으로 진행) 후 문자열 속성으로 구한 인덱스 값 차례로 result 답안 배열에 삽입 후 반복문 종료
  for (let i = wallpaper.length; i > 0; i--) {
    if (wallpaper[i - 1].indexOf("#") !== -1) {
      result.push(i);
      result.push(lastIdxArr[0] + 1);
      break;
    }
  }
  return result;
}
