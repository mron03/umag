export type GetIdEnum = {
  id: string;
};

export type GetEnum = {
  barcode: string;
  fromTime: string;
  toTime: string;
};

export type PostEnum = {
  barcode: string;
  price: string;
  quantity: string;
  supplyTime: string;
};

export type PutEnum = {
  id: string;
  price: string;
  quantity: string;
  supplyTime: string;
};

export type DeleteEnum = {
  id: string;
};
