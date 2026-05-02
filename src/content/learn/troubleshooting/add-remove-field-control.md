---
title: Add and Remove Field Control
description: "If no devices are showing up, this is what you want to do."
---

## Add Field Control

Go to the vex field control download [here](https://vrcfieldapp.vex.com/#). Follow the instructions and download the match field control application to Slot 1 and skills to Slot 2. _Note: This process needs to be done on a chrome browser and cannot be done in firefox :cry:._

<div align="center"><figure><img src="/images/assets/vrcfieldapp.vex.com_.png" alt=""><figcaption></figcaption></figure></div>

Upon installing, run the program and change the settings. Timings should be **0:15/1:45** for a V5 Match. At the time of writing vexNet protocol is used over bluetooth for matches. At big competitions where bandwidth may be limited, switching the protocol to bluetooth is recommended. _Note: Using bluetooth will require teams to switch radio mode to start a skills run. Also, note that the settings defualt to Vex U at the time of writing._

<div align="center"><figure><img src="/images/assets/field-control-settings.jpg" alt=""><figcaption>Settings For V5 Match</figcaption></figure></div>

When feild control has been run for the first time, the brain will lock all the V5 ports in the device menu. No devices will show up (including controllers). To verify ports, run the the match program and connect a controller that is connected to a robot. The controller should show up as detected on the brain screen (not in the device menu) when the program is running. 

<div align="center"><figure><img src="/images/assets/field-control-devices.jpg" alt=""><figcaption>Ports all locked</figcaption></figure></div>

## Removing Field Control

**First Method**

There are multiple methods to remove field control from a vex brain. The simplest way to remove field control is to go to the `settings` tab on the vex brain, click `reset all settings`, then `reset programs`. This will erase all programs on the brain and reset the brain so that the ports are unlocked in the device menu.

**Second Method**

If field control manages to sneak its way back on to the brain somehow, try this second method:

**Step 1: Reset The Brain**

Go to the offical [V5 Reset Website](v5reset.vex.com). Press reset and follow the instructions to figure out which COM (Windows) to select. This should remove all the programs and require a language to be selected. This will not remove the field control block on ports. 
<div align="center"><figure><img src="/images/assets/v5reset.vex.com_.png" alt=""><figcaption>Reset Website for the V5 Brain</figcaption></figure></div>

**Step 2: Fix The Port Block**

Run `reset settings` from the settings tab afterwards to remove the block. _Note: This has seems to be more reliable but it is not verified that it actually does anything different._

_Not an AD: Want to add more pictures, please do. Contribute Today! :smile:_