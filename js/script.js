jQuery(document).ready(function($) {
	jQuery(document).on('click', '#submit', function(event) {
		event.preventDefault();
		var conv_select_box_value = jQuery('#conv-currency-select-box').val();
		var base_select_box_value = jQuery('#base-currency-select-box').val();
		var input_value = jQuery('#currency_input').val();
		var result =  fx.convert(input_value, {from: base_select_box_value, to: conv_select_box_value}).toFixed(2);

	jQuery('.currency').text(result);
	console.log('input value :' +input_value);
	console.log('input value :' +base_select_box_value);
	console.log('input value :' +conv_select_box_value);
	});
	
	
	jQuery.getJSON('http://freegeoip.net/json/' , function(data){
		var location = data.country_code;
			console.log(data);
		jQuery('.location').text(location);
	}
		);

	   //  // Load exchange rates data via AJAX:
    // jQuery.getJSON(
    // 	// NB: using Open Exchange Rates here, but you can use any source!
    //     'https://openexchangerates.org/api/latest.json?app_id=[YOUR APP ID]',
    //     function(data) {
    //         // Check money.js has finished loading:
    //         if ( typeof fx !== "undefined" && fx.rates ) {
    //             fx.rates = data.rates;
    //             fx.base = data.base;
    //         } else {
    //             // If not, apply to fxSetup global:
    //             var fxSetup = {
    //                 rates : data.rates,
    //                 base : data.base
    //             }
    //         }
    //     }
    // );

	fx.base = "USD";
	fx.rates = {
		"EUR" : 0.745101, // eg. 1 USD === 0.745101 EUR
		"ZAR" : 10.0000,
		"CAN" : 1.2,
		"USD" : 1,        // always include the base rate (1:1)
		/* etc */
	}

	
});
