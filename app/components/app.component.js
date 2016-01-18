/**
 * Created by a548159 on 1/15/16.
 */
(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'app',
            directives: [app.Todos.TodoComponent],
            templateUrl: '/app/templates/app.html'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));