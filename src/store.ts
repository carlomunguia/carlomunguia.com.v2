import { writable, type Writable } from 'svelte/store';

export const storeValue: Writable<number> = writable(1);
