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
    image: require("../assets/dx.jpg")
  },
  {
    id: 2,
    shortName: "vn20",
    name: "VN 20",
    image: require("../assets/vn20.jpg")
  },
  {
    id: 3,
    shortName: "xl",
    name: "Xone Life",
    image: require("../assets/xonelife.jpg")
  }
];
