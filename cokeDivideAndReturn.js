function solution(a, b, n) {
  // 숫자를 더해서 답을 제출하기 위해 변수 선언
  let answer = 0;
  // 남은 빈병을 리턴 조건 개수 a로 나눈 값이 1개 이상이면 돌려받을 수 있기 때문에 해당 조건이 참일 경우 반복
  while (n / a >= 1) {
    // 남은 빈병을 조건 개수로 나눌 때 나누어 떨어진다면 리턴 개수 b를 곱해서 돌려받은 개수 더하기 및 빈병으로 변수 갱신
    if (n % a === 0) {
      answer += (n / a) * b;
      n = (n / a) * b;
    } else {
      // 나누어 떨어지지 않는다면 빈병 반납 후 남는 빈병이 존재하기 때문에 돌려받은 개수 더하기 남는 빈병 더하기
      answer += Math.floor(n / a) * b;
      n = Math.floor(n / a) * b + (n % a);
    }
  }
  return answer;
}
