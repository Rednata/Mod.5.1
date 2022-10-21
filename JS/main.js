'use strict';

const doc = document;

doc.querySelector('.ads').remove(); // Убрали рекламу

// Внутренняя вспомогательная функция, чтобы проще отслеживать элементы
// const cicle = arr => {
//   arr.forEach((item, i) => console.log(i, item));
// };

const item = doc.querySelectorAll('.item');

doc.querySelector('.items').prepend(item[1], item[2], item[3], item[0]);

const itemTitle = doc.querySelectorAll('.item__title');
const propsList = doc.querySelectorAll('.props__list');

// Поменяли заголовки местами
propsList[1].before(itemTitle[3]);
propsList[4].before(itemTitle[4]);
propsList[5].before(itemTitle[0]);

const propsItemFour = doc.querySelector('.props__item_two + .props__item_four');
propsList[3].querySelector('li:nth-child(3)').after(propsItemFour);

const propsItemAB = propsList[5].querySelectorAll('li:nth-child(n + 9)');
propsItemAB.forEach(item => propsList[1].append(item));

propsList[4].replaceWith(propsList[2]);
itemTitle[1].after(propsList[4]);

// Создаем несуществующий заголовок
itemTitle[1].remove();
const itemTitle1 = doc.createElement('h2');
const text = doc.createTextNode('This и прототипы объектов');
itemTitle1.prepend(text);
propsList[4].prepend(itemTitle1);

