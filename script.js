// === 全局变量 ===
let currentLang = 'zh';
let matrixCanvas, matrixCtx;
let particles = [];
let loadingProgress = 0;

// === 主初始化函数 ===
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // 按顺序初始化各个功能
    initMatrixBackground();
    initParticleSystem();
    initLoadingSequence();
    initNavigation();
    initScrollAnimations();
    initInteractiveEffects();
    initLanguageSystem();
    initTerminalEffect();
    
    console.log('🚀 SingularityX Evolution System Initialized');
}

// === Matrix雨背景效果 ===
function initMatrixBackground() {
    matrixCanvas = document.getElementById('matrixCanvas');
    if (!matrixCanvas) return;
    
    matrixCtx = matrixCanvas.getContext('2d');
    
    function resizeCanvas() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix效果参数
    const matrix = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ零界演化SingularityX";
    const matrixArray = matrix.split("");
    const fontSize = 14;
    const columns = matrixCanvas.width / fontSize;
    const drops = [];
    
    // 初始化雨滴
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        // 半透明黑色背景实现拖尾效果
        matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        // 设置文字样式
        matrixCtx.fillStyle = '#00f3ff';
        matrixCtx.font = fontSize + 'px monospace';
        
        // 绘制字符
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // 随机重置雨滴
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // 启动Matrix动画
    setInterval(drawMatrix, 35);
}

// === 粒子系统 ===
function initParticleSystem() {
    const particleSystem = document.getElementById('particleSystem');
    if (!particleSystem) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机位置和属性
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight + 10;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 4 + 4;
        const delay = Math.random() * 2;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        
        // 随机颜色
        const colors = ['#00f3ff', '#0080ff', '#00ffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 6px ${color}`;
        
        particleSystem.appendChild(particle);
        
        // 动画结束后移除
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + delay) * 1000);
    }
    
    // 持续创建粒子
    function startParticleGeneration() {
        createParticle();
        setTimeout(startParticleGeneration, Math.random() * 300 + 100);
    }
    
    // 延迟启动以避免加载时性能问题
    setTimeout(startParticleGeneration, 2000);
}

// === 加载序列 ===
function initLoadingSequence() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.querySelector('.progress-bar');
    const percentage = document.querySelector('.loading-percentage');
    
    if (!loadingScreen) return;
    
    // 模拟加载进度
    function updateProgress() {
        if (loadingProgress < 100) {
            loadingProgress += Math.random() * 3 + 1;
            if (loadingProgress > 100) loadingProgress = 100;
            
            if (progressBar) progressBar.style.width = loadingProgress + '%';
            if (percentage) percentage.textContent = Math.floor(loadingProgress) + '%';
            
            setTimeout(updateProgress, 50 + Math.random() * 100);
        } else {
            // 加载完成，开始退出动画
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                startMainAnimations();
                
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1500);
            }, 500);
        }
    }
    
    // 开始加载进度
    setTimeout(updateProgress, 500);
}

// === 主要动画启动 ===
function startMainAnimations() {
    // 显示主内容
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.classList.remove('hidden');
    }
    
    // 启动标题粒子效果
    animateTitleParticles();
    
    // 启动神经网络动画
    animateNeuralNetwork();
    
    // 启动全息显示动画
    animateHologramDisplay();
    
    // 触发滚动动画
    checkScrollAnimations();
}

// === 标题粒子动画 ===
function animateTitleParticles() {
    const titleParticles = document.querySelector('.title-particles');
    if (!titleParticles) return;
    
    function createTitleParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#00f3ff';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 6px #00f3ff';
        particle.style.pointerEvents = 'none';
        
        const x = Math.random() * titleParticles.offsetWidth;
        const y = Math.random() * titleParticles.offsetHeight;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        titleParticles.appendChild(particle);
        
        // 动画
        particle.animate([
            { opacity: 0, transform: 'scale(0)' },
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 2000,
            easing: 'ease-in-out'
        }).onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        };
    }
    
    // 持续创建标题粒子
    setInterval(createTitleParticle, 300);
}

