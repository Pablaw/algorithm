

S = 'baekjoon'
def solution(word):
    result = []
    lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for lo in lowercase:
        if not word.find(lo) == -1:
            result.append(word.find(lo))
        else:
            result.append(-1)
    strResult = ' '.join([str(s) for s in result])
    print(strResult)
solution(S)