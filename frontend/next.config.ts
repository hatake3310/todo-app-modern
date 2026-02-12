import type { NextConfig } from "next";

const nextConfig: NextConfig = {
webpack: (config) => {
    config.watchOptions = {
      poll: 1000,   // 1秒ごとにチェック
      aggregateTimeout: 300,
    }
    return config;
    },
};

export default nextConfig;
