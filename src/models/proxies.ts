// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class VehicleProxy {
  public readonly vehicles: VehiclesProxy;
  public static Parse(d: string): VehicleProxy {
    return VehicleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VehicleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.vehicles = VehiclesProxy.Create(d.vehicles, field + ".vehicles");
    return new VehicleProxy(d);
  }
  private constructor(d: any) {
    this.vehicles = d.vehicles;
  }
}

export class VehiclesProxy {
  public readonly Ignored: IgnoredEntityProxy[] | null;
  public readonly CAManBase: CAManBaseEntityProxy[] | null;
  public readonly StaticWeapon: StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy[] | null;
  public readonly Car: StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy[] | null;
  public readonly Tank: StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy[] | null;
  public readonly Motorcycle: MotorcycleEntityProxy[] | null;
  public readonly Ship_F: StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy[] | null;
  public readonly Plane: StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy[] | null;
  public readonly Helicopter: HelicopterEntityProxy[] | null;
  public static Parse(d: string): VehiclesProxy {
    return VehiclesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VehiclesProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.Ignored, field + ".Ignored");
    if (d.Ignored) {
      for (let i = 0; i < d.Ignored.length; i++) {
        d.Ignored[i] = IgnoredEntityProxy.Create(d.Ignored[i], field + ".Ignored" + "[" + i + "]");
      }
    }
    if (d.Ignored === undefined) {
      d.Ignored = null;
    }
    checkArray(d.CAManBase, field + ".CAManBase");
    if (d.CAManBase) {
      for (let i = 0; i < d.CAManBase.length; i++) {
        d.CAManBase[i] = CAManBaseEntityProxy.Create(d.CAManBase[i], field + ".CAManBase" + "[" + i + "]");
      }
    }
    if (d.CAManBase === undefined) {
      d.CAManBase = null;
    }
    checkArray(d.StaticWeapon, field + ".StaticWeapon");
    if (d.StaticWeapon) {
      for (let i = 0; i < d.StaticWeapon.length; i++) {
        d.StaticWeapon[i] = StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy.Create(d.StaticWeapon[i], field + ".StaticWeapon" + "[" + i + "]");
      }
    }
    if (d.StaticWeapon === undefined) {
      d.StaticWeapon = null;
    }
    checkArray(d.Car, field + ".Car");
    if (d.Car) {
      for (let i = 0; i < d.Car.length; i++) {
        d.Car[i] = StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy.Create(d.Car[i], field + ".Car" + "[" + i + "]");
      }
    }
    if (d.Car === undefined) {
      d.Car = null;
    }
    checkArray(d.Tank, field + ".Tank");
    if (d.Tank) {
      for (let i = 0; i < d.Tank.length; i++) {
        d.Tank[i] = StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy.Create(d.Tank[i], field + ".Tank" + "[" + i + "]");
      }
    }
    if (d.Tank === undefined) {
      d.Tank = null;
    }
    checkArray(d.Motorcycle, field + ".Motorcycle");
    if (d.Motorcycle) {
      for (let i = 0; i < d.Motorcycle.length; i++) {
        d.Motorcycle[i] = MotorcycleEntityProxy.Create(d.Motorcycle[i], field + ".Motorcycle" + "[" + i + "]");
      }
    }
    if (d.Motorcycle === undefined) {
      d.Motorcycle = null;
    }
    checkArray(d.Ship_F, field + ".Ship_F");
    if (d.Ship_F) {
      for (let i = 0; i < d.Ship_F.length; i++) {
        d.Ship_F[i] = StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy.Create(d.Ship_F[i], field + ".Ship_F" + "[" + i + "]");
      }
    }
    if (d.Ship_F === undefined) {
      d.Ship_F = null;
    }
    checkArray(d.Plane, field + ".Plane");
    if (d.Plane) {
      for (let i = 0; i < d.Plane.length; i++) {
        d.Plane[i] = StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy.Create(d.Plane[i], field + ".Plane" + "[" + i + "]");
      }
    }
    if (d.Plane === undefined) {
      d.Plane = null;
    }
    checkArray(d.Helicopter, field + ".Helicopter");
    if (d.Helicopter) {
      for (let i = 0; i < d.Helicopter.length; i++) {
        d.Helicopter[i] = HelicopterEntityProxy.Create(d.Helicopter[i], field + ".Helicopter" + "[" + i + "]");
      }
    }
    if (d.Helicopter === undefined) {
      d.Helicopter = null;
    }
    return new VehiclesProxy(d);
  }
  private constructor(d: any) {
    this.Ignored = d.Ignored;
    this.CAManBase = d.CAManBase;
    this.StaticWeapon = d.StaticWeapon;
    this.Car = d.Car;
    this.Tank = d.Tank;
    this.Motorcycle = d.Motorcycle;
    this.Ship_F = d.Ship_F;
    this.Plane = d.Plane;
    this.Helicopter = d.Helicopter;
  }
}

