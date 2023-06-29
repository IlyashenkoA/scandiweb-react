export interface IFormValues {
  sku: string,
  name: string,
  price: number,
  type: string,
  parameters: OptionParameters
}

interface OptionParameters {
  size: number;
  height: number;
  width: number;
  length: number;
  weight: number;
}