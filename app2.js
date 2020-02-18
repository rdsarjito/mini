var DataController = (function() {

    var List = function(name, kategoryName) {
        this.name = name;
        this.kategoryName = kategoryName;
    };

    var PercentageCategory = function(id, name, current) {
        this.id = id;
        this.name = name;
        this.current = current;
    }

    var data = {
        kategory: [],
        persentase: [],
    };

    return {
        kalkulasiPersentase: function () {
            var kalkulasiTerbaru = data.kategory.reduce(function(akumulasi, current, index) {
                var ak = akumulasi;
                var eksis = data.persentase.find(function(e) { return e.kategoryName === current.kategoryName });
                if (eksis) {
                    eksis.current = (data.kategory.filter(function(e) { return e.kategoryName === current.kategoryName }).length / data.kategory.length) * 100;
                    ak[index] = eksis;
                    return ak;
                }
                var newName = current.kategoryName;
                var newId = current.kategoryName.toLowerCase().replace(/ /g, '');
                var current = (data.kategory.filter(function(e) { return e.kategoryName === current.kategoryName }).length / data.kategory.length) * 100;
                ak.push(new PercentageCategory(newId, newName, current));
                return ak;
            }, []);
            data.persentase = kalkulasiTerbaru;
           return kalkulasiTerbaru;
        },
        addItem: function(name, kategory) {
            var newItem;

            // Create New item based web, mobile, desktop
            newItem = new List(name, kategory);

            // Push item in to data structure
            data.kategory.push(newItem);
            return newItem;

        },
        getKategory: function() {
            if(data.kategory === 'web') {
                return 'web'
            } else if(data.kategory === 'mobile'){
                return 'mobile'
            } else {
                return 'desktop'
            }
        },
        calculatePercantage: function() {
            data.kategory.filter(function(kategory) {
                
            })
        },
    }
})();

// UIController
var UIController = (function() {
    var DOMStrings = {
        inputName: '.input_name',
        kategory: '.add_type',
        list: '.list',
        buttonCenter: '.button-center',
        boxGraph: '.box-main-wrapper',
        // boxWeb: '.web_percentage',
        // boxMobile: '.mobile_percentage',
        // boxDesktop: '.desktop_percentage',
    };
    return {
        getInput: function() {
            return {
                name: document.querySelector(DOMStrings.inputName).value,
                kategory: document.querySelector(DOMStrings.kategory).value,
            }
        },
        renderGraph: function(allItems) {
            var itemGraphHtml, graphHtml;
            itemGraphHtml = '<div class="box-graph"><p>%current%</p><label>%kategoryName%</label></div>';
            graphHtml = allItems.reduce(function(acc, cur){
                var newHtml = itemGraphHtml.replace('%current%', cur.current);
                newHtml = newHtml.replace('%kategoryName%', cur.kategoryName);
                return acc + newHtml;
            }, '');
            document.querySelector(DOMStrings.boxGraph).innerHTML = graphHtml;
        },
        addListItem: function(obj) {
            var html, newHtml;

            html = '<tr id="exp-%id%"><th class="border_table">%name%</th><th  class="border_table">%kategory%</th><th  class="border_table">Ini nanti aksi</th></tr>';

            // Replace the placeholder
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%name%', obj.name);
            newHtml = newHtml.replace('%kategory%', obj.kategoryName);

            // Insert HTML to DOM
            document.querySelector(DOMStrings.list).insertAdjacentHTML('beforeend', newHtml);
        },
        getDomString: function() {
            return DOMStrings;
        }
    };
})();

var controller = (function(DtCtrl, UICtrl) {
    // Setup Event
    var setupEventListener = function() {
        // Get DOM String
        var DOM = UICtrl.getDomString();
        // Percentage to 0
        // document.querySelector(DOM.boxWeb).textContent = 0 + '%';
        // document.querySelector(DOM.boxMobile).textContent = 0 + '%';
        // document.querySelector(DOM.boxDesktop).textContent = 0 + '%';

        // Event click button simpan
        document.querySelector(DOM.buttonCenter).addEventListener('click', ctrlAddItem);

        // Event click enter

        // Delete item
    }
        
    
    // Add item
    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get the field input data
        input = UICtrl.getInput();

        // 2. Add the item to the data controller
        newItem = DtCtrl.addItem(input.name, input.kategory)

        // 3. Add the item to the UI
        UICtrl.addListItem(newItem)
        UICtrl.renderGraph(DtCtrl.kalkulasiPersentase());

    };  
    // Delete item

    return {
        init: function() {
            console.log('App is working');
            setupEventListener();
        }
    };

})(DataController, UIController)

controller.init()