export class IgnoredEntityProxy {
  public readonly className: string;
  public readonly dispName: string;
  public readonly mod: string;
  public readonly author: string;
  public readonly category: string;
  public readonly faction: string;
  public readonly side: number;
  public readonly dlc: string;
  public readonly vehicleClass: string;
  public readonly availableInZeus: string;
  public readonly availableInArsenal: string;
  public readonly editorSubcategory: string;
  public readonly canFloat: string;
  public readonly parents: string[] | null;
  public readonly weapons: WeaponsEntityProxy[] | null;
  public static Parse(d: string): IgnoredEntityProxy {
    return IgnoredEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IgnoredEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.className, false, field + ".className");
    checkString(d.dispName, false, field + ".dispName");
    checkString(d.mod, false, field + ".mod");
    checkString(d.author, false, field + ".author");
    checkString(d.category, false, field + ".category");
    checkString(d.faction, false, field + ".faction");
    checkNumber(d.side, false, field + ".side");
    checkString(d.dlc, false, field + ".dlc");
    checkString(d.vehicleClass, false, field + ".vehicleClass");
    checkString(d.availableInZeus, false, field + ".availableInZeus");
    checkString(d.availableInArsenal, false, field + ".availableInArsenal");
    checkString(d.editorSubcategory, false, field + ".editorSubcategory");
    checkString(d.canFloat, false, field + ".canFloat");
    checkArray(d.parents, field + ".parents");
    if (d.parents) {
      for (let i = 0; i < d.parents.length; i++) {
        checkString(d.parents[i], false, field + ".parents" + "[" + i + "]");
      }
    }
    if (d.parents === undefined) {
      d.parents = null;
    }
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        d.weapons[i] = WeaponsEntityProxy.Create(d.weapons[i], field + ".weapons" + "[" + i + "]");
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    return new IgnoredEntityProxy(d);
  }
  private constructor(d: any) {
    this.className = d.className;
    this.dispName = d.dispName;
    this.mod = d.mod;
    this.author = d.author;
    this.category = d.category;
    this.faction = d.faction;
    this.side = d.side;
    this.dlc = d.dlc;
    this.vehicleClass = d.vehicleClass;
    this.availableInZeus = d.availableInZeus;
    this.availableInArsenal = d.availableInArsenal;
    this.editorSubcategory = d.editorSubcategory;
    this.canFloat = d.canFloat;
    this.parents = d.parents;
    this.weapons = d.weapons;
  }
}

export class WeaponsEntityProxy {
  public readonly position: string;
  public readonly weapons: null[] | null;
  public readonly magazines: null[] | null;
  public static Parse(d: string): WeaponsEntityProxy {
    return WeaponsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): WeaponsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.position, false, field + ".position");
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        checkNull(d.weapons[i], field + ".weapons" + "[" + i + "]");
        if (d.weapons[i] === undefined) {
          d.weapons[i] = null;
        }
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    checkArray(d.magazines, field + ".magazines");
    if (d.magazines) {
      for (let i = 0; i < d.magazines.length; i++) {
        checkNull(d.magazines[i], field + ".magazines" + "[" + i + "]");
        if (d.magazines[i] === undefined) {
          d.magazines[i] = null;
        }
      }
    }
    if (d.magazines === undefined) {
      d.magazines = null;
    }
    return new WeaponsEntityProxy(d);
  }
  private constructor(d: any) {
    this.position = d.position;
    this.weapons = d.weapons;
    this.magazines = d.magazines;
  }
}

