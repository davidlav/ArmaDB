export interface Vehicle {
  vehicles: Vehicles;
}
export interface Vehicles {
  Ignored?: (IgnoredEntity)[] | null;
  CAManBase?: (CAManBaseEntity)[] | null;
  StaticWeapon?: (StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Car?: (StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Tank?: (StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Motorcycle?: (MotorcycleEntity)[] | null;
  Ship_F?: (StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Plane?: (StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntity)[] | null;
  Helicopter?: (HelicopterEntity)[] | null;
}
export interface IgnoredEntity {
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
  editorSubcategory: string;
  canFloat: string;
  parents?: (string)[] | null;
  weapons?: (WeaponsEntity)[] | null;
}
export interface WeaponsEntity {
  position: string;
  weapons?: (null)[] | null;
  magazines?: (null)[] | null;
}
export interface CAManBaseEntity {
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
  editorSubcategory: string;
  canFloat: string;
  isMedic: number;
  isUAVOperator: number;
  canDeactivateMines: number;
  canRepairVehicles: number;
  uniform: string;
  backpack: string;
  respawnWeapons?: (string | null)[] | null;
  respawnMagazines?: (string | null)[] | null;
  items?: (string | null)[] | null;
  respawnItems?: (string | null)[] | null;
  linkedItems?: (string | null)[] | null;
  respawnLinkedItems?: (string | null)[] | null;
  parents?: (string)[] | null;
  weapons?: (WeaponsEntity1)[] | null;
}
export interface WeaponsEntity1 {
  position: string;
  weapons?: (string | null)[] | null;
  magazines?: (string | null)[] | null;
}
export interface StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntity {
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
  editorSubcategory: string;
  canFloat: string;
  isUAV: number;
  enginePower: number;
  crew: string;
  typicalCargo?: (string | null)[] | null;
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
export interface MotorcycleEntity {
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
  editorSubcategory: string;
  canFloat: string;
  isUAV: number;
  enginePower: number;
  crew: string;
  typicalCargo?: (null)[] | null;
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
  weapons?: (WeaponsEntity2)[] | null;
}
export interface WeaponsEntity2 {
  position: string;
  weapons?: (string)[] | null;
  magazines?: (null)[] | null;
}
export interface HelicopterEntity {
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
  editorSubcategory: string;
  canFloat: string;
  maxLift: number;
  isUAV: number;
  enginePower: number;
  crew: string;
  typicalCargo?: (string | null)[] | null;
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
