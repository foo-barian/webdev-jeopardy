const questions = [
  /* Stats Questions */
  {
    prompt: 'This is Singapore\'s gaming population.',
    options: ['2 million', '3 million', '4 million', '5 million'],
    correctAnswer: '3 million',
    cashPrize: 10
  },  
  {
    prompt: 'This is the average age of gamers globally.',
    options: ['19', '24', '29', '34'],
    correctAnswer: '34',
    cashPrize: 50
  },
  {
    prompt: 'Are more people addicted to video games or drugs?',
    options: ['Video games', 'Drugs'],
    correctAnswer: 'Video games',
    cashPrize: 100
  },
  /* Symptoms Questions */
  {
    prompt: 'The "<Span> </Span>" has what as a default property?',
    options: ['set-length', 'block', 'timestamp', 'inline'],
    correctAnswer: 'inline',
    cashPrize: 10
  },
  {
    prompt: 'This is a sign of addiction.',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
    cashPrize: 50
  },
  {
    prompt: 'This is my adventure rank in Genshin Impact.',
    options: ['I don\'t play genshin what', '<10', '11-54', '55\+'],
    correctAnswer: 'I don\'t play genshin what',
    cashPrize: 100
  },
  /* Consequences Questions */
  {
    prompt: 'Which is a coding language or library not actually relevant to modern Javascript?',
    options: ['Java', 'ECMAScript', 'Ajax', 'JQuery'],
    correctAnswer: 'Java',
    cashPrize: 10
  },
  {
    prompt: 'Javascript is usually described as a " "-based language?',
    options: ['Relational', 'COBOL', 'Object', 'Directional'],
    correctAnswer: 'Object',
    cashPrize: 50
  },
  {
    prompt: 'JSON is: ',
    options: ['A Javascript engine', 'A text format readable by Javascript', 'A Javascript library', 'A Javascript function'],
    correctAnswer: 'A text format readable by Javascript',
    cashPrize: 100
  },
  /* Stopping addiction Questions */
  {
    prompt: 'The Terminal or command line is an example of a?',
    options: ['Interconnected Network', 'Read-Eval-Print-Loop', 'C++ Library Object', 'Skynet'],
    correctAnswer: 'Read-Eval-Print-Loop',
    cashPrize: 10
  },
  {
    prompt: 'UNIX was added relatively later into what popular propietary operating system?',
    options: ['Windows 10', 'Linux Mint', 'Mac OS X', 'Ubuntu'],
    correctAnswer: 'Mac OS X',
    cashPrize: 50
  },
  {
    prompt: 'The command "man x" would?',
    options: ['Bring up the task manager for x', 'Modularize x', 'Attempt to bring up the manual page for x', 'Make x mandatory on startup'],
    correctAnswer: 'Attempt to bring up the manual page for x',
    cashPrize: 100
  },
  /* Random stuff Questions */
  {
    prompt: '',
    options: ['Warning, Confirm', 'Confirm, Refresh', 'Prompt, Confirm', 'Prompt, Notice'],
    correctAnswer: 'Prompt, Confirm',
    cashPrize: 10
  },
  {
    prompt: 'The man page for Git describes it as:',
    options: ['That stupid content tracker', 'A Content Version Tracker', 'General-Index-Tracker', 'A Revision Editor'],
    correctAnswer: 'That stupid content tracker',
    cashPrize: 50
  },
  {
    prompt: 'What version of what coding language introduced the audio function contained in this page?',
    options: ['ECMAScript', 'MP3ML', 'HTML5', 'WavML'],
    correctAnswer: 'HTML5',
    cashPrize: 100
  }
];

export default questions;