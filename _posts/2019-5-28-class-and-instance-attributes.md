---
layout: post
date: 2019-5-28
title: "Whats the deal with Class and Instance attributes?"
description: Learn the differences between class and instance attributes
comments: false
category: 
- post

tags:
- python
- object oriented programming
---

<figure>
    <img src="https://cdn-images-1.medium.com/max/2000/0*JQm7vVCDe_U4Y5F1" />
</figure>


Object oriented programming (OOP) affords a us a great way to to organize and use our code. It enables us to do cool things link data encapsulation, hiding data, and data abstraction. Python, although not exclusively tied to OOP, is a wonderful programming language for practicing the OOP paradigm.

Within this world of classes and instances, there are a few items that can get confusing at implementation. Classes are made up of attributes and methods. Further, attributes can be instance attributes or class attributes. Likewise there are instance methods and class methods.

In this post, we’ll examine Class attributes and instance attributes. Along the way we’ll touch on Class methods and instance methods as well. What are they and what makes them different? What are the advantages and disadvantages of using either?

So lets dive in…

<!--more-->
Attributes in general allow us to store information about some “thing”. For example, attributes of a dog may include: name, breed, gender, color. Attributes of a Car could include things like: color, make, year. In the case of dogs the corresponding class definition could look like:
{% highlight python %}
class Dog:
    """A class that models a dog"""

    def __init__(self, name, breed, gender, color):
        self.name = name
        self.breed = breed
        self.gender = gender
        self.color = color
{% endhighlight %}
Then, we can initialize some dog instances of this class:
{% highlight python %}
    >>> my_dog = Dog('Riley', 'Labrador', 'Female', 'Yellow')
    >>> rando_dog = Dog('Spot', 'Bulldog', 'Male', 'Gray')
{% endhighlight %}
Great, now we have two instances of dog: Riley and Spot. We instantiated them using Dog() passing in the arguments for ‘name’, ‘breed’, ‘gender’, ‘color’. For Riley that will set **instance attributes** self.name = ‘Riley’, self.breed = ‘Labrador’, self.gender = ‘Yellow’.

We know have the ability to access Riley’s particular instance of dog as well as the **instance attributes**.
{% highlight python %}
>>> my_dog.name
Riley
>>> my_dog.breed
Labrador
>>> my_dog.gender
Yellow
{% endhighlight %}
We could even overwrite the attributes of the my_dog instance in similar fashion:
{% highlight python %}
>>> my_dog.breed = 'Pitbull'
>>> my_dog.breed
Pitbull
{% endhighlight %}
While this serves as a very straight forward way of setting and getting attributes, it doesn’t follow some of the tenants of OOB. One of them being that we aren’t protecting the user from hurting him or herself. For example, right now someone could enter a number for the name.
{% highlight python %}
>>> my_dog.name = 234
{% endhighlight %}
We have no way to protect that data and the user from making the mistake of storing a number where a string should be. So how do we accomplish this? Well the first way is to only allow access to attributes through getter and setter methods, along with storing the data in private attributes.
{% highlight python %}
class Dog:
    """A class that models a dog"""

    def __init__(self, name, breed, gender, color):
        self.set_name(name)
        self.breed = breed
        self.gender = gender
        self.color = color

    def set_name(self, value):
        if isinstance(value, str):
            self.__name = value
        else:
            raise ValueError("name must be a string")
    
    def get_name(self):
        return(self.__name)
{% endhighlight %}
There are a few things new here. First we’ve created two new instance methods: a setter method and a getter method.

The setter method is now the gateway to storing the name attribute for an instance of Dog. When we call Dog(‘Riley’) to instantiate a new dog, ‘Riley’ will now be passed to our set_name method. The set_name method will check if the argument being passed to it a type of string. If it is, the set_name method will store that attribute in the __name attribute. So whats with the double underscores (aka ‘dunders’) before the name attribute. Well, in Python ‘dunders’ before an attribute name signals that the attribute is a **private attribute**. A private attribute cannot be accessed by anyone except for the instance itself. Therefore, here is some new behavior:

{% highlight python %}
>>> my_dog.__name
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Dog' object has no attribute '__name'
>>> my_dog.get_name()
'Riley'
{% endhighlight %}

This now returns an “object has no attribute” error because __name is a private instance. However, we can access the __name attribute indirectly using our newly created getter method get_name.

So this is great, we get to protect our attributes and the users from using them in unintended ways. However, having to use a setter and getter like this is rather cumbersome and takes a way from the simplicity of being able to access and set attributes using the dot notation (e.g. my_dog.name = “Riley”) . How could we keep the same benefits that the getter and setter methods give us to protect our attributes while making it easier for the user to interface?

The answer in Python is to use the @ property decorator. The @ property decorator is a special wrapper function that allows us to make getter and setter like functions but still allow the use of the ‘dot’ notation to access and set those attributes. The @ property will serve to define our attribute and allow access to an otherwise private attribute. Correspondingly we will use the @ *attribute*.setter decorator to create a function that will set the private attribute using the ‘dot’ notation.

{% highlight python %}
class Dog:
    “””A class that models a dog”””
    def __init__(self, name):
        self.name = name

    @property
        def name(self):
            return(self.__name)

    @name.setter
    def name(self, value):
        if isinstance(value, str):
            self.__name = value
        else:
            raise ValueError(“name must be a string”)
{% endhighlight %}

Now the user can set the name attribute as well as get the name attribute. All without being the wiser that name is being checked for correct type and the get method is accessing the value from a private attribute.

{% highlight python %}
>>> my_dog = Dog('Riley')
>>> my_dog.name
'Riley'
>>> my_dog.name = 'Spot'
>>> my_dog.name
'Spot'
{% endhighlight %}

Let’s finally get to the second type of attributes: **Class attributes**. Class attributes belong to the class and can be accessed by any instance instantiated by the class. However, unlike instance attributes, there is only one copy of a Class attribute and it is shared amongst all instances of that class. An example will make this more clear.

{% highlight python %}
class Dog:

	"""A class that models a dog"""
	number_of_dogs = 0
	
	def __init__(self, name):
		self.name = name

	@property
	def name(self):
		return(self.__name)

	@name.setter
	def name(self, value):
		if isinstance(value, str):
			self.__name = value
		else:
			raise ValueError("name must be a string")
                    
 {% endhighlight %}

We’ve now created a **Class attribute** “number_of_dogs” and initialized it to 0. We will use this Class attribute to keep track of the number of dogs created (instantiated) for the Dog class.

We can access and manipulate the Class attribute through the Class namespace.

{% highlight python %}
>>> Dog.number_of_dogs
0
>>> Dog.number_of_dogs = 1
>>> Dog.number_of_dogs
1
    
{% endhighlight %}

Now that we have a Class attribute we need a way of updating the number of dogs when a Dog is instantiated. For this we will create a class method. A class method is a method that belongs to the class and subsequently calls itself as its first argument.

{% highlight python %}
class Dog:
    """A class that models a dog"""
    number_of_dogs = 0

    def __init__(self, name):
        self.name = name
        Dog.add_dog()

    @property
        def name(self):
            return(self.__name)

    @name.setter
        def name(self, value):
            if isinstance(value, str):
                self.__name = value
            else:
                raise ValueError("name must be a string")
    
    @classmethod
        def add_dog(cls):
            cls.number_of_dogs += 1
{% endhighlight %}

We add the @ classmethod add_dog which takes in the class as its only argument. We then add 1 to the Class attribute number of dogs to increment the overall number of dogs.

Every Class and instance of the class stores a dictionary in the attribute ‘__dict__’ containing all of its attributes. It’s a useful thing to know when you want to quickly see all the attributes contained in your instance.

{% highlight python %}
>>> my_dog = Dog('Riley')
>>> my_dog.__dict__
{'_Dog__name': 'Riley'}
>>> Dog.number_of_dogs
1
>>> rando_dog = Dog('Spot')
>>> Dog.number_of_dogs
2
{% endhighlight %}

So there you have it. Class attributes and instance attributes are very different things but can work together to do some really cool stuff. Class attributes hold data shared by any and all instances instantiated of that class. Those class attributes are accessed through the namespace of the class itself. Instance attributes are unique to the instances instantiated. Instance attributes are accessed through the instance’s namespace. Python gives us a great “pythonic” way of using decorators to protect our attributes and users while keeping a uniform interface to the attribute themselves.
