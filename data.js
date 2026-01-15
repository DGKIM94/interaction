// 1. News Data (이미지 및 상세 내용 추가)
const newsData = [
    {
        id: 1,
        date: "2025-07-08",
        title: "IEEE World Haptics Conference 2025 Held in Seoul",
        content: "We successfully hosted the IEEE World Haptics Conference 2025. Over 500 researchers gathered to discuss the future of haptic technologies.",
        image: "images/lab_intro1.jpg", // 뉴스 썸네일 (폴더에 있는 이미지 사용)
        detailContent: "Detailed report about WHC 2025. Keynote speakers included... (Long text)"
    },

    {
        id: 3,
        date: "2025-03-01",
        title: "Paper Accepted at IEEE VR 2025",
        content: "Our research on 'Human Dance Haptic Motion Effects' has been accepted for presentation at IEEE VR 2025.",
        image: "", // 이미지가 없으면 기본 디자인
        detailContent: "Abstract of the paper: This paper proposes a novel method..."
    },
    {
        id: 4,
        date: "2024-03-01",
        title: "Prof. Choi Appointed as Dept. Head",
        content: "Prof. Seungmoon Choi has been appointed as the Department Head of Computer Science and Engineering at POSTECH.",
        image: "images/prof.jpg",
        detailContent: "He will serve as the department head for two years..."
    }
];

