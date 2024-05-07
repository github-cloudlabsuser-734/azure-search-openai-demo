# Deploying a Virtual Network (VNet) in Azure

## Prerequisites
- Azure subscription
- Azure CLI installed

## Steps

1. Open a terminal or command prompt.

2. Sign in to your Azure account by running the following command:
    ```
    az login
    ```

3. Create a resource group to hold the VNet by running the following command:
    ```
    az group create --name myResourceGroup --location eastus
    ```

4. Create the VNet by running the following command:
    ```
    az network vnet create --name myVNet --resource-group myResourceGroup --address-prefixes 10.0.0.0/16 --subnet-name mySubnet --subnet-prefixes 10.0.0.0/24
    ```

5. Verify the VNet creation by running the following command:
    ```
    az network vnet show --name myVNet --resource-group myResourceGroup --query "subnets[].{Name: name, AddressPrefix: addressPrefix}"
    ```

6. You have successfully deployed a VNet in Azure.

## Conclusion
In this guide, you learned how to deploy a Virtual Network (VNet) in Azure using Azure CLI. You can now proceed to configure additional resources within your VNet.
