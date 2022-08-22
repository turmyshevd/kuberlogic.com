---
id: billing
title: Integrating with billing provider
tags: [Billing provider, configuration]
---

KuberLogic uses webhooks to integrate with various billing providers. Below you can find a scheme of core moving parts of a billing provider integration and instructions on how to set up ChargeBee to work with KuberLogic.
Billing providers such as ChargeBee have ready-made components that you can easily integrate into your own site (create a pricing table, add products, set up a customer portal).

![](/img/billing_integration.png)

- Step 1. Software vendors post a pricing table on a product site ([Products and checkout](https://www.chargebee.com/checkout-portal-docs/drop-in-integration.html#integrating-checkout)). Users can choose a product from the pricing table and proceed to checkout. Also you need to add [custom field](https://www.chargebee.com/docs/2.0/custom_fields.html) "domain" (as in example below) that will be updated by KuberLogic once application instance is ready.
![](/img/chargebee_custom_field.png)

- Step 2. The billing provider charges the user in accordance with the chosen subscription plan.

- Step 3. The billing provider sends an event via Webhook to KuberLogic. 1. [API keys](https://www.chargebee.com/docs/2.0/api_keys.html) 2. [Webhook](https://www.chargebee.com/docs/2.0/events_and_webhooks.html)

- Step 4. KuberLogic generates a domain name for the application instance, provisions an application instance in accordance with the chosen subscription plan, and ensures application availability.

- Step 5-6. After the application instance is provisioned KuberLogic sends an event to the Billing provider with the application instance domain name information. This event updates the user's subscription with the domain.

- Step 7. On the "subscription update," event Billing provider sends an e-mail "Your subscription has been updated" to the User with the application domain name added to the e-mail custom field. You can customize the e-mail template to something like "Your application instance is provisioned!" and add to the template previously created custom field. [Email Notifications](https://www.chargebee.com/docs/2.0/email-notifications-v2.html)

- Additional. You should add a link to the Customers portal to your application to allow users to manage the subscription [Single Page Customer Portal](https://www.chargebee.com/docs/1.0/customer_portal.html)

### Configuring KuberLogic

You will be asked to configure Chargebee integration during the installation process. Leaving `Chargebee site` parameter empty will disable Chargebee integration.

* "KuberLogic domain" configuration parameter is used by KuberLogic to generate subdomains for the application instances (e.g. http://magnetic-llama.example.com,  http://pleasant-antelope.example.com)

Example:

```shell
  - chargebee_site=example-test
  - chargebee_key=test_aTwdMcu4LDMU3eCadmXCJYcubL60tGDYbGeUg
  - kuberlogic_domain=example.com
```
Webhook configuration example:

![](/img/Webhook_example.png)

**Webhook URL should lead to "kls-chargebee-integration" service External IP.**

Type to see the IP:
```shell
>kubectl get svc -n kuberlogic
# Example output
#NAME                                     TYPE           CLUSTER-IP   EXTERNAL-IP      PORT(S)        AGE
#kls-api-server                           LoadBalancer   10.8.10.73   34.121.153.159   80:31098/TCP   5h19m
#kls-chargebee-integration                LoadBalancer   10.8.10.7    34.135.30.100    80:32415/TCP   5h19m
#kls-controller-manager-metrics-service   ClusterIP      10.8.4.214   <none>           8443/TCP       5h19m
#kls-webhook-service                      ClusterIP      10.8.15.55   <none>           443/TCP        5h19m
```