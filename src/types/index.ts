export interface BaseComponent {
  id: string;
  name: string;
  price: string;
}

export interface CPU extends BaseComponent {
  tdp: number;
  socket: string;
  cores: number;
}

export interface GPU extends BaseComponent {
  suggestedPsu: number;
}

export const RamTypes = ["DDR4", "DDR5"] as const;
export type RamType = (typeof RamTypes)[number];

export interface Motherboard extends BaseComponent {
  socket: string;
  ramType: RamType;
}

export interface RAM extends BaseComponent {
  capacity: number;
  ramType: RamType;
}

export interface PSU extends BaseComponent {
  wattage: number;
}

export interface PcBuild {
  cpu: CPU;
  gpu: GPU;
  ram: RAM;
  motherboard: Motherboard;
  psu: PSU;
}
