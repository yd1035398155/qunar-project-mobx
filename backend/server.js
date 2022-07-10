const express = require("express")
const app = express()
app.get("/date", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  let flight_info = {}
  switch (request.query.date) {
    case "A":
      flight_info = flight_info1
      break
    case "B":
      flight_info = flight_info2
      break
    case "C":
      flight_info = flight_info3
      break
    case "D":
      flight_info = flight_info4
      break
    case "E":
      flight_info = flight_info5
      break
    default:
      break
  }
  response.send(JSON.stringify(flight_info))
})
app.listen(8000, () => {
  console.log("服务启动，8000端口监听中")
})

// data
let flight_info1 = {
  data1: {
    from_info: {
      hour: 7,
      minite: 25,
      place: "江北T2",
    },
    to_info: {
      hour: 11,
      minite: 25,
      place: "首都T2",
    },
    company_info: "川航3U8820 空客320(中)",
    price_info: {
      price: 485,
      discribe: "经济舱1.7折",
    },
  },
  data2: {
    from_info: {
      hour: 8,
      minite: 15,
      place: "江北T3",
    },
    to_info: {
      hour: 13,
      minite: 15,
      place: "大兴",
    },
    company_info: "河北航NS8052 波音738(中)",
    price_info: {
      price: 491,
      discribe: "特惠经济舱2.1折",
    },
  },
  data3: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "厦航MF7132 波音738(中)",
    price_info: {
      price: 492,
      discribe: "特惠经济舱2.1折",
    },
  },
  data4: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "河北航NS8036 波音738(中)",
    price_info: {
      price: 497,
      discribe: "特惠经济舱2.1折",
    },
  },
  data5: {
    from_info: {
      hour: 11,
      minite: 20,
      place: "江北T2",
    },
    to_info: {
      hour: 13,
      minite: 55,
      place: "大兴",
    },
    company_info: "海航旗下首航JD5756",
    price_info: {
      price: 687,
      discribe: "首惠经济舱3.2折",
    },
  },
  data6: {
    from_info: {
      hour: 19,
      minite: 50,
      place: "江北T3",
    },
    to_info: {
      hour: 22,
      minite: 30,
      place: "大兴",
    },
    company_info: "东航MU6686 空客321(中)",
    price_info: {
      price: 737,
      discribe: "经济舱",
    },
  },
  data7: {
    from_info: {
      hour: 19,
      minite: 50,
      place: "江北T3",
    },
    to_info: {
      hour: 22,
      minite: 30,
      place: "大兴",
    },
    company_info: "厦航MF3020 空客321(中)",
    price_info: {
      price: 715,
      discribe: "经济舱",
    },
  },
  data8: {
    from_info: {
      hour: 12,
      minite: 40,
      place: "江北T3",
    },
    to_info: {
      hour: 15,
      minite: 10,
      place: "大兴",
    },
    company_info: "中联航KN5718 波音737(中)",
    price_info: {
      price: 745,
      discribe: "经济舱",
    },
  },
  data9: {
    from_info: {
      hour: 7,
      minite: 5,
      place: "江北T2",
    },
    to_info: {
      hour: 9,
      minite: 40,
      place: "首都T2",
    },
    company_info: "川航3U8829 空客320(中)",
    price_info: {
      price: 933,
      discribe: "经济舱",
    },
  },
  data10: {
    from_info: {
      hour: 11,
      minite: 20,
      place: "江北T3",
    },
    to_info: {
      hour: 14,
      minite: 0,
      place: "大兴",
    },
    company_info: "厦航MF3024 空客321(中)",
    price_info: {
      price: 939,
      discribe: "经济舱",
    },
  },
}
let flight_info2 = {
  data1: {
    from_info: {
      hour: 20,
      minite: 55,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 35,
      place: "大兴",
    },
    company_info: "重庆航QQ2108其他机型",
    price_info: {
      price: 435,
      discribe: "经济舱2.1折",
    },
  },
  data2: {
    from_info: {
      hour: 20,
      minite: 55,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 35,
      place: "大兴",
    },
    company_info: "南航CZ2608其他机型",
    price_info: {
      price: 440,
      discribe: "经济舱2.1折",
    },
  },
  data3: {
    from_info: {
      hour: 22,
      minite: 15,
      place: "江北T3",
    },
    to_info: {
      hour: 0,
      minite: 40,
      place: "大兴",
    },
    company_info: "东航MU6690 空客321(中)",
    price_info: {
      price: 472,
      discribe: "经济舱2.2折",
    },
  },
  data4: {
    from_info: {
      hour: 14,
      minite: 20,
      place: "江北T2",
    },
    to_info: {
      hour: 19,
      minite: 40,
      place: "首都T2",
    },
    company_info: "川航3U8820 空客320(中)",
    price_info: {
      price: 485,
      discribe: "经济舱1.9折",
    },
  },
  data5: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "河北航NS8036 波音738(中)",
    price_info: {
      price: 491,
      discribe: "经济舱2.1折",
    },
  },
  data6: {
    from_info: {
      hour: 21,
      minite: 0,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 40,
      place: "大兴",
    },
    company_info: "东航MU6688 空客320(中)",
    price_info: {
      price: 492,
      discribe: "经济舱2.3折",
    },
  },
  data7: {
    from_info: {
      hour: 8,
      minite: 15,
      place: "江北T3",
    },
    to_info: {
      hour: 13,
      minite: 15,
      place: "大兴",
    },
    company_info: "河北航NS8052 波音738(中)",
    price_info: {
      price: 493,
      discribe: "特惠经济舱2.1",
    },
  },
  data8: {
    from_info: {
      hour: 7,
      minite: 0,
      place: "江北T2",
    },
    to_info: {
      hour: 16,
      minite: 15,
      place: "首都T2",
    },
    company_info: "华夏航G523T1k 机型未定",
    price_info: {
      price: 520,
      discribe: "经济舱2折",
    },
  },
}
let flight_info3 = {
  data1: {
    from_info: {
      hour: 7,
      minite: 25,
      place: "江北T2",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "首都T2",
    },
    company_info: "川航3U8820 空客320(中)",
    price_info: {
      price: 485,
      discribe: "经济舱1.7折",
    },
  },
  data2: {
    from_info: {
      hour: 8,
      minite: 15,
      place: "江北T3",
    },
    to_info: {
      hour: 13,
      minite: 15,
      place: "大兴",
    },
    company_info: "河北航NS8052 波音738(中)",
    price_info: {
      price: 491,
      discribe: "特惠经济舱2.1折",
    },
  },
  data3: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "厦航MF7132 波音738(中)",
    price_info: {
      price: 492,
      discribe: "特惠经济舱2.1折",
    },
  },
  data4: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "河北航NS8036 波音738(中)",
    price_info: {
      price: 497,
      discribe: "特惠经济舱2.1折",
    },
  },
  data5: {
    from_info: {
      hour: 11,
      minite: 20,
      place: "江北T2",
    },
    to_info: {
      hour: 13,
      minite: 55,
      place: "大兴",
    },
    company_info: "海航旗下首航JD5756",
    price_info: {
      price: 687,
      discribe: "首惠经济舱3.2折",
    },
  },
  data6: {
    from_info: {
      hour: 19,
      minite: 50,
      place: "江北T3",
    },
    to_info: {
      hour: 22,
      minite: 30,
      place: "大兴",
    },
    company_info: "东航MU6686 空客321(中)",
    price_info: {
      price: 737,
      discribe: "经济舱",
    },
  },
  data7: {
    from_info: {
      hour: 19,
      minite: 50,
      place: "江北T3",
    },
    to_info: {
      hour: 22,
      minite: 30,
      place: "大兴",
    },
    company_info: "厦航MF3020 空客321(中)",
    price_info: {
      price: 715,
      discribe: "经济舱",
    },
  },
  data8: {
    from_info: {
      hour: 12,
      minite: 40,
      place: "江北T3",
    },
    to_info: {
      hour: 15,
      minite: 10,
      place: "大兴",
    },
    company_info: "中联航KN5718 波音737(中)",
    price_info: {
      price: 745,
      discribe: "经济舱",
    },
  },
  data9: {
    from_info: {
      hour: 7,
      minite: 5,
      place: "江北T2",
    },
    to_info: {
      hour: 9,
      minite: 40,
      place: "首都T2",
    },
    company_info: "川航3U8829 空客320(中)",
    price_info: {
      price: 933,
      discribe: "经济舱",
    },
  },
  data10: {
    from_info: {
      hour: 11,
      minite: 20,
      place: "江北T3",
    },
    to_info: {
      hour: 14,
      minite: 0,
      place: "大兴",
    },
    company_info: "厦航MF3024 空客321(中)",
    price_info: {
      price: 939,
      discribe: "经济舱",
    },
  },
}
let flight_info4 = {
  data1: {
    from_info: {
      hour: 20,
      minite: 55,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 35,
      place: "大兴",
    },
    company_info: "重庆航QQ2108其他机型",
    price_info: {
      price: 435,
      discribe: "经济舱2.1折",
    },
  },
  data2: {
    from_info: {
      hour: 20,
      minite: 55,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 35,
      place: "大兴",
    },
    company_info: "南航CZ2608其他机型",
    price_info: {
      price: 440,
      discribe: "经济舱2.1折",
    },
  },
  data3: {
    from_info: {
      hour: 22,
      minite: 15,
      place: "江北T3",
    },
    to_info: {
      hour: 0,
      minite: 40,
      place: "大兴",
    },
    company_info: "东航MU6690 空客321(中)",
    price_info: {
      price: 472,
      discribe: "经济舱2.2折",
    },
  },
  data4: {
    from_info: {
      hour: 14,
      minite: 20,
      place: "江北T2",
    },
    to_info: {
      hour: 19,
      minite: 40,
      place: "首都T2",
    },
    company_info: "川航3U8820 空客320(中)",
    price_info: {
      price: 485,
      discribe: "经济舱1.9折",
    },
  },
  data5: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "河北航NS8036 波音738(中)",
    price_info: {
      price: 491,
      discribe: "经济舱2.1折",
    },
  },
  data6: {
    from_info: {
      hour: 21,
      minite: 0,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 40,
      place: "大兴",
    },
    company_info: "东航MU6688 空客320(中)",
    price_info: {
      price: 492,
      discribe: "经济舱2.3折",
    },
  },
  data7: {
    from_info: {
      hour: 8,
      minite: 15,
      place: "江北T3",
    },
    to_info: {
      hour: 13,
      minite: 15,
      place: "大兴",
    },
    company_info: "河北航NS8052 波音738(中)",
    price_info: {
      price: 493,
      discribe: "特惠经济舱2.1",
    },
  },
  data8: {
    from_info: {
      hour: 7,
      minite: 0,
      place: "江北T2",
    },
    to_info: {
      hour: 16,
      minite: 15,
      place: "首都T2",
    },
    company_info: "华夏航G523T1k 机型未定",
    price_info: {
      price: 520,
      discribe: "经济舱2折",
    },
  },
}
let flight_info5 = {
  data1: {
    from_info: {
      hour: 7,
      minite: 25,
      place: "江北T2",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "首都T2",
    },
    company_info: "川航3U8820 空客320(中)",
    price_info: {
      price: 485,
      discribe: "经济舱1.7折",
    },
  },
  data2: {
    from_info: {
      hour: 8,
      minite: 15,
      place: "江北T3",
    },
    to_info: {
      hour: 13,
      minite: 15,
      place: "大兴",
    },
    company_info: "河北航NS8052 波音738(中)",
    price_info: {
      price: 491,
      discribe: "特惠经济舱2.1折",
    },
  },
  data3: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "厦航MF7132 波音738(中)",
    price_info: {
      price: 492,
      discribe: "特惠经济舱2.1折",
    },
  },
  data4: {
    from_info: {
      hour: 20,
      minite: 25,
      place: "江北T3",
    },
    to_info: {
      hour: 23,
      minite: 0,
      place: "大兴",
    },
    company_info: "河北航NS8036 波音738(中)",
    price_info: {
      price: 497,
      discribe: "特惠经济舱2.1折",
    },
  },
  data5: {
    from_info: {
      hour: 11,
      minite: 20,
      place: "江北T2",
    },
    to_info: {
      hour: 13,
      minite: 55,
      place: "大兴",
    },
    company_info: "海航旗下首航JD5756",
    price_info: {
      price: 687,
      discribe: "首惠经济舱3.2折",
    },
  },
  data6: {
    from_info: {
      hour: 19,
      minite: 50,
      place: "江北T3",
    },
    to_info: {
      hour: 22,
      minite: 30,
      place: "大兴",
    },
    company_info: "东航MU6686 空客321(中)",
    price_info: {
      price: 737,
      discribe: "经济舱",
    },
  },
  data7: {
    from_info: {
      hour: 19,
      minite: 50,
      place: "江北T3",
    },
    to_info: {
      hour: 22,
      minite: 30,
      place: "大兴",
    },
    company_info: "厦航MF3020 空客321(中)",
    price_info: {
      price: 715,
      discribe: "经济舱",
    },
  },
  data8: {
    from_info: {
      hour: 12,
      minite: 40,
      place: "江北T3",
    },
    to_info: {
      hour: 15,
      minite: 10,
      place: "大兴",
    },
    company_info: "中联航KN5718 波音737(中)",
    price_info: {
      price: 745,
      discribe: "经济舱",
    },
  },
  data9: {
    from_info: {
      hour: 7,
      minite: 5,
      place: "江北T2",
    },
    to_info: {
      hour: 9,
      minite: 40,
      place: "首都T2",
    },
    company_info: "川航3U8829 空客320(中)",
    price_info: {
      price: 933,
      discribe: "经济舱",
    },
  },
  data10: {
    from_info: {
      hour: 11,
      minite: 20,
      place: "江北T3",
    },
    to_info: {
      hour: 14,
      minite: 0,
      place: "大兴",
    },
    company_info: "厦航MF3024 空客321(中)",
    price_info: {
      price: 939,
      discribe: "经济舱",
    },
  },
}
