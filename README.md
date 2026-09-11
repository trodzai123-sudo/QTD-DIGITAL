# QTD Digital — Website V1

Website static V1 cho QTD Digital, định vị:

**Website • Landing Page • Performance Marketing**

## File

- `index.html` — toàn bộ cấu trúc trang chủ
- `styles.css` — giao diện responsive desktop/mobile
- `app.js` — menu mobile, reveal animation, validation form demo

## Chạy local

Có thể mở trực tiếp `index.html` hoặc chạy một static server, ví dụ:

```bash
python3 -m http.server 8080
```

Sau đó truy cập `http://localhost:8080`.

## Deploy

Phù hợp với GitHub + Cloudflare Pages hoặc bất kỳ static hosting nào.

## Việc cần làm trước khi chạy Ads

1. Tạo repo riêng `qtd-digital` và push source.
2. Gắn domain chính thức.
3. Kết nối form thật về Google Sheet/CRM.
4. Gắn Google Tag Manager + GA4.
5. Tạo conversion event cho form submit / click gọi / Zalo (nếu dùng).
6. Thay các mockup portfolio bằng screenshot dự án thật đã được phép sử dụng.
7. Bổ sung thông tin liên hệ, chính sách bảo mật và thông tin pháp lý cần thiết.
8. Chạy Lighthouse trên mobile và sửa lỗi hiệu năng/accessibility trước khi chạy Ads.

## Lưu ý

Form hiện tại chỉ validate và hiển thị trạng thái demo; **không gửi dữ liệu ra ngoài** để tránh thất thoát lead trước khi endpoint chính thức được cấu hình.
