Static C Libraries and you
==========================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----99262e7eb112--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----99262e7eb112--------------------------------)[

Mar 4, 2019·3 min read

](https://medium.com/@andrew.maring/static-c-libraries-and-you-99262e7eb112?source=post_page-----99262e7eb112--------------------------------)

![](https://miro.medium.com/max/12000/1*nM_vT-e73Kn9CN7abczURA.jpeg)

As a developer advances in skill and makes more and more complex projects, they find themselves with a lot of intertwined code. Many times, there are places where code is redundant or used in a slightly different form. Further, as this single code base gets larger and larger, the compilation and linking time continues to increase.

Enter Libraries. Libraries allow us to do some very convenient things that help make code reusable and portable. It also allows for better maintainability of the code and readability for others trying to understand the code.

Static libraries contain code that was inserted into it as separate [object files](https://www.gnu.org/software/libtool/manual/html_node/Creating-object-files.html). These object files can be any code that contains tools that would be also useful in the creation of other programs. For example, a Math static library could contain multiple object files containing functions to help you do more advanced math operations that would otherwise need to be hand written. Math functions are likely to come up in many programs thus its usefulness to have a math library. C has its own [math standard library](https://www.gnu.org/software/libc/manual/html_node/Mathematics.html) but you get the picture.

*   **Why use libraries**

Libraries allow us to stay D.R.Y. (Do Not Repeat Yourself) and reuse code that could be used many times over. They allow code to be cleaner and more easily read by using functions from well known libraries and allow the reuse of commonly used code.

*   **How they work**

C has its [own static libraries](https://en.wikipedia.org/wiki/C_standard_library#Header_files) that perform many input and output functions, mathematical functions, etc. They are commonly used in C programming and perform many regularly needed functions, definitions, and macros.

Additionally, developers are able to create their own C libraries. As mentioned previously, static libraries are made by combining multiple object code files through the library creation process.

*   **How to create Static Libraries**

The tool used to create static libraries is `ar` . `ar` for ‘archiver’ is a tool for archiving files and creating static libraries. It can be used to create static libraries, modify object files in the static library, list the names of object files in the library, and more.

`ar rc libutil.a util_file.o util_net.o util_math.o`

The above command creates a static library `libutil.a` from the files `util_file.o` `util_net.o` and `util_math.o` . The `c` flag after `ar` tells `ar` that we want to create a new library. The `r` flag denotes that if the library is already created, `ar` should replace older object files with newer object files if available.

The last step to create a static library is to index the library. At create time, the library is not always automatically indexed. Indexing the library helps the compiler speed up symbol-lookup inside that library during the [linking phase](https://www.geeksforgeeks.org/compiling-a-c-program-behind-the-scenes/).

`ranlib libutil.a`

The above command will index `libutil.a` using `ranlib`.

*   **How to use them**

Using static libraries is quite straight forward. The library gets included in the compilation step of the source code in which you want to use the static library. This is done by adding the `-l` flag before the libraries name. The libraries name should have `lib` removed as well as the file extension `.a`.

For example, the following command would include the static library `libutil.a` to the output executable `prog`.

`gcc main.o -L. -lutil -o prog`

Additionally, the `-L.` flag and option tell the compiler to also look in the current directory for library files.

Now that you understand how to use static libraries, use them! Libraries are a powerful way to package up commonly used code for the betterment of everyone.