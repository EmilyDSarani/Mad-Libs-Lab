## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

Song:
I smoke(verb) two(number) joints(noun) in the morning,
I smoke two joints at night,
I smoke two joints in the afternoon,
It makes me feel all right.
I smoke two joints in time of peace,
And two in time of war.
I smoke two joints before I smoke two joints,
And then I smoke two more.

HTML:
4 sections
-Title
-Instructions
-Entries
-Lyrics
Need a button x1
Need a form? Place to write stuff, box friends.. x3
Need ID's
Need Classes

Javascript:
Button Click
Get Ele by ID
Take whatever the element is and then have it pull the 'div' from the lyrics and change it into whatver the user inserts as their verb, number, and noun. 

CSS: 
Hidden