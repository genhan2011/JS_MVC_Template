define(function(){
    function Layer(opts) {
        opts = opts || {};
        this.id = opts.id ;
        this.key = opts.key;
        this.name = opts.name;
        this.defaultVisibility = opts.visibility || true; /// boolean type
        this.description = opts.description;
        this.dataSources = opts.dataSources || [];
        this.style = opts.style; /// datasourceType can be 'image' or 'table'
    }
    return Layer;
});