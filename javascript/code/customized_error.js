
class CustomizedError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class FormatError extends CustomizedError {
  constructor(message) {
    super(message);
  }
}

function test() {
  try {
    console.log('run try!!')
    throw new FormatError('there is a format error');
    // return 'test'
  } catch (err) {
    console.log(err.name)
    console.log('/*-------*/')
    console.log(err.message)
    console.log('/*-------*/')
    console.log(err.stack)
    console.log(err instanceof Error)
  } finally {
    console.log('final!!')
  }

}

console.log(test())