export class CAManBaseEntityProxy {
  public readonly className: string;
  public readonly dispName: string;
  public readonly mod: string;
  public readonly author: string;
  public readonly category: string;
  public readonly faction: string;
  public readonly side: number;
  public readonly dlc: string;
  public readonly vehicleClass: string;
  public readonly availableInZeus: string;
  public readonly availableInArsenal: string;
  public readonly editorSubcategory: string;
  public readonly canFloat: string;
  public readonly isMedic: number;
  public readonly isUAVOperator: number;
  public readonly canDeactivateMines: number;
  public readonly canRepairVehicles: number;
  public readonly uniform: string;
  public readonly backpack: string;
  public readonly respawnWeapons: (string | null)[] | null;
  public readonly respawnMagazines: (string | null)[] | null;
  public readonly items: (string | null)[] | null;
  public readonly respawnItems: (string | null)[] | null;
  public readonly linkedItems: (string | null)[] | null;
  public readonly respawnLinkedItems: (string | null)[] | null;
  public readonly parents: string[] | null;
  public readonly weapons: WeaponsEntity1Proxy[] | null;
  public static Parse(d: string): CAManBaseEntityProxy {
    return CAManBaseEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CAManBaseEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.className, false, field + ".className");
    checkString(d.dispName, false, field + ".dispName");
    checkString(d.mod, false, field + ".mod");
    checkString(d.author, false, field + ".author");
    checkString(d.category, false, field + ".category");
    checkString(d.faction, false, field + ".faction");
    checkNumber(d.side, false, field + ".side");
    checkString(d.dlc, false, field + ".dlc");
    checkString(d.vehicleClass, false, field + ".vehicleClass");
    checkString(d.availableInZeus, false, field + ".availableInZeus");
    checkString(d.availableInArsenal, false, field + ".availableInArsenal");
    checkString(d.editorSubcategory, false, field + ".editorSubcategory");
    checkString(d.canFloat, false, field + ".canFloat");
    checkNumber(d.isMedic, false, field + ".isMedic");
    checkNumber(d.isUAVOperator, false, field + ".isUAVOperator");
    checkNumber(d.canDeactivateMines, false, field + ".canDeactivateMines");
    checkNumber(d.canRepairVehicles, false, field + ".canRepairVehicles");
    checkString(d.uniform, false, field + ".uniform");
    checkString(d.backpack, false, field + ".backpack");
    checkArray(d.respawnWeapons, field + ".respawnWeapons");
    if (d.respawnWeapons) {
      for (let i = 0; i < d.respawnWeapons.length; i++) {
        checkString(d.respawnWeapons[i], true, field + ".respawnWeapons" + "[" + i + "]");
        if (d.respawnWeapons[i] === undefined) {
          d.respawnWeapons[i] = null;
        }
      }
    }
    if (d.respawnWeapons === undefined) {
      d.respawnWeapons = null;
    }
    checkArray(d.respawnMagazines, field + ".respawnMagazines");
    if (d.respawnMagazines) {
      for (let i = 0; i < d.respawnMagazines.length; i++) {
        checkString(d.respawnMagazines[i], true, field + ".respawnMagazines" + "[" + i + "]");
        if (d.respawnMagazines[i] === undefined) {
          d.respawnMagazines[i] = null;
        }
      }
    }
    if (d.respawnMagazines === undefined) {
      d.respawnMagazines = null;
    }
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        checkString(d.items[i], true, field + ".items" + "[" + i + "]");
        if (d.items[i] === undefined) {
          d.items[i] = null;
        }
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    checkArray(d.respawnItems, field + ".respawnItems");
    if (d.respawnItems) {
      for (let i = 0; i < d.respawnItems.length; i++) {
        checkString(d.respawnItems[i], true, field + ".respawnItems" + "[" + i + "]");
        if (d.respawnItems[i] === undefined) {
          d.respawnItems[i] = null;
        }
      }
    }
    if (d.respawnItems === undefined) {
      d.respawnItems = null;
    }
    checkArray(d.linkedItems, field + ".linkedItems");
    if (d.linkedItems) {
      for (let i = 0; i < d.linkedItems.length; i++) {
        checkString(d.linkedItems[i], true, field + ".linkedItems" + "[" + i + "]");
        if (d.linkedItems[i] === undefined) {
          d.linkedItems[i] = null;
        }
      }
    }
    if (d.linkedItems === undefined) {
      d.linkedItems = null;
    }
    checkArray(d.respawnLinkedItems, field + ".respawnLinkedItems");
    if (d.respawnLinkedItems) {
      for (let i = 0; i < d.respawnLinkedItems.length; i++) {
        checkString(d.respawnLinkedItems[i], true, field + ".respawnLinkedItems" + "[" + i + "]");
        if (d.respawnLinkedItems[i] === undefined) {
          d.respawnLinkedItems[i] = null;
        }
      }
    }
    if (d.respawnLinkedItems === undefined) {
      d.respawnLinkedItems = null;
    }
    checkArray(d.parents, field + ".parents");
    if (d.parents) {
      for (let i = 0; i < d.parents.length; i++) {
        checkString(d.parents[i], false, field + ".parents" + "[" + i + "]");
      }
    }
    if (d.parents === undefined) {
      d.parents = null;
    }
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        d.weapons[i] = WeaponsEntity1Proxy.Create(d.weapons[i], field + ".weapons" + "[" + i + "]");
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    return new CAManBaseEntityProxy(d);
  }
  private constructor(d: any) {
    this.className = d.className;
    this.dispName = d.dispName;
    this.mod = d.mod;
    this.author = d.author;
    this.category = d.category;
    this.faction = d.faction;
    this.side = d.side;
    this.dlc = d.dlc;
    this.vehicleClass = d.vehicleClass;
    this.availableInZeus = d.availableInZeus;
    this.availableInArsenal = d.availableInArsenal;
    this.editorSubcategory = d.editorSubcategory;
    this.canFloat = d.canFloat;
    this.isMedic = d.isMedic;
    this.isUAVOperator = d.isUAVOperator;
    this.canDeactivateMines = d.canDeactivateMines;
    this.canRepairVehicles = d.canRepairVehicles;
    this.uniform = d.uniform;
    this.backpack = d.backpack;
    this.respawnWeapons = d.respawnWeapons;
    this.respawnMagazines = d.respawnMagazines;
    this.items = d.items;
    this.respawnItems = d.respawnItems;
    this.linkedItems = d.linkedItems;
    this.respawnLinkedItems = d.respawnLinkedItems;
    this.parents = d.parents;
    this.weapons = d.weapons;
  }
}

