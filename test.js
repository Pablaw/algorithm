        //1번. 신대륙 발견 (수료일자 구하기)
        
        console.log(solution(11, 27));

        function solution(month, day){
            const monthName = ['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

            const today = new Date(2022, month-1, day+98);
            const temp_today = new Date(2022,`${month-1}`, `${day+98}`);
            console.log(temp_today);

            const dMonth = String(today).split(' ')[1];
            const dDay = String(today).split(' ')[2];
            
            return `${monthName.indexOf(dMonth)+1}월 ${Number(dDay)}일`
        }
        console.log('1')
        // console.log(solution(1,18));
        // // 4월 26일
        
        // 3월 5일
        // console.log(solution(6, 22));
        // // 9월 28일
    // 2번. 몇시간 했더라? (중)
       /*
    function solution(arr1, arr2){
        let studyPerDay = [];
        for(let i=0; i < arr1.length; i++) {
            if(arr2[i] >= 29) {
                studyPerDay.push(21 - arr1[i]);
            } else {
                studyPerDay.push(arr2[i] - arr1[i]);
            }
        }
        return studyPerDay.reduce((acc,cur) => acc += cur);
    }   
        let arr1=[9, 9, 9, 9, 7, 9, 8];
        let arr2=[23, 23, 30, 28, 30, 23, 23];
        // // 102
        console.log(solution(arr1, arr2));
        // let arr1=[9, 9, 8, 8, 7, 8, 9];
        // let arr2=[21, 25, 30, 29, 22, 23, 30];
        // // console.log(arr.reduce((acc, cur) => acc+=cur))
        // 96

        // let arr1=[9, 7, 8, 9, 7, 9, 8]
        // let arr2=[23, 22, 26, 26, 29, 27, 22];
        // // 110
        */

        // 3번. 소수의 개수와 덧셈 (상)
        /*
        function solution(s){
            let arr = s.split(' ');
            let primeNum = [];
            let notPrimeNum = [];
            for(num of arr) {
                if(Number(num) === 2 || Number(num) === 3) {
                    primeNum.push(num);
                }
                else if (Number(num) % 2 === 0 || Number(num) % 3 === 0) {
                    notPrimeNum.push(num);
                } else {
                    primeNum.push(num);
                }
            }
            primeNum.sort((a,b) => b - a);
            notPrimeNum.sort((a,b) => a - b);
            
            return [Number(notPrimeNum[0]), Number(primeNum[0])].join(" ");
        }
        // let s="97 75 88 99 95 92 73";
        // // "75 97"
        let s ="2 3 4 5";
        // “4 5”
        // let s ="15 3 10 9 7 8";
        // // “8 7”
        console.log(solution(s));
        */