package com.example.demo.repsitory;

import com.example.demo.WebCrawling.WebCrawler;
import com.example.demo.model.Product;
import lombok.extern.slf4j.Slf4j;

import java.sql.*;

public class CheckData {

    public static boolean CheckDataM(String address) {
        String url = "jdbc:mysql://localhost:3306/products";
        String user = "wmj";
        String password = "1234";
        int max = 0;
        boolean check = false;

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Successfully connected to the MySQL database.");
            try (Statement stmt = conn.createStatement();
                 ResultSet rs = stmt.executeQuery("SELECT * FROM items")) {

                while (rs.next()) {
                    int boxid = rs.getInt("BOX_ID");
                    if (boxid > max) {
                        max = boxid;
                    }

                    String pageurl1 = rs.getString("PAGE_URL");
                    if (address.equals(pageurl1)) {
                        System.out.println("return true");
                        check = true;
                    }
                }
            }
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
            /*throw e; // 예외를 호출자에게 전파*/
        }

        if (!check) {
            InsertDB.InsertDBM(address, max + 1);
        }

        return check;
    }
}