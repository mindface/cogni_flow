
export interface FieldData {
  category: string;
  id: number;
  slug: string;
}

export interface MethodCrad {
  id: number;
  title: string;
  text: string;
  color: string;
  icon: string;
  time: string;
}

export interface MethodCardItems {
  slug: string;
  methodId: number;
  cardItems: MethodCrad[];
}

export type sendUpdateCard = {
  fieldId: number,
  item: MethodCrad
}
