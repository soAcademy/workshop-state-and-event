# โจทย์ Events

1. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 1"); (onClick)

2. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 2");
   แต่ console.log ให้สร้างเป็น function ชื่อ helloWorld (onClick, function)

3. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 3"); แต่ console.log ให้สร้างเป็น function ชื่อ helloWorld และตอนเรียก onClick ให้เรียกแบบ onClick={helloWorld2} (onClick, function)

4. สร้าง Input Field ที่เมื่อกรอกค่าใดๆ แล้ว console.log ค่าที่กรอก (onChange)

5. สร้าง div ที่วาง Mouse แล้ว console.log("Hello 5"); (onMouseOver)

6. สร้าง input ที่มี placeholder ว่า "Hello" เมื่อคลิ้กที่จะ console.log("Hello 6") (onSelect)

7. สร้าง Form ที่มี 3 inputField คือ name, tel และ email โดย name เป็น required field และมีปุ่ม Submit เมื่อกด submit จะแสดงข้อมูลเป็น object {name: "ค่าที่กรอก", tel: "ค่าที่กรอก", email: "ค่าที่กรอก"}

8. สร้าง Upload image button ที่เมื่อ browse image แล้วโชว์ console.log ชื่อไฟล์

# โจทย์ States

1. สร้าง state ชื่อ title โดย มีค่าเริ่มต้น เป็น "Bin" จากนั้นสร้างปุ่ม ที่เมื่อกดแล้ว title จะเปลี่ยนเป็น "Jam" พร้อม render ค่า title ลงบน browser

2. สร้างปุ่ม Counter ที่กดแล้ว ให้บวกเลขเพิ่มทีละ 1 โดยค่าเริ่มต้นเป็น 0

3. สร้างปุ่ม Counter + - ที่ถ้ากดแล้วบวกลบเลขทีละ 1 โดยค่าเริ่มต้นคือ 10

4. สร้าง number input field ที่เมื่อกรอกค่า จะนำค่าที่แสดงมา render หน้า input ถ้ากดปุ่ม Calculate จะนำค่าที่ได้ + 7 แล้วแสดง

5. สร้าง state ชื่อว่า customer ที่เก็บข้อมูล `{name: "Bin", location: "Bangkok"}` เมื่อกดปุ่มแล้วจะเปลี่ยน ค่าเป็น `{name: "Jam", location: "Nonthaburi"}`

6. สร้าง number input fields 2 อัน คือ Number1 และ Number2 โดย เมื่อกรอกค่าไปให้ render number มาแสดง จากนั้นถ้ากดปุ่ม calculate ให้เอา Number1 + Number2

7. สร้าง ปุ่ม toggle ที่กดแล้ว ปิดเปิด component

# โจทย์ Props

1. สร้าง Component รับ props ชื่อว่า data จากนั้น render data ออก

2. สร้าง Component รับ props ชื่อว่า data1 และ data2 จากนั้น render data1 และ data2 ออกมา

3. สร้าง Counter ที่เมื่อกดปุ่ม จะส่งค่า counter ไปใน Component ผ่าน Prop (Counter กับ Render อยู่คนละ Component)

4. สร้าง 2 Component คือ Increase และ Decrease โดยส่ง counter และ setCounter ผ่าน prop เมื่อกดแต่ละปุ่ม จะ render ค่า counter ทาง root component

# โจทย์ useEffect

1. แก้ Html Title ตามใช้ข้อความ ตามจำนวน Click โดยใช้ useState และ useEffect

2. สร้างตัวแปร useState 2 ตัว คือ name และ profile โดย name มีค่าเริ่มต้น คือ Bin และ profile มีค่าเริ่มต้นคือ My name is Bin จากนั้นสร้าง input ให้กรอกชื่อ โดยจะเปลี่ยนแปลงค่า name และ profile เป็น `My name is ${name}` โดยใช้ useEffect

3. สร้างตัวแปร useState 2 ตัว คือ num และ numSquare โดย num มีค่าเริ่มต้นคือ 0 จากนั้นสร้าง input ให้กรอกตัวเลข เมื่อมีการเปลี่ยนแปลงค่า จะแสดง ค่า num และ numSquare โดย numSquare = num \* num

