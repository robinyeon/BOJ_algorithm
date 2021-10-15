# 1
a, b = map(int, input().split())
print(a+b)

# 2
# a, b = input().split()
# print(int(a)+int(b))


# input() 함수
# = 왼쪽에 변수를 두고, = 오른쪽에 input( ) 함수를 작성하면
# 입력받은 문자를 변수에 선언할 수 있게 된다.
# **input() 함수로 입력받은건 문자열로 인식

# split() 함수
# 문자열 뒤에 점을 붙이고 split()사용
# ()괄호 안에 아무것도 넣지 않으면 공백(띄어쓰기, 탭 등)을 기준으로 문자열을 나눔

# = 왼쪽에 a, b 두개로 구분한 것은 튜플(tuple) 자료형의 성질 이용
# = 오른쪽에 입력받은 문자를(input) 공백을 기준으로 나누게 되면(split) 두개의 문자로 나누어지게 되고
#  그 두 개의 문자를 각각 a, b 변수에 저장하겠다는 의미

# 출처 [https://ooyoung.tistory.com/13]
# 튜플 자료형 참고 [https://blockdmask.tistory.com/447]
