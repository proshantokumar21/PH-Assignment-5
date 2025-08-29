1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 
**getElementById** returns a single element with the specified ID.  
**getElementsByClassName** returns a HTMLCollection of all elements with the given class name.  
**querySelector** returns the first element that matches a CSS selector.
**querySelectorAll** returns a static NodeList of all matching elements. 

2. How do you **create and insert a new element into the DOM**?  

Answer:  
To create and insert a new element into the DOM, we use `document.createElement()` to create the element, set its properties or content, and then use `appendChild()` to add it.  

3. What is **Event Bubbling** and how does it work? 

Answer:
Event Bubbling is a mechanism in the DOM where an event triggered on a child element propagates up to its parent elements. When an event occurs, it first runs on the target element, then bubbles up through its parents in the DOM tree unless stopped. This allows parent elements to handle events from their children.

4. What is **Event Delegation** in JavaScript? Why is it useful? 

Answer:
Event Delegation is a technique where a single event listener is added to a parent element instead of multiple listeners on individual child elements. The parent listens for events that bubble up from its children and handles them based on the event target. This is useful for improving performance, especially when dealing with many child elements or dynamically added elements, as it reduces the number of event listeners and simplifies code management.

5. What is the difference between **preventDefault() and stopPropagation()** methods? 

Answer:
**preventDefault()** stops the default action of an event (like following a link or submitting a form), but does not stop the event from bubbling up the DOM.  
**stopPropagation()** prevents the event from bubbling up to parent elements, but does not affect the default action.