4. สร้าง ตัวนับเวลาถอยหลัง (Countdown Timer) โดย ลดค่าลง ทีละ 1 วินาที มีค่าเริ่มต้น 10 วินาที โดยลดค่าลงน้อยสุด 1 วินาที ห้ามติดลบ

5. ดึงข้อมูล API ผ่าน GET Method โดยใช้ axios จาก `https://api.sampleapis.com/coffee/hot` โดยดึงตั้งแต่โหลดหน้าเว็บ

6. ดึงข้อมูล API ผ่าน GET Method โดยใช้ axios จาก `https://api.sampleapis.com/coffee/hot` โดยโหลดข้อมูลเมื่อกดปุ่ม Fetch

7. สร้างปุ่ม 2 ปุ่มคือ Light 1 และ Light 2 โดยเก็บตัวแปร Boolean โดย 2 ปุ่มนี้เป็น toggle คือ true/false ถ้า light1 และ light2 เป็น true ทั้งคู่ ให้แสดงค่า เป็น "Hello" ถ้าไม่ใช่ให้แสดงค่าเป็น "Hola" โดย default ให้เป็น false ทั้งหมด

# โจทย์ Routes

1. สร้างหน้า Home และ About ทำ link

2. สร้าง หน้า Home, About, Products/product1, Product/product2 แล้วทำ link (nested route)
   / --> Home
   /about --> About
   /products/product1 --> Product1
   /products/product2 --> Product2

3. ทำ route แบบมี slug params, Product/{productId}

# โจทย์ LocalStorage

1. สร้างตัวแปร LocalStorage ชื่อว่า username และ setItem เป็น "Bin" จากนั้น เรียกค่าตัวแปรผ่าน getItem มาแสดงในหน้า browser

2. สร้างตัวแปร LocalStorage ชื่อว่า num และ setItem เป็น 14 จากนั้น เรียกค่าตัวแปรผ่าน getItem นำมาบวก 3 และนำมาแสดงในหน้า browser

3. สร้างตัวแปร LocalStorage เก็บข้อมูลประเภท Object ชื่อตัวแปรว่า `objectData`

```
const objectData = {
  name: "Bin",
  location: "Bangkok",
  age: 30,
}
```

จากนั้น render ค่าใน object

4. สร้างตัวแปร LocalStorage เก็บข้อมูลประเภท Array of Object ชื่อตัวแปรว่า `arrayData`

```
const arrayData = [
  {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  },
  {
    name: "Jam",
    location: "Nonthaburi",
    age: 25,
  },
  {
    name: "Ploy",
    location: "Sukhothai",
    age: 20,
  },
]
```

จากนั้น render ค่าใน array

# โจทย์ To Do List

1. สร้าง Text Input Field และ ปุ่ม submit จากนั้นเก็บค่าลง localStorage โดยก่อนเก็บให้ดึงค่าเก่าจาก localStorage แล้วนำข้อมูลใหม่ไปต่อเป็น array ชื่อว่า tasks

2. ดึงข้อมูลจาก localStorage ผ่าน useState และใช้ โหลดข้อมูลใหม่เมื่อกดปุ่ม submit

3. render ข้อมูล to-do-list ให้สวยงาม

4. เปลี่ยนแปลงค่าใน object ให้เก็บ id, datetime และ status ของ tasks

5. เพิ่มปุ่ม done และ delete สำหรับแต่ละ task และ update data ของ task

# โจทย์ Chart

## ติดตั้ง echarts และ echarts for react

`yarn add echarts echarts-for-react`

1. สร้าง line chart จาก ข้อมูลนี้

```
const orders = [
  {
    date: "2022-01-13",
    orderValue: 23000
  },
  {
    date: "2022-01-14",
    orderValue: 25000
  },
  {
    date: "2022-01-15",
    orderValue: 24000
  },
  {
    date: "2022-01-16",
    orderValue: 23000
  }
]
```

2. สร้าง pie chart จากข้อมูลนี้

```
const orderByProduct = [
  {
    name: "Collagen",
    orderValue: 13500
  },
  {
    name: "Serum",
    orderValue: 8500
  },
  {
    name: "Vitamin C",
    orderValue: 10200
  },
  {
    name: "Fiber",
    orderValue: 8300
  }
]
```

