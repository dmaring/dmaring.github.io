![](https://miro.medium.com/max/3200/1*lj2HcECyyJjJkucH2_iAbg.jpeg)

What’s really happening when you compile with gcc
=================================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----c5e270418c13--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----c5e270418c13--------------------------------)[

Feb 7, 2019·3 min read

](https://medium.com/@andrew.maring/whats-really-happening-when-you-compile-with-gcc-c5e270418c13?source=post_page-----c5e270418c13--------------------------------)

We take for granted many of the things that computers do for us automatically. So many things are abstracted from the user it’s easy for the actual actions taking place behind the scenes to become obfuscated.

One of such actions is the compilation of code. What is happening behind the scenes to make our higher level language code run successfully at the machine level? This article will discuss `gcc` and the actions that are happening behind the scenes when you compile a `c` source file into an executable file.

Using gcc (which is the GNU project C and C++ compiler found on Linux systems) you can use the following to compile a c language source file into an executable file.

`$ gcc source_file.c -o executable_file`

This command will tell gcc to use the source file named `source_file.c` and use the `-o` flag to specify the compiled executable to `executable_file`. This performs the full string of events that go into compiling the `source_file.c` . However, there are many other things going on from the moment `source_file` is input into the compiler and when it exits as an executable file.

So let’s dive in.

First, the compiler is actually made up of 4 distinct components:

1.  Preprocessor
2.  Compiler
3.  Assembler
4.  Linker

<img alt="" class="fd em ei js w" src="https://miro.medium.com/max/3208/1\*175fvc3GxvZ1oCNwy4E6CA.png" width="1604" height="1114" srcSet="https://miro.medium.com/max/552/1\*175fvc3GxvZ1oCNwy4E6CA.png 276w, https://miro.medium.com/max/1104/1\*175fvc3GxvZ1oCNwy4E6CA.png 552w, https://miro.medium.com/max/1280/1\*175fvc3GxvZ1oCNwy4E6CA.png 640w, https://miro.medium.com/max/1400/1\*175fvc3GxvZ1oCNwy4E6CA.png 700w" sizes="700px" role="presentation"/>

1.  Preprocessor

Your uncompiled source code enters the gcc through the Preprocessor. The preprocessor is responsible for a few things.

a. It strips out comments from your source code. i.e. any line starting with `#` or any comment blocks `/**…*/` .

b. It recognizes header files like `#include <stdio.h>` and adds that code to the code text.

c. It expands any [macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html) used in the source code.

The Preprocessor step is actual just the first of a multi step process that occurs. This step can be isolated by using the `-E` flag for `gcc`.

`[root@host ~]# gcc -E source.c > preprocessed_file.i`

2\. The Compiler takes this preprocessed file from our last step and compiles the code into Assembly Code. The output of this step will look very different from our input file and will look something like the following:

<img alt="" class="fd em ei js w" src="https://miro.medium.com/max/2040/1\*GgTH1X-vhi3lDcY26CvO4g.png" width="1020" height="762" srcSet="https://miro.medium.com/max/552/1\*GgTH1X-vhi3lDcY26CvO4g.png 276w, https://miro.medium.com/max/1104/1\*GgTH1X-vhi3lDcY26CvO4g.png 552w, https://miro.medium.com/max/1280/1\*GgTH1X-vhi3lDcY26CvO4g.png 640w, https://miro.medium.com/max/1400/1\*GgTH1X-vhi3lDcY26CvO4g.png 700w" sizes="700px" role="presentation"/>

3\. The Assembler takes in the assembly code and creates the Object Code aka Machine Code.

4\. In the final stage the Linker combines optional multiple source files into 1 output file. It also links up any libraries that are needed like (`printf.o`) if using `printf()` function.

The result is an executable file created by a series of complicated steps that are made convenient for the user. Armed with this information you are able to understand a little better how gcc compiles under the hood.