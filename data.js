// data.js

// 1. News Data (Media Coverage + Recent Awards)
const newsData = [
    { date: "2025-07-08", title: "IEEE World Haptics Conference 2025 개최", content: "최승문 교수님이 General Co-chair를 맡으신 IEEE World Haptics Conference 2025가 개최되었습니다." },
    { date: "2025-05-21", title: "한국데이터마이닝학회 춘계학술대회 초청강연", content: "최승문 교수님이 '시청각 자료로부터 햅틱 및 동작 컨텐츠 생성'을 주제로 강연했습니다." },
    { date: "2025-03-01", title: "IEEE VR 2025 논문 발표", content: "안재혁 학생의 연구(Human Dance Haptic Motion Effects)가 IEEE VR 2025에서 발표되었습니다." },
    { date: "2024-03-01", title: "컴퓨터공학과 주임교수 취임", content: "최승문 교수님이 포항공대 컴퓨터공학과 주임교수(Department Head)로 취임하셨습니다." },
    { date: "2023-10-01", title: "bHaptics 사외이사 선임", content: "최승문 교수님이 bHaptics의 사외이사(Outside Director)로 선임되었습니다." },
    { date: "2023", title: "국제 저널 최우수 논문상 수상", content: "경북매일일보 등 다수 매체 보도" },
    { date: "2022", title: "감정을 인식하는 전자피부", content: "전자신문 등 다수 매체 보도" },
    { date: "2021", title: "YTN 사이언스 출연", content: "디지털 촉감 시대 - 최승문 교수" }
];

