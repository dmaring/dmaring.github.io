![Image result for artificial intelligence](https://miro.medium.com/max/0/0*xy4Ub1OpJXWABuE6)

How to explain Machine Learning to your Grandmother
===================================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----a76a8ee9e1d7--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----a76a8ee9e1d7--------------------------------)[

Jun 26, 2019·8 min read

](https://medium.com/@andrew.maring/how-to-explain-machine-learning-to-your-grandmother-a76a8ee9e1d7?source=post_page-----a76a8ee9e1d7--------------------------------)

Explaining technology to the uninitiated can be a challenge. Technology topics often build on layers of previous learnings and understandings of adjacent technical topics. For example, you can’t truly understand networking with BGP or OSPF without first obtaining a whole slew of previous networking knowledge. We use abbreviated terms and acronyms for complicated topics that we’ve spent time learning and understanding.

However, it’s well known that for someone to truly know a topic they should be able to explain that topic to many different audiences. The ability to “explain it to a five year old” is often how I’ve heard it referred and this is certainly true. Interestingly, this exercise cuts through the buzz words and industry jargon that often accompanies conversations between people within the tech industry. It forces us to truly think about the what and the why in order to frame the information in a relatable context.

Artificial Intelligence and Machine Learning are no doubt some hottest buzz words in technology today. Along with any upcoming buzzword there are a few things that happen. First, it becomes overly used and repeated by people who don’t truly understand it thus creating confusion over what “it” actually is. Second, money follows the rise of buzz words and you can confidently bet that tech companies will be working said buzz word into their marketing material regardless of whether they truly employ the technology in their product. Lastly, and even more so with Machine Learning and Artificial Intelligence, the public grows weary by some of the more outlandish misrepresentations of the technology and anxiety and fear muddy the waters even further.

This post is my attempt to take a perceptively complicated and arcane topic, Machine Learning, and explain it to my grandmother. Although both of my grandmothers have passed, it will be a fun and nostalgic exercise having these imaginary conversations with them.

So, grandma, buckle up! Lets talk about Machine Learning and why you should care about it!

Buzzword Soup: clearing up the relationships between Artificial Intelligence, Machine Learning, and Deep Learning
=================================================================================================================

Do you remember that old 1960’s tv show “Lost in Space”? It was about a family in the future that gets stranded on an unfriendly planet. Luckily they have the help of a friendly robot. The robot would famously exclaim “Danger Will Robinson!” in an effort to warn his human companions of hazardous situations.

Well this is just one example of some of the early imaginings of Artificial Intelligence or AI in popular culture. The robot exhibited human characteristics: the ability to identify objects and sounds through its sensors (like our human senses of touch, smell, hearing, etc.) and process that information (like the human brain) in a way that produces actionable outcomes like sending signals to a speaker to announce “Danger!”

<img alt="" class="fd em ei jr w" src="https://miro.medium.com/max/996/1\*A32\_K-CP0CqOeaSEhDJZ0Q.gif" width="498" height="328" srcSet="https://miro.medium.com/max/552/1\*A32\_K-CP0CqOeaSEhDJZ0Q.gif 276w, https://miro.medium.com/max/996/1\*A32\_K-CP0CqOeaSEhDJZ0Q.gif 498w" sizes="498px" role="presentation"/>

So you can see that Artificial Intelligence is something that has been on humans minds since the invention of computing devices and before.

Simply put, Artificial Intelligence is the ability for machines to perform human cognitive abilities. The extent of these abilities helps us differentiate AI into separate categories. One of these forms, **General AI**, is the ability of the machine to exhibit all of the behaviors of a human being. General AI is considered the holy grail of Artificial Intelligence, and to this day is not fully realized. The long term goal of General AI, and many researchers, is to perform any intellectual task that a human can.

More commonly we experience Artificial Intelligence in the form of “Narrow AI”. “**Narrow AI**” can be explained as the ability of a machine to do 1 or more tasks in a similar fashion as a human. Some of the elementary examples of this include Optical Character Recognition (OCR) for recognizing text and simple voice recognition (like we have in our mobile phone personal assistants) for representing spoken word using Natural Language Processing (NLP).

Now that we’ve got a good hold on what Artificial Intelligence is we can talk about **Machine Learning**. Machine Learning can be thought of a subset of AI. Its goal is to create mathematical models by training on algorithms on input data. The most interesting thing about Machine Learning is that it’s name actually describes what it does. We train or teach our machine learning algorithms by feeding it massive amounts of data. In turn the machines learn from this training. How we actually train it depends on the intended use cases as desired outcomes.

<img alt="" class="fd em ei jr w" src="https://miro.medium.com/max/800/1\*zEnTR1fxondu1AG4Ec-HLw.png" width="400" height="387" srcSet="https://miro.medium.com/max/552/1\*zEnTR1fxondu1AG4Ec-HLw.png 276w, https://miro.medium.com/max/800/1\*zEnTR1fxondu1AG4Ec-HLw.png 400w" sizes="400px" role="presentation"/>

Training Machines
=================

In machine learning there are two widely adopted methods: **Supervised Learning** and **Unsupervised Learning**. Supervised Learning takes place when the Machine Learning algorithm is fed data that is labeled. For example, if we are training an ML algorithm to identify pictures of flowers we would feed it many example images of various flowers. The ML algorithm would try to find the patterns that all the flower images possess. Furthermore, we tell the ML algorithm that all of the images we trained it in on are of flowers (i.e. labeled flowers). Thus the ML t algorithm makes the connection between the patterns it discovers as well as what we want to label the outcomes of these patterns.

Continuing the above analogy we could use our newly found models from the supervised learning to help us identify pictures of flowers that are unlabeled (i.e. we don’t know before hand what’s in a picture beforehand). This is a very simple example to illustrate concept of supervised learning but gets the idea across.

In unsupervised learning we still feed the ML algorithm with massive amounts of data. However, this time we don’t label the data during the training process as we did with supervised learning. This is type of data mining is done when you don’t have labeled data and/or you are primarily concerned with identifying trends and patterns from the data. Unsupervised learning can expose patterns and expose trends to glean information about the data that wouldn’t otherwise be apparent. Examples of this would be trying to find trends to predict stock market performance or targeting online shoppers with suggested products.

If we dive deeper down this rabbit we come to the topic of **Deep Learning**. Deep Learning is a type of Machine Learning that uses neural networks. It’s able to use supervised and unsupervised learning techniques as discussed previously. Additionaly, it has the ability to use other training methodologies like classification, regression, pattern recognition, and clustering. For our talk we will stick with supervised learning technique.

Deep Learning takes advantage of what are called neural networks. A **neural network** is a computing model that aims to resemble the networked structure of neurons in the brain. It uses layers to break down data input into various levels of abstraction. The layers in-between the Input and Output layers are called Hidden layers and can range from 2 to hundreds in what are called further characterized as Deep Learning Neural Networks. A high level diagram of a neural network can be seen below.

<img alt="" class="fd em ei jr w" src="https://miro.medium.com/max/3956/1\*IFJyh1D5N6NCcYGWREK68A.png" width="1978" height="854" srcSet="https://miro.medium.com/max/552/1\*IFJyh1D5N6NCcYGWREK68A.png 276w, https://miro.medium.com/max/1104/1\*IFJyh1D5N6NCcYGWREK68A.png 552w, https://miro.medium.com/max/1280/1\*IFJyh1D5N6NCcYGWREK68A.png 640w, https://miro.medium.com/max/1400/1\*IFJyh1D5N6NCcYGWREK68A.png 700w" sizes="700px" role="presentation"/>

Each of these layers are interconnected via nodes (or neurons) and use the previous layers output as input for its operations. A node is a place where some computation operation happens. It is loosely analogous to neuron in the brain that lights up with stimuli which subsequently light up other neurons in the brain.

The nodes in this case perform an operation on input data and weight it before calculating an output result. The output result will influence if the node will fire or stimulate the next node neuron on the following layer. After all of the layers have been traversed, the resulting combination of nodes (or neurons) that are fired in the Output layer will give us an outcome categorization of the input data.

<img alt="" class="fd em ei jr w" src="https://miro.medium.com/max/1310/1\*\_tUtD8EvW7WZiLT-l-A\_sA.png" width="655" height="318" srcSet="https://miro.medium.com/max/552/1\*\_tUtD8EvW7WZiLT-l-A\_sA.png 276w, https://miro.medium.com/max/1104/1\*\_tUtD8EvW7WZiLT-l-A\_sA.png 552w, https://miro.medium.com/max/1280/1\*\_tUtD8EvW7WZiLT-l-A\_sA.png 640w, https://miro.medium.com/max/1310/1\*\_tUtD8EvW7WZiLT-l-A\_sA.png 655w" sizes="655px" role="presentation"/>

Deep Learning has become a burgeoning sub area of the already sky rocketing field of artificial intelligence. The results of which have already begun to bear fruit and show off some of its capabilities. The Deep Learning technique has been around for quite some time but has only become popular in relatively recent years. There are a few reasons for this.

First, the amount of computational power available today and the rate of increase of this power has given us machines with capabilities that were previously unimaginable. The advancement and utilization of Graphical Processing Unit’s (GPUs) parallel processing has provided powerful sources of computation. Further, the ease of accessibility and availability of these computing resources in the cloud has made access to large amounts of distributed computing resources trivial.

Second, the more data that is fed to ML in the training process the smarter outcomes are reaped from the process. We are at a point in time when we are bursting with data. IoT devices are collecting physiological data from our wrists and phones, advertisers are gathering browsing habits from our devices, and farmers are using sensors in their fields to optimize crop yield. These disparate examples don’t even scratch the surface of the amount of data that is being generated and collected each day from every aspect of our world.

A great pop culture example of real life Deep Learning in action is that of IBM Watson. IBM Watson was created as a proof of concept to show how machine learning and deep learning could compete against humans in Jeopardy. The task is an interesting one that requires very advanced Natural Language Processing involving complex human language context and nuance.

In 2011, IBM Watson took on two Jeopardy champions, Brad Rutter and Ken Jennings. Watson defeated both ultimately winning the prize of $1 million. IBM Watson has now become the trademark marketing name for IBM AI the expanded superset of IBMs comercial AI technology. Along with other cloud providers, you can pay to use IBM Watson in your own applications and websites.

<img alt="" class="fd em ei jr w" src="https://miro.medium.com/max/2200/1\*C3z8KNa3EBrHxiMRvXGbAw.jpeg" width="1100" height="618" srcSet="https://miro.medium.com/max/552/1\*C3z8KNa3EBrHxiMRvXGbAw.jpeg 276w, https://miro.medium.com/max/1104/1\*C3z8KNa3EBrHxiMRvXGbAw.jpeg 552w, https://miro.medium.com/max/1280/1\*C3z8KNa3EBrHxiMRvXGbAw.jpeg 640w, https://miro.medium.com/max/1400/1\*C3z8KNa3EBrHxiMRvXGbAw.jpeg 700w" sizes="700px" role="presentation"/>

This short talk is just the tip of the iceberg when discussing AI, ML, and DL. In the coming years we will see more aspects of our lives influenced by AI in subtle and not so subtle ways. The media apprehension regarding AI and automation has reached a fever pitch. Only time will tell whether this unstoppable march towards the ultimate goal of “General AI” will turn out best for all of mankind.

Sources:

\[What’s The Difference Between Supervised and Unsupervised Learning? — Dataconomy\]([https://dataconomy.com/2015/01/whats-the-difference-between-supervised-and-unsupervised-learning/](https://dataconomy.com/2015/01/whats-the-difference-between-supervised-and-unsupervised-learning/))  
\[But what \*is\* a Neural Network? | Deep learning, chapter 1 — YouTube\]([https://www.youtube.com/watch?v=aircAruvnKk](https://www.youtube.com/watch?v=aircAruvnKk))  
\[Which machine learning algorithm should I use? — The SAS Data Science Blog\]([https://blogs.sas.com/content/subconsciousmusings/2017/04/12/machine-learning-algorithm-use/](https://blogs.sas.com/content/subconsciousmusings/2017/04/12/machine-learning-algorithm-use/))  
\[Deep learning — Wikipedia\]([https://en.wikipedia.org/wiki/Deep\_learning](https://en.wikipedia.org/wiki/Deep_learning))  
\[A Beginner’s Guide to Neural Networks and Deep Learning | Skymind\]([https://skymind.ai/wiki/neural-network](https://skymind.ai/wiki/neural-network))