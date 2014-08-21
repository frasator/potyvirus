function Potyvirus(args) {

    this.menuEl = this._createMenuEl();

    this.networkViewerWebglDiv = document.createElement('div');
//    <div id="effect" class="hidden">
//        <pty-effect-propagation></pty-effect-propagation>
//        </div>
//    <div id="simpson" class="hidden">
//        <pty-simpson-index></pty-simpson-index>
//    </div>
//    <div id="tables" class="hidden">
//        <pty-4a></pty-4a>
//        <pty-4b></pty-4b>
//        <pty-4c></pty-4c>
//        <pty-4d></pty-4d>
//        <pty-4e></pty-4e>
//        <pty-4f></pty-4f>
//    </div>

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
    },
    _createMenuEl: {
        value: function () {
            var _this = this;

            var html = '' +
                '       <li id="vhpin" class="active">Potyvirus-A.thaliana VHPI</li>' +
                '       <li id="vhpin3d" class="">Potyvirus-A.thaliana VHPI 3D</li>' +
                '';

            var ul = document.createElement('ul');
            ul.classList.add('ocb-app-menu', 'unselectable');
            ul.innerHTML = html;

            ul.addEventListener('click', function (e) {
                if (!e.target.classList.contains('title')) {
                    var liEls = ul.querySelectorAll('li');
                    for (var i = 0; i < liEls.length; i++) {
                        var li = liEls[i];
                        li.classList.remove('active');
                    }
                    e.target.classList.add('active');
                    var id = e.target.getAttribute('id');
                    switch (id) {
                        case "vhpin":
                            _this.networkViewerDiv.removeChild();
                            _this.div.appendChild(this.networkViewerDiv);
//                            _this._hideOptions();
                            document.body.querySelector('#network').classList.remove('hidden');
                            _this.headerWidget.toogleAppMenu(false);
                            break;
                        case "vhpin3d":
//                            _this._hideOptions();
                            document.body.querySelector('#network3d').classList.remove('hidden');
                            _this.headerWidget.toogleAppMenu(false);
                            break;
                    }
                }
            });

            return ul;
        }
    },
    _hideOptions: {
        value: function () {
            var options = document.body.querySelector('#options').children;
            for (var i = 0; i < options.length; i++) {
                var op = options[i];
                op.classList.add('hidden');
            }
        }
    }

});

