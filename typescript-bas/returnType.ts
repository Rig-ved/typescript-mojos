function getCharacter() {
  return { firstName: 'Valkue', age: 10 };
}

type Character = ReturnType<typeof getCharacter>;

const person: Character = {
  firstName: 'asasas',
  age: 12,
};
