(function (global) {
    ScanViewModel = kendo.data.ObservableObject.extend({

        onScan: function() {
            console.log("Scan button pressed");            
            console.log("UUID" + device.uuid);
            if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
                alert("Not Supported in Simulator.");
            }
            else {
                window.plugins.barcodeScanner.scan(
                    function(result) {
                        if (!result.cancelled) {
                            app.application.navigate("#scan-view");
                            $("#result").text(result.format + " | " + result.text);
                            //that._addMessageToLog(result.format + " | " + result.text);    
                        }
                    }, 
                    function(error) {
                        console.log("Scanning failed: " + error);
                    });
            }
        },
        
        onList: function() {
            console.log("List button pressed");  
            app.navigate("#list-view");
        },
    
    });
    
    app.scanService = {
        viewModel: new ScanViewModel()
    };
})(window);