// 2. Research Areas (NEW: 대주제 4개 - 업로드 이미지 기반)
const researchAreas = [
    {
        id: "area1",
        title: "Haptic Rendering & Perception",
        desc: "Designing high-fidelity haptic stimuli and exploring perceptual mechanisms by integrating touch with vision and sound.",
        thumbnail: "images/lab_intro1.jpg", // 실제 연구 썸네일로 교체 필요
        detail: "Full description about Haptic Rendering & Perception research..."
    },
    {
        id: "area2",
        title: "Multisensory Interaction in XR",
        desc: "Creating immersive experiences in XR through real-time fusion and automatic conversion of visual, auditory, and haptic cues.",
        thumbnail: "images/lab_intro1.jpg",
        detail: "Full description about Multisensory Interaction in XR..."
    },
    {
        id: "area3",
        title: "Wearable & Assistive Haptics",
        desc: "Developing wearable tactile systems and accessibility technologies to support diverse users, including people with disabilities.",
        thumbnail: "images/lab_intro1.jpg",
        detail: "Full description about Wearable & Assistive Haptics..."
    },
    {
        id: "area4",
        title: "Novel Haptic Devices",
        desc: "Designing innovative haptic devices such as smart rings and skin-based interfaces to expand the boundaries of HCI.",
        thumbnail: "images/lab_intro1.jpg",
        detail: "Full description about Novel Haptic Devices..."
    }
];
// 5. YouTube Data (수정됨: embed 링크로 변경)
const youtubeVideos = [
    {
        id: "video1",
        title: "Lab Introduction",
        // 원본: https://youtu.be/8CfCvSeBKAA
        embedUrl: "https://www.youtube.com/embed/8CfCvSeBKAA"
    },
    {
        id: "video2",
        title: "Haptic Rendering Demo",
        // 원본: https://youtu.be/UeT9--by-eQ
        embedUrl: "https://www.youtube.com/embed/UeT9--by-eQ"
    },
    {
        id: "video3",
        title: "VR Interaction",
        // 원본: https://youtu.be/h7YkW53siNs
        embedUrl: "https://www.youtube.com/embed/h7YkW53siNs"
    },
    {
        id: "video4",
        title: "Research Highlights",
        // 원본: https://youtu.be/edUCvel4Ijc
        embedUrl: "https://www.youtube.com/embed/edUCvel4Ijc"
    }
];
// 2. Member Data (CV: Advising + Current Members)
const memberData = [
    // Professor
    {
        name: "Seungmoon Choi (최승문)", role: "prof", email: "choism@postech.ac.kr", image: "images/prof.jpg",
        website:"https://docs.google.com/document/d/1Oa5GYXQ0V9c-TGxECMVl85A-pCn3ugMY/edit",
        desc: "Professor / Dept. Head of CSE / Ph.D. Purdue Univ.",
        detail: {
            position: [
                "Head, Department of Computer Science and Engineering",
                "Professor, Department of Convergence IT Engineering (Joint appointment)",
                "Pohang University of Science and Technology (POSTECH)"
            ],
            education: [
                "Ph.D. Electrical and Computer Engineering, Purdue University (2003)",
                "M.S. Control and Instrumentation Engineering, Seoul National University (1997)",
                "B.S. Control and Instrumentation Engineering, Seoul National University (1995)"
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
    // Ongoing Projects (2024년 이후 종료 예정인 것들)
    { id: "G1", status: "Ongoing", title: "Generative Haptics for Flexible Tactile Interfaces", agency: "IITP", period: "2025-2028", description: "유연소재 촉각 인터페이스에 대한 지능적 촉각 생성과 미세 반응 추론 기술" },
    { id: "G2", status: "Ongoing", title: "Material- and Shape-Changing Haptic Interface", agency: "NRF", period: "2024-2025", description: "VR 상호작용을 위한 스마트 물질 기반 물성 및 형상 변형 햅틱 인터페이스 개발" },
    { id: "G3", status: "Ongoing", title: "Interaction Framework for Generative Experiences", agency: "NRF (Pioneer)", period: "2024-2025", description: "시공간 확장형 다중매체 기반 생성형 경험 연결 상호작용 프레임워크" },
    { id: "G4", status: "Ongoing", title: "Human Cognition-Intelligence Augmentation", agency: "IITP (ITRC)", period: "2024-2031", description: "인간 인지-지능 한계 및 장애 극복 증강 기술" },
    { id: "G5", status: "Ongoing", title: "Hyper-realistic Metaverse Haptics", agency: "NST", period: "2023-2029", description: "초실감 메타버스 구현을 위한 촉감표준 및 고충실도 통합 햅틱 시스템 개발" },
    { id: "G6", status: "Ongoing", title: "Semantic Sound-to-Haptic Automatic Conversion", agency: "NRF", period: "2022-2026", description: "의미론적 소리-햅틱 효과 자동 변환: 메타버스, 전신 햅틱 효과, 접근성" },

    // Completed Projects (2023년 이전 종료)
    { id: "G10", status: "Completed", title: "Semantic Audio-to-Haptic Conversion", agency: "Google Research Award", period: "2021-2023", description: "Algorithms and Performance Metrics" },
    { id: "G12", status: "Completed", title: "Real-Virtual Blended Exhibits for Science Culture", agency: "NRF", period: "2020-2022", description: "과학적 원리의 심도 있는 체화 학습을 위한 실제-가상 혼합형 전시물 개발" },
    { id: "G13", status: "Completed", title: "Morphable Haptic Controller for VR/AR", agency: "IITP", period: "2020-2022", description: "다형성 햅틱 컨트롤러" },
    { id: "G14", status: "Completed", title: "Vibration-Mediated Recognition of Hand Contact State", agency: "Microsoft Research Asia", period: "2019-2020", description: "Tangible/Surface Interaction" },
    { id: "G15", status: "Completed", title: "Automatic Authoring of Physical Motion Effects", agency: "Samsung Research Funding", period: "2018-2023", description: "가상현실을 위한 물리적 및 지각/감성적 동작 효과의 자동 저작" },
    { id: "G16", status: "Completed", title: "HD Haptic Technology for Hyper Reality Contents", agency: "IITP", period: "2017-2019", description: "HD 촉감 기술 기반 초실감 콘텐츠 재현 기술" },
    { id: "G20", status: "Completed", title: "Automatic Generation of 4D Haptic Effects", agency: "NRF", period: "2013-2016", description: "몰입형 컨텐츠를 위한 4D 햅틱 효과의 자동 생성 기술" }
];

// data.js (수정됨)

// ... [News, Member, Research 데이터는 기존 유지] ...

///* data.js - publicationData 부분 교체 */

const journalPapers = [
    // --- 2025 ---
    {
        year: 2025,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Modeling Emotion Induced by Motion in 4D Rides",
        authors: "Kimin Kwon, Sung H. Han, Dawoon Jeong, Junseong Park, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics (Accepted, Cover Paper)",
        link: "https://doi.org/10.1109/TOH.2025.3630042"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "npj Flex. Elec.",
        title: "Simultaneous Decoding of Static, Dynamic, and Thermal Tactile Stimuli by Using Pulsed Spike Signals in Ion-Electronic Skin",
        authors: "Hyeongseok Choi, Jungeun Lee, Seungmoon Choi, Taeyeong Kim, and Unyong Jeong",
        venue: "npj Flexible Electronics, vol. 9, article no. 115, pp. 1-10",
        link: "https://doi.org/10.1038/s41528-025-00490-9"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IJHCI",
        title: "Emotional Experience of Audiences in 4D Content",
        authors: "Junseong Park, Sung H. Han, Dawoon Jeong, Kimin Kwon, and Seungmoon Choi",
        venue: "International Journal of Human-Computer Interaction, vol. 41, no. 19, pp. 12535-12550",
        link: "https://doi.org/10.1080/10447318.2025.2462751"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "ToH",
        title: "Tactile Enhancement of Mid-Air Ultrasonic Stimulation by Wrist Vibration: Perceived Intensity and Pattern Recognition",
        authors: "Dong-Geun Kim and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 18, no. 3, pp. 603-614",
        link: "https://doi.org/10.1109/TOH.2025.3581196"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IJIE",
        title: "Investigating Affective and Emotional Responses to Motion in 4D Movies",
        authors: "Kimin Kwon, Sung H. Han, Dawoon Jeong, Junseong Park, and Seungmoon Choi",
        venue: "International Journal of Industrial Ergonomics, vol. 110, article no. 103810, pp. 1-11",
        link: "https://doi.org/10.1016/j.ergon.2025.103810"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IEEE TII",
        title: "Assessment of Novel Haptic Interfaces for Digital Twin Teleoperation in High-Risk Steel Production",
        authors: "Jaehyun Park, Yeoeun Kim, Il Seop Choi, Sang-Woo Choi, Seungmoon Choi, and Keehoon Kim",
        venue: "IEEE Transactions on Industrial Informatics, vol. 21, no. 8, pp. 5954-5964",
        link: "https://doi.org/10.1109/TII.2025.3556077"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "TVCG",
        title: "Perceptual Alignment of Spatial Auditory and Tactile Stimuli for Effective Directional Cueing",
        authors: "Dajin Lee and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 31, no. 5, pp. 2589-2599",
        link: "https://ieeexplore.ieee.org/document/10916976"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "IJHCS",
        title: "Digital Augmentation of Outdated Museum Exhibits for Learning Enhancement",
        authors: "Dajin Lee, Daehyeon Nam, and Seungmoon Choi",
        venue: "International Journal of Human-Computer Studies, vol. 198, article no. 103470",
        link: "https://doi.org/10.1016/j.ijhcs.2025.103470"
    },
    {
        year: 2025,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Simple-Architectured Elastic Touch Sensor with High Spatiotemporal Resolution",
        authors: "Junchen Luo, Chaeyong Park, Yebin Park, Jaehyun Kim, Seungmoon Choi, and Unyong Jeong",
        venue: "Advanced Materials Technologies, vol. 10, issue 4, article no. 2401280, pp. 1-12",
        link: "https://doi.org/10.1002/admt.202401280"
    },

    // --- 2024 ---
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "A Comparative Study of Physical and Haptic Exhibits in an Informal Learning Environment",
        authors: "Dajin Lee, Daehyeon Nam, Jinhyuk Yoon, Dukchan Yoon, Seokwon Jeong, Keehoon Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 4, pp. 557-566",
        link: "https://doi.org/10.1109/TOH.2024.3368429"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "Small",
        title: "Interactive Deformable Colored Sound Display Achieved with Electrostrictive Fluoropolymer and Halide Perovskite",
        authors: "Doowon Park, Woongji Kim, Chaeyong Park, Jun Choi, Arup Ghorai, Gilwoon Lee, Seungmoon Choi, Wonkyu Moon, and Unyong Jeong",
        venue: "Small, vol. 20, issue 43, Article No. 2402281, p. 1-11",
        link: "https://doi.org/10.1002/smll.202402281"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "Telemetry-based Haptic Rendering for Racing Game Experience Improvement",
        authors: "Jiwan Lee, Junwoo Kim, Jeonggoo Kang, Eunsoo Jo, Dong Chul Park, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 72-79",
        link: "https://doi.org/10.1109/TOH.2024.3357885"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "Multimodal Haptic Feedback for Virtual Collisions Combining Vibrotactile and Electrical Muscle Stimulation",
        authors: "Jungeun Lee and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 33-38",
        link: "https://ieeexplore.ieee.org/document/10400864"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Effects of Contact Force on Vibrotactile Perceived Intensity Across the Upper Body",
        authors: "Dajin Lee, Gyeore Yun, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 14-19 (Candidate for Best ToH Short Paper Award)",
        link: "https://doi.org/10.1109/TOH.2024.3353761"
    },
    {
        year: 2024,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Sound-to-Touch Crossmodal Pitch Matching for Short Sounds",
        authors: "Dong-Geun Kim, Jungeun Lee, Gyeore Yun, Hong Z. Tan, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 17, no. 1, pp. 2-7 (Candidate for Best ToH Short Paper Award)",
        link: "https://doi.org/10.1109/TOH.2023.3338224"
    },

    // --- 2023 ---
    {
        year: 2023,
        category: "journal",
        venueShort: "ToH",
        title: "Cable-Driven Haptic Interface with Movable Bases Achieving Maximum Workspace and Isotropic Force Exertion",
        authors: "Jinhyuk Yoon, Donghyeon Lee, Junyong Bang, Hyung Gon Shin, Wan Kyun Chung, Seungmoon Choi, and Keehoon Kim",
        venue: "IEEE Transactions on Haptics, vol. 16, no. 3, pp. 376-378",
        link: "https://doi.org/10.1109/TOH.2023.3286353"
    },
    {
        year: 2023,
        category: "journal",
        venueShort: "Virtual Reality",
        title: "Sensory Cue Integration of Visual and Vestibular Stimuli: A Case Study for 4D Rides",
        authors: "Jiwan Lee, Sung H. Han, and Seungmoon Choi",
        venue: "Virtual Reality, vol. 27, no. 3, pp. 1671-1683",
        link: "https://doi.org/10.1007/s10055-023-00762-7"
    },
    {
        year: 2023,
        category: "journal",
        venueShort: "Adv. Opt. Mat.",
        title: "Intrinsically Synchronized Flexible Visuo-Haptic Device Operated by Single External Electric Field",
        authors: "Gilwoon Lee, Chaeyong Park, Doowon Park, Seungmoon Choi, and Unyong Jeong",
        venue: "Advanced Optical Materials, no. 2202515, pp. 1-9",
        link: "https://doi.org/10.1002/adom.202202515"
    },

    // --- 2022 ---
    {
        year: 2022,
        category: "journal",
        venueShort: "IEEE Access",
        title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic Behavior Using Fractional Derivatives",
        authors: "Hojun Cha, Amit Bhardwaj, and Seungmoon Choi",
        venue: "IEEE Access, vol. 10, pp. 130894-130907",
        link: "https://doi.org/10.1109/ACCESS.2022.3230065"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "ToH",
        title: "Motion Effects: Perceptual Space and Synthesis for Specific Perceptual Properties",
        authors: "Sangyoon Han, Jiwan Lee, Gyeore Yun, Sung. H. Han, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 15, no. 3, pp. 626-637",
        link: "https://doi.org/10.1109/TOH.2022.3196950"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "ToH",
        title: "Data-Driven Rendering of Motion Effects for Walking Sensations in Different Gaits",
        authors: "Hyoseung Lee, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 15, no. 3, pp. 547-559",
        link: "https://doi.org/10.1109/TOH.2022.3176964"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "JMIR Serious Games",
        title: "Prediction of Specific Anxiety Symptoms and VR Sickness Based on In-Situ Autonomic Physiological Signals during VR Treatment in Patients with Social Anxiety Disorder: Mixed-Methods Study",
        authors: "Chul-Hyun Cho, Joo Young Chun, Hyun-Jin Kim, Ji-Won Hur, Dooyoung Jung, Heon-Jeong Lee, Seung Pil Pack, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seung-Moo Lee, Hyeri Lee, Seungmoon Choi, and Taesu Cheong",
        venue: "JMIR Serious Games, vol. 10, no. 3, e38284",
        link: "https://doi.org/10.2196/38284"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "Chem. Eng. J.",
        title: "Emotion-Interactive Empathetic Transparent Skin Cushion with Tailored Frequency-Dependent Hydrogel–Plasticized Nonionic Polyvinyl Chloride Interconnections",
        authors: "Dong-Soo Choi, Jin Woo Bae, Seok-Han Lee, Jin Ho Song, Da Wan Kim, Seungmoon Choi, Changhyun Pang, and Sang-Youn Kim",
        venue: "Chemical Engineering Journal, vol. 442, part 1, no. 136142, pp. 1-11",
        link: "https://doi.org/10.1016/j.cej.2022.136142"
    },
    {
        year: 2022,
        category: "journal",
        venueShort: "ToH",
        title: "👑 Perceived Intensity Model of Dual-Frequency Superimposed Vibration: Pythagorean Sum",
        authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 15, no. 2, pp. 405-415 (Best Paper Award)",
        link: "https://doi.org/10.1109/TOH.2022.3144290"
    },

    // --- 2021 ---
    {
        year: 2021,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Small-sized Deformable Shear Sensor Array for Direct Monitoring of Quantitative Shear Distribution",
        authors: "Wonjeong Suh, Chaeyong Park, Joosung Oh, Sungmin Moon, Seungmoon Choi, Youn Soo Kim, and Unyong Jeong",
        venue: "Advanced Materials Technologies, no. 2101071, pp. 1-10",
        link: "https://doi.org/10.1002/admt.202101071"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "Adv. Mat. Tech.",
        title: "Omni-Directional Tactile Profiling Using a Deformable Pressure Sensor Array Based on Localized Piezoresistivity",
        authors: "Jaehyun Kim, Doowon Park, Sungmin Moon, Chaeyong Park, Kaliannan Thiyagarajan, Seungmoon Choi, Heeseon Hwang, and Unyong Jeong",
        venue: "Advanced Materials Technologies, no. 2100688, pp. 1-9",
        link: "https://doi.org/10.1002/admt.202100688"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "IJIE",
        title: "Investigating Perceived Emotions and Affects of a Scene, and the User Satisfaction with Motion Effects in 4D Movies",
        authors: "Dong Yeong Jeong, Sung H. Han, Seungmoon Choi, Dawoon Jeong, and Kimin Kwon",
        venue: "International Journal of Industrial Ergonomics, vol. 85, no. 103173, pp. 1-8",
        link: "https://doi.org/10.1016/j.ergon.2021.103173"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "CHB",
        title: "Investigating 4D Movie Audiences’ Emotional Responses to Motion Effects and Empathy",
        authors: "Dawoon Jeong, Sung H. Han, Dong Yeong Jeong, Kimin Kwon, and Seungmoon Choi",
        venue: "Computers in Human Behavior, vol. 121, no. 106797, pp. 1-14",
        link: "https://doi.org/10.1016/j.chb.2021.106797"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "ToH",
        title: "Length Perception Model for Handheld Controllers: The Effects of Diameter and Inertia",
        authors: "Chaeyong Park, Jinsoo Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 14, no. 2, pp. 310-315",
        link: "https://doi.org/10.1109/TOH.2021.3077709"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "IEEE THMS",
        title: "Driving Skill Modeling Using Neural Networks for Performance-based Haptic Assistance",
        authors: "Hojin Lee, Hyoungkyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Human-Machine Systems, vol. 51, no. 3, pp. 198-210",
        link: "https://doi.org/10.1109/THMS.2021.3061409"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "JMIR Mental Health",
        title: "Virtual Reality-Based Psychotherapy in Social Anxiety Disorder: fMRI Study Using a Self-Referential Task",
        authors: "Ji-Won Hur, Hyemin Shin, Dooyoung Jung, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "JMIR Mental Health, vol. 8, no. 4, e25731, pp. 1-13",
        link: "https://doi.org/10.2196/25731"
    },
    {
        year: 2021,
        category: "journal",
        venueShort: "ToH",
        title: "Magnetorheological Fluid Haptic Shoes for Walking in VR",
        authors: "Tae-Heon Yang, Hyungki Son, Sangkyu Byeon, Hyunjae Gil, Inwook Hwang, Gwanghyun Jo, Seungmoon Choi, Sang-Youn Kim, and Jin Ryong Kim",
        venue: "IEEE Transactions on Haptics, vol. 14, no. 1, pp. 83-94",
        link: "https://doi.org/10.1109/TOH.2020.3017099"
    },

    // --- 2020 ---
    {
        year: 2020,
        category: "journal",
        venueShort: "JMIR",
        title: "Effectiveness of a Participatory and Interactive Virtual Reality Intervention in Patients with Social Anxiety Disorder: Longitudinal Questionnaire Study",
        authors: "Hyun-Jin Kim, Seulki Lee, Dooyoung Jung, Ji-Won Hur, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "Journal of Medical Internet Research, vol. 22, no. 10, e23024, pp. 1-16",
        link: "http://dx.doi.org/10.2196/23024"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "IEEE Access",
        title: "Hybrid Framework for Haptic Texture Modeling and Rendering",
        authors: "Sunghwan Shin and Seungmoon Choi",
        venue: "IEEE Access, vol. 8, pp. 149825–149840",
        link: "https://doi.org/10.1109/ACCESS.2020.3015861"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "ToH",
        title: "A Review of Surface Haptics: Enabling Tactile Effects on Touch Surfaces",
        authors: "Cagatay Basdogan, Frederic Giraud, Vincent Levesque, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics (Special Issue on Surface Haptics), vol. 13, no. 3, pp. 450-470",
        link: "https://doi.org/10.1109/TOH.2020.2990712"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "Proc. IEEE",
        title: "Methodology for Maximizing Information Transmission of Haptic Devices",
        authors: "Hong Z. Tan, Seungmoon Choi, Frances W. Y. Lau, and Freddy Abnousi",
        venue: "Proceedings of the IEEE, vol. 108, no. 6, pp. 945—965",
        link: "https://doi.org/10.1109/JPROC.2020.2992561"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "ToH",
        title: "Data-driven Texture Modeling and Rendering on Electrovibration Display",
        authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 13, no. 2, pp. 298-311",
        link: "https://doi.org/10.1109/TOH.2019.2932990"
    },
    {
        year: 2020,
        category: "journal",
        venueShort: "IEEE TIE",
        title: "Soft Haptic Actuator Based on Knitted PVC Gel Fabric",
        authors: "Won-Hyeong Park, Eun-Jae Shin, Yongjae Yoo, Seungmoon Choi, and Sang-Youn Kim",
        venue: "IEEE Transactions on Industrial Electronics, vol. 67, no. 1, pp. 677-685",
        link: "https://doi.org/10.1109/TIE.2019.2918470"
    },

    // --- 2019 ---
    {
        year: 2019,
        category: "journal",
        venueShort: "ToH",
        title: "Effects of Contact Force on Vibrotactile Sensitivity During Active Touch",
        authors: "Seungjae Oh and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 12, no. 4, pp. 645-651",
        link: "https://doi.org/10.1109/TOH.2019.2929521"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "IEEE ToR",
        title: "Estimating Deformed Surface Displacement from Contact Pressure Distribution",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "IEEE Transactions on Robotics, vol 35, no. 5, pp. 1260-1267",
        link: "https://doi.org/10.1109/TRO.2019.2921197"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "RA-L",
        title: "Data-Driven Haptic Modeling of Normal Interactions on Viscoelastic Deformable Objects Using a Random Forest",
        authors: "Amit Bhardwaj, Hojun Cha, and Seungmoon Choi",
        venue: "IEEE Robotics and Automation Letters, vol. 4, no. 2, pp. 1379-1386",
        link: "https://doi.org/10.1109/LRA.2019.2895838"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "Psychiatry Inv.",
        title: "Visuo-haptic-based Multimodal Feedback Virtual Reality Solution to Improve Anxiety Symptoms: a Proof-of-Concept Study",
        authors: "Young Im Kim, Seo-Yeon Jung, Seulki Min, Eunbi Seol, Sungho Seo, Ji-Won Hur, Dooyoung Jung, Heon-Jeong Lee, Sungkil Lee, Gerard J. Kim, Chung-Yean Cho, Seungmoon Choi, Seung-Moo Lee, and Chul-Hyun Cho",
        venue: "Psychiatry Investigation, vol. 16, no. 2, pp. 167-171",
        link: "https://doi.org/10.30773/pi.2018.12.25.1"
    },
    {
        year: 2019,
        category: "journal",
        venueShort: "ToH",
        title: "Haptic Enchanters: Attachable and Detachable Vibrotactile Modules and Their Advantages",
        authors: "Gunhyuk Park, Hojun Cha, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 12, no. 1, pp. 43-55",
        link: "https://doi.org/10.1109/TOH.2018.2859955"
    },

    // --- 2017 ---
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "Improving 3D Shape Recognition with Electrostatic Friction Display",
        authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 4, pp. 533-544",
        link: "https://doi.org/10.1109/TOH.2017.2710314"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "Investigation on Low Voltage Operation of Electrovibration Display",
        authors: "Jeonggoo Kang, Heewon Kim, Seungmoon Choi, Ki-Duk Kim, and Jeha Ryu",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 3, pp. 371-381",
        link: "https://doi.org/10.1109/TOH.2016.2635145"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "ToH",
        title: "A Physics-Based Vibrotactile Feedback Library for Collision Events",
        authors: "Gunhyuk Park and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 10, no. 3, pp. 325-337",
        link: "https://doi.org/10.1109/TOH.2016.2614804"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "PLOS ONE",
        title: "Perceptual Space of Superimposed Dual-Frequency Vibrations in the Hands",
        authors: "Inwook Hwang, Jeongil Seo, and Seungmoon Choi",
        venue: "Plos One, vol. 12, no. 1, e01695702016",
        link: "https://doi.org/10.1371/journal.pone.0169570"
    },
    {
        year: 2017,
        category: "journal",
        venueShort: "RA-L",
        title: "Contact Force Decomposition Using Contact Pressure Distribution",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "IEEE Robotics and Automation Letters, vol. 2, no. 1, pp. 290-297",
        link: "https://doi.org/10.1109/LRA.2016.2598554"
    },

    // --- 2016 ---
    {
        year: 2016,
        category: "journal",
        venueShort: "ToH",
        title: "Mid-air Tactile Stimulation Using Indirect Laser Radiation",
        authors: "Hojin Lee, Ji-Sun Kim, Jae-Young Kim, Seungmoon Choi, Jae-Hoon Jun, Jong-Rak Park, A-Hee Kim, Han-Byeol Oh, Jun-Hyeok Baek, Seung-Jin Yang, Hyung-Sik Kim, and Soon-Cheol Chung",
        venue: "IEEE Transactions on Haptics, vol. 9, no. 4, pp. 574-585",
        link: "https://doi.org/10.1109/TOH.2016.2569081"
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "ToH",
        title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic and Frictional Responses of Deformable Objects",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 9, no. 4, pp. 548-559",
        link: "https://doi.org/10.1109/TOH.2016.2571690"
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "TVCG",
        title: "Motion Effects Synthesis for 4D Films",
        authors: "Jaebong Lee, Bohyung Han, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 10, pp. 2300-2314",
        link: "https://doi.org/10.1109/TVCG.2015.2507591"
    },
    {
        year: 2016,
        category: "journal",
        venueShort: "IJHCS",
        title: "Assisting People with Visual Impairments in Aiming at a Target on a Large Wall-Mounted Display",
        authors: "Kibum Kim, Xiangshi Ren, Seungmoon Choi, and Hong Z. Tan",
        venue: "International Journal of Human-Computer Studies, vol. 86, pp. 109-120",
        link: "https://doi.org/10.1016/j.ijhcs.2015.10.002"
    },

    // --- 2015 ---
    {
        year: 2015,
        category: "journal",
        venueShort: "Neurosci. Lett.",
        title: "Evaluation of the Possibility and Response Characteristics of Laser-induced Tactile Sensation",
        authors: "Hyung-Sik Kim, Ji-Sun Kim, Gu-In Jung, Jae-Hoon Jun, Jong-Rak Park, Sung-Phil Kim, Seungmoon Choi, Sung-Jun Park, Mi-Hyun Choi, and Soon-Cheol Chung",
        venue: "Neuroscience Letters, vol. 602, pp. 68-72",
        link: "https://doi.org/10.1016/j.neulet.2015.06.053"
    },
    {
        year: 2015,
        category: "journal",
        venueShort: "Sci. Rep.",
        title: "Laser-induced Thermoelastic Effects Can Evoke Tactile Sensations",
        authors: "Jae-Hoon Jun, Jong-Rak Park, Sung-Phil Kim, Young Min Bae, Jang-Yeon Park, Hyung-Sik Kim, Seungmoon Choi, Sung Jun Jung, Seung Hwa Park, Dong-Il Yeom, Gu-In Jung, Ji-Sun Kim, and Soon-Cheol Chung",
        venue: "Scientific Reports, vol. 5, no. 11016, pp. 1-16",
        link: "https://doi.org/10.1038/srep11016"
    },
    {
        year: 2015,
        category: "journal",
        venueShort: "ToH",
        title: "Topography Compensation for Haptization of a Mesh Object and Its Stiffness Distribution",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 8, no. 1, pp. 90-101",
        link: "https://doi.org/10.1109/TOH.2013.74"
    },

    // --- 2014 ---
    {
        year: 2014,
        category: "journal",
        venueShort: "ToH",
        title: "Saliency-Driven Real-Time Video-to-Tactile Translation",
        authors: "Myongchan Kim, Sungkil Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 7, no. 3, pp. 394-404",
        link: "https://doi.org/10.1109/TOH.2013.58"
    },
    {
        year: 2014,
        category: "journal",
        venueShort: "ToH",
        title: "Consonance of Vibrotactile Chords",
        authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 7, no. 1, pp. 3-13",
        link: "https://doi.org/10.1109/TOH.2013.57"
    },

    // --- 2013 ---
    {
        year: 2013,
        category: "journal",
        venueShort: "IEEE THMS",
        title: "Haptic Assistance for Memorization of 2D Selection Sequences",
        authors: "Hojin Lee, Gabjong Han, In Lee, Sunghoon Yim, Kyungpyo Hong, Hyeseon Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Human-Machine Systems, vol. 43, no. 6, pp. 643-649",
        link: "https://doi.org/10.1109/TSMC.2013.2283464"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Trans. Res. Part F",
        title: "Efficacy of Haptic Blind Spot Warnings Applied through a Steering Wheel or a Seatbelt",
        authors: "Jaemin Chun, In Lee, Gunhyuk Park, Jongman Seo, Seungmoon Choi, and Sung H. Han",
        venue: "Transportation Research Part F: Traffic Psychology and Behaviour, vol. 21, pp. 231-241",
        link: "https://doi.org/10.1016/j.trf.2013.09.014"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Perceptual Analysis of Vibrotactile Flows on a Mobile Device",
        authors: "Jongman Seo and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 4, pp. 522-527",
        link: "https://doi.org/10.1109/TOH.2013.24"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Intell. Serv. Robot.",
        title: "Comparative Evaluation of Performance Measures for Human Driving Skills",
        authors: "Reza Haghighi Osgouei, Hojin Lee, and Seungmoon Choi",
        venue: "Intelligent Service Robotics, vol. 17, no. 3, pp. 169-180",
        link: "https://doi.org/10.1007/s11370-013-0134-6"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Virtual Reality",
        title: "Haptic Discrimination of Virtual Surface Slope",
        authors: "Inwook Hwang, Sunghoon Yim, and Seungmoon Choi",
        venue: "Virtual Reality, vol. 16, no. 3, pp. 205-218",
        link: "https://doi.org/10.1007/s10055-013-0226-9"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "Proc. IEEE",
        title: "Vibrotactile Display: Perception, Technology, and Applications",
        authors: "Seungmoon Choi and Katherine J. Kuchenbecker",
        venue: "Proceedings of the IEEE, vol. 101, no. 9, pp. 2093-2104",
        link: "https://doi.org/10.1109/JPROC.2012.2221071"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Vibrotactile Perceived Intensity for Mobile Devices as a Function of Direction, Amplitude, and Frequency",
        authors: "Inwook Hwang, Jongman Seo, Myongchan Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 3, pp. 352-362",
        link: "https://doi.org/10.1109/TOH.2013.2"
    },
    {
        year: 2013,
        category: "journal",
        venueShort: "ToH",
        title: "Real-time Dual-band Haptic Music Player for Mobile Devices",
        authors: "Inwook Hwang, Hyeseon Lee, and Seungmoon Choi",
        venue: "IEEE Transactions on Haptics, vol. 6, no. 3, pp. 340-351",
        link: "https://doi.org/10.1109/TOH.2013.7"
    },

    // --- 2012 ---
    {
        year: 2012,
        category: "journal",
        venueShort: "IJIE",
        title: "Evaluation of Vibrotactile Feedback for Forward Collision Warning on the Steering Wheel and Seatbelt",
        authors: "Jaemin Chun, Sung H. Han, Gunhyuk Park, Jongman Seo, In Lee, and Seungmoon Choi",
        venue: "International Journal of Industrial Ergonomics, vol. 42, no. 5, pp. 443-448",
        link: "https://doi.org/10.1016/j.ergon.2012.07.004"
    },
    {
        year: 2012,
        category: "journal",
        venueShort: "ToH",
        title: "Rendering Virtual Tumors in Real Tissue Mock-Ups Using Haptic Augmented Reality",
        authors: "Seokhee Jeon, Seungmoon Choi, and Matthias Harders",
        venue: "IEEE Transactions on Haptics, vol. 5, no. 1, pp. 77-84",
        link: "https://doi.org/10.1109/TOH.2011.40"
    },

    // --- 2011 ---
    {
        year: 2011,
        category: "journal",
        venueShort: "Presence",
        title: "Real Stiffness Augmentation for Haptic Augmented Reality",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 20, no. 4, pp. 337-370",
        link: "https://doi.org/10.1162/PRES_a_00051"
    },
    {
        year: 2011,
        category: "journal",
        venueShort: "IwC",
        title: "Evaluation of Motion-Based Interaction for Mobile Devices: A Case Study on Image Browsing",
        authors: "Sunghoon Yim, Sungkil Lee, and Seungmoon Choi",
        venue: "Interacting with Computers, vol. 23, no 3, pp. 268-278",
        link: "https://doi.org/10.1016/j.intcom.2011.04.001"
    },

    // --- 2010 ---
    {
        year: 2010,
        category: "journal",
        venueShort: "Presence",
        title: "Psychophysical Model for Vibrotactile Rendering in Mobile Devices",
        authors: "Jonghyun Ryu, Jaehoon Jung, Gunhyuk Park, and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 10, no. 4, pp. 1-24",
        link: "https://doi.org/10.1162/PRES_a_00011"
    },
    {
        year: 2010,
        category: "journal",
        venueShort: "ToH",
        title: "Vibrotactile Feedback for Information Delivery in the Vehicle",
        authors: "Jonghyun Ryu, Jaemin Chun, Gunhyuk Park, Seungmoon Choi, and Sung H. Han",
        venue: "IEEE Transactions on Haptics, vol. 3, no. 2, pp. 138-149",
        link: "https://doi.org/10.1109/TOH.2010.1"
    },

    // --- 2009 ---
    {
        year: 2009,
        category: "journal",
        venueShort: "Presence",
        title: "Haptic Augmented Reality: Taxonomy and an Example of Stiffness Modulation",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "Presence: Teleoperators and Virtual Environments, vol. 18, no. 5, pp. 387-408",
        link: "https://doi.org/10.1162/pres.18.5.387"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "IEEE TCE",
        title: "Gesture-Recognizing Hand-Held Interface with Vibrotactile Feedback for 3D Interaction",
        authors: "Sangki Kim, Gunhyuk Park, Sunghoon Yim, Gabjong Han, Seokhee Jeon, Seungmoon Choi, and Seungjin Choi",
        venue: "IEEE Transactions on Consumer Electronics, vol. 55, no. 3, pp. 1169-1177",
        link: "https://doi.org/10.1109/TCE.2009.5277972"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "TVCG",
        title: "Real-Time Depth-of-Field Rendering Using Anisotropically Filtered Mipmap Interpolation",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 3, pp. 6-19",
        link: "https://doi.org/10.1109/TVCG.2008.106"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "IJCAS",
        title: "Discrimination of Visual and Haptic Rendering Delays in Networked Environments",
        authors: "In Lee and Seungmoon Choi",
        venue: "International Journal of Control, Automation, and Systems, vol. 7, no. 1, pp. 25-31",
        link: "https://doi.org/10.1007/s12555-009-0104-0"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "Industrial Robot",
        title: "Cooperative Robotic Assistant with Drill-By-Wire End-Effector for Spinal Fusion Surgery",
        authors: "Jongwon Lee, Inwook Hwang, Keehoon Kim, Seungmoon Choi, Wan Kyun Chung, and Young Soo Kim",
        venue: "Industrial Robot - An International Journal, vol. 36, no. 1, pp. 60-72",
        link: "https://doi.org/10.1108/01439910910924684"
    },
    {
        year: 2009,
        category: "journal",
        venueShort: "TVCG",
        title: "Real-Time Tracking of Visually Attended Objects in Virtual Environments and Its Application to LOD",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 1, pp. 6-19",
        link: "https://doi.org/10.1109/TVCG.2008.82"
    },

    // --- 2008 ---
    {
        year: 2008,
        category: "journal",
        venueShort: "CGF",
        title: "Real-Time Depth-of-Field Rendering Using Point Splatting on Per-Pixel Layers",
        authors: "Sungkil Lee, Gerard Jounghyun Kim, and Seungmoon Choi",
        venue: "Computer Graphics Forum, vol. 27, no. 7, pp. 1955-1962",
        link: "https://doi.org/10.1111/j.1467-8659.2008.01344.x"
    },

    // --- 2007 ---
    {
        year: 2007,
        category: "journal",
        venueShort: "IEEE Multimedia",
        title: "Perceptual Issues in Haptic Digital Watermarking",
        authors: "Domenico Prattichizzo, Mauro Barni, Gloria Menegaz, Alessandro Formaglio, Hong Z. Tan and Seungmoon Choi",
        venue: "IEEE Multimedia, vol. 14, no. 3, pp. 84-91",
        link: "https://doi.org/10.1109/MMUL.2007.58"
    },
    {
        year: 2007,
        category: "journal",
        venueShort: "Presence",
        title: "Perceived Instability of Virtual Haptic Texture. III. Effect of Update Rate",
        authors: "Seungmoon Choi and Hong Z. Tan",
        venue: "Presence: Teleoperators and Virtual Environment, vol. 16, no. 3, pp. 263-278",
        link: "https://doi.org/10.1162/pres.16.3.263"
    }
    /* data.js - International Conference Papers (2007-2026) */

];
/* data.js - Poster & Demo Papers (Based on CV) */
/* data.js - Poster & Demo Papers (2007-2025) */

const posterDemoPapers = [
    // --- 2025 ---
    {
        year: 2025,
        category: "demo",
        venueShort: "CHI",
        title: "Demonstrating SkinHaptics: Exploring Skin Softness Perception and Virtual Body Embodiment Techniques to Enhance Self-Haptic Interactions",
        authors: "Jungeun Lee, Minha Jeon, Jinyoung Lee, Seungmoon Choi, and Seungjae Oh",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Interactivity)",
        link: "https://doi.org/10.1145/3706599.3721275"
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Demonstrating SkinHaptics: Softness Perception and Virtual Body Embodiment for Self-Haptics",
        authors: "Jungeun Lee, Minha Jeon, Jinyoung Lee, Seungmoon Choi, and Seungjae Oh",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Semantic Full-Body Haptic Effects for Virtual Reality First-Person-Shooter Games",
        authors: "Gyeore Yun and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Automatic Haptic Rendering Pipeline Using AI Models",
        authors: "Jeongwoo Kim, Jaejun Park, Uison Ju, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration; People’s Choice Award)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Body-Penetrating Tactile Phantom Sensations Enhanced by Sound",
        authors: "Hyunuk Kim, Dajin Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: ""
    },
    {
        year: 2025,
        category: "demo",
        venueShort: "WHC",
        title: "Automatic Generation of Haptic Motion Effects from Audiovisual Content",
        authors: "Jiwan Lee, Jaejun Park, Jaehyeok Ahn, Sangyoon Han, Gyeore Yun, Jaebong Lee, Beomsu Lim, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration; People’s Choice Award)",
        link: ""
    },
    {
        year: 2025,
        category: "poster",
        venueShort: "WHC",
        title: "Identification of Spatio-Temporal Vibrotactile Stimuli Across the Torso: Toward Egocentric Haptic Navigation",
        authors: "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link: ""
    },
    {
        year: 2025,
        category: "poster",
        venueShort: "WHC",
        title: "Effects of Haptic Feedback on Gaming Experiences: A Case Study for Players and Spectators in an FPS game",
        authors: "Heeji Sohn, Chaeyong Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress; Honorable Mention)",
        link: ""
    },
    {
        year: 2025,
        category: "poster",
        venueShort: "WHC",
        title: "Tactile Localization in Forearm-Mounted Multi-Tactor Displays: The Effect of Tactor Number and Position",
        authors: "Dong-Geun Kim, Suheon Nam, Chaeyong Park, Geunho Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link: ""
    },

    // --- 2024 ---
    {
        year: 2024,
        category: "poster",
        venueShort: "ICRA W",
        title: "Multimodal Haptic Feedback for Effectively Expressing the Social Intent of Touch Gestures in VR",
        authors: "Heeyeon Kim and Seungmoon Choi",
        venue: "ICRA Workshop on Applications and Future Directions of Affective Technologies (Best Poster Presentation Award)",
        link: ""
    },

    // --- 2023 ---
    {
        year: 2023,
        category: "demo",
        venueShort: "WHC",
        title: "Real-Time, Selective, and Multimodal Haptic Feedback from Gameplay Sound",
        authors: "Gyeore Yun, Jungeun Lee, Dong-Geun Kim, Minjae Mun, Hong Z. Tan, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: "https://youtu.be/mnbLtQvXQGo"
    },
    {
        year: 2023,
        category: "demo",
        venueShort: "WHC",
        title: "Multimodal Haptic Feedback for Virtual Collisions Combining Vibration and Electrical Muscle Stimulation",
        authors: "Jungeun Lee and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demonstration)",
        link: "https://www.youtube.com/watch?v=sQ9E-dFdT08"
    },
    {
        year: 2023,
        category: "poster",
        venueShort: "WHC",
        title: "A Comparative Study of Physical and Haptic Exhibits in Informal Learning Environment",
        authors: "Dajin Lee, Daehyeon Nam, Seokwon Jeong, Keehoon Kim, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/10224467"
    },

    // --- 2022 ---
    {
        year: 2022,
        category: "poster",
        venueShort: "SIGGRAPH Asia",
        title: "MMGrip: A Handheld Multimodal Haptic Device Combining Vibration, Impact, and Shear for Realistic Expression of Contact",
        authors: "Dong-Geun Kim, Jungeun Lee, and Seungmoon Choi",
        venue: "SIGGRAPH Asia Posters",
        link: "https://doi.org/10.1145/3550082.3564197"
    },

    // --- 2021 ---
    {
        year: 2021,
        category: "poster",
        venueShort: "UR",
        title: "Data-Driven Viscoelasticity Modeling Using Random Forests with Position and Velocity Pair",
        authors: "Hojun Cha, Amit Bhardwaj, and Seungmoon Choi",
        venue: "International Conference on Ubiquitous Robots (UR)",
        link: "https://ieeexplore.ieee.org/document/9494676"
    },

    // --- 2020 ---
    {
        year: 2020,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Perceived Magnitude Function of Friction Rendered by the Dahl Model",
        authors: "Beomsu Lim, Junkyeong Choi, Yongjae Yoo, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/9082568"
    },
    {
        year: 2020,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Vestibular Detection Thresholds and Psychometric Functions of Motion Effects in Cardinal Directions",
        authors: "Jiwan Lee and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/9082697"
    },

    // --- 2019 ---
    {
        year: 2019,
        category: "demo",
        venueShort: "WHC",
        title: "VibEye: A System for Identification of Hand-held Object by Visualizing Vibration Propagation Dynamics",
        authors: "Seungjae Oh, Chaeyong Park, Jinsoo Kim, Gyeore Yun, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://www.youtube.com/watch?v=0QsU1rFs5yY"
    },
    {
        year: 2019,
        category: "demo",
        venueShort: "WHC",
        title: "Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback",
        authors: "Chaeyong Park, Jaeyoung Park, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/8816127"
    },
    {
        year: 2019,
        category: "demo",
        venueShort: "WHC",
        title: "Seamless Phantom Sensation Moving Across a Wide Range of Body",
        authors: "Gyeore Yun, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/8816131"
    },
    {
        year: 2019,
        category: "demo",
        venueShort: "ISS",
        title: "Data-driven Texture Modeling and Rendering on Electrovibration Display",
        authors: "Seongwon Cho, Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
        venue: "ACM International Conference on Interactive Surfaces and Spaces (Demo)",
        link: "https://doi.org/10.1145/3343055.3360741"
    },

    // --- 2018 ---
    {
        year: 2018,
        category: "demo",
        venueShort: "HAPTICS",
        title: "An Inverse Neural Network Model for Data-Driven Texture Rendering on Electrovibration Display",
        authors: "Reza Haghighi Osgouei, Sunghwan Shin, Seongwon Cho, Jin Ryong Kim, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/8357187"
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "CHI",
        title: "4D Experiences Enabled by Automatic Synthesis of Motion and Vibrotactile Effects",
        authors: "Sangyoon Han, Sunung Mun, Jongman Seo, Jaebong Lee, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Extended Abstracts)",
        link: "https://doi.org/10.1145/3170427.3186516"
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "TouchPhoto: Enabling Independent Picture-taking and Understanding of Photos for Visually-Impaired Users",
        authors: "Yongjae Yoo, Jongho Lim, Hanseul Cho, and Seungmoon Choi",
        venue: "AsiaHaptics (Hands-on Demo)",
        link: "https://doi.org/10.1007/978-981-13-3194-7_49"
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Random Forest for Modeling and Rendering of Viscoelastic Deformable Objects",
        authors: "Hojun Cha, Amit Bhardwaj, Chaeyong Park, and Seungmoon Choi",
        venue: "AsiaHaptics (Hands-on Demo)",
        link: "https://doi.org/10.1007/978-981-13-3194-7_9"
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Towards Automatic Synthesis of Motion Effects",
        authors: "Sangyoon Han, Jaebong Lee, and Seungmoon Choi",
        venue: "AsiaHaptics (Candidate for Best Demo Award)",
        link: "https://doi.org/10.1007/978-981-13-3194-7_59"
    },
    {
        year: 2018,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Data-driven Multi-modal Haptic Rendering Combining Force, Tactile, and Thermal Feedback",
        authors: "Seongwon Cho, Hyejin Choi, Sunghwan Shin, and Seungmoon Choi",
        venue: "AsiaHaptics (Hands-on Demo)",
        link: "https://doi.org/10.1007/978-981-13-3194-7_13"
    },

    // --- 2017 ---
    {
        year: 2017,
        category: "demo",
        venueShort: "WHC",
        title: "Mid-air Tactile Application Using Indirect Laser Radiation for Contour-Following Stimulation",
        authors: "Hojun Cha, Hojin Lee, Junsuk Park, Hyung-Sik Kim, Soon-Cheol Chung, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/7989885"
    },
    {
        year: 2017,
        category: "poster",
        venueShort: "URAI",
        title: "Haptic Texture Rendering Using Random Fractal Surface",
        authors: "Seongwon Cho, Sunghwan Shin and Seungmoon Choi",
        venue: "International Conference on Ubiquitous Robots and Ambient Intelligence (URAI)",
        link: "https://ieeexplore.ieee.org/document/7992732"
    },

    // --- 2016 ---
    {
        year: 2016,
        category: "demo",
        venueShort: "HAPTICS",
        title: "Graphical Authoring Tool of Vibrotactile Stimuli Using Adjectival Space",
        authors: "Yongjae Yoo, Jaebong Lee, Jongman Seo, Eunhwa Lee, Jeongseok Lee, Yudong Bae, Daekwang Jung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/7463196"
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "UIST",
        title: "LaserStroke: Mid-air Tactile Experiences on Contours Using Indirect Laser Radiation",
        authors: "Hojin Lee, Hojun Cha, Junsuk Park, Seungmoon Choi, Hyung-Sik Kim, and Soon-Cheol Chung",
        venue: "ACM UIST (Demo)",
        link: "https://doi.org/10.1145/2984751.2984767"
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "UIST",
        title: "MagTacS: Delivering Tactile Sensation over an Object",
        authors: "Hyung-Sik Kim, Seong-Young Gim, Woo-Ram Kim, Mi-Hyun Choi, Seungmoon Choi, and Soon-Cheol Chung",
        venue: "ACM UIST (Demo)",
        link: "https://doi.org/10.1145/2984751.2984768"
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Hybrid Haptic Texture Rendering Using Kinesthetic and Vibrotactile Feedback",
        authors: "Sunghwan Shin and Seungmoon Choi",
        venue: "AsiaHaptics (Demo)",
        link: "https://doi.org/10.1007/978-981-10-4157-0_13"
    },
    {
        year: 2016,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "PhysVib: Physically Plausible Vibrotactile Feedback Library to Collisions on a Mobile Device",
        authors: "Gunhyuk Park and Seungmoon Choi",
        venue: "AsiaHaptics (Demo)",
        link: "https://doi.org/10.1007/978-981-10-4157-0_72"
    },
    {
        year: 2016,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Haptic Texture Modeling Using Photometric Stereo",
        authors: "Sunghwan Shin and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/7463188"
    },
    {
        year: 2016,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Vibrotactile Rendering of Gunshot Events for 4D Films",
        authors: "Jongman Seo, Reza Haghighi Osgouei, Soon-Cheol Chung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/7463194"
    },
    {
        year: 2016,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Large-Scale Survey on Adjectival Representation of Vibrotactile Stimuli",
        authors: "Yongjae Yoo, Jaebong Lee, Jongman Seo, Eunhwa Lee, Jeongseok Lee, Yudong Bae, Daekwang Jung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/7463197"
    },

    // --- 2015 ---
    {
        year: 2015,
        category: "demo",
        venueShort: "WHC",
        title: "Mid-Air Tactile Stimulation Using Laser-Induced Thermoelastic Effects",
        authors: "Hojin Lee, Ji-Sun Kim, Seungmoon Choi, et al.",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/7177741"
    },
    {
        year: 2015,
        category: "demo",
        venueShort: "WHC",
        title: "TouchMusic: Music Experience System for the Hearing-Impaired",
        authors: "Gunhyuk Park, Yongjae Yoo, Seungmoon Choi, et al.",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://www.youtube.com/watch?v=erxedN-qgW4"
    },
    {
        year: 2015,
        category: "demo",
        venueShort: "WHC",
        title: "Data-Driven Haptic Modeling and Rendering of Deformable Objects Including Sliding Friction",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/7177730"
    },
    {
        year: 2015,
        category: "poster",
        venueShort: "WHC",
        title: "Preliminary Study on Perceived Intensity of Electrovibration Using High-Frequency Carrier-Signal Voltage",
        authors: "Jeonggoo Kang, Heewon Kim, Seungmoon Choi, Ki-Duk Kim, and Jeha Ryu",
        venue: "IEEE World Haptics Conference (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/7177760"
    },
    {
        year: 2015,
        category: "poster",
        venueShort: "URAI",
        title: "Decomposition of Contact Force Using Contact Pressure for Haptic Augmented Reality",
        authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
        venue: "International Conference on Ubiquitous Robots and Ambient Intelligence (URAI)",
        link: "https://ieeexplore.ieee.org/document/7358908"
    },

    // --- 2014 ---
    {
        year: 2014,
        category: "demo",
        venueShort: "HAPTICS",
        title: "👑 PreventFHP: Detection and Warning System for Forward Head",
        authors: "Jaebong Lee, Eunji Cho, Minjae Kim, Yongmin Yoon, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo; Best Teaser Award)",
        link: "https://ieeexplore.ieee.org/document/6775469"
    },
    {
        year: 2014,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Normal and Tangential Force Decomposition and Augmentation Based on Contact Centroid",
        authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
        venue: "AsiaHaptics (Honorable Mention - Final Candidate for Best Demo Award)",
        link: "https://doi.org/10.1007/978-981-10-4157-0_22"
    },
    {
        year: 2014,
        category: "demo",
        venueShort: "AsiaHaptics",
        title: "Haptic-enabled English Education System",
        authors: "Hoang Minh Phuong, Jaebong Lee, Hojin Lee, Kyusong Lee, Gary Geunbae Lee, and Seungmoon Choi",
        venue: "AsiaHaptics (Demo)",
        link: "https://doi.org/10.1007/978-981-10-4157-0_49"
    },

    // --- 2013 ---
    {
        year: 2013,
        category: "poster",
        venueShort: "RO-MAN",
        title: "Haptic-Enabled Driving Training System",
        authors: "Reza Haghighi Osgouei, Hojin Lee and Seungmoon Choi",
        venue: "IEEE International Symposium on Robot & Human Interactive Communication (Work-in-Progress)",
        link: "https://ieeexplore.ieee.org/document/6628461"
    },

    // --- 2012 ---
    {
        year: 2012,
        category: "demo",
        venueShort: "HAPTICS",
        title: "Shape Modeling of Soft Real Objects Using Force-Feedback Haptic Interface",
        authors: "Sunghoon Yim and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Hands-on Demo)",
        link: "https://ieeexplore.ieee.org/document/6183834"
    },

    // --- 2010 ---
    {
        year: 2010,
        category: "demo",
        venueShort: "HAPTICS",
        title: "👑 Stiffness Modulation for Haptic Augmented Reality",
        authors: "Seokhee Jeon and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Best Demo Award)",
        link: "https://ieeexplore.ieee.org/document/5444638"
    },
    {
        year: 2010,
        category: "demo",
        venueShort: "ISMAR",
        title: "Breast Cancer Palpation System using Haptic Augmented Reality",
        authors: "Seokhee Jeon, Benjamin Knoerlein, Matthias Harders, Gabjong Han, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality (ISMAR Demo)",
        link: "https://ieeexplore.ieee.org/document/5643538"
    },
    {
        year: 2010,
        category: "demo",
        venueShort: "EuroHaptics",
        title: "Real-time Dual-band Haptic Music Player for Mobile Devices",
        authors: "Inwook Hwang, Moonchae Joung, Sunwook Kim, Kyunghun Hwang, Jaecheon Sa, and Seungmoon Choi",
        venue: "EuroHaptics (Demo)",
        link: "https://link.springer.com/chapter/10.1007/978-3-642-14075-4_64"
    },
    {
        year: 2010,
        category: "poster",
        venueShort: "ISMAR",
        title: "Haptic Simulation of Breast Cancer Palpation: A Case Study of Haptic Augmented Reality",
        authors: "Seokhee Jeon, Benjamin Knoerlein, Matthias Harders, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality (Poster)",
        link: "https://ieeexplore.ieee.org/document/5643585"
    },

    // --- 2008 ---
    {
        year: 2008,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Perceived Magnitudes of Vibrations Transmitted Through Mobile Device",
        authors: "Jonghyun Ryu, Jaehoon Jung, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Poster)",
        link: "https://ieeexplore.ieee.org/document/4479930"
    },
    {
        year: 2008,
        category: "poster",
        venueShort: "HAPTICS",
        title: "Haptic Weather",
        authors: "Chaehyun Lee, Bernard D. Adelstein, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Poster)",
        link: "https://ieeexplore.ieee.org/document/4479998"
    }
];

