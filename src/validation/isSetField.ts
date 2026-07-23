import { SET_FIELDS, type SetField } from "../commands/set.js";

export function isSetField(value: string): value is SetField {
  return SET_FIELDS.includes(value as SetField);
}
