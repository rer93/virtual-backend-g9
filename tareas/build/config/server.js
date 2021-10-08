"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = void 0;

var _express = _interopRequireWildcard(require("express"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Server {
  constructor() {
    this.app = (0, _express.default)(); // indicara si el contenido dela izquierda es verdadero (tiene un valor) entonces usara el contenido de la derecha
    //diferencia con el nullish operator => NCO valida que no sea ni NULL ni UNIDEFINED y el logical OR valida que no sea undefined

    this.puerto = process.env.PORT || 8000;
  }

  bodyParser() {
    this.app.use((0, _express.json)());
  }

  rutas() {
    this.app.get("/", (req, res) => {
      res.json({
        message: "Bienvenido a mi API"
      });
    });
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor corriendo exitosamente en el puerto ${this.puerto}`);
    });
  }

}

exports.Server = Server;