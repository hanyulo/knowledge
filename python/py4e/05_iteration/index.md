## break

```python
while True:
  line = input('enter: ')
  if line == 'done':
    break
  pint(line)
print('Done')

```

## continue

```python

while True:
    line = input('> ')
    if line[0] == '#':
        continue
    if line == 'done':
        break
    print(line)
print('Done!')

```


## for

```python

friends = ['Joseph', 'Glenn', 'Sally']
for friend in friends:
    print('Happy New Year:', friend)
print('Done!')

```
