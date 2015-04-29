import $ from 'jquery';
import ko from 'knockout';

let productViewModel = {
    price: ko.observable(),
    sku: ko.observable(),
    instock: ko.observable(true),
    purchasable: ko.observable(true),
    canAddToCart: ko.pureComputed(() => {
        let self = productViewModel;
        return self.instock() && self.purchasable();
    })
};

ko.applyBindings(productViewModel, $('.productView').get(0));

export default productViewModel;
