// 职路通 - JavaScript

// 行业数据
const industries = [
    {
        id: "yunying-product",
        from: "运营",
        to: "产品经理",
        desc: "从用户运营、内容运营转岗产品经理，掌握产品设计、需求分析、用户研究等技能",
        tags: ["产品", "需求分析", "用户研究", "Axure"],
        linkCount: 24,
        modules: ["产品基础", "工具技能", "实战案例", "求职准备"]
    },
    {
        id: "sales-bd",
        from: "销售",
        to: "BD/客户成功",
        desc: "从销售转向业务拓展或客户成功，学习商务谈判、合作关系管理、客户运营",
        tags: ["商务", "谈判", "客户运营", "SaaS"],
        linkCount: 18,
        modules: ["商务基础", "谈判技巧", "客户运营", "行业知识"]
    },
    {
        id: "tech-manager",
        from: "技术",
        to: "技术管理",
        desc: "从技术岗转型技术管理/技术总监，学习团队管理、项目管理、技术规划",
        tags: ["管理", "团队", "项目管理", "架构"],
        linkCount: 21,
        modules: ["管理基础", "团队协作", "项目管理", "技术规划"]
    },
    {
        id: "traditional-internet",
        from: "传统行业",
        to: "互联网",
        desc: "从传统制造业、服务业转入互联网行业，掌握互联网思维、数字化技能",
        tags: ["互联网", "数字化", "数据分析", "产品"],
        linkCount: 32,
        modules: ["互联网思维", "基础技能", "岗位认知", "转型路径"]
    },
    {
        id: "retail-ecommerce",
        from: "线下零售",
        to: "电商运营",
        desc: "从线下门店/零售转型电商，学习电商平台运营、直播带货、私域运营",
        tags: ["电商", "直播", "私域", "供应链"],
        linkCount: 28,
        modules: ["平台运营", "内容营销", "私域运营", "供应链"]
    },
    {
        id: "hr-product",
        from: "HR",
        to: "产品经理",
        desc: "人力资源转产品经理，发挥用户洞察、数据分析优势",
        tags: ["产品", "数据分析", "用户研究", "需求分析"],
        linkCount: 19,
        modules: ["产品基础", "数据分析", "用户研究", "实战项目"]
    },
    {
        id: "design-product",
        from: "UI/UE设计",
        to: "产品经理",
        desc: "设计师转产品，发挥设计思维和用户体验优势",
        tags: ["产品", "设计思维", "用户体验", "交互"],
        linkCount: 16,
        modules: ["产品基础", "需求分析", "原型设计", "项目实战"]
    },
    {
        id: "support-sales",
        from: "客服/支持",
        to: "销售",
        desc: "从客服转型销售，将客户沟通经验转化为销售技能",
        tags: ["销售", "沟通", "客户心理", "成交"],
        linkCount: 15,
        modules: ["销售基础", "沟通技巧", "客户心理", "成交方法"]
    }
];

