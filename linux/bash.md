## Shell
* shell === application
    1. bash
    2. GUI application (page, atom, logic pro)


## Command
* `alias lm='ls -al'`
* `unalias lm`
    * create a temporary customized command
    * add it to bashrc to create permanent customized command
* `alias`
    * list all alias
* `type -t cd`
    * show the type of command
        * file: in /bin
        * alias: alias
        * builtin: built in the bash
* `type -a ls`
    * show the order of all related command
* `which`
    * show where is the command
        * `which node`
* `\`
    * escape `enter` for once

* `ctrl + a||e`
    * a: move cursor to the head of command
    * e: move cursor to the tail of command
* `ctrl + k||u`
    * k: remove command from cursor to the end
    * u: remove command from cursor to the start
* `man [cd||command]`
    * to check the info of command
* `mail`
    * === mail MAIL
        * MAIL === `/var/spool/mail/[userName]`
* `cat /etc/shells`
    * show all useable shells
* `echo $[variableName]`
    * show value of variable
        * `echo $HOME`
        * `echo $PATH`
``` bash
  ## version 01
  name=han
  occupation=engineer
  show="$name is $occupation"
  echo $show

  ## version 02
  name=han
  occupation=engineer
  show=${name} is ${occupation}
  echo $show
```
* get result from command
  * backquote | $()
  * `version=$(username -r)`
  * echo $version


* `unset name`
    * remove the variable name in bash

* backquote
    * run the command first
        * [dmtsai@study ~]$ ls -ld `locate crontab`
        * [dmtsai@study ~]$ ls -ld $(locate crontab)
* get env variables
    * `export`
    * `env`

* export PATH
    * move path from `set (local)` to `env|export (env|global variable)`
    * PATH can be used in 子程序 (child process)
    * child process: test.sh (a shell script)
    * child/parent processes
        * parent: bash
        * child: shell script
        * when os run shell script the parent process will go to sleep

* get self declared | bash related variables
    * `set`

* `locale -a`
    * list all public locales

* `history [number]`
    * list all history commands
    * list [number] latest commands
    * `![number]`: run the [number] command
    * `!!`: run the latest command

## Variables
* env
    * MAIL, PATH, SHELL, HOME
    * all capitals
* in shell script
    * declare and assign: `username = /var/spool/mail/han`
          * how to use it: `$username`
* PATH
    * 就是執行檔搜尋的路徑啦～目錄與目錄中間以冒號(:)分隔， 由於檔案的搜尋是依序由 PATH 的變數內的目錄來查詢，所以，目錄的順序也是重要的喔。
        * say you type `ls`. Bash will follow the order of PATH to find command in bin folder



## Files
* `~/.bash_history`
    * show command history which starts from the last session to the max number
* `~/.bash_logout`
    * tell system to do something after you log out
* `/bin`
    * show all executable files which include all types of shell
* `/etc`
    * all meta data that OS system needs
*  `/etc/passwd`
    * info shows that how OS matches different login status with different shell
* `/etc/issue`
    * is a text file which contains a message or system identification to be printed before the login prompt.
* `/etc/issue.net`
    * is a text file which contains a message or system identification to be printed before the login prompt(only for telnet from remotes)
* `/etc/motd`
    * message to be printed after user login
* bash login shell setting related
    * overview
        1. `/etc/profile`
            * `/etc/profile.d`
            * `/etc/locale.conf`
        2. `~/.bash_profile`
            * `~/.bashrc`
            * `~/etc/bashrc`
        3. start to use bash
    * `/etc/profile`
        * read
            * /etc/profile.d
        * default env setting for bash (recommendation: don't modify such file)
            * global env (PATH, HOME...)
            * locale
    * `~/.bash_profile`
        * customized env setting
        * for login-shell
        * may read `bashrc` in to the file
        * files order
            1. ~/.bash_profile
            2. ~/.bash_login
            3. ~/.profile
        * only read one of the files in order
        * why we have multiple files
            * for different shells
    * `source`
        * if you change `.bash_profile` you need to reload the bash to get latest setting
        * but with source you can just load the setting at the time
            * `source ~/.bash_profile`
            * `. ~/.bash_profile`
* non-login|interactive bash
    * `~/.bashrc`
        *


## Bash
* natural order of commands
    1. /bin/ls || ./ls
    2. alias
    3. builtin
    4. $PATH
* `type -a [command]`
    * show the order of commands to reach same result

    ```bash
      $ alias echo='echo -n'
      $ type -a echo
      echo is aliased to `echo -n`
      echo is a shell builtin
      echo is /usr/bin/echo
    ```


## References
    * http://linux.vbird.org/linux_basic/0320bash.php#bash


## to read
* `check ~/.bash_logout file`

##  stop
* done
    * < 10.2.6 變數鍵盤讀取、陣列與宣告： read, array, declare
    * 10.3
    * 10.4.1 ~ 10.4.3
