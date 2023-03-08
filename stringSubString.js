function solution(t, p) {
  let result = [];
  let newString = [];
  let answer = 0;

  const numIterator = () => {
    for (let i = 0; i <= t.length; i++) {
      if (newString.length < p.length) {
        newString.push(t[i]);
      } else {
        result.push(newString);
        newString = [];
        t = t.substring(1, t.length);
        break;
      }
    }
  };
  for (num of t.split("")) {
    if (t.length >= p.length) numIterator();
  }

  for (num of result) {
    Number(num.join("")) <= Number(p) ? (answer += 1) : answer;
  }
  return answer;
}
