Webruntime.define('lwc/futureProductItem', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "img" + shadowSelector + " {height: 40vh;border-radius: 10px;margin-bottom: 2px;display: block;margin-left: auto;margin-right: auto;}\n.future-item" + shadowSelector + " {background-color: rgb(123,123,123);display: flex;flex-direction: column;}\n.future-item-card" + shadowSelector + " {background-color: rgb(123,123,123);display: flex;flex-direction: column;}\n.card-description" + shadowSelector + "{display: flex;flex-direction: column;max-width: 30vw;}\n.item-description" + shadowSelector + " {display: flex;flex-direction: column;background-color: rgb(210,210,210);margin: 1rem;}\n.item-description-title" + shadowSelector + "{font-weight: bold;font-size: 36px;text-align: center;}\n.future-card-title" + shadowSelector + " {font-size: 20 rem;font-weight: bold;text-align: center;}\n.item-description-text" + shadowSelector + "{font-size: 16px;text-align: center;}\n.future-card-content" + shadowSelector + " {display: flex;flex-direction: row;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        h: api_element,
        d: api_dynamic,
        t: api_text
      } = $api;
      return [api_element("div", {
        classMap: {
          "future-item": true
        },
        key: 11
      }, [api_element("div", {
        classMap: {
          "slds-m-around_medium": true,
          "future-item-card": true
        },
        key: 10
      }, [api_element("div", {
        classMap: {
          "future-card-content": true
        },
        key: 9
      }, [api_element("div", {
        key: 1
      }, [api_element("img", {
        attrs: {
          "src": $cmp.car.DisplayUrl
        },
        key: 0
      }, [])]), api_element("div", {
        classMap: {
          "card-description": true
        },
        key: 8
      }, [api_element("div", {
        classMap: {
          "item-description": true
        },
        key: 4
      }, [api_element("div", {
        classMap: {
          "item-description-title": true
        },
        key: 2
      }, [api_dynamic($cmp.car.Name)]), api_element("div", {
        classMap: {
          "item-description-text": true
        },
        key: 3
      }, [api_dynamic($cmp.car.Description)])]), api_element("div", {
        classMap: {
          "item-description": true
        },
        key: 7
      }, [api_element("div", {
        classMap: {
          "item-description-title": true
        },
        key: 5
      }, [api_text("Release Year")]), api_element("div", {
        classMap: {
          "item-description-title": true
        },
        key: 6
      }, [api_dynamic($cmp.car.ProductCode)])])])])])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-futureProductItem_futureProductItem-host",
      shadowAttribute: "lwc-futureProductItem_futureProductItem"
    };

    class FutureProductItem extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.car = void 0;
      }

    }

    lwc.registerDecorators(FutureProductItem, {
      publicProps: {
        car: {
          config: 0
        }
      }
    });

    var futureProductItem = lwc.registerComponent(FutureProductItem, {
      tmpl: _tmpl
    });

    return futureProductItem;

});