const conferencePapers = [

    {
        year: 2026,
        category: "conference",
        venueShort: "HAPTICS",
        title: "Effects of Frequency, Magnitude, and Inter-subject Variability on Discomfort from Steering Wheel Vibration",
        authors: "Dajin Lee, Soyeon Nam, Minsung Noh, Sunyoung Jang, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Conditionally accepted)",
        link: ""
    },
    {
        year: 2026,
        category: "conference",
        venueShort: "HAPTICS",
        title: "Effects of Spatiotemporal Parameters on Forearm Vibrotactile Stimulus Identification",
        authors: "Dong-Geun Kim, Geunho Lee, Suheon Nam, Chaeyong Park, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium (Conditionally accepted)",
        link: ""
    },

    // --- 2025 ---
    {
        year: 2025,
        category: "conference",
        venueShort: "WHC",
        title: "Augmenting Pinch Selection Using Smart Ring Vibration for Extended Reality Interaction: Perceptual Analysis and Guidelines",
        authors: "Soyeon Nam and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Long Paper)",
        link: "https://ieeexplore.ieee.org/document/11123340"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "WHC",
        title: "Enhancing Body-Penetrating Phantom Sensations Through Multisensory Integration of Sound and Vibration",
        authors: "Hyunuk Kim, Dajin Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Long Paper)",
        link: "https://ieeexplore.ieee.org/document/11123325"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "CHI",
        title: "SkinHaptics: Exploring Skin Softness Perception and Virtual Body Embodiment Techniques to Enhance Self-Haptic Interactions",
        authors: "Jungeun Lee, Minha Jeon, Jinyoung Lee, Seungmoon Choi, and Seungjae Oh",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://doi.org/10.1145/3706598.3713891"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "CHI",
        title: "Real-time Semantic Full-Body Haptic Feedback Converted from Sound for Virtual Reality Gameplay",
        authors: "Gyeore Yun and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://doi.org/10.1145/3706598.3713355"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "CHI",
        title: "Automatic Tuning of Haptic Motion Effects to Evoke Specific Feelings in Multisensory Content",
        authors: "Jiwan Lee, Dawoon Jeong, Sung H. Han, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3706598.3713908"
    },
    {
        year: 2025,
        category: "conference",
        venueShort: "IEEE VR",
        title: "Automatic Generation of Haptic Motion Effects Expressing Human Dance",
        authors: "Jaehyeok Ahn and Seungmoon Choi",
        venue: "IEEE Conference on Virtual Reality and 3D User Interfaces",
        link: "https://ieeexplore.ieee.org/document/10937438"
    },

    // --- 2024 ---
    {
        year: 2024,
        category: "conference",
        venueShort: "ISMAR",
        title: "👑 Expressing the Social Intent of Touch Initiator in Virtual Reality Using Multimodal Haptics",
        authors: "Heeyeon Kim and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality (Best Paper Award Nominee)",
        link: "https://ieeexplore.ieee.org/document/10765428"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "ISMAR",
        title: "Generating Haptic Motion Effects for General Scenes to Improve 4D Experiences",
        authors: "Sangyoon Han, Jaehyeok Ahn, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality",
        link: "https://ieeexplore.ieee.org/document/10808542"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "UIST",
        title: "Modulating Heart Activity and Task Performance Using Haptic Heartbeat Feedback: A Study Across Four Body Placements",
        authors: "Andreia Valente, Dajin Lee, Seungmoon Choi, Mark Billinghurst, and Augusto Esteves",
        venue: "ACM Symposium on User Interface Software and Technology",
        link: "https://doi.org/10.1145/3654777.3676435"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Participatory Design for In-Vehicle Vibrotactile Warnings on Driver’s Seat",
        authors: "Dajin Lee, Jaejun Park, Jeonggoo Kang, Taekun Yun, Dong-Chul Park, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://dl.acm.org/doi/10.1007/978-3-031-70061-3_29"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "A Feasibility Study of Tactile Enhancement of Mid-Air Ultrasonic Stimulation by Wrist Vibration",
        authors: "Dong-Geun Kim and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://dl.acm.org/doi/10.1007/978-3-031-70061-3_1"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Data-driven Haptic Modeling of Inhomogeneous Viscoelastic Deformable Objects",
        authors: "Gautam Kumar, Shashi Prakash, Hojun Cha, Amit Bhardwaj, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://dl.acm.org/doi/10.1007/978-3-031-70058-3_33"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Audiovisual-Haptic Simultaneity Across the Body in Gameplay Viewing Experiences",
        authors: "Jiwan Lee, Gyeore Yun, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://dl.acm.org/doi/10.1007/978-3-031-70058-3_4"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "Human Identification Performance of Vibrotactile Stimuli Applied on the Torso along Azimuth or Elevation",
        authors: "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://dl.acm.org/doi/10.1007/978-3-031-70058-3_1"
    },
    {
        year: 2024,
        category: "conference",
        venueShort: "CHI",
        title: "👑 Augmenting Perceived Length of Handheld Controllers: Effects of Object Handle Properties",
        authors: "Chaeyong Park and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Honorable Mention)",
        link: "https://doi.org/10.1145/3613904.3642251"
    },

    // --- 2023 ---
    {
        year: 2023,
        category: "conference",
        venueShort: "ISMAR",
        title: "Merging Camera and Object Haptic Motion Effects for Improved 4D Experiences",
        authors: "Jaejun Park, Sangyoon Han, and Seungmoon Choi",
        venue: "IEEE International Symposium on Mixed and Augmented Reality",
        link: "https://ieeexplore.ieee.org/document/10316361"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "WHC",
        title: "Perceptual Simultaneity Between Vibrotactile and Impact Stimuli",
        authors: "Chaeyong Park and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/102244592"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "WHC",
        title: "Information Transfer of Full-Body Vibrotactile Stimuli: An Initial Study with One to Three Sequential Vibrations",
        authors: "Jaejun Park, Junwoo Kim, Chaeyong Park, Sangyoon Han, Junseok Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/10224391"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "WHC",
        title: "Human Recognition Performance of Simple Spatial Vibrotactile Patterns on the Torso",
        authors: "Junwoo Kim, Heeyeon Kim, Chaeyong Park, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/10224430"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "CHI",
        title: "👑 Visuo-haptic Crossmodal Shape Perception Model for Shape-Changing Handheld Controllers Bridged by Inertial Tensor",
        authors: "Chaeyong Park, Jeongwoo Kim, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems (Honorable Mention)",
        link: "https://dl.acm.org/doi/10.1145/3544548.3580724"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "CHI",
        title: "Generating Real-Time, Selective, and Multimodal Haptic Effects from Sound for Gaming Experience Enhancement",
        authors: "Gyeore Yun, Minjae Mun, Jungeun Lee, Dong-Geun Kim, Hong Z Tan, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3544548.3580787"
    },
    {
        year: 2023,
        category: "conference",
        venueShort: "CHI",
        title: "Generating Haptic Motion Effects for Multiple Articulated Bodies for Improved 4D Experiences: A Camera Space Approach",
        authors: "Sangyoon Han, Jaejun Park, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3544548.3580727"
    },

    // --- 2022 ---
    {
        year: 2022,
        category: "conference",
        venueShort: "EuroHaptics",
        title: "A Preliminary Study on the Perceptual Independence Between Vibrotactile and Thermal Senses",
        authors: "Jaejun Park, Jeongwoo Kim, Chaeyong Park, Seungjae Oh, Junseok Park, and Seungmoon Choi",
        venue: "EuroHaptics Conference",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-06249-0_9"
    },
    {
        year: 2022,
        category: "conference",
        venueShort: "CHI",
        title: "Vibration-Augmented Buttons: Information Transmission Capacity and Application to Interaction Design",
        authors: "Chaeyong Park, Jeongwoo Kim, Dong-Geun Kim, Seungjae Oh, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://doi.org/10.1145/3491102.3501962"
    },
    {
        year: 2022,
        category: "conference",
        venueShort: "HAPTICS",
        title: "Perception of Electrostatic Friction Stimuli in Free Surface Exploration",
        authors: "Yongjae Yoo, Jongho Lim, Hanseul Cho, and Seungmoon Choi",
        venue: "IEEE Haptics Symposium",
        link: "https://ieeexplore.ieee.org/document/9765609"
    },

    // --- 2021 ---
    {
        year: 2021,
        category: "conference",
        venueShort: "VRST",
        title: "Absolute and Differential Thresholds of Motion Effects in Cardinal Directions",
        authors: "Jiwan Lee, Jaejun Park, and Seungmoon Choi",
        venue: "ACM Symposium on Virtual Reality Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3489849.3489870"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "VRST",
        title: "Image-Based Texture Styling for Motion Effect Rendering",
        authors: "Beomsu Lim, Sangyoon Han, and Seungmoon Choi",
        venue: "ACM Symposium on Virtual Reality Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3489849.3489854"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "UIST",
        title: "Identifying Contact Fingers on Touch Sensitive Surfaces by Ring-Based Vibratory Communication",
        authors: "Seungjae Oh, Chaeyong Park, Yo-Seb Jeon, and Seungmoon Choi",
        venue: "ACM Symposium on User Interface Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3472749.3474745"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Perceived Hardness of Virtual Surface: A Function of Stiffness, Damping, and Contact Transient",
        authors: "Hyejin Choi, Amit Bhardwaj, Gyeore Yoon, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517263"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Multi-Contact Stiffness and Friction Augmentation Using Contact Centroid-Based Normal-Tangential Force Decomposing",
        authors: "Sunghoon Yim, Seungmoon Choi, and Seokhee Jeon",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517211"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Vibrotactile Metaphor of Physical Interaction Using Body-Penetrating Phantom Sensations: Stepping on a Virtual Object",
        authors: "Dajin Lee, Seungjae Oh, Seungmoon Choi, and Bum-Jae You",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517144"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "WHC",
        title: "Perceived Magnitude Function of Friction Rendered by the Dahl Model",
        authors: "Beomsu Lim, Junkyeong Choi, Yongjae Yoo, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/9517127"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "CHI",
        title: "Improving Viewing Experiences of First-Person Shooter Gameplays with Automatically-Generated Motion Effects",
        authors: "Gyeore Yun, Hyoseung Lee, Sangyoon Han, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3411764.3445358"
    },
    {
        year: 2021,
        category: "conference",
        venueShort: "IEEE VR",
        title: "Camera Space Synthesis of Motion Effects Emphasizing a Moving Object in 4D Films",
        authors: "Sangyoon Han, Gyeore Yun, and Seungmoon Choi",
        venue: "IEEE Conference on Virtual Reality and 3D User Interfaces",
        link: "https://ieeexplore.ieee.org/document/9417709"
    },

    // --- 2020 ---
    {
        year: 2020,
        category: "conference",
        venueShort: "UIST",
        title: "Augmenting Physical Buttons with Vibrotactile Feedback for Programmable Feels",
        authors: "Chaeyong Park, Jinhyuk Yoon, Seungjae Oh, and Seungmoon Choi",
        venue: "ACM Symposium on User Interface Software and Technology",
        link: "https://dl.acm.org/doi/10.1145/3379337.3415837"
    },
    {
        year: 2020,
        category: "conference",
        venueShort: "CHI",
        title: "Body-Penetrating Tactile Phantom Sensations",
        authors: "Jinsoo Kim, Seungjae Oh, Chaeyong Park, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://doi.org/10.1145/3313831.3376619"
    },

    // --- 2019 ---
    {
        year: 2019,
        category: "conference",
        venueShort: "ICMI",
        title: "TouchPhoto: Enabling Independent Picture Taking and Understanding for Visually-Impaired Users",
        authors: "Jongho Lim, Yongjae Yoo, Hanseul Cho, and Seungmoon Choi",
        venue: "ACM International Conference on Multimodal Interaction",
        link: "https://dl.acm.org/doi/fullHtml/10.1145/3340555.3353728"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "👑 RealWalk: Haptic Shoes Using Actuated MR Fluid for Walking in VR",
        authors: "Hyungki Son, Inwook Hwang, Tae-Heon Yang, Seungmoon Choi, Sang-Youn Kim, and Jin Ryong Kim",
        venue: "IEEE World Haptics Conference (Candidate for Best Paper Award)",
        link: "https://ieeexplore.ieee.org/document/8816165"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "Seamless Phantom Sensation Moving across a Wide Range of Body",
        authors: "Gyeore Yun, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/8816104"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "👑 Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback",
        authors: "Chaeyong Park, Jaeyoung Park, Seungjae Oh, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Candidate for Best Paper Award)",
        link: "https://ieeexplore.ieee.org/document/88161167"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "Guidance-based Two-Dimensional Haptic Contour Rendering for Accessible Photography",
        authors: "Jongho Lim, Yongjae Yoo, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference",
        link: "https://ieeexplore.ieee.org/document/8816151"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "WHC",
        title: "👑 Perceptual Space of Regular Homogeneous Haptic Textures Rendered Using Electrovibration",
        authors: "Sunung Mun, Hojin Lee, and Seungmoon Choi",
        venue: "IEEE World Haptics Conference (Finalist for Best Paper Award)",
        link: "https://ieeexplore.ieee.org/document/8816143"
    },
    {
        year: 2019,
        category: "conference",
        venueShort: "CHI",
        title: "VibEye: Vibration-Mediated Object Recognition for Tangible Interactive Applications",
        authors: "Seungjae Oh, Gyeore Yun, Chaeyong Park, Jinsoo Kim, and Seungmoon Choi",
        venue: "ACM CHI Conference on Human Factors in Computing Systems",
        link: "https://dl.acm.org/doi/10.1145/3290605.3300906"
    },

    // --- 2018 ---
  {
      year: 2018,
      category: "conference",
      venueShort: "VRST",
      title: "Automatic Transfer of Musical Mood into Virtual Environments",
      authors: "Sangyoon Han, Amit Bhardwaj, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/3281505.3281534"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "VRST",
      title: "Effects of Haptic Texture Rendering Modalities on Realism",
      authors: "Sunghwan Shin and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/3281505.3281520"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAVE",
      title: "Equal-Level Interaction: A Case Study for Improving User Experiences of Visually-Impaired and Sighted People in Group Activities",
      authors: "Hanseul Cho, Kyudong Park, and Seungmoon Choi",
      venue: "IEEE International Symposium on Haptic Audio-Visual Environments and Games",
      link: "https://ieeexplore.ieee.org/document/8547502"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "A Soft Vibrotactile Actuator with Knitted PVC Gel Fabric",
      authors: "Won-Hyeong Park, Yongjae Yoo, Gobong Choi, Seungmoon Choi, and Sang-Youn Kim",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-319-93399-3_14"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "CHI",
      title: "Substituting Motion Effects with Vibrotactile Effects for 4D Experiences",
      authors: "Jongman Seo, Sunung Mun, Jaebong Lee, and Seungmoon Choi",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://doi.org/10.1145/3173574.3174002"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "CHI",
      title: "Tactile Information Transmission by 2D Stationary Phantom Sensations",
      authors: "Gunhyuk Park and Seungmoon Choi",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://doi.org/10.1145/3173574.3173832"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Data-Driven Thermal Rendering: An Initial Study",
      authors: "Hyejin Choi, Seongwon Cho, Sunghwan Shin, Hojin Lee, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/8357199"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAPTICS",
      title: "An Inverse Neural Network Model for Data-driven Texture Rendering on Electrovibration Display",
      authors: "Reza Haghighi Osgouei, Sunghwan Shin, Jin Ryong Kim, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/8357187"
  },
  {
      year: 2018,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Geometry-based Haptic Texture Modeling and Rendering Using Photometric Stereo",
      authors: "Sunghwan Shin and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/8357186"
  },

  // --- 2017 ---
  {
      year: 2017,
      category: "conference",
      venueShort: "ACII",
      title: "Emotional Responses of Vibrotactile-Thermal Stimuli: Effects of Constant-Temperature Thermal Stimuli",
      authors: "Yongjae Yoo, Hojin Lee, Hyejin Choi, and Seungmoon Choi",
      venue: "International Conference on Affective Computing and Intelligent Interaction",
      link: "https://ieeexplore.ieee.org/document/8272602"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "Effects of Visual and Haptic Latency on Touchscreen Interaction: A Case Study Using Painting Task",
      authors: "Jin Ryong Kim, Reza Haghighi Osgouei, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7989894"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "👑 Perceiving Texture Gradients on an Electrostatic Friction Display",
      authors: "Roberta L. Klatzky, Sara Adkins, Prachi Bodas, Reza Haghighi Osgouei, Seungmoon Choi, and Hong Z. Tan",
      venue: "IEEE World Haptics Conference (Candidate for Best Poster Paper Award)",
      link: "https://ieeexplore.ieee.org/document/7989893"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "👑 A Longitudinal Study for Haptic Pitch Correction Guidance for String Instrument Players",
      authors: "Yongjae Yoo and Seungmoon Choi",
      venue: "IEEE World Haptics Conference (Best Poster Paper Award)",
      link: "https://ieeexplore.ieee.org/document/7989897"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "Mid-air Tactile Display Using Indirect Laser Radiation for Contour-Following Stimulation and Assessment of Its Spatial Acuity",
      authors: "Hojun Cha, Hojin Lee, Junsuk Park, Hyung-Sik Kim, Soon-Cheol Chung, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7989890"
  },
  {
      year: 2017,
      category: "conference",
      venueShort: "WHC",
      title: "👑 Attachable and Detachable Vibrotactile Feedback Modules and Their Information Capacity for Spatiotemporal Patterns",
      authors: "Gunhyuk Park, Hojun Cha, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/7989880"
  },

  // --- 2016 ---
  {
      year: 2016,
      category: "conference",
      venueShort: "VRST",
      title: "Interactive Motion Effects Design for a Moving Object in 4D Films",
      authors: "Jaebong Lee, Bohyung Han, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/2993369.2993389"
  },
  {
      year: 2016,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Identification of Primitive Geometrical Shapes Rendered Using Electrostatic Friction Display",
      authors: "Reza Haghighi Osgouei, Jin Ryong Kim, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/7463177"
  },

  // --- 2015 ---
  {
      year: 2015,
      category: "conference",
      venueShort: "IROS",
      title: "Feasibility of a Novel Indicator for Lump Detection Using Contact Pressure Distribution",
      authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
      link: "https://ieeexplore.ieee.org/document/7353658"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Data-Driven Modeling of Isotropic Haptic Textures Using Frequency-Decomposed Neural Networks",
      authors: "Sunghwan Shin, Reza Haghighi Osgouei, Ki-Duk Kim, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177703"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Flexible and Bendable Vibrotactile Actuator Using Electro-conductive Polyurethane",
      authors: "Won-Hyeong Park, Tae-Heon Yang, Yongjae Yoo, Seungmoon Choi, and Sang-Youn Kim",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177708"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Emotional Responses of Tactile Icons: Effects of Amplitude, Frequency, Duration, and Envelope",
      authors: "Yongjae Yoo, Taekbeom Yoo, Jihyun Kong, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177719"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Data-Driven Haptic Modeling and Rendering of Deformable Objects Including Sliding Friction",
      authors: "Sunghoon Yim, Seokhee Jeon, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177730"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Mid-air Tactile Stimulation Using Laser-Induced Thermoelastic Effects: The First Study for Indirect Radiation",
      authors: "Hojin Lee, Ji-Sun Kim, Seungmoon Choi, Jae-Hoon Jun, Jong-Rak Park, A-Hee Kim, Han-Byeol Oh, Hyung-Sik Kim, and Soon-Cheol Chung",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177741"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "WHC",
      title: "Edge Flows: Improving Information Transmission in Mobile Devices Using Two-Dimensional Vibrotactile Flows",
      authors: "Jongman Seo and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/7177686"
  },
  {
      year: 2015,
      category: "conference",
      venueShort: "ICASSP",
      title: "Objective Quality Prediction for Haptic Texture Signal",
      authors: "Rahul Chaudhari, Yongjae Yoo, Clemens Schuwerk, Seungmoon Choi, and Eckehard Steinbach",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
      link: "https://ieeexplore.ieee.org/document/7178366"
  },

  // --- 2014 ---
  {
      year: 2014,
      category: "conference",
      venueShort: "URAI",
      title: "Modeling of the Influence of Tumor on Contact Pressure in Medical Palpation for the Palpation Training System Using FEM Simulation",
      authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "International Conference on Ubiquitous Robots and Ambient Intelligence",
      link: "https://ieeexplore.ieee.org/abstract/document/7057397"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "ICMI",
      title: "An Explorative Study on Crossmodal Congruence Between Visual and Tactile Icons Based on Emotional Responses",
      authors: "Taekbeom Yoo, Yongjae Yoo, and Seungmoon Choi",
      venue: "ACM International Conference on Multimodal Interaction",
      link: "https://dl.acm.org/doi/10.1145/2663204.2663231"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "IROS",
      title: "Contact Force Decomposition Using Tactile Information for Haptic Augmented Reality",
      authors: "Hyoungkyun Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "IEEE/RSJ International Conference on Robots and Systems",
      link: "https://ieeexplore.ieee.org/document/6942716"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Improved Haptic Music Player with Auditory Saliency Estimation",
      authors: "Inwook Hwang and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-662-44193-0_30"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "An Initial Study on Pitch Correction Guidance for String Instruments Using Haptic Feedback",
      authors: "Yongjae Yoo and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-662-44193-0_31"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 PreventFHP: Detection and Warning System for Forward Head Posture",
      authors: "Jaebong Lee, Eunji Cho, Minjae Kim, Yongmin Yoon, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Best Teaser Award)",
      link: "https://ieeexplore.ieee.org/document/6775470"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Vibrotactile Guidance for Drumming Learning: Method and Perceptual Assessment",
      authors: "In Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/6775447"
  },
  {
      year: 2014,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Combining Haptic Guidance and Haptic Disturbance: An Initial Study of Hybrid Haptic Assistance for Virtual Steering Task",
      authors: "Hojin Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/6775449"
  },

  // --- 2013 ---
  {
      year: 2013,
      category: "conference",
      venueShort: "WHC",
      title: "Effects of Multi-modal Guidance for the Acquisition of Sight Reading Skills: A Case Study with Simple Drum Sequences",
      authors: "In Lee and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/6548471"
  },
  {
      year: 2013,
      category: "conference",
      venueShort: "CHI",
      title: "Real-Time Perception-Level Translation from Audio Signals to Vibrotactile Effects",
      authors: "Jaebong Lee and Seungmoon Choi",
      venue: "ACM CHI Conference on Human Factors in Computing Systems",
      link: "https://dl.acm.org/doi/10.1145/2470654.2481354"
  },
  {
      year: 2013,
      category: "conference",
      venueShort: "TEI",
      title: "Demonstration-Based Vibrotactile Pattern Authoring",
      authors: "Kyungpyo Hong, Jaebong Lee, and Seungmoon Choi",
      venue: "International Conference on Tangible, Embedded and Embodied Interaction",
      link: "https://dl.acm.org/doi/10.1145/2460625.2460660"
  },

  // --- 2012 ---
  {
      year: 2012,
      category: "conference",
      venueShort: "AHFE",
      title: "Evaluating the Effectiveness of Haptic Feedback on a Steering Wheel for BSW",
      authors: "Jaemin Chun, Gunhyuk Park, Seungwhan Oh, Jongman Seo, in Lee, Seungmoon Choi, and Sung H. Han",
      venue: "International Conference on Applied Human Factors and Ergonomics",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/b12322-48/evaluating-effectiveness-haptic-feedback-steering-wheel-bsw-jaemin-chun-gunhyuk-park-seunghwan-oh-jongman-seo-lee-seungmoon-choi-sung-han"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAVE",
      title: "Perceived Intensity of Tool-Transmitted Vibration: Effects of Amplitude and Frequency",
      authors: "Inwook Hwang, Jongman Seo, Myongchan Kim, and Seungmoon Choi",
      venue: "IEEE International Symposium on Haptic Visual-Audio Environments and Games",
      link: "https://ieeexplore.ieee.org/document/6374438/"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAVE",
      title: "Evaluation of Driving Skills Using an HMM-based Distance Measure",
      authors: "Reza Haghighi Osgouei and Seungmoon Choi",
      venue: "IEEE International Symposium on Haptic Visual-Audio Environments and Games",
      link: "https://ieeexplore.ieee.org/document/6374445"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "ACM MM",
      title: "Low Bitrate Source-filter Model Based Compression of Vibrotactile Texture Signals in Haptic Teleoperation",
      authors: "Rahul Chaudhari, Burak Çizmeci, Katherine J. Kuchenbecker, Seungmoon Choi, and Eckehard Steinbach",
      venue: "ACM International Conference on Multimedia",
      link: "https://dl.acm.org/doi/10.1145/2393347.2393407"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Effect of Mechanical Ground on the Vibrotactile Perceived Intensity of a Handheld Object",
      authors: "Inwook Hwang, and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-642-31404-9_11"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Saliency-driven Tactile Effect Authoring for Real-time Visuotactile Feedback",
      authors: "Myongchan Kim, Sungkil Lee, and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-642-31401-8_24"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Shape Modeling of Soft Real Objects Using Force-Feedback Haptic Interface",
      authors: "Sunghoon Yim and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/6183834"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Guidance Methods for Bimanual Timing Tasks",
      authors: "In Lee, Kyungpyo Hong, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/6183805"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Evaluation of Vibrotactile Pattern Design Using Vibrotactile Score",
      authors: "Jaebong Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/6183796"
  },
  {
      year: 2012,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Haptic Simulation of Refrigerator Door",
      authors: "Sunghwan Shin, in Lee, Hojin Lee, Gabjong Han, Kyungpyo Hong, Sunghoon Yim, Jongwon Lee, Young Jin Park, Byeong Ki Kang, Dae Ho Ryoo, Dae Whan Kim, Seungmoon Choi, and Wan Kyun Chung",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/6183783"
  },

  // --- 2011 ---
  {
      year: 2011,
      category: "conference",
      venueShort: "ISUVR",
      title: "Effect of Active and Passive Haptic Sensory Information on Memory for 2D Sequential Selection Task",
      authors: "Hojin Lee, Gabjong Han, in Lee, Sunghoon Yim, Kyungpyo Hong, and Seungmoon Choi",
      venue: "International Symposium on Ubiquitous Virtual Reality",
      link: "https://ieeexplore.ieee.org/abstract/document/6068306"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "HAID",
      title: "Consonance Perception of Vibrotactile Chords: A Feasibility Study",
      authors: "Yongjae Yoo, Inwook Hwang, and Seungmoon Choi",
      venue: "International Workshop on Haptic and Audio Interaction Design",
      link: "https://link.springer.com/chapter/10.1007/978-3-642-22950-3_5"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "MobileHCI",
      title: "Tactile Effect Design and Evaluation for Virtual Buttons on a Mobile Device Touchscreen",
      authors: "Gunhyuk Park, Seungmoon Choi, Kyunghun Hwang, Sunwook Kim, Jaecheon Sa, and Moonchae Joung",
      venue: "International Conference on Human-Computer Interaction with Mobile Devices and Services",
      link: "https://dl.acm.org/doi/10.1145/2037373.2037376"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "Extensions to Haptic Augmented Reality: Modulating Friction and Weight",
      authors: "Seokhee Jeon, Jean-Claude Metzger, Seungmoon Choi, and Matthias Harders",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/5945490"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "TAXEL: Initial Progress Toward Self-Morphing Visio-Haptic Interface",
      authors: "Ki-Uk Kyung, Jeong Mook Lim, Yo-An Lim, Suntak Park, Seung Koo Park, Inwook Hwang, Seungmoon Choi, Jongman Seo, Sang-Youn Kim, Tae-Heon Yang, and Dong-Soo Kwon",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/5945458"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "The Haptic Crayola Effect: Exploring the Role of Naming in Learning Haptic Stimuli",
      authors: "Inwook Hwang, Karon E. MacLean, Matthew Brehmer, Jeff Hendy, Andreas Sotirakopoulos, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/5945517"
  },
  {
      year: 2011,
      category: "conference",
      venueShort: "WHC",
      title: "👑 Perceptual Space of Amplitude-Modulated Vibrotactile Stimuli",
      authors: "Gunhyuk Park and Seungmoon Choi",
      venue: "IEEE World Haptics Conference (Candidate for Best Student Paper Award)",
      link: "https://ieeexplore.ieee.org/document/5945462"
  },

  // --- 2010 ---
  {
      year: 2010,
      category: "conference",
      venueShort: "MobileHCI",
      title: "Improving Vibrotactile Pattern Identification for Mobile Devices Using Perceptually Transparent Rendering",
      authors: "Jonghyun Ryu, Chil-Woo Lee, and Seungmoon Choi",
      venue: "International Conference on Human-Computer Interaction with Mobile Devices and Services",
      link: "https://dl.acm.org/doi/10.1145/1851600.1851643"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Extended Rate-Hardness: A Measure for Perceived Hardness",
      authors: "Gabjong Han and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-642-14064-8_18"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Initial Study of Creating Linearly Moving Vibrotactile Sensation on Mobile Device",
      authors: "Jongman Seo and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Poster Award)",
      link: ""
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Effects of Kinesthetic Information on Memory Chunking in 2D Sequential Selection Task",
      authors: "Gabjong Han, Jaebong Lee, in Lee, Seokhee Jeon, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://www.researchgate.net/publication/224129908_Effects_of_kinesthetic_information_on_working_memory_for_2D_sequential_selection_task"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Stiffness Modulation for Haptic Augmented Reality: Extension to 3D Interaction",
      authors: "Seokhee Jeon and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Best Demo Award)",
      link: "https://ieeexplore.ieee.org/document/5444645/"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Effects of Haptic Guidance and Disturbance on Motor Learning: Potential Advantage of Haptic Disturbance",
      authors: "Jaebong Lee and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/5444635"
  },
  {
      year: 2010,
      category: "conference",
      venueShort: "HAPTICS",
      title: "👑 Perceptual Space and Adjective Rating of Sinusoidal Vibration Perceived via Mobile Device",
      authors: "Inwook Hwang and Seungmoon Choi",
      venue: "IEEE Haptics Symposium (Candidate for Best Student Paper Award)",
      link: "https://ieeexplore.ieee.org/document/5444692"
  },

  // --- 2009 ---
  {
      year: 2009,
      category: "conference",
      venueShort: "VRST",
      title: "Improving Perceived Hardness of Haptic Rendering via Stiffness Shifting: An Initial Study",
      authors: "Gabjong Han, Seokhee Jeon, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology",
      link: "https://dl.acm.org/doi/10.1145/1643928.1643949"
  },
  {
      year: 2009,
      category: "conference",
      venueShort: "WHC",
      title: "Vibrotactile Score: A Score Metaphor for Designing Vibrotactile Patterns",
      authors: "Jaebong Lee, Jonghyun Ryu, and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://dl.acm.org/doi/10.1109/WHC.2009.4810816"
  },
  {
      year: 2009,
      category: "conference",
      venueShort: "WHC",
      title: "👑 System Improvements in Mobile Haptic Interface",
      authors: "In Lee, Inwook Hwang, Kyung-Lyong Han, Oh Kyu Choi, Seungmoon Choi, and Jin S. Lee",
      venue: "IEEE World Haptics Conference (Best Student Paper Award)",
      link: "https://ieeexplore.ieee.org/document/4810834"
  },

  // --- 2008 ---
  {
      year: 2008,
      category: "conference",
      venueShort: "HAVE",
      title: "posVibEditor: Graphical Authoring Tool of Vibrotactile Patterns",
      authors: "Jonghyun Ryu and Seungmoon Choi",
      venue: "IEEE International Workshop on Haptic Audio Visual Environments and Games",
      link: "https://ieeexplore.ieee.org/document/4685310"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "ICCAS",
      title: "Design and Control of Omni-Directional Mobile Robot for Mobile Haptic Interface",
      authors: "Kyung-Lyong Han, Oh Kyu Choi, in Lee, Inwook Hwang, Jin S. Lee, and Seungmoon Choi",
      venue: "International Conference on Control, Automation, and Systems",
      link: "https://ieeexplore.ieee.org/document/4694349"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Benefits of Perceptually Transparent Vibration Rendering in Mobile Device",
      authors: "Jonghyun Ryu and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-540-69057-3_90"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Haptic Pottery Modeling Using Circular Sector Element Method",
      authors: "Jaebong Lee, Gabjong Han, and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-540-69057-3_84"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "EuroHaptics",
      title: "Modulating Real Object Stiffness for Haptic Augmented Reality",
      authors: "Seokhee Jeon and Seungmoon Choi",
      venue: "EuroHaptics Conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-540-69057-3_78"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "ICRA",
      title: "Human Guided Surgical Robot System for Spinal Fusion Surgery: CoRASS",
      authors: "Jongwon Lee, Keehoon Kim, Wan Kyun Chung, Seungmoon Choi, and Young Soo Kim",
      venue: "IEEE International Conference on Robotics and Automation",
      link: "https://ieeexplore.ieee.org/document/4543807"
  },
  {
      year: 2008,
      category: "conference",
      venueShort: "HAPTICS",
      title: "Haptizing Surface Topography with Varying Stiffness Based on Force Constancy: Extended Algorithm",
      authors: "Jaeyoung Cheon, Inwook Hwang, Gabjong Han, and Seungmoon Choi",
      venue: "IEEE Haptics Symposium",
      link: "https://ieeexplore.ieee.org/document/4479942"
  },

  // --- 2007 ---
  {
      year: 2007,
      category: "conference",
      venueShort: "VRST",
      title: "👑 Real-Time Tracking of Visually Attended Objects in Interactive Virtual Environments",
      authors: "Sungkil Lee, Gerard J. Kim, and Seungmoon Choi",
      venue: "ACM Symposium on Virtual Reality Software and Technology (Candidate for Best Paper Award)",
      link: "https://ieeexplore.ieee.org/document/4531740"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "FBIT",
      title: "Discrimination of Virtual Environments Under Visual and Haptic Rendering Delays",
      authors: "In Lee and Seungmoon Choi",
      venue: "International Conference on Frontiers in the Convergence of Bioscience and Information Technologies",
      link: "https://ieeexplore.ieee.org/document/4524165"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "RO-MAN",
      title: "Perceptually Transparent Vibration Rendering Using a Vibration Motor for Haptic Interaction",
      authors: "Jonghyun Ryu, Jaehoon Jung, Seojoon Kim, and Seungmoon Choi",
      venue: "IEEE International Symposium on Robot & Human Interactive Communication",
      link: "https://ieeexplore.ieee.org/document/4415100/"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "HCII",
      title: "AR Pottery: Experiencing Pottery Making in the Augmented Space",
      authors: "Gabjong Han, Jane Hwang, Seungmoon Choi, and Gerard J. Kim",
      venue: "Human-Computer Interaction International",
      link: "https://dl.acm.org/doi/10.5555/1770090.17701630"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "HCII",
      title: "Power Consumption and Perceived Magnitude of Vibration Feedback in Mobile Devices",
      authors: "Jaehoon Jung and Seungmoon Choi",
      venue: "Human-Computer Interaction International",
      link: "https://link.springer.com/chapter/10.1007/978-3-540-73107-8_40"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "ICRA",
      title: "A Noble Bilateral Teleoperation System for Human Guided Spinal Fusion",
      authors: "Keehoon Kim, Jongwon Lee, Wan Kyun Chung, Seungmoon Choi, Young Soo Kim, and Il Hong Suh",
      venue: "IEEE International Conference on Robotics and Automation",
      link: "https://ieeexplore.ieee.org/document/4209210"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "WHC",
      title: "Mechanical Impedance of the Hand Holding a Spherical Tool at Threshold and Suprathreshold Stimulation Levels",
      authors: "Ali Israr, Seungmoon Choi, and Hong Z. Tan",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/4145151/"
  },
  {
      year: 2007,
      category: "conference",
      venueShort: "WHC",
      title: "Haptizing a Surface Height Change with Varying Stiffness Based on Force Constancy: Effect of Surface Normal Rendering",
      authors: "Jaeyoung Cheon and Seungmoon Choi",
      venue: "IEEE World Haptics Conference",
      link: "https://ieeexplore.ieee.org/document/4145156"
  }
];
/* data.js - Patent Data */

