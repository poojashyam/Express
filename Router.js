Clazz.Router = Clazz.extend(Clazz.Base,{
    initialize: function(config){
        this.config= config;
    },
    Navigate : function(key){
        location.hash = key;
        // get the widget name for a particular key
        var widgetTypeName  = this.config.map[key];
        console.log(widgetTypeName);
        // get the default container from the config
        var container = document.getElementById(this.config.container);
        // instantiate the widget from the widgetname
        eval("var widgetToRender = new " + widgetTypeName + "()");//takes a string and make it into a JS statement.
        // render the widget in the container
        widgetToRender.render(container);
     }  
});
