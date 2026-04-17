---
title: "Comments"
description: 'Description: How to add Doxygen comments and single line comments.'
---

## Why Use Comments?

&#x20;Very frequently when programming, you need the ability to explain what the code is doing without affecting the functionality of the code. Therefore... __COMMENTS!__ Comments are a very useful tool that can be used to explain what code is doing.&#x20;

Whenever someone else is referring to your code, it generally isn't immediately apparent the reasoning behind why you may have added something. Additionally, if you code something and then refer to it after a period of time, it can be difficult to remember why you added a particular line of code. In both of these instances, using comments to explain your code can be very beneficial.

Additionally, there are other instances where you need to deactivate sections of code for debugging purposes. This is where comments can also come in handy by allowing for deactivating code without having to fully delete it.&#x20;

_Note: If you believe you are too cool to use comments, you are verifiably wrong. You may not anticipate having to later refer to your code or assure yourself that you'll just remember what that random line of code you added at 2:37 AM does, but you are wrong! Please just comment your code!_



## Basic Comments Types

There are two main methods of commenting that can be used in different circumstances.&#x20;

**Single Comments**

Single comments are denoted by a `//` at the beginning of a what needs to be commented. They comment out any code following the double forward slash. They can be used in multiple situations:



**Single line comment separate of other code:**

```cpp
int main() 
{
  // This is a comment. It performs no functional code.
}
```



**Commenting out a single line of code to deactivate it:**

```cpp
int main()
{
  int var = 7;
  // var = var + 1;
  std::cout << var << std::endl;
  // This will print 7, not 8. The incrementation is commented out.
}
```



**Placing a comment on the same line as a line of code:**

```cpp
int main()
{
  int var = 7; // The var variable is now equal to 7!
}
```



**Block comment using single line comments:**

```cpp
// int main()
// {
//   int var = 7;
//   var = var + 1;
//   std::cout << var << std::endl;
// }
// No code at all!
```

_Note:_ `CTRL + /` _while highlighting a section of code will comment out all highlighted lines of code using this block comment method._



**Block Comments**

Block Comments are denoted by a pair of the opening `/*` and the closing `*/` to block of a section of code not based on code lines. These can be used in two main scenarios.



**Inline Comments**

```cpp
int main()
{
  std::cout << "one, " /* << "two, "*/ << "three" << std::endl;
  // This won't print the word two as it is commented out.
}
```



**Traditional Block Comments**

```cpp
/*
int main()
{
  int var = 7;
  var = var + 1;
  std::cout << var << std::endl;
}
*/

// No code at all!
```

_Note: This method of block comments isn't traditionally used as often because of the ease of using the_ `CTRL + /` _keyboard shortcut._



## Doxygen Block Comments

When creating a function, it is typically useful to have a standard method of commenting the function's purpose. Doxygen is a VSCode extension that can make this process easier by automating the commenting for us.&#x20;

_Not an AD: Are you mad that doxygen's auto document features aren't in this tutorial? Have a horrible experience with undocumented code you'd like to share? Consider sharing the pain by contributing!_ :smile:
