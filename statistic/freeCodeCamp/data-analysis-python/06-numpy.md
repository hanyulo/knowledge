## why we need numpy
* python is not designed for processing data
    * it is slow
* numpy
    * good at processing data in high efficient in python language
    * don't use it directly
        * users usually use `pandas, matplotlib`

## low level explanation about Numpy
* numpy
    * store number in primitive type
        * save memory
            * store single number: 5 (110)
                * need 3 bits
    * store array in continuous array
        * can use cpu specific advanced instruction to optimize process
* python
    * store number in object
        * waste of memory
        * store single number: 5
              * need 20 bytes
    * store single object number in on-contiguous memory
        * can't use cpu specific advanced instruction set

## To Do
* study linear algebra
