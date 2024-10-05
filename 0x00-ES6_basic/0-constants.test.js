// 0-constants.test.js

import { taskFirst, getLast, taskNext } from './0-constants';

test('taskFirst returns the correct string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('getLast returns the correct string', () => {
  expect(getLast()).toBe(' is okay');
});

test('taskNext combines strings correctly', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
