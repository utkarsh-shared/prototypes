export interface Trend {
  intentType: 'Pain Point' | 'Need' | 'Question' | 'Objection';
  name: string;
  volume: number;
  trend: number; // Percentage change
  history: { date: Date; volume: number }[];
  description: string;
  sentiment: {
    positive: number;
    negative: number;
    neutral: number;
  };
}

export const trendsData: Trend[] = [
  {
    intentType: 'Pain Point',
    name: 'Difficulty Integrating with Other Tools',
    volume: 1240,
    trend: 15.2,
    history: [
      { date: new Date('2023-01-01'), volume: 800 },
      { date: new Date('2023-02-01'), volume: 950 },
      { date: new Date('2023-03-01'), volume: 1100 },
      { date: new Date('2023-04-01'), volume: 1240 }
    ],
    description: 'Customers are frequently mentioning difficulties when trying to integrate our platform with third-party software, especially custom APIs.',
    sentiment: {
      positive: 10,
      negative: 85,
      neutral: 5
    }
  },
  {
    intentType: 'Pain Point',
    name: 'User Interface is Not Intuitive',
    volume: 850,
    trend: -5.5,
    history: [
      { date: new Date('2023-01-01'), volume: 950 },
      { date: new Date('2023-02-01'), volume: 900 },
      { date: new Date('2023-03-01'), volume: 880 },
      { date: new Date('2023-04-01'), volume: 850 }
    ],
    description: 'A significant number of users find the main dashboard cluttered and struggle to find key features without guidance.',
    sentiment: {
      positive: 5,
      negative: 90,
      neutral: 5
    }
  },
  {
    intentType: 'Need',
    name: 'Request for Advanced Reporting Features',
    volume: 2300,
    trend: 25.0,
    history: [
      { date: new Date('2023-01-01'), volume: 1500 },
      { date: new Date('2023-02-01'), volume: 1800 },
      { date: new Date('2023-03-01'), volume: 2100 },
      { date: new Date('2023-04-01'), volume: 2300 }
    ],
    description: 'Users are increasingly asking for more granular and customizable reporting options, including scheduled exports and custom metrics.',
    sentiment: {
      positive: 60,
      negative: 10,
      neutral: 30
    }
  },
  {
    intentType: 'Need',
    name: 'Mobile Application for On-the-Go Access',
    volume: 1500,
    trend: 12.8,
    history: [
      { date: new Date('2023-01-01'), volume: 1100 },
      { date: new Date('2023-02-01'), volume: 1250 },
      { date: new Date('2023-03-01'), volume: 1400 },
      { date: new Date('2023-04-01'), volume: 1500 }
    ],
    description: 'There is a growing demand for a native mobile app (iOS and Android) to allow users to manage their accounts and view data from anywhere.',
    sentiment: {
      positive: 70,
      negative: 5,
      neutral: 25
    }
  },
  {
    intentType: 'Question',
    name: 'How to Set Up Automated Workflows?',
    volume: 980,
    trend: 8.1,
    history: [
      { date: new Date('2023-01-01'), volume: 800 },
      { date: new Date('2023-02-01'), volume: 850 },
      { date: new Date('2023-03-01'), volume: 920 },
      { date: new Date('2023-04-01'), volume: 980 }
    ],
    description: 'Many users are asking for documentation or tutorials on how to configure and use the automated workflow features.',
    sentiment: {
      positive: 20,
      negative: 20,
      neutral: 60
    }
  },
  {
    intentType: 'Question',
    name: 'What are the limits of the Free Plan?',
    volume: 1120,
    trend: -2.1,
    history: [
        { date: new Date('2023-01-01'), volume: 1200 },
        { date: new Date('2023-02-01'), volume: 1150 },
        { date: new Date('2023-03-01'), volume: 1130 },
        { date: new Date('2023-04-01'), volume: 1120 }
    ],
    description: 'A consistent volume of questions regarding the specific limitations (e.g., API calls, storage) of the free pricing tier.',
    sentiment: {
        positive: 15,
        negative: 10,
        neutral: 75
    }
  },
  {
    intentType: 'Objection',
    name: 'Pricing is Too High for Small Teams',
    volume: 650,
    trend: 18.5,
    history: [
      { date: new Date('2023-01-01'), volume: 450 },
      { date: new Date('2023-02-01'), volume: 500 },
      { date: new Date('2023-03-01'), volume: 580 },
      { date: new Date('2023-04-01'), volume: 650 }
    ],
    description: 'Potential customers with smaller teams are expressing that the entry-level pricing is a barrier to adoption compared to competitors.',
    sentiment: {
      positive: 5,
      negative: 90,
      neutral: 5
    }
  },
  {
    intentType: 'Objection',
    name: 'Lack of a Key Feature Compared to Competitor X',
    volume: 450,
    trend: 30.2,
    history: [
      { date: new Date('2023-01-01'), volume: 200 },
      { date: new Date('2023-02-01'), volume: 280 },
      { date: new Date('2023-03-01'), volume: 350 },
      { date: new Date('2023-04-01'), volume: 450 }
    ],
    description: 'During sales conversations, a rising number of prospects are pointing out the absence of a specific feature that is offered by a key competitor.',
    sentiment: {
      positive: 10,
      negative: 80,
      neutral: 10
    }
  }
];