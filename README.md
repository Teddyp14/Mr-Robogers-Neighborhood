# _Mr. Roboger's Neighborhood_

#### By _**Teddy Peterschmidt**_

#### _A web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with specific numbers substituted with words from Mr.Roboger._

## Technologies Used

* HTML
* CSS
* Javascript

## Description

This web application takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

* For numbers that contain a 1, all digits are replaced with "Beep!"
* For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
* For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
* For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level directory of the project.
* Open mr-roboger/index.html in your browser.

## Known Bugs

* The page allows you to scroll to the right, showing a blank right hand side of the page. Solutions in progress. 

## License

MIT License

Copyright (c) 2023 Teddy Peterschmidt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE

## Business Logic Tests: 

#### Describe: robotRoger()

Test: "It will return an array from 0 to the user's input number."
Code: robotRoger(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It will iterate through the array and replace numbers that contain '1' with 'Beep!'."
Code: robotRoger(1)
Expected Output: [0, "Beep!"]

Test: "It will iterate through the array and replace numbers that contain '2' with 'Bop!'."
Code: robotRoger(2)
Expected Output: [0, "Beep!", "Bop!"]

Test: "It will iterate through the list and replace numbers that contin '3' with 'Won't you be my neighbor?'."
Code: robotRoger(3)
Expected Output: [0, 1, "Beep!", "Bop!", "Won't you be my neighbor?"]

Test: "It will combine the array into a string, with each element separated by a comma and a space. 
Code: robotRoger(3)
Expected Output: 0, 1, "Beep!", "Bop!", "Won't you be my neighbor?"

Test: "It will return an error message if a negative number is entered"
Code: robotRoger(-1)
Expected Output: "Error! No negative numbers, please!"