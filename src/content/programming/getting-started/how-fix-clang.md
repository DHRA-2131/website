---
title: 'How to Fix Clang'
description: 'Clang easily dies with PROS, but it is easy to fix.'
---

If clang is broken for your project, then follow the steps listed below. You will know clangd is not happy if errors are everywhere, despite the code compiling (`pros make all` returns successfully). You may also see a error on the first line of every file you open, this is a problem with clang not understanding your file structure.

## Step 1: Open a New Integrated Terminal

### Create a new integrated terminal:&#x20;

* If you've installed PROS to the path of your computer then you can just open a new terminal (powershell, bash, etc) by `` ctrl + shift + ` ``.&#x20;
* Otherwise, press `ctrl + shift + p` and type `PROS: Integrated Terminal`. You can also access this graphically through the Pros Icon.

## Step 2: Check the Code Compiles

In your integrated terminal, type: `pros make all`. This will run two commands. Firstly, `pros make clean` which removes the `/bin` files, enforcing the build to make fresh binaries. Second, it will run `pros make` which builds the project. You can tell if the project builds if it creates both a cold and hot package.&#x20;

_Note: Building and compiling will be used interchangeably, this refers to taking your project and turning it into binary for that the V5 Brain can execute. Doing so will compile a new `/bin` directory._

**Example input to a Pros Integrated Terminal**:

_Note: I'm using debian in this example, but for most operating systems you should see a file path to your project then a symbol before the command._&#x20;

_Fun fact: In Linux, $ means you're a normal user and # means you're running with elevated privileges (sudo) or as root._

```bash
andrew@debian:~/Code/Robotics/Pros/Tutorial$ pros make all
```

**Example of a project that compiles:**

```bash
Cleaning project
Creating cold package with libc,liblvgl,libm,libpros [OK]
Stripping cold package  [DONE]
Section sizes:
   text    data     bss   total     hex filename
2.15MB  4.74KB  57.24MB  59.39MB 3b62957 bin/cold.package.elf
Compiled src/main.cpp [OK]
Adding timestamp [OK]
Linking hot project with ./bin/cold.package.elf and libc,liblvgl,libm,libpros [OK]
Section sizes:
   text    data     bss   total     hex filename
 1.13KB   0.00B  46.01MB  46.01MB 2e00480 bin/hot.package.elf
Creating cold package binary for VEX EDR V5 [DONE]
Creating bin/hot.package.bin for VEX EDR V5 [DONE]
```

**Example of a project that fails to build:**

_Note: The build output tells you where the project failed, in this case line 83, column 22 (in the `opcontrol` function). It will also give you a reason for why the program failed. I added an asterisk where there should have been and integer so the project couldn't be built._

```bash
Cleaning project
Creating cold package with libc,liblvgl,libm,libpros [OK]
Stripping cold package  [DONE]
Section sizes:
   text    data     bss   total     hex filename
2.15MB  4.74KB  57.24MB  59.39MB 3b62957 bin/cold.package.elf
Compiled src/main.cpp [ERRORS]
make: *** [common.mk:284: bin/main.cpp.o] Error 1

src/main.cpp: In function 'void opcontrol()':
src/main.cpp:83:22: error: invalid type argument of unary '*' (have 'int')
   83 |     pros::lcd::print(*
      |                      ^
   84 |         0,
      |         ~             
 
ERROR - pros.cli.build:make - Failed to make project: Exit Code 2 - pros-cli version:3.5.6
PROS-CLI Version:  3.5.6
PROS-Kernel Version: 4.2.2
╭─ Error ────────────────────────────────────────────────────────────────────────────────╮
│ Failed to build                                                                        │
╰────────────────────────────────────────────────────────────────────────────────────────╯
                                                                                                        
Sentry is attempting to send 1 pending events
Waiting up to 2 seconds
Press Ctrl-C to quit
```

## Step 3: Finally Getting Rid of the Clang Errors

If your program builds, continue with Step 3. Otherwise, fix broken code before continuing.&#x20;

Delete the `/bin` directory to remove all previous builds. Delete `compile_commands.json`. Then run `pros build-compile-commands` in the integrated terminal. This should rebuild the project and make a new `compile_commands.json`.

To make clang refresh and use the new `compile_commands.json`, open the command pallet (`ctrl + shift + p`) and type `clangd: Restart language server` then press enter. This should restart clang, which might take a minute but the false errors should go away.

_Not an AD: Did I mess up while making this tutorial hastly? Do you think clangd uses too much memory? Consider contributing by writing a intellisense alternative!_ :smile:
