---
id: getting_started
title: Getting Started
tags:
  - Getting started
---
  
# Getting Started

## Requirements
* Kubernetes cluster 1.20-1.24

## Installation

Feel free to open an issue if you need any help. You can also reach out to us at info@kuberlogic.com.

#### 1. Prepare docker-compose file for your application
:::tip
If you install KuberLogic for testing and studying you can skip this step (sample app is included).
:::
[Read more →](/docs/configuring/docker-compose) about docker-compose.yml limitations.

#### 2. Setting up ingress controller for the Kubernetes cluster

Run to apply Kong ingress controller:
```bash
kubectl apply -f https://bit.ly/k4k8s
```
You can also use any other ingress controller you prefer.


#### 3. (Optional) Configure and enable Velero for backup/restore integration
:::tip 
If you install KuberLogic for testing and studying you can skip this step (in this case backup/restore capabilities will not be available).
:::
[Read more →](/docs/configuring/backups)

#### 4. Get KuberLogic CLI

Get the latest KuberLogic stable build.
```shell
curl https://raw.githubusercontent.com/kuberlogic/kuberlogic/master/get-kuberlogic.sh | sudo bash -
```
We use 'sudo' in the command only to save the binary file to your system.

#### 5. Install KuberLogic

Run the following command and follow the installation instructions to install KuberLogic into your Kubernetes cluster. The KuberLogic installer will sequentially ask you for the information necessary to form the configuration file.

```shell
./kuberlogic install
```

CLI will create a config file at `~/.config/kuberlogic/config.yaml` when the installation process is finished. Usually you do not have to modify this file manually, it is updated after each KuberLogic CLI installation/configuration run.
The command above can also be used to modify KuberLogic configuration parameters when it is already installed.

#### 6. Make sure KuberLogic is up and running

By entering the following command, verify that KuberLogic is up and running.
```shell
./kuberlogic service list
```
Example output:
```shell
  № | ID | SUBSCRIPTION ID | TYPE | REPLICA | VERSION | BACKUP SCHEDULE | STATUS | ENDPOINT
----+----+-----------------+------+---------+---------+-----------------+--------+-----------
```

## Additional steps

#### 7. Configure DNS

Add a DNS type A record directed to kong-proxy's external IP address with hostname '*.yourdomain.com'. Alternatively, if you are evaluating KuberLogic, you may want to use '/etc/hosts file' to provide the access locally.

In order to view the IP address of the Ingress controller, enter the following command:
```shell
kubectl get svc -n kong
```
Example output:
```shell
NAME                      TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                      AGE
kong-proxy                LoadBalancer   10.28.5.102    34.170.211.128   80:31200/TCP,443:30646/TCP   57m
kong-validation-webhook   ClusterIP      10.28.15.136   <none>           443/TCP                      57m
```

#### 8. Configure integration with billing provider

[Read more →](/docs/configuring/billing)