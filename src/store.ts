import { atom } from 'jotai';

export const activePageAtom = atom<string>('hello');
export const isSidebarFoldedAtom = atom<boolean>(false);
