public with sharing class FutureProductController {
    public FutureProductController() {

    }
    @AuraEnabled
    public static List<Product2> getFutureProducts(){
        try {
            List<Product2> futureProducts = [SELECT Name,Description FROM Product2 WHERe Name LIKE '%Future%'];
            for(Integer i=0; i < futureProducts.size(); i++) {
                futureProducts[i].Name = futureProducts[i].Name.remove('Future');
            }
            return futureProducts;            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
