## while
* Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

```js

while (i != 0) === while (i)

```

```js

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}


```


* Brackets are not required for a single-line body


```js

let i = 3;
while (i) alert(i--);

```

## do while
* This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy.

```js

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


```

## for - skipping part

* you can skip either part of begin, condition, step or all of them.

```js

for ()

```
