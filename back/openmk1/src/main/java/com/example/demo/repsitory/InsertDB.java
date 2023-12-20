package com.example.demo.repsitory;


import com.example.demo.WebCrawling.WebCrawler;
import com.example.demo.model.Product;

import java.net.SocketException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.*;

public class InsertDB {
    public static void InsertDBM(String address,int boxid) {
        String url = "jdbc:mysql://localhost:3306/products";
        String user = "wmj";
        String password = "1234";

        Product product = WebCrawler.Crawling(address);

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Successfully connected to the MySQL database.");
            String sql = "INSERT INTO items (BOX_ID,PAGE_URL,IMGSRC,NAME,SIZE,PRICE) VALUES (?, ?,?,?,?,?)";
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setInt(1,boxid );
                pstmt.setString(2, address);
                pstmt.setString(3, product.getImgsrc());
                pstmt.setString(4,product.getName());
                pstmt.setString(5,product.getSize());
                pstmt.setInt(6,product.getPrice());

                int affectedRows = pstmt.executeUpdate();
                if (affectedRows > 0) {
                    System.out.println("A new item was inserted successfully!");
                }
            }
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
        }
    }
}
