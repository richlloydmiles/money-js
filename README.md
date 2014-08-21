money-js
========

Individual values are console logged to give an idea of how it works (already its very straight forward) - 
eventually one of the select box values will be replaced with the http://freegeoip.net/json/ json feed so that it is not selected by the user.

I have also put static values in for various currencies, however, the functionality for querying the live api has merely been commented out as I do not want to reveal our private key on github. If you want it to pull in the live feed then you must substitute the key (which I can give you) for [YOUR APP ID] in the code , and then uncomment the whole json section.

Alternatively you can put in your own currency values at the:

fx.rates = {
		"EUR" : 0.745101, // eg. 1 USD === 0.745101 EUR
		"ZAR" : 10.0000,
		"CAN" : 1.2,
		"USD" : 1,        // always include the base rate (1:1)
		/* etc */
	}
	
as well as add them to the select boxes as options - 

  <option value="CAN">CAN</option>
  
and they should work fine.
