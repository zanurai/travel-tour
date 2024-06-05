import { Collapse } from "react-collapse";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ACCORDION } from "./Data";

interface AccodionItemProps {
  open: boolean;
  question: string;
  answer: string;
  toggle: () => void;
}
const Accordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <div>
      <h4 className="text-secondary regular-20">FAQ</h4>
      <h3 className="bold-44 max-w-96">Frquently Asked Questions</h3>
      <div className="pt-6 max-w-[800px]">
        {ACCORDION.map((item, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            question={item.question}
            answer={item.answer}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
};
const AccordionItem = ({
  open,
  toggle,
  question,
  answer,
}: AccodionItemProps) => {
  return (
    <div className="pt-3">
      <div>
        <div
          onClick={toggle}
          className={`px-3 py-4 medium-16 flex items-center gap-x-4 cursor-pointer ${
            open ? "bg-secondary text-white" : ""
          }`}
        >
          {open ? <FaMinus /> : <FaPlus />}
          <h4 >{question}</h4>
        </div>
        <Collapse isOpened={open}>
          <p className="p-4">{answer}</p>
        </Collapse>
      </div>
    </div>
  );
};
export default Accordion;
