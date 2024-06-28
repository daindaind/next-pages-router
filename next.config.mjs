/** @type {import('next').NextConfig} */
const nextConfig = {
  // "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg"
  reactStrictMode: true,
  images: {
    // 통신 규약 패턴
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        // ** : 아무거나 올 수 있음
        pathname: "/user/**",
      },
    ],
  },
};

export default nextConfig;
