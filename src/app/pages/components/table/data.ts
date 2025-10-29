import { Person } from './table.component';

export const database: Person[] = Array.from(new Array(100), (item, index) => {
  return {
    key: index + 1 + '',
    name: 'John Brown' + (index + 18),
    age: index + 18,
    address: `New York No. ${index + 18} Lake Park`,
    birthday: ``
  } satisfies Person;
});
