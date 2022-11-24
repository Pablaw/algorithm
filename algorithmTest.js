/* 1번 하. 윷놀이 */
// function solution(arr1){
//     let baeLength = arr1.filter(element => element === 0).length;
//     if (baeLength === 1) {
//         return '도';
//     } else if (baeLength === 2) {
//         return '개';
//     } else if (baeLength === 3) {
//         return '걸';
//     } else if (baeLength === 4) {
//         return '윷';
//     } else if (baeLength === 0) {
//         return '모';
//     } 
// }
/* 지정입력 값 */
// let arr1=[0,0,0,1];
// console.log(solution(arr1)) // 걸
/* 테스트 케이스 1 */
// let arr1=[0,1,0,1];
// console.log(solution(arr1)) // 개
/* 테스트 케이스 2 */
// let arr1=[1,1,1,0];
// console.log(solution(arr1)) // 도
/* 테스트 케이스 3 */
// let arr1=[0,0,1,1];
// console.log(solution(arr1)) // 개

// /* 2번 중. Triangular Output */
// function solution(star){
// 	let sumArr = [];
//     let starStr = '';
//     for(let i=0; i < star; i++) {
//         sumArr.push(2 * i + 1);
//     }
//     for(let i=0; i < sumArr.length; i++){
//         starStr += ' '.repeat(sumArr.length - (i+1)) + 
//                 '*'.repeat(sumArr[i]) + '\n';
//     }
//     return document.querySelector('.star').innerHTML = starStr;
//     // starStr
// }
// console.log(document.querySelector('.star'));
// // // /* 지정입력 값 */
// let star= 9;
// // /* 테스트 케이스 1 */
// // // let star= 3;
// // // /* 테스트 케이스 2 */
// // let star= 6;
// solution(star);

/* 3번 상. 상하좌우 큰 수 찾기 */
function solution(arr1){
    let row1 = arr1[0];
    let row2 = arr1[1];
    // let row3 = arr1[2];
    let row4 = arr1[3];
    let row5 = arr1[4];
    
    /* 1. 1번째 줄 크기 비교*/
    if(row1[0] > row2[0] && row1[0] > row1[1]){
        row1[0] = '*';
    }
    if(row1[4] > row2[4] && row1[4] > row1[3]){
        row1[4] = '*';
    }
    for(let i=1; i < arr1[0].length-1; i++) {
        if(arr1[0][i] > arr1[0][i-1] && arr1[0][i] > arr1[0][i+1] && arr1[0][i] > arr1[1][i]) {
            arr1[0][i] = '*';
        }
    }
    /* 2. 2, 3, 4번째 줄 크기 비교 */
    // 중간 배열의 - 처음 인덱스와 마지막 인덱스 비교
    for(let i=1; i < arr1.length -1; i++){
        if(arr1[i][0] > arr1[i-1][0] && arr1[i][0] > arr1[i+1][0] && arr1[i][0] > arr1[i][1]){
            arr1[i][0] = '*';
        }
        if(arr1[i][4] > arr1[i-1][4] && arr1[i][4] > arr1[i+1][4] && arr1[i][4] > arr1[i][3]){
            arr1[i][4] = '*';
        }
    }
    // 중간 배열의 - 1, 2, 3 인데스 비교
    for(let i=1; i < arr1.length-1; i++) {
        for(let j=1; j < arr1[i].length-1; j++){
            if(arr1[i][j] > arr1[i][j-1] && arr1[i][j] > arr1[i][j+1] && arr1[i][j] > arr1[i-1][j] && arr1[i][j] > arr1[i+1][j]) {
                arr1[i][j] = '*';
            }
        }
    }
    /* 5번째 줄 크기 비교 */
    if(row5[0] > row4[0] && row5[0] > row5[1]){
        row5[0] = '*';
    }
    if(row5[4] > row4[4] && row5[4] > row5[3]){
        row5[4] = '*';
    }
    for(let i=1; i < arr1[4].length-1; i++) {
        if(arr1[4][i] > arr1[4][i-1] && arr1[4][i] > arr1[4][i+1] && arr1[4][i] > arr1[3][i]) {
            arr1[4][i] = '*';
        }
    }
    let answer = '';
    for(let i=0; i < arr1.length; i++) {
        answer += arr1[i].join(' ') + '\n';
    }
    console.log(answer);
}
let arr1=[[7,4,6,5,9], [6,1,3,4,5], [4,8,5,6,9], [1,3,0,6,4], [6,4,8,1,7]]; 
solution(arr1);
// let arr1=[[3,4,1,4,9,],[2,9,4,5,8],[9,0,8,2,1],[7,0,2,8,4],[2,7,2,1,4]]
// solution(arr1);


