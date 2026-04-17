---
title: "Source Files (.c, .cpp)"
description: 'Description: How to create source files.'
---

## What is a Source File?

A source file contains the actual code that runs. This is where functions, class methods, and variables are _defined_. If a header file says _"this thing exists,"_ a source file says _"this is how it works."_

**Understanding the File Extension:**

<table data-full-width="false"><thead><tr><th></th><th>C Source File</th><th>C++ Source File</th></tr></thead><tbody><tr><td>File Extension:</td><td><code>.c</code></td><td><p><code>.cpp</code>, <code>.cc</code>, <code>.C</code>, <code>.cxx</code>, <code>.CPP</code>, <code>.cp</code>. </p><p><em>Note: DHRA suggests using</em> <code>.cpp</code></p></td></tr><tr><td>Use-Case</td><td>If your code is strictly coded in the C Programming Language.</td><td>If your code includes: classes, operator overloads, templates, namespaces, or other C++ Features. </td></tr></tbody></table>

## Where Source Files Go

Put source files inside the `src/` (source) folder of your PROS project.

If your project starts getting larger, make subfolders inside `src/` to stay organized.

**Example Layout**

```
include/
  2131H/
    Drive.hpp
  Competition/
    RobotConfig.hpp
src/
  2131H/
    Drive.cpp
  Competition/
    RobotConfig.cpp
  main.cpp
```

This keeps declarations in `include/` and definitions in `src/`. Trying to follow the same names is advised. &#x20;

## Creating a Source File

1. Create a new file in `src/` with a clear name.
2. Use the same naming style across the whole project. `snake_case` and `camelCase` are both common. Pick one and stay consistent.
3. If the file implements C++ code, give it the `.cpp` extension.

**Typical Workflow**

1. Create a header file in `include/`
2. Create the matching source file in `src/`
3. Put declarations in the header (Add multiple inclusion guards)
4. Put definitions in the source file (No need for inclusion guard)
5. Include the header where you want to use that code

## Basic Example

Below is a simple header/source pair.

**Header File**

```cpp
#pragma once

void driveForward(float motorDegrees, float maxVelocity = 600.0);
```

**Source File**

```cpp
#include "2131H/drive.hpp"
#include "Competition/RobotConfig.hpp" // For left and right motor declarations

// NOTICE: Return Type and Parameters match declaration.
void driveForward(float motorDegrees, float maxVelocity)
{
    leftMotor.move_relative(motorDegrees, maxVelocity);
    rightMotor.move_relative(motorDegrees, maxVelocity);
    
    return; // Return type is void so we return nothing
}
```

**Using the Source File**

The `.cpp` file is not included directly. The header is included instead.

```cpp
#include "main.h"
#include "2131H/Drive.hpp"

void opcontrol()
{
  driveForward(90); // The maxVelocity will defualt to 600.0
  driveForward(90, 300.0); // maxVelocity explicitly set to 300.0
}
```

## Why Split Code Into Source Files?

Putting everything in `main.cpp` works at first. It stops working well once your code grows.

Separate source files help you:

* Keep files shorter.
* Group related code together.
* Reuse code in multiple places.
* Debug faster.
* Make team projects less chaotic.

## Common Mistakes

**1. Including a Source File**

* Never write: `#include "Drive.cpp"`.
* Include the header instead: `#include "2131H/Drive.hpp"`.

**2. Putting Everything in Headers**

* Do not place every function definition in a header unless you have a good reason.

**3. Forgetting to Match Names**

Try to keep related files paired clearly:

* `drive.hpp` with `drive.cpp`
* `intake.hpp` with `intake.cpp`
* `odom.hpp` with `odom.cpp`

This makes large projects much easier to navigate.

Hint: 2131H's 2024-25 High Stakes Code is decently organized. You can find the repository on GitHub, or by clicking this link: [https://github.com/DHRA-2131/2024-25-2131H/tree/main/Rewrite%203/include/2131H/Utilities](https://github.com/DHRA-2131/2024-25-2131H/tree/main/Rewrite%203/include/2131H/Utilities).

_Not an AD: This article was pretty much written with the inbuilt AI. If this upsets you and you think you can do better, please contribute. We would be glad to have you on board!_ :smile:
