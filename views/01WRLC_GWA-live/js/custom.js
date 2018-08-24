(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad', 'wrlcAnnounce', 'illCard']);

    app.value('wrlcFooterConfig', {
        message: 'This service is provided by <a href="https://library.gwu.edu">GW Libraries</a> in partnership with the <a href="https://www.wrlc.org">Washington Research Library Consortium</a>'
    });
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

    /* configuration for WRLC banner */
        app.constant('announceConfig', {
          announceAPI: 'https://spreadsheets.google.com/feeds/list/1E4qRAR2RolPZJlf8V1eszR7OejM3ThUCL3M3rhdfq4k/1/public/values?alt=json',
          getShow: function(response) {
              return(response.data.feed.entry[0].gsx$show.$t);
          },
          getMessage: function(response) {
              return(response.data.feed.entry[0].gsx$message.$t);
          },
          getLink: function(response) {
              return(response.data.feed.entry[0].gsx$link.$t);
          }
        });
    /* end banner configuration */

    /* ILL Card in account */
      app.constant('illCardConfig', {
        card_title: 'Check Interlibrary Loan Requests',
        message : 'Sign in to Interlibrary Loan to view your interlibrary account information.',
        signon_url : 'https://proxygw.wrlc.org/login?url=https://gwu.illiad.oclc.org/illiad/illiad.dll',
        link_text : 'Sign into Interlibrary Loan',
      });


})();
 
