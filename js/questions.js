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
    prompt: 'More people are addicted to this than the other option.',
    options: ['Video games', 'Drugs'],
    correctAnswer: 'Video games',
    cashPrize: 100
  },
  /* Symptoms Questions */
  {
    prompt: 'This is not a sign of addiction.',
    options: ['Gaming despite not starting a project due in 1 hour', 'Feeling bored or unhappy when not gaming', 'Thinking about gaming very often', 'Playing mobile games during recess'],
    correctAnswer: 'Yes',
    cashPrize: 10
  },
  {
    prompt: 'Name 3 signs of addiction. (open-ended)',
    options: ['1', '2', '3', 'bruh'], 
    correctAnswer: '3',
    cashPrize: 50
  },
  {
    prompt: 'This is your adventure rank in Genshin Impact.',
    options: ['<10', '11-54', '55+', 'what i don\'t play genshin'],
    correctAnswer: 'what i don\'t play genshin',
    cashPrize: 100
  },
  /* Consequences Questions */
  {
    prompt: 'This is not a common negative consequence of excessive gaming.',
    options: ['Social anxiety', 'Inattentive in class', 'Insomnia', '40 lines WR'],
    correctAnswer: '40 lines WR',
    cashPrize: 10
  },
  {
    prompt: 'This will happen when you game too much.',
    options: ['No friends', 'No mother', 'No grades', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 50
  },
  {
    prompt: 'This is another possible consequence of gaming addiction (open-ended)',
    options: ['gaming', 'too much gaming'],
    correctAnswer: 'gaming',
    cashPrize: 100
  },
  /* Stopping addiction Questions */
  {
    prompt: 'This is the HPB recommended daily entertainment screen time (for youth aged 7-18).',
    options: ['<2 hours', '<1 hour', '<30 mins', 'Half of the daily exercise time'],
    correctAnswer: '<2 hours',
    cashPrize: 10
  },
  {
    prompt: 'UNIX was added relatively later into what popular propietary operating system?',
    options: ['Windows 10', 'Linux Mint', 'Mac OS X', 'Ubuntu'],
    correctAnswer: 'Mac OS X',
    cashPrize: 50
  },
  {
    prompt: 'This is a possible self-control technique. (open-ended)',
    options: ['Complete', 'Failure'],
    correctAnswer: 'Complete',
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
    prompt: 'ஃ',
    options: ['🝆', 'ஃ', '⛬', '∴'],
    correctAnswer: 'ஃ',
    cashPrize: 100
  }
];

export default questions;