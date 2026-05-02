---
title: "Basic C++ Syntax"
description: 'Getting started with your coding journey!'
---

## Entry Point

An Entry Point is where your code starts from. All C++ and C programs have an entry point to the program, while this can technically be any name, the standard convention for a entry point is the `main()` function. When reading your code, start at the main function.

## Where is the Entry Point in a PROS Project?

An observant reader might have noticed that your Empty Pros Project we made in [Creating A New Pros Project](../../getting-started/creating-a-new-pros-project/ "mention") doesn't have a `main()` function in `src/main.cpp`. This is because it is hidden away in the PROS source code as PROS needs to initialize it's own code before user code starts (like starting [FreeRTOS](https://www.freertos.org/) which controls how threading works). Below is an annotated fresh project that explains what the functions `main()` is replaced with. If you don't understand everything yet don't worry.

**TL;DR:** your code will run the `initialize()` function at program start and then transition to `opcontrol()`, `disabled()`, or `autonomous()`.


```cpp
#include "main.h"

/**
 * @brief Provides a callback for the default brain screen implementation.
 * You can remove this if you want to create a Custom Brain Screen
 * Implementation or don't want the Cortex LCD Emulation. (It's Ugly
 * yellow)
 *
 */
void on_center_button()
{
  // Initialize a variable on the first time calling this function that
  // keeps track of the button state.
  static bool pressed = false;

  // Toggle the state of the button on each call. If the button was
  // previously pressed = true, set to pressed = false.
  //* Note: ! is the NOT operator, which flips the value of a boolean.
  pressed = !pressed;

  // Check if the state of the button is pressed.
  if (pressed)
  {
    // If the state is flagged as pressed, set the text on line 2 of the
    // Emulated LCD to "I was pressed!"
    pros::lcd::set_text(2, "I was pressed!");
  }

  else
  {
    // Otherwise (if pressed doesn't equal true), clear line 2 of
    // the LCD.
    pros::lcd::clear_line(2);
  }
}

/**
 * @brief Initial code for the robot. This runs on program start, after
 * PROS has finished it's background setup.
 *
 */
void initialize()
{
  // Starts the PROS Emulated LCD. This will make the screen yellow and
  // display 3 buttons.
  pros::lcd::initialize();

  // Sets the text on the second line (line index starts with 0, so 1 would
  // be the second line by count) of the emulated LCD to "Hello PROS User!"
  pros::lcd::set_text(1, "Hello PROS User!");

  // Registers button 1 (the center button) of the PROS Emulated LCD to
  // call the on_center_button() function when pressed *and* released (this
  // is why we toggle the pressed variable).
  pros::lcd::register_btn1_cb(on_center_button);
}

/**
 * @brief Runs when field control (or Competition Switch) is set to
 * disabled with either driver or autonomous.
 *
 */
void disabled()
{
  // Nothing by default. You cannot preform actions to move the robot in
  // this state, but you could edit tracking to stop or reset internal
  // values here. Ex: Odometry->reset();
}

/**
 * @brief This runs when the robot or controller is connected to field
 * control (or Competition Switch).
 *
 */
void competition_initialize()
{
  // Nothing by default. You can add any code here you wish. Keep in mind
  // this code may run multiple times in a match if connection drops and
  // reconnects. You may want this to calibrate the robot.
}

/**
 * @brief This runs when autonomous is started. IE, when field control (or
 * Competition Switch) is set to Autonomous and Enabled.
 *
 */
void autonomous()
{
  // Nothing by default. You can hardcode a simple autonomous route here.
  // Further tutorials (TBD at the time of writing this) will cover how to
  // make an autonomous selector on the brain that allows you to select
  // between multiple routes.

  // It is suggested to create a separate autonomous.cpp file and call a
  // function or function callback from here.
}

/**
 * @brief This runs when driver control is started. IE, when field control
 * (or Competition Switch) is set to Driver and Enabled. If not plugged
 * into field control (or Competition Switch), this function will be called
 * immediately following the initialize() function.
 *
 */
void opcontrol()
{
  // This was edited in the git source control tutorial, but it should look
  // similar to a fresh project.

  // Creates a Controller.
  pros::Controller master(pros::E_CONTROLLER_MASTER);

  // Creates two Motor Groups for the left and right sides of the drive.
  // Numbers reflect the port the motor is connected to on the brain and
  // negative sign reflects that the motor should be reversed to work with
  // the other motors in the group.
  pros::MotorGroup left_mg({1, -2, 3});
  pros::MotorGroup right_mg({-4, 5, -6});

  while (true)
  {
    // This prints the status of the emulated LCD buttons to the first line
    // of the Emulated LCD. This is using some very technical C language
    // and can be removed without breaking anything.
    pros::lcd::print(
        0,
        "%d %d %d",
        (pros::lcd::read_buttons() & LCD_BTN_LEFT) >> 2,
        (pros::lcd::read_buttons() & LCD_BTN_CENTER) >> 1,
        (pros::lcd::read_buttons() & LCD_BTN_RIGHT) >>
            0);  // Prints status of the emulated screen LCDs

    // Arcade control scheme
    // Gets amount forward/backward from left joystick of the master
    // controller
    int dir = master.get_analog(ANALOG_LEFT_Y);

    // Gets the turn left/right from right joystick of the master
    // controller
    int turn = master.get_analog(ANALOG_RIGHT_X);

    // Signs of the output of the function on the controller is denoted by (+) or (-)
    // in the comments below. 
    
    left_mg.move(dir - turn);  // Sets left motor voltage to forward (+)
                               // /backward (-) - turn left (-) / right (+)
    right_mg.move(
        dir + turn);  // Sets right motor voltage to forward (+) /backward
                      // (-) + turn left (-) / right (+)

    // This will keep the loop from taking all the CPU resources and allow
    // other tasks to run in the background while we wait for device data to refressh. 
    // Most devices update internally at every ~5ms timestep, and pass data every 10 ms
.   pros::delay(10); 
  }
}
```

## Execution Order (Follow This When Debugging)

Execution always starts from the entry point. Because PROS source code has our entry point, we can assume that the coder starts with initial, then follows the logic listed above. When debugging, it is incredibly useful to start from the beginning of your execution and think through every step in execution order (`top to bottom, left to right`)\*.

## Useful Resources for Coding in C++ and PROS

* [Your Brain! ](https://www.thesynergist.org/wp-content/uploads/2014/09/469564565.jpg)- **Do this before going to any of the other options!** Write out what you are trying to do in English. This makes things easier to write in C++.&#x20;
  * Example: `For every <item> in a <list of items> attempt to <add 3> to <item>` could then be written as `for(int item : items) { item += 3}`.&#x20;
  * This is akin to thinking about something in English before translating it to another language and saying it.&#x20;
* [W3 Schools C++ Tutorial](https://www.w3schools.com/cpp/) - Great for remembering and learning how to do simple C/C++ features such as loops, variables, functions, operators, etc. Use this if C++ is your first language.
* [Cherno C++ Tutorial (YouTube)](https://www.thesynergist.org/wp-content/uploads/2014/09/469564565.jpg) - Great video instruction and explanation of deeper topics. This is probably best used after programming in another language or when W3 Schools doesn't make sense. _Added Bonus: YouTuber has wonderful Australian Accent._
* [C++ Reference](https://cppreference.com/) - Great for technical instructions. This shouldn't be used by beginning programmers. It explains how to use C++ features in C++. Similar to learning a foreign language in the foreign language. This is incredibly useful once you have C++ proficiency!
* [Pros 3.8 API Documentation](https://pros.cs.purdue.edu/v5/api/index.html) - This website is documentation for the Application Programming Interface (API) for PROS. Basically it tells you how to make a `Motor` and interface with PROS. This can be referenced if you don't know how to change a `OpticalSensor`'s update speed for [example](https://pros.cs.purdue.edu/v5/api/cpp/optical.html?highlight=optical%20sensor#set-integration-time). &#x20;
* [Pros 4.0 API Documentation](https://purduesigbots.github.io/pros-doxygen-docs/api.html) - This is just a more updated version of the above listing. Sadly it has a `.io` extension so at the time of writing it cannot be visited on School Wifi without a VPN.
  > [!CAUTION] 
  > Resource below is not at all recommended for beginning programmers! This has been included if you're interested in writing a vex runtime for another language or if you want to look into how VexOs works.
* [Vexide SDK Reference](https://github.com/vexide/vex-sdk) - This is useful if you'd like to write custom code that doesn't rely on PROS, Vexide, or VexCode.  
  
 

_\*Note: Technically the execution order is controlled by the compiler, but for most debugging purposes, try_ `top to bottom, left to right` _first._

_Not an AD: Is your favorite resource missing? Want to complain? Don't. Learn how to contribute and add it yourself!_ :smile:
