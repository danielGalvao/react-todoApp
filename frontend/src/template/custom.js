import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "markAsDone": {
        "textDecoration": "line-through",
        "color": "#777"
    },
    "button": {
        "marginRight": 10
    },
    "td + td": {
        "width": "20%",
        "textAlign": "right"
    },
    "alignRight": {
        "textAlign": "right",
        "paddingRight": 8
    },
    "table": {
        "marginTop": 30,
        "clear": "both",
        "display": "inline-table"
    },
    "thead th + th": {
        "textAlign": "center"
    }
});