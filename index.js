

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the THREE letters you want on your logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo!',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape color to be?'
    }
];