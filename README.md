## Making a plan

## HTML Setup
1) We need a button (with and id)
    - Why? To tell the site WHEN to launch the quiz
    - How? `someButton.addEventListener('click', () => {})`
2) We need a results section (with an id)
    - Why? To display the results of the quiz to the user
    - How? `someElement.textContent = 'these are your results . . . '` 

What does it mean to launch a quiz?
    - Announce that there is a quiz
        - How? `alert()`
    - Check to see if the user wants to take it
        - How? `confirm()`
    - Get the user's name
        - How? `prompt()`
    - Ask three questions
        - How?  `prompt()`
    - Score the quiz
        - How? `isYes()`
    - Display the results
        - How? `textContent = 'whatever'`