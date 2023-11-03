import { atom } from "jotai";

export const connectAtom = atom<MessagePort | null>(null);
