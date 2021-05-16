---
title: Java Threading!
date: "2021-05-02T23:46:37.121Z"
---
<hr/>

###Threads in Java

    Threads are sometimes called lightweight processes. 

There are two ways to create a thread.

- Implementing a Runnable Interface.
- Extending  Thread Class.


####Implementing a Runnable Interface

The Runnable interface defines a single method, run, 
meant to contain the code executed in the thread. 
The Runnable object is passed to the Thread constructor.

<b><u>Implementation</u></b>

```java
public class HelloRunnable implements Runnable {

    public void run() {
        System.out.println("Hello from a thread!");
    }

    public static void main(String args[]) {
        (new Thread(new HelloRunnable())).start();
    }

}
```

####Extending Thread Class

The Thread class itself implements Runnable, 
though its run method does nothing. 
An application can subclass Thread,
providing its own implementation of run.

<b><u>Implementation</u></b>

```java
public class HelloThread extends Thread {

    public void run() {
        System.out.println("Hello from a thread!");
    }

    public static void main(String args[]) {
        (new HelloThread()).start();
    }

}
```


