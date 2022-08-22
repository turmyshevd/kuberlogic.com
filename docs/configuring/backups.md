---
id: backups
title: Enabling backup/restore capability
tags: [backup, restore, configuration]
---

:::caution
Backups will only work if you use CSI based volumes. Backups will not work for `hostPath` volumes.
:::

Backups and restores feature is provided via [Velero](https://velero.io) integration. Both file-based and volume snapshot based backups are supported.
Backups and restores are disabled by default. Follow these steps to configure environment and enable backup feature:

1. Get supported Velero release (follow the [steps](https://velero.io/docs/v1.9/basic-install/) from the official Velero website)

2. Install Velero for your [infrastructure provider](https://velero.io/docs/v1.9/supported-providers/). Make sure to include `--use-restic` to enable file based backups.

3. Verify Velero status.
```shell
velero version
# Example output
#
# Client:
#         Version: v1.9.0
#         Git commit: -
# Server:
#         Version: v1.9.0
velero get backup-locations
# Example output
# NAME      PROVIDER   BUCKET/PREFIX     PHASE       LAST VALIDATED                   ACCESS MODE   DEFAULT
# default   aws        kl-demo-backups   Available   2022-07-11 13:54:24 +0300 EEST   ReadWrite     true
```