3. สร้าง candlestick chart จากข้อมูลต่อไปนี้

```
const stockPrices = [{
    date: "2022-01-11",
    open: 172.320007,
    high: 175.179993,
    low: 170.820007,
    close: 175.080002,
    adjClose: 174.069733,
    volume: 76138300,
  },
  {
    date: "2022-01-12",
    open: 176.119995,
    high: 177.179993,
    low: 174.820007,
    close: 175.529999,
    adjClose: 174.517136,
    volume: 74805200,
  },
  {
    date: "2022-01-13",
    open: 175.779999,
    high: 176.619995,
    low: 171.789993,
    close: 172.190002,
    adjClose: 171.196426,
    volume: 84505800,
  },
  {
    date: "2022-01-14",
    open: 171.339996,
    high: 173.779999,
    low: 171.089996,
    close: 173.070007,
    adjClose: 172.07135,
    volume: 80440800,
  },
  {
    date: "2022-01-18",
    open: 171.509995,
    high: 172.539993,
    low: 169.410004,
    close: 169.800003,
    adjClose: 168.820206,
    volume: 90956700,
  },
  {
    date: "2022-01-19",
    open: 170,
    high: 171.080002,
    low: 165.940002,
    close: 166.229996,
    adjClose: 165.270798,
    volume: 94815000,
  },
  {
    date: "2022-01-20",
    open: 166.979996,
    high: 169.679993,
    low: 164.179993,
    close: 164.509995,
    adjClose: 163.560715,
    volume: 91420500,
  },
  {
    date: "2022-01-21",
    open: 164.419998,
    high: 166.330002,
    low: 162.300003,
    close: 162.410004,
    adjClose: 161.47287,
    volume: 122848900,
  },
  {
    date: "2022-01-24",
    open: 160.020004,
    high: 162.300003,
    low: 154.699997,
    close: 161.619995,
    adjClose: 160.687378,
    volume: 162294600,
  },
  {
    date: "2022-01-25",
    open: 158.979996,
    high: 162.759995,
    low: 157.020004,
    close: 159.779999,
    adjClose: 158.858017,
    volume: 115798400,
  },
  {
    date: "2022-01-26",
    open: 163.5,
    high: 164.389999,
    low: 157.820007,
    close: 159.690002,
    adjClose: 158.768539,
    volume: 108275300,
  },
  {
    date: "2022-01-27",
    open: 162.449997,
    high: 163.839996,
    low: 158.279999,
    close: 159.220001,
    adjClose: 158.301254,
    volume: 121954600,
  },
  {
    date: "2022-01-28",
    open: 165.710007,
    high: 170.350006,
    low: 162.800003,
    close: 170.330002,
    adjClose: 169.347153,
    volume: 179935700,
  }]
```

3. ทำตาราง Dashboard โดยใช้ข้อมูลจาก https://raw.githubusercontent.com/soAcademy/dashboard-app/lesson/7-accident-page-data/src/data/thailand-death-cause.json

## Accordian FAQs

1. render FAQs จาก ข้อมูลดังต่อไปนี้ ให้สามารถ toggle ได้
```
const faqs = [
    {
      question: <>How much does it cost to use ChatGPT?</>,
      answer: <>The research preview of ChatGPT is free to use. </>,
    },
    {
      question: <>How does ChatGPT work?</>,
      answer: (
        <>
          ChatGPT is fine-tuned from GPT-3.5, a language model trained to
          produce text. ChatGPT was optimized for dialogue by using
          Reinforcement Learning with Human Feedback (RLHF) – a method that uses
          human demonstrations to guide the model toward desired behavior.
        </>
      ),
    },
    {
      question: <>Why does the AI seem so real and lifelike?</>,
      answer: (
        <>
          These models were trained on vast amounts of data from the internet
          written by humans, including conversations, so the responses it
          provides may sound human-like. It is important to keep in mind that
          this is a direct result of the system's design (i.e. maximizing the
          similarity between outputs and the dataset the models were trained on)
          and that such outputs may be inaccurate, untruthful, and otherwise
          misleading at times.
        </>
      ),
    },
    {
      question: <>Can I trust that the AI is telling me the truth?</>,
      answer: (
        <>
          <div>
            ChatGPT is not connected to the internet, and it can occasionally
            produce incorrect answers. It has limited knowledge of world and
            events after 2021 and may also occasionally produce harmful
            instructions or biased content.
          </div>
          <div>
            We'd recommend checking whether responses from the model are
            accurate or not. If you find an answer is incorrect, please provide
            that feedback by using the "Thumbs Down" button.
          </div>
        </>
      ),
    },
    {
      question: <>Who can view my conversations?</>,
      answer: (
        <>
          As part of our commitment to safe and responsible AI, we review
          conversations to improve our systems and to ensure the content
          complies with our policies and safety requirements.{" "}
        </>
      ),
    },
  ];
```