const patentData = [
    // --- Registered International Patents ---
    {
        year: 2025,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Haptic Feedback Control Apparatus and Method Thereof",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 2025/0195997 A1)",
        link: "https://patents.google.com/patent/US20250195997A1"
    },
    {
        year: 2024,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Apparatus for Generating and Merging Image-based Texture Motion",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 12,067,168 B2)",
        link: "https://patents.google.com/patent/US12067168B2"
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Apparatus for Generating Motion Effects and Computer Readable Medium for the Same",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 10,147,213 B2)",
        link: "https://patents.google.com/patent/US10147213B2"
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Somatic Sensation Induction System Using Pulse Laser and Medium of High Absorption Coefficient",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 10,058,712 B2)",
        link: "https://patents.google.com/patent/US10058712B2"
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Device for Generating Vibration Based on an Adjective",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,880,570 B2)",
        link: "https://patents.google.com/patent/US9880570B2"
    },
    {
        year: 2017,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Device for Generating Vibration by Using Adjective Space on a Timeline",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,600,984 B2)",
        link: "https://patents.google.com/patent/US9600984B2"
    },
    {
        year: 2017,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Method and Apparatus for Generating Haptic Signal with Auditory Saliency Estimation",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,640,047 B2)",
        link: "https://patents.google.com/patent/US9640047B2"
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Laser Apparatus Capable of Controlling a Photo−mechanical Effect and Method Using the Same",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 9,092,955 B2)",
        link: "https://patents.google.com/patent/US9092955B2"
    },
    {
        year: 2011,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Vibration Authoring Tool, Vibration Authoring Method, and Storage Medium Recorded with the Same",
        authors: "Seungmoon Choi",
        venue: "Registered International Patent (US 7,999,166 B2)",
        link: "https://patents.google.com/patent/US7999166B2"
    },

    // --- Applied International Patents ---
    {
        year: 2019,
        category: "patent",
        venueShort: "Int. Patent",
        title: "Apparatus and Method for Providing Virtual Texture",
        authors: "Seungmoon Choi",
        venue: "Applied International Patent (US 14/962,055)",
        link: ""
    },

    // --- Registered Domestic Patents (Korea) ---
    {
        year: 2025,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Device for Transforming DoF in Mulse-media System (다중감각미디어시스템에서 자유도변환방법 및 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2806247)",
        link: ""
    },
    {
        year: 2023,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Device for Providing Motion Effect (모션효과제공장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2575318)",
        link: ""
    },
    {
        year: 2021,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Object Identification Apparatus and Method, System Comprising the Same (물체 인식 장치 및 방법 그리고 이를 포함하는 물체 인식 시스템)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2272641)",
        link: ""
    },
    {
        year: 2021,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Providing a Texture Signal (질감 신호 제공 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2247521)",
        link: ""
    },
    {
        year: 2020,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Device for Generating Vibration Using Adjective (형용사를 이용한 진동 생성 방법 및 디바이스)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2191968)",
        link: ""
    },
    {
        year: 2019,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Providing a Virtual Texture (재질감 제공 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-2045891)",
        link: ""
    },
    {
        year: 2018,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Navigating Apparatus and System by Inducing Tactile Sense (체감각 유도 방식의 길 안내 장치 및 시스템)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1825674)",
        link: ""
    },
    {
        year: 2017,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "The Method of Decompositioning Contact Force and the Haptic Apparatus Thereof (접촉힘을 분해하는 방법 및 이를 적용한 햅틱 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1728733)",
        link: ""
    },
    {
        year: 2016,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Generating Motion Effects by Analyzing Motion of Object (객체의 움직임 분석을 이용한 모션 효과 생성 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1642200)",
        link: ""
    },
    {
        year: 2016,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus for Generating Motion Effects and Computer Readable Medium for the Same (모션 효과 생성 장치 및 이를 위한 컴퓨터로 읽을 수 있는 기록매체)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1642198)",
        link: ""
    },
    {
        year: 2016,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method for Haptic Signal Generation Based on Auditory Saliency and Apparatus Therefor (청각 주목도에 기반한 햅틱 신호 생성 방법 및 이를 위한 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1641418)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "System for Inducing Tactile Sense Using Pulse Laser and Medium with High Absorption Coefficient (펄스 레이저 및 흡수계수가 높은 매질을 이용한 체성감각 유도 시스템)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1581763)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Outputting Braille Using Laser Beam (레이저 빔을 이용한 점자 출력 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1523619)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Providing Motion Haptic Effect Using Video Analysis (영상 분석을 통하여 모션 햅틱 효과를 제공하는 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1507242)",
        link: ""
    },
    {
        year: 2015,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Surgical Robot Capable of Providing Tactile Sense Using Laser Beam (레이저 빔을 이용하여 촉감을 제공할 수 있는 수술용 로봇 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1483428)",
        link: ""
    },
    {
        year: 2014,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method for Converting Audio Signal to Haptic Signal and Apparatus for Performing the Same (오디오 신호의 햅틱 신호 변환 방법 및 이를 수행하는 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1427993)",
        link: ""
    },
    {
        year: 2014,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Electronic Device for Providing Tactile Sense Using Laser and Method Using the Same (레이저를 이용하여 촉감을 제공하는 전자 장치 및 이를 이용한 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1375613)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Apparatus and Method for Guiding State Information of Vehicle (운송 장치의 상태 정보를 안내하는 안내 장치 및 방법)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1345310)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Laser Apparatus Capable of Pulsed Laser Beam Diameter for Regulation of Tactile Sense and Method Using the Same",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1340359)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Laser Apparatus Capable of Regulating Photo-Mechanical Effect and Method Using the Same",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1340361)",
        link: ""
    },
    {
        year: 2013,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Method and Apparatus for Providing Tactile Effect (촉각 효과의 제공 방법 및 장치)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1305735)",
        link: ""
    },
    {
        year: 2011,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Vibration Authoring Tool (진동 저작 도구)",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-1080989)",
        link: ""
    },
    {
        year: 2008,
        category: "patent",
        venueShort: "Dom. Patent",
        title: "Device and Method for Controlling an Electric Device Using an Inertial Sensor and a Camera",
        authors: "Seungmoon Choi",
        venue: "Registered Domestic Patent (KR 10-0837819)",
        link: ""
    }
];
// ... [Awards 데이터 등 나머지는 기존 유지] ...

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

const publicationData = [
    ...journalPapers,
    ...conferencePapers,
    ...posterDemoPapers,
    ...patentData// 이 부분 추가
];
