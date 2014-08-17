function Potyvirus(args) {
    CellMaps.call(this, args);
}

Potyvirus.prototype = Object.create(CellMaps.prototype, {

    _createToolBar: {
        value: function (target) {
            var _this = this;
            var toolbar = document.createElement('pty-toolbar');

            this._createToolBarHandlers(toolbar)

            target.appendChild(toolbar);
            return toolbar;
        }
    }

});

