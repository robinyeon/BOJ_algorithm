# 내가 쓴 오답
a = int(input())
b = int(input())
c = a*(b % 10)
d = a*(b % 100)//10
e = a*(b//100)
f = c+(10*d)+(100*e)
print(c, d, e, f, sep='\n')

# 정답 참고후에도 오답
a = int(input())
b = input()
c = a * b[2]
d = a * b[1]
e = a * b[0]
f = a * int(b)
print(c, d, e, f, sep='\n')

# 최종 정답
a = int(input())
b = input()
c = a * int(b[2])
d = a * int(b[1])
e = a * int(b[0])
f = a * int(b)
print(c, d, e, f, sep='\n')
# 두번째로 입력 받는 숫자를 input 그대로 두고 활용하기
# b의 각 자리를 인덱스 기호를 이요하여 하나씩 불러내고 그 불려진 문자를 int 함수를 이용해서 정수로 변환
