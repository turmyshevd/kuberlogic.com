---
id: backups_cli
title: Backups management with CLI
tags: [backup, restore, CLI]
---

#### Backup application
```bash
./kuberlogic service backup --service_id demo
```

#### List all backups
```shell
./kuberlogic backup list
```

#### List all backups for a single application
```shell
./kuberlogic backup list --service_id demo
```

#### Delete backup
```shell
./kuberlogic backup delete --id demo-1657538554
```

### Restore management
#### Restore a service from backup
```shell
./kuberlogic backup restore --backup_id demo-1657538554
```

#### List restores
```shell
./kuberlogic restore list
```

#### List restores for a single application
```shell
./kuberlogic restore list --service_id demo
```

#### Delete restore
```shell
./kuberlogic restore delete --id demo-1657538554
```