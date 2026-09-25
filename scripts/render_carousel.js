#!/usr/bin/env node

/**
 * Auto-Slide Carousel Generator
 * Renders high-converting 4:5 (1080x1350) social media carousel slides into PNG images.
 * Uses native macOS Google Chrome in headless mode with zero external dependencies.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function renderSlides(config) {
  const { title, tag, slides, outputDir = './output/carousel' } = config;

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const generatedFiles = [];

  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    const totalSlides = slides.length;
    const isFirst = slideNumber === 1;
    const isLast = slideNumber === totalSlides;

    let bodyContent = '';

    if (isFirst) {
      bodyContent = `
        <div class="tag">${slide.tag || tag || 'AI WORKFLOW'}</div>
        <h1 class="hero-title">${slide.title}</h1>
        <p class="subtitle">${slide.subtitle || ''}</p>
        <div class="swipe-hint">VUỐT SANG PHẢI 👉</div>
      `;
    } else if (isLast) {
      bodyContent = `
        <div class="step-num">TỔNG KẾT</div>
        <h2 class="slide-title">${slide.title}</h2>
        <div class="card-box">
          <p class="summary-text">${slide.content || ''}</p>
        </div>
        <div class="cta-box">
          <div class="cta-pill">LƯU LẠI & THEO DÕI</div>
          <p class="cta-sub">${slide.cta || 'Đón đọc case study công nghệ tiếp theo'}</p>
        </div>
      `;
    } else {
      bodyContent = `
        <div class="step-num">BƯỚC 0${slideNumber - 1} / 0${totalSlides - 2}</div>
        <h2 class="slide-title">${slide.title}</h2>
        <div class="card-box">
          <p class="card-main">${slide.content || ''}</p>
          ${slide.tip ? `<div class="card-tip">💡 <b>Mẹo:</b> ${slide.tip}</div>` : ''}
        </div>
      `;
    }

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    width: 1080px;
    height: 1350px;
    background: radial-gradient(circle at 50% 10%, #1e293b 0%, #0b0f19 70%, #05070c 100%);
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 90px 80px;
    position: relative;
    overflow: hidden;
  }
  .tag {
    background: rgba(56, 189, 248, 0.12);
    color: #38bdf8;
    padding: 12px 28px;
    border-radius: 999px;
    font-size: 26px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin-bottom: 50px;
    border: 1px solid rgba(56, 189, 248, 0.35);
  }
  .hero-title {
    font-size: 76px;
    line-height: 1.25;
    text-align: center;
    margin: 0 0 45px 0;
    font-weight: 900;
    letter-spacing: -1px;
    background: linear-gradient(180deg, #FFFFFF 20%, #94A3B8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero-title span {
    -webkit-text-fill-color: #38bdf8;
  }
  .subtitle {
    font-size: 36px;
    line-height: 1.55;
    color: #94a3b8;
    text-align: center;
    max-width: 860px;
    margin: 0 0 60px 0;
  }
  .swipe-hint {
    font-size: 26px;
    font-weight: 600;
    color: #38bdf8;
    letter-spacing: 1.5px;
    margin-top: 40px;
    border-bottom: 2px solid rgba(56, 189, 248, 0.4);
    padding-bottom: 8px;
  }
  .step-num {
    font-size: 24px;
    font-weight: 800;
    color: #38bdf8;
    letter-spacing: 3px;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
  .slide-title {
    font-size: 64px;
    font-weight: 800;
    text-align: center;
    line-height: 1.25;
    margin: 0 0 50px 0;
    color: #f8fafc;
    letter-spacing: -0.5px;
  }
  .card-box {
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    padding: 60px 50px;
    width: 100%;
    max-width: 900px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
  }
  .card-main {
    font-size: 38px;
    line-height: 1.6;
    color: #e2e8f0;
    margin: 0;
    font-weight: 500;
  }
  .card-tip {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 30px;
    color: #38bdf8;
    line-height: 1.5;
  }
  .summary-text {
    font-size: 38px;
    line-height: 1.6;
    color: #e2e8f0;
    text-align: center;
    margin: 0;
  }
  .cta-box {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cta-pill {
    background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
    color: #ffffff;
    font-size: 32px;
    font-weight: 800;
    padding: 20px 48px;
    border-radius: 999px;
    letter-spacing: 1.5px;
    box-shadow: 0 10px 25px -5px rgba(56, 189, 248, 0.5);
  }
  .cta-sub {
    margin-top: 25px;
    font-size: 26px;
    color: #64748b;
  }
  .progress-bar {
    position: absolute;
    bottom: 40px;
    display: flex;
    gap: 12px;
  }
  .dot {
    width: 40px;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.2);
  }
  .dot.active {
    background: #38bdf8;
  }
</style>
</head>
<body>
  ${bodyContent}
  <div class="progress-bar">
    ${slides.map((_, i) => `<div class="dot ${i + 1 === slideNumber ? 'active' : ''}"></div>`).join('')}
  </div>
</body>
</html>
    `;

    const tempHtmlPath = path.join(outputDir, `temp_slide_${slideNumber}.html`);
    const outputPngPath = path.join(outputDir, `slide_${slideNumber}.png`);

    fs.writeFileSync(tempHtmlPath, html);

    try {
      execSync(`"${CHROME_PATH}" --headless=new --screenshot="${outputPngPath}" --window-size=1080,1350 --hide-scrollbars "file://${path.resolve(tempHtmlPath)}" 2>/dev/null`);
      execSync('sleep 0.8');
      generatedFiles.push(outputPngPath);
    } finally {
      if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
    }
  });

  return generatedFiles;
}

module.exports = { renderSlides };

// CLI execution check
if (require.main === module) {
  const sample = {
    tag: 'AI THỰC CHIẾN',
    slides: [
      {
        title: 'BIẾN CHATGPT THÀNH<br><span>NHÂN VIÊN 24/7</span>',
        subtitle: 'Quy trình 3 bước tự động hóa công việc mà không cần biết viết một dòng code nào.'
      },
      {
        title: 'Sai Lầm Lớn Nhất',
        content: '90% mọi người dùng ChatGPT như công cụ chat hỏi-đáp. Mỗi lần dùng lại phải gõ lại prompt từ đầu, cực kỳ tốn thời gian.',
        tip: 'Phải biến nó thành Agent có trí nhớ và luồng làm việc cố định.'
      },
      {
        title: 'Đóng Gói Nhiệm Vụ',
        content: 'Liệt kê 3 việc lặp đi lặp lại nhiều nhất: Soạn email báo cáo, tóm tắt cuộc họp, hoặc lọc tin tức hàng ngày.',
        tip: 'Quy tắc 80/20: Chỉ tự động hóa việc tốn trên 15 phút mỗi ngày.'
      },
      {
        title: 'Kết Nối Tự Động Hóa',
        content: 'Dùng một công cụ cắm nối đơn giản để đưa lệnh vào. Cứ có dữ liệu mới là AI tự chạy và trả kết quả về tin nhắn.',
        tip: 'Bắt đầu từ luồng 2 bước trước khi làm luồng phức tạp.'
      },
      {
        title: 'Bắt Đầu Ngay Hôm Nay',
        content: 'Tự động hóa không phải chuyện tương lai. Đó là kỹ năng sống còn ngay trong năm nay để không bị tụt lại.',
        cta: 'Bấm Lưu bài viết & Theo dõi kênh'
      }
    ],
    outputDir: path.resolve(__dirname, '../output/sample_carousel')
  };

  console.log('Rendering carousel slides...');
  const files = renderSlides(sample);
  console.log(`Successfully generated ${files.length} slides:`, files);
}
