---
title: "Print Statements"
description: 'How to Print to the Terminal.'
---


Printing is one of the simplest debugging tools you have. Use it to check values, verify execution order, and confirm a branch actually runs.

If you are new to where code runs in a PROS project, review [Basic C++ Syntax](../basic-cpp-syntax/). Your print statements will usually live inside functions like `initialize()`, `autonomous()`, or `opcontrol()`.

## Using `std::cout`

`std::cout` is the standard C++ output stream. It comes from `#include <iostream>`. For technical details visit [here](https://en.cppreference.com/w/cpp/io/cout.html).

```cpp
#include "main.h"
#include <iostream>

void main()
{
  std::cout << "Driver started at " << pros::micros() << " microseconds" << std::endl;

  return 0;
}
```

**What each part does**

* `std::` means the name comes from the C++ standard library namespace.
* `cout` means character output stream.
* `<<` inserts data into the stream (conceptually a data link between robot and your computer).
* `"Driver started at "` is a string that gets combined with following statements.
* `pros::micros()` returns the current time in microseconds. This will output a number in the terminal.
* `std::endl` also makes a new line, but it flushes the stream too.

**Notes**

* `std::cout` works well when you want to chain values together.
* It can print built-in types like `int`, `double`, `char`, and strings.
* Custom types need their own output overload before `std::cout` can print them cleanly.
* `"\n"` adds a newline without flushing.&#x20;

## Using `printf` (C-style print)

`printf` is older than `std::cout`. It comes from `#include <cstdio>`. For technical details visit [here](https://cplusplus.com/reference/cstdio/printf/).

```cpp
#include "main.h"
#include <cstdio>

void main()
{
  int motor_port = 10;
  double voltage = 12000.0;
  char randomChar = 'H';

  printf("Port: %d Voltage: %.0f randomChar: %c \n",
         motor_port,
         voltage,
         randomChar);

  return 0;
}
```

**Common format specifiers**

* `%d` prints an integer.
* `%f` prints a floating-point number.
* `%.xf` prints a float with x digits after the decimal.
* `%c` prints a single character.
* `%s` prints a C-style string.
* `%%` prints a literal percent sign.

**Notes**

* `printf` is compact when you want tight control over formatting.
* The format specifier must match the variable type.
* Wrong specifiers can print garbage or cause bugs.
* This style is common in C code and older libraries.

## Using `std::print`

`std::print` is the modern C++ formatting option. It uses `{}` placeholders instead of `%d` and `%f`. It comes from `#include <print>`. For technical details visit [here](https://en.cppreference.com/w/cpp/io/print.html).

```cpp
#include <print>

int main()
{
  int motor_port = 10;
  double voltage = 12000.0;

  std::print("Port: {} Voltage: {:.2f}\n",
             motor_port,
             voltage);
             
  return 0;
}
```

**Why people like it**

* The syntax is easier to read than `printf`.
* The placeholders match the argument order clearly.
* Formatting is more modern and safer than raw `%` specifiers.

**Important note for PROS**

`std::print` is a C++23 feature. Your current compiler must support C++23 and the `<print>` header.

If the compiler says `<print>` does not exist, your PROS toolchain is too old for `std::print`. Use `std::cout` or `printf` instead. To see prints open a integrated terminal and type `pros terminal` or `pros t`.&#x20;

_Note: I advise using_ `pros mut` _to make (build), upload, and start a new brain terminal (where print statements will show up). Using_ `pros mut` _will keep the radio on the download channel, meaning less drops while uploading and therefore faster! It also means undefined behavior might not show up, so make sure to test without uploading before going to a competition (I wasted a month of my life chasing this bug)!_

_Not an AD: Is printing too unprofessional for you? Do you want to add instructions on how to use_ [_v5gbd_](https://github.com/vexide/v5gdb)_? Consider Contributing! This website won't build itself!_ :smile:

