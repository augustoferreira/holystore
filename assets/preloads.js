
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BVYsYAdG.js","/cdn/shopifycloud/checkout-web/assets/c1/app.BEfMhMCY.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.D5hs5Ze_.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.tAE0mkV9.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.CdTIyJXZ.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.CCPzSE_N.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.rWFI1_U5.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.Cb6WTE13.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.DTdlpGa0.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.D-qkD_M7.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.CjQoC9Rv.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.BLBCf8y7.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.CvBHjqJ6.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager.UVg1rlQ6.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod.Ceqk7-O0.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.fsFZplx1.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BEWjXWI6.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.GryexR1x.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.SwXholce.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.CI_5pRyP.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.BicMiylf.js","/cdn/shopifycloud/checkout-web/assets/c1/index.B2Guq2KW.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BjdSTNKi.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BE3bhd3W.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.Ca9titpM.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.Cuz4ryjJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CBpWLJzT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0915/6807/9226/files/C1AC442F-6669-4F9A-93C9-79703122D631_x320.png?v=1749931766"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  