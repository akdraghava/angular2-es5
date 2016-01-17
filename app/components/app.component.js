/**
 * Created by a548159 on 1/15/16.
 */
(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'app',
            directives: [app.Todos.TodoComponent],
            template: '<h1><todo></todo></h1>'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));