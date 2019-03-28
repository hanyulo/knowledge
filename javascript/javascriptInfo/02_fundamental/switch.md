## Note
* strict equality check
* need break for each case, otherwise, it will continue to rest of the cases

## Grouping Of Case
```js
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3:                    // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

```
