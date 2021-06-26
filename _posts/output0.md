Puppr: the social app for dog people
====================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----dcdb1c496f29--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----dcdb1c496f29--------------------------------)[

Nov 7, 2019·6 min read

](https://medium.com/@andrew.maring/puppr-the-social-app-for-dog-people-dcdb1c496f29?source=post_page-----dcdb1c496f29--------------------------------)

![](https://miro.medium.com/max/8688/1*pFAxbWgIaFUDnjS-PtTROw.png)

At Holberton School, a two year software engineering program, the first year of curriculum is culminated by an end of the year project. While the criteria for the project is rather open, my teammates and I decided to do a web application using some of today’s widely used frameworks and technologies.

In this blog post, we’ll take a look at our project Puppr, the technical architecture, challenges, and lessons learned along the way.

Why Puppr?
==========

Puppr started as a half-joke amongst my group members [Marc Cavigli](https://www.linkedin.com/in/marccavigli/) and [Laura Rouge](https://www.linkedin.com/in/lauraroudge/) while brainstorming project ideas. The three of us all love dogs and have grown with them as close members of our families. We surmised that a majority of the dog owners we’ve met are genuine and caring people and these dog owners should have a platform to expand their doggy social circle. Further, we agreed that some of our closest friends were also dog owners and the inclusion of these pets enhanced our friendships. An added benefit of building this platform would be socializing our dogs and making them better canine citizens. Thus, Puppr was born.

<img alt="" class="fd em ei ke w" src="https://miro.medium.com/max/1366/1\*VND\_lcT8pXp3wOLgScEtoQ.png" width="683" height="1115" srcSet="https://miro.medium.com/max/552/1\*VND\_lcT8pXp3wOLgScEtoQ.png 276w, https://miro.medium.com/max/1000/1\*VND\_lcT8pXp3wOLgScEtoQ.png 500w" sizes="500px" role="presentation"/>

Swiping Vue of Puppr

Puppr allows owners to create a profile for their dogs containing common dog characteristics: age, breed, sex, etc. along with information about their personalities: likes, dislikes, other fun facts. The idea is that dogs often reflect personality traits of their owners. This gives some compelling insight into the person that you could be meeting. The app collects a bare minimum information about the dog owner herself with the exception of a display name.

We started our journey white boarding and brainstorming how we would like our application to look and behave. We decided that the current dating platforms of today would serve as good jumping off points for inspiration. Dating apps have become ubiquitous in our culture and the look and feel of a mobile “swiping” app is intuitive to many users. Therefore our Puppr app would mimic the like/pass actions of today’s popular dating apps. It would feature matches that would allow the users to connect after reciprocal likes.

After deciding how the app would look and feel it was time to start translating our vision of the app into software architecture.

Architecture and Technologies
=============================

Although we had grand ideas for the numerous features that would included in the app we had to come to grips that we only had two weeks to work on actually coding. Therefore we decided on the main “mvp” features that we could feasible complete by the two week deadline.

To make the user experience as smooth and seamless as possible we decided that the use of a front-end javascript framework offering a single page application (SPA) experience would be warranted. Although none of us had much experience with React or Vue.js we settled on using Vue.js at the recommendation of some industry professional friends.

Further, we decided to use two additional components of the Vue.js ecosystem: the Vue Router and the Vuex store. The Vue Router is what provides smooth and responsive feel of the application. Throughout a user’s session only one html page is loaded while the user navigates between logging in, swiping, editing profiles, and viewing their matches. The Vue Router transitions these features in front of the user using javascript quickly and seamlessly without the need to fetch another html source page.

<img alt="" class="fd em ei ke w" src="https://miro.medium.com/max/4830/1\*\_PMUdNaN4-EKYJTJPKWOnA.jpeg" width="2415" height="1656" srcSet="https://miro.medium.com/max/552/1\*\_PMUdNaN4-EKYJTJPKWOnA.jpeg 276w, https://miro.medium.com/max/1104/1\*\_PMUdNaN4-EKYJTJPKWOnA.jpeg 552w, https://miro.medium.com/max/1280/1\*\_PMUdNaN4-EKYJTJPKWOnA.jpeg 640w, https://miro.medium.com/max/1400/1\*\_PMUdNaN4-EKYJTJPKWOnA.jpeg 700w" sizes="700px" role="presentation"/>

Real-time and up to date information is very important for a responsive SPA application like Puppr. As the user likes another user the resulting information must be immediately available to that user and also for all other logged in users accessing Puppr. The Vuex store allows quick and easy access to this information and is continuously synced to the backend Google Firestore NoSQL database.

The Google Firestore Real Time database is the single source of truth for user information. It houses the user likes, profiles, and matches. Firestore is unique in that it allows clients to register listeners on collections of data. This means that logged in users will receive real time updates to information, allowing them to immediately be notified of a new match and new profiles in their area.

Whenever you are keeping personal information it’s important to safe guard it. The Firebase Auth service provides user authentication and authorization for Puppr. The user is only allowed edit access to his/her information and view access to public profiles of other users stored in the Firestore Database.

Lastly, user profiles would be bland without the picture of the owner’s adorable four legged friend. Firestore Cloud Storage is an object based storage that allows Puppr users to upload a profile picture of their dog for the world to see.

<img alt="" class="fd em ei ke w" src="https://miro.medium.com/max/6402/1\*25\_y6Xy3sJYVi\_ccjW7cWQ.jpeg" width="3201" height="1249" srcSet="https://miro.medium.com/max/552/1\*25\_y6Xy3sJYVi\_ccjW7cWQ.jpeg 276w, https://miro.medium.com/max/1104/1\*25\_y6Xy3sJYVi\_ccjW7cWQ.jpeg 552w, https://miro.medium.com/max/1280/1\*25\_y6Xy3sJYVi\_ccjW7cWQ.jpeg 640w, https://miro.medium.com/max/1400/1\*25\_y6Xy3sJYVi\_ccjW7cWQ.jpeg 700w" sizes="700px" role="presentation"/>

State, Filtering, and Real Time Databases
=========================================

One of the greatest challenges we faced as a team was reflecting the real time information changes to the user as they occurred in the Firestore database. It was important to us that the app was responsive, fast, and interactive. Updates could come from the logged in user or could be instigated by another user liking the logged in user’s profile or changing information on their respective profile.

The problem raised a few questions. When do we reflect changes to the user without interrupting their experience? Additionally, with users making changes to the state of the application, when was the best time to update the Firestore database? Lastly, when would we filter out information such as profiles of users that were already ‘liked’ or ‘matched’?

We decided on a model that treated the Firestore database as the ultimate source of truth for our application’s information. Further, the Vuex global state store would only be updated with information coming directly from the Firestore database. In other words, the application itself would not mutate the state of the application without consulting the Firestore database.

We discovered the plugin, [Vuefire](https://vuefire.vuejs.org/), aimed at just this problem: keeping realtime sync of the Vuex store and the Firebase Firestore database. The plugin makes the watching of changes to data in Firestore much easier while exposing the updated information to the Vue components. Filtering of information for the user occurs in the form of a computed property triggered on the change of the Firestore information.

Lessons learned
===============

The two weeks working on this project went by in a blur. They were packed with successes, challenges, and set backs that led to two weeks chalked full of learning. Our team took on a lot of goals and I am extremely proud of how much we accomplished. We learned a new front end framework, Vue.js, as well as some more advanced topics of the framework including the Vue Router and the the Vuex store.

We also implemented a backend offering authentication, user profile storage, and object storage. We secured that data using Firebase rules to safe guard users’ information.

I have to give a huge shout-out and thank you to my two teammates, [Marc Cavigli](https://www.linkedin.com/in/marccavigli/) and [Laura Rouge](https://www.linkedin.com/in/lauraroudge/). These two incredibly talented engineers and artists showed up every day contributing their amazing skills and creativity. I can say that this project has a little bit of each of us in it and I was incredibly lucky to work with each of them.

_About the author_

_I’m a technology nerd with 12 years of experience in the tech industry. Most recently I worked at Cisco and Docker in customer facing technology consulting positions. I decided to attend Holberton School to take a year to fully immerse myself in software engineering training. I’m continuing to pursue learning and opportunities in software development and cloud._

Visit [Puppr.best](https://puppr.best)  
Puppr on [Github](https://github.com/lroudge/puppr)  
Puppr’s [landing page](https://puppr.best)  
My [Linkedin profile](http://www.linkedin.com/in/drew-maring-0a7b8b9)