import ora from "ora";
import { sizeFormatter } from "human-readable";
import {
  cpu,
  baseboard,
  memLayout,
  graphics,
  diskLayout
} from "systeminformation";

const formatterOptions = {
  decimalPlaces: 0,
  render: (literal, symbol) => `${literal} ${symbol}B`,
};

const memorySize = sizeFormatter({ std: "IEC", ...formatterOptions });
const storageSize = sizeFormatter({ ...formatterOptions });
const spinner = ora("Gathering system information...").start();

const raw = {
  cpu: await cpu(),
  baseboard: await baseboard(),
  memory: await memLayout(),
  graphics: await graphics(),
  diskLayout: await diskLayout(),
};

spinner.stop();

const info = {
  cpu: {
    manufacturer: raw.cpu.manufacturer,
    model: raw.cpu.brand,
    clockSpeed: raw.cpu.speed,
    cores: raw.cpu.physicalCores,
  },
  motherboard: {
    manufacturer: raw.baseboard.manufacturer,
    model: raw.baseboard.model,
  },
  memory: raw.memory.map(chip => {
    return {
      manufacturer: chip.manufacturer,
      model: chip.partNum,
      size: memorySize(chip.size),
    };
  }),
  graphics: raw.graphics.controllers.map(card => {
    return {
      manufacturer: card.vendor,
      model: card.model,
    };
  }),
  storage: raw.diskLayout.map(disk => {
    return {
      manufacturer: disk.vendor,
      model: disk.name,
      size: storageSize(disk.size),
    };
  }),
};

console.log(info);
