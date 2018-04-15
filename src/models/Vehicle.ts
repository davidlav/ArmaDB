// http://jvilk.com/MakeTypes/

// change interface to class

import {Type} from 'class-transformer';

export class Vehicle {
  vehicles: Vehicles;
}
export class Vehicles {
  Ignored?: (IgnoredEntity)[] | null;
  CAManBase?: (CAManBaseEntity)[] | null;
  StaticWeapon?: (StaticWeaponEntity)[] | null;
  Car?: (CarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Tank?: (CarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Motorcycle?: (MotorcycleEntity)[] | null;
  Ship_F?: (CarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Plane?: (CarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Helicopter?: (HelicopterEntity)[] | null;
}
export class IgnoredEntity {
  className: string;
  dispName: string;
  mod: string;
  author: string;
  category: string;
  faction: string;
  side: number;
  dlc: string;
  vehicleClass: string;
  availableInZeus: string;
  availableInArsenal: string;
  parents?: (string)[] | null;
  weapons?: (WeaponsEntity)[] | null;
}
export class WeaponsEntity {
  position: string;
  weapons?: (null)[] | null;
  magazines?: (null)[] | null;
}
export class CAManBaseEntity {
  className: string;
  dispName: string;
  mod: string;
  author: string;
  category: string;
  faction: string;
  side: number;
  dlc: string;
  vehicleClass: string;
  availableInZeus: string;
  availableInArsenal: string;
  isMedic: number;
  isUAVOperator: number;
  canDeactivateMines: number;
  canRepairVehicles: number;
  uniform: string;
  parents?: (string)[] | null;
  weapons?: (WeaponsEntity1)[] | null;
}
export class WeaponsEntity1 {
  position: string;
  weapons?: (string | null)[] | null;
  magazines?: (string | null)[] | null;
}
export class StaticWeaponEntity {
  className: string;
  dispName: string;
  mod: string;
  author: string;
  category: string;
  faction: string;
  side: number;
  dlc: string;
  vehicleClass: string;
  availableInZeus: string;
  availableInArsenal: string;
  parents?: (string)[] | null;
  weapons?: (WeaponsEntity1)[] | null;
}
export class CarEntityOrTankEntityOrShipFEntityOrPlaneEntity {
  className: string;
  dispName: string;
  mod: string;
  author: string;
  category: string;
  faction: string;
  side: number;
  dlc: string;
  vehicleClass: string;
  availableInZeus: string;
  availableInArsenal: string;
  isUAV: number;
  totalSeats: number;
  crewSeats: number;
  cargoSeats: number;
  nonFFVcargoSeats: number;
  ffvCargoSeats: number;
  transportAmmo: number;
  transportFuel: number;
  transportMedical: number;
  transportRepair: number;
  parents?: (string)[] | null;
  weapons?: (WeaponsEntity1)[] | null;
}
export class MotorcycleEntity {
  className: string;
  dispName: string;
  mod: string;
  author: string;
  category: string;
  faction: string;
  side: number;
  dlc: string;
  vehicleClass: string;
  availableInZeus: string;
  availableInArsenal: string;
  isUAV: number;
  totalSeats: number;
  crewSeats: number;
  cargoSeats: number;
  nonFFVcargoSeats: number;
  ffvCargoSeats: number;
  transportAmmo: number;
  transportFuel: number;
  transportMedical: number;
  transportRepair: number;
  parents?: (string)[] | null;
	@Type(() => WeaponsEntity2)
  weapons?: (WeaponsEntity2)[] | null;

	numberOfWeapons():number {
	  return this.weapons.length;
  }
}
export class WeaponsEntity2 {
  position: string;
  weapons?: (string)[] | null;
  magazines?: (null)[] | null;
}
export class HelicopterEntity {
  className: string;
  dispName: string;
  mod: string;
  author: string;
  category: string;
  faction: string;
  side: number;
  dlc: string;
  vehicleClass: string;
  availableInZeus: string;
  availableInArsenal: string;
  maxLift: number;
  isUAV: number;
  totalSeats: number;
  crewSeats: number;
  cargoSeats: number;
  nonFFVcargoSeats: number;
  ffvCargoSeats: number;
  transportAmmo: number;
  transportFuel: number;
  transportMedical: number;
  transportRepair: number;
  parents?: (string)[] | null;
  weapons?: (WeaponsEntity1)[] | null;
}
