declare module "@salesforce/apex/FutureProductController.getFutureProducts" {
  export default function getFutureProducts(): Promise<any>;
}
declare module "@salesforce/apex/FutureProductController.saveFutureCustomProduct" {
  export default function saveFutureCustomProduct(param: {newProduct: any}): Promise<any>;
}
declare module "@salesforce/apex/FutureProductController.saveFutureProduct" {
  export default function saveFutureProduct(param: {currentProduct: any}): Promise<any>;
}
