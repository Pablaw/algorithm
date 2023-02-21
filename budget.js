/* 
1. 주어진 d 배열은 각 요소가 부서별 예산 신청 금액을 의미. 
2. budget은 회사에서 제공할 수 있는 예산 총액.
3. 가장 많은 부서에게 예산을 지급하고 이 때의 지급할 수 있는 부서의 수 구하기
* 각 부서에게 예산을 지급할 때 모자라게 지급할 수 없다.
*/

function solution(d, budget) {
  // 제공할 수 있는 부서의 수를 구하기 위해서 빈 숫자 변수 선언
  let result = 0;
  // 최대로 제공하기 위해 예산금액 오름차순으로 부서 배열 정렬
  let sortArr = d.sort((a, b) => a - b);
  // 부서 배열의 길이만큼 반복하면서 예산 총액이 0과 같거나 큰 경우에만 정렬된 배열 요소 값을 예산 총액에서 차례로 빼기
  for (let i = 0; i < d.length; i++) {
    if (budget - sortArr[i] >= 0) {
      budget = budget - sortArr[i];
      result++;
    } else {
      // 예산 총액보다 부서별 누적 예산 금액이 커지면 반복문을 break로 종료.
      break;
    }
  }
  return result;
}