// 知识链接数据
const knowledgeLinks = {
    "yunying-product": {
        "产品基础": [
            {
                title: "产品经理入门指南",
                desc: "系统介绍产品经理的职责、核心能力模型、发展路径",
                url: "https://www.woshipm.com/pm/352.html",
                relevance: 10,
                quality: 9
            },
            {
                title: "产品经理知识体系",
                desc: "完整的产品经理能力图谱与学习路线",
                url: "https://www.huangwei.me/?p=1024",
                relevance: 10,
                quality: 9
            },
            {
                title: "人人都是产品经理",
                desc: "国内最经典的产品经理社区与知识库",
                url: "https://www.woshipm.com/",
                relevance: 10,
                quality: 8
            }
        ],
        "工具技能": [
            {
                title: "Axure入门教程",
                desc: "原型设计工具Axure系统学习教程",
                url: "https://www.axure.com.cn/",
                relevance: 9,
                quality: 9
            },
            {
                title: "Figma中文教程",
                desc: "现代UI设计工具Figma入门到精通",
                url: "https://www.figma.com.cn/resources/",
                relevance: 8,
                quality: 9
            },
            {
                title: "ProcessOn流程图",
                desc: "在线流程图工具，适合产品需求分析",
                url: "https://www.processon.com/",
                relevance: 9,
                quality: 8
            }
        ],
        "实战案例": [
            {
                title: "产品经理面试作品集",
                desc: "如何准备一份打动面试官的作品集",
                url: "https://www.woshipm.com/pm/3820.html",
                relevance: 10,
                quality: 9
            },
            {
                title: "完整产品案例分析",
                desc: "从0到1产品设计案例拆解",
                url: "https://www.huangwei.me/?p=1120",
                relevance: 9,
                quality: 8
            }
        ],
        "求职准备": [
            {
                title: "产品经理简历模板",
                desc: "PM简历撰写要点与模板参考",
                url: "https://www.woshipm.com/pm/3100.html",
                relevance: 10,
                quality: 8
            },
            {
                title: "产品经理面试题库",
                desc: "常见PM面试问题及回答思路",
                url: "https://www.woshipm.com/interview/",
                relevance: 9,
                quality: 8
            }
        ]
    },
    "sales-bd": {
        "商务基础": [
            {
                title: "BD入门指南",
                desc: "业务拓展岗位职责与核心能力",
                url: "https://www.36kr.com/p/1721241857",
                relevance: 10,
                quality: 8
            },
            {
                title: "商务合作模式解析",
                desc: "常见的商务合作模式与谈判策略",
                url: "https://www.36kr.com/p/1724201234",
                relevance: 9,
                quality: 8
            }
        ],
        "谈判技巧": [
            {
                title: "商务谈判技巧",
                desc: "高情商的商务谈判方法论",
                url: "https://www.36kr.com/p/1722345678",
                relevance: 9,
                quality: 9
            },
            {
                title: "谈判心理学",
                desc: "从心理学角度解析谈判技巧",
                url: "https://www.36kr.com/p/1712345678",
                relevance: 8,
                quality: 8
            }
        ],
        "客户运营": [
            {
                title: "客户成功体系",
                desc: "SaaS客户成功全流程管理",
                url: "https://www.36kr.com/p/1723456789",
                relevance: 9,
                quality: 8
            },
            {
                title: "客户分层运营",
                desc: "不同客户群体的运营策略",
                url: "https://www.36kr.com/p/1713456789",
                relevance: 8,
                quality: 7
            }
        ]
    },
    "tech-manager": {
        "管理基础": [
            {
                title: "技术管理101",
                desc: "从技术专家到管理者的转型指南",
                url: "https://www.36kr.com/p/1720000001",
                relevance: 10,
                quality: 9
            },
            {
                title: "技术管理者必读",
                desc: "技术团队管理核心要素与实践",
                url: "https://www.36kr.com/p/1720000002",
                relevance: 10,
                quality: 9
            }
        ],
        "团队协作": [
            {
                title: "敏捷团队管理",
                desc: "Scrum与敏捷开发团队管理",
                url: "https://www.36kr.com/p/1720000003",
                relevance: 9,
                quality: 8
            },
            {
                title: "技术面试官指南",
                desc: "如何搭建和技术面试体系",
                url: "https://www.36kr.com/p/1720000004",
                relevance: 8,
                quality: 8
            }
        ],
        "项目管理": [
            {
                title: "项目管理实战",
                desc: "技术项目全流程管理方法",
                url: "https://www.36kr.com/p/1720000005",
                relevance: 9,
                quality: 8
            },
            {
                title: "OKR在技术团队",
                desc: "技术团队OKR制定与落地",
                url: "https://www.36kr.com/p/1720000006",
                relevance: 8,
                quality: 7
            }
        ]
    },
    "traditional-internet": {
        "互联网思维": [
            {
                title: "互联网思维详解",
                desc: "什么是互联网思维？核心要素有哪些？",
                url: "https://www.36kr.com/p/1710000001",
                relevance: 10,
                quality: 9
            },
            {
                title: "数字化转型指南",
                desc: "传统行业数字化转型路径与方法",
                url: "https://www.36kr.com/p/1710000002",
                relevance: 10,
                quality: 8
            }
        ],
        "基础技能": [
            {
                title: "数据分析入门",
                desc: "Excel到Python数据分析学习路径",
                url: "https://www.36kr.com/p/1710000003",
                relevance: 9,
                quality: 9
            },
            {
                title: "SQL基础教程",
                desc: "数据库查询语言入门到实战",
                url: "https://www.36kr.com/p/1710000004",
                relevance: 9,
                quality: 8
            }
        ],
        "岗位认知": [
            {
                title: "互联网岗位全景图",
                desc: "产品、运营、技术、设计等岗位详解",
                url: "https://www.36kr.com/p/1710000005",
                relevance: 10,
                quality: 9
            },
            {
                title: "各岗位薪资与发展",
                desc: "互联网各岗位薪酬与成长路径",
                url: "https://www.36kr.com/p/1710000006",
                relevance: 9,
                quality: 8
            }
        ]
    },
    "retail-ecommerce": {
        "平台运营": [
            {
                title: "电商运营知识体系",
                desc: "淘宝、京东、拼多多运营核心技能",
                url: "https://www.36kr.com/p/1730000001",
                relevance: 10,
                quality: 9
            },
            {
                title: "京东运营指南",
                desc: "京东平台运营从入门到精通",
                url: "https://www.36kr.com/p/1730000002",
                relevance: 9,
                quality: 8
            }
        ],
        "内容营销": [
            {
                title: "直播带货全攻略",
                desc: "直播电商运营技巧与话术",
                url: "https://www.36kr.com/p/1730000003",
                relevance: 10,
                quality: 9
            },
            {
                title: "短视频运营",
                desc: "抖音、快手短视频内容运营",
                url: "https://www.36kr.com/p/1730000004",
                relevance: 9,
                quality: 8
            }
        ],
        "私域运营": [
            {
                title: "私域流量运营",
                desc: "企业微信、个人号私域变现",
                url: "https://www.36kr.com/p/1730000005",
                relevance: 10,
                quality: 9
            },
            {
                title: "社群运营实战",
                desc: "如何从0到1搭建高效社群",
                url: "https://www.36kr.com/p/1730000006",
                relevance: 9,
                quality: 8
            }
        ]
    },
    "hr-product": {
        "产品基础": [
            {
                title: "HR转产品优势分析",
                desc: "HR背景转产品经理的优势与路径",
                url: "https://www.woshipm.com/pm/4000.html",
                relevance: 10,
                quality: 9
            }
        ],
        "数据分析": [
            {
                title: "HR数据分析实战",
                desc: "用数据分析思维做产品分析",
                url: "https://www.36kr.com/p/1740000001",
                relevance: 9,
                quality: 8
            }
        ]
    },
    "design-product": {
        "产品基础": [
            {
                title: "设计师转产品指南",
                desc: "设计思维如何迁移到产品工作",
                url: "https://www.woshipm.com/pm/4100.html",
                relevance: 10,
                quality: 9
            }
        ],
        "交互设计": [
            {
                title: "交互设计基础",
                desc: "从UI设计到交互产品的进阶",
                url: "https://www.36kr.com/p/1740000002",
                relevance: 9,
                quality: 8
            }
        ]
    },
    "support-sales": {
        "销售基础": [
            {
                title: "客服转销售指南",
                desc: "将客服沟通经验转化为销售能力",
                url: "https://www.36kr.com/p/1750000001",
                relevance: 10,
                quality: 8
            }
        ],
        "沟通技巧": [
            {
                title: "销售沟通话术",
                desc: "高效沟通技巧与成交方法",
                url: "https://www.36kr.com/p/1750000002",
                relevance: 9,
                quality: 8
            }
        ]
    }
};

