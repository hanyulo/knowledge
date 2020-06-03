## Note

### echo -e
* echo "Hello World \a\n" -> "Hello World"
* echo -e "Hello World \a\n"
    * -> //Hello World + sound and new line  
        * `\a`: sound
        * `\n`: new line

### exit
* exit 0
    * at the end of the script
    * error/successfuly message to system
    * `echo $?` to print the value

### read
* http://linux.vbird.org/linux_basic/0320bash.php#read


### [變數的測試與內容替換](http://linux.vbird.org/linux_basic/0320bash.php#variable_echo)
* var=${str-expr}
	   * if str is undefined: var=`${expr}`
     * if str is '': var=""
     * if str is is 'abc': var='abc'
* var=${str:-expr}
    * if str is undefined: var=`${expr}`
    * if str is '': var=`${expr}`
    * if str is is 'abc': var='abc'

### date1=$(date --date='2 days ago' +%Y%m%d)
* not working on mac

## Reference
* [shell](http://linux.vbird.org/linux_basic/0340bashshell-scripts.php#script)


## progress
* 數值運算：簡單的加減乘除

## toread
* http://linux.vbird.org/linux_basic/0320bash.php#variable_echo
