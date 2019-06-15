---
layout: post
date: 2019-5-29 12:36
title: "Everything is an object in Python"
description: Things to know about Python objects
comments: false
category: 
- post
tags:
- python
- object oriented programming
--- 
<figure>
    <img src="https://cdn-images-1.medium.com/max/1600/0*eLIwkTU8ms0jAzyE" />
</figure>

Python is really an amazing high level programming language. It’s relatively easy to learn and promotes simple syntax and easily readable code. Python’s adoption has exploded resulting in thousands of useful modules to extend the functionality of your code.

A unique characteristic of the language is that everything in Python is an object. **Integers, Strings, Lists, Tuples, and Dictionaries are all represented as objects. Even functions are represented by objects.** This leads to some interesting behavior while assigning variables to objects as well as passing our objects to functions.


We can investigate objects in python using a few built in functions: id and type. The id() function is very useful to find the unique identifier for an object. When using CPython, the value returned by id() is the memory address where the object is stored.
{% highlight python %}
    >>> a = "hello"
    >>> id(a)
    140492286431160
{% endhighlight %}
<!--more-->
The output of id() and the memory address will be different each time you run the interpreter given that Python dynamically chooses where to place objects in memory.

What if we want to know what type an object is based on the variable assigned to it? We can use the type() builtin function to accomplish this.
{% highlight python %}
    >>> a = "hello"
    >>> type(a)
    "<class 'str'>"
{% endhighlight %}
Python has both mutable and immutable object types. It behooves anyone working with Python to understand the mutability aspects of Python objects and the nuances that come along with it.

First of all, an object is mutable if it is able to be modified. For example, a list is a mutable object type in Python. In the following example, a list is appended (and thus modified) so that an additional item is added to the list. This demonstrates the mutability of the list object.
{% highlight python %}
    >>> my_list = [1, 2, 3]
    >>> my_list.append(4)
    >>> print(my_list)
    [1, 2, 3, 4]
{% endhighlight %}
We call the list’s append method which modifies itself with the addition of the integer 4.

Alternatively, strings are an immutable object type in Python. This means that they are not able to be modified after they are created. For the following word, let’s try to replace the first character in the string.
{% highlight python %}
    >>> my_string = "hello"
    >>> my_string[0]
    'h'
    >>> my_string[0] = "j"
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'str' object does not support item assignment
{% endhighlight %}
A TypeError is thrown telling us that we aren’t able to modify the string.

The first thing to keep in mind when using mutable and immutable objects is how assignment works for these different objects. Mutable objects in Python include lists, sets, and dictionaries. Immutable object types include integers, floats, strings, and tuples.

There are two operators used to test for equality of two objects or the sameness of two objects. The “==” will test whether the values of two objects are equal to each other. The “is” operator will check if variables are referencing the same object.
{% highlight python %}
    >>> list_a = [1, 2]
    >>> list_b = [1, 2]
    >>> list_a == list_b
    True
{% endhighlight %}
We can see that the values of list_a and list_b are indeed equal to each other. However, are list_a and list_b referring to the same list or just two lists of equal values?
{% highlight python %}
    >>> list_a is list_b
    False
{% endhighlight %}
As you probably predicted, list_a and list_b are different list objects although they have the same values. A quick use of id() to show their unique memory values confirms this.
{% highlight python %}
    >>> id(list_a)
    140492279077704
    >>> id(list_b)
    140492246777608
{% endhighlight %}
Alternatively, we can make the lists refer to the same object by variable assignment.
{% highlight python %}
    >>> list_a = [1, 2]
    >>> list_b = list_a
    >>> list_b is list_a
    True
    >>> print(list_a)
    [1, 2]
    >>> list_b.append(3)
    >>> print(list_a)
    [1, 2, 3]
{% endhighlight %}
Interesting, because we assigned list_b to the list_b variable, both lists now refer to the same object. Therefore, when the object value is modified through the variable reference of one, the value referenced by the other variable is also changed.

Let’s take a look at the string type. Remember we mentioned before that string objects are immutable in Python.
{% highlight python %}
    >>> str_a = "hello"
    >>> str_b = "hello"
    >>> str_a == str_b
    True
{% endhighlight %}
We can see here two assignments of strings to variables str_a and str_b. Predictably, we can compare the two using “==” and see that the values are equal to each other.

What do you think will happen if we test if str_a and str_b refer to the same object?
{% highlight python %}
    >>> str_a is str_b
    True
{% endhighlight %}
What? We see clearly in the previous code block that we declare two variables with two equal value strings of the same type. This isn’t a mistake. Python has pulled a subtle trick to conserve resources and created only one object for the string “hello”. When str_b is assigned to “hello” Python recognizes an opportunity to conserve memory space. Python can get away with doing this because the string is an immutable object and can never be changed. Therefore, instead of storing two immutable string objects, Python stores one and adds references to the immutable object at variable assignment.

So what will happen if we reassign str_a to “goodbye”? Will str_b’s object value change?
{% highlight python %}
    >>> str_a = "goodbye"
    >>> print(str_b)
    hello
{% endhighlight %}
We can see that str_b will not be modified since str_a simply references a new object while str_b continues to reference the “hello” object.

The important difference between how Python treats immutable and mutable objects carries over in the operation of function calls. Python passes arguments to functions “by object reference” or sometime referred to as “passing by sharing”. That is, the parameters of a function will be assigned to the referenced objects of the arguments. In other words, the parameters in the function become aliases of the actual arguments.

What this means is that any function that is passed a mutable object will have the ability to modify that referenced object. On the other hand, for immutable objects, their immutable nature stands and the objects are not able to be modified in the called function.

Let’s take a look at two examples of passing a mutable object and immutable object to a function and observe its effects on the original variable reference.
{% highlight python %}
    def add_two(num):
        num += 2

    >>> a = 4
    >>> add_two(a)
    >>> print(a)
    4
{% endhighlight %}
We can see that passing an immutable object (an integer) to the function and attempting to modify that object results in no affect to the object being passed.

Let’s see what happens when we pass a mutable object to a function.
{% highlight python %}
    def append_three(list_):
        list_.append()

    >>> my_list = [1, 2]
    >>> append_three(my_list)
    >>> print(my_list)
    [1, 2, 3]
{% endhighlight %}
The example shows that the function produced a “side effect” and modified the list object that was passed to the function.

Given this information it’s important to be mindful when passing mutable objects to functions. Utilizing the function may have unintended results of modifying the passed list when the actual intention was returning a new list operated on by the function.

Therefore, it’s a good practice to make a copy of the mutable object being passed to the function in the body of the function. The function can then act on this copied mutable object and return it without modifying the original object.
