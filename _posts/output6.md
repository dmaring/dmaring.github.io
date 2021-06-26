In life and C libraries, always be Dynamic
==========================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----d14277ac15b2--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----d14277ac15b2--------------------------------)[

May 7, 2019·6 min read

](https://medium.com/@andrew.maring/in-life-and-c-libraries-always-be-dynamic-d14277ac15b2?source=post_page-----d14277ac15b2--------------------------------)

![](https://miro.medium.com/max/12032/1*pVZO0k-L4J2H2q--LXiTfA.jpeg)

Programming language libraries help us do many useful things like access system calls, open and write to files, as well as work with strings. They allow us to do these things in existing code packages called Libraries.

The same applies to the C language. Libraries exist to help us deal with things such as memory, strings, and standard i/o. As you continue your journey learning C and other languages you may wonder how you can take advantage of libraries to package and distribute your own code. Lucky for you that capability exists in many programming languages including C!

C has two categories of libraries: static and dynamic. At one time static libraries were the first only type of library available. Dynamic libraries came along later and allow us to do some great things like resource sharing and features to help your applications stay current and patched.

*   **Why use libraries?**

During everyone’s journey in coding they will be enlightened about the DRY principal. DRY stands for “Do Not Repeat Yourself” and simple means that you should never be writing the same code twice or (gasp!) three times. When this starts to occur you should abstract and factor that code into a reusable module to make your life easier as well as make your code cleaner and easier to read and maintain.

The C language makes that easy to do. All you need to do is abstract that code into a new .c file module and make sure that the code using the module has the necessary declarations included. Header files are also very useful here to hold all of the include statements and declarations for your project. Great, now all you need to do is compile including all of the modules you wish to use along with your main source code.

<img alt="" class="fd em ei it w" src="https://miro.medium.com/max/1816/1\*stmFvuOpwFcJ2jtcFuph8w.png" width="908" height="48" srcSet="https://miro.medium.com/max/552/1\*stmFvuOpwFcJ2jtcFuph8w.png 276w, https://miro.medium.com/max/1104/1\*stmFvuOpwFcJ2jtcFuph8w.png 552w, https://miro.medium.com/max/1280/1\*stmFvuOpwFcJ2jtcFuph8w.png 640w, https://miro.medium.com/max/1400/1\*stmFvuOpwFcJ2jtcFuph8w.png 700w" sizes="700px" role="presentation"/>

As projects grow you will likely create more and more module files that will need to be included every time that you compile your program. This is where libraries start to help!

*   **How do they work?**

Static and dynamic libraries work by packaging your code into library files that allow for a more manageable way to use and distribute code. The library file’s contained modules can then be used in other c programs and the single library file compiled creating a powerful way to reuse your code.

This is the point where static and dynamic libraries diverge. Although they both achieve the goal of wrapping up the intended code into a neat package, the way they are created, how they’re included in compilation, and how their resources are used differ.

If you are interested in how more on how Static Libraries are made and examples, please see my post on Static Libraries [here](https://medium.com/@andrew.maring/static-c-libraries-and-you-99262e7eb112).

*   **What are the differences between static and dynamic libraries and pros and cons of each?**

In its simplest form, static libraries are just a file that holds copies of all the object files you wish to be in the library added to it. The object files are compiled but not linked and therefor negates the need to compile them again when it’s time to link with the application source code. This makes it very easy to include libraries directly into the executable of your program.

A Static Library’s is copied into executable being created at the linking stage. For more information on the linking process and the overall compilation process see my previous [post](https://medium.com/@andrew.maring/whats-really-happening-when-you-compile-with-gcc-c5e270418c13).

While this ensures that the code is included with the executable, it also tightly couples them together. If we need to update that library for security reasons or just iterative improvements the application will need to be linked to the updated and compiled library.

Dynamic Libraries on the other hand offer a few noteworthy advantages.

First, the entire Dynamic Library is not copied into our executable at the linking phase of the compilation process. Instead, references to the library are placed in the executable allowing it to locate, load, and use the library at runtime.

Second, Dynamic Libraries can be shared amongst other running C applications that make use of that same library. The library is loaded only once into memory at the launch of the first program requiring it. Subsequent programs that launch and require the module will make use of the library already loaded into memory. This eliminates the need to load multiple copies of the same library as would be needed with static libraries. This can offer a huge advantage in reduced resource consumption and executable loading times.

Lastly, since the library’s objects files aren’t included in the executable but are centrally maintained, its possible to make changes to the library’s object modules without the program needing to be relinked to the library to gain the benefits of the changes.

Static Libraries do have the advantage of being a little simpler to make and require fewer steps. In the end, because of the benefits of Dynamic Libraries, it’s generally a good idea to use Dynamic Libraries over Static Libraries where possible.

*   **How to create Dynamic Libraries**

The following creation and use descriptions will focus on Dynamic Libraries. If you’re interested to see how to create and use Static Libraries, see my previous post with those explanations at this link [here](https://medium.com/@andrew.maring/static-c-libraries-and-you-99262e7eb112).

It is possible to compile your source files and create a dynamic library with a single command. For example:

```
$ gcc -fPIC module1.c module2.c module3.c -shared -o libdemo.so
```

The command uses gcc (GNU Compiler Collection) with the `-fPIC` flag. `-fPIC` is needed for shared libraries and stands for Position-Independent Code. This changes the way the compiler generates code to deal with the fact that dynamic libraries are dynamically linked at run-time and there is no constant memory position known prior to run-time that locates a given variable, constant, or function of the library.

The `-shared` flag indicates to gcc we are creating a shared library and the `-o` flag lets us name the output library file `libdemo.so` .

*   **How to use Dynamic Libraries**

Two additional things happen when using Dynamic Libraries versus when you use Static Libraries. For a refresher on how Static Libraries are used, see this [post](https://medium.com/@andrew.maring/static-c-libraries-and-you-99262e7eb112).

First, since the dynamic library’s code is not included in the executable, there needs to be some way to indicate and reference the library. This is done by placing the name of the shared library inside the executable at [linking phase](https://medium.com/@andrew.maring/whats-really-happening-when-you-compile-with-gcc-c5e270418c13). The list of all of a program’s shared library dependencies is called its dynamic dependency list.

The inclusion of the library name inside the executable happens automatically when linking the program with a shared library.

`$ gcc -o myprog myprog.c libdemo.so`

Secondly, at run time, there needs to be a way to find the library needed by the program reference by the dynamic library name and loading it into memory if it is not already.

The dynamic linker does this second step by first looking in its know locations of libraries. These locations include `/lib` and `/usr/lib` . Because our library doesn’t reside in these directories we have a few options.

1.  Install the library in one of these library standard directories
2.  Modify the environment variable `$LD_LIBRARY_PATH` to include the directory containing the library.

We can easily use method 2 by modifying the environment variable to include our current directory.

```
$ LD\_LIBRARY\_PATH=.
```

This will tell the dynamic linker to search in the current working directory for shared libraries as well as the other known locations.

Armed with your new knowledge of Dynamic Libraries you can utilize your new found knowledge to create more agile and dynamic code!