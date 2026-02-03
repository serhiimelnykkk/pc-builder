import { faker } from "@faker-js/faker";
import fs from "fs";
import {
  RamTypes,
  type BaseComponent,
  type CPU,
  type GPU,
  type Motherboard,
  type PSU,
  type RAM,
} from "../src/types";

const sockets = faker.helpers.multiple(
  () => {
    return `${faker.string.alpha({ length: 3, casing: "upper" })}${faker.number.int({ min: 100, max: 900 })}`;
  },
  { count: 5 },
);

const createBaseComponent = () => {
  const bc: BaseComponent = {
    id: faker.string.uuid(),
    price: faker.commerce.price(),
    name: faker.company.name(),
  };
  return bc;
};

const createCpu = (): CPU => {
  const defaults = createBaseComponent();
  const cpu: CPU = {
    ...defaults,
    name: `
        ${faker.company.name()}${" "}
        ${faker.number.int({ multipleOf: 100, min: 1000, max: 10000 })}
        ${faker.string.alpha({ casing: "upper", length: { min: 2, max: 4 } })}
        `,

    cores: faker.number.int({ multipleOf: 8, min: 4, max: 16 }),
    socket: faker.helpers.arrayElement(sockets),
    tdp: faker.number.int({ min: 100, max: 900 }),
  };
  return cpu;
};

const createGpu = (): GPU => {
  const defaults = createBaseComponent();
  const gpu: GPU = {
    ...defaults,
    name: `
        ${faker.company.name()}${" "}
        ${faker.number.int({ multipleOf: 100, min: 1000, max: 10000 })}
        ${faker.string.alpha({ casing: "upper", length: { min: 2, max: 4 } })}
        `,
    suggestedPsu: faker.number.int({ min: 100, max: 1000 }),
  };
  return gpu;
};

const createMotherboard = (): Motherboard => {
  const defaults = createBaseComponent();
  const mb: Motherboard = {
    ...defaults,
    name: `${faker.string.alpha({ length: 3, casing: "upper" })}${faker.number.int({ min: 100, max: 900 })}`,
    socket: faker.helpers.arrayElement(sockets),
    ramType: faker.helpers.arrayElement(RamTypes),
  };
  return mb;
};

const createRam = (): RAM => {
  const defaults = createBaseComponent();
  const ram: RAM = {
    ...defaults,
    capacity: faker.number.int({ multipleOf: 8, min: 4, max: 128 }),
    ramType: faker.helpers.arrayElement(RamTypes),
  };
  return ram;
};

const createPsu = (): PSU => {
  const defaults = createBaseComponent();
  const psu: PSU = {
    ...defaults,
    wattage: faker.number.int({ min: 100, max: 1000 }),
  };
  return psu;
};

const cpus = faker.helpers.multiple(createCpu, { count: 50 });
const gpus = faker.helpers.multiple(createGpu, { count: 50 });
const mbs = faker.helpers.multiple(createMotherboard, { count: 50 });
const rams = faker.helpers.multiple(createRam, { count: 50 });
const psus = faker.helpers.multiple(createPsu, { count: 50 });
const db = { cpus, gpus, mbs, rams, psus };

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
