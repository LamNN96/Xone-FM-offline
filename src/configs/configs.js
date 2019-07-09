export const configuration = {
  format: {
    filePath: "%s/%s",
    date: "YYYY-MM-DD",
    fileSavedPath: "%s/%s-%s%s%s-%s.mp3"
  }
};

export const categories = [
  {
    id: 0,
    shortName: "bx",
    name: "Breakfast Xone",
    image: require("../assets/cao.jpg"),
    timeFrames: [
      {
        id: 0,
        label: "7h-8h",
        description: "Đánh thức ngày mới",
        linkFormat:
          "https://xonefm.com/wp-content/uploads/%s/%s/V89-%s%s-07h00-BREAKFASTXONE-danhthucngaymoi.mp3"
      },
      {
        id: 1,
        label: "8h-9h",
        description: "Đánh thức ngày mới",
        linkFormat:
          "https://xonefm.com/wp-content/uploads/%s/%s/V89-%s%s-08h00-BREAKFASTXONE-danhthucngaymoi.mp3"
      }
    ]
  },
  {
    id: 1,
    shortName: "dx",
    name: "Drive Xone",
    image: require("../assets/dx.jpg"),
    timeFrames: [
      {
        id: 0,
        label: "17h-18h",
        description: "Chuyến xe chất chơi",
        linkFormat:
          "https://xonefm.com/wp-content/uploads/%s/%s/V89-%s%s-17h00-DRIVEXONE-chuyenxechatchoi.mp3"
      },
      {
        id: 1,
        label: "18h-19h",
        description: "Chuyến xe chất chơi",
        linkFormat:
          "https://xonefm.com/wp-content/uploads/%s/%s/V89-%s%s-18h00-DRIVEXONE-chuyenxechatchoi.mp3"
      }
    ]
  },
  {
    id: 2,
    shortName: "vn20",
    name: "VN 20",
    image: require("../assets/vn20.jpg"),
    timeFrames: [
      {
        id: 0,
        label: "21h",
        description: "Bảng xếp hạng các ca khúc Việt Nam",
        linkFormat:
          "https://xonefm.com/wp-content/uploads/%s/%s/V89-%s%s-21h00-VN20-bangxephangcaccakhucvietnam.mp3"
      }
    ]
  },
  {
    id: 3,
    shortName: "wo",
    name: "What's on",
    image: require("../assets/xonelife.jpg"),
    timeFrames: [
      {
        id: 0,
        label: "19h",
        description: "Cho buổi tối hoàn hảo",
        linkFormat:
          "https://xonefm.com/wp-content/uploads/%s/%s/V89-%s%s-19h00-WHATSON-chobuoitoihoanhao.mp3"
      }
    ]
  }
];
