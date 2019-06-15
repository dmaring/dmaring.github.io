var hostname = "http://dmaring.github.io";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Everything is an object in Python",
      category: ["post"],
      content: "\n    \n\n\nPython is really an amazing high level programming language. It’s relatively easy to learn and promotes simple syntax and easily readable code. Python’s adoption has exploded resulting in thousands of useful modules to extend the functionality of your code.\n\nA unique characteristic of the language is that everything in Python is an object. Integers, Strings, Lists, Tuples, and Dictionaries are all represented as objects. Even functions are represented by objects. This leads to some interesting behavior while assigning variables to objects as well as passing our objects to functions.\n\nWe can investigate objects in python using a few built in functions: id and type. The id() function is very useful to find the unique identifier for an object. When using CPython, the value returned by id() is the memory address where the object is stored.\n\n    &gt;&gt;&gt; a = \"hello\"\n    &gt;&gt;&gt; id(a)\n    140492286431160\n\n\nThe output of id() and the memory address will be different each time you run the interpreter given that Python dynamically chooses where to place objects in memory.\n\nWhat if we want to know what type an object is based on the variable assigned to it? We can use the type() builtin function to accomplish this.\n\n    &gt;&gt;&gt; a = \"hello\"\n    &gt;&gt;&gt; type(a)\n    \"&lt;class 'str'&gt;\"\n\nPython has both mutable and immutable object types. It behooves anyone working with Python to understand the mutability aspects of Python objects and the nuances that come along with it.\n\nFirst of all, an object is mutable if it is able to be modified. For example, a list is a mutable object type in Python. In the following example, a list is appended (and thus modified) so that an additional item is added to the list. This demonstrates the mutability of the list object.\n\n    &gt;&gt;&gt; my_list = [1, 2, 3]\n    &gt;&gt;&gt; my_list.append(4)\n    &gt;&gt;&gt; print(my_list)\n    [1, 2, 3, 4]\n\nWe call the list’s append method which modifies itself with the addition of the integer 4.\n\nAlternatively, strings are an immutable object type in Python. This means that they are not able to be modified after they are created. For the following word, let’s try to replace the first character in the string.\n\n    &gt;&gt;&gt; my_string = \"hello\"\n    &gt;&gt;&gt; my_string[0]\n    'h'\n    &gt;&gt;&gt; my_string[0] = \"j\"\n    Traceback (most recent call last):\n      File \"&lt;stdin&gt;\", line 1, in &lt;module&gt;\n    TypeError: 'str' object does not support item assignment\n\nA TypeError is thrown telling us that we aren’t able to modify the string.\n\nThe first thing to keep in mind when using mutable and immutable objects is how assignment works for these different objects. Mutable objects in Python include lists, sets, and dictionaries. Immutable object types include integers, floats, strings, and tuples.\n\nThere are two operators used to test for equality of two objects or the sameness of two objects. The “==” will test whether the values of two objects are equal to each other. The “is” operator will check if variables are referencing the same object.\n\n    &gt;&gt;&gt; list_a = [1, 2]\n    &gt;&gt;&gt; list_b = [1, 2]\n    &gt;&gt;&gt; list_a == list_b\n    True\n\nWe can see that the values of list_a and list_b are indeed equal to each other. However, are list_a and list_b referring to the same list or just two lists of equal values?\n\n    &gt;&gt;&gt; list_a is list_b\n    False\n\nAs you probably predicted, list_a and list_b are different list objects although they have the same values. A quick use of id() to show their unique memory values confirms this.\n\n    &gt;&gt;&gt; id(list_a)\n    140492279077704\n    &gt;&gt;&gt; id(list_b)\n    140492246777608\n\nAlternatively, we can make the lists refer to the same object by variable assignment.\n\n    &gt;&gt;&gt; list_a = [1, 2]\n    &gt;&gt;&gt; list_b = list_a\n    &gt;&gt;&gt; list_b is list_a\n    True\n    &gt;&gt;&gt; print(list_a)\n    [1, 2]\n    &gt;&gt;&gt; list_b.append(3)\n    &gt;&gt;&gt; print(list_a)\n    [1, 2, 3]\n\nInteresting, because we assigned list_b to the list_b variable, both lists now refer to the same object. Therefore, when the object value is modified through the variable reference of one, the value referenced by the other variable is also changed.\n\nLet’s take a look at the string type. Remember we mentioned before that string objects are immutable in Python.\n\n    &gt;&gt;&gt; str_a = \"hello\"\n    &gt;&gt;&gt; str_b = \"hello\"\n    &gt;&gt;&gt; str_a == str_b\n    True\n\nWe can see here two assignments of strings to variables str_a and str_b. Predictably, we can compare the two using “==” and see that the values are equal to each other.\n\nWhat do you think will happen if we test if str_a and str_b refer to the same object?\n\n    &gt;&gt;&gt; str_a is str_b\n    True\n\nWhat? We see clearly in the previous code block that we declare two variables with two equal value strings of the same type. This isn’t a mistake. Python has pulled a subtle trick to conserve resources and created only one object for the string “hello”. When str_b is assigned to “hello” Python recognizes an opportunity to conserve memory space. Python can get away with doing this because the string is an immutable object and can never be changed. Therefore, instead of storing two immutable string objects, Python stores one and adds references to the immutable object at variable assignment.\n\nSo what will happen if we reassign str_a to “goodbye”? Will str_b’s object value change?\n\n    &gt;&gt;&gt; str_a = \"goodbye\"\n    &gt;&gt;&gt; print(str_b)\n    hello\n\nWe can see that str_b will not be modified since str_a simply references a new object while str_b continues to reference the “hello” object.\n\nThe important difference between how Python treats immutable and mutable objects carries over in the operation of function calls. Python passes arguments to functions “by object reference” or sometime referred to as “passing by sharing”. That is, the parameters of a function will be assigned to the referenced objects of the arguments. In other words, the parameters in the function become aliases of the actual arguments.\n\nWhat this means is that any function that is passed a mutable object will have the ability to modify that referenced object. On the other hand, for immutable objects, their immutable nature stands and the objects are not able to be modified in the called function.\n\nLet’s take a look at two examples of passing a mutable object and immutable object to a function and observe its effects on the original variable reference.\n\n    def add_two(num):\n        num += 2\n\n    &gt;&gt;&gt; a = 4\n    &gt;&gt;&gt; add_two(a)\n    &gt;&gt;&gt; print(a)\n    4\n\nWe can see that passing an immutable object (an integer) to the function and attempting to modify that object results in no affect to the object being passed.\n\nLet’s see what happens when we pass a mutable object to a function.\n\n    def append_three(list_):\n        list_.append()\n\n    &gt;&gt;&gt; my_list = [1, 2]\n    &gt;&gt;&gt; append_three(my_list)\n    &gt;&gt;&gt; print(my_list)\n    [1, 2, 3]\n\nThe example shows that the function produced a “side effect” and modified the list object that was passed to the function.\n\nGiven this information it’s important to be mindful when passing mutable objects to functions. Utilizing the function may have unintended results of modifying the passed list when the actual intention was returning a new list operated on by the function.\n\nTherefore, it’s a good practice to make a copy of the mutable object being passed to the function in the body of the function. The function can then act on this copied mutable object and return it without modifying the original object.\n",
      tags: ["python","object oriented programming"],
      id: 0
    });
    

    index.add({
      title: "Whats the deal with Class and Instance attributes?",
      category: ["post"],
      content: "\n    \n\n\nObject oriented programming (OOP) affords a us a great way to to organize and use our code. It enables us to do cool things link data encapsulation, hiding data, and data abstraction. Python, although not exclusively tied to OOP, is a wonderful programming language for practicing the OOP paradigm.\n\nWithin this world of classes and instances, there are a few items that can get confusing at implementation. Classes are made up of attributes and methods. Further, attributes can be instance attributes or class attributes. Likewise there are instance methods and class methods.\n\nIn this post, we’ll examine Class attributes and instance attributes. Along the way we’ll touch on Class methods and instance methods as well. What are they and what makes them different? What are the advantages and disadvantages of using either?\n\nSo lets dive in…\n\n\nAttributes in general allow us to store information about some “thing”. For example, attributes of a dog may include: name, breed, gender, color. Attributes of a Car could include things like: color, make, year. In the case of dogs the corresponding class definition could look like:\n\nclass Dog:\n    \"\"\"A class that models a dog\"\"\"\n\n    def __init__(self, name, breed, gender, color):\n        self.name = name\n        self.breed = breed\n        self.gender = gender\n        self.color = color\n\nThen, we can initialize some dog instances of this class:\n\n    &gt;&gt;&gt; my_dog = Dog('Riley', 'Labrador', 'Female', 'Yellow')\n    &gt;&gt;&gt; rando_dog = Dog('Spot', 'Bulldog', 'Male', 'Gray')\n\nGreat, now we have two instances of dog: Riley and Spot. We instantiated them using Dog() passing in the arguments for ‘name’, ‘breed’, ‘gender’, ‘color’. For Riley that will set instance attributes self.name = ‘Riley’, self.breed = ‘Labrador’, self.gender = ‘Yellow’.\n\nWe know have the ability to access Riley’s particular instance of dog as well as the instance attributes.\n\n&gt;&gt;&gt; my_dog.name\nRiley\n&gt;&gt;&gt; my_dog.breed\nLabrador\n&gt;&gt;&gt; my_dog.gender\nYellow\n\nWe could even overwrite the attributes of the my_dog instance in similar fashion:\n\n&gt;&gt;&gt; my_dog.breed = 'Pitbull'\n&gt;&gt;&gt; my_dog.breed\nPitbull\n\nWhile this serves as a very straight forward way of setting and getting attributes, it doesn’t follow some of the tenants of OOB. One of them being that we aren’t protecting the user from hurting him or herself. For example, right now someone could enter a number for the name.\n\n&gt;&gt;&gt; my_dog.name = 234\n\nWe have no way to protect that data and the user from making the mistake of storing a number where a string should be. So how do we accomplish this? Well the first way is to only allow access to attributes through getter and setter methods, along with storing the data in private attributes.\n\nclass Dog:\n    \"\"\"A class that models a dog\"\"\"\n\n    def __init__(self, name, breed, gender, color):\n        self.set_name(name)\n        self.breed = breed\n        self.gender = gender\n        self.color = color\n\n    def set_name(self, value):\n        if isinstance(value, str):\n            self.__name = value\n        else:\n            raise ValueError(\"name must be a string\")\n    \n    def get_name(self):\n        return(self.__name)\n\nThere are a few things new here. First we’ve created two new instance methods: a setter method and a getter method.\n\nThe setter method is now the gateway to storing the name attribute for an instance of Dog. When we call Dog(‘Riley’) to instantiate a new dog, ‘Riley’ will now be passed to our set_name method. The set_name method will check if the argument being passed to it a type of string. If it is, the set_name method will store that attribute in the __name attribute. So whats with the double underscores (aka ‘dunders’) before the name attribute. Well, in Python ‘dunders’ before an attribute name signals that the attribute is a private attribute. A private attribute cannot be accessed by anyone except for the instance itself. Therefore, here is some new behavior:\n\n&gt;&gt;&gt; my_dog.__name\nTraceback (most recent call last):\n  File \"&lt;stdin&gt;\", line 1, in &lt;module&gt;\nAttributeError: 'Dog' object has no attribute '__name'\n&gt;&gt;&gt; my_dog.get_name()\n'Riley'\n\nThis now returns an “object has no attribute” error because __name is a private instance. However, we can access the __name attribute indirectly using our newly created getter method get_name.\n\nSo this is great, we get to protect our attributes and the users from using them in unintended ways. However, having to use a setter and getter like this is rather cumbersome and takes a way from the simplicity of being able to access and set attributes using the dot notation (e.g. my_dog.name = “Riley”) . How could we keep the same benefits that the getter and setter methods give us to protect our attributes while making it easier for the user to interface?\n\nThe answer in Python is to use the @ property decorator. The @ property decorator is a special wrapper function that allows us to make getter and setter like functions but still allow the use of the ‘dot’ notation to access and set those attributes. The @ property will serve to define our attribute and allow access to an otherwise private attribute. Correspondingly we will use the @ attribute.setter decorator to create a function that will set the private attribute using the ‘dot’ notation.\n\nclass Dog:\n    “””A class that models a dog”””\n    def __init__(self, name):\n        self.name = name\n\n    @property\n        def name(self):\n            return(self.__name)\n\n    @name.setter\n    def name(self, value):\n        if isinstance(value, str):\n            self.__name = value\n        else:\n            raise ValueError(“name must be a string”)\n\nNow the user can set the name attribute as well as get the name attribute. All without being the wiser that name is being checked for correct type and the get method is accessing the value from a private attribute.\n\n&gt;&gt;&gt; my_dog = Dog('Riley')\n&gt;&gt;&gt; my_dog.name\n'Riley'\n&gt;&gt;&gt; my_dog.name = 'Spot'\n&gt;&gt;&gt; my_dog.name\n'Spot'\n\nLet’s finally get to the second type of attributes: Class attributes. Class attributes belong to the class and can be accessed by any instance instantiated by the class. However, unlike instance attributes, there is only one copy of a Class attribute and it is shared amongst all instances of that class. An example will make this more clear.\n\nclass Dog:\n\n\t\"\"\"A class that models a dog\"\"\"\n\tnumber_of_dogs = 0\n\t\n\tdef __init__(self, name):\n\t\tself.name = name\n\n\t@property\n\tdef name(self):\n\t\treturn(self.__name)\n\n\t@name.setter\n\tdef name(self, value):\n\t\tif isinstance(value, str):\n\t\t\tself.__name = value\n\t\telse:\n\t\t\traise ValueError(\"name must be a string\")\n                    \n \n\nWe’ve now created a Class attribute “number_of_dogs” and initialized it to 0. We will use this Class attribute to keep track of the number of dogs created (instantiated) for the Dog class.\n\nWe can access and manipulate the Class attribute through the Class namespace.\n\n&gt;&gt;&gt; Dog.number_of_dogs\n0\n&gt;&gt;&gt; Dog.number_of_dogs = 1\n&gt;&gt;&gt; Dog.number_of_dogs\n1\n    \n\nNow that we have a Class attribute we need a way of updating the number of dogs when a Dog is instantiated. For this we will create a class method. A class method is a method that belongs to the class and subsequently calls itself as its first argument.\n\nclass Dog:\n    \"\"\"A class that models a dog\"\"\"\n    number_of_dogs = 0\n\n    def __init__(self, name):\n        self.name = name\n        Dog.add_dog()\n\n    @property\n        def name(self):\n            return(self.__name)\n\n    @name.setter\n        def name(self, value):\n            if isinstance(value, str):\n                self.__name = value\n            else:\n                raise ValueError(\"name must be a string\")\n    \n    @classmethod\n        def add_dog(cls):\n            cls.number_of_dogs += 1\n\nWe add the @ classmethod add_dog which takes in the class as its only argument. We then add 1 to the Class attribute number of dogs to increment the overall number of dogs.\n\nEvery Class and instance of the class stores a dictionary in the attribute ‘dict’ containing all of its attributes. It’s a useful thing to know when you want to quickly see all the attributes contained in your instance.\n\n&gt;&gt;&gt; my_dog = Dog('Riley')\n&gt;&gt;&gt; my_dog.__dict__\n{'_Dog__name': 'Riley'}\n&gt;&gt;&gt; Dog.number_of_dogs\n1\n&gt;&gt;&gt; rando_dog = Dog('Spot')\n&gt;&gt;&gt; Dog.number_of_dogs\n2\n\nSo there you have it. Class attributes and instance attributes are very different things but can work together to do some really cool stuff. Class attributes hold data shared by any and all instances instantiated of that class. Those class attributes are accessed through the namespace of the class itself. Instance attributes are unique to the instances instantiated. Instance attributes are accessed through the instance’s namespace. Python gives us a great “pythonic” way of using decorators to protect our attributes and users while keeping a uniform interface to the attribute themselves.\n",
      tags: ["python","object oriented programming"],
      id: 1
    });
    


var store = [{
    "title": "Everything is an object in Python",
    "link": "/post/everything-is-an-object-in-python.html",
    "image": null,
    "date": "May 29, 2019",
    "category": ["post"],
    "excerpt": "Python is really an amazing high level programming language. It’s relatively easy to learn and promotes simple syntax and easily..."
},{
    "title": "Whats the deal with Class and Instance attributes?",
    "link": "/post/class-and-instance-attributes.html",
    "image": null,
    "date": "May 28, 2019",
    "category": ["post"],
    "excerpt": "Object oriented programming (OOP) affords a us a great way to to organize and use our code. It enables us..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});