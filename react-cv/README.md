# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//TODO

// Visual Stuff
- Adjust CSS to look nicer
- Collect CSS to single page
- In Education info + Work Experience - change Started to be smaller than Finished
- Change some Field Names (Eg Name:, Email:) to be an svg icon 
- Correct Edit > Clear buttons

// Functional Stuff
- ``Maintain input value in edit input fields``
- ``Adjust phone input to phone form``
- ``create first/last for name input``
- ``process first/last to full name on display``
- ``adjust email input to email form``

- ``adjust date of study to date started + date ended``

- ``!!adjust Responsibilities to text box, not single line!!`` - Possible issue with display version being single line, not text area - may be a CSS issue
- ``adjust date of Employment to date started + date ended``


- Only Allow one edit box open at once, opening one closes the others
- ``Allow clicking Edit Info to open/close the edit pop up box``

- Handle Empty info submit (if value empty, use default)
- Change Work Experience > Responsibilites to be a list format
- Add Suitable SVGS for each Text Item
- Add 'Add More Education'
- Add 'Level of Education'
- Add Protection against accidentally removing
- Add Transition Animation for Edit Box Pop Up and Close
- Adjust Position of Edit Box
- Layout Cards in non vertical format




/// TOP STUFF

Assignment:

1. Create a new React project - ``Mission Accomplished``

2. Think about how to structure your application into components. Your application should include:

- 1. A section to add general information like:
- - Name
- - Email
- - Phone Number

- 2. A section to add your educational experience:
- - School Name
- - Title of Study
- - Date of Study

- 3. A section to add practical experience:
- - Company Name
- - Position Title
- - Main responsibilities of your jobs
- - Date from and until when you worked for that company

3. Be sure to include an edit and submit button for each section or for the whole CV.
- The Submit button should submit your form and display the value of your input fields in HTML elements.
- The edit button should add back (display) the input fields, with the previously display information as values
- In those input fields, you should be able to edit and resubmit the content.
- You're going to make heavy use of state and propes, so make sure you understood those concepts.

4. Create a components directory under your src directory and add your components.

5. Include a styles directory under your src directory for you CSS files.
- You'll need to import these in the component files to use them.

6. Push the result and deploy them with any of the options mentioned below.
- At this point of the curriculum, it doesn't matter which platform you choose as long as your project is live on the internet!
