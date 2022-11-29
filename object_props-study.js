/* 1-1. 조건문(if문)을 이용해서 객체의 속성이 undefined와 일치하는지 확인 */

/* 속성 존재 여부를 찾아볼 객체 */
const object = {
  name: "혼자 공부하는 자바스크립트",
  price: 18000,
  publisher: "한빛미디어",
};
/* 없는 속성에 접근할 경우 나타나는 값(undefined)을 이용해서 존재여부 확인 */
if (object.name !== undefined) {
  console.log("name 속성이 존재");
} else {
  console.log("name 속성이 없음");
}
// 출력 값: name 속성이 존재

if (object.author !== undefined) {
  console.log("author 속성이 존재");
} else {
  console.log("author 속성이 없음");
}
// 출력 값: author 속성이 없음

/* 1-2.  조건문(if문)을 이용해서 속성이 있을 경우 true,
        없을 경우 false 점을 이용하기 */

/* 객체 내부에 속성이 있는지 확인 */
if (object.name) {
  console.log("name 속성이 존재");
} else {
  console.log("name 속성이 없음");
}
// 출력 값: name 속성이 존재
if (object.author) {
  console.log("author 속성이 존재");
} else {
  console.log("author 속성이 없음");
}
// 출력 값: author 속성이 없음

/* 단, 속성이 false, 0, ""빈문자열 등으로 변환되는 경우 사용할 수 없음 */

/* 1-3. 논리연산자 OR(||)를 이용해서 존재여부 파악하기 */
object.name || console.log("name 속성이 없음");
// 출력 값: '혼자 공부는 자바스크립트'
object.author || console.log("author 속성이 없음");
// 출력 값: author 속성이 없음

/* 2-1. 객체에 해당 속성이 없을 경우, 기본 속성 지정하기(조건문 형식) */

object.name = object.name !== undefined ? object.name : "제목 미정";
object.author = object.author !== undefined ? object.author : "저자 미상";
console.log(JSON.stringify(object, null, 2));

/* 2-2. 객체에 해당 속성이 없을 경우, 기본 속성 지정하기(논리연산자 형식) */

object.name = object.name || "제목 미정";
object.author = object.author || "작자 미상";
console.log(JSON.stringify(object, null, 2));

// /* JSON.stringify() 메소드 예시 */
// const object = {
//   name: "혼자 공부는 자바스크립트",
//   price: 18000,
//   publisher: "한빛미디어",
// };

// console.dir(JSON.stringify(object, ["name", "price"], 2));

/* 객체 다중할당 */
// const { name, price } = object;
// const { objName = name, objPrice = price } = object;
// console.log(objName, objPrice);

/* 배열의 다중할당 */
// let [a, b] = [1, 2];
// console.log(a, b);
// // 실행 값: 1 2

// /* 배열의 다중할당 */
// let [a, b] = [1, 2];
// [a, b] = [b, a];
// console.log(a, b);
// // 실행 값: 2 1

/* 배열의 다중할당 */
// let arrayA = [1, 2, 3, 4, 5];
// const [a, b, c] = arrayA;
// console.log(a, b, c);
// 실행 값: 1 2 3

/* 객체의 다중할당 */

// 기본 형태, 객체에서 속성꺼내서 다중할당하기
// { 속성 이름, 속성 이름 } = 객체
// { 식별자(상수, 변수) = 속성 이름, 식별자(상수, 변수) = 속성 이름 } = 객체

const obj = {
  name: "혼자 공부하는 자바스크립트",
  price: 18000,
  publisher: "한빛미디어",
};
const { name, price } = obj;
const { a = name, b = price } = obj;
console.log(a, b);
// 결과 값: 혼자 공부하는 자바스크립트 18000
