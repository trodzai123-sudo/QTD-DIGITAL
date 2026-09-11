# QTD Digital — Website V1

Website static V1 cho QTD Digital, định vị:

**Website • Landing Page • Performance Marketing**

## Cấu trúc source

Để giữ nguyên nội dung UTF-8 khi đẩy source qua connector, hai file lớn được lưu theo từng phần:

- `src/index/*.part` — HTML nguồn
- `src/styles/*.part` — CSS nguồn
- `app.js` — menu mobile, reveal animation và validation form demo
- `favicon.svg` — favicon QTD Digital
- `_headers` — security/cache headers cho Cloudflare Pages
- `build.mjs` — ghép các phần nguồn thành website deploy

## Build local

```bash
npm run build
```

Sau khi build, website hoàn chỉnh nằm trong thư mục `dist/`:

- `dist/index.html`
- `dist/styles.css`
- `dist/app.js`
- `dist/favicon.svg`
- `dist/_headers`

Có thể preview bằng static server:

```bash
cd dist
python3 -m http.server 8080
```

Sau đó truy cập `http://localhost:8080`.

## Deploy Cloudflare Pages

Kết nối repo này với Cloudflare Pages và dùng:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`

Không cần biến môi trường hoặc dependency bên ngoài cho V1.

## Việc cần làm trước khi chạy Ads

1. Gắn domain chính thức.
2. Kết nối form thật về Google Sheet/CRM.
3. Gắn Google Tag Manager + GA4.
4. Tạo conversion event cho form submit / click gọi / Zalo (nếu dùng).
5. Thay các mockup portfolio bằng screenshot dự án thật đã được phép sử dụng.
6. Bổ sung thông tin liên hệ, chính sách bảo mật và thông tin pháp lý cần thiết.
7. Chạy Lighthouse trên mobile và sửa lỗi hiệu năng/accessibility trước khi chạy Ads.

## Lưu ý

Form hiện tại chỉ validate và hiển thị trạng thái demo; **không gửi dữ liệu ra ngoài** để tránh thất thoát lead trước khi endpoint chính thức được cấu hình.
