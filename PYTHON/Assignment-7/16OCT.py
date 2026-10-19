# # DAY 03

# # Type 3: Factorial and Number & Digit Logic

# # Level 1: Basic Digit Logic

# Q41. Count the Digits
N = int(input("Enter Number : "))
count = 0
while N > 0:
    d = N % 10
    count += 1
    N //=10
print(count)

# Q42. Find the Sum of Digits
N = int(input("Enter Number : "))
sum = 0
while N > 0:
    d = N % 10
    sum += d
    N //= 10
print(sum)

# Q43. Reverse a Number
N = int(input("Enter Number : "))
reverse = 0
while N > 0:
    d = N % 10
    reverse = (reverse * 10) + d
    N = N // 10
print(reverse)

# Q44. Find the Product of Digits
N = int(input("Enter Number : "))
product = 1
while N > 0:
    d = N % 10
    product *= d
    N //= 10
print(product)

# Q45. Print Digits from Right to Left
N = int(input("Enter Number : "))
while N > 0:
    d = N % 10
    print(d)
    N //= 10

# # Level 2: Work with Specific Digits

# Q46. Find the First and Last Digit
N = int(input("Enter Number: "))
last_digit = N % 10
while N >= 10:
    N = N // 10
first_digit = N
print("First digit:", first_digit)
print("Last digit:", last_digit)

# Q47. Count Even Digits
N = int(input("Enter Number: "))
even_digit = 0
while N > 0:
    d = N % 10
    if d % 2 == 0:
        even_digit+=1
    N //= 10
print(even_digit)

# Q48. Count Odd Digits
N = int(input("Enter Number: "))
odd_digit = 0
while N > 0:
    d = N % 10
    if d % 2 != 0:
        odd_digit+=1
    N //= 10
print(odd_digit)

# Q49. Find the Sum of Even Digits
N = int(input("Enter Number: "))
even_digit_sum = 0
while N > 0:
    d = N % 10
    if d % 2 == 0:
        even_digit_sum+=d
    N //= 10
print(even_digit_sum)

# Q50. Find the Largest Digit
N = int(input("Enter Number: "))
largest = -1
while N > 0:
    d = N % 10
    if largest<d:
        largest=d
    N //= 10
print(largest)

# Q51. Find the Smallest Digit
N = int(input("Enter Number: "))
smallest = 9
while N > 0:
    d = N % 10
    if smallest>d:
        smallest=d
    N //= 10
print(smallest)
