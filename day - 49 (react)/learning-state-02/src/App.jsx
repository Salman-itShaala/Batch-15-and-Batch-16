import "./App.css";
import Faq from "./components/Faq";
import Tabs from "./components/Tabs";

function App() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund or exchange.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking number sent to your email after purchase.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary by location.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Once an order is placed, it cannot be modified. However, you can cancel it within 1 hour of placing the order by contacting customer service.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team by email at support@example.com or through our live chat on the website.",
    },
  ];

  return (
    <>
      {/* <Tabs /> */}

      {faqs.map((faq) => {
        return <Faq question={faq.question} answer={faq.answer} />;
      })}
    </>
  );
}

export default App;
