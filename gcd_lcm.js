function solution(n, m) {
  /* 최대공약수 = 공통의 약수 중에서 가장 큰 수 */
  let GCD = 1;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  // 1. 공통의 약수 중 작은 수를 구해야 하니깐 주어진 수 중에서 작은 정수 값만큼만 반복문 실행
  // 2. 반복문 내에서 조건을 설정해서 모두 참인 경우를 최대 공약수로 할당
  /* 최소공배수 = 주어진 수와 같거나 큰 공통 배수 중 가장 작은 정수 */
  let LCM = 1;
  while (true) {
    if (LCM % n === 0 && LCM % m === 0) {
      break;
    }
    LCM++;
  }
  return [GCD, LCM];
}
