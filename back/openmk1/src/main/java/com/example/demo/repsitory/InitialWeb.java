package com.example.demo.repsitory;

import com.example.demo.model.Product;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class InitialWeb {
    public static List<Product> getProducts() {
        List<Product> products = new ArrayList<>();
        Set<Integer> processedBoxIds = new HashSet<>();
        String url = "jdbc:mysql://localhost:3306/products";
        String user = "wmj";
        String password = "1234";

        String query = "SELECT * FROM items ORDER BY BOX_ID DESC, TIMESTAMP DESC";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement stmt = conn.prepareStatement(query, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    int currentBoxId = rs.getInt("BOX_ID");
                    if (!processedBoxIds.contains(currentBoxId)) {
                        Product product = new Product();
                        product.setImgsrc(rs.getString("IMGSRC"));
                        product.setName(rs.getString("NAME"));
                        product.setSize(rs.getString("SIZE"));
                        product.setPrice(rs.getInt("PRICE"));

                        products.add(product);
                        processedBoxIds.add(currentBoxId);
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace(); // 실제 애플리케이션에서는 더 적절한 예외 처리를 해야 합니다.
        }

        return products;
    }
}