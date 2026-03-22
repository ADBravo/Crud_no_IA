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

Esta ruta requiere obligatoriamente los campos: nombre, cantidad y precio.

```json
{
  "nombre": "pan",
  "cantidad": 7,
  "precio": 1200
}
```

---

PATCH: `/api/update/producto`

Esta ruta requiere obligatoriamente un ID.

Actualiza los campos según la información que se envíe, excepto cuando solo se envía el ID.

Es decir, si envías únicamente el ID y el nombre, esos campos se actualizan y los demás permanecen sin cambios.

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

Esta ruta requiere obligatoriamente un ID.

**request**

```json
{
  "id": 5
}
```