export class WeaponsEntity1Proxy {
  public readonly position: string;
  public readonly weapons: (string | null)[] | null;
  public readonly magazines: (string | null)[] | null;
  public static Parse(d: string): WeaponsEntity1Proxy {
    return WeaponsEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): WeaponsEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.position, false, field + ".position");
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        checkString(d.weapons[i], true, field + ".weapons" + "[" + i + "]");
        if (d.weapons[i] === undefined) {
          d.weapons[i] = null;
        }
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    checkArray(d.magazines, field + ".magazines");
    if (d.magazines) {
      for (let i = 0; i < d.magazines.length; i++) {
        checkString(d.magazines[i], true, field + ".magazines" + "[" + i + "]");
        if (d.magazines[i] === undefined) {
          d.magazines[i] = null;
        }
      }
    }
    if (d.magazines === undefined) {
      d.magazines = null;
    }
    return new WeaponsEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.position = d.position;
    this.weapons = d.weapons;
    this.magazines = d.magazines;
  }
}

export class StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy {
  public readonly className: string;
  public readonly dispName: string;
  public readonly mod: string;
  public readonly author: string;
  public readonly category: string;
  public readonly faction: string;
  public readonly side: number;
  public readonly dlc: string;
  public readonly vehicleClass: string;
  public readonly availableInZeus: string;
  public readonly availableInArsenal: string;
  public readonly editorSubcategory: string;
  public readonly canFloat: string;
  public readonly isUAV: number;
  public readonly enginePower: number;
  public readonly crew: string;
  public readonly typicalCargo: (string | null)[] | null;
  public readonly totalSeats: number;
  public readonly crewSeats: number;
  public readonly cargoSeats: number;
  public readonly nonFFVcargoSeats: number;
  public readonly ffvCargoSeats: number;
  public readonly transportAmmo: number;
  public readonly transportFuel: number;
  public readonly transportMedical: number;
  public readonly transportRepair: number;
  public readonly parents: string[] | null;
  public readonly weapons: WeaponsEntity1Proxy[] | null;
  public static Parse(d: string): StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy {
    return StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.className, false, field + ".className");
    checkString(d.dispName, false, field + ".dispName");
    checkString(d.mod, false, field + ".mod");
    checkString(d.author, false, field + ".author");
    checkString(d.category, false, field + ".category");
    checkString(d.faction, false, field + ".faction");
    checkNumber(d.side, false, field + ".side");
    checkString(d.dlc, false, field + ".dlc");
    checkString(d.vehicleClass, false, field + ".vehicleClass");
    checkString(d.availableInZeus, false, field + ".availableInZeus");
    checkString(d.availableInArsenal, false, field + ".availableInArsenal");
    checkString(d.editorSubcategory, false, field + ".editorSubcategory");
    checkString(d.canFloat, false, field + ".canFloat");
    checkNumber(d.isUAV, false, field + ".isUAV");
    checkNumber(d.enginePower, false, field + ".enginePower");
    checkString(d.crew, false, field + ".crew");
    checkArray(d.typicalCargo, field + ".typicalCargo");
    if (d.typicalCargo) {
      for (let i = 0; i < d.typicalCargo.length; i++) {
        checkString(d.typicalCargo[i], true, field + ".typicalCargo" + "[" + i + "]");
        if (d.typicalCargo[i] === undefined) {
          d.typicalCargo[i] = null;
        }
      }
    }
    if (d.typicalCargo === undefined) {
      d.typicalCargo = null;
    }
    checkNumber(d.totalSeats, false, field + ".totalSeats");
    checkNumber(d.crewSeats, false, field + ".crewSeats");
    checkNumber(d.cargoSeats, false, field + ".cargoSeats");
    checkNumber(d.nonFFVcargoSeats, false, field + ".nonFFVcargoSeats");
    checkNumber(d.ffvCargoSeats, false, field + ".ffvCargoSeats");
    checkNumber(d.transportAmmo, false, field + ".transportAmmo");
    checkNumber(d.transportFuel, false, field + ".transportFuel");
    checkNumber(d.transportMedical, false, field + ".transportMedical");
    checkNumber(d.transportRepair, false, field + ".transportRepair");
    checkArray(d.parents, field + ".parents");
    if (d.parents) {
      for (let i = 0; i < d.parents.length; i++) {
        checkString(d.parents[i], false, field + ".parents" + "[" + i + "]");
      }
    }
    if (d.parents === undefined) {
      d.parents = null;
    }
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        d.weapons[i] = WeaponsEntity1Proxy.Create(d.weapons[i], field + ".weapons" + "[" + i + "]");
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    return new StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy(d);
  }
  private constructor(d: any) {
    this.className = d.className;
    this.dispName = d.dispName;
    this.mod = d.mod;
    this.author = d.author;
    this.category = d.category;
    this.faction = d.faction;
    this.side = d.side;
    this.dlc = d.dlc;
    this.vehicleClass = d.vehicleClass;
    this.availableInZeus = d.availableInZeus;
    this.availableInArsenal = d.availableInArsenal;
    this.editorSubcategory = d.editorSubcategory;
    this.canFloat = d.canFloat;
    this.isUAV = d.isUAV;
    this.enginePower = d.enginePower;
    this.crew = d.crew;
    this.typicalCargo = d.typicalCargo;
    this.totalSeats = d.totalSeats;
    this.crewSeats = d.crewSeats;
    this.cargoSeats = d.cargoSeats;
    this.nonFFVcargoSeats = d.nonFFVcargoSeats;
    this.ffvCargoSeats = d.ffvCargoSeats;
    this.transportAmmo = d.transportAmmo;
    this.transportFuel = d.transportFuel;
    this.transportMedical = d.transportMedical;
    this.transportRepair = d.transportRepair;
    this.parents = d.parents;
    this.weapons = d.weapons;
  }
}

