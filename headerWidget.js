Clazz.headerWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        initialize : function(data){
            this.templateUrl = "header.html";
            this.data = data;
        },
});