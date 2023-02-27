function solution(n, lost, reserve) {
  // 답을 구하기 위해서 변수 선언.
  let sum = n - lost.length;
  // 배열을 순서대로 비교하기 위해서 오름차순 정렬
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  // 번호가 같은 경우에는 다시 사용되지 않도록 우선적으로 계산
  // 같은 값 비교 후 두가지 배열에서 map을 통해 같은 값을 지닌 요소 값을 변경하기 위해서 변수 선언.
  // 배열 길이를 유지하기 위해 같은 값을 NaN으로 대체
  // 동일한 값이 있을 때마다 결과값(sum) +1씩 증가
  for (let i = 0; i < lost.length; i++) {
    if (reserve.find((num) => num === lost[i])) {
      let corrNum = lost[i];
      lost = lost.map((num) => (num === corrNum ? (num = NaN) : num));
      reserve = reserve.map((num) => (num === corrNum ? (num = NaN) : num));
      sum += 1;
    }
  }
  // 번호가 같은 경우를 제외하고 앞(-1), 뒤(+1) 번호가 같은지 값 비교
  // 비교 후 처리는 위의 코드와 같이 배열 길이를 유지하며 값을 NaN으로 대체
  // 앞, 뒤 번호에 동일한 값이 있을 때마다 결과값(sum) +1씩 증가
  for (let i = 0; i < lost.length; i++) {
    if (reserve.find((num) => num === lost[i] - 1)) {
      let corrNum = lost[i] - 1;
      sum += 1;
      reserve = reserve.map((num) => (num === corrNum ? (num = NaN) : num));
      lost = lost.map((num) => (num === corrNum ? (num = NaN) : num));
    } else if (reserve.find((num) => num === lost[i] + 1)) {
      let corrNum = lost[i] + 1;
      sum += 1;
      reserve = reserve.map((num) => (num === corrNum ? (num = NaN) : num));
      lost = lost.map((num) => (num === corrNum ? (num = NaN) : num));
    }
  }
  return sum;
}

solution(5, [2, 4], [1, 3, 5]);
