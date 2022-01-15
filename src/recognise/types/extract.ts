interface OcrExtractData {
  uid: string;
  name: string;
  inferResult: string;
  message: string;
  validationResult: ValidationResult;
  fields: Field[];
}

export interface Field {
  valueType: ValueType;
  boundingPoly: BoundingPoly;
  inferText: string;
  inferConfidence: number;
  type: Type;
  lineBreak: boolean;
}

export interface BoundingPoly {
  vertices: Vertex[];
}

export interface Vertex {
  x: number;
  y: number;
}

export enum Type {
  Normal = 'NORMAL',
}

export enum ValueType {
  All = 'ALL',
}

export interface ValidationResult {
  result: string;
}

export { OcrExtractData };
