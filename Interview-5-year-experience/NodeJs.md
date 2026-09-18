# NojeJs Fundamentals
1. What is nodejs and why is is good for I/O -heavy application
:- Nodejs is a javascript runtime build on Chrome's V8 engine that allow us to run javascript outside the browser, mainly for backend application;

: Why good for I/O heavy application?
:- Nodejs is a single threaded event loop with non blocking asynchronous I/O.
When nodejs perform I/O operation such as database query, file operation or HTTP request to another service, It doesn't block the main thread while waiting for the operation to complete.

Instead It delegates the I/O operation to uderlaying system/libuv and continue processing other requests. Once the operation completes its callback or promise is handled through the event loop.

And this make Nodejs particular suitable for I/O heavy applications such as REST APIS, real-time applications, chat applications, streaming services, and application the cummunication with multiple external services.

Main advantage is that small number of threads can handle a large number of concurrency I/O operations efficiently.


Eg
Request 1 -> Start DB query ------------------------

Req 2 ---> Start API request -----------------------

Req 3 ---> Start DB query -------------------------

Req 4 ---> Radis Cache request --------------------

            Event Loop Keeps working

            Result come back

Nodejs is particular strong for I/O bound workloads.

For CPU-heavy work such as :-
    1. Video encording "converting from compression"
    2. Large Image Processing
    3. Complex Calculations
    4. Machine learning computations

A CPU-intensive operation on the main javascript thread can block the event loop and prevent Nodejs from efficiently handling other req; for those work load consider Worker Threads,child processes, background jobs or a separate service.