// === 神经网络动画 ===
function animateNeuralNetwork() {
    const neuralNetwork = document.getElementById('neuralNetwork');
    if (!neuralNetwork) return;
    
    // 创建连接线动画
    function createConnection() {
        const connection = document.createElement('div');
        connection.style.position = 'absolute';
        connection.style.width = '2px';
        connection.style.height = Math.random() * 100 + 50 + 'px';
        connection.style.background = 'linear-gradient(to bottom, #00f3ff, transparent)';
        connection.style.left = Math.random() * 100 + '%';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.opacity = '0.6';
        connection.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        
        neuralNetwork.appendChild(connection);
        
        // 淡入淡出动画
        connection.animate([
            { opacity: 0 },
            { opacity: 0.6 },
            { opacity: 0 }
        ], {
            duration: 3000,
            easing: 'ease-in-out'
        }).onfinish = () => {
            if (connection.parentNode) {
                connection.parentNode.removeChild(connection);
            }
        };
    }
    
    // 持续创建连接
    setInterval(createConnection, 800);
}

// === 全息显示动画 ===
function animateHologramDisplay() {
    const hologramDisplay = document.querySelector('.hologram-display');
    if (!hologramDisplay) return;
    
    // 添加扫描线效果
    const scanLine = document.createElement('div');
    scanLine.style.position = 'absolute';
    scanLine.style.width = '100%';
    scanLine.style.height = '2px';
    scanLine.style.background = 'linear-gradient(90deg, transparent, #00f3ff, transparent)';
    scanLine.style.top = '0';
    scanLine.style.left = '0';
    scanLine.style.opacity = '0.8';
    
    hologramDisplay.appendChild(scanLine);
    
    // 扫描动画
    function animateScan() {
        scanLine.animate([
            { top: '0%' },
            { top: '100%' }
        ], {
            duration: 2000,
            easing: 'ease-in-out'
        }).onfinish = () => {
            setTimeout(animateScan, 1000);
        };
    }
    
    setTimeout(animateScan, 1000);
}

// === 导航系统 ===
function initNavigation() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    
    // 滚动时导航栏效果
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // 添加点击效果
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// === 滚动动画 ===
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .content-block, .culture-card, .career-card');
    
    function checkScrollAnimations() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', checkScrollAnimations);
    
    // 初始检查
    setTimeout(checkScrollAnimations, 100);
}

// === 交互效果 ===
function initInteractiveEffects() {
    // 按钮悬停效果增强
    document.querySelectorAll('.action-btn, .cyber-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
            this.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.5), 0 10px 30px rgba(0, 243, 255, 0.3)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        btn.addEventListener('click', function() {
            // 点击波纹效果
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.background = 'radial-gradient(circle, rgba(0, 243, 255, 0.6), transparent)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            ripple.animate([
                { transform: 'scale(0)', opacity: 1 },
                { transform: 'scale(2)', opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            };
        });
    });
    
    // 卡片悬停增强效果
    document.querySelectorAll('.culture-card, .career-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // 添加边框发光动画
            this.style.borderColor = '#00f3ff';
            this.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.3), 0 20px 40px rgba(0, 243, 255, 0.1)';
            
            // 内部元素动画
            const title = this.querySelector('.card-title');
            if (title) {
                title.style.textShadow = '0 0 10px #00f3ff';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
            
            const title = this.querySelector('.card-title');
            if (title) {
                title.style.textShadow = '';
            }
        });
    });
    
    // 鼠标跟随光效
    let mouseX = 0, mouseY = 0;
    let trail = [];
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 创建鼠标轨迹点
        const trailPoint = document.createElement('div');
        trailPoint.style.position = 'fixed';
        trailPoint.style.width = '4px';
        trailPoint.style.height = '4px';
        trailPoint.style.background = '#00f3ff';
        trailPoint.style.borderRadius = '50%';
        trailPoint.style.pointerEvents = 'none';
        trailPoint.style.zIndex = '9999';
        trailPoint.style.left = mouseX + 'px';
        trailPoint.style.top = mouseY + 'px';
        trailPoint.style.opacity = '0.8';
        trailPoint.style.transform = 'scale(1)';
        
        document.body.appendChild(trailPoint);
        
        // 淡出动画
        trailPoint.animate([
            { opacity: 0.8, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => {
            if (trailPoint.parentNode) {
                trailPoint.parentNode.removeChild(trailPoint);
            }
        };
    });
}

