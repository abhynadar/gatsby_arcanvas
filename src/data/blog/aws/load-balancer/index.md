---
category: 'blog'
cover: './cover.jpg'
title: 'Elastic Load balancing'
description: 'In AWS, Elastic Load Balancing is used to automatically distribute incoming traffic across multiple targets like AWS EC2 instances, containers, or Lambda functions.'
date: '2021-07-24'
tags: ['Elastic Load balancing', 'ALB', 'NLB', 'CLB']
published: true
---

_In AWS, Elastic Load Balancing is used to automatically distribute incoming traffic across multiple targets like AWS EC2 instances, containers, or Lambda functions. Elastic Load Balancing guarantees a monthly availability of at least 99.99%._ 

AWS offers four types of Load balancers that are all highly available, scalable and provide for robust security. 


### Classic Load Balancer (CLB)
In AWS world anything classic means older version. They provide load balancing across multiple AWS EC2 instances. 

Some of the things to note about Classic Load Balancers are:
- These are intended for applications that are built within the EC2-Classic Networks. 
- These are internet facing Load Balancer. 
- It can handle HTTP, HTTPS and TCP based load balancing. 
- It can use layer-7 specific features, such as X-Forwarded and sticky sessions. 
- It can use strict Layer 4 balancing for application that rely purely on the TCP protocol. 
- It supports SSL termination. 
- It can be used with both IPv4 and IPv6 for EC2-Classic Networks. 
- It supports EC2 instances with any OS. 
- It is now integrated with AWS Certificate Management. 


### Application Load Balancer (ALB)
Application Load Balancer is used for load balancing HTTP and HTTPS traffic. This is the AWS recommended load balancer to use when wanting to load balance or route traffic based on the content of the request. 

Things to remember about Application Load Balancers are:
- This is the newer version of Load Balancer. 
- It is a Layer 7 based Load Balancer. 
- It supports Load Balancing HTTP and HTTPS traffic. 
- It can look at the url of the HTTP request and distribute traffic based on rules. 
- An ALB Listener receives connections from a client and proxies it to an instance in the target group. 
- Supported targets include: **EC2 Instances**, **Containers**, **AWS Lambda**, and **Private IP Addresses**. 
- You can also use IP Addresses as Targets to load balance applications hosted in on-premises locations over a Direct Connect or VPN Connection. 
- The ability to load balance across AWS and on-premises resources helps you migrate-to-cloud, burst-to-cloud, or failover-to-cloud.
- You can also use IP Addresses as Targets to load balance applications hosted in peered VPCs and EC2-Classic. 
- When working Docker containers that spin up dynamically and have dynamic ports consider using Application Load Balancer. 
- It can also monitor health of instances. 
- ALB uses round-robin approach for load balancing by default. 
- ALB also supports a slow start round-robin approach that is useful for applications that depend on cache and need a warm up period before being able to respond to requests with optimal performance. 
- You can assocaite a Security Group with an ALB
- ALBs are of two types: **Internal ALB** and **External ALB** 
- ALB can be provisioned on AWS Outposts also just as in an AWS Region. 
- ALB offers management of SSL Certificate through AWS IAM and AWS Certificates Manager. 
- ALB can route and load balance gRPC traffice between gRPC enabled client and services. 
- ALB supports WebSockets based communication. 
- ALB supports both SSL and TLS termination. 
- ALB supports sticky sessions via both **duration based cookies** and **application based cookies**
- Sticky sessions are enabled at Target Group Level. 
- ALB supports native IPv6 
- ALB injects a new custom identifier "X-Amzn-Trace-Id" HTTP Header on all requests coming into the load balancer. This Request tracking allows you to track a request by its unique ID as it makes its way across various services.
- ALB can redirect an incoming request from one URL to another URL. This allows us to do redirects from HTTP to HTTPS and also say from an old website to a new website. 
- ALB can also send back fixed response for certain request with HTTP error codes and custom error messages. 
- You can use AWS WAF (Web application firewall) to protect your web applications on your Application load balancer. 
- You can offload the user authentication functionality from your application into ALB. 
- ALB is seamlessly integrated with Amazon Cognito.  

#### _Internal ALB_ 
Internal ALB cannot be reached from internet. It will get a private IP Address and a private DNS Name.

#### _External ALB_
External ALB can be reached from internet and it has a public IP Address and a public DNS Name. 

#### _ALB can route traffic based on the content of the request_
Types of content based routing include: 
- Host based routing: This allows for routing based on Host field of the HTTP Header, useful to route multiple domains from the same load balancer. 
- Path based routing: This routes requests based on the URL path of the HTTP Header. 
- HTTP Header based routing: This allows for routing based on any standard or custom HTTP Header. 
- HTTP Method based routing: This allows for routing based on standard or custom HTTP Methods. 
- Query String Param based routing: This allows for routing using any of the query string parameter in the request. 
- Source IP Address CIDR based routing: This can route a request based on source IP address CIDR from where the request originates. 



### Network Load Balancer (NLB)
Network Load Balancers operate at connection level (Layer 4) and are ideal for TCP and UDP traffic. Network Load Balancers can handle millions of requests per second with ultra low latency. 

Things to remember about Network Load Balancer
- It is connection based Layer 4 load balancing. 
- Use this for TCP and UDP routing. 
- It supports TLS session termination.
- It integrates with AWS Certificate Manager and AWS IAM to manage your server certificates.
- It also supports sticky sessions defined at Target Group Level.
- It offers extremely low latency and is ideal for latency sensitive applications. 
- It preserves the Client Side source IP address allowing backend to see the IP address of the client. 
- It automatically provides for a static IP per Availability Zone that can be used by applications as the front-end IP of the load balancer. 
- It also allows for assigning of Elastic IP per Availability Zone there by providing your own fixed IP.
- It supports DNS failover by allowing Route 53 to direct traffic to NLB nodes in different AZ in case there are no health NLB nodes in one AZ.
- Integration with Route 53 allows for removal of unavailable NLB IP address and directing traffic to NLB in different Region.
- It is well integrated with many AWS Services such as - **Auto Scaling**, **Elastic Container Service**, **CloudFormation**, **Elastic BeanStalk**, **CloudWatch**, **Config**, **CloudTrail**, **CodeDeploy**, and **Certificate Manager**.
- It also supports long lived TCP Connections that are used for WebSockets based application.
- It is recommended to use NLB with Targets in multiple AZs for achieving high availability.  


### Gateway Load Balancer (GWLB)
Gateway Load Balancer makes it easy to deploy, scale and manage third party virtual appliances. It helps distribute traffic across multiple virtual appliances, while scaling them up and down based on demand. 


