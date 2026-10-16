# # Day 02

# Type 2: Basic While Loop Problems — Statement Based

# Q21. Print Numbers from 1 to N

N = int(input("Enter Number : "))
i = 1 
while i <= N:      
    print(i)      
    i += 1

# Q22. Print Numbers from N to 1

N = int(input("Enter Number : "))
i = N
while i >= 1:      
    print(i)      
    i -= 1

# Q23. Print Even Numbers up to N

N = int(input("Enter Number : "))
i = 2 
while i <= N:      
    print(i)      
    i += 2

# Q24. Print Odd Numbers up to N

N = int(input("Enter Number : "))
i = 1
while i <= N:      
    print(i)      
    i += 2

# Q25. Print Multiples of a Number

K = int(input("K = "))
N = int(input("N = "))
current = 1

while current <= N:
    if current % K == 0:
        print(current)
    current += 1

# Level 2: Counting with Small Changes

# Q26. Multiplication Table

number = int(input("Enter Number : "))
count = 1

while count <= 10:
    print(f"{number} X {count} = {number * count}")
    count += 1

# Q27. Count by a Given Step

start = int(input("Enter START : "))
step = int(input("Enter STEP : "))
count = 1
while count <= 5:
    print(start)
    start += step 
    count += 1

# Q28. Sum of Numbers from 1 to N
num = int(input("Enter Number : "))
Sum = 0
while num >= 1:
    Sum=Sum+num
    num-=1
print(Sum)

# Q29. Sum of Even Numbers up to N
num = int(input("Enter Number : "))
Sum = 0
while num >= 1:
    if num % 2 == 0:
        Sum=Sum+num
    num-=1
print(Sum)

# Q30. Sum of Odd Numbers up to N
num = int(input("Enter Number : "))
Sum = 0
while num >= 1:
    if num % 2 != 0:
        Sum=Sum+num
    num-=1
print(Sum)
