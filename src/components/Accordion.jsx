import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum enimperferendis dolorem corporis magnam quo nisi officiis? Nisi, ullam!",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum enimperferendis dolorem corporis magnam quo nisi officiis? Nisi, ullam!",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum enimperferendis dolorem corporis magnam quo nisi officiis? Nisi, ullam!",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} setOpen={setOpen} open={open}>
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open, children }) {
  const isOpen = item.id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => setOpen(item.id === open ? null : item.id)}>
        <div>{item.title}</div>
        <ChevronDownIcon
          style={{
            width: "1.2rem",
            transition: "all 0.2s ease-out",
            rotate: isOpen ? "180deg" : "0deg",
          }}
        />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}
