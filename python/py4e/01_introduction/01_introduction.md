
## Reserved Words
* These are words that have very special meaning to Python. When Python sees these words in a Python program, they have one and only one meaning to Python

```
and       del       global      not       with
as        elif      if          or        yield
assert    else      import      pass
break     except    in          raise
class     finally   is          return
continue  for       lambda      try
def       from      nonlocal    while
```


## Interpreter V.S. Compiler
* Machine Language
  * CPU can only communicate through machine language
  * `01010101011100000`
* high-level language
  * python
  * javascript
  * ...
* two system to transfer high-level language to machine language
  1. Interpreter
  2. compiler
* Interpreter
  * An interpreter reads the source code of the program as written by the programmer, parses the source code, and interprets the instructions on the fly.
  * able to have an interactive conversation
  * `node`
  * example: IDLE of pyhon
* Compiler
  * receive the eintire program in a file
  * runs a process to translate the high-level source code into machine language and then the compiler puts the resulting machine language into a file for later execution
    * windows: .exec
    * OS: no suffix that uniquely marks a file as executable
* if you open the machine language file
```
^?ELF^A^A^A^@^@^@^@^@^@^@^@^@^B^@^C^@^A^@^@^@\xa0\x82
^D^H4^@^@^@\x90^]^@^@^@^@^@^@4^@ ^@^G^@(^@$^@!^@^F^@
^@^@4^@^@^@4\x80^D^H4\x80^D^H\xe0^@^@^@\xe0^@^@^@^E
^@^@^@^D^@^@^@^C^@^@^@^T^A^@^@^T\x81^D^H^T\x81^D^H^S
^@^@^@^S^@^@^@^D^@^@^@^A^@^@^@^A\^D^HQVhT\x83^D^H\xe8
....
```

## Python With Compiler/Interpreter
* The Python interpreter is written in a high-level language called "C"
* Python is a program itself and it is compiled into machine code
* When you installed Python on your computer (or the vendor installed it), you copied a machine-code copy of the translated Python program onto your system.


## Definition of Program
* The definition of a program at its most basic is a sequence of Python statements that have been crafted to do something.

## Notes
1. Compiler works with python script (xxx.py)
2. interpreter just like IDLE (python shell)

## Terms
* bug
  * An error in a program.

* central processing unit
  * The heart of any computer. It is what runs the software that we write; also called "CPU" or "the processor".
* compile
  * To translate a program written in a high-level language into a low-level language all at once, in preparation for later execution.
* high-level language
  * A programming language like Python that is designed to be easy for humans to read and write.
* interactive mode
  * A way of using the Python interpreter by typing commands and expressions at the prompt.
* interpret
  * To execute a program in a high-level language by translating it one line at a time.
* low-level language
  * A programming language that is designed to be easy for a computer to execute; also called "machine code" or "assembly language".
* machine code
  * The lowest-level language for software, which is the language that is directly executed by the central processing unit (CPU).
* main memory
  * Stores programs and data. Main memory loses its information when the power is turned off.
* parse
  * To examine a program and analyze the syntactic structure.
* portability
  * A property of a program that can run on more than one kind of computer.
* print function
  * An instruction that causes the Python interpreter to display a value on the screen.
* problem solving
  * The process of formulating a problem, finding a solution, and expressing the solution.
* program
  * A set of instructions that specifies a computation.
* prompt
  * When a program displays a message and pauses for the user to type some input to the program.
* secondary memory
  * Stores programs and data and retains its information even when the power is turned off. Generally slower than main memory. Examples of secondary memory include disk drives and flash memory in USB sticks.
* semantics
  * The meaning of a program.
* semantic error
  * An error in a program that makes it do something other than what the programmer intended.
* source code
  * A program in a high-level language.

## References
[introduction](https://www.py4e.com/html3/01-intro)
