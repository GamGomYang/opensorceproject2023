package com.example.demo.repsitory;

import com.example.demo.model.LoginDTO;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Component
public class userDAO {
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;

    public userDAO() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String dbURL = "jdbc:mysql://localhost:3306/log";
            String dbID = "root";
            String dbPassword = "0000";
            conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 회원 가입 메서드
    public int registerUser(@RequestBody LoginDTO loginDTO) {
        String SQL = "INSERT INTO USER(userID, userPassword, userName, userGender) VALUES (?, ?, ?, ?)";

        String userID = loginDTO.getID();
        String userPassword = loginDTO.getPassword();
        String userName = loginDTO.getName();
        String userGender = loginDTO.getGender();

        try {
            pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1, userID);
            pstmt.setString(2, userPassword);
            pstmt.setString(3, userName);
            pstmt.setString(4, userGender);


            return pstmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1;
    }

    // 로그인 메서드
    public int login(String userID, String userPassword) {
        String SQL = "SELECT userPassword FROM USER WHERE userID = ?";
        try {
            pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1, userID);
            rs = pstmt.executeQuery();

            if (rs.next()) {
                if (rs.getString(1).equals(userPassword)) {
                    return 1; // 로그인 성공
                } else {
                    return 0; // 비밀번호 불일치
                }
            }
            return -1; // 아이디가 없음
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -2; // DB 오류
    }
}