// === 语言系统 ===
function initLanguageSystem() {
    const languageToggle = document.getElementById('languageToggle');
    if (!languageToggle) return;
    
    languageToggle.addEventListener('click', function() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage();
        
        // 切换动画效果
        this.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
    
    function updateLanguage() {
        const elements = document.querySelectorAll('[data-zh][data-en]');
        elements.forEach(element => {
            const text = currentLang === 'zh' ? element.getAttribute('data-zh') : element.getAttribute('data-en');
            if (text) {
                element.textContent = text;
            }
        });
        
        // 更新文档语言属性
        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
        
        // 更新故障文字效果
        const glitchElements = document.querySelectorAll('.glitch-text');
        glitchElements.forEach(element => {
            const textAttr = currentLang === 'zh' ? 'data-text-zh' : 'data-text-en';
            const text = element.getAttribute(textAttr);
            if (text) {
                element.setAttribute('data-text', text);
                
                // 重新设置伪元素内容
                const beforeContent = currentLang === 'zh' ? element.getAttribute('data-zh') : element.getAttribute('data-en');
                if (beforeContent) {
                    const style = document.createElement('style');
                    style.textContent = `
                        .glitch-text::before,
                        .glitch-text::after {
                            content: "${beforeContent}";
                        }
                    `;
                    document.head.appendChild(style);
                    
                    // 清理旧样式
                    setTimeout(() => {
                        if (style.parentNode) {
                            style.parentNode.removeChild(style);
                        }
                    }, 100);
                }
            }
        });
        
        console.log(`Language switched to: ${currentLang}`);
    }
}

// === 终端效果 ===
function initTerminalEffect() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    if (terminalLines.length === 0) return;
    
    // 逐行显示终端内容
    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'fadeInUp 0.5s ease-out';
            
            // 如果是命令行，添加打字效果
            const command = line.querySelector('.command');
            if (command) {
                const text = command.textContent;
                command.textContent = '';
                
                let i = 0;
                const typeInterval = setInterval(() => {
                    command.textContent += text[i];
                    i++;
                    if (i >= text.length) {
                        clearInterval(typeInterval);
                    }
                }, 50);
            }
        }, index * 800);
    });
}

// === 性能优化 ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动性能
const checkScrollAnimations = debounce(() => {
    const animatedElements = document.querySelectorAll('.fade-in, .content-block, .culture-card, .career-card');
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}, 10);

// === 错误处理 ===
window.addEventListener('error', function(e) {
    console.error('SingularityX System Error:', e.error);
});

// === 窗口大小变化处理 ===
window.addEventListener('resize', debounce(() => {
    // 重新计算画布尺寸
    if (matrixCanvas) {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
    }
    
    // 重新检查动画
    checkScrollAnimations();
}, 250));

// === 页面可见性变化处理 ===
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // 页面重新可见时重启某些动画
        console.log('SingularityX System Resumed');
    } else {
        // 页面隐藏时暂停某些动画以节省资源
        console.log('SingularityX System Suspended');
    }
});

// === 导出全局函数（用于调试） ===
window.SingularityX = {
    currentLang,
    switchLanguage: () => document.getElementById('languageToggle').click(),
    restartAnimations: startMainAnimations,
    version: '1.0.0'
};

console.log('🌟 SingularityX Evolution - Advanced AI-Native Interface Loaded 🌟');
