(function (global) {
    HomeViewModel = kendo.data.ObservableObject.extend({

        onScan: app.scanService.viewModel.onScan,
        
        onList: function() {
            console.log("List button pressed");  
            app.application.navigate("#list-view");
        },
    
    });
    
    app.homeService = {
        viewModel: new HomeViewModel()
    };
})(window);