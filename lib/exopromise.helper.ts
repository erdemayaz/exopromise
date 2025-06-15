/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export function randomHex(size: number) {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
}
