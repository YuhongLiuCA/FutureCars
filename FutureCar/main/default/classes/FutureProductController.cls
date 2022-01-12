public with sharing class FutureProductController {
    public FutureProductController() {

    }
    @AuraEnabled
    public static List<Product2> getFutureProducts(){
        
            List<Product2> futureProducts = [SELECT Name,Description,DisplayUrl,ProductCode FROM Product2 WHERe Name LIKE '%Future%'];
            for(Integer i=0; i < futureProducts.size(); i++) {
                futureProducts[i].Name = futureProducts[i].Name.remove('Future');
                futureProducts[i].ProductCode = futureProducts[i].ProductCode.substring(3);
            }
            return futureProducts;            

    }
}