2. สร้างหน้าคำถามที่พบบ่อย ในครัวคุณบิน
```
const faqs = [
  {
    question: <>ร้านอาหารเปิดกี่โมง</>,
    answer: <>ร้านเราเปิด 12:00 - 20:00 น.</>
  },
  {
    question: <>เมนูเด็ดๆ ในร้านมีอะไรบ้าง</>,
    answer: <>เมนูแนะนำของร้านเราคือแกงส้มชะอมกุ้ง</>
  },
  {
    question: <>มีเดลิเวอรี่มั้ย</>,
    answer: <>เรามีบริการส่งผ่าน Line Man, Shopee Food และ Grab</>
  }
]
```

## Trivia Game

1. จงสร้าง Trivia Game จากข้อมูลดังต่อไปนี้

```
const quizes = [
  {
    question: "ซุปอะไรมีสารอาหารมากที่สุด",
    answers: [
      "ซุปไก่สกัด",
      "ซุปหางวัว",
      "ซุปเปอร์มาเก็ต",
      "ซุปหูฉลาม"
    ],
    answer: 2
  },
  {
    question: "เพลง แปดโมงเช้าวันอังคาร ร้องยังไง",
    answers: [
      "แปดโมงเช้าวันอังคาร",
      "รู้บ้างไหมว่าจะไป มันไม่จบแค่นั้น",
      "ประเทศไทยรวมเลือดเนื้อชาติเชื้อไทย…",
      "ไม่อยากรู้วันเวลา เช้าขึ้นมาไม่อยากเจอ"
    ],
    answer: 2
  },
  {
    question: "จะแบ่งกระทิงแดง 5 ขวดให้คน 2 คนเท่าๆ กันต้องทำไง",
    answers: [
      "แบ่งได้ คนละ 2 ขวด",
      "แบ่งได้ คนละ 2.5 ขวด",
      "แบ่งได้ คนละ 1 ขวด",
      "แบ่งไม่ได้"
    ],
    answer: 0
  },
  {
    question: "ก่อนจะถึงประเทศอาหลับ ต้องถึงประเทศอะไรก่อน",
    answers: [
      "เลบานอน",
      "อิสราเอล",
      "นิวซีแลนด์",
      "ออสเตเรีย"
    ],
    answer: 0
  },
  {
    question: "เกาะ อะไรมีเสาไฟฟ้า เยอะที่สุด",
    answers: [
      "เกาะสีชัง",
      "เกาะกลางถนน",
      "เกาะช้าง",
      "เกาะเกร็ด"
    ],
    answer: 1
  }
]
```

## Currency Converter
สร้าง App คำนวนอัตราแลกเปลี่ยนเงินตราเหมือน https://www.xe.com/currencyconverter/
โดยใช้ API ดังต่อไปนี้
1. API สำหรับดึงข้อมูลอัตราแลกเปลี่ยนเมื่อเทียบกับ USD
https://www.xe.com/api/protected/midmarket-converter/
ตอนยิง API ต้องใส่ headers `authorization` ด้วย
2. API สำหรับดึงข้อมูลสรุปอัตราแลกเปลี่ยน ย้อนหลัง 7, 30, 90 วัน
https://www.xe.com/api/protected/statistics/?from=THB&to=USD
3. API สำหรับดึงข้อมูลย้อนหลังสำหรับทำ Chart
https://www.xe.com/api/protected/charting-rates/?fromCurrency=SGD&toCurrency=GBP