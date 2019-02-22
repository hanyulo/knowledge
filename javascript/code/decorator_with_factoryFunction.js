function logFunctionName(fn) {
  return function decorator(...args) {
    console.log('args: ', args)
    let start = Date.now();
    let result = fn.apply(this, args);
    console.log('function name: ', fn.name);
    return result;
  }
}

function createAuthorizeDecorator(currentUser) {
  return function authorize(fn) {
    return function decorator(...args) {
      if(currentUser && currentUser.isAuthenticated()){
        console.log('user authorized')
        return fn.apply(this, args);
      } else {
        throw "Not authorized to execute " + fn.name + "()";
      }
    }
  }
}

function createUser() {
  return {
    isAuthenticated: () => {
      return true;
    }
  }
}

function decoratorComposer(...args) {
  return function decorator(fn) {
    let result = fn;
    for(let i = 0 ; i < args.length ; i+=1) {
      result = args[i](result);
    }
    return result;
  }
}

function decorateAllMethods(obj, decorators) {
  function decorateMethod(fnName){
    if(typeof(obj[fnName]) === "function"){
      obj[fnName] = decoratorComposer(...decorators)(obj[fnName]);
    }
  }
  Object.keys(obj).forEach(decorateMethod);
  return obj;
}

function decorateAndFreeze(obj, ...decorators) {
  const newObj = { ...obj };
  decorateAllMethods(newObj, decorators);
  return Object.freeze(newObj);
}

function toDoStore() {
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  function get() {
    return todos
  }

  const currentUser = createUser();
  const authorize = createAuthorizeDecorator(currentUser);
  // Following is the way without decoratroComposer;
  // const addWithLog = logFunctionName(add);
  // const addWithAuthorize = authorize(addWithLog);

  /*
  return Object.freeze({
    get,
    add: decoratorComposer(logFunctionName, authorize)(add),
  })
  */
  return decorateAndFreeze({
    add,
    get,
  }, logFunctionName, authorize);
}


function main() {
  const theToDoStore = toDoStore();
  console.log('-----add-----')
  theToDoStore.add('task one');
  console.log('\n\n\n\n')
  console.log('-----get-----')
  console.log('todos: ', theToDoStore.get());
}

main();