export class MotorcycleEntityProxy {
  public readonly className: string;
  public readonly dispName: string;
  public readonly mod: string;
  public readonly author: string;
  public readonly category: string;
  public readonly faction: string;
  public readonly side: number;
  public readonly dlc: string;
  public readonly vehicleClass: string;
  public readonly availableInZeus: string;
  public readonly availableInArsenal: string;
  public readonly editorSubcategory: string;
  public readonly canFloat: string;
  public readonly isUAV: number;
  public readonly enginePower: number;
  public readonly crew: string;
  public readonly typicalCargo: null[] | null;
  public readonly totalSeats: number;
  public readonly crewSeats: number;
  public readonly cargoSeats: number;
  public readonly nonFFVcargoSeats: number;
  public readonly ffvCargoSeats: number;
  public readonly transportAmmo: number;
  public readonly transportFuel: number;
  public readonly transportMedical: number;
  public readonly transportRepair: number;
  public readonly parents: string[] | null;
  public readonly weapons: WeaponsEntity2Proxy[] | null;
  public static Parse(d: string): MotorcycleEntityProxy {
    return MotorcycleEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): MotorcycleEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.className, false, field + ".className");
    checkString(d.dispName, false, field + ".dispName");
    checkString(d.mod, false, field + ".mod");
    checkString(d.author, false, field + ".author");
    checkString(d.category, false, field + ".category");
    checkString(d.faction, false, field + ".faction");
    checkNumber(d.side, false, field + ".side");
    checkString(d.dlc, false, field + ".dlc");
    checkString(d.vehicleClass, false, field + ".vehicleClass");
    checkString(d.availableInZeus, false, field + ".availableInZeus");
    checkString(d.availableInArsenal, false, field + ".availableInArsenal");
    checkString(d.editorSubcategory, false, field + ".editorSubcategory");
    checkString(d.canFloat, false, field + ".canFloat");
    checkNumber(d.isUAV, false, field + ".isUAV");
    checkNumber(d.enginePower, false, field + ".enginePower");
    checkString(d.crew, false, field + ".crew");
    checkArray(d.typicalCargo, field + ".typicalCargo");
    if (d.typicalCargo) {
      for (let i = 0; i < d.typicalCargo.length; i++) {
        checkNull(d.typicalCargo[i], field + ".typicalCargo" + "[" + i + "]");
        if (d.typicalCargo[i] === undefined) {
          d.typicalCargo[i] = null;
        }
      }
    }
    if (d.typicalCargo === undefined) {
      d.typicalCargo = null;
    }
    checkNumber(d.totalSeats, false, field + ".totalSeats");
    checkNumber(d.crewSeats, false, field + ".crewSeats");
    checkNumber(d.cargoSeats, false, field + ".cargoSeats");
    checkNumber(d.nonFFVcargoSeats, false, field + ".nonFFVcargoSeats");
    checkNumber(d.ffvCargoSeats, false, field + ".ffvCargoSeats");
    checkNumber(d.transportAmmo, false, field + ".transportAmmo");
    checkNumber(d.transportFuel, false, field + ".transportFuel");
    checkNumber(d.transportMedical, false, field + ".transportMedical");
    checkNumber(d.transportRepair, false, field + ".transportRepair");
    checkArray(d.parents, field + ".parents");
    if (d.parents) {
      for (let i = 0; i < d.parents.length; i++) {
        checkString(d.parents[i], false, field + ".parents" + "[" + i + "]");
      }
    }
    if (d.parents === undefined) {
      d.parents = null;
    }
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        d.weapons[i] = WeaponsEntity2Proxy.Create(d.weapons[i], field + ".weapons" + "[" + i + "]");
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    return new MotorcycleEntityProxy(d);
  }
  private constructor(d: any) {
    this.className = d.className;
    this.dispName = d.dispName;
    this.mod = d.mod;
    this.author = d.author;
    this.category = d.category;
    this.faction = d.faction;
    this.side = d.side;
    this.dlc = d.dlc;
    this.vehicleClass = d.vehicleClass;
    this.availableInZeus = d.availableInZeus;
    this.availableInArsenal = d.availableInArsenal;
    this.editorSubcategory = d.editorSubcategory;
    this.canFloat = d.canFloat;
    this.isUAV = d.isUAV;
    this.enginePower = d.enginePower;
    this.crew = d.crew;
    this.typicalCargo = d.typicalCargo;
    this.totalSeats = d.totalSeats;
    this.crewSeats = d.crewSeats;
    this.cargoSeats = d.cargoSeats;
    this.nonFFVcargoSeats = d.nonFFVcargoSeats;
    this.ffvCargoSeats = d.ffvCargoSeats;
    this.transportAmmo = d.transportAmmo;
    this.transportFuel = d.transportFuel;
    this.transportMedical = d.transportMedical;
    this.transportRepair = d.transportRepair;
    this.parents = d.parents;
    this.weapons = d.weapons;
  }
}

