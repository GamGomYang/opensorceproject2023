package com.example.demo.repsitory;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class jdbc {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/products";
        String user = "wmj";
        String password = "1234";


        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Successfully connected to the MySQL database.");
            try (Statement stmt = conn.createStatement()) {
                // SQL 명령어를 정의합니다.
                String sql = "CREATE TABLE IF NOT EXISTS employees (" +
                        "id INT AUTO_INCREMENT PRIMARY KEY, " +
                        "name VARCHAR(50), " +
                        "department VARCHAR(50), " +
                        "salary DECIMAL(10, 2), " +
                        "join_date DATE" +
                        ")";

                // SQL 명령어를 실행합니다.
                stmt.executeUpdate(sql);
                System.out.println("Table 'employees' created successfully.");
            }
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
        }
    }
}
