const express = require("express")
const app = express()
app.get("/home", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.send(JSON.stringify(flight_info1))
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
  // data6: {
  //   from_info: {
  //     hour: ,
  //     minite: ,
  //     place: "",
  //   },
  //   to_info: {
  //     hour: ,
  //     minite: ,
  //     place: "",
  //   },
  //   company_info: "",
  //   price_info: {
  //     price: ,
  //     discribe: "",
  //   },
  // },
  // data7: {
  //   from_info: {
  //     hour: ,
  //     minite: ,
  //     place: "",
  //   },
  //   to_info: {
  //     hour: ,
  //     minite: ,
  //     place: "",
  //   },
  //   company_info: "",
  //   price_info: {
  //     price: ,
  //     discribe: "",
  //   },
  // },
}
