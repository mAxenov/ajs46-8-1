import Team from "../team";

const team = new Team();
const char1 = {
  name: 'Bowman',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

const char2 = {
  name: 'Magician',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};
test('Персонажа нет в команде', () => {
  team.add(char1);
  expect(team.toArray()).toEqual([char1]);
});

test('Персонаж есть в команде', () => {
  expect(() => {
    team.add(char1)
  }).toThrow('Данный персонаж уже добавлен');
});

test('Добавление больше одного персонажа', () => {
  team.addAll(char1, char2);
  expect(team.toArray()).toEqual([char1, char2]);
});

