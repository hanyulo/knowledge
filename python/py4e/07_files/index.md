## Open
* `open('file_path.txt')`
    * return a file handler
        * not a file
        * an object which we can use to
            * read
            * write
            * open
            * close


## Lines of file

* a simple way to count number of lines in freaking big file
    * prevent memory leak

```python

fhand = open('mbox-short.txt')
count = 0
for line in fhand:
    count = count + 1
print('Line Count:', count)

# Code: http://www.py4e.com/code3/open.py

```


```python

>>> fhand = open('mbox-short.txt')
>>> print(len(fhand.read()))
94626
>>> print(len(fhand.read()))
0

```


## useful string methods
* rstrip()
    * to strips whitespace from the right side of a stringr


## useful native methods
* exit()
    * The exit function terminates the program.

## write file

```python

fout = open('output.txt', 'w')
line2 = 'the emblem of our land.\n'
fout.write(line2)
fout.close()

```
