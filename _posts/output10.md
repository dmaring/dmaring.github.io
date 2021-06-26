![](https://miro.medium.com/max/3200/1*YRIGe1dR533ojLSuYKgGHA.jpeg)

What really happens when you type `ls *.c`
==========================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----ff0c6fdffd48--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----ff0c6fdffd48--------------------------------)[

Feb 5, 2019·2 min read

](https://medium.com/@andrew.maring/what-really-happens-when-you-type-ls-c-ff0c6fdffd48?source=post_page-----ff0c6fdffd48--------------------------------)

It’s easy to get in the habit of using commands every day and taking for granted what is going on behind the scenes. Many people navigate through the shell’s commands typing commands repeatedly for things like copying, pasting, moving, and deleting files.

One of the more interesting and powerful features of the shell is expansions. Expansions are aptly named and allow for information to be “expanded” into the cli. Before shell executes commands it will first execute an Expansion process. This process will process the input information for a matched character sequence.

The type  of expansion used with `ls *.c` is called a “Path Expansion” which simply means it expands values relating to the file system path. The interesting part of this command is the `*` . `*` is known as a “wildcard” and when used alone means match everything. When it is followed by `.c`, it means to match everything that ends in `.c` regardless of what comes before it. This means that `file.c`, `aLaBaMa.c`, and`candy4me.c` would all match this character sequence `*.c` .

Know that we understand the path expansion `*` lets return to our original command. Here is what happens when you type `ls *.c` into your shell.

1.  Various processes run before the `ls` command is executed by the shell. One of these is the Expansion process which will look for expansions.
2.  The expansion process will match the special character `*` and notice that it’s followed by `.c` . This means return match all items that end with `.c` .
3.  The expansion process will pass the matched result to ls which will display the files.
4.  `ls` will never see `*` since it will be expanded before reaching the command.

This is only one of many ways that demonstrate the power of expansions. Other types of expansions include Arithmetic Expansion, Brace Expansion, and Parameter Expansion. Knowing how expansions like these work are powerful tools that will unlock abilities and serve you very well for day to day shell activity.