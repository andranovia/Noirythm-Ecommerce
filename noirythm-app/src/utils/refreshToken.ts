'use client'

import { useState } from "react";
import axiosInstance from "./axiosInstance";

const useRefreshToken = () => {
   
    const refreshToken = async () => {
      try {
        const response = await axiosInstance.post('/api/refresh-token', {
          refresh_token: window.localStorage.getItem('access_token'),
        });
        const { token } = response.data;
        window.localStorage.setItem('access_token', token);
      } catch (error) {
        console.error('Refresh token error:', error);
      }
    };
  
    return {

      refreshToken,
    };
  };

  export default useRefreshToken