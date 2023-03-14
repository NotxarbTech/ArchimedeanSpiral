# ArchimedeanSpiral
Simple demonstration using the p5.js library to draw an Archimedean Spiral based on the user's mouse position.

### The math
Uses the Archimedian Spiral formula ($r = a + b * \theta, $x = r * cos( \theta ), y = r * sin( \theta )$) to draw the spiral.
Calculates the distance from the middle of the canvas using the distance formula ($d = sqrt((x2 - x1)^2 + (y2 - y1)^2)$) arbitrarily divided by 15 (seemed to look the best out of all the numbers I tried) to determine the stroke weight.
