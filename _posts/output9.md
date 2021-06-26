![](https://miro.medium.com/max/3072/0*_HVyW_Mn1Mq-ylLa.jpg)

The tale of two links: hard links and a symbolic links in Linux
===============================================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----78fbfa911b00--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----78fbfa911b00--------------------------------)[

Feb 5, 2019·2 min read

](https://medium.com/@andrew.maring/the-tale-of-two-links-hard-links-and-a-symbolic-links-in-linux-78fbfa911b00?source=post_page-----78fbfa911b00--------------------------------)

No matter when you learned Linux there was undoubtably a time when you came across the age old question of, “What is the difference between hard links and symbolic links?” and “When would I possibly use these?”.

In this article I’ll explain the difference between hard and symbolic links so you can know which one is better suited for a particular use case.

**So what is a link?** A link in Linux is  simply a pointer or reference to another file. These links act as a sort of shortcut to that file or directory. Accessing a link will mean accessing the target of that link. There is no limit to where and how many links created.

What is a **symbolic link**?

*   creating a symbolic link will point to the file itself (vice it’s inode). This means that if the original file is deleted, the symbolic link will not work properly since it points to an invalid inode (aka dangling link problem)
*   a symbolic link can point to a directory
*   symbolic links can be seen by using `ls -l` and looking for the `l` in the first character of the line

<img alt="" class="fd em ei ji w" src="https://miro.medium.com/max/2624/1\*qSS3dSWSgCLMObTCHGX8yQ.png" width="1312" height="254" srcSet="https://miro.medium.com/max/552/1\*qSS3dSWSgCLMObTCHGX8yQ.png 276w, https://miro.medium.com/max/1104/1\*qSS3dSWSgCLMObTCHGX8yQ.png 552w, https://miro.medium.com/max/1280/1\*qSS3dSWSgCLMObTCHGX8yQ.png 640w, https://miro.medium.com/max/1400/1\*qSS3dSWSgCLMObTCHGX8yQ.png 700w" sizes="700px" role="presentation"/>

*   removing a symbolic link has no affect on its target
*   To create a symbolic link you can add the `-s` flag to `ln`. As in:
*   `$ ln -s [target file] [link name]`

What is a **hard link**?

*   hard links create a pointer to the original file’s inode (vice a pointer to the file)
*   removing a the original file has no affect on the hard link since the link points to the inode and not the file
*   a hard link cannot point to a directory
*   The syntax for creating a hardlink is:
*   `$ ln [target file] [link name]`

<img alt="" class="fd em ei ji w" src="https://miro.medium.com/max/800/0\*Sjh3pgZdq0Mc\_jr2.jpg" width="400" height="350" srcSet="https://miro.medium.com/max/552/0\*Sjh3pgZdq0Mc\_jr2.jpg 276w, https://miro.medium.com/max/800/0\*Sjh3pgZdq0Mc\_jr2.jpg 400w" sizes="400px" role="presentation"/>

As you can see symbolic links and hard links can act very differently depending on the use case and scenario. Armed with this knowledge you will be able to use them effectively and correctly as called for by the situation.