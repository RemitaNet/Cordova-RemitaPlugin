
/*
Remita JS Plugin
2nd November, 2015
Created by System Specs
*/
 
    var RemitaController = {         

        LaunchApp: function (url, callback)
        { 

            var remita_ref = window.open(url, '_blank', 'location=no');
            remita_ref.addEventListener('loadstart', function (event) {
                



                spinnerplugin.show();
               
            });
            remita_ref.addEventListener('loadstop', function (event) {
                


                spinnerplugin.hide();

                setInterval(function () {

                    remita_ref.executeScript({
                        code: "BillerCtrl.CordovaHandler();"
                    },
                            function (values) {
                                 
                                if (values[0] !== null)
                                {
                                    callback(values[0]);

                                    remita_ref.close();
                                }
                                
                            });



                }, 1000);

                

                  });
            remita_ref.addEventListener('loaderror', function (event) {   });
            remita_ref.addEventListener('exit', function (event)  {
            });


            
        } 

}
 