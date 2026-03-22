# Documentación API

llenar el .env con los datos que solicite

## Rutas

GET: `/api/get/producto`

**request**

```json
{
    Esta api no requiere de request
}
```

---

POST: `/api/add/producto`

**request**

```json
{
  "nombre": "pan",
  "cantidad": 7,
  "precio": 1200
}
```

---

PATCH: `/api/update/producto`

Esta ruta requiere si o si ID
Esta ruta actualiza dependiendo de lo que le envien execto si solo se le envia id

Es decir si solo envias id y nombre eso se actualiza y lo otro se queda quieto

**request**

```json
{
    "id": 5,
    "nombre": "pan",
    "cantidad": 7,
    "precio": 1200
}
```

---

DELETE: `/api/delete/producto`

Esta ruta requiere si o si ID

**request**

```json
{
    "id": 5
}
```

