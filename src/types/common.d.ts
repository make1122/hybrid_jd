export interface modeType {
  id: string;
  icon: string;
  title: string;
}
export interface toolBarType {
  nIcon: string;
  hIcon: string;
  name: string;
  componentName: string;
}
export interface secondsType {
  icon: string;
  price: string;
  oldPrice: string;
}

export interface goodsBaseOption {
  id: string;
  name: string;
}
export interface goodsOption {
  id?: string;
  name?: string;
  subs?: goodsBaseOption[];
}
export interface goodsItemType {
  detailImgs?: string[];
  id?: string;
  img?: string;
  isDirect?: boolean;
  isHave?: boolean;
  name?: string;
  price?: string;
  swiperImgs?: string[];
  volume?: string;
}
export interface paginationTypes {
  el: string;
  type: string;
  bulletClass?: string;
}
