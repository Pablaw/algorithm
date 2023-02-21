/* 주어진 배열 nums길이의 1/2만큼 가져갈 수 있는 최대 폰켓몬의 종류 구하기 (nums는 항상 짝수) */

function solution(nums) {
  // 최대로 가져갈 수 있는 폰켓몬 수 구하기
  const num = nums.length / 2;
  // 배열 내 중복 제거하기 및 최대 가져갈 수 있는 폰켓몬 수와 종류 수 비교하기
  return new Set(nums).size > num ? num : new Set(nums).size;
}

//? new Set()는 새로운 set 객체를 반환, set객체는 요소가 유니크한 값을 갖기 때문에 배열을 set 객체로 변환할 경우 중복값을 제거할 수 있다.

//! [...new Set(arr)] 전개 연산자를 통해서 새로운 배열로 반환할 수도 있지만 단순히 배열의 길이가 필요한 경우에 new Set(arr).size 처럼 Set 객체의 속성 size를 이용해서 길이를 구할 수 있다.
