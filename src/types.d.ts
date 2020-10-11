// example declaration file - remove these and add your own custom typings

// memory extension samples
interface CreepMemory {
  role: string;
  room: string;
  working: boolean;
}

interface Memory {
  uuid: number;
  log: any;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}

// Body types
type Part = "WORK" | "MOVE" | "CARRY" | "ATTACK" | "RANGED_ATTACK" | "HEAL" | "CLAIM" | "TOUGH";

type Body = [Part];

// Task types
type Task = "MOVE" | "MINE" | "BUILD" | "UPGRADE";

// Level types
type Level = 1 | 2 | 3 | 4 | 5;

// Meta types [Room, x, y]
type WorldPos = [string, number, number]