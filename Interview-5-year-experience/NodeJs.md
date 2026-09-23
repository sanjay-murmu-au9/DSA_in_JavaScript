# NojeJs Fundamentals
1. What is nodejs and why is is good for I/O -heavy application
:- Nodejs is a javascript runtime build on Chrome's V8 engine that allow us to run javascript outside the browser, mainly for backend application and APIs;

: Why good for I/O heavy application?
:- Nodejs is a single threaded event loop with non blocking, asynchronous I/O.
When nodejs perform I/O operation such as database query, file operation or HTTP request to another service, It doesn't block the main thread while waiting for the operation to complete.

Instead It delegates the I/O operation to uderlying system/libuv and continue processing other requests. Once the operation completes, its callback or promise is handled through the event loop.

And this make Nodejs particular suitable for I/O heavy applications such as REST APIS, real-time applications, chat applications, streaming services, and application that cummunicatie with multiple external services.

Main advantage is that small number of threads can handle a large number of concurrency I/O operations efficiently.


Request 1 → Start DB query ──────────────┐
                                         │
Request 2 → Start API request ───────────┤
                                         │
Request 3 → Start DB query ──────────────┤
                                         │
Request 4 → Start Redis request ─────────┤
                                         │
             Event Loop keeps working    │
                                         ↓
                     Results come back

Nodejs is particular strong for I/O bound workloads.

For CPU-heavy work such as :-
    1. Video encording "compression"
    2. Large Image Processing
    3. Complex Calculations
    4. Machine learning computations

A CPU-intensive operation on the main javascript thread can block the event loop and prevent Nodejs from efficiently handling other req;
For those work load consider Worker Threads,child processes, background jobs or a separate service.


# Is Javascript single threaded ?
:- Javascript execution in Nodejs primarly happens on a single main thread, but Nodejs itself isn't limit to only one thread.It uses the event loop and libuv, which can use the operating system and a thread pool for certain operatons.Nodejs also provides worker Threads for CPU-intensive Javascript workloads.

# What is worker Threads
:- Worker Threads is a module in Nodejs that allows you to run JavaScript code in parallel on another threads on same nodejs. It is designed for CPU-intensive tasks that can block the main thread and degrade performance. By offloading these tasks to worker threads, you can keep the main thread responsive and improve the overall performance of your application.

Node.js Application
                        │
              ┌─────────┴─────────┐
              ↓                   ↓
        Main Thread          Worker Thread
        Event Loop           ML calculation
              │                   │
        API requests          CPU-heavy work


# Worker Pool
:- A collection of re-usable worker threads that execute CPU-heavy tasks instead of creating a new worker for every request.

Node.js Process
│
├── Main Thread
│
├── Worker 1
├── Worker 2
├── Worker 3
└── Worker 4

Instead of creating a worker for every req, we have 4 workers ready to process jobs.


# How does Nodejs work internally ?
: Nodejs uses the chrome's V8 engine to execute javascript. It uses an event driven architecture with an event loop to handle async operations without blocking the main javascript thread. libuv provide the event loop and asychronous I/O ans also has a thread pool for certain operations such as file system, DNS, crypto and compression. WHen and async operation is completes its callback or promises handle through event loop mechanism. For CPU intensive Javascript work would block the event loop so we can uses worker threads or worker pool.

# What is child process in Nodejs
: A child process is a seprate Operating system process spawned by a nodeJs process. NodeJs provides the child_process module to crate and communicate with child processes. A child process as its own memory and execution environment and can run another nodejs program or even a different runtime such as python.Its useful for process isolation,running external programs or offloading work that is better handled outside the main Node Process.



                Node.js
                   │
       ┌───────────┼────────────┐
       │           │            │
   Event Loop   Worker       Child Process
       │         Thread          │
       │           │             │
    API/I/O    CPU-heavy JS   Python/FFmpeg/etc.

# Event loop In NodeJs
: NodejS run on javscript primary on a single thread; THe Event loop is the mechanism that allow Nodejs to handle asyncronous operation without blocking that thread. When nodejs start asyc operation such as network call or database req, It doesn't wait synchronous for the result.Once operation is read its callback or promose continuation become eligibleto run, and the Event loop execute it when javascript thread is available. This allows nodejs to handle many I/O operations concurrently.


console.log('1')

setTimeout(()=>{
    console.log(2)
})

console.log('3')

output
1,3,2

# SetTimeout Schedule the callback rather than executing it immediatly;

# 3 Important point to memorize;
1. The Event loop allows Nodejs to handle async operation without blocking the main Javascript thread.
2. It continuously checks for work that is ready to execute and run the corresponding callbacks or promise continuations.
3. I/O- bound work well with this model while CPU intensive JS should be moved to worker Threads or worker pool so the main Event loop isn't blocked.

# Event loop doesn't make CPU heavy javascript asychronous;

The Event Loop phases

                 ┌──────────────────┐
                 │     Timers       │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │ Pending Callbacks│
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │      Idle /      │
                 │     Prepare      │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │       Poll       │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │      Check       │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │     Close        │
                 │    Callbacks     │
                 └────────┬─────────┘
                          │
                          └──────→ repeat


Main phase you should Know are:-
1. Timers
2. Pending callbacks
3. Idle/ Prepare
4. Poll
5. Check
6. Close callbacks

# How do you find out CPU-intensive work in Nodejs ?
:- I would look into whether Js is spending significant time performing computation rather then waiting for external I/O.
ex:- include large loops, complex sorting or transformations, image or video processing,cryptographic operations and machine learning calculation. I would measure the execution time and monitor event-loop lag rather assuming someting is CPU-heavy just from the code.If the operation block the main thread for a significant amount of time I'd consider moving it to a Worker Thread, worker Pool or separate process depending on the work load.

# How to monitor Event Loop lag
Nodejs provide a build-in way 'perf_hooks.monitorEventLoopDelay()'

const {monitorEventLoopDelay} = require("perf_hooks")

const histogram = monitorEventLoopDelay({
    resolution: 20
})

histogram.enable();

setInterval(()=>{
    console.log({
        min: histogram.min,
        max: histogram.max,
        mean: histogram.mean,
        p99: histogram.percentile(99)
    });
},5000)


# What happens when you execute an async function?
: WHen I execute async function; It always return a promise,The function start executing synchronously until it reach await or return;If it reaches an await for a pending promise, the async function pause at the point and return control to the caller; Once the Promise is settled the remaining part of the function is scheduled to continue ASYNCHRONUSLY.


EX :-async function getProduct(){
    cosole.log('A');
    const result = await Products.getFindByIf('123');
    console.log('b')

    return result;
}

console.log('start');

const result = getProduct();

console.log('end')

outPut:-
start -> getProduct() -> A -> await Db -> function pauses -> Promise returned --> function resume