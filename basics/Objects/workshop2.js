/*
 * Workshop: Build a Cargo Manifest Validator
 */

const normalizeUnits = (manifest) => {
  return {
    ...manifest,
    weight: manifest.unit === "kg" ? manifest.weight : Number(parseFloat(manifest.weight * 0.45)),
    unit: "kg"
  };
};

const validateManifest = (manifest) => {
  let errors = {};

  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || !Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};

const processManifest = (manifest) => {
  const errors = validateManifest(manifest);
  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
};

console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }));
console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));
console.log(validateManifest({}));
processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false });
processManifest({ containerId: -88, destination: "Soledad", weight: NaN });