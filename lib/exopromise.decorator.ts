/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { randomHex } from './exopromise.helper';
import { EXOPROMISE_OPTIONS } from './exopromise.option';

export const AsyncFunctions: Record<string, any> = {};

export function Exopromise() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const targetName = target.constructor?.name || '';
    const key = `${targetName}.${propertyKey}.${randomHex(16)}`;
    AsyncFunctions[key] = descriptor.value;
    descriptor.value = async function () {
      const { baseUrl } = EXOPROMISE_OPTIONS;
      const response = await fetch(`${baseUrl}/exopromise`, {
        method: 'POST',
        body: JSON.stringify({
          key,
          args: arguments,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Please import ExopromiseModule in your app module');
        }
        throw new Error(`${propertyKey}: ${response.statusText}`);
      }
      return response.json();
    };

    return descriptor;
  };
}
