# Background-Generator

Background Generator can be quite useful when we wish to test certain gradient patterns out. 

It is implemented using JavaScript and has 2 options - 
1. Choosing the colors for the gradient
2. Creating a random gradient pattern

For the 2 choices, I've created 2 functions - 
1. setGradient: for setting the background to match the colors the user has selected or randomly 
2. randomColor: for generating random integers from 0 to 255

setGradient has 2 default parameters which represent 2 random colors by making a function call to randomColor. When the user selects a color, a function call to setGradient is made by using the color the user has selected as the arguments. On the other hand, if the user clicks on the button to generate random background, a function call to setGradient is made without any arguments implying that two random colors will be generated and the background will change accordingly.

Finally, the CSS for setting the background to the gradient is also displayed.
