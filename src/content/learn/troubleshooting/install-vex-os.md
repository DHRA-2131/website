---
title: "Vex OS, Team #, and Robot Name"
description: This almost always fixes things... Recommend doing this if nothing else works.
---

## Install Vex OS

Open a integrated terminal as shown in [How to Fix Clang]("../../../../../programming/getting-started/how-fix-clang/). Then run this command:

```bash 
vexcom --vexos-full --vexos latest
```

This will initiate a fresh install regardless of current version using the latest download from vex. You must run a updated Vex OS version if you want to compete.

## Other important Pre-Competition Configurations

**Robot Name**

This needs to be done for your robot to work correctly with field control and should be done before competitions.

```bash
vexcom --team id <Team Number>
```

**Robot Name**

_Note: I've never seen this ever do anything or mean anything, but heres how you officially name your robot._

```bash
vexcom --robot id <Robot Name>
```

**Battery Medic**

This runs the battery medic program on the brain. This is useful for testing if your batteries are still any good. Batteries with few undervolt / overvolt errors are ideal. More data about healthy batteries is needed.

```bash
vexcom --medic
```

_Not an AD: Wish there was a tutorial on how to test for bad batteries? Contribute Today! :smile:_