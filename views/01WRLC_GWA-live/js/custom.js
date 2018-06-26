(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/
  
    /* Increases default results page shown to 2 pages (20 results) 
     * stolen from University of Denver's Primo instance https://library.du.edu/
     */
        app.component('prmExploreMainAfter',{
                bindings: {parentCtrl: '<'},
                controller: function($scope){
                var vm = this;
             vm.parentCtrl.searchService.cheetah.configurationUtil.searchStateService.resultsBulkSize = 20;                    
           }
        });

    /*
     * end increase default results
     */

    /* Insert found a problem link */
        app.component('prmFullViewServiceContainerAfter', {
                template: '<a class="layout-align-left-left layout-column" id="found-problem" href="https://goo.gl/forms/B9PRKfPiIlsrasrx2" target="_blank">Found a Problem?</a>'
        });
    /*
      // Uncomment for test profile customization package    
      // Add link to fines and fees payment 
        app.component('prmFinesAfter', {
                template: '<a class="layout-align-center-center layout-column" id="payment-button" href="https://gwfines-dev.wrlc.org/pay" target="_blank">Pay Fines</a>'
        });
    */
})();
 
