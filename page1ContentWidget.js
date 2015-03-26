Clazz.page1ContentWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        initialize : function(config){
            this.templateUrl = "page1Content.html";
        },
        $('#serverConnection').onkeypress(function(e){
            placeData();
        });
        function placeData(){
            $.ajax({
                url: "http://localhost:3000/dataChange",
                type: "POST",
                //data: postJson,
                success: function(obj) {
                    $("#result").html(obj);
                console.log(obj);
            },
        });
        },
    
        bindUI: function() {
            var y = function() {
                document.Navigate("page2")
            };
            $("#forwardButton").click(y);
       }
    }
);