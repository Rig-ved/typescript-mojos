const backlog = {
  releases: [
    {
      names: 'sprint12',
      epics: [
        {
          name: 'Account management',
          tasks: [
            { name: 'billed', priority: 'High' },
            { name: 'payment', priority: 'low' },
          ],
        },
      ],
    },
  ],
};

type unArray<T> = T extends Array<infer U> ? Array<U> : T;
type lol = typeof backlog['releases'];
type Release = unArray<typeof backlog['releases']>;

const release: lol = [
  {
    names: 'sasas',
    // assasas:'',
    epics: [
      {
        name: 'Account management',
        tasks: [
          { name: 'billed', priority: 'High' },
          { name: 'payment', priority: 'low' },
        ],
      },
    ],
  },
];
