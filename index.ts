const collection = [
  { name: 'Stefan Baumgartner', age: 37 },

  { name: 'D.', age: 36 },

  { name: 'C.', age: 2 },
];

var anc = collection.filter(Boolean);
console.log(anc);



type PostId = number;
type Day = string;
and then rewrite our original types using these aliases:

type Post = {
  id: PostId;
  title: string;
  author: string;
  day: Day;
  status: string;
  isSticky: boolean;
};

type State = {
  posts: Partial< Record<PostId, Post> >;
  days: Partial< Record<Day, PostId[]> >;
};