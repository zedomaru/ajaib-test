# Ajaib Front End Web Engineer Test

This project was the test of Ajaib Front End Web Engineer.

## Project Description

There are two parts of the test.

1. Mini Questionnaire that I answered here in the readme
2. Personal Project that you can be found [here](https://zedomaru.github.io/ajaib-test/)

## Table of Contents

1. Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword
2. What is the new class syntax and how to create instance methods, class methods?
3. Give an example of how to implement inheritance in ES2015 using extends and super
4. Imagine refactoring an ES5 application to use ES2015, how would you go about it?
5. Give an example of how you structure applications with design patterns using closure and modules
6. What are your preferred ways of testing your web application?
7. Which web server do you use? Why? Explain pros and cons of your choice.
8. What is your preferred production deployment process?
9. Give an example of clean README.md documentation.

## Answer

1. Object Oriented Programming is a object based approach on program. There are two main things on OOP which are object and class. Object is a data type that can have more than one key / property - value pair. And class is a blueprint for creating object. We can use keyword new to create an object instance. And we can use "this" to accessing or create property in class.

2. Instance method, we need to create an instance from a class in order to use its method, but class / static method we don't have to create an instance, we can directly use the method inside class (Class.MethodName). Class method created by adding static keyword in front of the method name ex: static run()
   Example:
   ![Inheritance](https://ibb.co/vHGsXZB)

3. ![Inheritance](https://ibb.co/RTnKyGq)

4. Before ES6 or ES2015 we use constructor function to define a class. So if I want to refactor ES5 application I think we can change the constructor function to class with constructor function as it constructor.

5. ![Closure](https://ibb.co/1m5CwHh)

6. I never did a testing before. But I heard about end to end testing using cypress and I'm curious about that.

7. My last company use NGINX as the server, but I personally never did a server setup and I don't quite understand about it yet. Why NGINX or what's the pros and cons. But from what I know, when we request some data on the web, server will return the data we need as a response.

8. Before production deployment we need to make sure the app run perfectly, and how can we do that, or how can we sure that the application is bug-free. In my opinion we must do a testing first. Frontend test to see if the page that will be show to user is in correct page or form or component and backend test to see if the data calculation is correct. In my last company we're hiring a tester to test the application. They test both FE and BE data.

9. According to [freecodecamp](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/), readme should include
   1. Project's Title
   2. Project Description
   3. Table of Contents (Optional)
   4. How to Install and Run the Project
   5. How to Use the Project
   6. Include Credits
   7. Add a License
