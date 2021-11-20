
type PostId = number;
type Day = string;
//and then rewrite our original types using these aliases:

type Post = {
  id: PostId;
  title: string;
  author: string;
  day: Day;
  status: string;
  isSticky: boolean;
};

type State = {
  posts: Partial<Record<PostId, Post>>;
  days: Partial<Record<Day, PostId[]>>;
};

const state: State = {
  posts: {
    0: {
      id: 123,
      title: 'Hello',
      author: '',
      day: '',
      status: '',
      isSticky: true,
    },
  },
  days: { '0': [1, 2, 3, 4, 5] },
};
