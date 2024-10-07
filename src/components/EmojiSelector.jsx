import React, { useState } from "react";

const emojiCategories = {
  表情: [
    { emoji: "😃", name: "大眼笑脸" },
    { emoji: "😄", name: "微笑的眼睛" },
    { emoji: "😁", name: "灿烂的笑脸" },
    { emoji: "😆", name: "眯眼笑脸" },
    { emoji: "😅", name: "流汗的笑脸" },
    { emoji: "😂", name: "喜极而泣的脸" },
    { emoji: "🤣", name: "笑到滚地" },
    { emoji: "😊", name: "微笑的脸" },
    { emoji: "😇", name: "天使微笑" },
    { emoji: "🙂", name: "微微一笑" },
    { emoji: "🙃", name: "倒立的脸" },
    { emoji: "😉", name: "眨眼的脸" },
    { emoji: "😌", name: "松了一口气的脸" },
    { emoji: "😍", name: "心形眼的微笑" },
    { emoji: "😴", name: "睡觉的脸" },
    { emoji: "🤤", name: "流口水的脸" },
    { emoji: "😪", name: "困倦的脸" },
    { emoji: "😥", name: "悲伤但释然的脸" },
    { emoji: "😓", name: "流汗的失落脸" },
    { emoji: "🤗", name: "拥抱的脸" },
    { emoji: "🤔", name: "思考的脸" },
    { emoji: "🤭", name: "捂嘴的脸" },
    { emoji: "😶", name: "没有嘴的脸" },
    { emoji: "😐", name: "中性脸" },
    { emoji: "😑", name: "无表情的脸" },
    { emoji: "😏", name: "得意的脸" },
    { emoji: "😒", name: "不屑的脸" },
    { emoji: "🤨", name: "挑眉的脸" },
    { emoji: "😞", name: "失望的脸" },
    { emoji: "😔", name: "沉思的脸" },
    { emoji: "😟", name: "担忧的脸" },
    { emoji: "😕", name: "困惑的脸" },
    { emoji: "🙁", name: "微微皱眉的脸" },
    { emoji: "🧐", name: "戴单片眼镜的脸" },
  ],
  手势: [
    { emoji: "👋", name: "挥手" },
    { emoji: "🤚", name: "举起手背" },
    { emoji: "🖐", name: "手指张开" },
    { emoji: "✋", name: "举手" },
    { emoji: "🖖", name: "瓦肯礼" },
    { emoji: "👌", name: "OK手势" },
    { emoji: "🤏", name: "捏手势" },
    { emoji: "✌️", name: "胜利手势" },
    { emoji: "🤞", name: "交叉手指" },
    { emoji: "🤟", name: "爱你手势" },
    { emoji: "🤘", name: "角度手势" },
    { emoji: "🤙", name: "打电话手势" },
    { emoji: "👈", name: "左指手势" },
    { emoji: "👉", name: "右指手势" },
    { emoji: "👆", name: "上指手势" },
    { emoji: "🖕", name: "中指" },
    { emoji: "👇", name: "下指手势" },
    { emoji: "☝️", name: "上指手势" },
    { emoji: "👍", name: "点赞" },
    { emoji: "👎", name: "点踩" },
    { emoji: "✊", name: "举拳" },
    { emoji: "👊", name: "迎面拳" },
    { emoji: "🤛", name: "左拳" },
    { emoji: "🤜", name: "右拳" },
    { emoji: "👏", name: "鼓掌" },
    { emoji: "👐", name: "张开双手" },
  ],
  办公用品: [
    { emoji: "💻", name: "笔记本电脑" },
    { emoji: "📱", name: "手机" },
    { emoji: "⌨️", name: "键盘" },
    { emoji: "🖥", name: "台式电脑" },
    { emoji: "🖨", name: "打印机" },
    { emoji: "🖱", name: "电脑鼠标" },
    { emoji: "🖲", name: "轨迹球" },
    { emoji: "💽", name: "电脑磁盘" },
    { emoji: "💾", name: "软盘" },
    { emoji: "💿", name: "光盘" },
    { emoji: "📀", name: "DVD" },
    { emoji: "🧮", name: "算盘" },
    { emoji: "🎥", name: "电影摄像机" },
    { emoji: "📺", name: "电视" },
    { emoji: "📷", name: "相机" },
    { emoji: "", name: "带闪光灯的相机" },
    { emoji: "📹", name: "摄像机" },
    { emoji: "🎞", name: "胶" },
    { emoji: "📽", name: "放映机" },
    { emoji: "🎬", name: "电影板" },
    { emoji: "📟", name: "寻呼机" },
    { emoji: "📠", name: "传真机" },
    { emoji: "📻", name: "收音机" },
    { emoji: "🎙", name: "录音麦克风" },
    { emoji: "🎚", name: "音量滑块" },
    { emoji: "🎛", name: "控制旋钮" },
    { emoji: "🧭", name: "指南针" },
    { emoji: "⏱", name: "秒表" },
    { emoji: "⏲", name: "定时器" },
    { emoji: "⏰", name: "闹钟" },
    { emoji: "🔋", name: "电池" },
    { emoji: "🪔", name: "油灯" },
    { emoji: "🪑", name: "椅子" },
    { emoji: "🖍", name: "蜡笔" },
    { emoji: "🖌", name: "画笔" },
    { emoji: "✒️", name: "黑色笔尖" },
    { emoji: "🖋", name: "钢笔" },
    { emoji: "🖊", name: "圆珠笔" },
    { emoji: "🖉", name: "铅笔" },
    { emoji: "🧷", name: "安全别针" },
    { emoji: "📎", name: "回形针" },
    { emoji: "🖇", name: "连环回形针" },
    { emoji: "📌", name: "大头针" },
    { emoji: "📍", name: "圆头针" },
    { emoji: "🎴", name: "花牌" },
    { emoji: "🗑", name: "垃圾桶" },
    { emoji: "📢", name: "扬声器" },
    { emoji: "🔔", name: "铃铛" },
    { emoji: "🛎", name: "服务铃" },
    { emoji: "🖼", name: "框架画" },
    { emoji: "🎨", name: "调色板" },
    { emoji: "✏️", name: "铅笔" },
    { emoji: "📝", name: "备忘录" },
    { emoji: "📒", name: "账本" },
    { emoji: "📔", name: "装饰封面的笔记本" },
    { emoji: "📕", name: "闭合的书" },
    { emoji: "📓", name: "笔记本" },
    { emoji: "📗", name: "绿色书" },
    { emoji: "📘", name: "蓝色书" },
    { emoji: "📙", name: "橙色书" },
    { emoji: "📚", name: "书籍" },
    { emoji: "📖", name: "打开的书" },
    { emoji: "🔖", name: "书签" },
    { emoji: "🏷", name: "标签" },
    { emoji: "📄", name: "向上翻的页面" },
    { emoji: "📃", name: "卷曲的页面" },
    { emoji: "📋", name: "剪贴板" },
    { emoji: "🗞", name: "卷报纸" },
    { emoji: "📰", name: "报纸" },
    { emoji: "📁", name: "文件夹" },
    { emoji: "📂", name: "打开的文件夹" },
    { emoji: "🗂", name: "卡片索引分隔符" },
    { emoji: "📅", name: "日历" },
    { emoji: "📆", name: "撕下日历" },
    { emoji: "🗒", name: "螺旋记事本" },
    { emoji: "🗓", name: "螺旋日历" },
    { emoji: "📇", name: "卡片索引" },
    { emoji: "📈", name: "图表上升" },
    { emoji: "📉", name: "图表下降" },
    { emoji: "📊", name: "柱状图" },
    { emoji: "📏", name: "直尺" },
    { emoji: "📐", name: "三角尺" },
    { emoji: "✂️", name: "剪刀" },
    { emoji: "🗃", name: "卡片文件箱" },
    { emoji: "🗄", name: "文件柜" },
    { emoji: "🔒", name: "锁定" },
    { emoji: "🔓", name: "解锁" },
    { emoji: "🔏", name: "带笔的锁" },
    { emoji: "🔐", name: "带钥匙的锁" },
    { emoji: "🔑", name: "钥匙" },
    { emoji: "🗝", name: "旧钥匙" },
    { emoji: "🔨", name: "锤子" },
    { emoji: "🪓", name: "斧头" },
    { emoji: "⛏", name: "镐" },
    { emoji: "⚒", name: "锤子和镐" },
    { emoji: "🛠", name: "锤子和扳手" },
    { emoji: "🗡", name: "匕首" },
    { emoji: "⚔", name: "交叉剑" },
    { emoji: "🔫", name: "水枪" },
    { emoji: "🪃", name: "回旋镖" },
    { emoji: "🏹", name: "弓箭" },
    { emoji: "🛡", name: "盾牌" },
    { emoji: "🔧", name: "扳手" },
    { emoji: "🔩", name: "螺母和螺栓" },
    { emoji: "⚙", name: "齿轮" },
    { emoji: "🗜", name: "夹具" },
    { emoji: "⚖", name: "天平" },
    { emoji: "🔗", name: "链条" },
    { emoji: "⛓", name: "链子" },
    { emoji: "🪝", name: "钩子" },
    { emoji: "", name: "工具箱" },
    { emoji: "🧲", name: "磁铁" },
    { emoji: "⚗", name: "蒸馏器" },
    { emoji: "🧪", name: "试管" },
    { emoji: "🧫", name: "培养皿" },
    { emoji: "🧬", name: "DNA" },
    { emoji: "🔬", name: "显微镜" },
    { emoji: "🔭", name: "望远镜" },
    { emoji: "📡", name: "卫星天线" },
    { emoji: "💉", name: "注射器" },
    { emoji: "🩸", name: "血滴" },
    { emoji: "💊", name: "药丸" },
    { emoji: "🩹", name: "创可贴" },
    { emoji: "🩺", name: "听诊器" },
    { emoji: "🔮", name: "水晶球" },
    { emoji: "🕳", name: "洞" },
    { emoji: "🪞", name: "镜子" },
    { emoji: "🪟", name: "窗户" },
    { emoji: "🚪", name: "门" },
    { emoji: "🛗", name: "电梯" },
    { emoji: "🚽", name: "厕所" },
    { emoji: "🪠", name: "马桶吸" },
    { emoji: "🚿", name: "淋浴" },
    { emoji: "🛁", name: "浴缸" },
    { emoji: "🛋", name: "沙发和灯" },
    { emoji: "🛌", name: "床" },
    { emoji: "🧻", name: "卷纸" },
    { emoji: "🧸", name: "泰迪熊" },
    { emoji: "🪥", name: "牙刷" },
    { emoji: "🪒", name: "剃须刀" },
  ],
  符号: [
    { emoji: "✅", name: "对勾" },
    { emoji: "❌", name: "叉号" },
    { emoji: "❎", name: "叉号按钮" },
    { emoji: "©", name: "版权" },
    { emoji: "™", name: "商标" },
    { emoji: "⌛", name: "沙漏完成" },
    { emoji: "⏳", name: "沙漏未完成" },
    { emoji: "👀", name: "眼睛" },
    { emoji: "💫", name: "眩晕" },
    { emoji: "💯", name: "百分之百" },
    { emoji: "👇", name: "下指手势" },
    { emoji: "👆", name: "上指手势" },
    { emoji: "👉", name: "右指手势" },
    { emoji: "👈", name: "左指手势" },
    { emoji: "🚀", name: "火箭" },
    { emoji: "🤖️", name: "机器人" },
    { emoji: "⚡️", name: "高压" },
    { emoji: "🔥", name: "火" },
    { emoji: "🎉", name: "派对炮" },
    { emoji: "✨", name: "闪光" },
    { emoji: "🎨", name: "调色板" },
    { emoji: "🧠", name: "大脑" },
    { emoji: "💰", name: "钱袋" },
    { emoji: "💡", name: "灯泡" },
    { emoji: "👋", name: "挥手" },
    { emoji: "🔴", name: "红色圆圈" },
    { emoji: "🟠", name: "橙色圆圈" },
    { emoji: "🟡", name: "黄色圆圈" },
    { emoji: "🟢", name: "绿色圆圈" },
    { emoji: "🔵", name: "蓝色圆圈" },
    { emoji: "🟣", name: "紫色圆圈" },
    { emoji: "🟤", name: "棕色圆圈" },
    { emoji: "⚫", name: "黑色圆圈" },
    { emoji: "⚪", name: "白色圆圈" },
    { emoji: "🟥", name: "红色方块" },
    { emoji: "🟧", name: "橙色方块" },
    { emoji: "🟨", name: "黄色方块" },
    { emoji: "🟩", name: "绿色方块" },
    { emoji: "🟦", name: "蓝色方块" },
    { emoji: "🟪", name: "紫色方块" },
    { emoji: "🟫", name: "棕色方块" },
    { emoji: "⬛", name: "黑色方块" },
    { emoji: "⬜", name: "白色方块" },
    { emoji: "🏴", name: "英格兰国旗" },
    { emoji: "🏴", name: "苏格兰国旗" },
    { emoji: "🏴", name: "威尔士国旗" },
    { emoji: "0️⃣", name: "数字键0" },
    { emoji: "1️⃣", name: "数字键1" },
    { emoji: "2️⃣", name: "数字键2" },
    { emoji: "3️⃣", name: "数字键3" },
    { emoji: "4️⃣", name: "数字键4" },
    { emoji: "5️⃣", name: "数字键5" },
    { emoji: "6️⃣", name: "数字键6" },
    { emoji: "7️⃣", name: "数字键7" },
    { emoji: "8️⃣", name: "数字键8" },
    { emoji: "9️⃣", name: "数字键9" },
    { emoji: "🔟", name: "数字键10" },
    { emoji: "#️⃣", name: "数字键井号" },
    { emoji: "*️⃣", name: "数字键星号" },
    { emoji: "✖️", name: "乘号" },
    { emoji: "➕", name: "加号" },
    { emoji: "➖", name: "减号" },
    { emoji: "➗", name: "除号" },
    { emoji: "❓", name: "问号" },
    { emoji: "❔", name: "白色问号" },
    { emoji: "⭕", name: "空心红圈" },
    { emoji: "♀️", name: "女性符号" },
    { emoji: "♂️", name: "男性符号" },
    { emoji: "⚧", name: "跨性别符号" },
    { emoji: "⚕", name: "医疗符号" },
    { emoji: "♻️", name: "回收符号" },
    { emoji: "➰", name: "卷曲环" },
    { emoji: "🔰", name: "日本初学者符号" },
    { emoji: "⚜", name: "百合花" },
    { emoji: "🔱", name: "三叉戟徽章" },
    { emoji: "🚸", name: "儿童过马路" },
    { emoji: "⚑", name: "飘扬的旗帜" },
    { emoji: "⚐", name: "白旗" },
    { emoji: "🏳️", name: "白旗" },
    { emoji: "🏴", name: "黑旗" },
    { emoji: "🏁", name: "棋盘旗" },
    { emoji: "🚩", name: "三角旗" },
    { emoji: "🏳️‍🌈", name: "彩虹旗" },
    { emoji: "🏳️‍⚧️", name: "跨性别旗" },
    { emoji: "🏴‍☠️", name: "海盗旗" },
    { emoji: "🇺🇳", name: "联合国旗" },
  ],
  程序: [
    { emoji: "💻", name: "电脑" },
    { emoji: "📱", name: "手机" },
    { emoji: "💡", name: "灯泡" },
    { emoji: "🔌", name: "插头" },
    { emoji: "🔋", name: "电池" },
    { emoji: "🐜", name: "虫子" },
    { emoji: "🔧", name: "扳手" },
    { emoji: "🔍", name: "放大镜" },
    { emoji: "🚀", name: "火箭" },
    { emoji: "📦", name: "包" },
    { emoji: "🛠️", name: "工具" },
    { emoji: "⚙️", name: "齿轮" },
    { emoji: "📝", name: "记事本" },
    { emoji: "🌐", name: "地球" },
    { emoji: "🖥️", name: "台式电脑" },
    { emoji: "📊", name: "条形图" },
    { emoji: "🤖", name: "机器人" },
    { emoji: "✨", name: "星星" },
    { emoji: "🖥", name: "台式电脑" },
    { emoji: "📱", name: "手机" },
    { emoji: "🖱", name: "鼠标" },
    { emoji: "⌨️", name: "键盘" },
    { emoji: "🖨", name: "打印机" },
    { emoji: "🧑‍💻", name: "程序员" },
    { emoji: "🧑‍🎤", name: "音乐家" },
    { emoji: "🧑‍🎨", name: "艺术家" },
    { emoji: "🧑‍🔧", name: "工程师" },
    { emoji: "📊", name: "图表" },
    { emoji: "📈", name: "上升的图表" },
    { emoji: "📉", name: "下降的图表" },
    { emoji: "🔧", name: "扳手" },
    { emoji: "🔌", name: "插头" },
    { emoji: "⚙️", name: "齿轮" },
    { emoji: "🗂", name: "文件夹" },
    { emoji: "🗃", name: "档案箱" },
    { emoji: "🖥️", name: "显示器" },
    { emoji: "🧪", name: "试管" },
    { emoji: "🔬", name: "显微镜" },
    { emoji: "🔭", name: "望远镜" },
    { emoji: "🧬", name: "DNA" },
    { emoji: "💡", name: "灯泡" },
    { emoji: "🔒", name: "锁" },
    { emoji: "🔑", name: "钥匙" },
    { emoji: "🧲", name: "磁铁" },
  ],
  "SVG 图标": [
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z" fill="currentColor"></path></svg>',
      name: "箭头图标",
    },
    {
      svg: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>',
      name: "向上（折叠）图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="secondary-svg h-4 w-4"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 10-4 0v4H5.438a2 2 0 00-1.998 1.906l-.5 6A2 2 0 005.43 18h.536C6.358 18 6.68 17.672 6.68 17.28v-6.947a1 1 0 00-.212-.613L4.53 6.55A1 1 0 015.369 5h3.49a1 1 0 01.876.5l1.143 2A1 1 0 0110 8v10a1 1 0 11-2 0v-5.667a1 1 0 00-.883-.994L6 11.167V10.5a1.5 1.5 0 00-1.5-1.5H3.75a.75.75 0 01-.75-.75z"></path></svg>',
      name: "Like图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="secondary-svg h-4 w-4"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path></svg>',
      name: "Diss图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="mr-1 secondary-svg"><path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',
      name: "Reply图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><mask id="b9c5a" fill="#fff"><path fill-rule="evenodd" d="M19 2a3 3 0 0 1 3 3v15.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" clip-rule="evenodd"></path></mask><path fill="#1A1A1A" d="m19.441 21.868 1.2-1.204zM15.56 18v-1.7h.702l.498.496zM20.3 5A1.3 1.3 0 0 0 19 3.7V.3A4.7 4.7 0 0 1 23.7 5zm0 8.956V5h3.4v8.956zm0 2.544v-2.544h3.4V16.5zm0 4.306V16.5h3.4v4.306zm.341-.142a.23.23 0 0 0-.218-.043.23.23 0 0 0-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267zm-3.882-3.868 3.882 3.868-2.4 2.409-3.882-3.869zM5 16.3h10.559v3.4H5zM3.7 15A1.3 1.3 0 0 0 5 16.3v3.4A4.7 4.7 0 0 1 .3 15zm0-10v10H.3V5zM5 3.7A1.3 1.3 0 0 0 3.7 5H.3A4.7 4.7 0 0 1 5 .3zm14 0H5V.3h14z" class="0cdf8a0bfill" mask="url(#b9c5a)"></path><path fill="#1A1A1A" fill-rule="evenodd" d="M17 7a.85.85 0 0 1 0 1.7H7A.85.85 0 1 1 7 7zm-5 4a.85.85 0 0 1 0 1.7H7A.85.85 0 0 1 7 11z" class="0cdf8a0bfill" clip-rule="evenodd"></path></svg>',
      name: "消息小图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 secondary-svg"><path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"></path><path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"></path></svg>',
      name: "第二个消息小图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      name: "地球图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
      name: "月亮图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
      name: "太阳图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
      name: "菜单图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
      name: "外部链接图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
      name: "断开链接图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V1.80687C10.6922 2.0935 12.8167 4.28012 13.0068 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H12.9888C12.7094 10.6244 10.6244 12.7094 8 12.9888V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.0068C4.28012 12.8167 2.0935 10.6922 1.80687 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H1.78886C1.98376 4.21166 4.21166 1.98376 7 1.78886V0.5C7 0.223858 7.22386 0 7.5 0ZM8 12.0322V9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5V12.0322C5.02684 11.7661 3.40432 10.3060 3.0978 8.5H4.5C4.77614 8.5 5 8.27614 5 8C5 7.72386 4.77614 7.5 4.5 7.5H3.09781C3.4043 5.69402 5.02687 4.23391 7 3.96778V5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5V3.96778C9.97313 4.23391 11.5957 5.69402 11.9022 7.5H10.5C10.2239 7.5 10 7.72386 10 8C10 8.27614 10.2239 8.5 10.5 8.5H11.9022C11.5957 10.3060 9.97316 11.7661 8 12.0322Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>',
      name: "定位图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" /></svg>',
      name: "搜索图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clip-rule="evenodd" /></svg>',
      name: "分享图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" /></svg>',
      name: "编辑图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" /></svg>',
      name: "关闭图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" /></svg>',
      name: "添加图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" /></svg>',
      name: "勾选图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" /></svg>',
      name: "更多操作图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" /></svg>',
      name: "搜索图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 secondary-svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"></path></svg>',
      name: "消息图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
      name: "主页图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79l6 6 1.5-1.5-6-6zM10 17a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/></svg>',
      name: "搜索图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm8-6.5V5h-2.5l-1-2H7.5L6.5 3H4v2.5l1 1.5H2v2h3.5l1 1.5H2v2h3.5l1 1.5H2v2h3.5l1 1.5H4v2h2.5l1-2h8.5l1 2H20v-2.5l-1-1.5h3v-2h-3.5l-1-1.5H20z"/></svg>',
      name: "设置图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-6.25 0-10 3.13-10 7v1h20v-1c0-3.87-3.75-7-10-7z"/></svg>',
      name: "用户图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
      name: "心形图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.77L12 2 10.19 8.47 1 9.24l5.46 4.73L5.82 21z"/></svg>',
      name: "星形图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  viewBox="0 0 24 24" width="24" height="24"><path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V10a6 6 0 0 0-12 0v6l-2 2h16l-2-2z"/></svg>',
      name: "提醒图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  viewBox="0 0 24 24" width="24" height="24"><path d="M3 6h18v2H3zm2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8H5zm3 2h2v8H8zm4 0h2v8h-2z"/></svg>',
      name: "垃圾桶图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M3 17.25V21h3.75l11.7-11.7-3.75-3.75L3 17.25zm15.6-10.6l1.4 1.4-3.75 3.75-1.4-1.4 3.75-3.75z"/></svg>',
      name: "编辑图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19 9h-4V4h-6v5H5l7 7 7-7zm0 18H5V8h14v13z"/></svg>',
      name: "下载图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19 9h-4V4h-6v5H5l7 7 7-7zm0 18H5V8h14v13z"/></svg>',
      name: "上传图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  viewBox="0 0 24 24" width="24" height="24"><path d="M17 8h-1V6a5 5 0 0 0-10 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-5 12a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2zm-1-10V6a3 3 0 0 1 6 0v2h-6z"/></svg>',
      name: "锁定图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  viewBox="0 0 24 24" width="24" height="24"><path d="M17 8h-1V6a5 5 0 0 0-10 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-5 12a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2zm-1-10V6a3 3 0 0 1 6 0v2h-6z"/></svg>',
      name: "解锁图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  viewBox="0 0 24 24" width="24" height="24"><path d="M12 2a2 2 0 0 0-2 2v2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2h-4zm0 4h4v2h-4V6zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"/></svg>',
      name: "相机图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  viewBox="0 0 24 24" width="24" height="24"><path d="M21 6h-2.586l-1.707-1.707A2 2 0 0 0 16 4H8a2 2 0 0 0-1.414.586L4.586 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.586l1.707 1.707A2 2 0 0 0 8 20h8a2 2 0 0 0 1.414-.586L20.414 18H21a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/></svg>',
      name: "聊天图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  viewBox="0 0 24 24" width="24" height="24"><path d="M19 3h-2v2h-6V3H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 18H5V8h14v13z"/></svg>',
      name: "日历图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2a2 2 0 0 0-2 2v2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2h-4zm0 4h4v2h-4V6zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"/></svg>',
      name: "文件图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M10 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-6l-2-2H4zm0 2l6 4h-6V6z"/></svg>',
      name: "文件夹图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19 3h-2l-1-1H8L7 3H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 18H5V5h2l1-1h8l1 1h2v16z"/></svg>',
      name: "地图图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M18 16.08A4.992 4.992 0 0 0 20 12a4.992 4.992 0 0 0-2-4.08V8h-2V4h-2v4h-2v2h2v2.08A4.992 4.992 0 0 0 12 20a4.992 4.992 0 0 0 4-1.92V20h2v-4h2v-2h-2v-1.92z"/></svg>',
      name: "分享图标",
    },
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M10 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10h-2v10H4V6h6V4zm10 0h-6v2h6v2h2V4h-2zM10 10H8v2h2v-2zm0 4H8v2h2v-2zm4-4h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>',
      name: "超链接图标",
    },
    // 也可以添加对话图标
    {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M21 6h-6.586l-1-1H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l6-6zm-3 12H6V8h12v10z"/></svg>',
      name: "对话图标",
    },
  ],
};

const EmojiSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("表情");
  const [selectedItem, setSelectedItem] = useState(emojiCategories["表情"][0]);
  const [svgSize, setSvgSize] = useState(24);
  const [svgColor, setSvgColor] = useState("#000000"); // 新增颜色状态

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedItem(emojiCategories[category][0]);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleCopy = () => {
    const textToCopy = selectedItem.emoji || selectedItem.svg;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <h1>Emoji 和 SVG 图标选择器</h1>

      <div className="category-selector">
        {Object.keys(emojiCategories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="emoji-grid">
        {emojiCategories[selectedCategory].map((item, index) => (
          <button
            key={index}
            className="emoji-button"
            onClick={() => handleItemSelect(item)}
            dangerouslySetInnerHTML={{ __html: item.emoji || item.svg }}
          />
        ))}
      </div>
      <div className="selected-item">
        <h2>选择图标</h2>
        {selectedItem.emoji ? (
          <span style={{ fontSize: `${svgSize}px` }}>{selectedItem.emoji}</span>
        ) : (
          <>
            {/* 新增颜色选择器 */}
            <div className="color-picker">
              <label htmlFor="color">选择颜色:&nbsp;</label>
              <input
                type="color"
                id="color"
                value={svgColor}
                onChange={(e) => setSvgColor(e.target.value)}
              />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedItem.svg.replace(/currentColor/g, svgColor), // 替换颜色
              }}
              style={{ width: `${svgSize}px`, height: `${svgSize}px` }}
            />
          </>
        )}
        <p>{selectedItem.name}</p>
      </div>
      <div className="controls">
        <input
          type="number"
          value={svgSize}
          onChange={(e) => setSvgSize(e.target.value)}
          min="10"
          max="100"
        />
        <button onClick={handleCopy}>复制到剪贴板</button>
      </div>
    </div>
  );
};

export default EmojiSelector;
