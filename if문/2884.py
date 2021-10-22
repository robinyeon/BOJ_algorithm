h, m = map(int, input().split())
if (m >= 45):
    print(h, m-45)
elif (m < 45 and 1 <= h <= 23):
    print(h-1, m+15)
elif (m < 45 and h == 0):
    print(23, m+15)

# 처음 쓴 답안(오답)
# if (1 <= h <= 23 and m >= 45):
#     print(h, m-45)
# elif (1 <= h <= 23 and m < 45):
#     print(h-1, m+15)
# elif (h == 0 and m >= 45):
#     print(23, m-45)
# elif (h == 0 and m < 45):
#     print(23, m+15)
# 오답인 이유: h==0 and m>=45인 세번째 elif의 경우 오류
