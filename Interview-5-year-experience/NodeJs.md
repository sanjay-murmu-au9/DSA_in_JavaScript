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


