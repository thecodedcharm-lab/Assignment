# Assignment-7
# Topic: Python While Loop


# Type 1: Output Guessing

# Level 1: Understand the Basic Flow
# Q1. Simple Counting

i = 1
while i <= 4:
    print(i)
    i += 1

# Predicted output:

# 1
# 2
# 3
# 4

# Q2. Counting by Two

n = 2
while n <= 8:
    print(n, end=" ")
    n += 2

# Predicted output:

# 2 4 6 8

# Q3. Reverse Counting

x = 5
while x >= 1:
    print(x, end=" ")
    x -= 1

# Predicted output:

# 5 4 3 2 1

# Q4. The Condition Is Initially False

count = 7
while count < 5:
    print("Hello")
    count += 1
print("Finished")

# Predicted output:

# Finished

# Level 2: Track the Order of Statements

# Q5. Update Before Printing

i = 1
while i <= 4:
    i += 1
    print(i, end=" ")

#  Predicted output:

# 2 3 4 5

#  Q6. Print After the Loop

n = 1
while n <= 3:
    print(n, end=" ")
    n += 1

print("Done")

#  Predicted output:

# 1 2 3 Done

#  Q7. Two Updates in One Iteration

x = 1
while x < 10:
    print(x, end=" ")
    x += 2
    x += 1

#  Predicted output:

# 1 4 7

# Q8. Change the Variable Before Checking Again

value = 10
while value > 0:
    value -= 3
    print(value, end=" ")

# Predicted output:

# 7 4 1 -2

Level 3: Arithmetic and Accumulation

# Q9. Add the Counter Values

i = 1
total = 0
while i <= 4:
    total += i
    i += 1
print(total)

# Predicted output:

# 10

# Q10. Multiply During Each Iteration

n = 1
result = 1
while n <= 4:
    result *= 2
    n += 1

print(result)

# Predicted output:

# 16

# Q11. Use the Remainder Operator

n = 11

while n > 0:
    print(n % 3, end=" ")
    n -= 4

# Predicted output:

# 2 1 0    

# Q12. Integer Division
number = 583

while number > 0:
    print(number // 10, end=" ")
    number //= 10

# Predicted output:
# 58 5 0 

Level 4: Conditions and Logical Thinking

# Q13. Print Only When a Condition Is True
i = 1

while i <= 6:
    if i % 2 == 0:
        print(i, end=" ")
    i += 1
# Predicted output:
# 2 4 6 


# Q14. A Conditional Expression Inside a Loop
n = 1

while n <= 5:
    print("Even" if n % 2 == 0 else "Odd", end=" ")
    n += 1
# Predicted output:
# Odd Even Odd Even Odd 

# Q15. The Condition Changes Inside the Loop
x = 1

while x < 10:
    print(x, end=" ")
    x *= 2
# Predicted output:
#  1 2 4 8 

# Q16. A Tricky Starting Value
i = 5

while i > 0:
    print(i, end=" ")
    i -= 2

print("Stop:", i)
# Predicted output:
# 5 3 1 Stop: -1

# Level 5: Strings and Tricky Cases


# Q17. Build a String Repeatedly
i = 1
result = ""
while i <= 4:
    result += "A"
    print(result)
    i += 1
# Predicted output:
# A
# AA
# AAA
# AAAA


# Q18. A String Variable Changes Each Time
word = "PY"
while len(word) < 6:
    print(word)
    word += "T"
print(word)
# Predicted output:
# PY
# PYT
# PYTT
# PYTTT
# PYTTTT

# Q19. Does the Loop Run at All?
x = 3
while x > 10:
    print("Inside")
    x += 1
print(x)
# Predicted output:
# 3

# Q20. Find the Problem
i = 1
while i <= 4:
    print(i, end=" ")
    i -= 1
print("Finished")

#  B. It prints 1 0 -1 -2 ... and continues indefinitely
# Because i decreases instead of increasing, it moves further 
# away from the termination condition (i <= 4), causing an infinite loop.
