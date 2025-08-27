1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
 using getElementById: we can get a element by its defining its id.
 getElementsByClassName: we can get a element by its classname
querySelector :  return the 1st element of which element we select by css
querySelectorAll: return all element of a css selector.




2.How do you create and insert a new element into the DOM?


answer:
 to create a element i have to use: document.createElement()
 to insert a new element: parentElement.appendChild()






3.What is Event Bubbling and how does it work?

answer:
event bubbling is when we apply any event to a element, it bubbles up to it's parent element. and thus it works




4.What is Event Delegation in JavaScript? Why is it useful?


answer: 
Event delegation is when we apply a event to a parent and though this that event will apply to every child element of this parent.
it is useful because bt using this, we don't have to apply event to each of the element separately.


5.What is the difference between preventDefault() and stopPropagation() methods?


answer:
when we submit a form it reloads the page a lot. we can prevent to reload by using preventDefault()
stopPropagation() controls an event to bubbling up phases in DOM.
