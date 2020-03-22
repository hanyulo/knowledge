# exercise 3

def count(str, letter):
    count = 0
    for char in str:
        if char == letter:
            count += 1
    print(count)


# exercise 5

def myParse(str):
    colonIndex = str.find(':')
    res = 0
    if colonIndex == -1:
        return None;
    else:
        try:
            res = float(str[colonIndex + 1:])
        except:
            print('error')
            return None
    return res

print(myParse('X-DSPAM-Confidence:0.8475'))
