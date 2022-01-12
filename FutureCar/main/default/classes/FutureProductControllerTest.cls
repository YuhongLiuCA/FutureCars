@isTest
private class FutureProductControllerTest {
    @TestSetup 
    static void LoadData() {
        List<Product2> newProducts = new List<Product2>();
        for(Integer i = 0; i < 5; i++) {
            Product2 newProduct = new Product2(Name='FutureCar' + i, Description = 'New cars', DisplayUrl = 'new URL');
            newProducts.add(newProduct);
        }
        newProducts.add(new Product2(Name='CurrentCar', Description = 'New cars', DisplayUrl = 'new URL'));
        Insert newProducts;
    }

    @isTest
    static void TP_getFutureProducts(){
        Test.startTest();
        List<Product2> allProducts = FutureProductController.getFutureProducts();
        System.assertEquals(5,allProducts.size());
        System.assertEquals('Car0',allProducts[0].Name);
        Test.stopTest();
    }
    
}