// DOM 元素
const industriesGrid = document.getElementById('industriesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchTags = document.getElementById('searchTags');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// 渲染行业卡片
function renderIndustries(data = industries) {
    industriesGrid.innerHTML = data.map(item => `
        <div class="industry-card" data-id="${item.id}">
            <h3>${item.from} <span class="arrow">→</span> ${item.to}</h3>
            <p class="desc">${item.desc}</p>
            <div class="meta">
                <span>📚 ${item.linkCount} 个知识链接</span>
                <span>📖 ${item.modules.length} 个模块</span>
            </div>
            <div style="margin-top: 12px;">
                ${item.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    // 添加点击事件
    document.querySelectorAll('.industry-card').forEach(card => {
        const open = () => {
            const id = card.dataset.id;
            openModal(id);
        };
        card.addEventListener('click', open);
        // 支持移动端触摸事件，提升触控响应
        card.addEventListener('touchstart', open);
    });
}

// 打开弹窗
function openModal(id) {
    const industry = industries.find(i => i.id === id);
    const links = knowledgeLinks[id];
    
    if (!industry || !links) return;
    
    let html = `
        <h2 style="margin-bottom: 10px;">${industry.from} → ${industry.to}</h2>
        <p style="color: var(--text-light); margin-bottom: 30px;">${industry.desc}</p>
    `;
    
    for (const [moduleName, moduleLinks] of Object.entries(links)) {
        html += `
            <div class="knowledge-section">
                <h4>${moduleName}</h4>
                <div class="link-list">
                    ${moduleLinks.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-item">
                            <div class="link-info">
                                <div class="link-title">${link.title}</div>
                                <div class="link-desc">${link.desc}</div>
                            </div>
                            <div class="link-scores">
                                <div class="score relevance">相关性 ${link.relevance}/10</div>
                                <div class="score quality">质量 ${link.quality}/10</div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 搜索功能
function handleSearch(query) {
    if (!query.trim()) {
        renderIndustries();
        return;
    }
    
    const filtered = industries.filter(item => {
        const searchText = `${item.from} ${item.to} ${item.desc} ${item.tags.join(' ')}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
    
    if (filtered.length === 0) {
        industriesGrid.innerHTML = `
            <div class="empty-state">
                <h3>未找到相关方向</h3>
                <p>试试其他关键词，或提交新的知识链接</p>
            </div>
        `;
    } else {
        renderIndustries(filtered);
    }
}

// 事件监听
searchBtn.addEventListener('click', () => {
    handleSearch(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch(searchInput.value);
    }
});

searchTags.addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
        // 移除其他激活状态
        document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        
        const filter = e.target.dataset.filter;
        handleSearch(filter);
    }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// 初始化
renderIndustries();
