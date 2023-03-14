# Archimedean Spiral
This is a simple demonstration of using the p5.js library to draw an Archimedean Spiral based on the user's mouse position.

### The Math
The Archimedean Spiral is defined by the formula:

$r = a + b \theta$

$x = r \cos(\theta)$

$y = r \sin(\theta)$

where a and b are constants that determine the size and shape of the spiral, and theta is the angle of rotation.

To draw the spiral, we first calculate the distance d from the mouse position to the center of the canvas using the distance formula:

$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

We then divide this distance by 15 (an arbitrary value that seemed to look the best out of all the numbers tried) to determine the stroke weight of the spiral.