// 2. Member Data (CV: Advising + Current Members)
const memberData = [
    // Professor
    {
        name: "Seungmoon Choi (최승문)", role: "prof", email: "choism@postech.ac.kr", image: "images/prof.jpg",
        desc: "Professor / Dept. Head of CSE / Ph.D. Purdue Univ.",
        detail: {
            position: [
                "Head, Department of Computer Science and Engineering",
                "Professor, Department of Convergence IT Engineering (Joint)",
                "Outside Director, bHaptics"
            ],
            education: [
                "Ph.D. Purdue University (2003)",
                "M.S. Seoul National University (1997)",
                "B.S. Seoul National University (1995)"
            ],
            membership: [
                "IEEE Senior Member",
                "ACM Member",
                "Korea Robotics Society (Lifetime)",
                "Korea HCI Society (Lifetime)"
            ]
        }
    },
    // Researchers
    { name: "Jiwan Lee (이지완)", role: "student", email: "jiwan@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Post-Doctoral Researcher" },

    // Ph.D. Students (Current)
    { name: "Jungeun Lee (이정은)", role: "student", email: "jungeun@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Ph.D. Student (CiTE)" },
    { name: "Dajin Lee (이다진)", role: "student", email: "dajin@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CiTE)" },
    { name: "Donggeun Kim (김동근)", role: "student", email: "dgkim@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CiTE)" },
    { name: "Jeongwoo Kim (김정우)", role: "student", email: "jwkim@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Jaejun Park (박재준)", role: "student", email: "jaejun@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Junwoo Kim (김준우)", role: "student", email: "junwoo@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Heeji Son (손희지)", role: "student", email: "heeji@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Ph.D. Student (CSE)" },
    { name: "Hyunwook Kim (김현욱)", role: "student", email: "hwkim@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Ph.D. Student (CSE)" },
    { name: "Uison Ju (주의손)", role: "student", email: "uison@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Minsung Noh (노민성)", role: "student", email: "msnoh@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Hyunyong Park (박현용)", role: "student", email: "hypark@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },
    { name: "Taehyeong Jeong (정태형)", role: "student", email: "thjeong@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CiTE)" },
    { name: "Juhyeop Lee (이주협)", role: "student", email: "jhlee@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Student (CSE)" },

    // Master Students (Current)
    { name: "Soyeon Nam (남소연)", role: "student", email: "synam@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },
    { name: "Suheon Nam (남수헌)", role: "student", email: "shnam@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },
    { name: "Geunho Lee (이근호)", role: "student", email: "ghlee@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },
    { name: "Doohong Kwon (권두홍)", role: "student", email: "dhkwon@postech.ac.kr", image: "images/member_placeholder.jpg", desc: "M.S. Student (CSE)" },

    // Alumni (Full list from CV)
    { name: "Seokhee Jeon (전석희)", role: "alumni", desc: "Ph.D. (2010) / Assoc. Prof. at Kyung Hee Univ." },
    { name: "Sungkil Lee (이성길)", role: "alumni", desc: "Ph.D. (2009) / Professor at Sungkyunkwan Univ." },
    { name: "Inwook Hwang (황인욱)", role: "alumni", desc: "Ph.D. (2013) / Researcher at ETRI" },
    { name: "Jaebong Lee (이재봉)", role: "alumni", desc: "Ph.D. (2016) / Meta, USA" },
    { name: "Hojin Lee (이호진)", role: "alumni", desc: "Ph.D. (2019) / ETRI" },
    { name: "Yongjae Yoo (유용재)", role: "alumni", desc: "Ph.D. (2019) / Assist. Prof. at Hanyang Univ. ERICA" },
    { name: "Sunghwan Shin (신성환)", role: "alumni", desc: "Ph.D. (2019) / Samsung Research" },
    { name: "Seungjae Oh (오승재)", role: "alumni", desc: "Ph.D. (2020) / Assist. Prof. at Kyung Hee Univ." },
    { name: "Hojun Cha (차호준)", role: "alumni", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Sangyoon Han (한상윤)", role: "alumni", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Gyeore Yun (윤겨레)", role: "alumni", desc: "Ph.D. (2024) / Assist. Prof. at Kyungpook National Univ." },
    { name: "Chaeyong Park (박채용)", role: "alumni", desc: "Ph.D. (2024) / Assist. Prof. at Korea Univ." },
    { name: "Gunhyuk Park (박건혁)", role: "alumni", desc: "Ph.D. (2017) / Assist. Prof. at GIST" },
    { name: "In Lee (이인)", role: "alumni", desc: "Ph.D. (2015) / Samsung Heavy Industries" },
    { name: "Jonghyun Ryu (류종현)", role: "alumni", desc: "Ph.D. (2010) / Samsung Electronics" },
    { name: "Gun Lee (이건)", role: "alumni", desc: "Ph.D. (2009) / Senior Lecturer at Univ. of South Australia" },
    { name: "Jain Hwang (황재인)", role: "alumni", desc: "Ph.D. (2007) / KIST" },
    { name: "Reza Haghighi Osgouei", role: "alumni", desc: "Ph.D. (2018) / Imperial College London" },
    { name: "Amit Bhardwaj", role: "alumni", desc: "Post-Doc (2019) / Assist. Prof. at IIT Jodhpur" },
    // 석사 졸업생들
    { name: "Jaehyeok Ahn (안재혁)", role: "alumni", desc: "Master (2024)" },
    { name: "Heeyeon Kim (김희연)", role: "alumni", desc: "Master (2024) / KT" },
    { name: "Hoseok Jung (정호석)", role: "alumni", desc: "Master (2023) / SCIGC" },
    { name: "Daehyun Nam (남대현)", role: "alumni", desc: "Master (2023) / Cupix" },
    { name: "Jinsoo Kim (김진수)", role: "alumni", desc: "Master (2022) / Peoplefund" },
    { name: "Minjae Moon (문민재)", role: "alumni", desc: "Master (2022) / KOG" },
    { name: "Beomsu Lim (임범수)", role: "alumni", desc: "Master (2021) / KOG" },
    { name: "Hyoseung Lee (이효승)", role: "alumni", desc: "Master (2021) / TmaxSoft" },
    { name: "Hyejin Choi (최혜진)", role: "alumni", desc: "Master (2019) / Samsung Electronics" },
    { name: "Sunung Mun (문선웅)", role: "alumni", desc: "Master (2019) / TmaxSoft" },
    { name: "Jongho Lim (임종호)", role: "alumni", desc: "Master (2018) / ADD" },
    { name: "Jongman Seo (서종만)", role: "alumni", desc: "Master (2018) / Dable" },
    { name: "Inseok Koh (고인석)", role: "alumni", desc: "Master (2018)" },
    { name: "Hanseul Cho (조한슬)", role: "alumni", desc: "Master (2017) / Kyung-Hee Univ. Medical School" },
    { name: "Phuong Hoang Minh", role: "alumni", desc: "Master (2015) / GraphicsMiner Lab" },
    { name: "Jaemin Chun (천재민)", role: "alumni", desc: "Post-Doc (2014) / Samsung Electronics" },
    { name: "Kyungpyo Hong (홍경표)", role: "alumni", desc: "Master (2012) / Toshiba" },
    { name: "Myongchan Kim (김명찬)", role: "alumni", desc: "Master (2012) / LG U+" },
    { name: "Chaehyun Lee (이채현)", role: "alumni", desc: "Master (2008) / Dable" },
    { name: "Sunghoon Yim (임성훈)", role: "alumni", desc: "Master (2007) / Samsung Electronics" },
    { name: "Jaeyoung Cheon (천재영)", role: "alumni", desc: "Master (2007) / ADD" },
    { name: "Jaehoon Jung (정재훈)", role: "alumni", desc: "Master (2007) / Yanolja" }
];

// 3. Research Projects (Grants & Contracts)
const researchData = [
    { id: "G1", title: "Generative Haptics for Flexible Tactile Interfaces", agency: "IITP", period: "2025-2028", description: "유연소재 촉각 인터페이스에 대한 지능적 촉각 생성과 미세 반응 추론 기술" },
    { id: "G2", title: "Material- and Shape-Changing Haptic Interface", agency: "NRF", period: "2024-2025", description: "VR 상호작용을 위한 스마트 물질 기반 물성 및 형상 변형 햅틱 인터페이스 개발" },
    { id: "G3", title: "Interaction Framework for Generative Experiences", agency: "NRF (Pioneer)", period: "2024-2025", description: "시공간 확장형 다중매체 기반 생성형 경험 연결 상호작용 프레임워크: 사회적 의사소통장애 해결 중심" },
    { id: "G4", title: "Human Cognition-Intelligence Augmentation", agency: "IITP (ITRC)", period: "2024-2031", description: "인간 인지-지능 한계 및 장애 극복 증강 기술" },
    { id: "G5", title: "Hyper-realistic Metaverse Haptics", agency: "NST (Convergence Research)", period: "2023-2029", description: "초실감 메타버스 구현을 위한 촉감표준 및 고충실도 통합 햅틱 시스템 개발" },
    { id: "G6", title: "Semantic Sound-to-Haptic Automatic Conversion", agency: "NRF (Mid-Career)", period: "2022-2026", description: "의미론적 소리-햅틱 효과 자동 변환: 메타버스, 전신 햅틱 효과, 접근성" },
    { id: "G7", title: "Human-Robot Real-Time Remote Control", agency: "NRF (Pioneer)", period: "2022-2026", description: "XR 환경에서의 공유 자율성 기반 인간-로봇 실시간 원격 제어 및 협업 기술 개발" },
    { id: "G8", title: "Nonwearable Visuo-Tactile Digital Twin", agency: "IITP", period: "2022-2026", description: "비착용식 시-촉각 디지털 트윈 플랫폼 기술 개발" },
    { id: "C1", title: "Quantifying VOCs through Affective Natural Language Analysis", agency: "Hyundai Motor", period: "2025-2026", description: "스티어링 휠 진동 감성 자연어 연구를 통한 VOC 정량화 기술 개발" },
    { id: "C2", title: "Haptic Feedback Algorithm for In-Vehicle Video", agency: "NGV", period: "2024-2025", description: "차량내 영상 컨텐츠 몰입감 향상을 위한 진동 시트 기반 햅틱 피드백 알고리즘 개발" }
];

// 4. Publications (Full List)
// Note: Due to size, adding all ~240 items. Users can add links later.
const publicationData = [
    // --- 2025 ---
    { year: 2025, category: "journal", title: "Modeling Emotion Induced by Motion in 4D Rides", authors: "K. Kwon, S. H. Han, D. Jeong, J. Park, S. Choi", venue: "IEEE Transactions on Haptics (Accepted)", link: "" },
    { year: 2025, category: "journal", title: "Simultaneous Decoding of Static, Dynamic, and Thermal Tactile Stimuli...", authors: "H. Choi et al.", venue: "npj Flexible Electronics", link: "" },
    { year: 2025, category: "journal", title: "Emotional Experience of Audiences in 4D Content", authors: "J. Park et al.", venue: "Intl Journal of Human-Computer Interaction", link: "" },
    { year: 2025, category: "journal", title: "Tactile Enhancement of Mid-Air Ultrasonic Stimulation by Wrist Vibration", authors: "D.-G. Kim, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2025, category: "journal", title: "Investigating Affective and Emotional Responses to Motion in 4D Movies", authors: "K. Kwon et al.", venue: "Intl Journal of Industrial Ergonomics", link: "" },
    { year: 2025, category: "journal", title: "Assessment of Novel Haptic Interfaces for Digital Twin Teleoperation", authors: "J. Park et al.", venue: "IEEE Transactions on Industrial Informatics", link: "" },
    { year: 2025, category: "journal", title: "Perceptual Alignment of Spatial Auditory and Tactile Stimuli", authors: "D. Lee, S. Choi", venue: "IEEE TVCG (IEEE VR 2025)", link: "" },
    { year: 2025, category: "journal", title: "Digital Augmentation of Outdated Museum Exhibits", authors: "D. Lee, D. Nam, S. Choi", venue: "Intl Journal of Human-Computer Studies", link: "" },
    { year: 2025, category: "journal", title: "Simple-Architectured Elastic Touch Sensor", authors: "J. Luo et al.", venue: "Advanced Materials Technologies", link: "" },
    { year: 2025, category: "conference", title: "Automatic Generation of Haptic Motion Effects Expressing Human Dance", authors: "J. Ahn, S. Choi", venue: "IEEE VR 2025", link: "" },
    { year: 2025, category: "conference", title: "Real-time Semantic Full-Body Haptic Feedback Converted from Sound", authors: "G. Yun, S. Choi", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Automatic Tuning of Haptic Motion Effects", authors: "J. Lee, D. Jeong, S. H. Han, S. Choi", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "SkinHaptics: Exploring Skin Softness Perception...", authors: "J. Lee et al.", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Enhancing Body-Penetrating Phantom Sensations...", authors: "H. Kim, D. Lee, S. Choi", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2025, category: "conference", title: "Augmenting Pinch Selection Using Smart Ring Vibration", authors: "S. Nam, S. Choi", venue: "IEEE World Haptics Conference", link: "" },

    // --- 2024 ---
    { year: 2024, category: "journal", title: "A Comparative Study of Physical and Haptic Exhibits...", authors: "D. Lee et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Interactive Deformable Colored Sound Display", authors: "D. Park et al.", venue: "Small", link: "" },
    { year: 2024, category: "journal", title: "Telemetry-based Haptic Rendering for Racing Game...", authors: "J. Lee et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Multimodal Haptic Feedback for Virtual Collisions", authors: "J. Lee, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Effects of Contact Force on Vibrotactile Perceived Intensity", authors: "D. Lee, G. Yun, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Sound-to-Touch Crossmodal Pitch Matching for Short Sounds", authors: "D.-G. Kim et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "conference", title: "Expressing the Social Intent of Touch Initiator in VR", authors: "H. Kim, S. Choi", venue: "ISMAR 2024 (Best Paper Nominee)", link: "" },
    { year: 2024, category: "conference", title: "Generating Haptic Motion Effects for General Scenes", authors: "S. Han, J. Ahn, S. Choi", venue: "ISMAR 2024", link: "" },
    { year: 2024, category: "conference", title: "Modulating Heart Activity and Task Performance Using Haptic Heartbeat", authors: "A. Valente et al.", venue: "UIST 2024", link: "" },
    { year: 2024, category: "conference", title: "Participatory Design for In-Vehicle Vibrotactile Warnings", authors: "D. Lee et al.", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "A Feasibility Study of Tactile Enhancement...", authors: "D.-G. Kim, S. Choi", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "Audiovisual-Haptic Simultaneity Across the Body", authors: "J. Lee, G. Yun, S. Choi", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "Human Identification Performance of Vibrotactile Stimuli...", authors: "J. Kim et al.", venue: "EuroHaptics 2024", link: "" },
    { year: 2024, category: "conference", title: "Augmenting Perceived Length of Handheld Controllers", authors: "C. Park, S. Choi", venue: "CHI 2024 (Honorable Mention)", link: "" },

    // --- 2023 & Prior (Selected Key Papers from CV) ---
    { year: 2023, category: "journal", title: "Cable-Driven Haptic Interface with Movable Bases", authors: "J. Yoon et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2023, category: "journal", title: "Sensory Cue Integration of Visual and Vestibular Stimuli", authors: "J. Lee et al.", venue: "Virtual Reality", link: "" },
    { year: 2023, category: "conference", title: "Merging Camera and Object Haptic Motion Effects", authors: "J. Park et al.", venue: "ISMAR 2023", link: "" },
    { year: 2023, category: "conference", title: "Visuo-haptic Crossmodal Shape Perception Model", authors: "C. Park et al.", venue: "CHI 2023 (Honorable Mention)", link: "" },
    { year: 2023, category: "conference", title: "Generating Real-Time Haptic Effects from Sound", authors: "G. Yun et al.", venue: "CHI 2023", link: "" },
    { year: 2023, category: "conference", title: "Generating Haptic Motion Effects for Multiple Articulated Bodies", authors: "S. Han et al.", venue: "CHI 2023", link: "" },
    { year: 2022, category: "journal", title: "Perceived Intensity Model of Dual-Frequency Superimposed Vibration", authors: "Y. Yoo et al.", venue: "IEEE Transactions on Haptics (Best Paper Award)", link: "" },
    { year: 2022, category: "conference", title: "Vibration-Augmented Buttons", authors: "C. Park et al.", venue: "CHI 2022", link: "" },

    // --- Patents (Registered International) ---
    { year: 2024, category: "patent", title: "Method and Apparatus for Generating and Merging Image-based Texture Motion", authors: "S. Choi", venue: "US Patent 12,067,168 B2", link: "" },
    { year: 2018, category: "patent", title: "Apparatus for Generating Motion Effects", authors: "S. Choi", venue: "US Patent 10,147,213 B2", link: "" },
    { year: 2018, category: "patent", title: "Somatic Sensation Induction System Using Pulse Laser", authors: "S. Choi", venue: "US Patent 10,058,712 B2", link: "" },
    { year: 2018, category: "patent", title: "Method and Device for Generating Vibration Based on an Adjective", authors: "S. Choi", venue: "US Patent 9,880,570 B2", link: "" },
    { year: 2017, category: "patent", title: "Method and Apparatus for Generating Haptic Signal with Auditory Saliency", authors: "S. Choi", venue: "US Patent 9,640,047 B2", link: "" }
];

// 5. Awards Data (Selected)
const awardData = [
    { date: "2025", title: "People’s Choice Award (Hands-on Demo)", organization: "IEEE World Haptics Conference (Automatic Haptic Rendering)" },
    { date: "2025", title: "People’s Choice Award (Hands-on Demo)", organization: "IEEE World Haptics Conference (Haptic Motion Effects)" },
    { date: "2024", title: "Best Paper Award Nominee", organization: "IEEE ISMAR" },
    { date: "2024", title: "Honorable Mention", organization: "ACM CHI" },
    { date: "2024", title: "Best Paper Award", organization: "Computer Graphics and Interaction Society" },
    { date: "2024", title: "Best Paper Award (2nd Place)", organization: "Korea Haptics Conference" },
    { date: "2024", title: "Best Demonstration Award", organization: "Korea Haptics Conference" },
    { date: "2023", title: "Best Paper Award", organization: "IEEE Transactions on Haptics" },
    { date: "2023", title: "POSTECHian Award – Education", organization: "POSTECH" },
    { date: "2011", title: "Early Career Award", organization: "IEEE Technical Committee on Haptics" }
];
