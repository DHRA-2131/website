---
title: 'Essence Of Programming'
description: 'Essentially how to Pseudo code'
---

## What is Programming?
>[!NOTE]
> Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks. It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages.
> - (Wikipedia. Accessed March, 2026.)

## Programming Languages:

_Note: This is not an all inclusive list. These are mostly languages I have used for vex projects._

* **C** - [Wiki Article](https://en.wikipedia.org/wiki/C_\(programming_language\)). This language can be used to program the Vex Brain. It is very low level and doesn't include [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) practices. PROS is written in C and was latter updated to C++ with wrappers.
* **C++** - [Wiki Article](https://en.wikipedia.org/wiki/C%2B%2B). This language is the most widely used language for programming in vex. It is a Child of C, and backwards compatible with C. C++ is object oriented and a very fast language. The Davis High Robotics club has used C++ for many years.
* **Rust** - [Wiki Article](https://en.wikipedia.org/wiki/Rust_\(programming_language\)). This language is similar to C++ but features a package manager (allows for the installation of libraries) and focuses on safety. Rust is really nice because it's fast but the language makes it hard write bad code. Features the cutest mascot: Ferris the Crab :crab:. The Vexide Dev. Group has made a rust runtime for vex, which has many advantages over PROS ([Vexide](https://vexide.dev/)).
* **Python** - This language was my first language and by far the easiest to learn. After multiple years of programming, python is literally easier to use than English. That simplicity comes at the cost of control over the system, leading to the language being significantly slower. Python's main advantage is it's cohesive libraries and pip package manager.
* **Type Script** - I hate this language, but used it to produce my very own Visual Studio Code extensions. Checkout the _2131H Extension Pack_ and _2131H Vexide Toolset_ in the extension tab for VSCode!

## Mark Up Languages:

_Note: These are different than Programming Languages!_

* **Mark Down** - This is the language made for displaying this website. It turns simple characters into formatting. **\*\*Bold\*\***, \__italics\__, \~\~~~strike-through~~\~\~, \``code`\`, etc. It's very simple and I highly suggest learning it to contribute to our wiki! :smile:
* **HTML** - This is \*NOT\* a programming language. It is a Hyper Text Mark-Up Language. It is used to make pretty websites.
* **TeX** - This language is used to display math formulas. Desmos, Wolfram Alpha, and ChatGPT use LaTeX and you probably didn't even know!

## General Programming Rules:

1. Code executes from _top to bottom_ and _left to right_
2. The computer only does exactly what you tell it to do. The computer cannot and does not guess your intent.
3. Spelling, capitalization, and punctuation generally matter.
4. If a value changes, something in the code changed it. Bit flips from cosmic rays are not common!
5. Change one thing at a time when debugging and use deductive reasoning.
6. Read error messages carefully. They usually tell you where to start your witch hunt.
7. Print values when you are confused. Seeing what the program is being fed helps a lot.
8. Break big problems into small steps. This applies to almost everything in robotics.
9. Write pseudocode before writing real code when the problem is unclear.
10. Prioritize working code. Cleaning should be done as time permits (IE. after tournaments or on a regularly defined basis. Consider adding it to your logbook calendar!).
11. Comment your code!!! Please, please, please! `// Todo: Emphasize`
12. Good full length variable names make code easier to read and debug.
13. If you cannot explain what a line does, do not copy it into your project! Read G4.
14. Test often. Rewriting the entire project at once will lead to unforeseen problems.
15. Every bug is easier to fix when the code is organized. Adhere to rule #10.
16. **Most Importantly:** Keep it as simple as possible!!!

_Note: If these seem like obvious or simple ideas, then I ask you to explain why they are always problems. Don't over think it, do your best!_

## Biography of a Code's Lifetime:

1. Program is Created (collection of files).

1. Code is added to Program (writing contents of files).

1. Code is compiled to a binary (building contents of files).

1. Binary is uploaded to device (moving binary to execution source).

1. Binary is pulled into memory (getting ready for execution).

1. Binary is executed by CPU (the french revolutionaries would be proud)!

_Not an AD: Is a language you love to use missing? Are you a_ `.js` :nauseated\_face: _enjoyer? Learn to contribute and add your own thoughts!_ :smile:
