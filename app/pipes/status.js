(function(app) {
    app.Pipes = app.Pipes || (app.Pipes = {});
    app.Pipes.StatusFilterTodo =
        ng.core.Pipe({
            name: 'status'
        })
            .Class({
                constructor: function constructor() {},

                transform: function transform(value, args) {
                    var status = args[0];
                    return value.filter(function(item) {
                        return status === 'all' ? true : item.status === status;
                    });
                }
            });
})(window.app || (window.app = {}));