export class WeaponsEntity2Proxy {
  public readonly position: string;
  public readonly weapons: string[] | null;
  public readonly magazines: null[] | null;
  public static Parse(d: string): WeaponsEntity2Proxy {
    return WeaponsEntity2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): WeaponsEntity2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.position, false, field + ".position");
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        checkString(d.weapons[i], false, field + ".weapons" + "[" + i + "]");
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    checkArray(d.magazines, field + ".magazines");
    if (d.magazines) {
      for (let i = 0; i < d.magazines.length; i++) {
        checkNull(d.magazines[i], field + ".magazines" + "[" + i + "]");
        if (d.magazines[i] === undefined) {
          d.magazines[i] = null;
        }
      }
    }
    if (d.magazines === undefined) {
      d.magazines = null;
    }
    return new WeaponsEntity2Proxy(d);
  }
  private constructor(d: any) {
    this.position = d.position;
    this.weapons = d.weapons;
    this.magazines = d.magazines;
  }
}

export class HelicopterEntityProxy {
  public readonly className: string;
  public readonly dispName: string;
  public readonly mod: string;
  public readonly author: string;
  public readonly category: string;
  public readonly faction: string;
  public readonly side: number;
  public readonly dlc: string;
  public readonly vehicleClass: string;
  public readonly availableInZeus: string;
  public readonly availableInArsenal: string;
  public readonly editorSubcategory: string;
  public readonly canFloat: string;
  public readonly maxLift: number;
  public readonly isUAV: number;
  public readonly enginePower: number;
  public readonly crew: string;
  public readonly typicalCargo: (string | null)[] | null;
  public readonly totalSeats: number;
  public readonly crewSeats: number;
  public readonly cargoSeats: number;
  public readonly nonFFVcargoSeats: number;
  public readonly ffvCargoSeats: number;
  public readonly transportAmmo: number;
  public readonly transportFuel: number;
  public readonly transportMedical: number;
  public readonly transportRepair: number;
  public readonly parents: string[] | null;
  public readonly weapons: WeaponsEntity1Proxy[] | null;
  public static Parse(d: string): HelicopterEntityProxy {
    return HelicopterEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): HelicopterEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.className, false, field + ".className");
    checkString(d.dispName, false, field + ".dispName");
    checkString(d.mod, false, field + ".mod");
    checkString(d.author, false, field + ".author");
    checkString(d.category, false, field + ".category");
    checkString(d.faction, false, field + ".faction");
    checkNumber(d.side, false, field + ".side");
    checkString(d.dlc, false, field + ".dlc");
    checkString(d.vehicleClass, false, field + ".vehicleClass");
    checkString(d.availableInZeus, false, field + ".availableInZeus");
    checkString(d.availableInArsenal, false, field + ".availableInArsenal");
    checkString(d.editorSubcategory, false, field + ".editorSubcategory");
    checkString(d.canFloat, false, field + ".canFloat");
    checkNumber(d.maxLift, false, field + ".maxLift");
    checkNumber(d.isUAV, false, field + ".isUAV");
    checkNumber(d.enginePower, false, field + ".enginePower");
    checkString(d.crew, false, field + ".crew");
    checkArray(d.typicalCargo, field + ".typicalCargo");
    if (d.typicalCargo) {
      for (let i = 0; i < d.typicalCargo.length; i++) {
        checkString(d.typicalCargo[i], true, field + ".typicalCargo" + "[" + i + "]");
        if (d.typicalCargo[i] === undefined) {
          d.typicalCargo[i] = null;
        }
      }
    }
    if (d.typicalCargo === undefined) {
      d.typicalCargo = null;
    }
    checkNumber(d.totalSeats, false, field + ".totalSeats");
    checkNumber(d.crewSeats, false, field + ".crewSeats");
    checkNumber(d.cargoSeats, false, field + ".cargoSeats");
    checkNumber(d.nonFFVcargoSeats, false, field + ".nonFFVcargoSeats");
    checkNumber(d.ffvCargoSeats, false, field + ".ffvCargoSeats");
    checkNumber(d.transportAmmo, false, field + ".transportAmmo");
    checkNumber(d.transportFuel, false, field + ".transportFuel");
    checkNumber(d.transportMedical, false, field + ".transportMedical");
    checkNumber(d.transportRepair, false, field + ".transportRepair");
    checkArray(d.parents, field + ".parents");
    if (d.parents) {
      for (let i = 0; i < d.parents.length; i++) {
        checkString(d.parents[i], false, field + ".parents" + "[" + i + "]");
      }
    }
    if (d.parents === undefined) {
      d.parents = null;
    }
    checkArray(d.weapons, field + ".weapons");
    if (d.weapons) {
      for (let i = 0; i < d.weapons.length; i++) {
        d.weapons[i] = WeaponsEntity1Proxy.Create(d.weapons[i], field + ".weapons" + "[" + i + "]");
      }
    }
    if (d.weapons === undefined) {
      d.weapons = null;
    }
    return new HelicopterEntityProxy(d);
  }
  private constructor(d: any) {
    this.className = d.className;
    this.dispName = d.dispName;
    this.mod = d.mod;
    this.author = d.author;
    this.category = d.category;
    this.faction = d.faction;
    this.side = d.side;
    this.dlc = d.dlc;
    this.vehicleClass = d.vehicleClass;
    this.availableInZeus = d.availableInZeus;
    this.availableInArsenal = d.availableInArsenal;
    this.editorSubcategory = d.editorSubcategory;
    this.canFloat = d.canFloat;
    this.maxLift = d.maxLift;
    this.isUAV = d.isUAV;
    this.enginePower = d.enginePower;
    this.crew = d.crew;
    this.typicalCargo = d.typicalCargo;
    this.totalSeats = d.totalSeats;
    this.crewSeats = d.crewSeats;
    this.cargoSeats = d.cargoSeats;
    this.nonFFVcargoSeats = d.nonFFVcargoSeats;
    this.ffvCargoSeats = d.ffvCargoSeats;
    this.transportAmmo = d.transportAmmo;
    this.transportFuel = d.transportFuel;
    this.transportMedical = d.transportMedical;
    this.transportRepair = d.transportRepair;
    this.parents = d.parents;
    this.weapons = d.weapons;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function checkNull(d: any, field: string): void {
  if (d !== null && d !== undefined) {
    errorHelper(field, d, "null or undefined", false);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
