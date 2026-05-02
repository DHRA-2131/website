---
title: "Monte Carlo Localization"
description: 'Finding position globally using distance sensors'
---

When running arc odometry, we run into two primarily problems:

First, without horizontal odometry, we can't track if the robot slides side to side. If the robot slides sideways, our robot will be constantly off horizontally for the rest of our Autonomous program.

Second, odometry is great, but isn't 100% accurate. Every timestep, we likely have some small amount of error. Over a small amount of time, this error is negligible, but over time it can compound, leading to small errors amounting to a large problem over time.

To fix this, we need a way to verifiably check our position from the field around us as these readings will always be within a specific error range by not compounding over time. This leaves us with the following sensor options:

* GPS Sensor: This VEX sensor reads the barcode thing on the edge of the field to get a global position. However, these sensors are not very accurate and can be easily distorted by strange lighting.
