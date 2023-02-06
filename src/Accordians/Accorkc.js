import { useState } from "react";

const Accor2 = () => {
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
  ];

  const [toggle, setToggle] = useState(-1);
  const updateFaqToggle = (index) => {
    setToggle(toggle === index ? -1 : index);
  };

  return (
    <>
    {faqs?.map((faq, index) => (
      <div 
      key={index}
      className="py-4 cursor-pointer"
      onClick={() => updateFaqToggle(index)}
      >
        <div className="bg-red-400" >
        {index + 1}##{faq.question}
        </div>
        {toggle === index && <div className="bg-pink-200">{faq.answer}</div>}
      </div>
    ))}
    </>
  )
}
export default Accor2;