function Potyvirus(args) {
    CellMaps.call(this, args);
}
Potyvirus.prototype = Object.create(CellMaps.prototype);
Potyvirus.prototype.constructor = Potyvirus;