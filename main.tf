
provider "aws" {
  region  = "us-east-1"
  access_key = "Access_key_ID"
  secret_key = "Secret_access_key"
  
}

# 1.create vpc
resource "aws_vpc" "prod-vpc" {
  cidr_block = "10.0.0.0/16"
  
}

#2. create internet gateway
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.prod-vpc.id

}
