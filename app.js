import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection


  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
        $$(document).on('page:init', '.page[data-name="about"]', function (e) {
$$('button[id="plus"]').on('click', function() {
      var liczba_1 = document.getElementById('a').value;
      var liczba_2 = document.getElementById('b').value;
      document.getElementById('wynik').value = parseInt(liczba_1) + parseInt(liczba_2);
    });
            $$('button[id="minus"]').on('click', function() {
      var liczba_1 = document.getElementById('a').value;
      var liczba_2 = document.getElementById('b').value;
      document.getElementById('wynik').value = parseInt(liczba_1) - parseInt(liczba_2);
    });
            $$('button[id="razy"]').on('click', function() {
      var liczba_1 = document.getElementById('a').value;
      var liczba_2 = document.getElementById('b').value;
      document.getElementById('wynik').value = parseInt(liczba_1) * parseInt(liczba_2);
    });
            $$('button[id="dzielenie"]').on('click', function() {
      var liczba_1 = document.getElementById('a').value;
      var liczba_2 = document.getElementById('b').value;
      document.getElementById('wynik').value = parseInt(liczba_1) / parseInt(liczba_2);
    });
})
     $$(document).on('page:init', '.page[data-name="regex"]', function (e) {


                $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("imie").value;
                        var patt = new RegExp("[A-Z]{1}[a-z]+");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("a").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("a").style.backgroundColor="red";

                            }
                
                });
                $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("nazwisko").value;
                        var patt = new RegExp("[A-Z]{1}[a-z]+");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("b").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("b").style.backgroundColor="red";

                            }
                
                });
                    $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("miasto").value;
                        var patt = new RegExp("[A-Z]{1}[a-z]+");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("c").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("c").style.backgroundColor="red";

                            }
                
                });
                        $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("kodpocztowy").value;
                        var patt = new RegExp("[0-9]{2}-[0-9]{3}");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("d").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("d").style.backgroundColor="red";

                            }
                
                });
                        $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("email").value;
                        var patt = new RegExp("[a-z]+@[a-z]+.pl");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("e").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("e").style.backgroundColor="red";

                            }
                
                });
                        $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("telefon").value;
                        var patt = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{3}");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("f").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("f").style.backgroundColor="red";

                            }
                
                });
    
    
})
   

    },
  },
});