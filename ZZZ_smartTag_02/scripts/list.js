(function (global) {
    ListViewModel = kendo.data.ObservableObject.extend({

        items: function() {
            console.log("Items method called");
            var items2 = [
                {id: 1, name: "Sashimi salad", letter: "S" },
                {id: 2, name: "Chirashi sushi", letter: "C" },
                {id: 3, name: "Seaweed salad", letter: "S" },
                {id: 4, name: "Edamame", letter: "E" },
                {id: 5, name: "Miso soup", letter: "M" },
                {id: 6, name: "Maguro", letter: "M" },
                {id: 7, name: "Shake", letter: "S" },
                {id: 8, name: "Shiromi", letter: "S" },
                {id: 9, name: "Tekka maki", letter: "T" },
                {id: 10, name: "Hosomaki Mix", letter: "H" },
                {id: 11, name: "California rolls", letter: "C" },
                {id: 12, name: "Seattle rolls", letter: "S" },
                {id: 13, name: "Spicy Tuna rolls", letter: "S" },
                {id: 14, name: "Ebi rolls", letter: "E" },
                {id: 15, name: "Chicken Teriyaki", letter: "C" },
                {id: 16, name: "Salmon Teriyaki", letter: "S" },
                {id: 17, name: "Gohan", letter: "G" },
                {id: 18, name: "Tori Katsu", letter: "T" },
                {id: 19, name: "Yaki Udon", letter: "Y" }
            ];
            var items = [
                {id: 1, icon: "http://cdn.thegloss.com/files/2011/02/drink.jpg", name: "Sashimi", letter: "S" },
                {id: 2, icon: "http://us.123rf.com/400wm/400/400/nastya22/nastya221111/nastya22111100155/11169479-fruit-red-strawberry-cocktail-punch-drink-with-ice.jpg", name: "Chirashi sushi", letter: "C" } 
            ];

            return items;
        },
        
        onSelectItem: function(event) {
            console.log("OnSelectItem  pressed");
            console.log(event);
        },
    
        getIcon: function(event){
            console.log("getIcon called");
            console.log(event);
            return "http://cdn.thegloss.com/files/2011/02/drink.jpg";
        }
    });
    
    app.listService = {
        viewModel: new ListViewModel()
    };
})(window);