Function.prototype.myOwnBind = function(functionContext) {
  const func = this;
  const preFixArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    const suffixArgs = Array.prototype.slice.call(arguments);
    const args = preFixArgs.concat(suffixArgs);
    return func.apply(functionContext, args);
  }
}


const human = {
  name: 'Han',
  getName: function(string, string2) {
    return `${string} ${string2} ${this.name}`;
  }
}

const getName = human.getName;

const alien = {
  name: 'John',
}

const alienGetName = getName.myOwnBind(alien, 'thisIsPrefix');

console.log(alienGetName('hello!', 'what!?'));
