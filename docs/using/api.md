---
id: api_app
title: Application management with REST API
tags: [REST API, application, management]
---

See the [openapi.yaml](https://github.com/kuberlogic/kuberlogic/blob/master/modules/dynamic-apiserver/openapi.yaml) for REST API reference.

### Examples
#### Create an application
```bash
curl --header 'X-Token: <KuberLogic API server token>' -X POST -H "Content-Type: application/json" -d '{
  "id": "my-app",
  "type": "my-app-type",
  "domain": "example.com",
}' <KuberLogic API server endpoint>/api/v1/services
```

#### List applications
```bash
curl --header 'X-Token: <KuberLogic API server token>' <kuberlogic API server endpoint>/api/v1/services
```