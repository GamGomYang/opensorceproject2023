package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Product {

    public Product(){
        this.imgsrc="empty";
        this.name="empty";
        this.size="";
        this.price=0;
    }
    public Product(String a,String b,String c, int d){
        this.imgsrc=a;
        this.name=b;
        this.size=c;
        this.price=d;
    }
    public void SetProduct(String a,String b,String c, int d){
        this.imgsrc=a;
        this.name=b;
        this.size=c;
        this.price=d;

    }


    String imgsrc;
    String name;
    String size;
    int price;


}
