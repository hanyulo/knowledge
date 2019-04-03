* primitive type
  * type has wrapper object which provide methods
    * string, number, boolean, symbol
  * has no wrapper object
    * null
    * undefined




* wrapper object
 * Formally, these methods work via temporary objects, but JavaScript engines are well tuned to optimize that internally, so they are not expensive to call.
 * those wrapper object will be deleted after their jobs are done.  
 * when does it create
  1. when you access the property of primitive, javascript create an wrapper object.
  2. the object run the method
  3. the object will be dumped.
