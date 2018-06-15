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
    // Add link to fines and fees payment 
        app.component('prmFinesAfter', {
                template: '<a class="layout-align-center-center layout-column" id="payment-button" href="https://gwfines-dev.wrlc.org/pay" target="_blank">Pay Fines</a>'
        });
})();

   
