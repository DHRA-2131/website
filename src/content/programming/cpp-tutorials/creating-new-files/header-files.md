---
title: "Header Files (.h, .hpp)"
description: 'Description: What are header files and how do you use them?'
---

## Why? Isn't this gross?

Some programmers consider header files to be annoying and over-complicated. For the most part they are right! Header Files are a relic of the C era, largely implemented due to memory constraints on 1970's computers ([Stack Overflow](https://stackoverflow.com/a/1306244), Accessed Mar. 13, 2026).&#x20;

Header files allow for use of ready-made functions. For example, the C++ Standard Libraries `<cmath>` include adds `std::abs(x)`, so a user wouldn't have to program their own implementation. _Note: This was mostly stolen from_ [_here_](https://www.geeksforgeeks.org/cpp/header-files-in-c-c-with-examples/)_._

Header files can be split up into 5 types:

1. C Standard Library - Largely outdated, using the C++ alternative is suggested.
2. C++ Standard Library - Generally adds safety to the C standard library
3. Other libraries ([Boost](https://www.boost.org/), [Eigen](https://libeigen.gitlab.io/)) - Provide extra functionalities. Eigen provides Matricies for example.
4. PROS Robot Operating System (PROS) - Provides your interface with Vex
5. User Defined Header Files - You make these :D

## Common Standard Library Files

Some commonly used standard header files are:

* `<iostream>` : Contains declarations for input and output operations using streams, such as `std::cout`, `std::cin`, and `std::endl`. _Note: Probably the most used include in vex. Leaving_ `<iostream>` in your code can significantly increase binary size.
* `<cmath>` : Used to perform mathematical operations like `std::sqrt()`, `std::log2()`, `std::pow()`, etc. _Note: Believe this is part of C++ Library, not C like the name would imply._
* `<vector>` : Used to work with container class for dynamic arrays (vectors) functions like `begin()`, `end()`. _Note: C arrays are built into the language and are not included by a library._
* `<chrono>` : Provides a duration class and other useful time operations. _Note: C++ Alternative to_ `<ctime>`.
* `<string>` : Provides the `std::string` class and functions for string manipulation. _Note: C++ alternative to_ `<cstring>`.
* `<cstring>` : Used to perform various functionalities related to string manipulation like `strlen()`, `strcmp()`, `strcpy()`, `size()`, etc. _Note: C Library._&#x20;
* `<cstdlib>` : Declares functions involving memory allocation and system-related functions, such as `malloc()`, `exit()`, and `rand()`. _Note: C Library_.
* `<cerrno>` : Used to perform error handling operations like `errno()`, `strerror()`, `perror()`, etc. _Note: Believe this adds C Error handling._
* `<ctime>` : Used to perform functions related to `date()` and `time()` like `setdate()` and `getdate()`. It is also used to modify the system date and get the CPU time respectively.

## Example Implementation of Common Library Functions

```cpp
#include <cmath> // Supplies math functions
#include <cstdlib> // Supplies machine interface in C
#include <cstring> // Supplies C string helper functions
#include <iostream> // Supplies Input/Output for C++
#include <string> // Supplies C++ string class and functions
#include <vector> // Supplies Dynamically Sized Arrays (C++)

int main()
{
    // Using <iostream>, prints text to terminal
    std::cout << "Hello, Geek!" << std::endl;

    // Using <cmath>, returns square root of 25 (5). 
    // Note: using <cmath> over <math.h> will supply type safe alternatives
    double squareRoot = std::sqrt(25);
    
    // Returns 5.0 to the terminal
    std::cout << "Square root of 25: " << squareRoot << std::endl;

    // Using <cstdlib>, believe rand() has issues. Look into C++ alternatives.
    int randomNum = rand() % 100; // Random number between 0 and 99
    std::cout << "Random number: " << randomNum << std::endl;
    // Returns random number to the terminal

    // Using <cstring> to edit strings
    char str1[20] = "Hello";
    char str2[] = " World";
    strcat(str1, str2); // Concatenates (Combines) two strings
    std::cout << "Concatenated string: " << str1 << std::endl;
    // Returns "Concatenated string: Hello World" to terminal

    // Using <vector>. Stores array of dynamic size (aka vector)
    vector<int> numbers = {1, 2, 3, 4, 5};
    numbers.push_back(6); // Adds a 6th number to the variable
    
    std::cout << "Vector elements: ";
    for (int num : numbers)
    {
        std::cout << num << " ";
    }
    std::cout << endl; // Returns "1 2 3 4 5 6 " to the terminal

    // Using <string>. Much safer way of handling strings, slight overhead cost.
    std::string greeting = "Hello, ";
    std::string name = "Programmer";
    std::string fullGreeting = greeting + name; // Simple Concatination
    std::cout << "Greeting message: " << fullGreeting << std::endl; 
    // Returns "Greating message: Hello, Programmer"

    return 0; // Exit Main Function with Success code of 0.
}
```


## Creating Header Files

Creating header files is useful for organizing code but can be tricky. Consider looking for multiple explanations as this is a complicated topic.

**Create a Directory For Custom Header Files**

Create a Folder to separate custom headers from PROS, LVGL, and other installed libraries.

* Inside your PROS Project, navigate to `include/` and create a new directory (`mkdir <directory name>`, or do it graphically by right clicking on the `include/` folder and selecting `New Folder`).&#x20;
* Name this something correlated to your team:

- `<Team #>`
- Something Davis Related

* `<Team Name>`&#x20;
* `$(Author Name)Lib`

<figure><img src="/images/assets/image (15).png" alt=""><figcaption></figcaption></figure>

**Create a Header File**

Create a header file with an appropriate name. Follow a convention when naming files, `camelCase` and `snake_case` are common styles. Give the file the correct file extension: if the header file features any C++ features use `.hpp` otherwise, use `.h`. The newly created file will be completely empty.

<figure><img src="/images/assets/image (16).png" alt=""><figcaption><p>New File by Right Clicking on Folder.</p></figcaption></figure>

<figure><img src="/images/assets/image (17).png" alt=""><figcaption><p>New File by using the Linux <code>touch</code> Command</p></figcaption></figure>

## Safe Guarding the Header File

**What the Header File is Doing:**&#x20;

* A header file is a way _declare_ to the rest of the code outside a source file that `myCustomFunction()`, `MyCustomClass`, and/or `MyVariable` exists. It doesn't _define_ how the function or class works (This is what the source file is used for).&#x20;

**What `#include` Does:**

* `#include <library>` or `#include "path"` is one of many Pre-Processor Macros. This specific macro tells the compiler to go to a specified file and copy and paste the contents where the `#include` line is. It doesn't do anything more than that. There is no checks for what is being included or if it has been included.
* This is a potential problem. Consider if you call the same `#include` twice in one file? You've just declared and then re-declared all the contents of that header file (this will cause a error).&#x20;
  * You might assume this is simple enough to avoid by just not being dumb. However, consider you have a `include/math.hpp` file that you use in both `src/main.cpp` and `include/RobotConfig.hpp`. If you then include `include/RobotConfig.hpp` to `src/main.cpp` you will have accidentally called `#include "math.hpp"` in the same file twice!
  * This is called a multiple inclusion.

**Solving Multiple Inclusion**

To get around multiple inclusion, something in the code needs to mark if a file has been used already. There are two approaches to this.



1. **(Suggested)** Using `#pragma once` before any code.&#x20;

```cpp

#pragma once // All code below this line is exempt from multiple inclusion problems.

```

1. Using `#ifndef <symbol>`.

```cpp
#ifndef ROBOT_CONFIG_HEADER  // If symbol is not defined
#define ROBOT_CONFIG_HEADER  // Define symbol and code

// Code here is exempt from multiple inclusion problems.

#endif  // End of if statement. Note: next time this file is included, the
        // symbol will be defined and the code will not be included again.
```

## Syntax for Declaration

_Note: These will make more sense after finishing the tutorial for variables, functions, and classes._

**Functions:**

```cpp
// NOTICE: there is no definition to this function ({/* code */} is missing). 
// Commentation for this function and what it does.
[returnType] FunctionName([arg1Type] arg1, [arg2Type] arg2, ...);
```


**Variables:**

```cpp
// NOTICE: the variable is not being defined. There is no = or constructor call.
extern [varType] variableName;
```


**Classes:**

```cpp
class ClassName : public Inheritence 
{
 private:
  int var1 = 0; // Default initialization 0
 public:
  const [var2Type] var2; // Will be declared in constructor

 public:
 
  // NOTICE: The constructor is not being defined 
  // Commentation for what this function does and what the arguments mean
  ClassName([arg1Type] arg1, [arg2Type] arg2, ...);
};
```


_Not an AD: This article is confusing. It should be reworked to be more comprehensive. I did my best please don't hate :pray:. Please contribute and make this better! :smile:_
