from flask import Flask, request

app = Flask(__name__)

productos = [{
    "nombre": "Palta Fuerte",
    "precio": 5.20
},{
    "nombre": "Albaca 100gr.",
    "precio": 0.80
}]

@app.route("/")
def inicio():
    #siempre que vamos a responder al client tiene que ser por el return
    return {
        "message":"Bienvenido a mi API",
        "content": ""
    }

@app.route("/productos", methods=['POST', 'GET'])
def gestion_productos():
    print(request.method)
    if request.method == 'GET':
        return {
            "message": "",
            "content": productos
        }
    elif request.method == 'POST':
        #el get_json() sirve para visualizar toda la informacion que el usuario  me esta enviando por el body
        # body es el cuerpo de la peticion (donde el front adjunta la infromacion que quiere enviar)
        #body se envia en formato JSON / multipart / TEXT / XML
        producto = request.get_json()
        productos.append(producto)

        return {
            "message": "Producto Creado exitosamente",
            "Content": producto
        }

@app.route("/producto/<int:id>", methods=['GET'])
def gestion_producto(id):
    #buscar la posicion en la lista
    #si no existe indicar que no existe
    #si existe, mostrar el producto
    total_productos = len(productos)
    if id<total_productos:
        return {
            "content": productos[id],
            "message": None
        }
    else:
        return {
            "message": "Producto no encontrado",
            "content": None
        }


if __name__ == "__main__":
    app.run(debug=True)