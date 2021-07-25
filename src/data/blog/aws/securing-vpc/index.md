---
category: 'blog'
cover: './cover.jpg'
title: 'Securing VPC'
description: 'Coming Soon!!!'
date: '2021-02-02'
tags: ['AWS', 'VPC', 'Security']
published: false
---

_Coming Soon!!!_.

Security is a shared responsibility between AWS and you. AWS defines a shared responsibility model that describes this as: 
- Security of the cloud - AWS is responsible for protecting the infrastructure that runs AWS Cloud. 
- Security in the cloud - You are responsible for the services that you run on AWS.  

Securing a VPC involves following: 
- Who can access your data
- Is your data protected in transit
- Controlling network traffic 
- Logging and monitoring your VPC


There are 5 things that need to be in place in order to allow internet traffic.
- Public IP Address
- Inernet Gateway attached to a VPC
- Route to an Internet Gateway 
- NACL Allow Rule 
- Security Allow Rule


