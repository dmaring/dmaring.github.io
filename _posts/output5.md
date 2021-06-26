Whats the deal with Class and instance attributes?
==================================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----efac1df4136c--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----efac1df4136c--------------------------------)[

May 29, 2019·6 min read

](https://medium.com/@andrew.maring/whats-the-deal-with-class-and-instance-attributes-efac1df4136c?source=post_page-----efac1df4136c--------------------------------)

![](https://miro.medium.com/max/2000/0*JQm7vVCDe_U4Y5F1)

Object oriented programming (OOP) affords a us a great way to to organize and use our code. It enables us to do cool things link data encapsulation, hiding data, and data abstraction. Python, although not exclusively tied to OOP, is a wonderful programming language for practicing the OOP paradigm.

Within this world of classes and instances, there are a few items that can get confusing at implementation. Classes are made up of attributes and methods. Further, attributes can be instance attributes or class attributes. Likewise there are instance methods and class methods.

In this post, we’ll examine Class attributes and instance attributes. Along the way we’ll touch on Class methods and instance methods as well. What are they and what makes them different? What are the advantages and disadvantages of using either?

So lets dive in…

Attributes in general allow us to store information about some “thing”. For example, attributes of a dog may include: name, breed, gender, color. Attributes of a Car could include things like: color, make, year. In the case of dogs the corresponding class definition could look like:

```
class Dog:  
    """A class that models a dog""" def \_\_init\_\_(self, name, breed, gender, color):  
        self.name = name  
        self.breed = breed  
        self.gender = gender  
        self.color = color
```

Then, we can initialize some dog instances of this class:

```
\>>> my\_dog = Dog('Riley', 'Labrador', 'Female', 'Yellow')  
\>>> rando\_dog = Dog('Spot', 'Bulldog', 'Male', 'Gray')
```

Great, now we have two instances of dog: Riley and Spot. We instantiated them using Dog() passing in the arguments for ‘name’, ‘breed’, ‘gender’, ‘color’. For Riley that will set **instance attributes** self.name = ‘Riley’, self.breed = ‘Labrador’, self.gender = ‘Yellow’.

We know have the ability to access Riley’s particular instance of dog as well as the **instance attributes**.

```
\>>> my\_dog.name  
Riley  
\>>> my\_dog.breed  
Labrador  
\>>> my\_dog.gender  
Yellow
```

We could even overwrite the attributes of the my\_dog instance in similar fashion:

```
\>>> my\_dog.breed = 'Pitbull'  
\>>> my\_dog.breed  
Pitbull
```

While this serves as a very straight forward way of setting and getting attributes, it doesn’t follow some of the tenants of OOB. One of them being that we aren’t protecting the user from hurting him or herself. For example, right now someone could enter a number for the name.

```
\>>> my\_dog.name = 234
```

We have no way to protect that data and the user from making the mistake of storing a number where a string should be. So how do we accomplish this? Well the first way is to only allow access to attributes through getter and setter methods, along with storing the data in private attributes.

```
class Dog:  
    """A class that models a dog""" def \_\_init\_\_(self, name, breed, gender, color):  
        self.set\_name(name)  
        self.breed = breed  
        self.gender = gender  
        self.color = color def set\_name(self, value):  
        if isinstance(value, str):  
            self.\_\_name = value  
        else:  
            raise ValueError("name must be a string")  
      
    def get\_name(self):  
        return(self.\_\_name)
```

There are a few things new here. First we’ve created two new instance methods: a setter method and a getter method.

The setter method is now the gateway to storing the name attribute for an instance of Dog. When we call Dog(‘Riley’) to instantiate a new dog, ‘Riley’ will now be passed to our set\_name method. The set\_name method will check if the argument being passed to it a type of string. If it is, the set\_name method will store that attribute in the \_\_name attribute. So whats with the double underscores (aka ‘dunders’) before the name attribute. Well, in Python ‘dunders’ before an attribute name signals that the attribute is a **private attribute**. A private attribute cannot be accessed by anyone except for the instance itself. Therefore, here is some new behavior:

```
\>>> my\_dog.\_\_name  
Traceback (most recent call last):  
  File "<stdin>", line 1, in <module>  
AttributeError: 'Dog' object has no attribute '\_\_name'  
\>>> my\_dog.get\_name()  
'Riley'
```

This now returns an “object has no attribute” error because \_\_name is a private instance. However, we can access the \_\_name attribute indirectly using our newly created getter method get\_name.

So this is great, we get to protect our attributes and the users from using them in unintended ways. However, having to use a setter and getter like this is rather cumbersome and takes a way from the simplicity of being able to access and set attributes using the dot notation (e.g. my\_dog.name = “Riley”) . How could we keep the same benefits that the getter and setter methods give us to protect our attributes while making it easier for the user to interface?

The answer in Python is to use the @ property decorator. The @ property decorator is a special wrapper function that allows us to make getter and setter like functions but still allow the use of the ‘dot’ notation to access and set those attributes. The @ property will serve to define our attribute and allow access to an otherwise private attribute. Correspondingly we will use the @ _attribute_.setter decorator to create a function that will set the private attribute using the ‘dot’ notation.

```
class Dog:  
    “””A class that models a dog”””  
    def \_\_init\_\_(self, name):  
        self.name = name @property  
        def name(self):  
            return(self.\_\_name) @name.setter  
    def name(self, value):  
        if isinstance(value, str):  
            self.\_\_name = value  
        else:  
            raise ValueError(“name must be a string”)
```

Now the user can set the name attribute as well as get the name attribute. All without being the wiser that name is being checked for correct type and the get method is accessing the value from a private attribute.

```
\>>> my\_dog = Dog('Riley')  
\>>> my\_dog.name  
'Riley'  
\>>> my\_dog.name = 'Spot'  
\>>> my\_dog.name  
'Spot'
```

Let’s finally get to the second type of attributes: **Class attributes**. Class attributes belong to the class and can be accessed by any instance instantiated by the class. However, unlike instance attributes, there is only one copy of a Class attribute and it is shared amongst all instances of that class. An example will make this more clear.

```
class Dog:  
    """A class that models a dog"""  
    number\_of\_dogs = 0 def \_\_init\_\_(self, name):  
            self.name = name @property  
        def name(self):  
            return(self.\_\_name) @name.setter  
        def name(self, value):  
            if isinstance(value, str):  
                self.\_\_name = value  
            else:  
                raise ValueError("name must be a string")
```

We’ve now created a **Class attribute** “number\_of\_dogs” and initialized it to 0. We will use this Class attribute to keep track of the number of dogs created (instantiated) for the Dog class.

We can access and manipulate the Class attribute through the Class namespace.

```
\>>> Dog.number\_of\_dogs  
0  
\>>> Dog.number\_of\_dogs = 1  
\>>> Dog.number\_of\_dogs  
1
```

Now that we have a Class attribute we need a way of updating the number of dogs when a Dog is instantiated. For this we will create a class method. A class method is a method that belongs to the class and subsequently calls itself as its first argument.

```
class Dog:  
    """A class that models a dog"""  
    number\_of\_dogs = 0 def \_\_init\_\_(self, name):  
        self.name = name  
        Dog.add\_dog() @property  
        def name(self):  
            return(self.\_\_name) @name.setter  
        def name(self, value):  
            if isinstance(value, str):  
                self.\_\_name = value  
            else:  
                raise ValueError("name must be a string")  
      
    @classmethod  
        def add\_dog(cls):  
            cls.number\_of\_dogs += 1
```

We add the @ classmethod add\_dog which takes in the class as its only argument. We then add 1 to the Class attribute number of dogs to increment the overall number of dogs.

Every Class and instance of the class stores a dictionary in the attribute ‘\_\_dict\_\_’ containing all of its attributes. It’s a useful thing to know when you want to quickly see all the attributes contained in your instance.

```
\>>> my\_dog = Dog('Riley')  
\>>> my\_dog.\_\_dict\_\_  
{'\_Dog\_\_name': 'Riley'}  
\>>> Dog.number\_of\_dogs  
1  
\>>> rando\_dog = Dog('Spot')  
\>>> Dog.number\_of\_dogs  
2
```

So there you have it. Class attributes and instance attributes are very different things but can work together to do some really cool stuff. Class attributes hold data shared by any and all instances instantiated of that class. Those class attributes are accessed through the namespace of the class itself. Instance attributes are unique to the instances instantiated. Instance attributes are accessed through the instance’s namespace. Python gives us a great “pythonic” way of using decorators to protect our attributes and users while keeping a uniform interface to the attribute themselves.