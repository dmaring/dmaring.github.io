Everything is an object in Python
=================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----90c6fd274c57--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----90c6fd274c57--------------------------------)[

May 30, 2019·5 min read

](https://medium.com/@andrew.maring/everything-is-an-object-in-python-90c6fd274c57?source=post_page-----90c6fd274c57--------------------------------)

![](https://miro.medium.com/max/2000/0*eLIwkTU8ms0jAzyE)

Python is really an amazing high level programming language. It’s relatively easy to learn and promotes simple syntax and easily readable code. Python’s adoption has exploded resulting in thousands of useful modules to extend the functionality of your code.

A unique characteristic of the language is that everything in Python is an object. Integers, Strings, Lists, Tuples, and Dictionaries are all represented as objects. Even functions are represented by objects. This leads to some interesting behavior while assigning variables to objects as well as passing our objects to functions.

We can investigate objects in python using a few built in functions: id and type. The id() function is very useful to find the unique identifier for an object. When using CPython, the value returned by id() is the memory address where the object is stored.

```
\>>> a = "hello"  
\>>> id(a)  
140492286431160
```

The output of id() and the memory address will be different each time you run the interpreter given that Python dynamically chooses where to place objects in memory.

What if we want to know what type an object is based on the variable assigned to it? We can use the type() builtin function to accomplish this.

```
\>>> a = "hello"  
\>>> type(a)  
<class 'str'>
```

Python has both mutable and immutable object types. It behooves anyone working with Python to understand the mutability aspects of Python objects and the nuances that come along with it.

First of all, an object is mutable if it is able to be modified. For example, a list is a mutable object type in Python. In the following example, a list is appended (and thus modified) so that an additional item is added to the list. This demonstrates the mutability of the list object.

```
\>>> my\_list = \[1, 2, 3\]  
\>>> my\_list.append(4)  
\>>> print(my\_list)  
\[1, 2, 3, 4\]
```

We call the list’s append method which modifies itself with the addition of the integer 4.

Alternatively, strings are an immutable object type in Python. This means that they are not able to be modified after they are created. For the following word, let’s try to replace the first character in the string.

```
\>>> my\_string = "hello"  
\>>> my\_string\[0\]  
'h'  
\>>> my\_string\[0\] = "j"  
Traceback (most recent call last):  
  File "<stdin>", line 1, in <module>  
TypeError: 'str' object does not support item assignment
```

A TypeError is thrown telling us that we aren’t able to modify the string.

The first thing to keep in mind when using mutable and immutable objects is how assignment works for these different objects. Mutable objects in Python include lists, sets, and dictionaries. Immutable object types include integers, floats, strings, and tuples.

There are two operators used to test for equality of two objects or the sameness of two objects. The “==” will test whether the values of two objects are equal to each other. The “is” operator will check if variables are referencing the same object.

```
\>>> lista = \[1, 2\]  
\>>> listb = \[1, 2\]  
\>>> lista == listb  
True
```

We can see that the values of lista and listb are indeed equal to each other. However, are lista and listb referring to the same list or just two lists of equal values?

```
\>>>lista is listb  
False
```

As you probably predicted, lista and listb are different list objects although they have the same values. A quick use of id() to show their unique memory values confirms this.

```
\>>> id(lista)  
140492279077704  
\>>> id(listb)  
140492246777608
```

Alternatively, we can make the lists refer to the same object by variable assignment.

```
\>>> lista = \[1, 2\]  
\>>> listb = lista  
\>>> listb is lista  
True  
\>>> print(lista)  
\[1, 2\]  
\>>> listb.append(3)  
\>>> print(lista)  
\[1, 2, 3\]
```

Interesting, because we assigned listb to the lista variable, both lists now refer to the same object. Therefore, when the object value is modified through the variable reference of one, the value referenced by the other variable is also changed.

Let’s take a look at the string type. Remember we mentioned before that string objects are immutable in Python.

```
\>>> str\_a = "hello"  
\>>> str\_b = "hello"  
\>>> str\_a == str\_b  
True
```

We can see here two assignments of strings to variables str\_a and str\_b. Predictably, we can compare the two using “==” and see that the values are equal to each other.

What do you think will happen if we test if str\_a and str\_b refer to the same object?

```
\>>> str\_a is str\_b  
True
```

What? We see clearly in the previous code block that we declare two variables with two equal value strings of the same type. This isn’t a mistake. Python has pulled a subtle trick to conserve resources and created only one object for the string “hello”. When str\_b is assigned to “hello” Python recognizes an opportunity to conserve memory space. Python can get away with doing this because the string is an immutable object and can never be changed. Therefore, instead of storing two immutable string objects, Python stores one and adds references to the immutable object at variable assignment.

So what will happen if we reassign str\_a to “goodbye”? Will str\_b’s object value change?

```
\>>> str\_a = "goodbye"  
\>>> print(str\_b)  
hello
```

We can see that str\_b will not be modified since str\_a simply references a new object while str\_b continues to reference the “hello” object.

The important difference between how Python treats immutable and mutable objects carries over in the operation of function calls. Python passes arguments to functions “by object reference” or sometime referred to as “passing by sharing”. That is, the parameters of a function will be assigned to a the referenced objects of the arguments. In other words, the parameters in the function become aliases of the actual arguments.

What this means is that any mutable type passed to a function will have the ability to modify that referenced object. On the other hand, for immutable objects, their immutable nature stands and the objects are not able to be modified in the called function.

Let’s take a look at two examples of passing a mutable object and immutable object to a function and observe its effects on the original variable reference.

```
def add\_two(num):  
    num += 2\>>> a = 4  
\>>> add\_two(a)  
\>>> print(a)  
4
```

We can see that passing an immutable object (an integer) to the function and attempting to modify that object results in no affect to the a variable.

Let’s see what happens when we pass a mutable object to a function.

```
def append\_three(list):  
    list.append()\>>> my\_list = \[1, 2\]  
\>>> append\_three(my\_list)  
\>>> print(my\_list)  
\[1, 2, 3\]
```

The example shows that the function produced a “side effect” and modified the list object that was passed to the function.

Given this information it’s important to be mindful when passing mutable objects to functions. Utilizing the function may have unintended results of modifying the passed list when the actual intention was returning a new list operated on by the function.

Therefore, it’s a good practice to make a copy of the mutable object in the function that it’s being called in. The function can then act on this copied mutable object and return that object all without changing the original object.