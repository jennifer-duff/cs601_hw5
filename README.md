# README

## Assignment Details
This site displays information about my college degrees. Pressing the "View My Degrees" button fetches JSON data from a web server; then, assuming the server responded with a "success" status code, parses the JSON data and displays it in a table. If an error occured, a user-friendly error message will display instead, and the user is able to try pressing the button again.

## Additional Features
- Styles are added to make the site asthetically pleasing
- To prevent over-loading the server, additional Fetch requests are not made after the first successful pull.
    - This is done by checking the number of rows added to the table prior to executing a request - if the table already has the maximum number of expected rows, the program knows that a successful request has already been accomplished and that no more are needed.
    - If the user continues to attempt to fetch more data after the first successful pull, a message will appear in the DOM to let them know that there's no more data to display.
- If an error occurs, a message is displayed in the DOM that lets the user know there was an error and prompts them to try again.