const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит тройной урон',
    },
  ],
};

const handler = function toHandle({ special }) {
  const result = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < special.length; i++) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    result.push({
      id, name, description, icon,
    });
  }

  return result;
};

export default handler;

console.log(handler(character));
