# 1
A, B = map(int, input().split())
print(A+B)
print(A-B)
print(A*B)
print(A//B)
print(A % B)

# 2
A, B = map(int, input().split())
print(A+B, A-B, A*B, A//B, A % B, sep='\n')
# print 함수의 sep=파라미터 이용
# sep파라미터는 print 함수에서 쉼표로 구분된 각각의 출력 값 사이에 문자열을 삽입할 수 있다.
# sep을 지정하지 않으면 기본값은 공백이어서 각각의 값이 가로로 공백 한 칸을 사이에 두고서 출력된다.
# 이러한 성질을 이용해서 이스케이프 문자인 줄 바꿈 문자 '\n'를 출력 값 사이에 삽입
