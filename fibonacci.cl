i :== 1
n :== 10
a :== 1
b :== 1
jab-tak-vro ( i <= n ) [
    bol-vro (a)
    temp :== a + b
    a :== b
    b :== temp
    i :== i + 1
]