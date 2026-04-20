# Modele Danych

## 1. Character (Postać)
- `name`: String
- `description`: String
- `species`: String
- `isHibernating`: Boolean
- `bestFriend`: ObjectId

## 2. Artifact (Artefakt)
- `name`: String
- `propertiesDescription`: String
- `owner`: ObjectId

# Endpointy
- `GET /api/characters`
- `POST /api/characters`
- `DELETE /api/characters/:id`
- `GET /api/artifacts`
- `POST /api/artifacts`