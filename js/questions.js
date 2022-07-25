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
  {
    prompt: 'This is why games are addictive',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
    cashPrize: 150
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
  {
    prompt: 'Which country has the most gamers',
    options: ['United States', 'China', 'Iran', 'South Korea'],
    correctAnswer: 'China',
    cashPrize: 150
  },
  /* Consequences Questions */
  {
    prompt: 'This is not a common negative consequence of excessive gaming.',
    options: ['Social anxiety', 'Inattentive in class', 'Insomnia', '40 lines WR'],
    correctAnswer: '40 lines WR',
    cashPrize: 10
  },
  {
    prompt: 'This will not happen when you game too much.',
    options: ['Alienating others', 'Completing homework', 'Dipping grades', 'Getting 100% in games'],
    correctAnswer: 'Getting 100% in games',
    cashPrize: 50
  },
  {
    prompt: 'This is another possible consequence of gaming addiction (open-ended)',
    options: ['gaming', 'too much gaming'],
    correctAnswer: 'gaming',
    cashPrize: 100
  },
  {
    prompt: 'This is the average sleep of a gamer',
    options: ['5 hours', '8 hours', '10 hours', '7 hours'],
    correctAnswer: '5 hours',
    cashPrize: 150
  },
  /* Stopping addiction Questions */
  {
    prompt: 'This is a possible self-control technique. (open-ended)',
    options: ['Complete', 'Failure'],
    correctAnswer: 'Complete',
    cashPrize: 10
  },
  {
    prompt: 'This is a reason why quitting is so difficult',
    options: ['Success','Failure'],
    correctAnswer: 'Success',
    cashPrize: 50
  },
  {
    prompt: 'This is the HPB recommended daily entertainment screen time (for youth aged 7-18).',
    options: ['<2 hours', '<1 hour', '<30 mins', 'Half of the daily exercise time'],
    correctAnswer: '<2 hours',
    cashPrize: 100
  },
  {
    prompt: 'This is the average BMI of a gamer',
    options: ['28.05', '26.55', '30.42', '21.69'],
    correctAnswer: '28.05',
    cashPrize: 150
  },
  
  /* Random stuff Questions */
  {
    prompt: 'This % of the 4665 divorce petitions in UK cited gaming addiction as a reason (2018).',
    options: ['0.05','0.5','5','50','500'],
    correctAnswer: '5',
    cashPrize: 10
  },
  {
    prompt: 'This is the number of hours Chinese youths in China are allowed to play video games, per week.',
    options: ['none','up to 3','up to 13.5','up to 15'],
    correctAnswer: 'up to 3',
    cashPrize: 50
  },
  {
    prompt: 'Solve today\'s wordle in 4 attempts or under, live, right now.',
    options: ['Success','Failure'],
    correctAnswer: 'Failure',
    cashPrize: 100
  },
  {
    prompt: 'This is the CyberBuddies President',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
    cashPrize: 150
  }
  
];

export default questions;
