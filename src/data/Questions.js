const questionList = [{
        id: 1,
        question: 'What does HTML stand for? ',
        options: [
            'Hyper Trainer Marking Language', 
            'Hyper Text Markup Language',
            'Hyper Text Marketing Language', 
            'Hyper Transfer Markup Language', 
        ],
        answer : 'Hyper Text Markup Language'
    },
    {
        id: 2,
        question: 'Which HTML element is used to insert an image?',
        options: [
            '<img>',
            '<image>', 
            '<Src>', 
            '<pic>', 
        ],
        answer : '<img>'
    },
    {
        id: 3,
        question: 'What is the correct HTML element for the largest heading?',
        options: [
            '<heading>', 
            '<p>', 
            '<h1>',
            '<head>', 
        ],
        answer : '<h1>'
    },
    {
        id: 4,
        question: 'What does CSS stand for?',
        options: [
            'Computer Style Sheets', 
            'Cascading Style Sheets',
            'Creative Style Sheets', 
            'Colorful Style Sheets', 
        ],
        answer : 'Cascading Style Sheets'
    },
    {
        id: 5,
        question: 'Which property is used to change the text color in CSS?',
        options: [
            'font-color',
            'background-Color',
            'text-color',
            'color',
        ],
        answer : 'color'
    },
    {
        id: 6,
        question: 'How do you select an element with the id “header” in CSS?',
        options: [
            '.header', 
            '#header',
            'header', 
            '*header', 
        ],
        answer : '#header'
    },
    {
        id: 7,
        question: 'What is the correct syntax to link an external JavaScript file?',
        options: [
            '<script src="script.js"></script>', 
            '<script href="script.js"></script>', 
            '<link rel="script" src="script.js">',
            '<javascript src="script.js">', 
        ],
        answer : '<script src="script.js"></script>'
    },
    {
        id: 8,
        question: 'How do you create a function in JavaScript?',
        options: [
            'function:myFunction()', 
            'function = myFunction()', 
            'function myFunction()',
            'create myFunction()',
        ],
        answer : 'function myFunction()'
    },
    {
        id: 9,
        question: 'Which of the following is used to write content into the HTML document?',
        options: [
            'document.write()',
            'console.log()',
            'innerHTML()',
            'alert()',
        ],
        answer : 'innerHTML()'
    },
    {
        id: 10,
        question: 'What will this code output ?, console.log(typeof "Hello");',
        options: [
            'boolean', 
            'Number',
            'String',
            'Array',
        ],
        answer : 'String'
    }
] 
export default questionList