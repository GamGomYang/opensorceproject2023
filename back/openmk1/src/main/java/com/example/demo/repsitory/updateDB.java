package com.example.demo.repsitory;

import java.sql.*;

public class updateDB extends InsertDB{
    static String url = "jdbc:mysql://localhost:3306/products";
    static String user = "wmj";
    static String password = "1234";

    public static int getMaxBoxId() {
        int maxBoxId = 0;
        String maxIdQuery = "SELECT MAX(BOX_ID) AS maxBoxId FROM items";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement maxIdStmt = conn.createStatement();
             ResultSet maxIdRs = maxIdStmt.executeQuery(maxIdQuery)) {

            if (maxIdRs.next()) {
                maxBoxId = maxIdRs.getInt("maxBoxId");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return maxBoxId;
    }


    public static void processRecordsFromMaxBoxId(int maxBoxId) {
        String query = "SELECT * FROM items WHERE BOX_ID <= ?";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement stmt = conn.prepareStatement(query, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {

            stmt.setInt(1, maxBoxId);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.last()) {
                    do {
                        if(rs.getInt("BOX_ID") == maxBoxId){
                            InsertDB.InsertDBM(rs.getString("PAGE_URL"), maxBoxId);
                            maxBoxId--;
                        }
                    } while (rs.previous() && maxBoxId > 0);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

   /* public static void main(String[] args) {
        int maxBoxId = getMaxBoxId();
        processRecordsFromMaxBoxId(maxBoxId);
    }*/
}
