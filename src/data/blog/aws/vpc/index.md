---
category: 'blog'
cover: './cover.jpg'
title: 'AWS VPC'
description: 'As you enter into the world of AWS one of the first things that get created for you as part of your account is the VPC. So what exactly is this VPC? Lets find out.'
date: '2021-01-25'
tags: ['AWS', 'VPC']
published: true
---

_As you enter into the world of AWS one of the first things that get created for you as part of your account is the VPC. So what exactly is this VPC? Lets find out._

<!-- ![VPC](./cover.jpg) -->

## VPC - Virtual Private Cloud 

VPC is a small portion of the AWS Cloud that is allocated to your account. It is a virtual network into which you launch your AWS resources like EC2 (Elastic Cloud Compute). This virtual network closely resembles a traditional network that you would have operated in your organization. It is a networking layer for your AWS resources like EC2 Instances. This helps logically isolate your AWS resources from other virtual networks in the AWS Cloud.  

### VPC and the AWS Regions

VPC is scoped or mapped inside an AWS Region. By default when you create an account a VPC is created in every region. 

### Default and non-default VPC

When you create an account, a **defult VPC** is created for your account. You can create your own VPC and configure it as you need. This will be a **non-default VPC**. The difference being, if a VPC was automatically created by AWS for you or was it created by you. You can create more than one VPCs. You can create VPC in same or different region. 


### VPC and AWS Availability Zones

An AWS Region has multiple Availability Zones. An **Availability Zone** is a grouping of one or more data centers. A VPC spans across all of the availability zones in a given AWS Region. 

### How do you access AWS VPC? 

There are various ways to create, manage and access AWS VPCs. 

- **AWS Management Console**  This is a Web Interface that you can use to access your VPCs. 
- **AWS CLI (Command Line Interface)** AWS provides commands for broad set of AWS Services, including for managing VPC. You can use your terminal, or command console to manage your VPC using these commands. 
- **AWS SDKs** AWS provides language specific APIs that can be used to manage your VPC from your favorite programming language. 
- **Query API** These are low level API actions that you call using HTTPs requests. 

### Elements of VPC 

A VPC has different elements associated to it. Each of them have a specific role to play. Below is the list of most important elements of a VPC. 

- **Subnet** These are like a child network inside of your VPC. Per AWS, it is a range of IP Addresses in your VPC. 
- **Route Table** This consists of a set of rules, called routes, that are used to determine where the network traffic is directed. By default a VPC gets one **Route Table** called **main**. This Route Table will have at least one entry for **local**.
- **Router** A router manages all the local communication inside of a VPC. 
- **Internet Gateway** It is a Gateway that you attach to your VPC to enable AWS resources inside your VPC to communicate to internet. 
- **CIDR Block** Classless Inter-Domain Routing. It is a range of IP Address that you can use for your resources inside the VPC. 

### VPC Layout 

![VPC](./vpc.png) 

### Finally things to remember about VPC

- VPC is a portion of the AWS cloud that is allocated to your account
- VPC should span at least two Availability Zones
- VPC is mapped to a Region 
- You can create more than one VPCs 
- You can create VPC in same region or another region 
- VPC can have multiple Subnets
- You launch your EC2 Instances inside of the Subnet that is in your VPC 
- VPC has Subnet, Internet Gateway, Router, Main route table, CIDR Block
- By default VPC gets one route table called - main 
- Main route table will have at least one entry for local 
- There are no additional charges for using VPC
- There are quotas on number of AWS VPC Components that you can provision. 
- AWS VPC is validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS)