# find unique number

exampleArray = [1,1,1,3,5,7,3]
uniqueNumbers = []
for num in exampleArray:
    if num not in uniqueNumbers:
        uniqueNumbers.append(num)

print(uniqueNumbers)


